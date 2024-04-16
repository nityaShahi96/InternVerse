export default function InternshipDescription({ internshipDetail }) {
  if (!internshipDetail) {
    return null;
  }

  return (
    <div className="mt-1 py-2">
      <div className="font-semibold">Internship Description:</div>
      <div className="text-gray-500 text-justify mt-1 text-[15px]">
        {internshipDetail.description}
      </div>
      {/* <div className="mt-5 font-semibold">
        Responsiblities of the candidate:
      </div>
      <div className="text-gray-500 mt-1 text-[15px] px-4">
        <ol style={{ listStyleType: "decimal" }}>
          <li>
            Assist with recruitment activities such as job postings, resume
            screening, and scheduling interviews.
          </li>
          <li>
            Support the onboarding process for new employees, including
            preparing paperwork and facilitating orientation sessions.
          </li>
          <li>
            Help with HR administrative tasks such as maintaining employee
            records, updating databases and organizing files.
          </li>
          <li>
            Assist in employee relations activities, including conducting
            surveys, organizing events, and addressing employee inquiries.
          </li>
          <li>
            Support HR projects and initiatives as assigned, including research,
            data analysis, and presentation preparation.
          </li>
          <li>
            Collaborate with HR team members to ensure timely and accurate
            completion of tasks.
          </li>
          <li>Arrange a meeting of internal team</li>
        </ol>
      </div> */}

      <div className="mt-2 font-semibold">Requirements:</div>

      <div className="text-gray-500 mb-1 text-[15px] ">
        {internshipDetail.requirement}
        {/* <ol style={{ listStyleType: "decimal" }}>
          <li>
            Currently enrolled in a bachelor's degree program in Human Resources
            or a related field
          </li>
          <li>Strong communication and interpersonal skills.</li>
          <li>Excellent organizational skills and attention to detail.</li>
          <li>
            Ability to maintain confidentiality and handle sensitive information
            with discretion.
          </li>
          <li>
            Proficiency in Microsoft Office applications, especially Excel and
            PowerPoint.
          </li>
          <li>Ability to work independently and as part of a team.</li>
        </ol> */}
      </div>
    </div>
  );
}
