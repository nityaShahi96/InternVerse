import { DateInput, MessageInput, TextInput } from "../../formComponent";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function InternshipPost() {
  const [post, setPost] = useState({
    title: "",
    sector: "",
    description: "",
    applicationDeadline: "",
    requirement: "",
    duration: "",
    postType: "internship",
    type: "",
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert applicationDeadline to ISO 8601 datetime string
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
      <div className="text-left text-xl">Internship details</div>
      <TextInput
        label="Internship Title"
        placeholder="Software Developer"
        name="title"
        value={post.title}
        onChange={handleChange}
      />
      <TextInput
        label="Internship Sector"
        placeholder="Next js Developer"
        name="sector"
        value={post.sector}
        onChange={handleChange}
      />
      {/* <TextInput
        label="Skills"
        placeholder="Frontend, Backend, Fullstack"
        name="skills"
      /> */}

      <div className="formCol">
        <DateInput
          label="Application Deadline"
          placeholder=""
          name="applicationDeadline"
          value={post.applicationDeadline}
          onChange={handleChange}
        />
        <TextInput
          label="Duration"
          placeholder="6 months"
          name="duration"
          value={post.duration}
          onChange={handleChange}
        />
      </div>

      <TextInput
        label="Type"
        placeholder="Remote"
        name="type"
        value={post.type}
        onChange={handleChange}
      />

      <MessageInput
        label="Internship Description"
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
          Post an Internship
        </button>
      </div>
    </form>
  );
}
