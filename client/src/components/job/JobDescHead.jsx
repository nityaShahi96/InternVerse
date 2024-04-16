export default function JobDescHead({ jobDetail }) {
  if (!jobDetail) {
    return null;
  }

  if (!jobDetail.employer) {
    return null;
  }

  console.log(jobDetail.title);

  return (
    <div className="mt-1 py-2 flex justify-between border-b border-gray-300">
      <div>
        <div className="text-xl font-semibold">{jobDetail.title}</div>
        <div className="text-primary">{jobDetail.employer.name}</div>
        <div className="flex justify-start my-2 gap-16 text-sm text-gray-500">
          <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:
            </div>
            <div>{jobDetail.employer.address}</div>
          </div>

          <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faClock} /> Salary
            </div>
            <div>{jobDetail.salary}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faDoorOpen} /> Sector:
            </div>
            <div>{jobDetail.sector}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faHome} /> Job Type:
            </div>
            <div>{jobDetail.type}</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg w-[80px] h-[80px] shadow-md"></div>
    </div>
  );
}
