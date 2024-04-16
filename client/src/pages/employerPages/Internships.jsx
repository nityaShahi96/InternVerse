import { useState, useEffect } from "react";
import { ChevronRight, Pencil, Trash } from "lucide-react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Internships() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    // Fetch internships from the server
    const fetchInternships = async () => {
      try {
        const response = await axios.get("post/getPostsByEmployer");
        setInternships(response.data);
      } catch (error) {
        console.log("Error fetching internships:", error);
      }
    };

    fetchInternships();
  }, []);

  return (
    <div className="mx-10 my-28">
      <div className="text-xl font-semibold text-gray-700">
        Internships/Job Application
      </div>
      <div>
        <table className="w-full mt-10">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr className="border-b border-primary bg-primary bg-opacity-5">
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Title
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Sector
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Description
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Post Type
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700">
                Action
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-700"></th>
            </tr>

            {internships.map((internship) => (
              <tr key={internship.id}>
                <td className="p-3 text-sm text-gray-700">
                  {internship.title}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {internship.sector}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {internship.description}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {internship.postType}
                </td>
                <td className="p-3 flex gap-1 items-center">
                  <button className="bg-primary px-2 py-2 rounded-sm ">
                    <Pencil size={15} />
                  </button>
                  <button className="bg-red-500 px-2 py-2 rounded-sm">
                    <Trash size={15} />
                  </button>
                </td>
                <td>
                  <NavLink to="/employer/candidateList" className="p-3">
                    <ChevronRight size={24} />
                  </NavLink>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}
