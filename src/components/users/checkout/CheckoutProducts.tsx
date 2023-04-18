
interface CheckoutProductsProps {
  totalPrice: number,
  cartItems: Array<any>
}

const CheckoutProducts = ({totalPrice, cartItems}: CheckoutProductsProps) => {


  return (
    <div className="bg-gray-50 py-12 md:py-24">
      <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
        <div>
          <p className="text-2xl font-medium tracking-tight text-gray-900">
            ₹ {totalPrice}
          </p>

          <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
        </div>
        <div>
          <div className="flow-root">
            <ul className="-my-4 divide-y divide-gray-100">
              {cartItems?.map((el: any) => {
                return (
                  <li key={el._id} className="flex items-center gap-4 py-4">
                    <img
                      src={el?.product_info?.thumbnail}
                      alt={el?.product?.name}
                      className="h-16 w-16 rounded object-cover"
                    />

                    <div className="w-[100%]">
                      <div className="flex justify-between w-[100%] ">
                        <div>
                          <h3 className="text-sm text-gray-900">
                            {el?.product?.name}
                          </h3>
                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            {el?.product_info?.size && (
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">
                                  {el?.product_info?.size}
                                </dd>
                              </div>
                            )}

                            {el?.product_info?.color && (
                              <div>
                                <dt className="inline">Color:</dt>{" "}
                                <dd className="inline">
                                  {el?.product_info?.color}
                                </dd>
                              </div>
                            )}

                            {el?.product_info?.info_type && (
                              <div>
                                <dt className="inline">Info Type:</dt>
                                <dd className="inline">
                                  {el?.product_info?.info_type}
                                </dd>
                              </div>
                            )}
                          </dl>
                        </div>
                        <div>
                          <small className="mr-5">Price: ₹{el?.price}</small>
                          <small>Qty: {el?.quantity}</small>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProducts;
