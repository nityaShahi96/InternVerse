import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EmployerContext } from "../../utils/EmployerContext";

const Home = () => {
  const navigate = useNavigate();
  const { employer } = useContext(EmployerContext);
  // console.log("employer", employer.name);

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "loaded";
      window.location.reload();
    }
  }, []);

  const logout = async () => {
    try {
      const respond = await axios.get("http://localhost:4000/logout");
      localStorage.removeItem("token");
      navigate("/");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center mt-12 text-white text-4xl">
      This is employer home page.
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
