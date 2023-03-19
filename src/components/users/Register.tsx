import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex justify-end pr-10 items-center mt-10">
        <Link to="/">
          <GrClose className="hover:cursor-pointer text-2xl" />
        </Link>
      </div>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-[50%]">
          <img
            src="/images/logingif.gif"
            alt="loginbg"
            className="w-[80%]  mx-auto"
          />
        </div>
        <div className="w-[50%]">
          <div className="w-[75%] mx-auto rounded-lg p-8 flex flex-col mt-10 md:mt-0">
            <h2 className="text-3xl font-medium title-font mb-5">Register</h2>
            <form className="text-start">
              <div className="relative mb-4">
                <label
                  htmlFor="fullname"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
                Register
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-3">
              Don't have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
