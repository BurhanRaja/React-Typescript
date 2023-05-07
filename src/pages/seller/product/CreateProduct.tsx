import { useEffect, useState } from "react";
import InfoDisplay from "../../../components/seller/dashboard/product/InfoDisplay";
import InfoInput from "../../../components/seller/dashboard/product/InfoInput";
import SelectDropdown from "../../../components/seller/dashboard/product/SelectDropdown";
import { getCategoryThunk } from "../../../features/categories/category";
import { getParentCatThunk } from "../../../features/categories/parentCategory";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import { getSubCatThunk } from "../../../features/categories/subcategory";
import {
  addProductThunk,
  clearProductState,
} from "../../../features/product/seller/crudProduct";
import { toast } from "react-toastify";
import {
  clearImagesInfo,
  deleteImageInfo,
} from "../../../features/product/seller/productImagesInfo";
import RichEditor from "../../../components/seller/dashboard/RichEditor";
import { getSellerInfoThunk } from "../../../features/seller/sellerInfo";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  // Error Msg
  const [errorMsg, setErrorMsg] = useState("");

  const disptach = useAppDispatch();

  const { categories } = useAppSelector((state) => state.categoriesAction);
  const { subCategories } = useAppSelector((state) => state.subCategoryAction);
  const { images_info, count } = useAppSelector((state) => state.imagesInfo);

  const { sellerInfo } = useAppSelector((state) => state.getSellerinfoAction);

  // Add Product
  const { isSuccess } = useAppSelector((state) => state.crudProductAction);

  // Get Sub-category
  function handleSubCat(catId: string) {
    disptach(getSubCatThunk(catId));
  }

  useEffect(() => {
    disptach(getSellerInfoThunk()).then((data: any) =>
      disptach(getCategoryThunk(data?.payload?.info?.company_type))
    );
  }, []);

  // Handle Submit Product
  function handleSubmit(e: any) {
    e.preventDefault();

    if (
      name === "" ||
      description === "" ||
      thumbnail === "" ||
      category === "" ||
      !images_info
    ) {
      setErrorMsg("Please fill the above field.");
      return;
    }

    let data = {
      name,
      description,
      thumbnail,
      parent_category_id: sellerInfo?.company_type,
      category_id: category,
      sub_category_id: subcategory,
      images_info,
    };

    disptach(addProductThunk(data)).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("User Already Exists.");
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error");
      }
      toast.success("Successfully Product Created");
      setName("");
      setDescription("");
      setThumbnail("");
      setCategory("");
      setSubcategory("");

      disptach(clearImagesInfo());
      disptach(clearProductState());
      return;
    });
  }

  return (
    <div className="p-10 bg-slate-200">
      <div className="bg-white p-8 rounded-md">
        <div className="mb-5">
          <h2 className="text-3xl font-bold">Add Product</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name of the Product
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <small
              className={
                errorMsg && name.length === 0 ? "text-red-500" : "hidden"
              }
            >
              {errorMsg}
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="color" className="leading-7 text-sm text-gray-600">
              Description
            </label>
            <RichEditor
              val={description}
              setVal={(val) => setDescription(val)}
            />
            {/* <textarea
              className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea> */}
            <small
              className={
                errorMsg && description.length === 0 ? "text-red-500" : "hidden"
              }
            >
              {errorMsg}
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="thumbnail" className="block text-sm text-black">
              Add Thumbnail
            </label>
            {/* <input
            type="file"
            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          /> */}
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
            <small
              className={
                errorMsg && thumbnail.length === 0 ? "text-red-500" : "hidden"
              }
            >
              {errorMsg}
            </small>
          </div>

          <div className="mb-3">
            <SelectDropdown
              title={"Category"}
              mappeddata={
                <>
                  <option
                    selected
                    value={""}
                    className="font-bold text-gray-400"
                  >
                    Please select Parent Category
                  </option>
                  {categories?.map((el) => {
                    return (
                      <option key={el._id} value={el._id}>
                        {el.name}
                      </option>
                    );
                  })}
                </>
              }
              handleChange={(val) => handleSubCat(val)}
              setId={(val) => setCategory(val)}
              val={category}
            />
            <small
              className={
                errorMsg && category.length === 0 ? "text-red-500" : "hidden"
              }
            >
              {errorMsg}
            </small>
          </div>
          <div className="mb-3">
            <SelectDropdown
              title={"Sub-Category"}
              mappeddata={
                <>
                  <option
                    selected
                    value={""}
                    className="font-bold text-gray-400"
                  >
                    Please select Parent Category
                  </option>
                  {subCategories?.map((el) => {
                    return (
                      <option key={el._id} value={el._id}>
                        {el.name}
                      </option>
                    );
                  })}
                </>
              }
              handleChange={() => {}}
              setId={(val) => setSubcategory(val)}
              val={subcategory}
            />
            <small
              className={
                errorMsg && subcategory.length === 0 ? "text-red-500" : "hidden"
              }
            >
              {errorMsg}
            </small>
          </div>

          <InfoDisplay
            imagesInfo={count > 0 ? images_info : []}
            deleteInfo={(val) => disptach(deleteImageInfo(val))}
            count={count}
          />

          <InfoInput />

          <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
