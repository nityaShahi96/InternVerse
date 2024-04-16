import { useState } from "react";
import InternshipPost from "../../components/employer/Posts/InternshipPost";
import JobPost from "../../components/employer/Posts/JobPost";

export default function JobPosting() {
  const [showComponent, setShowComponent] = useState("Internship");

  const handleComponentClick = (component) => {
    setShowComponent(component);
  };

  const renderComponent = () => {
    if (showComponent === "Internship") {
      return <InternshipPost />;
    } else if (showComponent === "Job") {
      return <JobPost />;
    }
  };

  return (
    <div className="text-center pt-6 px-20">
      <div className="text-2xl mb-4 font-semibold">Post Internship/Job</div>
      <div>
        <div className="bg-white  rounded-lg">
          <div className="radio-buttons-container pl-6 pt-4 border-b">
            <div className="radio-button">
              <input
                name="radio-group"
                id="radio2"
                className="radio-button__input"
                type="radio"
                onChange={() => handleComponentClick("Internship")}
              />
              <label htmlFor="radio2" className="radio-button__label">
                <span className="radio-button__custom"></span>
                Internship
              </label>
            </div>
            <div className="radio-button">
              <input
                name="radio-group"
                id="radio1"
                className="radio-button__input"
                type="radio"
                onChange={() => handleComponentClick("Job")}
              />
              <label htmlFor="radio1" className="radio-button__label">
                <span className="radio-button__custom"></span>
                Jobs
              </label>
            </div>
          </div>

          <div className="p-8 mb-12">{renderComponent()}</div>
        </div>

        <style>{`
        .selected {
          
          color: #007fff;
        }
      `}</style>
      </div>
    </div>
  );
}
