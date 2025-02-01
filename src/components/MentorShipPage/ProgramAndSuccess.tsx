import React from "react";
import { BiVideo, BiGroup, BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineMic, MdOutlinePeople, MdOutlineMenuBook } from "react-icons/md";

const ProgramAndSuccess = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <h2 className="text-[28px] xs:text-[32px] mid:text-[40px] custom:text-[48px] font-georgia leading-tight text-[#281D1B] mt-2 mb-20">
          Key Features of the Programme
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 custom:gap-8 w-full max-w-[1440px]">
          {programFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-[#7E352517] rounded-[8px] md:rounded-[12px] custom:rounded-[16px] p-4 md:p-6 custom:p-8 flex flex-col gap-3 md:gap-4 custom:gap-6"
            >
              <div className="text-[#DD4826]">
                {feature.icon}
              </div>
              <h3 className="font-georgia text-lg md:text-xl custom:text-2xl text-[#281D1B] font-semibold">
                {feature.title}
              </h3>
              <p className="text-[#281D1B] font-outfit text-sm md:text-base custom:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const programFeatures = [
  {
    icon: <BiVideo size={32} />,
    title: "Informative Videos",
    description: "Access a curated collection of educational videos created by experienced legal professionals, covering legal theories, practical skills, and career advice."
  },
  {
    icon: <BiGroup size={32} />,
    title: "Specialized Sessions",
    description: "Participate in regular sessions focused on specific legal issues and practice areas, designed to provide deep insights into the current legal landscape."
  },
  {
    icon: <BiMessageRoundedDetail size={32} />,
    title: "Meaningful Dialogue",
    description: "Engage in interactive discussions with mentors during specialized sessions, allowing for questions, experience sharing, and deeper understanding."
  },
  {
    icon: <MdOutlineMic size={32} />,
    title: "Expert Guest Speakers",
    description: "Learn from diverse legal professionals sharing their experiences and insights, providing varied perspectives on legal practice."
  },
  {
    icon: <MdOutlinePeople size={32} />,
    title: "Peer Interaction",
    description: "Connect with fellow young lawyers in a collaborative environment to share challenges, strategies, and insights."
  },
  {
    icon: <MdOutlineMenuBook size={32} />,
    title: "Continuous Learning",
    description: "Experience dynamic learning through videos and interactive sessions, supporting ongoing professional development."
  }
];

export default ProgramAndSuccess;
