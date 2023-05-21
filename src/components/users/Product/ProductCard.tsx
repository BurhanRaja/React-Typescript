import { useEffect, useState } from "react";
import ProductImageSlider from "./ProductImageSlider";
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import {
  clearImageInfoState,
  getImagesInfoFilterThunk,
} from "../../../features/product/imagesInfo";
import {
  addToCartThunk,
  clearCrudCartState,
} from "../../../features/cart/crudCart";
import { toast } from "react-toastify";

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
  val: string;
  setVal: (val: string) => void;
};

const Select = ({ selectOption, val, setVal }: SelectProps): JSX.Element => {
  return (
    <div className="relative">
      <select
        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      >
        {selectOption?.map((el) => {
          return <option key={el}>{el}</option>;
        })}
      </select>
      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
        <DownArrowSvg />
      </span>
    </div>
  );
};

type ProductCardProps = {
  name: string;
  description: string;
  company: string;
  sizes: Array<any>;
  colors: Array<any>;
  info_types: Array<any>;
  allImagesInfo: Array<any>;
  image_info: any;
  id: string;
  sellerId: string;
  sellerInfoId: string;
  thumbnail: string;
  discount: any | undefined | null;
};

const ProductCard = ({
  name,
  description,
  company,
  sizes,
  colors,
  info_types,
  image_info,
  allImagesInfo,
  id,
  sellerId,
  sellerInfoId,
  thumbnail,
  discount,
}: ProductCardProps): JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  const [info, setInfo] = useState<any>({});
  const [colorInfo, setColorInfo] = useState("");
  const [infoType, setInfoType] = useState("");
  const [size, setSize] = useState("");

  const [readmore, setReadMore] = useState(false);

  const { data, isLoading } = useAppSelector(
    (state) => state.imagesFilterAction
  );
  const dispatch = useAppDispatch();

  function handleImagesInfoFilter(val: string) {
    const splitVal = val.split("+");
    console.log(splitVal);
    setColorInfo(val);
    dispatch(clearImageInfoState());
    dispatch(
      getImagesInfoFilterThunk({ id, color: splitVal[0], itemId: splitVal[1] })
    );
  }

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      setInfo(data[0]);
    }
  }, [isLoading]);

  useEffect(() => {
    if (image_info) {
      setInfo(image_info);
      setColorInfo(image_info?.color + "+" + image_info?._id);
      if (image_info?.info_types?.length > 0) {
        setInfoType(image_info?.info_types[0]);
      }
      if (image_info?.sizes?.length > 0) {
        setSize(image_info?.sizes[0]);
      }
    }
  }, [image_info]);

  function handleAddToCart() {
    // let userToken = localStorage.getItem()

    if (Number(quantity) > Number(info?.quantity)) {
      toast.error("The required quantity is greater than available quantity.");
      return;
    }

    let data = {
      size,
      info_type: infoType,
      thumbnail,
      color: colorInfo.split("+")[0],
      price: discount
        ? Math.round(
            info?.price - (info?.price * discount?.discount_percentage) / 100
          )
        : info?.price,
      sellerid: sellerId,
      seller_info_id: sellerInfoId,
      productid: id,
      quantity,
    };

    dispatch(clearCrudCartState());
    dispatch(addToCartThunk(data)).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("Some Error Occured. Please try again");
        return;
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error");
        return;
      }
      if (data?.error?.code === "ERR_BAD_RESPONSE") {
        toast.error("Please Login to add to cart.");
        return;
      }

      toast.success(`Item Added to Cart.`);
      return;
    });
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto text-start">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {company}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {name}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
            </div>
            {description &&
              (!readmore ? (
                <>
                  <p
                    className="leading-relaxed mb-1"
                    dangerouslySetInnerHTML={{
                      __html: `${description.substring(0, 500)}...`,
                    }}
                  ></p>
                  <button
                    className="mb-4 text-black font-bold p-0"
                    onClick={() => setReadMore(true)}
                  >
                    Read More
                  </button>
                </>
              ) : (
                <>
                  <p
                    className="leading-relaxed mb-1"
                    dangerouslySetInnerHTML={{
                      __html: `${description}`,
                    }}
                  ></p>
                  <button
                    className="mb-4 text-black font-bold p-0"
                    onClick={() => setReadMore(false)}
                  >
                    Read Less
                  </button>
                </>
              ))}
            {colors?.length !== 0 && (
              <div className="flex justify-between items-center border-t border-gray-200 py-2">
                <span className="text-gray-500">Color</span>
                <div className="relative">
                  <select
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    value={colorInfo}
                    onChange={(e) => handleImagesInfoFilter(e.target.value)}
                  >
                    {colors?.map((el, index) => {
                      return (
                        <option
                          key={el}
                          value={el + "+" + allImagesInfo[index]?._id}
                        >
                          {el}
                        </option>
                      );
                    })}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <DownArrowSvg />
                  </span>
                </div>
              </div>
            )}
            {info?.sizes?.length !== 0 && (
              <div className="flex justify-between items-center border-t border-gray-200 py-2">
                <span className="text-gray-500">Size</span>
                <Select
                  selectOption={sizes}
                  val={size}
                  setVal={(val) => setSize(val)}
                />
              </div>
            )}
            {info?.info_types?.length !== 0 && (
              <div className="flex justify-between items-center border-t border-gray-200 py-2">
                <span className="text-gray-500">Product Type</span>
                <Select
                  selectOption={info_types}
                  val={infoType}
                  setVal={(val) => setInfoType(val)}
                />
              </div>
            )}
            <div className="flex items-center border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-gray-900">
                <button
                  className="px-2 bg-gray-300 hover:bg-gray-400 text-lg rounded-l-md"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
                <span className="px-2 p-1 border-t border-b">{quantity}</span>
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
                {discount ? (
                  <>
                    <span className="tracking-wider line-through text-gray-900">
                      {" "}
                      ₹{info?.price}
                    </span>
                    <span className="tracking-wider text-gray-900">
                      {" "}
                      ₹
                      {Math.round(
                        info?.price -
                          (info?.price * discount?.discount_percentage) / 100
                      )}
                    </span>
                  </>
                ) : (
                  "₹" + info?.price
                )}
              </span>
              <button
                className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Buy Now
              </button>
            </div>
          </div>
          <ProductImageSlider images={info?.images} />
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
