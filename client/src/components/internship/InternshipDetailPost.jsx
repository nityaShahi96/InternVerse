import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

export default function InternshipDetailPost({ internship }) {
  if (!internship || !internship.employer) {
    return null;
  }
  return (
    <div className="bg-primary bg-opacity-5 rounded-lg p-4  flex justify-between hover:shadow-lg">
      <div className="">
        <div className="text-xl">{internship.title}</div>
        <div className="text-primary">{internship.employer.name}</div>
        <div>{internship.description}</div>
        <div className="flex justify-start mt-1 text-sm text-gray-500">
          <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:
            </div>
            <div>{internship.employer.address}</div>
          </div>
        </div>
        <NavLink to={`/internshipDetails/${internship.id}`}>
          <button className=" bg-blue-200 mt-2 rounded-lg items-center flex justify-center text-sm px-3 py-1 text-primary cursor-pointer hover:bg-primary hover:text-white">
            view details
          </button>
        </NavLink>
      </div>

      <div className="bg-white h-[80px] w-[80px] shadow-lg rounded-lg"></div>
    </div>
  );
}
