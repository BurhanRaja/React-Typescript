import { BsArrowRight } from "react-icons/bs";


type HeroProps = {
  fTitle: string,
  lTitle: string,
  link: string,
  mainImg: string,
  twoImg: string
}

const Hero = (): JSX.Element => {
  return (
    <div className="mt-5 p-5 lg:md:h-[30rem] sm:h-96 flex bg-green-200">
      <div className="text-7xl text-start font-semibold w-[50%] h-[100%] font-roboto mr-9 ">
        <div className="flex flex-col justify-center h-[100%] w-[60%] mx-auto">
          <p className="pb-4 z-10 md:pr-10 mr-16"></p>
          <p className="z-10">Products</p>
          <div className="mt-6">
            <a href="#">
              <button className="text-lg font-light bg-black text-white p-3 px-5 flex items-center rounded-sm group/get-item">
                Get More{" "}
                <BsArrowRight className="ml-3 text-2xl group-hover/get-item:translate-x-2 transition-all duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(2,18rem)] grid-rows-2 gap-2 w-[50%]">
        <div className="row-span-2">
          <img
            src="/images/mobiles.webp"
            alt="womenfashion"
            className="w-[18rem] rounded-md"
          />
        </div>
        <div>
          <img
            src="/images/laptops.jpg"
            alt="menfashion"
            className="w-[13rem] rounded-md row-span-1"
          />
        </div>
        <div>
          <img
            src="/images/headphones.jpg"
            alt="menfashion"
            className="w-[13rem] rounded-md row-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
