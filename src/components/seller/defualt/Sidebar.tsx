import { AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";
import { BiGift } from "react-icons/bi";
import { BsListUl } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { MdDashboard, MdLogout, MdOutlinePendingActions } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";

const Sidebar = (): JSX.Element => {
  return (
    <div
      className={`flex h-screen flex-col justify-between border-r fixed top-0 left-0 z-50 w-[20%] transition-all duration-300 translate-x-[0%]
      bg-gray-800 text-white`}
    >
      <div className="px-4 py-6">
          <h2 className="font-extrabold uppercase text-2xl lg:block ">
            <a href="/">Company</a>
          </h2>

        <nav
          aria-label="Main Nav"
          className="mt-6 flex flex-col space-y-1 text-white"
        >
          <a
            href="/"
            className="flex items-center gap-2 rounded-lg px-4 py-3 text-base"
          >
            <MdDashboard />
            <span className="font-medium"> Dashboard </span>
          </a>

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
              <a
                href="/"
                className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-700"
              >
                <AiOutlinePlus />
                <span className="text-sm font-medium"> Add Product </span>
              </a>

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

              {/* Team 2 */}
              <a
                href="/"
                className="flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-700"
              >
                <BsListUl />
                <span className="text-sm font-medium"> Product Listing </span>
              </a>
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
              <a
                href="/"
                className="flex items-center gap-2 rounded-lg px-4 py-3  hover:bg-gray-100 hover:text-gray-700 text-base"
              >
                <AiOutlinePlus />
                <span className="text-sm font-medium"> Add Discount </span>
              </a>
              <a
                href="/"
                className="flex items-center gap-2 rounded-lg px-4 py-3  hover:bg-gray-100 hover:text-gray-700 text-base"
              >
                <BsListUl />
                <span className="text-sm font-medium"> Discount Listing </span>
              </a>
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
              <a
                href="/"
                className="flex items-center gap-2 rounded-lg px-4 py-3  hover:bg-gray-100 hover:text-gray-700 text-base"
              >
                <MdOutlinePendingActions />
                <span className="text-sm font-medium"> Pending Orders </span>
              </a>
              <a
                href="/"
                className="flex items-center gap-2 rounded-lg px-4 py-3  hover:bg-gray-100 hover:text-gray-700 text-base"
              >
                <BsListUl />
                <span className="text-sm font-medium"> Completed Orders </span>
              </a>
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
