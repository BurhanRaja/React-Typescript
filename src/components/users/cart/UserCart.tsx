import { useState } from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

type CartPorps = {
  cartProducts: Array<any>;
  cartId: string
};

const UserCart = ({ cartProducts, cartId }: CartPorps): JSX.Element => {

  return (
    <>
      <div className="text-5xl font-bold text-start p-10 px-10">
        <p>Your Cart</p>
      </div>
      <div className="flex justify-center w-[100%] mb-10 h-[100%]">
        <div className="flex flex-col w-[80%] p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-900">
          <ul className="flex flex-col divide-y divide-gray-700">
            {cartProducts?.length > 0 ? cartProducts?.map((el, index) => (
              <CartProduct 
                productInfo={el?.product_info}
                productQuantity={el?.quantity}
                price={el?.price}
                name={el?.product?.name}
                cartid={cartId}
                id={el?._id}
              />
            )) : <li>No Products in Cart</li>}
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
            <Link to="/">
              <button
                type="button"
                className="px-6 py-2 border rounded-md dark:border-gray-400"
              >
                Back
                <span className="sr-only sm:not-sr-only">to shop</span>
              </button>
            </Link>
            <Link to="/checkout">
              <button
                type="button"
                className="px-6 py-2 border rounded-md bg-black text-white"
              >
                <span className="sr-only sm:not-sr-only">Continue to</span>
                Checkout
              </button>
            </Link>
          </div>
        </div>
        {/* <Summary /> */}
      </div>
    </>
  );
};

export default UserCart;
