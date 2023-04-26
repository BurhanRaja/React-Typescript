import { useState, useEffect } from "react";
import SelectDropdown from "../../components/seller/dashboard/product/SelectDropdown";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { getParentCatThunk } from "../../features/categories/parentCategory";
import { addSellerInfoThunk } from "../../features/seller/crudsellerinfo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const LINK_REGEX =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const SellerInfo = () => {
  const [parentId, setParentCatId] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [companyphone, setCompanyphone] = useState("");
  const [companyidentity, setCompanyidentity] = useState("");
  const [companygst, setCompanygst] = useState("");

  const [companyWebsite, setCompanywebsite] = useState("");
  const [websiteVerify, setWebsiteVerify] = useState(false);
  const [websiteFocus, setWebsiteFocus] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    setWebsiteVerify(LINK_REGEX.test(companyWebsite));
  }, [companyWebsite]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pCategories } = useAppSelector((state) => state.pCategoriesAction);

  useEffect(() => {
    dispatch(getParentCatThunk());
  }, []);

  function handleSubmit(e: any) {
    e.preventDefault();

    let c1 = LINK_REGEX.test(companyWebsite);

    if (
      companyname === "" ||
      !c1 ||
      companygst === "" ||
      companyphone === "" ||
      companyidentity === "" ||
      parentId === ""
    ) {
      setError("Please Fill the above field correctly.");
      return;
    }

    let data = {
      company_name: companyname,
      company_type: parentId,
      company_website: companyWebsite,
      phone: companyphone,
      identity_proof: companyidentity,
      tax_info: companygst,
    };

    console.log("Hello");

    dispatch(addSellerInfoThunk(data)).then((data: any) => {
      if (data?.error?.code === "ERR_BAD_REQUEST") {
        toast.warn("Company Already Exists.");
        return;
      }
      if (data?.error?.code === "ERR_NETWORK") {
        toast.error("Internal Server Error.");
        return;
      }
      toast.success("Successfully Info Added.");
      localStorage.setItem("address", "true");
      navigate("/seller/dashboard");
    });

    setCompanyname("");
    setCompanygst("");
    setCompanyidentity("");
    setCompanyphone("");
    setCompanywebsite("");
    setParentCatId("");
  }

  return (
    <section className="flex justify-center items-center w-full h-[100vh]">
      <div className=" w-[100%]">
        <h2 className="text-2xl text-center font-semibold text-gray-700 capitalize">
          Company Information
        </h2>
        <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-lg w-[70%]">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700" htmlFor="username">
                  Company Name
                </label>
                <input
                  id="companyname"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  value={companyname}
                  onChange={(e) => setCompanyname(e.target.value)}
                />
                {error && companyname.length === 0 ? (
                  <small className="text-red-500">{error}</small>
                ) : (
                  ""
                )}
              </div>

              <div>
                <SelectDropdown
                  title={"Company Type"}
                  mappeddata={
                    <>
                      <option
                        selected
                        value={""}
                        className="font-bold text-gray-400"
                      >
                        Please select Parent Category
                      </option>
                      {pCategories?.map((el) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.name}
                          </option>
                        );
                      })}
                    </>
                  }
                  handleChange={() => {}}
                  setId={(val) => setParentCatId(val)}
                  val={parentId}
                />
                {error && parentId.length === 0 ? (
                  <small className="text-red-500">{error}</small>
                ) : (
                  ""
                )}
              </div>

              <div>
                <label className="text-gray-700" htmlFor="companywebsite">
                  Company's Website (Link)
                </label>
                <input
                  id="companywebsite"
                  type="text"
                  className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                    websiteFocus &&
                    (websiteVerify ? "border-gray-200" : "border-red-500")
                  } rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
                  value={companyWebsite}
                  onChange={(e) => setCompanywebsite(e.target.value)}
                  onFocus={() => setWebsiteFocus(true)}
                  onBlur={() => setWebsiteFocus(false)}
                />
                {error && companyWebsite.length === 0 ? (
                  <small className="text-red-500">{error}</small>
                ) : (
                  ""
                )}
              </div>

              <div>
                <label className="text-gray-700" htmlFor="companyphone">
                  Phone
                </label>
                <input
                  id="companyphone"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  value={companyphone}
                  onChange={(e) => setCompanyphone(e.target.value)}
                />
                {error && companyphone.length === 0 ? (
                  <small className="text-red-500">{error}</small>
                ) : (
                  ""
                )}
              </div>

              <div>
                <label className="text-gray-700" htmlFor="companyidentity">
                  Identity Proof (Link)
                </label>
                <input
                  id="companyidentity"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  value={companyidentity}
                  onChange={(e) => setCompanyidentity(e.target.value)}
                />
                {error && companyidentity.length === 0 ? (
                  <small className="text-red-500">{error}</small>
                ) : (
                  ""
                )}
              </div>

              <div>
                <label className="text-gray-700" htmlFor="companygst">
                  GST Number
                </label>
                <input
                  id="companygst"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  value={companygst}
                  onChange={(e) => setCompanygst(e.target.value)}
                />
                {error && companygst.length === 0 ? (
                  <small className="text-red-500">{error}</small>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SellerInfo;
