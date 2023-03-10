import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="text-5xl font-bold text-start p-10 px-10">
        <p>Your Cart</p>
      </div>
      <div className="flex justify-center w-[100%] mb-10">
        <div className="flex flex-col w-[80%] p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-900">
          <ul className="flex flex-col divide-y divide-gray-700">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        Polaroid camera
                      </h3>
                      <p className="text-sm dark:text-gray-400">Classic</p>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="text-right">
                        <p className="text-lg font-semibold">59.99€</p>
                        <p className="text-sm line-through dark:text-gray-600">
                          75.50€
                        </p>
                      </div>
                      <div className="flex items-center border-gray-200 py-2 ml-5">
                        <span className="ml-auto text-gray-900">
                          <button
                            className="px-2 pb-1 bg-gray-300 hover:bg-gray-400 text-lg rounded-l-md"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            +
                          </button>
                          <span className="px-2 p-1 border-t border-b">
                            {quantity}
                          </span>
                          <button
                            className="px-2 pb-1 bg-gray-300 hover:bg-gray-400 text-lg rounded-r-md"
                            onClick={() =>
                              quantity > 1 && setQuantity(quantity - 1)
                            }
                          >
                            -
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-600"
                    >
                      <RiDeleteBin6Line />
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <AiOutlineHeart />
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                  alt="Replica headphones"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        Replica headphones
                      </h3>
                      <p className="text-sm dark:text-gray-400">White</p>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="text-right">
                        <p className="text-lg font-semibold">99.95€</p>
                        <p className="text-sm line-through dark:text-gray-600">
                          150€
                        </p>
                      </div>
                      <div className="flex items-center border-gray-200 py-2 ml-5">
                        <span className="ml-auto text-gray-900">
                          <button
                            className="px-2 pb-1 bg-gray-300 hover:bg-gray-400 text-lg rounded-l-md"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            +
                          </button>
                          <span className="px-2 p-1 border-t border-b">
                            {quantity}
                          </span>
                          <button
                            className="px-2 pb-1 bg-gray-300 hover:bg-gray-400 text-lg rounded-r-md"
                            onClick={() =>
                              quantity > 1 && setQuantity(quantity - 1)
                            }
                          >
                            -
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-600"
                    >
                      <RiDeleteBin6Line />
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <AiOutlineHeart />
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src="https://images.unsplash.com/phodark:to-1594549181132-9045fed330ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                  alt="Set of travel chargers"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        Set of travel chargers
                      </h3>
                      <p className="text-sm dark:text-gray-400">Black</p>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="text-right">
                        <p className="text-lg font-semibold">8.99€</p>
                        <p className="text-sm line-through dark:text-gray-600">
                          15.99€
                        </p>
                      </div>
                      <div className="flex items-center border-gray-200 py-2 ml-5">
                        <span className="ml-auto text-gray-900">
                          <button
                            className="px-2 pb-1 bg-gray-300 hover:bg-gray-400 text-lg rounded-l-md"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            +
                          </button>
                          <span className="px-2 p-1 border-t border-b">
                            {quantity}
                          </span>
                          <button
                            className="px-2 pb-1 bg-gray-300 hover:bg-gray-400 text-lg rounded-r-md"
                            onClick={() =>
                              quantity > 1 && setQuantity(quantity - 1)
                            }
                          >
                            -
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-600"
                    >
                      <RiDeleteBin6Line />
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <AiOutlineHeart />
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="space-y-1 text-right">
            <p className="font-bold text-2xl">
              Total amount:
              <span className="font-extrabold ml-2">357 €</span>
            </p>
            <p className="text-sm dark:text-gray-400">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-gray-400"
            >
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
            <button
              type="button"
              className="px-6 py-2 border rounded-md bg-black text-white"
            >
              <span className="sr-only sm:not-sr-only">Continue to</span>
              Checkout
            </button>
          </div>
        </div>
        {/* <Summary /> */}
      </div>
    </>
  );
};

export default Cart;
