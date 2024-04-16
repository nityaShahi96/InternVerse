import React from "react";
import { Pencil, Trash } from "lucide-react";

export default function CandidateList() {
  return (
    <div className="mx-10 my-28">
      <div className="text-xl font-semibold text-gray-700 text-center">
        Candidates
      </div>
      <div>
        <table className="w-full mt-5">
          <thead className="">
            <tr className="border-b border-primary bg-primary bg-opacity-5">
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Full Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Application
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Applied Date
              </th>

              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Action
              </th>
            </tr>

            <tr className="">
              <td className="p-3 text-sm text-gray-700">Nitya Shahi</td>
              <td className="p-3 text-sm text-gray-700">Application</td>

              <td className="p-3 text-sm text-gray-700">2024-04-03</td>
              <td className="p-3 flex gap-1 items-center">
                <button className="bg-primary px-2 py-2 rounded-sm ">
                  <Pencil size={15} />
                </button>
                <button className="bg-red-500 px-2 py-2 rounded-sm">
                  <Trash size={15} />
                </button>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="p-3 text-sm text-gray-700">Nitya Shahi</td>
              <td className="p-3 text-sm text-gray-700">Application</td>

              <td className="p-3 text-sm text-gray-700">2024-04-03</td>
              <td className="p-3 flex gap-1 items-center">
                <button className="bg-primary px-2 py-2 rounded-sm ">
                  <Pencil size={15} />
                </button>
                <button className="bg-red-500 px-2 py-2 rounded-sm">
                  <Trash size={15} />
                </button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
