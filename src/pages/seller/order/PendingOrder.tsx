import { useState } from "react";
import {
  clearAllSellerOrderState,
  getAllSellerOrderThunk,
} from "../../../features/sellerorder/allSellerOrder";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const PendingOrder = () => {
  const { sellerorders } = useAppSelector(
    (state) => state.allSellerOrdersAction
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearAllSellerOrderState());
    dispatch(getAllSellerOrderThunk());
  }, []);

  

  const [dropDown, setDropDown] = useState(false);

  return (
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
              Price
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Size
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Product Type
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Color
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
          {sellerorders?.products?.map((el: any) => (
            <tr key={el?._id}>
              <td className="px-6 py-4">
                <img
                  src={el?.item?.product_info?.thumbnail}
                  alt={""}
                  width={100}
                />
              </td>
              <td className="px-6 py-4">
                <p>{el?.item?.product?.name}</p>
              </td>
              <td className="px-6 py-4">
                <p>₹{el?.item?.price}</p>
              </td>
              <td className="px-6 py-4">
                <p>
                  {el?.item?.product_info?.size
                    ? el?.item?.product_info?.size
                    : "-"}
                </p>
              </td>
              <td className="px-6 py-4">
                <p>
                  {el?.item?.product_info?.info_type
                    ? el?.item?.product_info?.info_type
                    : "-"}
                </p>
              </td>
              <td className="px-6 py-4">
                <p>
                  {el?.item?.product_info?.color
                    ? el?.item?.product_info?.color
                    : "-"}
                </p>
              </td>
              <td className="px-6 py-4">
                <p>{el?.item?.quantity}</p>
              </td>
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
                      onClick={() => setDropDown(!dropDown)}
                    >
                      <span className="sr-only">Menu</span>
                      <FiChevronDown />
                    </button>
                  </div>

                  <div
                    className={`absolute right-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg transition-all duration-150 ${
                      dropDown ? "opacity-100 block" : "opacity-0 hidden"
                    }`}
                    role="menu"
                  >
                    <div className="p-2">
                      <Link to={`/seller/order/${el?._id}`}>
                        <button
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-gray-50"
                          role="menuitem"
                        >
                          <AiFillEye />
                          Order Details
                        </button>
                      </Link>
                      <button
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-gray-50"
                        role="menuitem"
                      >Mark as Complete</button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrder;
