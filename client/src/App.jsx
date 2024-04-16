import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import {
  Home,
  Login,
  CandidateRegister,
  EmployerRegister,
} from "./pages/userPages/index";
import EmployerLayout from "./layout/Employerlayout";
import CandidateLayout from "./layout/CandidateLayout";
import EmployerHome from "./pages/employerPages/Home";
import CandidateHome from "./pages/candidatePages/Home";
import JobPosting from "./pages/employerPages/JobPosting";

import Dashboard from "./pages/employerPages/Dashboard";
import Internships from "./pages/employerPages/Internships";
import Membership from "./pages/employerPages/Membership";
import ManageApplication from "./pages/employerPages/ManageApplication";
import Logout from "./pages/employerPages/Logout";
import { EmployerProvider } from "./utils/EmployerContext";
import CandidateProfile from "./pages/candidatePages/CandidateProfile";
import CandidateDashboard from "./pages/candidatePages/CandidateDashboard";
import CandidateLogout from "./pages/candidatePages/CandidateLogout";
import Application from "./pages/candidatePages/Application";
import Payment from "./components/employer/detailsFormComponent/Payment";
import BrowseInternship from "./pages/userPages/BrowseInternship";
import InternshipDetails from "./pages/userPages/InternshipDetails";
import CandidateList from "./pages/employerPages/CandidateList";
import EmployerProfile from "./pages/employerPages/EmployerProfile";
import { CandidateProvider } from "./utils/CandidateContext";
import { UserProvider } from "./utils/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="candidateRegister" element={<CandidateRegister />} />
          <Route path="employerRegister" element={<EmployerRegister />} />
          <Route path="browseInternship" element={<BrowseInternship />} />
          <Route path="internshipDetails/:id" element={<InternshipDetails />} />
        </Route>
        <Route path="/employer" element={<EmployerLayout />}>
          <Route index element={<EmployerHome />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="internships" element={<Internships />} />
          <Route path="candidateList" element={<CandidateList />} />
          <Route path="postInternships" element={<JobPosting />} />
          <Route path="membership" element={<Membership />} />
          <Route path="manageApplications" element={<ManageApplication />} />
          <Route path="logout" element={<Logout />} />
          <Route path="jobPosting" element={<JobPosting />} />
          <Route path="payment" element={<Payment />} />
          <Route path="employerProfile" element={<EmployerProfile />} />
        </Route>
        <Route path="/candidate" element={<CandidateLayout />}>
          <Route index element={<CandidateHome />} />
          <Route path="profile" element={<CandidateProfile />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="logout" element={<CandidateLogout />} />
          <Route path="application" element={<Application />} />
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default App;
