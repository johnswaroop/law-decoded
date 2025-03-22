import React from "react";
import { BiVideo, BiGroup, BiMessageRoundedDetail } from "react-icons/bi";
import {
  MdOutlineMic,
  MdOutlinePeople,
  MdOutlineMenuBook,
} from "react-icons/md";

const ProgramAndSuccess = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] ">
      <div className="flex flex-col items-center">
        <h2 className="text-[20px] xs:text-[24px] mid:text-[28px] custom:text-[32px] font-georgia leading-tight text-[#281D1B] mt-2 mb-12">
          Key Features of the Programme
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 custom:gap-4 w-full max-w-[1200px]">
          {programFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-[#7E352517] rounded-[6px] md:rounded-[8px] custom:rounded-[12px] p-2 md:p-3 custom:p-4 flex flex-col gap-1.5 md:gap-2 custom:gap-3"
            >
              <div className="text-[#DD4826]">{feature.icon}</div>
              <h3 className="font-georgia text-sm md:text-base custom:text-lg text-[#281D1B] font-semibold">
                {feature.title}
              </h3>
              <p className="text-[#281D1B] font-inter text-xs md:text-sm custom:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 w-full max-w-[1200px]">
          <h2 className="text-[20px] xs:text-[24px] font-georgia leading-tight text-[#281D1B] mb-4">
            Featured Legal Education Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/jnR0OMVFIpA"
                  title="Right to Freedom of Religion"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-2">
                <h3 className="font-georgia text-sm font-semibold text-[#281D1B]">
                  Right to Freedom of Religion
                </h3>
                <span className="text-orange-500 font-inter text-[10px] font-medium">
                  16 mins
                </span>
              </div>
            </div>
            <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/gI-6Xtkh1Qw"
                  title="Understanding Constitutional Rights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-2">
                <h3 className="font-georgia text-sm font-semibold text-[#281D1B]">
                  Understanding Constitutional Rights
                </h3>
                <span className="text-orange-500 font-inter text-[10px] font-medium">
                  15 mins
                </span>
              </div>
            </div>
            <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/8LLgnVAFqx4"
                  title="Fundamental Rights Deep Dive"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-2">
                <h3 className="font-georgia text-sm font-semibold text-[#281D1B]">
                  Fundamental Rights Deep Dive
                </h3>
                <span className="text-orange-500 font-inter text-[10px] font-medium">
                  18 mins
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const programFeatures = [
  {
    icon: <BiVideo size={24} />,
    title: "Informative Videos",
    description:
      "Access a curated collection of educational videos created by experienced legal professionals, covering legal theories, practical skills, and career advice.",
  },
  {
    icon: <BiGroup size={24} />,
    title: "Specialized Sessions",
    description:
      "Participate in regular sessions focused on specific legal issues and practice areas, designed to provide deep insights into the current legal landscape.",
  },
  {
    icon: <BiMessageRoundedDetail size={24} />,
    title: "Meaningful Dialogue",
    description:
      "Engage in interactive discussions with mentors during specialized sessions, allowing for questions, experience sharing, and deeper understanding.",
  },
  {
    icon: <MdOutlineMic size={24} />,
    title: "Expert Guest Speakers",
    description:
      "Learn from diverse legal professionals sharing their experiences and insights, providing varied perspectives on legal practice.",
  },
  {
    icon: <MdOutlinePeople size={24} />,
    title: "Peer Interaction",
    description:
      "Connect with fellow young lawyers in a collaborative environment to share challenges, strategies, and insights.",
  },
  {
    icon: <MdOutlineMenuBook size={24} />,
    title: "Continuous Learning",
    description:
      "Experience dynamic learning through videos and interactive sessions, supporting ongoing professional development.",
  },
];

export default ProgramAndSuccess;
