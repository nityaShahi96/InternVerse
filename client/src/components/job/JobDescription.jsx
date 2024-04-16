export default function JobDescription({ jobDetail }) {
  if (!jobDetail) {
    return null;
  }

  return (
    <div className="mt-1 py-2">
      <div className="font-semibold">Job Description:</div>
      <div className="text-gray-500 text-justify mt-1 text-[15px]">
        {jobDetail.description}
      </div>
      <div className="mt-2 font-semibold">Requirements:</div>

      <div className="text-gray-500 mb-1 text-[15px] ">
        {jobDetail.requirement}
      </div>
    </div>
  );
}
