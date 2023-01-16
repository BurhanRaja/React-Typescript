import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

type a = {};

const Navbar = (): JSX.Element => {
  return (
    <div className="">
      <nav className="flex p-5 justify-between items-center">
        <div className="flex">
          <button className="lg:hidden md:hidden sm:block">
            <GiHamburgerMenu />
          </button>
          <h2 className="font-extrabold uppercase lg:block max-md:hidden">
            <a href="#">Company</a>
          </h2>
          <ul className="ml-10 justify-between w-[16rem] md:flex max-md:hidden">
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Groceries</a>
            </li>
          </ul>
        </div>
        <ul className="flex justify-evenly w-[18rem] items-center">
          <li>
            <button className="text-xl flex">
              <IoMdNotificationsOutline />
            </button>
          </li>
          <li>
            <button className="text-xl flex">
              <BsCart />
            </button>
          </li>
          <li>
            <button className="bg-black px-2 py-1 rounded-md border-[0.1rem] border-black hover:bg-transparent hover:text-black transition duration-150 text-white max-sm:text-sm">
              Sign in
            </button>
          </li>
          <li>
            <button className="bg-white border-[0.1rem] border-black px-2 py-1 rounded-md hover:bg-black hover:text-white transition duration-150 max-sm:text-sm">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
