import { useEffect } from "react";
import { useParams } from "react-router";
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { getSingleProductThunk } from "../../../features/product/singleProduct";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import InfoDisplay from "../../../components/seller/dashboard/product/InfoDisplay";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { product } = useAppSelector((state) => state.singleProductAction);

  useEffect(() => {
    if (id) {
      dispatch(getSingleProductThunk(id));
    }
  }, [id]);

  return (
    <>
      <div className="w-[95%] mx-auto my-6 mt-10">
        <h1 className="text-4xl font-bold mb-5">Product Details</h1>
        <div>
          <section>
            <div className="relative py-8">
              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                <div className="">
                  <img
                    alt="Les Paul"
                    src={product?.thumbnail}
                    className="rounded-xl w-full"
                  />
                </div>

                <div className="sticky top-0">
                  <div className="mt-8 flex justify-between">
                    <div className="max-w-[35ch] space-y-2">
                      <h1 className="text-xl font-bold sm:text-2xl">
                        {product?.name}
                      </h1>

                      <div className="-ml-0.5 flex">
                        <AiFillStar className="text-yellow-400 text-2xl" />
                        <AiFillStar className="text-yellow-400 text-2xl" />
                        <AiFillStar className="text-yellow-400 text-2xl" />
                        <AiFillStar className="text-yellow-400 text-2xl" />
                        <AiOutlineStar className="text-yellow-400 text-2xl" />
                      </div>
                    </div>

                    <div>
                      <p className="text-lg">
                        Average Price:{" "}
                        <span className="font-bold">₹{product?.price_avg}</span>
                      </p>
                      <p className="text-lg">
                        Maximum Price:{" "}
                        <span className="font-bold">₹{product?.price_max}</span>
                      </p>
                      <p className="text-lg">
                        Minimum Price:{" "}
                        <span className="font-bold">₹{product?.price_min}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="prose max-w-none">
                      <p>{product?.description}</p>
                    </div>
                  </div>
                  <div className="mt-5 mb-3 flex gap-4">
                    <div>
                      <label htmlFor="quantity" className="mr-3">
                        Total Quantity
                      </label>

                      <input
                        type="number"
                        id="quantity"
                        disabled
                        value={product?.quantity}
                        className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    </div>
                  </div>
                  <fieldset>
                    <legend className="mb-1 text-sm font-medium">Color</legend>
                    <div className="flex flex-wrap gap-1">
                      {product?.colors?.map((color: any) => {
                        return (
                          <label
                            key={color}
                            htmlFor="color_tt"
                            className="cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="color"
                              id="color_tt"
                              className="peer sr-only"
                            />

                            <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium ">
                              {color}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  {product?.sizes?.length > 0 && (
                    <fieldset className="mt-4">
                      <legend className="mb-1 text-sm font-medium">Size</legend>

                      <div className="flex flex-wrap gap-1">
                        {product?.sizes?.map((size: any) => {
                          return (
                            <label
                              htmlFor="size_xs"
                              key={size}
                              className="cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="size"
                                id="size_xs"
                                className="peer sr-only"
                              />

                              <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium ">
                                {size}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>
                  )}

                  {product?.info_types?.length > 0 && (
                    <fieldset className="mt-4">
                      <legend className="mb-1 text-sm font-medium">
                        Product Type
                      </legend>
                      <div className="flex flex-wrap gap-1">
                        {product?.info_types?.map((info: any) => {
                          <label
                            key={info}
                            htmlFor="size_xs"
                            className="cursor-pointer w-[33%] rounded-lg border "
                          >
                            <div className=" bg-white shadow-lg p-4">
                              <p className="text-sm text-gray-600 ">{info}</p>
                            </div>
                          </label>;
                        })}
                      </div>
                    </fieldset>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <InfoDisplay 
        imagesInfo={product?.images_info}
        deleteInfo={() => {}}
        count={product?.images_info?.length}
      />
    </>
  );
};

export default ProductDetails;
