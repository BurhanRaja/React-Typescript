import { useEffect, useState } from "react";
import InfoDisplay from "../../components/seller/dashboard/product/InfoDisplay";
import InfoInput from "../../components/seller/dashboard/product/InfoInput";
import SelectDropdown from "../../components/seller/dashboard/product/SelectDropdown";
import { getCategoryThunk } from "../../features/categories/category";
import { getParentCatThunk } from "../../features/categories/parentCategory";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { getSubCatThunk } from "../../features/categories/subcategory";
import { addProductThunk } from "../../features/product/seller/addProduct";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [parentCatId, setParentCatId] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const disptach = useAppDispatch();

  const { pCategories } = useAppSelector((state) => state.pCategoriesAction);
  const { categories } = useAppSelector((state) => state.categoriesAction);
  const { subCategories } = useAppSelector((state) => state.subCategoryAction);
  const {images_info} = useAppSelector((state) => state.imagesInfo);

  function handleCat(parentId: string) {
    disptach(getCategoryThunk(parentId));
  }

  function handleSubCat(catId: string) {
    disptach(getSubCatThunk(catId));
  }

  useEffect(() => {
    disptach(getParentCatThunk());
  }, []);


  function handleSubmit(e: any) {
    e.preventDefault();

    let data = {
      name,
      description,
      thumbnail,
      parent_category_id: parentCatId,
      category_id: category,
      sub_category_id: subcategory,
      images_info
    }

    disptach(addProductThunk(data));
    return;
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
          </div>
          <div className="mb-3">
            <label htmlFor="color" className="leading-7 text-sm text-gray-600">
              Description
            </label>
            <textarea
              className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
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
          </div>

          <div className="mb-3">
            <SelectDropdown
              title={"Parent Category"}
              mappeddata={
                <>
                  <option
                    selected
                    value={""}
                    className="font-bold text-gray-400"
                  >
                    Please select Parent Category
                  </option>
                  {pCategories?.map((el) => {
                    return <option key={el._id} value={el._id}>{el.name}</option>;
                  })}
                </>
              }
              handleChange={(val) => handleCat(val)}
              setId={(val) => setParentCatId(val)}
            />
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
                    return <option key={el._id} value={el._id}>{el.name}</option>;
                  })}
                </>
              }
              handleChange={(val) => handleSubCat(val)}
              setId={(val) => setCategory(val)}
            />
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
                    return <option key={el._id} value={el._id}>{el.name}</option>;
                  })}
                </>
              }
              handleChange={() => {}}
              setId={(val) => setSubcategory(val)}
            />
          </div>

          <InfoDisplay />

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
