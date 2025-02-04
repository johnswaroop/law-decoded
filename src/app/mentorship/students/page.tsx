import React from "react";
import StudentConnectWithUS from "@/components/MentorShipPage/StudentConnectWithUS";
import StudentProgramAndSuccess from "@/components/MentorShipPage/StudentProgramAndSuccess";
import MentorshipForum from "@/components/StudentMentorshipForum";

const page = () => {
  return (
    <>
      <StudentConnectWithUS />
      <StudentProgramAndSuccess />
      <MentorshipForum />
    </>
  );
};

export default page;