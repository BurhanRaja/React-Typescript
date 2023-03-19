import { FiChevronDown } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

type SideMenuProps = {
  setBar: (val: boolean) => void;
  toggleBar: boolean
};

const SideMenu = ({ setBar, toggleBar }: SideMenuProps): JSX.Element => {
  return (
    <div className={`flex h-screen flex-col justify-between border-r bg-white fixed top-0 left-0 z-50 w-[20%] ${toggleBar ? "transition-all duration-300 translate-x-[0%]" : "transition-all duration-300 translate-x-[-100%]"}`}>
      <div className="px-4 py-6">
        <div className="flex justify-between items-center">
          <h2 className="font-extrabold uppercase lg:block text-black">
            <a href="/">Company</a>
          </h2>
          <button onClick={() => setBar(false)}>
            <IoCloseOutline className="text-black" />
          </button>
        </div>

        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <a
            href="/"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <span className="text-sm font-medium"> General </span>
          </a>

          {/* Team */}
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium"> Teams </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <FiChevronDown />
              </span>
            </summary>
            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              <a
                href="/"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium"> Banned Users </span>
              </a>

              {/* Team 2 */}
              <details className="group/nested [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
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
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-sm font-medium"> Banned Users </span>
                  </a>

                  <a
                    href="/"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-sm font-medium"> Calendar </span>
                  </a>
                </nav>
              </details>

              {/* Team 2 */}
              <a
                href="/"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium"> Calendar </span>
              </a>
            </nav>
          </details>

          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium"> Billing </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <span className="text-sm font-medium"> Invoices </span>
          </a>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium"> Account </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <FiChevronDown />
              </span>
            </summary>

            <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium"> Details </span>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium"> Security </span>
              </a>

              <form action="/logout">
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Logout </span>
                </button>
              </form>
            </nav>
          </details>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
