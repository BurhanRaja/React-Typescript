import Slider from "react-slick";
import { useRef } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./Hero";

const HeroSlider = () => {
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
    <>
    <div className="overflow-hidden relative">
      <Slider {...settings} ref={sliderRef}>
        <Hero
          fTitle="Fashion"
          lTitle="Collections"
          link="#"
          mainImg="/images/womenfashion.jpg"
          twoImg={[
            {
              id: "1",
              name: "/images/glasses.avif",
            },
            {
              id: "2",
              name: "/images/shoes.webp"
            },
          ]}
          bgColor="bg-slate-200"
        />
        <Hero
          fTitle="Electronic"
          lTitle="Products"
          link="#"
          mainImg="/images/mobiles.webp"
          twoImg={[
            {
              id: "1",
              name: "/images/laptops.jpg",
            },
            {
              id: "2",
              name: "/images/headphones.jpg"
            },
          ]}
          bgColor="bg-orange-300"
        />
      </Slider>
    </div>
      <div className="w-[100%]">
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
