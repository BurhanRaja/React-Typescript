import { useEffect, useState } from "react";
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { getAllSellerProductsThunk } from "../../../features/product/seller/allProducts";
import { FiChevronDown } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { clearSingleProduct } from "../../../features/product/singleProduct";

const ProductListing = () => {
  const { products, isSuccess } = useAppSelector(
    (state) => state.sellerProducts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearSingleProduct());
    dispatch(getAllSellerProductsThunk());
  }, []);

  const [dropDown, setDropDown] = useState(0);
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <>
      <div className="rounded-lg border border-gray-200 shadow-md w-[98%] mx-auto mt-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Thumnail
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Categories Info
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Prices
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Sizes/Product Type
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Colors
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Total Quantity
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Actions
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {isSuccess &&
              products?.map((el: any, index: any) => {
                return (
                  <tr key={el._id}>
                    {/* Thumbnail */}
                    <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <img
                        className="rounded-sm object-cover object-center"
                        src={el?.thumbnail}
                        alt=""
                        width={"30"}
                      />
                    </td>
                    {/* Name */}
                    <td className="px-4 py-4 w-52">
                      <p>{el?.name?.substr(0, 30)}...</p>
                    </td>
                    {/* Category */}
                    <td className="px-4 py-4">
                      <p className="text-xs mb-2">
                        PC:{" "}
                        <span className="text-xs font-bold">
                          {el?.parent_category?.name}
                        </span>
                      </p>
                      <p className="text-xs mb-2">
                        C:{" "}
                        <span className="text-xs font-bold">
                          {el?.category?.name}
                        </span>
                      </p>
                      <p className="text-xs mb-2">
                        SC:{" "}
                        <span className="text-xs font-bold">
                          {el?.sub_category?.name}
                        </span>
                      </p>
                    </td>
                    {/* Prices */}
                    <td className="px-4 py-4 w-24">
                      <p className="text-xs mb-2">
                        Avg:{" "}
                        <span className="text-xs font-bold">
                          {el?.price_avg}
                        </span>
                      </p>
                      <p className="text-xs mb-2">
                        Min:{" "}
                        <span className="text-xs font-bold">
                          {el?.price_min}
                        </span>
                      </p>
                      <p className="text-xs mb-2">
                        Max:{" "}
                        <span className="text-xs font-bold">
                          {el?.price_max}
                        </span>
                      </p>
                    </td>
                    {/* Sizes */}
                    <td className="px-6 py-4 w-52">
                      <div className="flex gap-2 flex-wrap">
                        {el?.sizes?.map((size: string) => {
                          return (
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[0.6rem] font-semibold text-blue-600">
                              {size}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    {/* Colors */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2 flex-wrap">
                        {el?.colors?.map((color: string) => {
                          return (
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                              {color}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    {/* Total Quantity */}
                    <td className="px-6 py-4">{el?.quantity}</td>

                    {/* Action Button */}
                    <td className="px-6 py-4">
                      <div className="relative">
                        <div className="inline-flex items-center divide-x divide-gray-100 overflow-hidden rounded-md border bg-white">
                          <a
                            href="#"
                            className="px-4 py-2 text-sm leading-none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                          >
                            Action
                          </a>

                          <button
                            className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                            onClick={() => {
                              setOpenDropDown(!openDropDown);
                              setDropDown(index + 1);
                            }}
                          >
                            <span className="sr-only">Menu</span>
                            <FiChevronDown />
                          </button>
                        </div>

                        <div
                          className={`absolute right-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg transition-all duration-150 ${
                            dropDown === index + 1 && openDropDown
                              ? "opacity-100 block"
                              : "opacity-0 hidden"
                          }`}
                          role="menu"
                        >
                          <div className="p-2">
                            <Link to={`/seller/product/${el?._id}`}>
                              <button
                                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-gray-50"
                                role="menuitem"
                              >
                                <AiFillEye />
                                Product Details
                              </button>
                            </Link>
                            <Link to={`/seller/edit/product/${el?._id}`}>
                              <button
                                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-gray-50"
                                role="menuitem"
                              >
                                <BiEditAlt />
                                Edit Product
                              </button>
                            </Link>
                            <button
                              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                              role="menuitem"
                            >
                              <RiDeleteBin6Line />
                              Delete Product
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductListing;
