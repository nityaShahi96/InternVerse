export default function AboutCompany({ internshipDetail }) {
  if (!internshipDetail) {
    return null;
  }
  if (!internshipDetail.employer) {
    return null;
  }
  return (
    <div className="border-t py-2">
      <div className="font-semibold">About Company</div>
      <div className=" flex flex-col gap-1">
        <div className="text-primary">{internshipDetail.employer.name}</div>
        <div className="text-gray-500 text-sm">
          {" "}
          Location: {internshipDetail.employer.address}
        </div>
        {/* <div className="text-gray-500 text-sm">
          {" "}
          Address: Krishan Galli, Pulchowk, Lalitpur, Kathmandu
        </div> */}
        <div className="text-gray-500 text-sm">
          {" "}
          {internshipDetail.employer.aboutCompany}
        </div>
      </div>
    </div>
  );
}
