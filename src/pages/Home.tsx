import { Link } from "react-router-dom";
import CategorySection from "../components/users/Home/CategorySection";
import ProductsLineup from "../components/users/Home/ProductsLineup";
import Hero from "../components/users/herosection/Hero";
import HeroSlider from "../components/users/herosection/Slider";
import { getAllHomeProductsThunk } from "../features/product/user/allProducts";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import { useEffect } from "react";

const Home = () => {
  const { products } = useAppSelector((state) => state.allProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllHomeProductsThunk());
  }, []);

  return (
    <>
      <HeroSlider autoPlay={true} infinite={true}>
        {/* <DiscountSaleHero /> */}
        <Hero
          fTitle="Fashion"
          lTitle="Collections"
          link="/shop/64291ad52ff8d574a51feb97"
          mainImg="/images/womenfashion.jpg"
          oneImg="/images/glasses.avif"
          twoImg="/images/shoes.webp"
          bgColor="bg-slate-200"
        />
        <Hero
          fTitle="Electronic"
          lTitle="Products"
          link="/shop/642f8b5ffbf8bd6f12752505"
          mainImg="/images/mobile-image.jpg"
          oneImg="/images/laptops.jpg"
          twoImg="/images/headphones-image.jpg"
          bgColor="bg-orange-300"
        />
        <Hero
          fTitle="Beauty"
          lTitle="Products"
          link="/shop/64451b23f9916a9ed221bdfe"
          mainImg="/images/beauty-1.jpg"
          oneImg="/images/beauty-2.jpg"
          twoImg="/images/beauty-3.jpg"
          bgColor="bg-blue-200"
        />
        <Hero
          fTitle="Home Decor"
          lTitle="& Furniture"
          link="/shop/64302302b666d1135c49fba3"
          mainImg="/images/furniture.jpg"
          oneImg="/images/smart-app.jpg"
          twoImg="/images/home-decor.jpg"
          bgColor="bg-red-300"
        />
      </HeroSlider>
      <ProductsLineup
        title="Recent Products"
        mappedProducts={products?.map((el, index) => {
          if (index <= products.length - 1 && index >= products.length - 4) {
            return (
              <li>
                <Link
                  to={`/product/${el?._id}`}
                  key={el?._id}
                  className="block overflow-hidden group"
                >
                  <img
                    src={el?.thumbnail}
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative pt-3 bg-white">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {el?.name}
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      {el?.discount ? (
                        <>
                          <span className="tracking-wider text-xs line-through text-gray-900">
                            {" "}
                            ₹{el?.images_info[0]?.price}
                          </span>
                          <span className="tracking-wider text-gray-900">
                            {" "}
                            ₹{Math.round(el?.images_info[0]?.price - (el?.images_info[0]?.price * el?.discount?.discount_percentage)/100)}
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
                </Link>
              </li>
            );
          }
        })}
      />
      <CategorySection />
      <ProductsLineup
        title="Trending Products"
        mappedProducts={products?.map((el, index) => {
          if (index <= 3) {
            return (
              <li>
                <Link
                  to={`/product/${el?._id}`}
                  key={el?._id}
                  className="block overflow-hidden group"
                >
                  <img
                    src={el?.thumbnail}
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative pt-3 bg-white">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {el?.name}
                    </h3>

                    <p className="mt-2">
                      {el?.discount ? (
                        <>
                          <span className="tracking-wider text-xs line-through text-gray-900">
                            {" "}
                            ₹{el?.images_info[0]?.price}
                          </span>
                          <span className="tracking-wider text-gray-900">
                            {" "}
                            ₹{Math.round(el?.images_info[0]?.price - (el?.images_info[0]?.price * el?.discount?.discount_percentage)/100)}
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
                </Link>
              </li>
            );
          }
        })}
      />
    </>
  );
};

export default Home;
