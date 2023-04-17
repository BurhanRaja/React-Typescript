// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import useAppSelector from "../../../../../hooks/useAppSelector";
import { useEffect } from "react";
import useAppDispatch from "../../../../../hooks/useAppDispatch";
import { getUserCartThunk } from "../../../../../features/cart/userCart";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.singleUserCartAction);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserCartThunk());
  }, []);

  return (
    <>
      <p className="text-start text-black p-4 border-b-2 border-gray-700 font-semibold text-lg">
        Cart
      </p>
      {cart?.cartItems?.length > 0 ? (
        cart?.cartItems?.map((el: any, index: number) => {
          if (index <= 2) {
            return (
              <div
                key={el._id}
                className="text-start text-black p-3 border-y-[0.1rem] flex justify-start items-center"
              >
                <img
                  src={el?.product_info?.thumbnail}
                  alt="t-shirt"
                  className="w-10 mr-2"
                />
                <div className="w-[100%]">
                  <p className="text-sm font-bold flex justify-between items-center">
                    <span>{el?.product?.name?.substring(0, 18)}...</span>
                    <span className="font-normal text-xs">
                      {el?.created_at}
                    </span>
                  </p>
                  <p className="text-xs">
                    <span>Qty: {el?.quantity}</span>
                  </p>
                </div>
              </div>
            );
          }
        })
      ) : (
        <p className="text-black p-4">No Products in Cart</p>
      )}

      {cart?.cartItems?.length >= 1 && (
        <Link to="/cart">
          <div className="bg-gray-700 text-white rounded-sm my-3 mx-4">
            <button className="w-[100%] py-1">More</button>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cart;
