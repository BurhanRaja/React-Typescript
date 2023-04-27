import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { clearState, loginSellerThunk } from "../../features/seller/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error Message
  const [errorMsg, setErrorMsg] = useState("");

  const { token, isError, isLoading } = useAppSelector(
    (state: any) => state.sellerAuth
  );
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isError && !isLoading && token !== "") {
      localStorage.setItem("sellerToken", token);
      sessionStorage.setItem("loggedin", "1");
      sessionStorage.setItem("address", "true");
      toast.success("Successfully Logged In");
      dispatch(clearState());
      navigate("/seller/dashboard");
    }
  }, [isLoading, isError]);

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

    dispatch(loginSellerThunk(data)).then((data: any) => {
      console.log("hello");

      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("User Already Exists.");
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error");
      }
    });
  };

  let sellerToken = localStorage.getItem("sellerToken");

  return sellerToken ? (
    <Navigate to="/seller/dashboard" />
  ) : (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Seller Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Login to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-0"
                placeholder="Enter email"
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
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-0"
                placeholder="Enter password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small
                className={
                  password.length === 0 && errorMsg ? "text-red-500" : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>
          </div>

          <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
            Login
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?{" "}
            <Link className="underline text-indigo-600" to="/seller/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
