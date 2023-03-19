const CheckoutForm = () => {
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
        <form className="space-y-4">
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-700">Delivery Address</p>
              <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Add Address
              </button>
            </div>
            <div className="mt-4">
              <div className="flex justify-end items-center">
              <button className="px-2 py-1 text-sm font-medium tracking-wide capitalize">
                Edit
              </button>
              <button className="px-2 py-1 text-sm font-medium text-red-500 tracking-wide capitalize">
                Delete
              </button>
              </div>
              <input
                className="peer sr-only"
                id="option1"
                type="radio"
                tabIndex={-1}
                name="option"
              />
              <label
                htmlFor="option1"
                className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex={0}
              >
                <span className="text-sm font-medium"> Option 1 </span>
              </label>
            </div>
          </div>

          <fieldset className="col-span-6">
            <legend className="block text-sm font-medium text-gray-700">
              Card Details
            </legend>
            <div className="mt-1 rounded-md bg-white shadow-sm">
              <div>
                <input type="text" placeholder="Card Number" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div className="flex mt-3">
                <div className="flex-1 mr-2">
                  <input
                    type="text"
                    id="Card Expiry"
                    placeholder="Expiry Date"
                    className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1">
                  <input
                    type="text"
                    id="CardCVV"
                    placeholder="CVV"
                    className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-5  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <div className="col-span-6">
            <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
