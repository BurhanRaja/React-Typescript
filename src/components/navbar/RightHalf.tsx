import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCart, BsSearch } from "react-icons/bs";
import Menu from "./Menu";
import Cart from "./customizedMenus/Cart";
import Notification from "./customizedMenus/Notification";
import { useState } from "react";

const RightHalf = (): JSX.Element => {
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <ul className="flex justify-between w-[18rem] items-center">
      <li>
        <button className="text-lg flex">
          <BsSearch />
        </button>
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
        {notifyOpen && <Menu children={<Notification />} width={60} />}
      </li>
      <li className="relative">
        <button
          className="text-xl flex"
          onClick={() => {
            setCartOpen(!cartOpen);
            setNotifyOpen(false);
          }}
        >
          <BsCart />
        </button>
        {cartOpen && <Menu children={<Cart />} width={72} />}
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
