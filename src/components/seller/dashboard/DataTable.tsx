import { ReactHTMLElement } from "react";

type DataTableProps = {
    headings: any,
    mappedData: any,
    title: String
}

const DataTable = ({headings, mappedData, title}: DataTableProps) => {
  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">{title}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-700">
                <tr className="text-left">
                {headings}
                </tr>
            </thead>
            <tbody>
              {mappedData}
              <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Nvidia Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="text-gray-400">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="text-gray-400">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$98,218</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
