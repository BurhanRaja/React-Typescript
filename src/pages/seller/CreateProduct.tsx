import InfoInput from "../../components/seller/dashboard/product/InfoInput";

const CreateProduct = () => {
  return (
    <div className="p-10 bg-slate-200">
      <div className="bg-white p-8 rounded-md">
        <div className="mb-5">
          <h2 className="text-3xl font-bold">Add Product</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="leading-7 text-sm text-gray-600">
            Name of the Product
          </label>
          <input
            type="text"
            id="color"
            name="color"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="leading-7 text-sm text-gray-600">
            Description
          </label>
          <textarea className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="block text-sm text-black">
            Add Thumbnail
          </label>
          <input
            type="file"
            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="block text-sm text-black">
            Parent Category
          </label>
          <select className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
            <option>Hello World</option>
            <option>Hello World</option>
            <option>Hello World</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="block text-sm text-black">
            Category
          </label>
          <select className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
            <option>Hello World</option>
            <option>Hello World</option>
            <option>Hello World</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="block text-sm text-black">
            Sub Category
          </label>
          <select className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
            <option>Hello World</option>
            <option>Hello World</option>
            <option>Hello World</option>
          </select>
        </div>
        <InfoInput />

        <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[100%]">
          Create Product
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
