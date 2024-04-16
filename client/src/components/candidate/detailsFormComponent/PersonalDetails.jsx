import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";
import { useState } from "react";

export default function PersonalDetails({
  personalDetails,
  handlePersonalDetailsChange,
}) {
  const details = personalDetails || {};
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">About yourself</h1>
        <p className="text-[#777]">Please fill your primary form.</p>
      </div>

      <div className="flex justify-start items-center gap-2 text-blue-600">
        {selectedImage && (
          <img
            className="w-8 h-8 rounded-full border border-gray-400"
            src={selectedImage}
            alt="Selected"
          />
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>
        <label htmlFor="fileUpload" className="custom-file-upload">
          Upload Profile Picture
        </label>
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>

      <div className="formCol">
        <TextInput
          label="First Name"
          placeholder="Abhishek"
          name="firstName"
          value={details.firstName}
          onChange={handlePersonalDetailsChange}
        />
        <TextInput
          label="Last Name"
          placeholder="Sunar"
          name="lastName"
          value={details.lastName}
          onChange={handlePersonalDetailsChange}
        />
      </div>

      <div className="formCol">
        <SelectInput
          label="Gender"
          name="gender"
          options={[
            { label: "Enter your gender", value: "" },
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
            { label: "Gay", value: "gay" },
          ]}
          value={details.gender}
          onChange={handlePersonalDetailsChange}
        />

        <DateInput
          label="Date of Birth"
          name="dob"
          value={details.dob}
          onChange={handlePersonalDetailsChange}
        />
      </div>

      <TextInput
        label="Designation"
        placeholder="developer"
        name="designation"
        value={details.designation}
        onChange={handlePersonalDetailsChange}
      />

      <MessageInput
        label="About Yourself"
        placeholder="Write about yourself"
        name="aboutYourself"
        value={details.aboutYourself}
        onChange={handlePersonalDetailsChange}
      />
    </div>
  );
}
