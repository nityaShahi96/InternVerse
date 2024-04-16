import Filter from "../../components/internship/Filter";
import InternshipDetailPost from "../../components/internship/InternshipDetailPost";
import InternshipList from "../../components/internship/InternshipList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BrowseInternship() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      const res = await axios.get("/post/getInternshipPosts");
      setInternships(res.data);
    };
    fetchInternships();
  }, []);

  return (
    <div className="">
      <div className="text-center text-xl font-semibold mt-10 text-gray-700">
        Browse Internship - Find internships that suits you
      </div>
      <div className="text-sm text-gray-500 text-center">
        Latest Internships
      </div>
      {/* Search bar */}
      <div className="flex justify-center w-full mb-7 ">
        <div className="flex gap-1">
          <div className="w-full flex">
            <input
              type="text"
              className="px-2 py-2 w-80 outline-none rounded-sm border-2 border-gray-300" // increased width and set a specific height
              placeholder="Job titles or keywords"
            />
            <button className="bg-primary px-2 rounded-sm flex items-center justify-center text-white cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Internship list */}

      <div className="flex mt-10 w-full gap-5 justify-center">
        <div className="w-1/5">
          <Filter />
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto h-[410px] overflow-hidden hide-scrollbar w-3/5">
          {internships.map((internship) => (
            <InternshipDetailPost key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </div>
  );
}
