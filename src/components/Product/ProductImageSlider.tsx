import HeroSlider from "../herosection/Slider";

const ProductImageSlider = () => {
  return (
    <>
      <div className="w-[50%]">
        <HeroSlider autoPlay={false} infinite={false}>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </HeroSlider>
      </div>
    </>
  );
};

export default ProductImageSlider;
