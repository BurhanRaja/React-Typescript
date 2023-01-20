import { useState } from "react";
import ProductImageSlider from "./ProductImageSlider";

const DownArrowSvg = (): JSX.Element => {
  return (
    <>
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-4 h-4"
        viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </>
  );
};

type SelectProps = {
  selectOption: Array<string> | Array<number>;
};

const Select = ({ selectOption }: SelectProps): JSX.Element => {
  return (
    <div className="relative">
      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
        {selectOption.map((el) => {
          return <option key={el}>{el}</option>;
        })}
      </select>
      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
        <DownArrowSvg />
      </span>
    </div>
  );
};

const ProductCard = (): JSX.Element => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto text-start">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Animated Night Hill Illustrations
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Details
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div className="flex justify-between items-center border-t border-gray-200 py-2">
              <span className="text-gray-500">Color</span>
              <Select selectOption={["Blue", "Black", "White"]} />
            </div>
            <div className="flex justify-between items-center border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <Select selectOption={["SM", "M", "L", "XL"]} />
            </div>
            <div className="flex items-center border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-gray-900">
                <button
                  className="px-2 bg-gray-300 hover:bg-gray-400 text-lg rounded-l-md"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
                <span className="px-2 p-1 border-t border-b">
                  {quantity}
                </span>
                <button
                  className="px-2 bg-gray-300 hover:bg-gray-400 text-lg rounded-r-md"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>
              </span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
                Add to Cart
              </button>
              <button className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Buy Now
              </button>
            </div>
          </div>
          <ProductImageSlider />
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
