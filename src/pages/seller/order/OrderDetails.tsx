import { useEffect } from "react";
import useAppSsellerorderector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import {
  clearSingleSellerOrderState,
  getSingleSellerOrderThunk,
} from "../../../features/sellerorder/singleSellerOrder";
import { useParams } from "react-router";

const OrderDetails = () => {
  const { id } = useParams();

  const { sellerorder } = useAppSsellerorderector(
    (state) => state.singleSellerOrderAction
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearSingleSellerOrderState());
    dispatch(getSingleSellerOrderThunk(id));
  }, []);

  console.log(sellerorder.product);

  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Order #{sellerorder?._id}
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">{}</p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>
              <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full"
                    src={sellerorder?.product?.product_info?.thumbnail}
                    alt="dress"
                  />
                </div>
                <div className="bssellerorderlerorder-b bssellerorderlerorder-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                      {sellerorder?.product?.product?.name}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      {sellerorder?.product?.product_info?.info_type && (
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300">Info Type: </span>{" "}
                          {sellerorder?.product?.product_info?.info_type}
                        </p>
                      )}
                      {sellerorder?.product?.product_info?.size && (
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300">Size: </span>{" "}
                          {sellerorder?.product?.product_info?.size}
                        </p>
                      )}
                      {sellerorder?.product?.product_info?.color && (
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-500">Color: </span>{" "}
                          {sellerorder?.product?.product_info?.color}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                      <span className="text-gray-500">Price: </span>₹
                      {sellerorder?.product?.price}{" "}
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      <span className="text-gray-500">Qty: </span>
                      {sellerorder?.product?.quantity}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-1 flex justify-center w-[100%]">
                <div>
                  <p className="font-bold text-2xl">Shipping Address:</p>
                  <p className="text-sm dark:text-gray-400 mt-4">
                    <span className="text-gray-500 font-bold">
                      {sellerorder?.address?.address_type}:{" "}
                    </span>
                  </p>
                  <p>{sellerorder?.address?.address_line_1}</p>
                  <p>{sellerorder?.address?.address_line_2}</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
