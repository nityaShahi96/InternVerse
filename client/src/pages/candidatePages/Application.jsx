export default function Application() {
  return (
    <div className="mx-10 my-28 ">
      <div className="text-xl font-semibold text-gray-700">
        Internships/Job Application
      </div>
      <div>
        <table className="w-full mt-10">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Title
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Company
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Status
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Location
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Applied Date
              </th>
            </tr>

            <tr>
              <td className="p-3 text-sm text-gray-700">Software Engineer</td>
              <td className="p-3 text-sm text-gray-700">
                Brand Builder Pvt. Ltd
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Pending
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">
                Panthigalli, Pokhara
              </td>
              <td className="p-3 text-sm text-gray-700">2024-04-03</td>
            </tr>

            <tr>
              <td className="p-3 text-sm text-gray-700">Software Engineer</td>
              <td className="p-3 text-sm text-gray-700">
                Brand Builder Pvt. Ltd
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
                  Rejected
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">
                Panthigalli, Pokhara
              </td>
              <td className="p-3 text-sm text-gray-700">2024-04-03</td>
            </tr>

            <tr>
              <td className="p-3 text-sm text-gray-700">Software Engineer</td>
              <td className="p-3 text-sm text-gray-700">
                Brand Builder Pvt. Ltd
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  Accepted
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">
                Panthigalli, Pokhara
              </td>
              <td className="p-3 text-sm text-gray-700">2024-04-03</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
