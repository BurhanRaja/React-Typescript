import Slider from "react-slick";
import { useRef, useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type HeroSliderProps = {
  children: JSX.Element | JSX.Element[] | any;
  autoPlay: boolean,
  infinite: boolean,
};

const HeroSlider = ({ children, autoPlay, infinite }: HeroSliderProps): JSX.Element => {

  var settings = {
    infinite: infinite,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
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
    <>
      <div className="overflow-hidden relative">
        <Slider {...settings} ref={sliderRef}>
          {children}
        </Slider>
      </div>
      <div className="w-[100%] text-center">
        <button onClick={handlePrev} className="p-3 mx-3 text-3xl">
          <BsArrowLeftSquare />
        </button>
        <button onClick={handleNext} className="p-3 mx-3 text-3xl">
          <BsArrowRightSquare />
        </button>
      </div>
    </>
  );
};

export default HeroSlider;
