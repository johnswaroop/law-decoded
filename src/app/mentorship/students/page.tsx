import React from "react";
import StudentConnectWithUS from "@/components/MentorShipPage/StudentConnectWithUS";
import StudentProgramAndSuccess from "@/components/MentorShipPage/StudentProgramAndSuccess";
import MentorshipForum from "@/components/StudentMentorshipForum";

const page = () => {
  return (
    <div className="max-w-[1000px]  mx-auto">
      <StudentConnectWithUS />
      <StudentProgramAndSuccess />
      <MentorshipForum />
    </div>
  );
};

export default page;
