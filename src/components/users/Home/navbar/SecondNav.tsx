import { useState } from "react";
import { BsCart, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Menu from "./Menu";
import SideMenu from "./SideMenu";
import Cart from "./customizedMenus/Cart";
import Notification from "./customizedMenus/Notification";
import Search from "./customizedMenus/Search";

const SecondNav = (): JSX.Element => {
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  console.log(sideBar);

  return (
    <div className="flex justify-between items-center p-5 px-8 bg-black text-white">
      <button
        className="mr-5 flex items-center justify-center font-medium rounded-lg text-sm px-5 py-2.5"
        type="button"
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
        onClick={() => setSideBar(true)}
      >
        <span className="mr-2">
          <GiHamburgerMenu className="text-lg" />
        </span>
        <span>All</span>
      </button>

      <SideMenu setBar={(val: boolean) => setSideBar(val)} toggleBar={sideBar} />

      <ul className="flex justify-evenly w-[16rem] items-center">
        <li className="relative lg:hidden md:block">
          <button
            className="text-lg flex"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <BsSearch />
          </button>
          {searchOpen && <Search setOpen={(val) => setSearchOpen(val)} />}
        </li>
        <li className="relative">
          <button
            className="text-2xl flex"
            onClick={() => {
              setNotifyOpen(!notifyOpen);
              setCartOpen(false);
            }}
          >
            <IoMdNotificationsOutline />
          </button>
          {notifyOpen && <Menu children={<Notification />} />}
        </li>
        <li className="relative">
          <button
            className="text-2xl flex"
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
          <button>
            <span className="font-bold">Your Orders</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SecondNav;
