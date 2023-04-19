import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useAppDispatch from "../hooks/useAppDispatch";
import { toast } from "react-toastify";
import { updateAddressThunk } from "../features/address/crudaddress";
import useAppSelector from "../hooks/useAppSelector";
import { clearSingleAddressState, getSingleAddressThunk } from "../features/address/singleAddress";

const EditAddress = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {address} = useAppSelector((state) => state.singleAddressAction);
    const navigate = useNavigate();
    
    useEffect(() => {
      dispatch(clearSingleAddressState());
      dispatch(getSingleAddressThunk(id));
    }, []);
    

  const [addressLine1, setAddressLine1] = useState(address?.address_line_1);
  const [addressLine2, setAddressLine2] = useState(address?.address_line_2);
  const [country, setCountry] = useState(address?.country);
  const [state, setState] = useState(address?.state);
  const [city, setCity] = useState(address?.city);
  const [zipcode, setZipCode] = useState(address?.postal_code);
  const [addressType, setAddressType] = useState(address?.address_type);

  const [errorMsg, setErrorMsg] = useState("");



  function handleEditAddress(e: any) {
    e.preventDefault();

    e.preventDefault();
    if (
      addressLine1.length < 20 ||
      country.length === 0 ||
      state.length === 0 ||
      city.length === 0 ||
      zipcode.length === 0 ||
      addressType.length === 0
    ) {
      setErrorMsg("Please Enter the above field.");
      return;
    }

    let data = {
      address_line_1: addressLine1,
      address_line_2: addressLine2,
      city,
      state,
      postal_code: Number(zipcode),
      country,
      address_type: addressType,
    };

    dispatch(updateAddressThunk({id, data})).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("Some Error Ocurred. Please Try Again./");
        return;
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error");
        return;
      }
      toast.success("Address Updated Successfully.");
      navigate("/checkout");
  })
}

  return (
    <>
      <div className="w-[70%] md:max-w-full mx-auto my-10">
        <h1 className="text-4xl my-8 font-bold">Add Address</h1>
        <div className="p-6 border border-gray-300 sm:rounded-md">
          <form onSubmit={handleEditAddress}>
            <div className="relative mb-4">
              <label
                htmlFor="address_line_1"
                className="leading-7 text-sm text-gray-600"
              >
                Address Line 1
              </label>
              <input
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="address_line_1"
                name="address_line_1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
              />
              <small
                className={
                  addressLine1?.length === 0 && errorMsg
                    ? "text-red-500"
                    : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="address_line_2"
                className="leading-7 text-sm text-gray-600"
              >
                Address Line 2
              </label>
              <input
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="address_line_2"
                name="address_line_2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
              <small
                className={
                  addressLine2?.length === 0 && errorMsg
                    ? "text-red-500"
                    : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="country"
                className="leading-7 text-sm text-gray-600"
              >
                Country
              </label>
              <input
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <small
                className={
                  country?.length === 0 && errorMsg ? "text-red-500" : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <small
                className={
                  state?.length === 0 && errorMsg ? "text-red-500" : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>
            <div className="relative mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <small
                className={
                  city?.length === 0 && errorMsg ? "text-red-500" : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="zipcode"
                className="leading-7 text-sm text-gray-600"
              >
                Zip Code
              </label>
              <input
                type="number"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="zipcode"
                name="zipcode"
                value={zipcode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              <small
                className={
                  zipcode?.length === 0 && errorMsg ? "text-red-500" : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="addresstype"
                className="leading-7 text-sm text-gray-600"
              >
                Address Type
              </label>
              <input
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="addresstype"
                name="addresstype"
                value={addressType}
                onChange={(e) => setAddressType(e.target.value)}
              />
              <small>Home, Work etc.</small>
              <small
                className={
                  addressType?.length === 0 && errorMsg
                    ? "text-red-500"
                    : "hidden"
                }
              >
                {errorMsg}
              </small>
            </div>

            <div className="my-6 text-center">
              <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
                Edit Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAddress;
