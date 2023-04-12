import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error Message
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setErrorMsg("Please fill the above field.");
      return;
    }

    let data = {
      email,
      password,
    };
  };

  let sellerToken = localStorage.getItem("sellerToken");

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
            <h2 className="text-3xl font-medium title-font mb-5">Login</h2>
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
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small
                  className={
                    email.length === 0 && errorMsg ? "text-red-500" : "hidden"
                  }
                >
                  {errorMsg}
                </small>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small
                  className={
                    password.length === 0 && errorMsg
                      ? "text-red-500"
                      : "hidden"
                  }
                >
                  {errorMsg}
                </small>
              </div>
              <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
                Login
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-3">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
