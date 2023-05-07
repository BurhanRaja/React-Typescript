import { IoMdClose } from "react-icons/io";

type InfoDisplayProps = {
  imagesInfo: Array<any>;
  deleteInfo: (val: any) => void;
  count: number;
};

const InfoDisplay = ({ imagesInfo, deleteInfo, count }: InfoDisplayProps) => {
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-900">
        <h2 className="mb-1 text-2xl font-semibold leading-tight">
          All Information
        </h2>
        {count <= 0 ? (
          <p className="text-red-500">Currently No Information</p>
        ) : (
          imagesInfo?.map((el) => {
            return (
              <div className="overflow-x-auto">
                <div className="flex justify-end items-center">
                  <button
                    type="button"
                    className="underline text-red-500 text-2xl p-2"
                    onClick={() => deleteInfo(el?._id)}
                  >
                    <IoMdClose />
                  </button>
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
                        <p className="text-lg">{el.color}</p>
                      </td>
                    </tr>
                    {el.sizes.length > 0 && (
                      <tr className="border-b border-l border-r border-opacity-20 border-gray-700">
                        <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                          <h4 className="text-xl">Size</h4>
                        </th>
                        <td className="p-3 text-center flex justify-evenly items-end">
                          {el.sizes?.map((size: string) => {
                            return <p className="text-lg">{size}</p>;
                          })}
                        </td>
                      </tr>
                    )}
                    {el.info_types.length > 0 && (
                      <tr className="border-b  border-l border-r border-opacity-20 border-gray-700">
                        <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                          <h4 className="text-xl">Product Info Type</h4>
                        </th>
                        <td className="p-3 text-center flex justify-evenly items-end">
                          {el.info_types?.map((info: string) => {
                            return <p className="text-lg">{info}</p>;
                          })}
                        </td>
                      </tr>
                    )}
                    <tr className="border-b  border-l border-r border-opacity-20 border-gray-700">
                      <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                        <h4 className="text-xl">Quantity</h4>
                      </th>
                      <td className="p-3 text-center">
                        <p className="text-lg">{el.quantity}</p>
                      </td>
                    </tr>
                    <tr className="border-b border-l border-r border-opacity-20 border-gray-700">
                      <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                        <h4 className="text-xl">Price</h4>
                      </th>
                      <td className="p-3 text-center">
                        <p className="text-lg">₹ {el.price}</p>
                      </td>
                    </tr>
                    <tr className="border-b  border-l border-r border-opacity-20 border-gray-700">
                      <th className="p-3 text-start border-r border-opacity-20 border-gray-700">
                        <h4 className="text-xl">Images</h4>
                      </th>
                      <td className="p-3 flex justify-evenly items-center">
                        {el.images?.map((image: string, index: number) => {
                          return (
                            <img
                              src={image}
                              height={50}
                              width={50}
                              alt={`anyname-${index + 1}`}
                            />
                          );
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default InfoDisplay;
