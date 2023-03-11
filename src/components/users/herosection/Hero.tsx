import { BsArrowRight } from "react-icons/bs";

type HeroProps = {
  fTitle: string;
  lTitle: string;
  link: string;
  mainImg: string;
  oneImg: string;
  twoImg: string;
  bgColor: string;
};

const Hero = ({
  fTitle,
  lTitle,
  link,
  mainImg,
  twoImg,
  oneImg,
  bgColor,
}: HeroProps): JSX.Element => {
  return (
    <div className={`px-4 py-16 md:px-24 lg:px-8 lg:py-20 ${bgColor}`}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg lg:pl-20">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans lg:text-7xl md:text-6xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
              {fTitle}
              <br className="hidden md:block" />
              {lTitle}
            </h2>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              <button
                type="button"
                className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 flex justify-between items-center"
              >
                <span className="text-lg">Shop Now</span>{" "}
                <span className="ml-4 text-lg">
                  <BsArrowRight />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={oneImg}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={twoImg}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={mainImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
