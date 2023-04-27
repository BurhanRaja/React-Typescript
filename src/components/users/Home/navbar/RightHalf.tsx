import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import useAppSelector from "../../../../hooks/useAppSelector";
import { getUserThunk } from "../../../../features/user/user";
import { BsCart, BsSearch } from "react-icons/bs";
import Menu from "./Menu";
import Cart from "./customizedMenus/Cart";
import Search from "./customizedMenus/Search";

const RightHalf = (): JSX.Element => {
  let token = localStorage.getItem("userToken");

  const [name, setName] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const { user } = useAppSelector((state) => state.userCrudAction);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  return !token ? (
    <ul className="flex justify-center w-[16rem] items-center">
      <li>
        <Link to="/register">
          <button className="bg-black w- px-2 py-1 rounded-sm border-[0.1rem] border-black hover:bg-transparent hover:text-black transition duration-150 text-white max-sm:text-sm mr-6">
            Register
          </button>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <button className="bg-white border-[0.1rem] border-black px-2 py-1 rounded-sm hover:bg-black hover:text-white transition duration-150 max-sm:text-sm">
            Login
          </button>
        </Link>
      </li>
    </ul>
  ) : (
    <div className="flex">
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
                setCartOpen(!cartOpen);
              }}
            >
              <BsCart />
            </button>
            {cartOpen && <Menu children={<Cart />} />}
          </li>
          <li>
            <Link to="/all/orders">
              <button>
                <span className="font-bold">Your Orders</span>
              </button>
            </Link>
          </li>
      </ul>
      <div className="flex items-center gap-x-2">
        <CgProfile className="object-cover w-8 h-8 rounded-full" />
        <div>
          <h1 className="text-lg font-semibold text-gray-700 capitalize ">
            {user?.first_name + " " + user?.last_name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RightHalf;
