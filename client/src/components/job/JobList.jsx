import JobDetailPost from "./JobDetailPost";

export default function JobList() {
  return (
    <div className="">
      <div className="flex flex-col gap-5 overflow-y-auto h-screen hide-scrollbar">
        <div>
          <JobDetailPost />
        </div>
        <div>
          <JobDetailPost />
        </div>
        <div>
          <JobDetailPost />
        </div>
        <div>
          <JobDetailPost />
        </div>
      </div>
    </div>
  );
}
