import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCart, BsSearch } from "react-icons/bs";
import Menu from "./Menu";
import Cart from "./customizedMenus/Cart";
import Notification from "./customizedMenus/Notification";
import Search from "./customizedMenus/Search";
import { useState } from "react";

const RightHalf = (): JSX.Element => {
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <ul className="flex justify-between w-[16rem] items-center">
      <li className="relative lg:hidden md:block">
          <button className="text-lg flex" onClick={() => setSearchOpen(!searchOpen)}>
            <BsSearch />
          </button>
        {searchOpen && <Search setOpen={(val) => setSearchOpen(val)} />}
      </li>
      <li className="relative">
        <button
          className="text-xl flex"
          onClick={() => {
            setNotifyOpen(!notifyOpen);
            setCartOpen(false);
          }}
        >
          <IoMdNotificationsOutline />
        </button>
        {notifyOpen && <Menu children={<Notification />} />}
      </li>
      <li className="relative w-">
        <button
          className="text-xl flex"
          onClick={() => {
            setCartOpen(!cartOpen);
            setNotifyOpen(false);
          }}
        >
          <BsCart />
        </button>
        {cartOpen && <Menu children={<Cart />} />}
      </li>
      <li>
        <button className="bg-black w- px-2 py-1 rounded-md border-[0.1rem] border-black hover:bg-transparent hover:text-black transition duration-150 text-white max-sm:text-sm">
          Sign in
        </button>
      </li>
      <li>
        <button className="bg-white border-[0.1rem] border-black px-2 py-1 rounded-md hover:bg-black hover:text-white transition duration-150 max-sm:text-sm">
          Login
        </button>
      </li>
    </ul>
  );
};

export default RightHalf;
