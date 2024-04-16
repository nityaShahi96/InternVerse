import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function SkillDetails({
  skillDetails,
  handleSkillDetailsChange,
}) {
  const skills = [
    {
      label: "Select Skills",
      value: "",
    },
    {
      label: "Communication",
      value: "communication",
    },
    {
      label: "Leadership",
      value: "leadership",
    },
    {
      label: "Web Development",
      value: "webDevelopment",
    },
    {
      label: "Front End Development",
      value: "frontEndDevelopment",
    },
    {
      label: "UI/UX Design",
      value: "uiUx",
    },
    {
      label: "Graphics Design",
      value: "graphicsDesign",
    },
  ];

  const details = skillDetails || {};

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Skills</h1>
        <p className="text-[#777]">
          Only list relevant skills. Eg: Communication, Computer, Leadership or
          Problem solving.
        </p>
      </div>

      <SelectInput
        label="Skills"
        name="skills"
        value={details.skills}
        onChange={handleSkillDetailsChange}
        options={skills.map((uni) => ({
          label: uni.label,
          value: uni.value,
        }))}
      />
    </div>
  );
}
