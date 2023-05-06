import { useEffect, useState } from "react";
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { FiChevronDown } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  clearAllDiscountState,
  getAllDiscountThunk,
} from "../../../features/discount/allDiscount";

const DiscountListing = () => {
  const { discounts } = useAppSelector((state) => state.allDiscountAction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearAllDiscountState());
    dispatch(getAllDiscountThunk());
  }, []);

  console.log(discounts);

  const [dropDown, setDropDown] = useState(0);
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <div className="rounded-lg border border-gray-200 shadow-md w-[95%] mx-auto mt-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Discount Percentage
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Description
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              No. of Discounted Products
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Status
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {discounts?.map((el: any, index: any) => {
            return (
              <tr key={el?._id}>
                <td className="px-4 py-4 w-52">
                  <p className="font-bold">{el?.discount_percentage}%</p>
                </td>
                <td className="px-4 py-4 w-52">
                  <p>{el?.description}</p>
                </td>
                <td className="px-4 py-4 w-52">
                  <p>{el?.products?.length}</p>
                </td>
                <td className="px-4 py-4 w-52">
                  {" "}
                  {el?.is_active ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[0.6rem] font-semibold text-green-600">
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[0.6rem] font-semibold text-red-600">
                      UnActive
                    </span>
                  )}
                </td>
                <td className="px-4 py-4 w-52">
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
                        <Link to={`/seller/discount/${el?._id}`}>
                          <button
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-gray-50"
                            role="menuitem"
                          >
                            <AiFillEye />
                            Discount Details
                          </button>
                        </Link>
                        <Link to={`/seller/edit/discount/${el?._id}`}>
                          <button
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-gray-50"
                            role="menuitem"
                          >
                            <BiEditAlt />
                            Edit Discount
                          </button>
                        </Link>
                        <button
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          role="menuitem"
                        >
                          Mark as Inactive
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
  );
};

export default DiscountListing;
