import { BsArrowRight } from "react-icons/bs";

type HeroProps = {
  fTitle: string;
  lTitle: string;
  link: string;
  mainImg: string;
  twoImg: Array<{ id: string; name: string }>;
  bgColor: string;
};

const Hero = ({
  fTitle,
  lTitle,
  link,
  mainImg,
  twoImg,
  bgColor,
}: HeroProps): JSX.Element => {
  return (
    <div className={`mt-1 p-5 lg:md:h-[30rem] sm:h-96 min-[370px]:h-48 flex ${bgColor} justify-evenly` }>
      <div className="lg:text-7xl md:text-5xl sm:text-3xl min-[370px]:text-2xl text-start font-semibold w-[50%] h-[100%] font-roboto mr-9 ">
        <div className="flex flex-col justify-center h-[100%] w-[60%] mx-auto">
          <p className="z-10 md:pr-10 mr-16">{fTitle}</p>
          <p className="z-10">{lTitle}</p>
          <div className="mt-6">
            <a href={link} className="">
              <button className="lg:text-lg md:text-base sm:text-sm min-[370px]:text-xs font-light bg-black text-white lg:p-3 md:p-2 sm:p-2 lg:px-5 md:px-4 sm:px-3 min-[370px]:px-2 flex items-center rounded-sm group/get-item">
                Shop Now{" "}
                <BsArrowRight className="lg:ml-3 min-[370px]:ml-1 lg:text-2xl sm:text-lg min-[370px]:text-sm group-hover/get-item:translate-x-2 transition-all duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="container px-5 py-5 mx-auto flex justify-center flex-wrap w-[65%]">
        <div className="flex flex-wrap md:m-2 m-1 lg:w-[70%] md:w-[80%] sm:[90%] min-[370px]:w-[90%] lg:h-[100%] sm:h-[74%] min-[370px]:h-[70%]">
          <div className="flex flex-wrap w-3/5">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-[100%] h-auto object-cover object-center block"
                src={mainImg}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-2/5">
            {twoImg.map((el) => {
              return (
                <div className="md:p-2 p-1 w-full" key={el.id}>
                  <img
                    alt="gallery"
                    className=" w-[100%] object-cover h-auto object-center block"
                    src={el.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
