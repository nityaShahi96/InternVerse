import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Apply({ postId, studentId }) {
  const [showApplyPopup, setApplyPopup] = useState(false);

  // const togglePopup = () => {
  //   setApplyPopup(!showApplyPopup);
  // };
  // useEffect(() => {
  //   if (showApplyPopup) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // }, [showApplyPopup]);

  const apply = async () => {
    try {
      const response = await axios.post("/apply", {
        postId,
        studentId,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-1 px-5 py-5">
      <div className="font-semibold">
        Are you interested in this internship?
      </div>

      <div className="mt-5">
        <div className="text-[13px] text-gray-400">Application ends:</div>
        <div className="text-sm">April 24, 2024</div>
      </div>

      <button
        onClick={apply}
        className="bg-primary rounded-lg w-full py-2 text-white text-sm font-semibold mt-5"
      >
        Apply Now
      </button>
    </div>
  );
}

//  {
//    showApplyPopup && (
//      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
//        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-xl overflow-y-auto w-[70%]">
//          <div className="flex justify-between items-center">
//            <div className="font-semibold text-lg">Your Resume</div>
//            <button onClick={togglePopup} className="text-xl">
//              &times;
//            </button>
//          </div>

//          <div className="flex items-center justify-between border-b py-5">
//            {/*Profile details*/}

//            <div className="flex gap-3 items-center">
//              <div className="h-16 w-16 border rounded-lg"></div>
//              <div className="flex flex-col">
//                <div className="text-xl font-semibold">Nitya Shahi</div>
//                <div className="flex items-center gap-3">
//                  <div className="text-primary text-sm">Front end developer</div>

//                  <div className="flex items-center gap-1">
//                    <div>
//                      <FontAwesomeIcon icon={faMapMarkerAlt} />
//                    </div>
//                    <div className="text-sm">Kaski, Nepal</div>
//                  </div>
//                </div>
//              </div>
//            </div>

//            {/*buttons*/}
//            <div className="flex gap-1 items-center">
//              <NavLink to="/candidate/profile">
//                <button className="text-primary border border-primary px-5 py-2 font-semibold text-sm rounded-lg hover:bg-secondary hover:text-white hover:border-secondary">
//                  Update Profile
//                </button>
//              </NavLink>
//              <div>
//                <button className="bg-primary text-white text-sm font-semibold rounded-lg px-5 py-2 hover:bg-secondary">
//                  Apply
//                </button>
//              </div>
//            </div>
//          </div>
//          {/*Profile details end*/}

//          <div className="flex gap-3 mt-5">
//            {/*About me*/}
//            <div className="flex w-2/4 flex-col gap-3">
//              <div className="font-semibold">About</div>
//              <div className="text-gray-500 text-[13px]">
//                I am a front end developer with 2 years of experience in React
//                and Next.js. I am passionate about creating user-friendly
//                interfaces and I am always eager to learn new technologies.
//              </div>
//              {/*About me end*/}

//              {/*Education and Experience*/}
//              <div className="flex flex-col gap-3 border-t py-5">
//                <div className="font-semibold">Education</div>
//                <div className="">
//                  <div className="text-gray-500 text-[13px]">
//                    August 12,2021-Present
//                  </div>
//                  <div className="text-gray-800 text-[13px] font-semibold">
//                    Bachelor's in Computer Science
//                  </div>
//                  <div className="text-gray-500 text-[13px]">
//                    Informatics College Pokhara, Matepani
//                  </div>
//                </div>
//              </div>
//              <div className="flex flex-col gap-3 border-t py-5">
//                <div className="font-semibold ">Experience</div>
//                <div className="text-gray-500 text-[13px]">
//                  Front end developer at ABC Company
//                </div>
//              </div>
//            </div>
//            <div className="flex w-2/4 flex-col gap-3">
//              {/* Resume, Email, Phone divs*/}
//              <div className="border px-5 py-5 flex flex-col gap-5 justify-start rounded-lg">
//                <div className=" flex flex-col gap-1">
//                  <div className="text-[13px] text-gray-400">Resume</div>
//                  <div className="h-16 w-16 rounded-lg border"></div>
//                </div>
//                <div className=" flex flex-col gap-1">
//                  <div className="text-[13px] text-gray-400">Email</div>
//                  <div className="text-[13px] text-gray-600">
//                    thakurinitu263@gmail.com
//                  </div>
//                </div>
//                <div className=" flex flex-col gap-1">
//                  <div className="text-[13px] text-gray-400">Phone number</div>
//                  <div className="text-[13px] text-gray-600">9804184982</div>
//                </div>
//                <div className=" flex flex-col gap-1">
//                  <div className="text-[13px] text-gray-400">Location</div>
//                  <div className="text-[13px] text-gray-600">Kaski, Nepal</div>
//                </div>
//                <div className=" flex flex-col gap-1">
//                  <div className="text-[13px] text-gray-400">Social</div>
//                  <div className="text-[13px] text-gray-600">logo</div>
//                </div>
//              </div>
//              {/* Resume, Email, Phone divs end*/}
//              <div className="pl-4 flex gap-3">
//                <div className=" flex flex-col gap-1">
//                  <div className="text-sm text-gray-800">Skills</div>
//                  <div className="text-[13px] text-gray-400">React</div>
//                </div>
//                <div className=" flex flex-col gap-1">
//                  <div className="text-sm text-gray-800">Languages</div>
//                  <div className="text-[13px] text-gray-400">
//                    Nepali, Hindi, English
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    );
//  }
