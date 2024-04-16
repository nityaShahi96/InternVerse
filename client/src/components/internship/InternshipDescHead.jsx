import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMoneyBillWave,
  faClock,
  faDoorOpen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export default function InternshipDescHead({ internshipDetail }) {
  if (!internshipDetail) {
    return null;
  }

  if (!internshipDetail.employer) {
    return null;
  }

  // console.log(internshipDetail.title);
  return (
    <div className="mt-1 py-2 flex justify-between border-b border-gray-300">
      <div>
        <div className="text-xl font-semibold">{internshipDetail.title}</div>
        <div className="text-primary">{internshipDetail.employer.name}</div>
        <div className="flex justify-start my-2 gap-16 text-sm text-gray-500">
          <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:
            </div>
            <div>{internshipDetail.employer.address}</div>
          </div>

          {/* <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faMoneyBillWave} /> Stipend:
            </div>
            <div>Rs.3000-5000</div>
          </div> */}
          <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faClock} /> Duration:
            </div>
            <div>{internshipDetail.duration}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faDoorOpen} /> Sector:
            </div>
            <div>{internshipDetail.sector}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <FontAwesomeIcon icon={faHome} /> Type:
            </div>
            <div>{internshipDetail.type}</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg w-[80px] h-[80px] shadow-md"></div>
    </div>
  );
}
