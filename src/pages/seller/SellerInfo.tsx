import { useState, useEffect } from "react";
import SelectDropdown from "../../components/seller/dashboard/product/SelectDropdown";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { getParentCatThunk } from "../../features/categories/parentCategory";

const LINK_REGEX = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const SellerInfo = () => {
  const [parentId, setParentCatId] = useState("");

  const dispatch = useAppDispatch();

  const { pCategories } = useAppSelector((state) => state.pCategoriesAction);

  useEffect(() => {
    dispatch(getParentCatThunk());
  }, []);

  

  return (
    <section className="flex justify-center items-center w-full h-[100vh]">
      <div className=" w-[100%]">
        <h2 className="text-2xl text-center font-semibold text-gray-700 capitalize">
          Company Information
        </h2>
        <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-lg w-[70%]">
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700" htmlFor="username">
                  Company Name
                </label>
                <input
                  id="companyname"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
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
              </div>

              <div>
                <label className="text-gray-700" htmlFor="password">
                  Company's Website (Link)
                </label>
                <input
                  id="password"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="passwordConfirmation">
                  Phone
                </label>
                <input
                  id="passwordConfirmation"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="passwordConfirmation">
                  Identity Proof (Link)
                </label>
                <input
                  id="passwordConfirmation"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="passwordConfirmation">
                  GST Number
                </label>
                <input
                  id="passwordConfirmation"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
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
