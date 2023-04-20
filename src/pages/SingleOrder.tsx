import { useEffect } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { useParams } from "react-router";
import {
  clearSingleOrderState,
  getSingleOrderThunk,
} from "../features/order/singleOrder";

const SingleOrder = () => {
  const { id } = useParams();

  const { order } = useAppSelector((state) => state.singleorderAction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearSingleOrderState());
    dispatch(getSingleOrderThunk(id));
  }, []);

  console.log(order);

  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Order #{order?._id}
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">{}</p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>
              {order?.cart?.cartItems?.map((el: any) => {
                return (
                  <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                    <div className="pb-4 md:pb-8 w-full md:w-40">
                      <img
                        className="w-full"
                        src={el?.product_info?.thumbnail}
                        alt="dress"
                      />
                    </div>
                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                      <div className="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                          {el?.product?.name}
                        </h3>
                        <div className="flex justify-start items-start flex-col space-y-2">
                          {el?.product_info?.info_type && (
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-300">Info Type: </span>{" "}
                              {el?.product_info?.info_type}
                            </p>
                          )}
                          {el?.product_info?.size && (
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-300">Size: </span>{" "}
                              {el?.product_info?.size}
                            </p>
                          )}
                          {el?.product_info?.color && (
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-500">Color: </span>{" "}
                              {el?.product_info?.color}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between space-x-8 items-start w-full">
                        <p className="text-base xl:text-lg leading-6">
                          <span className="text-gray-500">Price: </span>₹
                          {el?.price}{" "}
                        </p>
                        <p className="text-base xl:text-lg leading-6 text-gray-800">
                          <span className="text-gray-500">Qty: </span>
                          {el?.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="space-y-1 flex justify-between w-[100%]">
                <div>
                  <p className="font-bold text-2xl">Shipping Address:</p>
                  <p className="text-sm dark:text-gray-400 mt-4">
                    <span className="text-gray-500 font-bold">
                      {order?.address?.address_type}:{" "}
                    </span>
                    {order?.address?.address_line_1 +
                      ", " +
                      order?.address?.address_line_2}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-2xl">
                    Total amount:
                    <span className="font-extrabold ml-2">
                      ₹ {order?.total}
                    </span>
                  </p>
                  <p className="text-sm dark:text-gray-400">
                    Not including taxes and shipping costs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleOrder;
