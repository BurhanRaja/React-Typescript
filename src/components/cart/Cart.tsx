import { useState } from "react";
import CartProducts from "./CartProducts";
import Summary from "./Summary";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
    <div className="text-5xl font-bold text-start p-10 px-10">
        <p>Cart</p>
    </div>
    <div className="flex justify-center ml-3">
      <div className="w-1/2">
        <CartProducts />
        <CartProducts />
        <CartProducts />
        <CartProducts />
      </div>
      <Summary />
    </div>
    </>
  );
};

export default Cart;
