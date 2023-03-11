import { useState } from "react";

const CartProducts = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-[90%] mx-auto text-start border-[0.1rem] p-2 mb-3 rounded-md hover:cursor-pointer">
      <div className="flex w-[100%]">
        <div className="w-40 mr-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt="cartproduct"
          />
        </div>
        <div className="w-[60%]">
          <div className="flex items-center justify-between">
            <p className="text-2xl">Title</p>
            <div>
              <div className="flex items-center border-gray-200 py-2">
                <span className=" text-gray-900">
                  <button
                    className="px-2 bg-gray-300 hover:bg-gray-400 text-lg rounded-l-md"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-2 p-1 border-t border-b">{quantity}</span>
                  <button
                    className="px-2 bg-gray-300 hover:bg-gray-400 text-lg rounded-r-md"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-start py-2">
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                jlgkmklm ...
              </p>
            </div>
            <div className="flex  items-center border-gray-200 py-1">
              <span className="text-gray-500">Color :</span>
              <span className="ml-3">Black</span>
            </div>
            <div className="flex  items-center border-gray-200 py-1">
              <span className="text-gray-500">Size :</span>
              <span className="ml-3">SM</span>
            </div>
            <div className="flex justify-between items-center">
              <button className="text-red-600 underline">Remove</button>
              <p className="font-bold text-xl">$399</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
