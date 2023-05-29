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
import {
  addOrderThunk,
  clearCrudOrderState,
} from "../../../features/order/crudOrder";
// import { RiVisaFill, RiMastercardFill } from "react-icons/ri";
// import {
//   clearAllCardState,
//   getAllCardsThunk,
// } from "../../../features/user/allcards";
import {
  addPaymentOrdersThunk,
  clearPaymentState,
  verifyPaymentOrdersThunk,
} from "../../../features/user/payments";
// import { addCardsThunk } from "../../../features/user/crudcards";
import Modal from "../Modal";
import useRazorpay from "react-razorpay";

interface CheckoutFormProps {
  cartId: string;
  totalPrice: number;
}

const CheckoutForm = ({ cartId, totalPrice }: CheckoutFormProps) => {
  const [paymentType, setPaymentType] = useState("");
  const [addressId, setAddressId] = useState("");
  // const [selectCardPay, setSelectCardPay] = useState("");
  // const [cardId, setCardId] = useState("");

  // const [cardName, setCardName] = useState("");
  // const [cardNumber, setCardNumber] = useState("");
  // const [cardExp, setCardExp] = useState("");
  // const [cardCVC, setCardCVC] = useState("");
  // const [saveCard, setSaveCard] = useState(false);

  const { addresses } = useAppSelector((state) => state.getAddressAction);
  // const { cards } = useAppSelector((state) => state.allCardsAction);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(cleargetAddressState());
    dispatch(getAddressThunk());
  }, []);

  // useEffect(() => {
  //   if (paymentType === "card") {
  //     dispatch(clearAllCardState());
  //     dispatch(getAllCardsThunk());
  //   }
  // }, [paymentType]);

  function handleDeleteAddress(id: string) {
    dispatch(clearCrudAddressState());
    dispatch(deleteAddressThunk(id));
  }

  const Razorpay = useRazorpay();

  function handlePayment() {
    if (addressId === "") {
      toast.warn("Please Select or Add an Address.");
      return;
    }
    if (paymentType === "") {
      toast.warn("Please Select Payment Type.");
      return;
    }

    console.log("Hello");

    if (paymentType === "online") {
      dispatch(clearPaymentState());
      dispatch(addPaymentOrdersThunk({ amount: totalPrice })).then(
        (data: any) => {
          let order = data?.payload?.order;

          let orderData = {
            cart_id: cartId,
            address_id: addressId,
            payment_type: paymentType,
            payment_status: true,
            is_delivered: false,
            total: totalPrice,
          };

          const options = {
            key: process.env.REACT_RAZORPAY_KEY
              ? process.env.REACT_RAZORPAY_KEY
              : "",
            amount: order.amount,
            currency: order.currency,
            name: "Company pvt. ltd",
            description: "Order Payment",
            order_id: order.id,
            logo: "http://localhost:3000/images/logo.png",
            handler: (response: any) => {
              dispatch(clearCrudOrderState());
              dispatch(clearPaymentState());
              dispatch(addOrderThunk(orderData)).then((data: any) => {
                if (data?.error?.code === "ERR_BAD_REQUEST") {
                  toast.warn("Some Error Ocurred. Please Try Again.");
                  return;
                }
                if (data?.error?.code === "ERR_NETWORK") {
                  toast.error("Internal Server Error");
                  return;
                }
                toast.success("Placed Order Successfully.");
              });

              dispatch(verifyPaymentOrdersThunk(response)).then((data: any) => {
                if (data?.error?.code === "ERR_BAD_REQUEST") {
                  toast.warn("Some Error Ocurred. Please Try Again.");
                  return;
                }
                if (data?.error?.code === "ERR_NETWORK") {
                  toast.error("Internal Server Error");
                  return;
                }
                toast.success("Payment Successful");
                navigate("/");
                // window.location.href = "/all/orders";
              });
            },
            theme: {
              color: "#000000",
            },
          };

          const razorpayModal = new Razorpay(options);
          razorpayModal.open();
        }
      );
    } else {
      let orderData = {
        cart_id: cartId,
        address_id: addressId,
        payment_type: paymentType,
        payment_status: false,
        is_delivered: false,
        total: totalPrice,
      };
      dispatch(clearCrudOrderState());
      dispatch(clearPaymentState());
      dispatch(addOrderThunk(orderData)).then((data: any) => {
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
  }

  // function handlePayment() {
  //   let paymentData = {};
  //   let success = false;

  //   // Saved Card Payment
  //   if (paymentType === "card" && selectCardPay === "S" && cardId) {
  //     paymentData = {
  //       cardId: cardId,
  //       amount: totalPrice,
  //       oneTime: false,
  //     };

  //     dispatch(addPaymentChargesThunk(paymentData)).then((data: any) => {
  //       console.log(data);
  //       if (data?.error?.code === "ERR_BAD_REQUEST") {
  //         toast.warn("Some Error Ocurred. Please Try Again.");
  //         success = false;
  //         return;
  //       }
  //       if (data?.error?.code === "ERR_NETWORK") {
  //         toast.error("Internal Server Error");
  //         success = false;
  //         return;
  //       }
  //       success = true;
  //       return;
  //     });

  //     return success;
  //   }

  //   // One Time Card and save if added
  //   if (paymentType === "card" && selectCardPay === "O") {
  //     if (
  //       cardName === "" &&
  //       cardNumber === "" &&
  //       cardExp === "" &&
  //       cardCVC === "" &&
  //       cardCVC.length !== 3
  //     ) {
  //       toast.warn("Please Enter correct Card Details");
  //       success = false;
  //       return success;
  //     }
  //     if (
  //       cardNumber !== "4242 4242 4242 4242" &&
  //       cardNumber !== "4000 0566 5566 5556" &&
  //       cardNumber !== "5555 5555 5555 4444" &&
  //       cardNumber !== "5200 8282 8282 8210"
  //     ) {
  //       toast.warn("Please Enter correct Card Details");
  //       success = false;
  //       return success;
  //     }

  //     let number = cardNumber.split(" ")[0].split("")[0];

  //     if (Number(number) !== 4 && Number(number) !== 5) {
  //       toast.warn("Please Enter correct Card Number.");
  //       success = false;
  //       return success;
  //     }

  //     let cardType = "";
  //     if (Number(number) === 4) {
  //       cardType = "V";
  //     } else {
  //       cardType = "M";
  //     }

  //     let my = cardExp.split("/");

  //     // If Saved Card True
  //     if (saveCard) {
  //       let cardData = {
  //         cardName,
  //         cardExpMonth: Number(my[0]),
  //         cardExpYear: Number(my[1]),
  //         cardNumber,
  //         cardCVC,
  //         cardType,
  //       };

  //       dispatch(addCardsThunk(cardData));
  //     }

  //     paymentData = {
  //       cardName,
  //       cardExpMonth: Number(my[0]),
  //       cardExpYear: Number(my[1]),
  //       cardNumber,
  //       cardCVC,
  //       amount: totalPrice,
  //       oneTime: true,
  //     };

  //     dispatch(addPaymentChargesThunk(paymentData)).then((data: any) => {
  //       if (data?.error?.code === "ERR_BAD_REQUEST") {
  //         toast.warn("Some Error Ocurred. Please Try Again.");
  //         success = false;
  //         return;
  //       }
  //       if (data?.error?.code === "ERR_NETWORK") {
  //         toast.error("Internal Server Error");
  //         success = false;
  //         return;
  //       }
  //       toast.success("Placed Order Successfully.");
  //       success = true;
  //       return;
  //     });

  //     return success;
  //   }
  // }

  return (
    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
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
                value="online"
                checked={paymentType === "online"}
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
            Pay Online
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

        {/* {paymentType === "Online" && (
          <div className="payment-option">
            <div className="inline-flex items-center mr-4">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="payMethod"
              >
                <input
                  id="payMethod"
                  name="cardPay"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                  value="S"
                  checked={selectCardPay === "S"}
                  onChange={(e) => setSelectCardPay(e.target.value)}
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
              Pay from Saved Cards
            </div>

            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="payMethod"
              >
                <input
                  id="payMethod"
                  name="cardPay"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                  value="O"
                  checked={selectCardPay === "O"}
                  onChange={(e) => setSelectCardPay(e.target.value)}
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
              One time card pay
            </div>
          </div>
        )} */}
        {/* {selectCardPay === "O" && paymentType === "card" && (
          <fieldset className="col-span-6">
            <legend className="block text-sm font-medium text-gray-700 mb-2">
              Card Details
            </legend>
            <small className="text-red-500">
              Please select and enter the Card Details from the given.{" "}
              <Link
                className="text-black underline"
                to="/profile"
                target="_blank"
              >
                Click here
              </Link>
            </small>
            <div className="mt-1 rounded-md bg-white shadow-sm">
              <div>
                <input
                  type="text"
                  placeholder="Card Name"
                  className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="4444 4444 4444 4444"
                  className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="flex mt-3">
                <div className="flex-1 mr-2">
                  <input
                    type="text"
                    id="Card Expiry"
                    placeholder="05/26"
                    className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={cardExp}
                    onChange={(e) => setCardExp(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="password"
                    id="CardCVC"
                    placeholder="CVC"
                    className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={cardCVC}
                    onChange={(e) => setCardCVC(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label className="flex items-center" htmlFor="checkboxDefault">
                  <input
                    className="p-4"
                    type="checkbox"
                    checked={saveCard}
                    onChange={() => setSaveCard(!saveCard)}
                  />
                  <p className="ml-4">Save this card</p>
                </label>
              </div>
            </div>
          </fieldset>
        )}

        <div className="my-4">
          {selectCardPay === "S" &&
            paymentType === "card" &&
            (cards.length > 0 ? (
              cards?.map((el: any, index) => {
                return (
                  <div>
                    <input
                      className="peer sr-only"
                      id={el?._id}
                      type="radio"
                      tabIndex={-1}
                      name="scard"
                      value={el?._id}
                      onChange={(e) => setCardId(e.target.value)}
                    />
                    <label
                      htmlFor={el?._id}
                      className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white mb-2"
                      tabIndex={0}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {el?.cardType === "V" ? (
                            <RiVisaFill className="text-3xl" />
                          ) : (
                            <RiMastercardFill className="text-3xl" />
                          )}
                        </span>
                        <span>{el?.cardName}</span>
                        <span>{el?.cardNumber}</span>
                        <span>{el?.cardExpMonth + "/" + el?.cardExpYear}</span>
                      </div>
                    </label>
                  </div>
                );
              })
            ) : (
              <p className="mt-4">No Cards Available</p>
            ))}
        </div> */}

        {paymentType === "online" ? (
          <>
            <div className="col-span-6">
              <button
                type="button"
                data-te-toggle="modal"
                data-te-target="#exampleModal"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
              >
                Place Order
              </button>
            </div>
            <Modal handleClick={() => handlePayment()} />
          </>
        ) : (
          <div className="col-span-6">
            <button
              onClick={() => handlePayment()}
              className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Place order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
