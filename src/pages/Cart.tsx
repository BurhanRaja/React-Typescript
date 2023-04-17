import { useEffect } from "react";
import UserCart from "../components/users/cart/UserCart";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { clearUserCartState, getUserCartThunk } from "../features/cart/userCart";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.singleUserCartAction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearUserCartState());
    dispatch(getUserCartThunk());
  }, []);

  return (
    <div className="h-[100%]">
      <UserCart cartProducts={cart?.cartItems} cartId={cart?._id} />
    </div>
  );
};

export default Cart;
