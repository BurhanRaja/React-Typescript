import { BsCheckLg } from "react-icons/bs";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { getAllSellerProductsThunk } from "../../features/product/seller/allProducts";
import { addDiscountThunk } from "../../features/discount/crudDiscount";
import { toast } from "react-toastify";

const AddDiscount = () => {
  const { products } = useAppSelector((state) => state.sellerProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllSellerProductsThunk());
  }, []);

  const [selectedProducts, setSelectedProducts] = useState<Array<any>>([]);
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [discountDesc, setDiscountDesc] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  function handleSelectedProducts(e: any) {
    let isChecked = e.target.checked;

    if (isChecked) {
      setSelectedProducts([...selectedProducts, e.target.value]);
    } else {
      const filteredArr = selectedProducts.filter(
        (el) => el !== e.target.value
      );
      setSelectedProducts(filteredArr);
    }
  }

  function handleAddDiscount(e: any) {
    e.preventDefault();

    if (
      discountDesc === "" ||
      discountPercentage === "" ||
      selectedProducts.length === 0
    ) {
      setErrorMsg("Please enter the fields.");
      return;
    }

    let data = {
      description: discountDesc,
      discount_percentage: discountPercentage,
      is_active: true,
      products: selectedProducts,
    };

    dispatch(addDiscountThunk(data)).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("User Already Exists.");
        return;
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error");
        return;
      }
      toast.success("Discount successfully added.");
      return;
    });

    setDiscountDesc("");
    setDiscountPercentage("");
    setSelectedProducts([]);
  }

  return (
    <>
      <div className="p-10 bg-slate-200 h-[100%]">
        <div className="bg-white p-8 rounded-md">
          <div className="mb-5">
            <h2 className="text-3xl font-bold">Add Discount</h2>
          </div>
          <form onSubmit={handleAddDiscount}>
            <div className="mb-3">
              <label
                htmlFor="color"
                className="leading-7 text-sm text-gray-600"
              >
                Discount Percentage
              </label>
              <input
                type="number"
                id="color"
                name="color"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
              />
              {errorMsg && discountPercentage === "" ? (
                <small className="text-red-500">{errorMsg}</small>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="color"
                className="leading-7 text-sm text-gray-600"
              >
                Description
              </label>
              <textarea
                className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                value={discountDesc}
                onChange={(e) => setDiscountDesc(e.target.value)}
              ></textarea>
              {errorMsg && discountDesc === "" ? (
                <small className="text-red-500">{errorMsg}</small>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <p className="leading-7 text-lg text-gray-800 font-semibold mb-3 mt-5">
                Choose Products on which you need to apply
              </p>
              {errorMsg && selectedProducts.length === 0 ? (
                <small className="text-red-500">{errorMsg}</small>
              ) : (
                ""
              )}
              {products?.map((el: any) => {
                return (
                  <>
                    <input
                      className="peer sr-only"
                      id={el?._id}
                      type="checkbox"
                      tabIndex={-1}
                      name="products"
                      value={el?._id}
                      onChange={handleSelectedProducts}
                    />
                    <label
                      htmlFor={el?._id}
                      className={`block w-full rounded-lg border ${
                        selectedProducts?.includes(el?._id)
                          ? "border-green-600"
                          : ""
                      } p-3 mb-2 relative`}
                    >
                      {selectedProducts?.includes(el?._id) && (
                        <button className="bg-green-600 text-white p-2 rounded-full absolute top-[-20px] right-0">
                          <BsCheckLg className="" />
                        </button>
                      )}
                      <span className="text-sm font-medium">
                        <div className="flex justify-start">
                          <img
                            src={el?.thumbnail}
                            alt="productimg"
                            width={100}
                            height={100}
                          />
                          <div className="w-[85%] ml-10">
                            <h3 className="text-xl font-bold">{el?.name}</h3>
                            <p>
                              <b>Price:</b> ₹ {el?.price_avg}
                            </p>
                          </div>
                        </div>
                      </span>
                    </label>
                  </>
                );
              })}
            </div>
            <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
              Add Discount
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDiscount;
