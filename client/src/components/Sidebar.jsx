import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
  LayoutDashboard,
  User,
  BriefcaseBusiness,
  NotebookPen,
  Crown,
  NotepadText,
  LogOut,
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const navLinks = [
  {
    name: "Dashboard",
    icons: LayoutDashboard,
    path: "/employer/dashboard",
  },
  {
    name: "Profile",
    icons: User,
    path: "/employer/employerProfile",
  },
  {
    name: "All Internships",
    icons: BriefcaseBusiness,
    path: "/employer/internships",
  },
  {
    name: "Post Internship/Jobs",
    icons: NotebookPen,
    path: "/employer/postInternships",
  },
  {
    name: "Membership",
    icons: Crown,
    path: "/employer/membership",
  },

  {
    name: "Manage Applications",
    icons: NotepadText,
    path: "/employer/manageApplications",
  },
  {
    name: "Logout",
    icons: LogOut,
  },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const respond = await axios.get("http://localhost:4000/logout");
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-10 py-12 border border-r-1 w-1/5 h-screen fixed top-0 left-0 bg-white z-10">
      <span className="text-primary font-bold text-2xl cursor-pointer">
        <Link to="/">Internverse</Link>
      </span>

      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((items, index) => (
          <NavLink
            to={items.path}
            key={index}
            className={
              "flex space-x-3 cursor-pointer rounded p-2" +
              (activeIndex === index
                ? " bg-[#f2f2f2] text-primary font-semibold cursor-pointer"
                : " text-[#444]")
            }
            onClick={() => {
              if (items.name === "Logout") {
                logout();
              }
              setActiveIndex(index);
            }}
          >
            <items.icons />
            <div>{items?.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
