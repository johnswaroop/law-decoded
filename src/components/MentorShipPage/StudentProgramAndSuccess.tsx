import React from "react";
import Image from "next/image";
import SeniorLawyer from "@/assets/MentorPage/seniorImage.png";
import {
  BiVideo,
  BiGroup,
  BiMessageRoundedDetail
} from "react-icons/bi";
import {
  MdOutlineMic,
  MdOutlinePeople,
  MdOutlineMenuBook
} from "react-icons/md";

interface BenefitBox {
  icon: JSX.Element;
  title: string;
  description: string;
}

const StudentProgramAndSuccess = () => {
  return (
    <div className="container mx-auto px-4">

      {/* Key Features Section */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-[20px] xs:text-[24px] mid:text-[32px] custom:text-[36px] font-georgia leading-tight text-[#281D1B] mt-2 mb-4">
          Key Features of the Programme
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 custom:gap-6 w-[95%] max-w-[1200px]">
          {benefitBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-[#7E352517] rounded-[8px] md:rounded-[10px] custom:rounded-[12px] p-3 md:p-4 custom:p-6 flex flex-col gap-2 md:gap-3 custom:gap-4"
            >
              <div className="text-[#DD4826]">
                {box.icon}
              </div>
              <h3 className="font-georgia text-sm md:text-base custom:text-lg text-[#281D1B] font-semibold">
                {box.title}
              </h3>
              <p className="text-[#281D1B] font-inter text-xs md:text-sm leading-relaxed">
                {box.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-[20px] xs:text-[24px] mid:text-[32px] custom:text-[36px] font-georgia leading-tight text-[#281D1B] mt-2 mb-4">
          Additional Programme Benefits
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 custom:gap-6 w-[95%] max-w-[1200px]">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-[#7E352517] rounded-[8px] md:rounded-[10px] custom:rounded-[12px] p-3 md:p-4 custom:p-6 flex flex-col gap-2 md:gap-3 custom:gap-4"
            >
              <div className="text-[#DD4826]">
                {feature.icon}
              </div>
              <h3 className="font-georgia text-sm md:text-base custom:text-lg text-[#281D1B] font-semibold">
                {feature.title}
              </h3>
              <p className="text-[#281D1B] font-inter text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Who can join us section */}
      <div className="max-w-[700px] mx-auto mb-12">
        <h2 className="text-[20px] xs:text-[24px] mid:text-[32px] custom:text-[36px] font-georgia leading-tight text-[#281D1B] text-center mb-4">
          Who can join us
        </h2>

        <div className="bg-[#7E352517] rounded-[10px] p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-[#DD4826] rounded-full mr-2"></span>
              <p className="font-inter text-sm md:text-base text-[#281D1B]">
                <span className="font-semibold">Law Universities</span> based in India
              </p>
            </div>

            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-[#DD4826] rounded-full mr-2"></span>
              <p className="font-inter text-sm md:text-base text-[#281D1B]">
                <span className="font-semibold">Registered Student Bodies</span> looking for strategic partnerships
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Videos Section */}
      <div className="mb-20 mt-12">
        <h2 className="text-[20px] xs:text-[24px] mid:text-[32px] custom:text-[36px] font-georgia leading-tight text-[#281D1B] text-center mb-6">
          Educational Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
          <div className="rounded-lg border bg-[#7E352517] overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/uXZSjs3K26c"
                title="Criminal Procedure Explained"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-3">
              <h3 className="font-georgia text-sm font-semibold text-[#281D1B] mb-1">Criminal Procedure Explained</h3>
              <span className="text-[#DD4826] text-xs">22 mins</span>
            </div>
          </div>
          <div className="rounded-lg border bg-[#7E352517] overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/gI-6Xtkh1Qw"
                title="Understanding Constitutional Rights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-3">
              <h3 className="font-georgia text-sm font-semibold text-[#281D1B] mb-1">Understanding Constitutional Rights</h3>
              <span className="text-[#DD4826] text-xs">15 mins</span>
            </div>
          </div>
          <div className="rounded-lg border bg-[#7E352517] overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/AXSaOUGauhI"
                title="Civil Rights and Procedures"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-3">
              <h3 className="font-georgia text-sm font-semibold text-[#281D1B] mb-1">Civil Rights and Procedures</h3>
              <span className="text-[#DD4826] text-xs">16 mins</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-16 mb-12 text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1000px] mx-auto">
        <p className="font-georgia text-base sm:text-lg md:text-xl lg:text-2xl custom:text-[36px] leading-normal sm:leading-relaxed md:leading-relaxed lg:leading-relaxed custom:leading-[48px] mb-6">
          "Mentorship is critical for students of law. It plays a decisive role in creating lawyers of the next generation."
        </p>

        <div className="flex items-center justify-center gap-3">
          <Image
            src={SeniorLawyer}
            alt="Senior Lawyer"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full"
          />
          <div>
            <p className="font-inter font-semibold text-xs sm:text-sm text-[#1B2128]">
              Sajan Poovayya
            </p>
            <p className="font-inter text-[10px] sm:text-xs text-[#14202E9E]">
              Mentor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const benefitBoxes: BenefitBox[] = [
  {
    icon: <BiGroup size={24} />,
    title: "Internship Experience",
    description: "Shadow Mr. Poovayya in real cases, participate in case preparation and attend court sessions to gain firsthand experience in legal practice."
  },
  {
    icon: <MdOutlineMenuBook size={24} />,
    title: "Mentorship Sessions",
    description: "Engage in dedicated sessions where you can seek advice, discuss legal concepts, and gain valuable insights from experienced professionals."
  },
  {
    icon: <BiMessageRoundedDetail size={24} />,
    title: "Practical Training",
    description: "Get hands-on experience with high-level legal work, developing essential skills through direct involvement in real cases."
  },
  {
    icon: <MdOutlinePeople size={24} />,
    title: "Professional Networking",
    description: "Build valuable connections with legal professionals and peers, creating a strong foundation for your future career."
  },
  {
    icon: <BiVideo size={24} />,
    title: "Career Guidance",
    description: "Receive personalized guidance in navigating your academic journey and planning your career path in the legal profession."
  },
  {
    icon: <MdOutlineMic size={24} />,
    title: "Skills Enhancement",
    description: "Develop crucial legal skills and gain practical knowledge that will give you a competitive edge in your career."
  }
];

const additionalFeatures: BenefitBox[] = [
  {
    icon: <BiGroup size={24} />,
    title: "Comprehensive Mentorship",
    description: "Access a diverse range of mentorship opportunities tailored to different aspects of legal practice."
  },
  {
    icon: <MdOutlineMenuBook size={24} />,
    title: "Financial Support",
    description: "First-year law students can benefit from full tuition fee coverage, making quality legal education more accessible."
  },
  {
    icon: <BiMessageRoundedDetail size={24} />,
    title: "Advanced Internships",
    description: "Exclusive internship opportunities for 3rd and 4th year students to gain specialized practical experience."
  },
  {
    icon: <MdOutlinePeople size={24} />,
    title: "Senior Advocacy Program",
    description: "Final year students get the unique opportunity to shadow Senior Advocate Sajan Poovayya for a month."
  },
  {
    icon: <BiVideo size={24} />,
    title: "Publication Opportunity",
    description: "Contribute to 'Law Decoded' and get your work published, building your professional portfolio."
  },
  {
    icon: <MdOutlineMic size={24} />,
    title: "Expert Workshops",
    description: "Attend specialized lectures and workshops conducted by industry experts to enhance your knowledge."
  }
];

export default StudentProgramAndSuccess;