import InternshipDetailPost from "./InternshipDetailPost";

export default function InternshipList() {
  return (
    <div className="">
      <div className="flex flex-col gap-5 overflow-y-auto h-screen hide-scrollbar">
        <div>
          <InternshipDetailPost />
        </div>
        <div>
          <InternshipDetailPost />
        </div>
        <div>
          <InternshipDetailPost />
        </div>
        <div>
          <InternshipDetailPost />
        </div>
      </div>
    </div>
  );
}
