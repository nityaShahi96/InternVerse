import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function WorkExperienceDetails({
  workExperienceDetails,
  handleWorkExperienceDetailsChange,
}) {
  const details = workExperienceDetails || {};
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Work Experience</h1>
        <p className="text-[#777]">
          Include your training history. Give a brief insight about training or
          certification that you recieved.
        </p>
      </div>
      <TextInput
        label="Designation:"
        placeholder="eg. Software Engineer"
        name="experienceDesignation"
        value={details.experienceDesignation}
        onChange={handleWorkExperienceDetailsChange}
      />
      <TextInput
        label="Company Name:"
        placeholder="eg. Brand builder"
        name="experienceCompany"
        value={details.experienceCompany}
        onChange={handleWorkExperienceDetailsChange}
      />
      <div className="formCol">
        <DateInput
          label="Start Date:"
          name="experienceStartDate"
          value={details.experienceStartDate}
          onChange={handleWorkExperienceDetailsChange}
        />
        <DateInput
          label="End Date:"
          name="experienceEndDate"
          value={details.experienceEndDate}
          onChange={handleWorkExperienceDetailsChange}
        />
      </div>

      <MessageInput
        label="Description"
        placeholder="Description of work done."
        name="experienceDescription"
        value={details.experienceDescription}
        onChange={handleWorkExperienceDetailsChange}
      />
    </div>
  );
}
