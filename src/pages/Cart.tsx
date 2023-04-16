import { useEffect } from "react";
import CartProducts from "../components/users/cart/CartProduct";
import UserCart from "../components/users/cart/UserCart";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { getUserCartThunk } from "../features/cart/userCart";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.singleUserCartAction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserCartThunk());
  }, []);

  return (
    <div className="h-[100%]">
      <UserCart cartProducts={cart} />
    </div>
  );
};

export default Cart;
