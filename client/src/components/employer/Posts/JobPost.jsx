import { DateInput, MessageInput, TextInput } from "../../formComponent";
import { useState } from "react";
import axios from "axios";

export default function JobPost() {
  const [post, setPost] = useState({
    title: "",
    sector: "",
    description: "",
    applicationDeadline: "",
    requirement: "",
    duration: "",
    postType: "job",
    type: "",
    salary: "",
    experience: "",
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(post);
    try {
      const updatedPost = {
        ...post,
        applicationDeadline: new Date(post.applicationDeadline).toISOString(),
      };
      const response = await axios.post("/post/createPost", updatedPost);
      console.log(response.data);
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="text-left text-xl">Job details</div>
      <TextInput
        label="Job Title"
        placeholder="Software Developer"
        name="title"
        value={post.title}
        onChange={handleChange}
      />

      <div className="formCol">
        <TextInput
          label="Job Sector"
          placeholder="Next js Developer"
          name="sector"
          value={post.sector}
          onChange={handleChange}
        />
        <TextInput
          label="Job Type"
          placeholder="Full Time"
          name="type"
          value={post.type}
          onChange={handleChange}
        />
      </div>

      <div className="formCol">
        <DateInput
          label="Application Deadline"
          placeholder=""
          name="applicationDeadline"
          value={post.applicationDeadline}
          onChange={handleChange}
        />
        <TextInput
          label="Experience"
          placeholder="2 years"
          name="experience"
          value={post.experience}
          onChange={handleChange}
        />
      </div>

      <TextInput
        label="Salary"
        placeholder="Rs.5000"
        name="salary"
        value={post.salary}
        onChange={handleChange}
      />

      <MessageInput
        label="Job Description"
        placeholder="Description"
        name="description"
        value={post.description}
        onChange={handleChange}
      />
      <MessageInput
        label="Requirements"
        placeholder="Mention specific requirements"
        name="requirement"
        value={post.requirement}
        onChange={handleChange}
      />

      <div className="w-[250px] mx-auto">
        <button type="submit" className="btn">
          Post Job
        </button>
      </div>
    </form>
  );
}
