import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { getAddressThunk } from "../../../features/address/address";

interface CheckoutFormProps {
  cartId: string;
}

const CheckoutForm = ({ cartId }: CheckoutFormProps) => {
  const [paymentType, setPaymentType] = useState("");
  const [addressId, setAddressId] = useState("");

  const { addresses } = useAppSelector((state) => state.getAddressAction);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAddressThunk());
  }, []);

  function handleDeleteAddress(id: string) {
    
  }

  return (
    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
        <form className="space-y-4">
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-700">
                Delivery Address
              </p>
              <Link to="/add/address">
                <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Add Address
                </button>
              </Link>
            </div>
            {addresses !== undefined ? (
              addresses?.map((el) => {
                return (
                  <div className="mt-4">
                    <div className="flex justify-end items-center">
                      <button className="px-2 py-1 text-sm font-medium tracking-wide capitalize">
                        Edit
                      </button>
                      <button className="px-2 py-1 text-sm font-medium text-red-500 tracking-wide capitalize" onClick={() => handleDeleteAddress(el?._id)}>
                        Delete
                      </button>
                    </div>
                    <input
                      className="peer sr-only"
                      id="option1"
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value={el?._id}
                      onChange={(e) => setAddressId(e.target.value)}
                    />
                    <label
                      htmlFor="option1"
                      className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabIndex={0}
                    >
                      <span className="text-sm font-medium">
                        {" "}
                        {el?.address_type}{" "}
                      </span>
                      <p className="text-sm">
                        {" "}
                        {el?.address_line_1 +
                          ", " +
                          el?.address_line_2 +
                          ", " +
                          el?.country}{" "}
                      </p>
                    </label>
                  </div>
                );
              })
            ) : (
              <small className="text-gray-500">No Address Added</small>
            )}
          </div>

          <div className="payment-option">
            <div className="inline-flex items-center mr-4">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="blue"
              >
                <input
                  id="blue"
                  name="color"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                  value="card"
                  checked={paymentType === "card"}
                  onChange={(e) => setPaymentType(e.target.value)}
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              Pay By Card
            </div>

            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="blue"
              >
                <input
                  id="blue"
                  name="color"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                  value="cash"
                  checked={paymentType === "cash"}
                  onChange={(e) => setPaymentType(e.target.value)}
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              Cash On Delievery
            </div>
          </div>

          {paymentType === "card" && (
            <fieldset className="col-span-6">
              <legend className="block text-sm font-medium text-gray-700">
                Card Details
              </legend>
              <div className="mt-1 rounded-md bg-white shadow-sm">
                <div>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex mt-3">
                  <div className="flex-1 mr-2">
                    <input
                      type="text"
                      id="Card Expiry"
                      placeholder="Expiry Date"
                      className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1">
                    <input
                      type="text"
                      id="CardCVV"
                      placeholder="CVV"
                      className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          )}

          <div className="col-span-6">
            <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
              Proceed Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
