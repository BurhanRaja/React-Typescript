import { GiHamburgerMenu } from "react-icons/gi";
import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";

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
      <RightHalf />
    </nav>
  );
};

export default Navbar;
