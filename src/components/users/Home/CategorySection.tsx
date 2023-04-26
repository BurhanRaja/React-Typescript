import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="text-center w-full mb-8 flex-wrap">
          <h1 className="lg:text-4xl min-[380px]:text-3xl font-bold text-gray-800 title-font lg:mb-0 mb-4">
            Our Categories
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2 justify-center">
            <div className="md:m-2 w-full relative bg-cover bg-no-repeat overflow-hidden group/image-1">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block "
                src="/images/glasses.avif"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed transition-all duration-100 group-hover/image-1:opacity-50 opacity-0"></div>
              <Link
                to="/shop/64291ad52ff8d574a51feb97"
                className="absolute top-[50%] left-[35%] bg-white text-black p-5 w-52 rounded-sm transition-all duration-100 text-center group-hover/image-1:opacity-100 opacity-0"
              >
                Fashion
              </Link>
            </div>
            <div className="md:m-2 w-full relative bg-cover bg-no-repeat overflow-hidden group/image-2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/images/furniture.jpg"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed transition-all duration-100 group-hover/image-2:opacity-50 opacity-0"></div>
              <Link
                to="/shop/64302302b666d1135c49fba3"
                className="absolute top-[50%] left-[30%] bg-white text-black p-5 w-64 rounded-sm text-center transition-all duration-100  group-hover/image-2:opacity-100 opacity-0"
              >
                Home Decor and Furniture
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:m-2 w-full relative bg-cover bg-no-repeat overflow-hidden group/image-3">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/images/headphones.jpg"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed transition-all duration-100 group-hover/image-3:opacity-50 opacity-0"></div>
              <Link
                to="/shop/642f8b5ffbf8bd6f12752505"
                className="absolute top-[50%] left-[35%] bg-white text-black p-5 w-52 rounded-sm text-center transition-all duration-100  group-hover/image-3:opacity-100 opacity-0"
              >
                Electronics
              </Link>
            </div>
            <div className="md:m-2 w-full relative bg-cover bg-no-repeat overflow-hidden group/image-4">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/images/beauty-2.jpg"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed transition-all duration-100 group-hover/image-4:opacity-50 opacity-0"></div>
              <Link
                to="/shop/64451b23f9916a9ed221bdfe"
                className="absolute top-[50%] left-[35%] bg-white text-black p-5 w-52 rounded-sm text-center transition-all duration-100  group-hover/image-4:opacity-100 opacity-0"
              >
                Beauty and Care
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
