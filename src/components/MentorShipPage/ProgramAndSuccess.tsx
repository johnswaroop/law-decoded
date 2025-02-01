import React from "react";
import Image from "next/image";
import Charger from "@/assets/MentorPage/Chsrging.svg";
import Wifi from "@/assets/MentorPage/Wifi.svg";
import Circle from "@/assets/MentorPage/Circle.svg";
import Wrench from "@/assets/MentorPage/Wrench.svg";
import Pin from "@/assets/MentorPage/Round.svg";
import SeniorLawyer from "@/assets/MentorPage/seniorImage.png";
import Test1 from "@/assets/MentorPage/TestimonyImage1.png";
import Test2 from "@/assets/MentorPage/TestimonyImage2.png";
import Test3 from "@/assets/MentorPage/TestimonyImage3.png";
import Test4 from "@/assets/MentorPage/TestimonyImage4.png";

const ProgramAndSuccess = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <h2 className="text-[28px] xs:text-[32px] mid:text-[40px] custom:text-[48px] font-georgia leading-tight text-[#281D1B] mt-2 mb-8">
          Program Benefits
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 custom:gap-8 w-full max-w-[1440px]">
          {benefitBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-[#7E352517] rounded-[8px] md:rounded-[12px] custom:rounded-[16px] p-4 md:p-6 custom:p-8 flex flex-col gap-3 md:gap-4 custom:gap-6"
            >
              <Image
                src={box.icon}
                alt={box.alt}
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] custom:w-[64px] custom:h-[64px]"
              />
              <p className="text-[#281D1B] font-sans text-sm md:text-base custom:text-2xl leading-snug">
                {box.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-georgia font-bold text-2xl md:text-3xl custom:text-[48px] mt-24 mb-8">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 custom:gap-8 w-full max-w-[1440px] mb-16">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF2CF66] rounded-xl p-4 md:p-6 custom:p-8 h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 custom:w-16 custom:h-16 rounded-full"
                />
                <div>
                  <p className="font-inter font-semibold text-sm md:text-base custom:text-lg">
                    {item.name}
                  </p>
                  <p className="font-inter text-xs sm:text-sm text-[#14202E9E]">
                    {item.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-0.5 bg-[#495A6E33] self-stretch" />
                <p className="font-inter text-xs sm:text-sm md:text-base custom:text-xl">
                  {item.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-georgia mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl custom:text-[64px] text-center leading-normal sm:leading-relaxed md:leading-relaxed lg:leading-relaxed custom:leading-[78px] mb-6 md:mb-8 custom:mb-12 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px] custom:max-w-[1317px] 2xl:max-w-[1440px] mx-auto">
          Mentorship bridges the gap between theory and practice, providing
          real-world insights that textbooks can&apos;t offer.
        </p>

        <div className="flex items-center gap-4 mb-20">
          <Image
            src={SeniorLawyer}
            alt="Senior Lawyer"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full"
          />
          <div>
            <p className="font-outfit font-semibold text-base sm:text-lg text-[#1B2128]">
              Sagar Poovaya
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

const benefitBoxes = [
  {
    icon: Charger,
    alt: "Charger icon",
    text: "Gain industry insights from experienced mentors.",
  },
  {
    icon: Wifi,
    alt: "Wifi icon",
    text: "Expand your professional network.",
  },
  {
    icon: Circle,
    alt: "Circle icon",
    text: "Receive personalized career guidance.",
  },
  {
    icon: Wrench,
    alt: "Wrench icon",
    text: "Access to exclusive resources and events.",
  },
  {
    icon: Wrench,
    alt: "Wrench icon",
    text: "Improve your skills and knowledge.",
  },
  {
    icon: Pin,
    alt: "Pin icon",
    text: "Boost your confidence and motivation.",
  },
];

const carouselData = [
  {
    image: Test1,
    name: "Amara Singh",
    role: "Law Student",
    feedback: "Thanks to Law Decoded, I secured an internship at a top firm.",
  },
  {
    image: Test2,
    name: "Liam Thompson",
    role: "Law Graduate",
    feedback: "Mentoring helped me navigate the complexities of law school.",
  },
  {
    image: Test3,
    name: "Sophia Martinez",
    role: "Junior Associate",
    feedback: "The guidance I received was instrumental in my career growth.",
  },
  {
    image: Test4,
    name: "Ethan Brown",
    role: "Paralegal",
    feedback: "I found my mentor's advice on work-life balance invaluable.",
  },
];

export default ProgramAndSuccess;
