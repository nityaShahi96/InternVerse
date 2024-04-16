import { useState } from "react";
import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function PersonalDetails() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">About Company</h1>
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
          label="Company Name"
          placeholder="Samsung"
          name="companyName"
        />
        <TextInput label="Industry" placeholder="Software" name="industry" />
      </div>

      <div className="formCol">
        <DateInput label="Founded Date" name="foundedDate" />
        <TextInput
          label="Company Size"
          placeholder="eg. 0-8 employees"
          name="companySize"
        />
      </div>

      <MessageInput
        label="About Company"
        placeholder="Write something about your company"
        name="about"
      />

      <TextInput
        label="Website"
        placeholder="https://www.samsung.com/"
        name="website"
      />
    </div>
  );
}
