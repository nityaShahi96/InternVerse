import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CandidateContext = createContext({
  candidate: null,
  setCandidate: () => {},
  userType: null,
  setUserType: () => {},
});

export const CandidateProvider = ({ children }) => {
  const [candidate, setCandidate] = useState({});
  const [userType, setUserType] = useState("candidate");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("/studentProfile", {
          withCredentials: true,
        })
        .then((res) => {
          setCandidate(res.data.profile);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <CandidateContext.Provider value={{ candidate, setCandidate, userType }}>
      {children}
    </CandidateContext.Provider>
  );
};
