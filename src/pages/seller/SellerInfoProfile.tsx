import { useEffect, useState } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import {
  clearSeller,
  getSellerThunk,
} from "../../features/seller/sellerprofile";
import {
  clearSellerInfo,
  getSellerInfoThunk,
} from "../../features/seller/sellerInfo";
import SelectDropdown from "../../components/seller/dashboard/product/SelectDropdown";
import {
  clearParentCat,
  getParentCatThunk,
} from "../../features/categories/parentCategory";
import { AiFillEdit } from "react-icons/ai";
import { updateSellerInfoThunk } from "../../features/seller/crudsellerinfo";
import { toast } from "react-toastify";
import { updateSellerThunk } from "../../features/seller/crudseller";

const LINK_REGEX =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const SellerInfoProfile = () => {
  const dispatch = useAppDispatch();
  const { seller } = useAppSelector((state) => state.sellerProfileAction);
  const { sellerInfo } = useAppSelector((state) => state.getSellerinfoAction);
  const { pCategories } = useAppSelector((state) => state.pCategoriesAction);

  useEffect(() => {
    dispatch(clearSeller());
    dispatch(clearSellerInfo());
    dispatch(clearParentCat());

    dispatch(getSellerThunk());
    dispatch(getSellerInfoThunk());
    dispatch(getParentCatThunk());
  }, []);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");

  const [editSeller, setEditSeller] = useState(true);
  const [editInfo, setEditInfo] = useState(true);

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (seller) {
      setFname(seller?.first_name);
      setLname(seller?.last_name);
      setEmail(seller?.email);
    }
  }, [seller]);

  useEffect(() => {
    if (sellerInfo) {
      setCompanyName(sellerInfo?.company_name);
      setCompanyType(sellerInfo?.company_type);
      setCompanyWebsite(sellerInfo?.company_website);
      setCompanyPhone(sellerInfo?.phone);
    }
  }, [sellerInfo]);

  function handleSellerEdit(e: any) {
    e.preventDefault();

    if (fname === "" || lname === "" || email === "") {
      setErrorMsg("Please fill in all fields");
      return;
    }

    let data = {
      fname,
      lname,
      email,
    };

    dispatch(updateSellerThunk(data)).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("Seller doesn't Exists.");
        return;
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error.");
        return;
      }
      console.log(data);
      toast.success("Successfully Seller Profile Updated.");
    });
  }

  function handleSellerInfoEdit(e: any) {
    e.preventDefault();

    let c1 = LINK_REGEX.test(companyWebsite);

    if (companyName === "" || !c1 || companyPhone === "") {
      setErrorMsg("Please Fill the above field correctly.");
      return;
    }

    let data = {
      company_name: companyName,
      company_type: companyType,
      company_website: companyWebsite,
      phone: companyPhone,
    };

    dispatch(updateSellerInfoThunk({ data, id: sellerInfo?._id })).then(
      (data: any) => {
        if (data?.error?.code === "ERR_BAD_REQUEST") {
          toast.warn("Company doesn't Exists.");
          return;
        }
        if (data?.error?.code === "ERR_NETWORK") {
          toast.error("Internal Server Error.");
          return;
        }
        toast.success("Successfully Company Info Updated.");
      }
    );
  }

  return (
    <section className="mt-10">
      <div className="bg-white w-[95%] mx-auto p-3 shadow-sm rounded-sm border py-4">
        <div className="flex items-center justify-between space-x-2 px-4 font-semibold text-gray-900 leading-8 mb-5">
          <h1 className="tracking-wide text-2xl">About</h1>
          <button
            className="bg-black p-2"
            onClick={() => setEditSeller(!editSeller)}
          >
            <AiFillEdit className="text-white" />
          </button>
        </div>
        <div className="text-gray-700">
          <form onSubmit={handleSellerEdit}>
            <div className="flex">
              <div className="px-4 py-2 font-semibold w-32">First Name</div>
              <div className="px-4 py-2 w-[100%]">
                <input
                  type="text"
                  name="firstname"
                  className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                  disabled={editSeller}
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                {!editSeller && errorMsg && fname === "" ? (
                  <small className="text-red-500">{errorMsg}</small>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex">
              <div className="px-4 py-2 font-semibold w-32">Last Name</div>
              <div className="px-4 py-2 w-[100%]">
                <input
                  type="text"
                  name="lastname"
                  className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                  disabled={editSeller}
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                {!editSeller && errorMsg && lname === "" ? (
                  <small className="text-red-500">{errorMsg}</small>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex">
              <div className="px-4 py-2 font-semibold w-32">Email</div>
              <div className="px-4 py-2 w-[100%]">
                <input
                  type="text"
                  name="lastname"
                  className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                  disabled={editSeller}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {!editSeller && errorMsg && email === "" ? (
                <small className="text-red-500">{errorMsg}</small>
              ) : (
                ""
              )}
            </div>
            {!editSeller && (
              <div className="text-center mt-5">
                <button className="bg-black text-white py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="bg-white w-[95%] mx-auto p-3 shadow-sm rounded-sm border mt-10 py-4">
        <div className="flex items-center justify-between px-4 space-x-2 font-semibold text-gray-900 leading-8 mb-5">
          <h1 className="tracking-wide text-2xl">Company Info</h1>
          <button
            className="bg-black p-2"
            onClick={() => setEditInfo(!editInfo)}
          >
            <AiFillEdit className="text-white" />
          </button>
        </div>
        <div className="text-gray-700">
          <form onSubmit={handleSellerInfoEdit}>
            <div className="flex">
              <div className="px-4 py-2 font-semibold w-52">Company Name</div>
              <div className="px-4 py-2 w-[100%]">
                <input
                  type="text"
                  name="firstname"
                  className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                  disabled={editInfo}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                {!editInfo && errorMsg && companyName === "" ? (
                  <small className="text-red-500">{errorMsg}</small>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex">
              <div className="px-4 py-2 font-semibold w-52">Company Type</div>
              <div className="px-4 py-2 w-[100%]">
                <SelectDropdown
                  title={""}
                  mappeddata={
                    <>
                      {pCategories?.map((el) => {
                        if (el?._id === companyType) {
                          return (
                            <option
                              disabled={editInfo}
                              selected
                              key={el._id}
                              value={el._id}
                            >
                              {el.name}
                            </option>
                          );
                        } else {
                          return (
                            <option
                              disabled={editInfo}
                              key={el._id}
                              value={el._id}
                            >
                              {el.name}
                            </option>
                          );
                        }
                      })}
                    </>
                  }
                  handleChange={(val) => setCompanyType(val)}
                  setId={() => {}}
                  val={companyType}
                />
                {!editInfo && errorMsg && companyType === "" ? (
                  <small className="text-red-500">{errorMsg}</small>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex">
              <div className="px-4 py-2 font-semibold w-52">
                Company Website
              </div>
              <div className="px-4 py-2 w-[100%]">
                <input
                  type="text"
                  name="lastname"
                  className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                  disabled={editInfo}
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                />
                {!editInfo && errorMsg && companyWebsite === "" ? (
                  <small className="text-red-500">{errorMsg}</small>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex">
              <div className="px-4 py-2 font-semibold w-52">Phone</div>
              <div className="px-4 py-2 w-[100%]">
                <input
                  type="text"
                  name="lastname"
                  className="rounded-lg w-full border p-2 text-sm shadow-sm focus:outline-0"
                  disabled={editInfo}
                  value={companyPhone}
                  onChange={(e) => setCompanyPhone(e.target.value)}
                />
                {!editInfo && errorMsg && companyPhone === "" ? (
                  <small className="text-red-500">{errorMsg}</small>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!editInfo && (
              <div className="text-center mt-5">
                <button className="bg-black text-white py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SellerInfoProfile;
