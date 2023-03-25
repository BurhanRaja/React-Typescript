import { BsCheckLg } from "react-icons/bs";

const AddDiscount = () => {
  return (
    <>
      <div className="p-10 bg-slate-200 h-[100%]">
        <div className="bg-white p-8 rounded-md">
          <div className="mb-5">
            <h2 className="text-3xl font-bold">Add Discount</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="color" className="leading-7 text-sm text-gray-600">
              Discount Percentage
            </label>
            <input
              type="number"
              id="color"
              name="color"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="color" className="leading-7 text-sm text-gray-600">
              Description
            </label>
            <textarea className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
          </div>
          <div className="mb-3">
            <p className="leading-7 text-lg text-gray-800 font-semibold mb-3">
              Choose Products on which you need to apply
            </p>
            <input
              className="peer sr-only"
              id="productid"
              type="radio"
              tabIndex={-1}
              name="products[]"
            />
            <label
              htmlFor="productid"
              className="block w-full rounded-lg border border-green-600 p-3 mb-2 relative"
            >
              <button className="bg-green-600 text-white p-2 rounded-full absolute top-[-20px] right-0">
                <BsCheckLg className="" />
              </button>
              <span className="text-sm font-medium">
                <div className="flex justify-start">
                  <img
                    src="https://images.unsplash.com/photo-1677554196958-a21c6d8fc78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                    alt="productimg"
                    width={100}
                    height={100}
                  />
                  <div className="w-[85%] ml-10">
                    <h3 className="text-xl font-bold">Name of Product</h3>
                    <p>
                      <b>Price:</b> ₹ 10000
                    </p>
                  </div>
                </div>
              </span>
            </label>
            <input
              className="peer sr-only"
              id="productid"
              type="radio"
              tabIndex={-1}
              name="products[]"
            />
            <label
              htmlFor="productid"
              className="block w-full rounded-lg border border-gray-200 p-3 mb-2"
            >
              <span className="text-sm font-medium">
                <div className="flex justify-start">
                  <img
                    src="https://images.unsplash.com/photo-1677554196958-a21c6d8fc78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                    alt="productimg"
                    width={100}
                    height={100}
                  />
                  <div className="w-[85%] ml-10">
                    <h3 className="text-xl font-bold">Name of Product</h3>
                    <p>
                      <b>Price:</b> ₹ 10000
                    </p>
                  </div>
                </div>
              </span>
            </label>
          </div>
          <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
            Add Discount
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDiscount;
