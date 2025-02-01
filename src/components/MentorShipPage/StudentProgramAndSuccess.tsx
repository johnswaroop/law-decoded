import React from "react";
import Image from "next/image";
import SeniorLawyer from "@/assets/MentorPage/seniorImage.png";
import { 
    HiOutlineBriefcase, 
    HiOutlineAcademicCap, 
    HiOutlineCog, 
    HiOutlineUserGroup, 
    HiOutlineHeart,
    HiOutlineChartBar,
    HiOutlineUsers,
    HiOutlineBookOpen,
    HiOutlineLightBulb,
    HiOutlineStar,
    HiOutlineNewspaper,
    HiOutlineSparkles
} from 'react-icons/hi';

const StudentProgramAndSuccess = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Key Features Section */}
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-[28px] xs:text-[32px] mid:text-[40px] custom:text-[48px] font-georgia leading-tight text-[#281D1B] mt-2 mb-8">
          Key Features of the Programme
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 custom:gap-8 w-[95%] max-w-[1368px]">
          {benefitBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-[#7E352517] rounded-[8px] md:rounded-[12px] custom:rounded-[16px] p-3.5 md:p-5.5 custom:p-7.5 flex flex-col gap-3 md:gap-4 custom:gap-6"
            >
              <box.icon className="w-[28px] h-[28px] md:w-[38px] md:h-[38px] custom:w-[61px] custom:h-[61px] text-[#281D1B]" />
              <p className="text-[#281D1B] font-sans text-sm md:text-base custom:text-2xl leading-snug">
                {box.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-[28px] xs:text-[32px] mid:text-[40px] custom:text-[48px] font-georgia leading-tight text-[#281D1B] mt-2 mb-8">
          Additional Programme Benefits
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 custom:gap-8 w-[95%] max-w-[1368px]">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-[#7E352517] rounded-[8px] md:rounded-[12px] custom:rounded-[16px] p-4 md:p-6 custom:p-8 flex flex-col gap-3 md:gap-4 custom:gap-6"
            >
              <feature.icon className="w-[28px] h-[28px] md:w-[38px] md:h-[38px] custom:w-[61px] custom:h-[61px] text-[#281D1B]" />
              <p className="text-[#281D1B] font-sans text-sm md:text-base custom:text-2xl leading-snug">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-24 mb-20 text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px] mx-auto">
        <p className="font-georgia text-xl sm:text-2xl md:text-3xl lg:text-4xl custom:text-[64px] leading-normal sm:leading-relaxed md:leading-relaxed lg:leading-relaxed custom:leading-[78px] mb-12">
          "Mentorship is critical for students of law. It plays a decisive role in creating lawyers of the next generation."
        </p>

        <div className="flex items-center justify-center gap-4">
          <Image
            src={SeniorLawyer}
            alt="Senior Lawyer"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full"
          />
          <div>
            <p className="font-outfit font-semibold text-base sm:text-lg text-[#1B2128]">
              Sajan Poovayya
            </p>
            <p className="font-outfit text-sm sm:text-base text-[#14202E9E]">
              Mentor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface BenefitBox {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
}

const benefitBoxes: BenefitBox[] = [
    {
        icon: HiOutlineBriefcase,
        text: "Personalized mentorship from experienced legal professionals",
    },
    {
        icon: HiOutlineAcademicCap,
        text: "Guidance on academic and career planning in the legal field",
    },
    {
        icon: HiOutlineCog,
        text: "Development of practical legal skills and competencies",
    },
    {
        icon: HiOutlineUserGroup,
        text: "Networking opportunities with legal industry professionals",
    },
    {
        icon: HiOutlineHeart,
        text: "Support for personal and professional growth",
    },
    {
        icon: HiOutlineChartBar,
        text: "Regular progress tracking and feedback sessions",
    },
];

const additionalFeatures: BenefitBox[] = [
    {
        icon: HiOutlineUsers,
        text: "Access to a community of law students and professionals",
    },
    {
        icon: HiOutlineBookOpen,
        text: "Resource library with legal materials and study guides",
    },
    {
        icon: HiOutlineLightBulb,
        text: "Interactive workshops and learning sessions",
    },
    {
        icon: HiOutlineStar,
        text: "Opportunities for internships and practical experience",
    },
    {
        icon: HiOutlineNewspaper,
        text: "Regular updates on legal developments and industry news",
    },
    {
        icon: HiOutlineSparkles,
        text: "Recognition and rewards for outstanding performance",
    },
];

export default StudentProgramAndSuccess;
