import React, { useEffect } from "react";
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { useParams } from "react-router";
import { clearDiscountState } from "../../../features/discount/crudDiscount";
import { getSingleDiscountThunk } from "../../../features/discount/singleDiscount";

const DiscountDetails = () => {
  const { discountid } = useParams();

  const { discount } = useAppSelector((state) => state.singleDiscountAction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearDiscountState());
    dispatch(getSingleDiscountThunk(discountid));
  }, []);

  console.log(discount?.products);

  return (
    <>
      <div className=" mb-5 w-[90%] mx-auto mt-10">
        <div className=" flex justify-between items-center bg-gray-200 rounded p-10 mb-8">
          <div>
            <p className="mb-5">{discount?.description}</p>
            {discount?.is_active ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-4 py-2 text-[0.9rem] font-semibold text-green-600">
                Active
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[0.6rem] font-semibold text-red-600">
                UnActive
              </span>
            )}
          </div>
          <p className="font-bold text-2xl">{discount?.discount_percentage}%</p>
        </div>

        <p className="text-3xl mb-3">Products</p>

        {discount?.products?.map((el: any) => {
          return (
            <>
              <input
                className="peer sr-only"
                id={el?._id}
                type="checkbox"
                tabIndex={-1}
                name="products"
                value={el?._id}
              />
              <label
                htmlFor={el?._id}
                className={`block w-full rounded-lg border p-3 mb-2 relative`}
              >
                <span className="text-sm font-medium">
                  <div className="flex justify-start">
                    <img
                      src={el?.thumbnail}
                      alt="productimg"
                      width={100}
                      height={100}
                    />
                    <div className="w-[85%] ml-10">
                      <h3 className="text-xl font-bold">{el?.name}</h3>
                      <p className="mt-2">
                      {el?.discount ? (
                        <>
                          <span className="tracking-wider text-xs line-through text-gray-900">
                            {" "}
                            ₹ {el?.images_info[0]?.price}
                          </span>
                          <span className="tracking-wider text-gray-900">
                            {" "}
                            ₹ {Math.round(el?.images_info[0]?.price - (el?.images_info[0]?.price * discount?.discount_percentage)/100)}
                          </span>
                        </>
                      ) : (
                        <span className="tracking-wider text-gray-900">
                          {" "}
                          ₹{el?.images_info[0]?.price}
                        </span>
                      )}
                    </p>
                    </div>
                  </div>
                </span>
              </label>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DiscountDetails;
