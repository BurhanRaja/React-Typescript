import { useEffect } from "react";
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { getAllSellerProductsThunk } from "../../../features/product/seller/allProducts";

const ProductListing = () => {
  const { products, isSuccess } = useAppSelector(
    (state) => state.sellerProducts
  );
  const dispatch = useAppDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getAllSellerProductsThunk());
  }, []);

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Thumnail
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Categories Info
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Prices
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Sizes/Product Type
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Colors
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Total Quantity
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Actions
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {isSuccess &&
              products?.map((el: any) => {
                return (
                  <tr key={el._id} className="hover:bg-gray-50">
                    <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <img
                        className="rounded-sm object-cover object-center"
                        src={el?.thumbnail}
                        alt=""
                        width={"30"}
                      />
                    </td>
                    <td className="px-4 py-4 w-52">
                      <p>{el?.name?.substr(0, 30)}...</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-xs mb-2">
                        PC:{" "}
                        <span className="text-xs font-bold">
                          {el?.parent_category?.name}
                        </span>
                      </p>
                      <p className="text-xs mb-2">
                        C:{" "}
                        <span className="text-xs font-bold">
                          {el?.category?.name}
                        </span>
                      </p>
                      <p className="text-xs mb-2">
                        SC:{" "}
                        <span className="text-xs font-bold">
                          {el?.sub_category?.name}
                        </span>
                      </p>
                    </td>
                    <td className="px-4 py-4 w-24">
                      <p className="text-xs mb-2">
                        Avg:{" "}
                        <span className="text-xs font-bold">
                          {el?.price_avg}
                        </span>
                      </p>
                      <p className="text-xs mb-2">
                        Min:{" "}
                        <span className="text-xs font-bold">
                          {el?.price_min}
                        </span>
                      </p>
                      <p className="text-xs mb-2">
                        Max:{" "}
                        <span className="text-xs font-bold">
                          {el?.price_max}
                        </span>
                      </p>
                    </td>
                    <td className="px-6 py-4 w-52">
                      <div className="flex gap-2 flex-wrap">
                        {el?.sizes?.map((size: string) => {
                          return (
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[0.6rem] font-semibold text-blue-600">
                              {size}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2 flex-wrap">
                        {el?.colors?.map((color: string) => {
                          return (
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                              {color}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {el?.quantity}
                    </td>
                    <td className="px-6 py-4">
                      <button>
                        Action
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductListing;
