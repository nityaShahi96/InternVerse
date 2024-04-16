import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function EducationDetails({
  educationDetails,
  handleEducationDetailsChange,
}) {
  const details = educationDetails || {};

  const uni = [
    {
      label: "Select University",
      value: "",
    },
    {
      label: "Tribhuvan University",
      value: "Tribhuvan University",
    },
    {
      label: "Kathmandu University",
      value: "Kathmandu University",
    },
    {
      label: "Purbanchal University",
      value: "Purbanchal University",
    },
    {
      label: "Pokhara University",
      value: "Pokhara University",
    },
    {
      label: "Nepal Open University",
      value: "Nepal Open University",
    },
    {
      label: "Lumbini Bouddha University",
      value: "Lumbini Bouddha University",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Education</h1>
        <p className="text-[#777]">Please fill your education form.</p>
      </div>

      <SelectInput
        label="University"
        name="universityName"
        value={details.universityName}
        onChange={handleEducationDetailsChange}
        options={uni.map((uni) => ({
          label: uni.label,
          value: uni.value,
        }))}
      />

      <div className="formCol">
        <TextInput
          label="Degree"
          placeholder=""
          name="degree"
          value={details.degree}
          onChange={handleEducationDetailsChange}
        />
        <TextInput
          label="City"
          placeholder="Kathmandu"
          name="universityCity"
          value={details.universityCity}
          onChange={handleEducationDetailsChange}
        />
      </div>

      <div className="formCol">
        <DateInput
          label="Start Date"
          name="universityStartDate"
          value={details.universityStartDate}
          onChange={handleEducationDetailsChange}
        />
        <DateInput
          label="End Date"
          name="universityEndDate"
          value={details.universityEndDate}
          onChange={handleEducationDetailsChange}
        />
      </div>

      <SelectInput
        label="Status"
        name="universityStatus"
        options={[
          { label: "Your status", value: "" },
          { label: "Graduated", value: "graduated" },
          { label: "Non-Graduated", value: "nonGraduated" },
        ]}
        value={details.universityStatus}
        onChange={handleEducationDetailsChange}
      />
    </div>
  );
}
