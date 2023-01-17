import Slider from "react-slick";
import { useRef } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type HeroSliderProps = {
  children: JSX.Element;
};

const HeroSlider = ({ children }: HeroSliderProps) => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const sliderRef = useRef<Slider | null>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="overflow-hidden relative">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt="tshirt"
            className="rounded-md opacity-100 hover:opacity-80"
          />
        </div>
        <div>
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt="tshirt"
            className="rounded-md opacity-100 hover:opacity-80"
          />
        </div>
        <div>
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt="tshirt"
            className="rounded-md opacity-100 hover:opacity-80"
          />
        </div>
        <div>
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt="tshirt"
            className="rounded-md opacity-100 hover:opacity-80"
          />
        </div>
        <div>
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt="tshirt"
            className="rounded-md opacity-100 hover:opacity-80"
          />
        </div>
      </Slider>
      <div className="absolute bottom-6 w-[100%]">
        <button onClick={handlePrev} className="p-3 mx-3 text-3xl">
          <BsArrowLeftSquare />
        </button>
        <button onClick={handleNext} className="p-3 mx-3 text-3xl">
          <BsArrowRightSquare />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
