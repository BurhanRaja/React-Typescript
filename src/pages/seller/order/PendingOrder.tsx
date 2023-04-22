import { getAllOrderThunk } from "../../../features/order/allOrders";
import {
  clearAllSellerOrderState,
  getAllSellerOrderThunk,
} from "../../../features/sellerorder/allSellerOrder";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import { useEffect } from "react";

const PendingOrder = () => {
  const { sellerorders } = useAppSelector(
    (state) => state.allSellerOrdersAction
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearAllSellerOrderState());
    dispatch(getAllSellerOrderThunk());
  }, []);

  console.log(sellerorders);

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
        <tbody className="divide-y divide-gray-100 border-t border-gray-100"></tbody>
      </table>
    </div>
  );
};

export default PendingOrder;
