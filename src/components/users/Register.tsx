import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  clearUserAuthState,
  userRegisterThunk,
} from "../../features/user/auth";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";

const FULLNAME_REGEX = /^([a-zA-Z])+(\s)+[a-zA-Z]+$/;
const PHONE_REGEX = /^[0-9]{10,15}$/;
const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [isValidFullname, setIsValidFullname] = useState<Boolean>(false);
  const [fullNameFocus, setFullNameFocus] = useState<Boolean>(false);

  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState<Boolean>(false);
  const [phoneFocus, setPhoneFocus] = useState<Boolean>(false);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState<Boolean>(false);
  const [emailFocus, setEmailFocus] = useState<Boolean>(false);

  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState<Boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<Boolean>(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidMatchPass, setIsValidMatchPass] = useState<Boolean>(false);
  const [cpasswordFocus, setCPasswordFocus] = useState<Boolean>(false);

  // Validation
  useEffect(() => {
    setIsValidFullname(FULLNAME_REGEX.test(fullName));
  }, [fullName]);

  useEffect(() => {
    setIsValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);

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

  const { token, isLoading, isError } = useAppSelector(
    (state) => state.userAuthAction
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && !isError && token !== "") {
      localStorage.setItem("userToken", token);
      sessionStorage.setItem("userloggedin", "1");
      toast.success("Successfully Registered");
      navigate("/");
      dispatch(clearUserAuthState());
    }
  }, [isLoading, isError]);

  // Handle Submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      fullName === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorMsg("Please fill the above field.");
      return;
    }

    const c1: boolean = FULLNAME_REGEX.test(fullName);
    const c2: boolean = PHONE_REGEX.test(phone);
    const c3: boolean = EMAIL_REGEX.test(email);
    const c4: boolean = PASSWORD_REGEX.test(password);
    const c5: boolean = password === confirmPassword;

    if (!c1 || !c2 || !c3 || !c4 || !c5) {
      toast.warning("Invalid Credentials");
      return;
    }

    const fullname = fullName.split(" ");
    const fname = fullname[0];
    const lname = fullname[1];

    let data = {
      fname,
      lname,
      email,
      password,
      phone: Number(phone),
    };

    dispatch(userRegisterThunk(data)).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("User Already Exists.");
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error");
      }
    });
  };

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
            <form className="text-start" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="fullname"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className={`w-full bg-white rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    fullNameFocus &&
                    (isValidFullname ? "border-gray-300" : "border-red-500")
                  } p-4 pr-12 text-sm shadow-sm focus:outline-0`}
                  name="fullName"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onFocus={() => setFullNameFocus(true)}
                  onBlur={() => setFullNameFocus(false)}
                />
                <small>Only Name and Surname</small>
                <small
                  className={
                    fullName.length === 0 && errorMsg
                      ? "text-red-500"
                      : "hidden"
                  }
                >
                  {errorMsg}
                </small>
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
                  className={`w-full bg-white rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    emailFocus &&
                    (isValidEmail ? "border-gray-200" : "border-red-500")
                  }  p-4 pr-12 text-sm shadow-sm focus:outline-0`}
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
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="number"
                  className={`w-full bg-white rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    phoneFocus &&
                    (isValidPhone ? "border-gray-200" : "border-red-500")
                  }  p-4 text-sm shadow-sm focus:outline-0`}
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onFocus={() => setPhoneFocus(true)}
                  onBlur={() => setPhoneFocus(false)}
                />
                <small
                  className={
                    phone.length === 0 && errorMsg ? "text-red-500" : "hidden"
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`w-full bg-white rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    passwordFocus &&
                    (isValidPassword ? "border-gray-200" : "border-red-500")
                  }  p-4 pr-12 text-sm shadow-sm focus:outline-0`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />
                <span className="absolute inset-y-0 top-6 right-0 grid place-content-center px-4">
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
                    password.length === 0 && errorMsg
                      ? "text-red-500"
                      : "hidden"
                  }
                >
                  {errorMsg}
                </small>
              </div>

              <div>
                <label
                  htmlFor="confimPassword"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <div className="relative mb-4">
                  <input
                    type="password"
                    id="confimPassword"
                    className={`w-full bg-white rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                      cpasswordFocus &&
                      (isValidMatchPass ? "border-gray-200" : "border-red-500")
                    }  p-4 text-sm shadow-sm focus:outline-0`}
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
