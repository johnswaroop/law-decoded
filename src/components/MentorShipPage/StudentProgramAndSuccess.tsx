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
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-[28px] xs:text-[32px] mid:text-[40px] custom:text-[48px] font-georgia leading-tight text-[#281D1B] mt-2 mb-8">
          Key Features of the Programme
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 custom:gap-8 w-[95%] max-w-[1368px]">
          {benefitBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-[#7E352517] rounded-[8px] md:rounded-[12px] custom:rounded-[16px] p-4 md:p-6 custom:p-8 flex flex-col gap-3 md:gap-4 custom:gap-6"
            >
              <div className="text-[#DD4826]">
                {box.icon}
              </div>
              <h3 className="font-georgia text-lg md:text-xl custom:text-2xl text-[#281D1B] font-semibold">
                {box.title}
              </h3>
              <p className="text-[#281D1B] font-outfit text-sm md:text-base custom:text-lg leading-relaxed">
                {box.description}
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

      {/* Who can join us section */}
<div className="max-w-[800px] mx-auto mb-20">
  <h2 className="text-[28px] xs:text-[32px] mid:text-[40px] custom:text-[48px] font-georgia leading-tight text-[#281D1B] text-center mb-8">
    Who can join us
  </h2>
  
  <div className="bg-[#7E352517] rounded-[12px] p-6 md:p-8">
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
      <div className="flex items-center">
        <span className="w-2 h-2 bg-[#DD4826] rounded-full mr-3"></span>
        <p className="font-outfit text-lg md:text-xl text-[#281D1B]">
          <span className="font-semibold">Law Universities</span> based in India
        </p>
      </div>
      
      <div className="flex items-center">
        <span className="w-2 h-2 bg-[#DD4826] rounded-full mr-3"></span>
        <p className="font-outfit text-lg md:text-xl text-[#281D1B]">
          <span className="font-semibold">Registered Student Bodies</span> looking for strategic partnerships
        </p>
      </div>
    </div>
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

const benefitBoxes: BenefitBox[] = [
    {
        icon: <BiGroup size={32} />,
        title: "Internship Experience",
        description: "Shadow Mr. Poovayya in real cases, participate in case preparation and attend court sessions to gain firsthand experience in legal practice."
    },
    {
        icon: <MdOutlineMenuBook size={32} />,
        title: "Mentorship Sessions",
        description: "Engage in dedicated sessions where you can seek advice, discuss legal concepts, and gain valuable insights from experienced professionals."
    },
    {
        icon: <BiMessageRoundedDetail size={32} />,
        title: "Practical Training",
        description: "Get hands-on experience with high-level legal work, developing essential skills through direct involvement in real cases."
    },
    {
        icon: <MdOutlinePeople size={32} />,
        title: "Professional Networking",
        description: "Build valuable connections with legal professionals and peers, creating a strong foundation for your future career."
    },
    {
        icon: <BiVideo size={32} />,
        title: "Career Guidance",
        description: "Receive personalized guidance in navigating your academic journey and planning your career path in the legal profession."
    },
    {
        icon: <MdOutlineMic size={32} />,
        title: "Skills Enhancement",
        description: "Develop crucial legal skills and gain practical knowledge that will give you a competitive edge in your career."
    }
];

const additionalFeatures: BenefitBox[] = [
    {
        icon: <BiGroup size={32} />,
        title: "Comprehensive Mentorship",
        description: "Access a diverse range of mentorship opportunities tailored to different aspects of legal practice."
    },
    {
        icon: <MdOutlineMenuBook size={32} />,
        title: "Financial Support",
        description: "First-year law students can benefit from full tuition fee coverage, making quality legal education more accessible."
    },
    {
        icon: <BiMessageRoundedDetail size={32} />,
        title: "Advanced Internships",
        description: "Exclusive internship opportunities for 3rd and 4th year students to gain specialized practical experience."
    },
    {
        icon: <MdOutlinePeople size={32} />,
        title: "Senior Advocacy Program",
        description: "Final year students get the unique opportunity to shadow Senior Advocate Sajan Poovayya for a month."
    },
    {
        icon: <BiVideo size={32} />,
        title: "Publication Opportunity",
        description: "Contribute to 'Law Decoded' and get your work published, building your professional portfolio."
    },
    {
        icon: <MdOutlineMic size={32} />,
        title: "Expert Workshops",
        description: "Attend specialized lectures and workshops conducted by industry experts to enhance your knowledge."
    }
];

export default StudentProgramAndSuccess;
