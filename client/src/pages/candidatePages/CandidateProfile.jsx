import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../components/formComponent/index";
import { toast } from "react-hot-toast";

export default function CandidateProfile() {
  const [candidate, setCandidate] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    designation: "",
    dob: "",
    gender: "",
    aboutYourself: "",
    address: "",
    university: "",
    degree: "",
    educationStatus: "",
    skills: "",
  });

  const handleChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "/student/updateStudentDetails",
        candidate
      );
      console.log(response.data);
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("/student/getStudentDetails");
        setCandidate(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div className="pt-12">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] mx-auto bg-white p-6 flex flex-col gap-4 rounded-xl mb-8"
      >
        <h1 className="text-2xl font-semibold">Student Details</h1>
        <div className="formCol">
          <TextInput
            label="First Name"
            placeholder="John"
            name="firstName"
            value={candidate.firstName}
            onChange={handleChange}
          />
          <TextInput
            label="Last Name"
            placeholder="Doe"
            name="lastName"
            value={candidate.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="formCol">
          <TextInput
            label="Phone Number"
            placeholder="1234567890"
            name="phoneNumber"
            value={candidate.phoneNumber}
            onChange={handleChange}
          />
          <TextInput
            label="Designation"
            placeholder="Web Developer"
            name="designation"
            value={candidate.designation}
            onChange={handleChange}
          />
        </div>

        <div className="form-col">
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
              value={candidate.gender}
              onChange={handleChange}
            />

            <DateInput
              label="Date of Birth"
              name="dob"
              value={candidate.dob}
              onChange={handleChange}
            />
          </div>
        </div>

        <MessageInput
          label="About Yourself"
          placeholder="Enter about yourself"
          name="aboutYourself"
          value={candidate.aboutYourself}
          onChange={handleChange}
        />

        <TextInput
          label="Address"
          placeholder="Enter your address"
          name="address"
          value={candidate.address}
          onChange={handleChange}
        />

        <div className="formCol">
          <TextInput
            label="University"
            placeholder="Enter your university"
            name="university"
            value={candidate.university}
            onChange={handleChange}
          />
          <TextInput
            label="Degree"
            placeholder="Enter your degree"
            name="degree"
            value={candidate.degree}
            onChange={handleChange}
          />
        </div>

        <SelectInput
          label="Education Status"
          name="educationStatus"
          options={[
            { label: "Select Education Status", value: "" },
            { label: "Completed", value: "completed" },
            { label: "Pursuing", value: "pursuing" },
          ]}
          value={candidate.educationStatus}
          onChange={handleChange}
        />

        <MessageInput
          label="Skills"
          placeholder="Enter your skills"
          name="skills"
          value={candidate.skills}
          onChange={handleChange}
        />

        <div className="w-full flex justify-center">
          <button className="btn !w-[150px]">Save</button>
        </div>
      </form>
    </div>
  );
}
