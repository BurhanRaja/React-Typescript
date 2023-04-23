import { Link } from "react-router-dom";

type ProductProps = {
  products: Array<any>;
};

const ProductSection = ({ products }: ProductProps): JSX.Element => {
  return (
    <div className="lg:col-span-3">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products?.length > 0 ? (
          products?.map((el) => {
            return (
              <>
                <li>
                  <Link
                    key={el?._id}
                    to={`/product/${el?._id}`}
                    className="group block overflow-hidden"
                  >
                    <img
                      src={el?.thumbnail}
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {el?.name}
                      </h3>

                      <p className="mt-2">
                        <span className="tracking-wider text-gray-900">
                          {" "}
                          ₹{el?.images_info[0].price}{" "}
                        </span>
                      </p>
                    </div>
                  </Link>
                </li>
              </>
            );
          })
        ) : (
          <li>
            <p>Currently, No Products are Available</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductSection;
