import { Outlet } from "react-router-dom";
import CandidateSidebar from "../components/CandidateSidebar";
import NavMenu from "../components/NavMenu";

export default function CandidateLayout() {
  return (
    <div className="min-h-screen w-full flex">
      <div className="w-1/5">
        <CandidateSidebar />
      </div>

      <div className="bg-gray-100 w-4/5">
        <NavMenu />
        <div className="mt-20 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
