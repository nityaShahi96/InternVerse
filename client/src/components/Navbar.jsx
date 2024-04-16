import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../pages/userPages/Login";
import { EmployerContext } from "../utils/EmployerContext";
import { CandidateContext } from "../utils/CandidateContext";
import axios from "axios";
import { useContext } from "react";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const { employer, setEmployer } = useContext(EmployerContext);
  // const { candidate, setCandidate } = useContext(CandidateContext);

  // console.log(employer);

  const logout = async () => {
    try {
      const respond = await axios.get("http://localhost:4000/logout");
      localStorage.removeItem("token");
      setEmployer({});
      setCandidate({});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-between items-center border-b px-36 shadow-sm py-6">
      <div className="flex items-center gap-14">
        <div className="flex items-center justify-center">
          <span className="text-primary font-bold text-2xl cursor-pointer">
            <Link to="/">Internverse</Link>
          </span>
        </div>

        <div className="flex gap-6 text-[14px] text-[#333] ">
          <NavLink to="/browseInternship" className="hover:text-primary">
            Internships
          </NavLink>

          <NavLink to="/browseJobs" className="hover:text-primary">
            Jobs
          </NavLink>

          <NavLink to="/" className="hover:text-primary">
            Contact
          </NavLink>
        </div>
      </div>
      {/* {employer && Object.keys(employer).length === 0 ? ( */}
      <div className="flex items-center space-x-3 font-semibold">
        <div
          onClick={() => setIsOpen(true)}
          className="py-1 text-sm px-3 text-primary rounded border border-primary hover:bg-secondary hover:text-white hover:border-secondary transition duration-300 cursor-pointer"
        >
          Login
        </div>

        <NavLink to="/candidateRegister">
          <div className="py-1 px-2 text-sm  text-white border border-primary bg-primary rounded hover:bg-secondary hover:border-secondary transition duration-300 cursor-pointer">
            Candidate Sign-up
          </div>
        </NavLink>

        <NavLink to="/employerRegister">
          <div className="py-1 px-2 text-sm text-white border border-primary bg-primary rounded hover:bg-secondary hover:border-secondary transition duration-300 cursor-pointer">
            Employer Sign-up
          </div>
        </NavLink>
      </div>
      {/* // ) : ( //{" "}
      <div onClick={logout} className="flex gap-4">
        // <div>Logout</div>
        // <LogOutIcon />
        //{" "}
      </div>
      // )} */}
      {isOpen && <Login isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
}
