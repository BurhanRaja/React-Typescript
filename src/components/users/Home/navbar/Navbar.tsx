
import RightHalf from "./RightHalf";
import {BsSearch} from "react-icons/bs";

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex py-5 justify-between items-center px-9">
      <div className="flex">
        <h2 className="font-extrabold uppercase lg:block">
          <a href="/">Company</a>
        </h2>
      </div>
      <form className="flex justify-center items-center w-[60%] lg:flex max-lg:hidden">
        <input type="text" className="w-[100%] border-[0.1rem] rounded-l-sm p-1 focus:outline-none focus:border-[0.1rem] focus:border-black border-gray-400" />
          <button className="text-lg flex bg-black text-white py-[0.55rem] px-2 rounded-r-sm">
            <BsSearch />
          </button>
        </form>
      <RightHalf />
    </nav>
  );
};

export default Navbar;
