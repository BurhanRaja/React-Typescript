import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Seller Register
        </h1>

        <form
          action=""
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
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
              </span>
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
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-0"
                placeholder="Enter email"
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
              </span>
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
              />

              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
              </span>
            </div>
          </div>

          <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
              Register
            </button>

          <p className="text-center text-sm text-gray-500">
            No account? {" "}
            <Link className="underline" to="/seller/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
