import { AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";
import { BiGift } from "react-icons/bi";
import { BsListUl } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import { MdDashboard, MdLogout, MdOutlinePendingActions } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";

import {Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar = (): JSX.Element => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Successfully Logged Out!");
    navigate("/seller/login");
  }

  return (
    <div
      className={`flex h-screen flex-col justify-between border-r fixed top-0 left-0 z-50 w-[20%] transition-all duration-300 translate-x-[0%]
      bg-gray-800 text-white`}
    >
      <div className="px-4 py-6">
          <h2 className="font-extrabold uppercase text-2xl lg:block ">
            <Link to="/seller/dashboard">Company</Link>
          </h2>

        <nav
          aria-label="Main Nav"
          className="mt-6 flex flex-col space-y-1 text-white"
        >
          <Link
            to="/seller/dashboard"
            className="flex items-center gap-2 rounded-lg px-4 py-3 text-base"
          >
            <MdDashboard />
            <span className="font-medium"> Dashboard </span>
          </Link>

          {/* Product */}
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2 text-base">
                <BiGift />
                <span className="font-medium"> Products </span>
              </div>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <FiChevronDown />
              </span>
            </summary>
            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              {/* Add Product */}
              <Link
                to="/seller/add/product"
                className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-700"
              >
                <AiOutlinePlus />
                <span className="text-sm font-medium"> Add Product </span>
              </Link>

              {/* Team 2
              <details className="group/nested [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-100 hover:text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium"> Hello </span>
                  </div>

                  <span className="shrink-0 transition duration-300 group-open/nested:-rotate-180">
                    <FiChevronDown />
                  </span>
                </summary>
                <nav aria-label="Hello Nav" className="mt-2 flex flex-col px-4">
                  <a
                    href="/"
                    className="flex items-center gap-2 rounded-lg px-4 py-2  hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-sm font-medium"> Banned Users </span>
                  </a>

                  <a
                    href="/"
                    className="flex items-center gap-2 rounded-lg px-4 py-2  hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-sm font-medium"> Calendar </span>
                  </a>
                </nav>
              </details> */}

              {/* Product Listing */}
              <Link
                to="/seller/product/list"
                className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-700"
              >
                <BsListUl />
                <span className="text-sm font-medium"> Product Listing </span>
              </Link>
            </nav>
          </details>

          {/* Discount */}
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2 text-base">
                <TbDiscount2 />
                <span className="font-medium"> Discount </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <FiChevronDown />
              </span>
            </summary>
            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              <Link
                to="/seller/add/discount"
                className="flex items-center gap-2 rounded-lg px-4 py-3  hover:bg-gray-100 hover:text-gray-700 text-base"
              >
                <AiOutlinePlus />
                <span className="text-sm font-medium"> Add Discount </span>
              </Link>
              <Link
                to="/seller/discount/list"
                className="flex items-center gap-2 rounded-lg px-4 py-3  hover:bg-gray-100 hover:text-gray-700 text-base"
              >
                <BsListUl />
                <span className="text-sm font-medium"> Discount Listing </span>
              </Link>
            </nav>
          </details>

          {/* Orders */}
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2 text-base">
                <AiOutlineShoppingCart />
                <span className="font-medium"> Orders </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <FiChevronDown />
              </span>
            </summary>
            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              <Link
                to="/seller/pending/orders"
                className="flex items-center gap-2 rounded-lg px-4 py-3  hover:bg-gray-100 hover:text-gray-700 text-base"
              >
                <MdOutlinePendingActions />
                <span className="text-sm font-medium"> Pending Orders </span>
              </Link>
            </nav>
          </details>

          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-700 text-base"
          >
            <CgProfile />
            <span className="font-medium"> Seller Profile </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-3  hover:bg-gray-100 hover:text-gray-700 text-base"
          >
            <RiProfileLine />
            <span className="font-medium"> Seller Info </span>
          </a>

          <form action="/logout">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-3 hover:bg-red-500 hover:text-gray-700 text-base"
              onClick={handleLogout}
            >
              <MdLogout />
              <span className="font-medium"> Logout </span>
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
