// import { use } from "../../../../api/routes/postRoutes";
import AboutCompany from "../../components/internship/AboutCompany";
import Apply from "../../components/internship/Apply";
import InternshipDescHead from "../../components/internship/InternshipDescHead";
import InternshipDescription from "../../components/internship/InternshipDescription";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CandidateContext } from "../../utils/CandidateContext";

export default function InternshipDetails() {
  const { candidate } = useContext(CandidateContext);
  const [intershipDetail, setInternshipsDetail] = useState({});
  const { id } = useParams();
  const postId = id;
  const studentId = candidate.id;

  useEffect(() => {
    const fetchInternshipDetails = async () => {
      const response = await axios.get(`post/getInternshipPostById/${id}`);

      const data = await response.data;
      setInternshipsDetail(data);
    };
    fetchInternshipDetails();
  }, []);

  return (
    <div>
      <div className="text-xl font-bold text-start px-1 mt-10 mb-5">
        Internship Details
      </div>
      <div className="flex w-full gap-7">
        <div className="border shadow-xl rounded-md w-3/4 px-5 py-2">
          <InternshipDescHead internshipDetail={intershipDetail} />

          <InternshipDescription internshipDetail={intershipDetail} />
          <AboutCompany internshipDetail={intershipDetail} />
        </div>

        <div className="bg-white rounded-lg shadow-md border h-[220px]">
          <Apply postId={postId} studentId={studentId} />
        </div>
      </div>
    </div>
  );
}
