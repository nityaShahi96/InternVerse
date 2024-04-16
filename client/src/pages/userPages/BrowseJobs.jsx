import Filter from "../../components/internship/Filter";
import JobDetailPost from "../../components/job/JobDetailPost";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BrowseJobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get("/post/getJobPosts");
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="">
      <div className="text-center text-xl font-semibold mt-10 text-gray-700">
        Browse Jobs - Find Jobs that suits you
      </div>
      <div className="text-sm text-gray-500 text-center">Latest Jobs</div>
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

      {/* Job list */}

      <div className="flex mt-10 w-full gap-5 justify-center">
        <div className="w-1/5">
          <Filter />
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto h-[410px] overflow-hidden hide-scrollbar w-3/5">
          {jobs.map((job) => (
            <div key={job.id}>
              <JobDetailPost job={job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
