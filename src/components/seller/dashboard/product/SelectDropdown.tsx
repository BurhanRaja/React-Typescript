type SelectProps = {
    title: String,
    mappeddata: Array<any>
}

const SelectDropdown = ({title, mappeddata}: SelectProps) => {
  return (
    <>
      <label htmlFor="image" className="block text-sm text-black">
        {title}
      </label>
      <select className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
        {mappeddata}
      </select>
    </>
  );
};

export default SelectDropdown;
