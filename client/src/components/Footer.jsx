import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary text-[#f2f2f2] p-4 mt-10">
      <div className="mx-36 flex justify-between pt-4">
        <div>
          <span className="text-white font-bold text-3xl cursor-pointer">
            Internverse
          </span>

          <div className="text-sm mt-2">
            InternVerse is an internship-focused platform <br />
            started with the main focus of helping students <br />
            get quality internships in Nepal and help them <br />
            excel at it.
          </div>

          <div className="mt-6 text-sm">
            <div>InternVerse - Verse Edtech Pvt. Ltd.</div>
            <div>Krishna Galli, Pulchowk, Lalitpur, Nepal</div>
            <div>+977-9802346002 | contact@internverse.com</div>
          </div>

          <div className="mt-3">
            <div>Follow our Social Media</div>
          </div>
        </div>

        <div>
          <div className="font-semibold">For Candidates</div>
          <div>Build your CV and Profile</div>
          <div>Internships/Jobs</div>
        </div>

        <div>
          <div className="font-semibold">For Employer</div>
          <div>Become an Employer</div>
          <div>Post New Internships/Jobs</div>
        </div>

        <div>
          <div className="font-semibold">Helpful Resources</div>
          <div>Privacy Policy</div>
          <div>FAQs</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
