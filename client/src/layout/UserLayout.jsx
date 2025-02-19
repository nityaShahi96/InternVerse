import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const UserLayout = () => {
  return (
    <div className="min-h-screen text-[#222322] flex flex-col">
      <div>
        <Toaster />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="mx-36">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
