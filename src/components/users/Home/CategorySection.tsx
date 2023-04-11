const CategorySection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="text-center w-full mb-8 flex-wrap">
          <h1 className="lg:text-4xl min-[380px]:text-3xl font-bold text-gray-800 title-font lg:mb-0 mb-4">
            Product Categories
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2 justify-center">
            <div className="md:p-2 w-full relative bg-cover bg-no-repeat overflow-hidden">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block "
                src="/images/glasses.avif"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-10">
              </div>
              <button className="absolute top-0 left-0 bg-white text-black">Fashion</button>
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/images/furniture.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/images/headphones.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/images/beauty-2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
