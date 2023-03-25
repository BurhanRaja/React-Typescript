import { useState } from "react";

const InfoInput = () => {
  // Upload Files
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  function handleUploadFile(e: any): void {
    setUploadFiles([...uploadFiles, e.target.files[0]]);
  }
  function deleteFile(filesize: number) {
    let filteredFiles = uploadFiles.filter((el) => el.size !== filesize);
    setUploadFiles(filteredFiles);
  }

  return (
    <div className="my-8 p-8 bg-gray-100">
      <form>
        <h3 className="text-2xl font-bold">
          Different Available Product Information Based on Images
        </h3>
        <h5 className="mt-5 mb-2">Choose Any Two from Color, Size or Product Info</h5>
        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="color" className="leading-7 text-sm text-gray-600">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative">
            <label htmlFor="size" className="leading-7 text-sm text-gray-600">
              Size (should be multiple)
            </label>
            <input
              type="text"
              id="size"
              name="size"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="product_type"
              className="leading-7 text-sm text-gray-600"
            >
              Product Info (should be multiple)
            </label>
            <input
              type="text"
              id="product_type"
              name="product_type"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <small>For Example: In mobile - 16GB RAM</small>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="relative mb-2">
            <label
              htmlFor="quantity"
              className="leading-7 text-sm text-gray-600"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2">
            <label htmlFor="price" className="leading-7 text-sm text-gray-600">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="block text-sm text-black">
            Add Images
          </label>
          <input
            type="file"
            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            id="image"
            name="uploadFiles"
            multiple
            onChange={handleUploadFile}
          />
          <small>Add Images Based on Information Given Above</small>
        </div>
        <div className="flex justify-start items-center w-[100%] px-5 py-1">
          {uploadFiles.map((el: File, index: number): any => {
            return (
              <div key={el.size}>
                <img
                  id={`image-${index}`}
                  className="mr-4"
                  src={URL.createObjectURL(el)}
                  alt=""
                  width="100"
                  height="100"
                />
                <button
                  onClick={() => deleteFile(el.size)}
                  className="text-xs p-0 border-0 text-red-600 underline"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[20%]"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InfoInput;
