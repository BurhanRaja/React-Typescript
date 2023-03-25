const InfoDisplay = () => {
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-900">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          All Images with Info
        </h2>
        <div className="overflow-x-auto">
          <div className="flex justify-end items-center">
            <button className="text-red-500 underline">Delete</button>
          </div>
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <tbody className="border-gray-700">
              <tr className="border border-opacity-20 border-gray-700">
                <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                  <h4 className="text-xl">Color</h4>
                </th>
                <td className="p-3 text-center">
                  <p className="text-lg">Green</p>
                </td>
              </tr>
              <tr className="border-b border-l border-r border-opacity-20 border-gray-700">
                <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                  <h4 className="text-xl">Size</h4>
                </th>
                <td className="p-3 text-center flex justify-evenly items-end">
                  <p className="text-lg">S</p>
                  <p className="text-lg">M</p>
                  <p className="text-lg">L</p>
                  <p className="text-lg">XL</p>
                  <p className="text-lg">XXL</p>
                </td>
              </tr>
              <tr className="border-b  border-l border-r border-opacity-20 border-gray-700">
                <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                  <h4 className="text-xl">Product Info Type</h4>
                </th>
                <td className="p-3 text-center flex justify-evenly items-end">
                  <p className="text-lg">4GB RAM</p>
                  <p className="text-lg">8GB RAM</p>
                  <p className="text-lg">16GB RAM</p>
                  <p className="text-lg">24GB RAM</p>
                  <p className="text-lg">32GB RAM</p>
                </td>
              </tr>
              <tr className="border-b  border-l border-r border-opacity-20 border-gray-700">
                <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                  <h4 className="text-xl">Quantity</h4>
                </th>
                <td className="p-3 text-center">
                  <p className="text-lg">100</p>
                </td>
              </tr>
              <tr className="border-b border-l border-r border-opacity-20 border-gray-700">
                <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                  <h4 className="text-xl">Price</h4>
                </th>
                <td className="p-3 text-center">
                  <p className="text-lg">₹100</p>
                </td>
              </tr>
              <tr className="border-b  border-l border-r border-opacity-20 border-gray-700">
                <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                  <h4 className="text-xl">Images</h4>
                </th>
                <td className="p-3 flex justify-evenly items-center">
                  <img
                    src="https://images.unsplash.com/photo-1679499163638-a38b6c079595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
                    height={50}
                    width={50}
                    alt="anyname"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1679499163638-a38b6c079595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
                    height={50}
                    width={50}
                    alt="anyname"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1679499163638-a38b6c079595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
                    height={50}
                    width={50}
                    alt="anyname"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1679499163638-a38b6c079595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
                    height={50}
                    width={50}
                    alt="anyname"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1679499163638-a38b6c079595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
                    height={50}
                    width={50}
                    alt="anyname"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InfoDisplay;
