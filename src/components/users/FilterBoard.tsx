import { BiChevronDown } from "react-icons/bi";

type FilterBoardProps = {
  categories: Array<any>;
  companies: Array<any>;
  priceFrom: string;
  priceTo: string;
  filteredCat: Array<any>;
  filteredRating: string;
  filteredCompany: Array<any>;
  setFilteredCat: (val: any) => void;
  setFilteredCompany: (val: any) => void;
  setPriceFrom: (val: any) => void;
  setPriceTo: (val: any) => void;
  setFilteredRating: (val: any) => void;
};

const FilterBoard = ({
  categories,
  companies,
  priceFrom,
  priceTo,
  filteredCat,
  setFilteredCat,
  filteredCompany,
  setFilteredCompany,
  filteredRating,
  setPriceFrom,
  setPriceTo,
  setFilteredRating,
}: FilterBoardProps) => {
  const handleCategories = (e: any) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setFilteredCat([...filteredCat, e.target.value]);
    } else {
      let filterArr = filteredCat.filter((el) => el !== e.target.value);
      setFilteredCat(filterArr);
    }
  };

  const handleCompanies = (e: any) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setFilteredCompany([...filteredCompany, e.target.value]);
    } else {
      let filterArr = filteredCompany.filter((el) => el !== e.target.value);
      setFilteredCompany(filterArr);
    }
  };

  return (
    <div className="hidden space-y-4 lg:block">
      <div>
        <p className="block text-lg mb-3 font-medium text-gray-700">Filters</p>

        <div className="mt-1 space-y-2">
          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Categories </span>

              <span className="transition group-open:-rotate-180">
                <BiChevronDown className="text-xl" />
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Selected </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                  onClick={() => setFilteredCat([])}
                >
                  Reset
                </button>
              </header>

              <ul className="space-y-1 border-t border-gray-200 p-4">
                {categories?.map((el) => {
                  return (
                    <li>
                      <label
                        htmlFor="FilterOutOfStock"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          className="h-5 w-5 rounded border-gray-300"
                          value={el?._id}
                          name="categories"
                          onChange={handleCategories}
                          checked={filteredCat.includes(el?._id)}
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {el?.name}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </details>

          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Price </span>

              <span className="transition group-open:-rotate-180">
                <BiChevronDown className="text-xl" />
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700">
                  The highest price is ₹15,000
                </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                  onClick={() => {
                    setPriceFrom("");
                    setPriceTo("");
                  }}
                >
                  Reset
                </button>
              </header>

              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between gap-4">
                  <label
                    htmlFor="FilterPriceFrom"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">₹</span>

                    <input
                      type="number"
                      id="FilterPriceFrom"
                      placeholder="From"
                      className="w-full bg-white rounded border border-gray-300 focus:border-0 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 px-1 leading-8 transition-colors duration-200 ease-in-out"
                      value={priceFrom}
                      onChange={(e) => setPriceFrom(e.target.value)}
                    />
                  </label>

                  <label
                    htmlFor="FilterPriceTo"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">₹</span>

                    <input
                      type="number"
                      id="FilterPriceTo"
                      placeholder="To"
                      className="w-full bg-white rounded border border-gray-300 focus:border-0 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 px-1 leading-8 transition-colors duration-200 ease-in-out"
                      value={priceTo}
                      onChange={(e) => setPriceTo(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </details>

          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Companies </span>
              <span className="transition group-open:-rotate-180">
                <BiChevronDown className="text-xl" />
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Selected </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                  onClick={() => setFilteredCompany([])}
                >
                  Reset
                </button>
              </header>

              <ul className="space-y-1 border-t border-gray-200 p-4">
                {companies?.map((el) => {
                  return (
                    <li key={el?._id}>
                      <label
                        htmlFor="FilterTeal"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterTeal"
                          className="h-5 w-5 rounded border-gray-300"
                          value={el?._id}
                          onChange={handleCompanies}
                          checked={filteredCompany.includes(el?._id)}
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {el?.company_name}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </details>

          {/* Ratings */}
          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Ratings </span>
              <span className="transition group-open:-rotate-180">
                <BiChevronDown className="text-xl" />
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Selected </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                  onClick={() => setFilteredRating("")}
                >
                  Reset
                </button>
              </header>

              <ul className="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <div className="flex justify-between">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                  </div>
                  <input
                    id="minmax-range"
                    type="range"
                    min={1}
                    max={5}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    value={filteredRating}
                    onChange={(e) => setFilteredRating(e.target.value)}
                  />
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FilterBoard;
