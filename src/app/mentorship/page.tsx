import React from "react";
import ConnectWithUS from "@/components/MentorShipPage/ConnectWithUS";
import ProgramAndSuccess from "@/components/MentorShipPage/ProgramAndSuccess";
import MentorshipForum from "@/components/LawyerMentorshipForum";

const page = () => {
  return (
    <div className="max-w-[1000px]  mx-auto">
      <ConnectWithUS />
      <ProgramAndSuccess />
      <MentorshipForum />
    </div>
  );
};

export default page;
