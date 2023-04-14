import HeroSlider from "../herosection/Slider";

type ImageSliderProps = {
  images: Array<any>;
};

const ProductImageSlider = ({ images }: ImageSliderProps): JSX.Element => {
  return (
    <>
      <div className="w-[50%]">
        <HeroSlider autoPlay={false} infinite={false}>
          {images?.map((image, index) => {
            return (
                <img key={index} className="w-[100%] h-[700px] object-cover object-top" src={image} alt={image} />
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default ProductImageSlider;
