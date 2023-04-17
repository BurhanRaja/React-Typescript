import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAppDispatch from "../../../hooks/useAppDispatch";
import {
  clearCrudCartState,
  removeFromCartThunk,
} from "../../../features/cart/crudCart";

type CartProductProps = {
  productInfo: string;
  productQuantity: number;
  price: number;
  name: string;
  cartid: string;
  id: string;
};

const CartProduct = ({
  productInfo,
  productQuantity,
  price,
  name,
  cartid,
  id,
}: CartProductProps) => {
  const dispatch = useAppDispatch();

  function handleRemoveFromCart() {
    dispatch(clearCrudCartState());
    dispatch(removeFromCartThunk({ id: cartid, itemId: id }));
  }

  return (
    <li className='flex flex-col py-6 sm:flex-row sm:justify-between'>
      <div className='flex w-full space-x-2 sm:space-x-4'>
        <img
          className='flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500'
          src={productInfo?.thumbnail}
          alt={name}
        />
        <div className='flex flex-col justify-between w-full pb-4'>
          <div className='flex justify-between w-full pb-2 space-x-2'>
            <div className='space-y-1'>
              <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                {name}
              </h3>
              {productInfo?.color && (
                <p className='text-sm dark:text-gray-400'>
                  {productInfo?.color}
                </p>
              )}
              {productInfo?.size && (
                <p className='text-sm dark:text-gray-400'>
                  {productInfo?.size}
                </p>
              )}
              {productInfo?.info_type && (
                <p className='text-sm dark:text-gray-400'>
                  {productInfo?.info_type}
                </p>
              )}
            </div>
            <div className='flex justify-center items-center'>
              <div className='text-right'>
                <p className='text-lg font-semibold'>{price}</p>
                {/* <p className='text-sm line-through dark:text-gray-600'>
                  
                </p> */}
              </div>
              <div className='text-right'>
                <p>
                  Quantity:<span className='font-bold'>{productQuantity}</span>
                </p>
              </div>
            </div>
          </div>
          <div className='flex text-sm divide-x'>
            <button
              type='button'
              className='flex items-center px-2 py-1 pl-0 space-x-1 text-red-600'
              onClick={handleRemoveFromCart}
            >
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
