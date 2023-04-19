import CheckoutForm from "../components/users/checkout/CheckoutForm";
import CheckoutProducts from "../components/users/checkout/CheckoutProducts";
import { useEffect } from "react";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import {
  clearUserCartState,
  getUserCartThunk,
} from "../features/cart/userCart";
import {
  clearCartTotal,
  getCartTotalThunk,
} from "../features/cart/getTotal";

const CheckoutPage = () => {

  const { cart } = useAppSelector((state) => state.singleUserCartAction);
  const { totalPrice } = useAppSelector((state) => state.cartTotalAction);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearUserCartState());
    dispatch(getUserCartThunk());
  }, []);

  useEffect(() => {
    dispatch(clearCartTotal());
    dispatch(getCartTotalThunk());
  }, []);


  return (
    <section>
      <h1 className="sr-only">Checkout</h1>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <CheckoutProducts totalPrice={totalPrice} cartItems={cart?.cartItems} />
        <CheckoutForm cartId={cart?._id} totalPrice={totalPrice} />
      </div>
    </section>
  );
};

export default CheckoutPage;
