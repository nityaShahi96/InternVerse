import { TextInput, MessageInput } from "../../components/formComponent/index";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function EmployerProfile() {
  const [employer, setEmployer] = useState({
    name: "",
    aboutCompany: "",
    address: "",
    industry: "",
    contactDetails: "",
  });

  const handleChange = (e) => {
    setEmployer({ ...employer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "/employer/updateEmployerProfile",
        employer
      );
      console.log(response.data);
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchEmployerData = async () => {
      try {
        const response = await axios.get("/employer/getEmployerProfile");
        setEmployer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployerData();
  }, []);

  return (
    <div className="pt-12">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] mx-auto bg-white p-6 flex flex-col gap-4 rounded-xl mb-8"
      >
        <h1 className="text-2xl font-semibold">Company Details</h1>
        <div className="formCol">
          <TextInput
            label="Company Name"
            placeholder="John"
            name="name"
            value={employer.name || ""}
            onChange={handleChange}
          />
          <TextInput
            label="Phone Number"
            placeholder="1234567890"
            name="contactDetails"
            value={employer.contactDetails || ""}
            onChange={handleChange}
          />
        </div>

        <div className="formCol">
          <TextInput
            label="Industry"
            placeholder="Marketing Agency"
            name="industry"
            value={employer.industry || ""}
            onChange={handleChange}
          />
          <TextInput
            label="Location"
            placeholder="Kathmandu, Nepal"
            name="address"
            value={employer.address || ""}
            onChange={handleChange}
          />
        </div>

        <MessageInput
          label="About Company"
          placeholder="Enter about Company"
          name="aboutCompany"
          value={employer.aboutCompany || ""}
          onChange={handleChange}
        />

        <div className="w-full flex justify-center">
          <button className="btn !w-[150px]">Save</button>
        </div>
      </form>
    </div>
  );
}
