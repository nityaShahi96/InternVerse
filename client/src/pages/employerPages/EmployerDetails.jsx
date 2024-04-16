import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  PersonalDetails,
  AddressDetails,
  ContactDetails,
} from "../../components/employer/detailsFormComponent/index";
import { checkUser } from "../../utils/checkUser";

export default function EmployerDetails() {
  const [currrentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNextClick = () => {
    setCurrentStep(currrentStep + 1);
  };

  useEffect(() => {
    if (currrentStep === 3) {
      navigate("/employer");
    }
  }, [currrentStep, navigate]); // Add this useEffect hook

  const renderComponent = () => {
    switch (currrentStep) {
      case 0:
        return <PersonalDetails onNextClick={handleNextClick} />;
      case 1:
        return <AddressDetails onNextClick={handleNextClick} />;
      case 2:
        return <ContactDetails onNextClick={handleNextClick} />;
      case 3:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen border broder-black flex items-center justify-center bg-gray-100">
      <div
        className={`bg-white rounded-lg p-4 flex flex-col gap-4 ${
          currrentStep === 2 ? "w-[50%]" : "w-[70%]"
        }`}
      >
        {renderComponent()}

        <div className="flex w-full justify-between ">
          <div>
            {currrentStep > 0 && (
              <button
                onClick={() => {
                  setCurrentStep(currrentStep - 1);
                }}
                className="bg-blue-600 px-4 hover:bg-blue-700 hover:ease-in-out transition-all delay-200 text-white py-2 rounded w-full"
              >
                Back
              </button>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                handleNextClick();
              }}
              className="text-blue-600 border w-full px-4 border-blue-600 rounded-md transition-all delay-200 ease-in-out hover:bg-blue-700 hover:text-white"
            >
              Skip
            </button>
            <button
              onClick={() => {
                handleNextClick();
              }}
              className="bg-blue-600 px-4 hover:bg-blue-700 hover:ease-in-out transition-all delay-200 text-white py-2 rounded w-full"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
