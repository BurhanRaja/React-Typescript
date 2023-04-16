import { FiChevronDown } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import useAppSelector from "../../../../hooks/useAppSelector";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import { useEffect } from "react";
import { getParentCatThunk } from "../../../../features/categories/parentCategory";
import {
  clearCategoryState,
  getCategoryThunk,
} from "../../../../features/categories/category";

type SideMenuProps = {
  setBar: (val: boolean) => void;
  toggleBar: boolean;
};
const SideMenu = ({ setBar, toggleBar }: SideMenuProps): JSX.Element => {
  const { pCategories } = useAppSelector((state) => state.pCategoriesAction);
  const { categories } = useAppSelector((state) => state.categoriesAction);
  const disptach = useAppDispatch();

  useEffect(() => {
    disptach(getParentCatThunk());
  }, []);

  function handleCat(id: string) {
    disptach(clearCategoryState());
    disptach(getCategoryThunk(id));
  }

  return (
    <div
      className={`flex h-screen flex-col justify-between border-r bg-white fixed top-0 left-0 z-50 w-[20%] ${
        toggleBar
          ? "transition-all duration-300 translate-x-[0%]"
          : "transition-all duration-300 translate-x-[-130%]"
      }`}
    >
      <div className="px-4 py-6">
        <div className="flex justify-between items-center">
          <h2 className="font-extrabold uppercase lg:block text-black">
            <a href="/">Company</a>
          </h2>
          <button onClick={() => setBar(false)}>
            <IoCloseOutline className="text-black" />
          </button>
        </div>

        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          {pCategories?.map((pCat) => {
            return (
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => handleCat(pCat?._id)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium"> {pCat?.name} </span>
                  </div>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <FiChevronDown />
                  </span>
                </summary>
                <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
                  {categories?.map((el) => {
                    return (
                      <a
                        href="/"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <span className="text-sm font-medium">
                          {" "}
                          {el?.name}{" "}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </details>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
