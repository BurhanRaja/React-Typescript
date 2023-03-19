import { IoMdNotificationsOutline } from "react-icons/io";

const Header = (): JSX.Element => {
  return (
    <nav className="relative bg-slate-200 w-[100%] ml-[16rem]">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="absolute z-20 lg:w-[50%] px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center  lg:justify-end">
            <div className="flex items-center justify-between mt-4 lg:mt-0 w-[100%]">
              <input
                type="text"
                className="py-2 px-3 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 w-[70%]"
                placeholder="Search"
              />

              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                aria-label="show notifications"
              >
                <IoMdNotificationsOutline className="text-xl" />
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
