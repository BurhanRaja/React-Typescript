const CheckoutForm = () => {
  return (
    <div  className="bg-white py-12 md:py-24">
        <div  className="mx-auto max-w-lg px-4 lg:px-8">
          <form  className="grid grid-cols-6 gap-4">
            <div  className="col-span-3">
              <label
                 htmlFor="FirstName"
                 className="block text-xs font-medium text-gray-700"
              >
                First Name
              </label>
  
              <input type="text"  className="block bg-gray-50 mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
            </div>
  
            <div  className="col-span-3">
              <label
                 htmlFor="LastName"
                 className="block text-xs font-medium text-gray-700"
              >
                Last Name
              </label>
  
              <input type="text" className="block bg-gray-50 mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
            </div>
  
            <div  className="col-span-6">
              <label  htmlFor="Email"  className="block text-xs font-medium text-gray-700">
                Email
              </label>
  
              <input type="email" placeholder="john@example.com" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
  
            <div  className="col-span-6">
              <label  htmlFor="Phone"  className="block text-xs font-medium text-gray-700">
                Phone
              </label>
  
              <input
                type="tel"
                id="Phone"
                 className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
  
            <fieldset  className="col-span-6">
              <legend  className="block text-sm font-medium text-gray-700">
                Card Details
              </legend>
  
              <div  className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label  htmlFor="CardNumber"  className="sr-only"> Card Number </label>
  
                  <input
                    type="text"
                    id="CardNumber"
                    placeholder="Card Number"
                     className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>
  
                <div  className="flex -space-x-px">
                  <div  className="flex-1">
                    <label  htmlFor="CardExpiry"  className="sr-only"> Card Expiry </label>
  
                    <input
                      type="text"
                      id="CardExpiry"
                      placeholder="Expiry Date"
                       className="relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>
  
                  <div  className="flex-1">
                    <label  htmlFor="CardCVC"  className="sr-only"> Card CVC </label>
  
                    <input
                      type="text"
                      id="CardCVC"
                      placeholder="CVC"
                       className="relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
  
            <fieldset  className="col-span-6">
              <legend  className="block text-sm font-medium text-gray-700">
                Billing Address
              </legend>
  
              <div  className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label  htmlFor="Country"  className="sr-only">Country</label>
  
                  <select
                    id="Country"
                     className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  >
                    <option>England</option>
                    <option>Wales</option>
                    <option>Scotland</option>
                    <option>France</option>
                    <option>Belgium</option>
                    <option>Japan</option>
                  </select>
                </div>
  
                <div>
                  <label  className="sr-only"  htmlFor="PostalCode"> ZIP/Post Code </label>
  
                  <input
                    type="text"
                    id="PostalCode"
                    placeholder="ZIP/Post Code"
                     className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </fieldset>
  
            <div  className="col-span-6">
              <button
                 className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default CheckoutForm;
