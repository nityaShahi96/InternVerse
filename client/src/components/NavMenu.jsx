import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import axios from "axios";

export default function NavMenu() {
  const { user } = useContext(UserContext);

  const [userName, setUserName] = useState(
    user ? user.name || user.firstName : ""
  );

  useEffect(() => {
    setUserName(user ? user.name || user.firstName : "");
  }, [user]);

  return (
    <div className="w-4/5 justify-end px-12 h-20 border border-b-[1px] fixed bg-white flex items-center font-semibold">
      <div className="flex items-center h-full gap-2">
        <div className="bg-gray-200 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>

        {userName && <span>{userName}</span>}
      </div>
    </div>
  );
}
