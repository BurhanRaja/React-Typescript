import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FIRSTNAME_REGEX = /^[A-z0-9-_\s]{4,40}$/;
const LASTNAME_REGEX = /^[A-z0-9-_\s]{4,40}$/;
const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error Message
  const [errorMsg, setErrorMsg] = useState("");

  // Register Seller
  const {token, isLoading, isError} = useSelector((state: any) => state.sellerAuth);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (fname === "" || lname === "" || email === "" || password === "" || confirmPassword === "") {
      setErrorMsg("Please fill the above field.");
      return;
    };


  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Seller Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Register to your account
          </p>

          <div>
            <label htmlFor="fname" className="sr-only">
              First Name
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-0"
                placeholder="Enter First Name"
                name="fname"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4"></span>
            </div>
          </div>

          <div>
            <label htmlFor="lname" className="sr-only">
              Last Name
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-0"
                placeholder="Enter Last Name"
                name="lname"
                id="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4"></span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-0"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4"></span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-0"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4"></span>
            </div>
          </div>

          <div>
            <label htmlFor="confimPassword" className="sr-only">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type="password"
                id="confimPassword"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-0"
                placeholder="Enter Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4"></span>
            </div>
          </div>

          <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
            Register
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?{" "}
            <Link className="underline" to="/seller/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
