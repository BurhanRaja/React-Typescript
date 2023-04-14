import { useParams } from "react-router";
import ProductCard from "../components/users/Product/ProductCard";
import { AiFillStar } from "react-icons/ai";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { useEffect } from "react";
import {
  clearSingleProduct,
  getSingleProductThunk,
} from "../features/product/singleProduct";

const ProductPage = () => {
  const { id } = useParams();

  const { product, isLoading } = useAppSelector((state) => state.singleProductAction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearSingleProduct());
    dispatch(getSingleProductThunk(id));
  }, []);

  return (
    <>
      {!isLoading && (
        <ProductCard
          id={product?._id}
          name={product?.name}
          description={product?.description}
          sizes={product?.sizes}
          colors={product?.colors}
          image_info={
            product?.images_info?.length > 0 ? product?.images_info[0] : {}
          }
          allImagesInfo={product?.images_info}
          company={product?.sellerinfo?.company_name}
          info_types={product?.info_types}
        />
      )}

      <div className="container flex flex-col w-[90%] p-6 mx-auto rounded-md">
        <h1 className="text-3xl mb-10">Add Reviews</h1>
        <div className="flex justify-between align-middle">
          <div className="flex flex-col w-[48%] p-8 shadow-sm rounded-xl lg:p-12 border border-black">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Your opinion matters!
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-4xl" />
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-4xl" />
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-4xl" />
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-4xl" />
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-4xl" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  rows={3}
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none border border-black"
                ></textarea>
                <button
                  type="button"
                  className="py-4 my-8 font-semibold rounded-md bg-black text-white"
                >
                  Leave feedback
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm dark:text-gray-400"
              >
                Maybe later
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[48%] p-8 shadow-sm rounded-xl lg:p-12 border border-black">
            <div className="flex flex-col w-full">
              <h2 className="text-3xl font-semibold text-center">
                Customer reviews
              </h2>
              <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                <div className="flex space-x-3">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-2xl" />
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-2xl" />
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-2xl" />
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-2xl" />
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <AiFillStar className="text-yellow-500 text-2xl" />
                  </button>
                </div>
                <span className="">3 out of 5</span>
              </div>
              <p className="text-sm">861 global ratings</p>
              <div className="flex flex-col mt-4">
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                  <div className="flex-1 h-10 mb-2 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-10 w-5/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    83%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                  <div className="flex-1 h-10 mb-2 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-10 w-4/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    67%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                  <div className="flex-1 h-10 mb-2 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-10 w-3/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    50%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                  <div className="flex-1 h-10 mb-2 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-10 w-2/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    33%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                  <div className="flex-1 h-10 mb-2 overflow-hidden rounded-sm bg-gray-300">
                    <div className="bg-orange-300 h-10 w-1/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    17%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col w-[90%] p-6 mx-auto rounded-md">
        <h1 className="text-3xl mb-10">All Reviews</h1>
        <div className="border rounded border-black">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Leroy Jenkins</h4>
                <span className="text-xs dark:text-gray-400">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-800">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.
            </p>
            <p>
              Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
              mauris cursus venenatis. Maecenas gravida urna vitae accumsan
              feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
