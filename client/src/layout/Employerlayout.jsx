import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavMenu from "../components/NavMenu";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";

export default function EmployerLayout() {
  const { user } = useContext(UserContext);
  const userType = user?.userType;
  console.log(userType);

  if (userType === "candidate") {
    return <h1>Not Found</h1>;
  }

  return (
    <div className="min-h-screen w-full flex">
      <Toaster />
      <div className="w-1/5">
        <Sidebar />
      </div>

      <div className="bg-gray-100 w-4/5">
        <NavMenu />
        <div className="mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
