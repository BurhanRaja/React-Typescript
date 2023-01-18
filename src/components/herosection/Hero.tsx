import { BsArrowRight } from "react-icons/bs";

type HeroProps = {
  fTitle: string;
  lTitle: string;
  link: string;
  mainImg: string;
  twoImg: Array<{id: string, name: string}>;
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
    <div className={`mt-1 p-5 lg:md:h-[30rem] sm:h-96 flex ${bgColor}`}>
      <div className="text-7xl text-start font-semibold w-[50%] h-[100%] font-roboto mr-9 ">
        <div className="flex flex-col justify-center h-[100%] w-[60%] mx-auto">
          <p className="pb-4 z-10 md:pr-10 mr-16">{fTitle}</p>
          <p className="z-10">{lTitle}</p>
          <div className="mt-6">
            <a href={link}>
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
          <img src={mainImg} alt="mainImg" className="w-[18rem] rounded-md" />
        </div>
        {twoImg.map((el) => {
          return <div key={el.id}>
            <img
              src={el.name}
              alt="menfashion"
              className="w-[13rem] rounded-md row-span-1"
            />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Hero;
