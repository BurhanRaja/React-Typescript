import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearState, registerSellerThunk } from "../../features/seller/auth";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const FIRSTNAME_REGEX = /^[A-z0-9]{4,20}$/;
const LASTNAME_REGEX = /^[A-z0-9]{4,20}$/;
const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const Register = () => {
  const [fname, setFname] = useState("");
  const [isValidFname, setIsValidFname] = useState(false);
  const [fnameFocus, setFnameFocus] = useState(false);

  const [lname, setLname] = useState("");
  const [isValidLname, setIsValidLname] = useState(false);
  const [lnameFocus, setLnameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidMatchPass, setIsValidMatchPass] = useState(false);
  const [cpasswordFocus, setCPasswordFocus] = useState(false);

  // Validation
  useEffect(() => {
    setIsValidFname(FIRSTNAME_REGEX.test(fname));
  }, [fname]);

  useEffect(() => {
    setIsValidLname(LASTNAME_REGEX.test(lname));
  }, [lname]);

  useEffect(() => {
    setIsValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setIsValidPassword(PASSWORD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setIsValidMatchPass(password === confirmPassword);
  }, [confirmPassword]);

  // Show Password
  const [showPassword, setShowPassword] = useState(false);

  // Error Message
  const [errorMsg, setErrorMsg] = useState("");

  // Navigation
  const navigate = useNavigate();

  // Register Seller
  const { token, isError, isLoading } = useAppSelector(
    (state: any) => state.sellerAuth
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && !isError && token !== "") {
      localStorage.setItem("sellerToken", token);
      localStorage.setItem("sellerinfo", "false");
      sessionStorage.setItem("loggedin", "1");
      toast.success("Successfully Registered");
      dispatch(clearState());
      navigate("/seller/add/sellerinfo");
    }
  }, [isLoading, isError]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorMsg("Please fill the above field.");
      return;
    }

    const c1: boolean = FIRSTNAME_REGEX.test(fname);
    const c2: boolean = LASTNAME_REGEX.test(lname);
    const c3: boolean = EMAIL_REGEX.test(email);
    const c4: boolean = PASSWORD_REGEX.test(password);
    const c5: boolean = password === confirmPassword;

    if (!c1 || !c2 || !c3 || !c4 || !c5) {
      toast.warning("Invalid Credentials");
      return;
    }

    let data = {
      fname,
      lname,
      email,
      password,
    };

    dispatch(registerSellerThunk(data)).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("User Already Exists.");
        return;
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error");
        return;
      }
    });
  };

  let sellerToken = localStorage.getItem("sellerToken");
  let address = localStorage.getItem("address");

  return sellerToken && address ? (
    <Navigate to="/seller/dashboard" />
  ) : (
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
                className={`w-full rounded-lg border ${
                  fnameFocus &&
                  (isValidFname ? "border-gray-200" : "border-red-500")
                } p-4 pr-12 text-sm shadow-sm focus:outline-0`}
                placeholder="Enter First Name"
                name="fname"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                onFocus={() => setFnameFocus(true)}
                onBlur={() => setFnameFocus(false)}
              />
              <small
                className={
                  fname.length === 0 && errorMsg ? "text-red-500" : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>
          </div>

          <div>
            <label htmlFor="lname" className="sr-only">
              Last Name
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full rounded-lg border ${
                  lnameFocus &&
                  (isValidLname ? "border-gray-200" : "border-red-500")
                }  p-4 pr-12 text-sm shadow-sm focus:outline-0`}
                placeholder="Enter Last Name"
                name="lname"
                id="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                onFocus={() => setLnameFocus(true)}
                onBlur={() => setLnameFocus(false)}
              />
              <small
                className={
                  lname.length === 0 && errorMsg ? "text-red-500" : "hidden"
                }
              >
                {errorMsg}
              </small>
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
                className={`w-full rounded-lg border ${
                  emailFocus &&
                  (isValidEmail ? "border-gray-200" : "border-red-500")
                }  p-4 pr-12 text-sm shadow-sm focus:outline-0`}
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
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
                type={showPassword ? "text" : "password"}
                id="password"
                className={`w-full rounded-lg border ${
                  passwordFocus &&
                  (isValidPassword ? "border-gray-200" : "border-red-500")
                }  p-4 pr-12 text-sm shadow-sm focus:outline-0`}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                {!showPassword ? (
                  <AiFillEye
                    onClick={() => setShowPassword(true)}
                    className="hover:cursor-pointer"
                  />
                ) : (
                  <AiFillEyeInvisible
                    onClick={() => setShowPassword(false)}
                    className="hover:cursor-pointer"
                  />
                )}
              </span>
              <small
                className={
                  password.length === 0 && errorMsg ? "text-red-500" : "hidden"
                }
              >
                {errorMsg}
              </small>
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
                className={`w-full rounded-lg border ${
                  cpasswordFocus &&
                  (isValidMatchPass ? "border-gray-200" : "border-red-500")
                }  p-4 pr-12 text-sm shadow-sm focus:outline-0`}
                placeholder="Enter Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setCPasswordFocus(true)}
                onBlur={() => setCPasswordFocus(false)}
              />
              <small
                className={
                  confirmPassword.length === 0 && errorMsg
                    ? "text-red-500"
                    : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>
          </div>

          <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
            Register
          </button>
          <p className="text-center text-sm text-gray-500">
            No account?{" "}
            <Link className="underline text-indigo-600" to="/seller/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
