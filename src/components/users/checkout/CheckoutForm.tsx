import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import {
  cleargetAddressState,
  getAddressThunk,
} from "../../../features/address/address";
import {
  clearCrudAddressState,
  deleteAddressThunk,
} from "../../../features/address/crudaddress";
import { toast } from "react-toastify";
import { addOrderThunk } from "../../../features/order/crudOrder";

interface CheckoutFormProps {
  cartId: string;
  totalPrice: number;
}

const CheckoutForm = ({ cartId, totalPrice }: CheckoutFormProps) => {
  const [paymentType, setPaymentType] = useState("");
  const [addressId, setAddressId] = useState("");

  const { addresses } = useAppSelector((state) => state.getAddressAction);

  console.log(addresses[0]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(cleargetAddressState());
    dispatch(getAddressThunk());
  }, []);

  function handleDeleteAddress(id: string) {
    dispatch(clearCrudAddressState());
    dispatch(deleteAddressThunk(id));
  }

  function handleCheckout(e: any) {
    e.preventDefault();

    if (addressId === "") {
      toast.warn("Please Select or Add an Address.");
      return;
    }
    if (paymentType === "") {
      toast.warn("Please Select Payment Type.");
      return;
    }

    let data = {
      cart_id: cartId,
      address_id: addressId,
      payment_type: paymentType,
      payment_status: paymentType === "card" ? true : false,
      is_delivered: false,
      total: totalPrice,
    };

    dispatch(addOrderThunk(data)).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("Some Error Ocurred. Please Try Again.");
        return;
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error");
        return;
      }
      toast.success("Placed Order Successfully.");
      navigate("/");
    });
  }

  return (
    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
        <form className="space-y-4" onSubmit={handleCheckout}>
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
            {addresses !== undefined && addresses[0] !== undefined ? (
              addresses?.map((el) => {
                return (
                  <div className="mt-4">
                    <div className="flex justify-end items-center">
                      <Link to={`/edit/address/${el?._id}`}>
                        <button className="px-2 py-1 text-sm font-medium tracking-wide capitalize">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="px-2 py-1 text-sm font-medium text-red-500 tracking-wide capitalize"
                        onClick={() => handleDeleteAddress(el?._id)}
                      >
                        Delete
                      </button>
                    </div>
                    <input
                      className="peer sr-only"
                      id={el?.address_type}
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value={el?._id}
                      onChange={(e) => setAddressId(e.target.value)}
                    />
                    <label
                      htmlFor={el?.address_type}
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
              <small className="text-gray-500">
                No address here. Please add a delivery address
              </small>
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
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
