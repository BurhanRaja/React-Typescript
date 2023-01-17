import { GiHamburgerMenu } from "react-icons/gi";
import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";
import {BsSearch} from "react-icons/bs";

type a = {};

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex py-5 justify-between items-center">
      <div className="flex">
        <button className="lg:hidden md:hidden sm:block">
          <GiHamburgerMenu />
        </button>
        <h2 className="font-extrabold uppercase lg:block max-md:hidden">
          <a href="#">Company</a>
        </h2>
        <LeftHalf />
      </div>
      <form className="flex justify-center items-center w-[45%] lg:flex max-lg:hidden">
        <input type="text" className="w-[100%] border-[0.1rem] rounded-l-md p-1 focus:outline-none focus:border-[0.1rem] focus:border-black border-gray-400" />
          <button className="text-lg flex bg-black text-white py-[0.55rem] px-2 rounded-r-md">
            <BsSearch />
          </button>
        </form>
      <RightHalf />
    </nav>
  );
};

export default Navbar;
