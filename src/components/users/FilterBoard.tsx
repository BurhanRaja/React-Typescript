const FilterBoard = () => {
  return (
    <div className="w-[25%] pt-20 px-16">
    <div className="flex justify-between items-center">
      <p className="text-2xl font-semibold">Filters</p>
      <button className="bg-black px-2 py-1 text-white rounded-sm">Filter</button>
    </div>
      <div className="mt-10">
        <div className="flex justify-evenly mb-3">
          <input type="checkbox" name="filter[]" className="mr-3" />
          <label>Filter</label>
        </div>
        <div className="flex justify-evenly mb-3">
          <input type="checkbox" name="filter[]" className="mr-3" />
          <label>Filter</label>
        </div>
        <div className="flex justify-evenly mb-3">
          <input type="checkbox" name="filter[]" className="mr-3" />
          <label>Filter</label>
        </div>
        <div className="flex justify-evenly mb-3">
          <input type="checkbox" name="filter[]" className="mr-3" />
          <label>Filter</label>
        </div>
        <div className="flex justify-evenly mb-3">
          <input type="checkbox" name="filter[]" className="mr-3" />
          <label>Filter</label>
        </div>
      </div>

      <div className="flex flex-col mt-10 ">
        <label className="text-start mb-3">Price Range</label>
        <input type="range" min="0" max="100" />
      </div>

    </div>
  );
};

export default FilterBoard;
