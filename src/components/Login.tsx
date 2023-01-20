const Login = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
        <div className="w-[50%]">
            <img src="/images/logingif.gif" alt="loginbg" className="w-[80%]  mx-auto" />
        </div>
      <div className="w-[50%]">
        <div className="w-[75%] mx-auto rounded-lg p-8 flex flex-col mt-10 md:mt-0">
          <h2 className="text-3xl font-medium title-font mb-5">
            Login
          </h2>
          <form className="text-start">
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
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-[100%]">
              Login
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-3">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700 underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
