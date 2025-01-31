"use client";
import React, { useState } from "react";
import Image from "next/image";
import LaywerImage from "@/assets/EfficientModel/lawyerPic.png";

const EfficientModel = () => {
  const [expand, setExpand] = useState(0);

  const handleClick = (num: number): void => {
    setExpand((prevExpand) => {
      if (num === prevExpand) {
        return prevExpand === 2 ? 0 : prevExpand + 1;
      } else {
        return num;
      }
    });
  };

  return (
    <div className="w-full px-4 py-8 xs:px-6 sm:px-8 mid:px-10 lg:px-12 custom:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl mid:text-5xl lg:text-6xl custom:text-[48px] font-georgia font-normal leading-tight -tracking-[1.2px] text-center mb-4 sm:mb-6 mid:mb-8 lg:mb-10 custom:mb-[24px]">
          Sajan Poovayya Mentorship Programme
        </h1>

        {/* Description */}
        <p className="max-w-[300px] xs:max-w-[338px] sm:max-w-[500px] mid:max-w-[600px] lg:max-w-[700px] custom:max-w-[844px] mx-auto text-sm xs:text-base sm:text-lg mid:text-xl lg:text-2xl custom:text-[17.66px] font-inter text-[#000000BF] leading-relaxed text-center mb-6 sm:mb-8 mid:mb-10 lg:mb-12 custom:mb-[56px]">
          A unique mentorship programme that offers law students and young lawyers an opportunity to engage with real time litigation. We also host special seminars and conversations that help young lawyers make strides in the profession of law.
        </p>

        {/* Main Content Container */}
        <div className="flex flex-col mid:flex-row items-center justify-center gap-6 mid:gap-8 lg:gap-10 custom:gap-[41px]">
          {/* Image Container */}
          <div className="w-full max-w-[342px] xs:max-w-[368px] sm:max-w-[450px] mid:max-w-[500px] lg:max-w-[600px] custom:max-w-[695px] rounded-xl overflow-hidden">
            <Image 
              src={LaywerImage} 
              alt="Lawyer" 
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Cards Container */}
          <div className="w-full max-w-[342px] xs:max-w-[368px] sm:max-w-[450px] mid:max-w-[284px] lg:max-w-[400px] custom:max-w-[458px] space-y-4 mid:space-y-3 lg:space-y-5 custom:space-y-6">
            {[1, 2, 3].map((num, index) => (
              <div
                key={num}
                onClick={() => handleClick(index)}
                className={`rounded-[9px] px-4 sm:px-6 mid:px-6 lg:px-8 custom:px-[40px] py-4 sm:py-6 mid:py-5 lg:py-6 custom:py-[32px] bg-white shadow-lg cursor-pointer transition-all duration-300 hover:border-[0.75px] hover:border-[#FC5A5A] ${
                  expand === index
                    ? "border-t-[0.75px] border-[#FC5A5A]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mid:gap-3 lg:gap-4 custom:gap-[13px]">
                  <div className={`rounded-full w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] mid:w-[32px] mid:h-[32px] lg:w-[36px] lg:h-[36px] custom:w-[40px] custom:h-[40px] ${
                    index === 0 ? "bg-[#FFF2CF]" : "bg-white"
                  } border-[0.75px] border-black flex items-center justify-center`}>
                    <span className="font-inter font-semibold text-sm sm:text-base mid:text-base lg:text-lg custom:text-[21px]">
                      {num}
                    </span>
                  </div>
                  <span className="font-inter font-semibold text-sm sm:text-base mid:text-base lg:text-lg custom:text-[21px]">
                    {index === 0 ? "Engage" : index === 1 ? "Ideate" : "Join Us"}
                  </span>
                </div>

                <p className={`mt-2 font-inter text-xs sm:text-sm mid:text-sm lg:text-base custom:text-[14px] text-[#000000BF] transition-all duration-300 ${
                  expand === index
                    ? "opacity-100 max-h-20"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}>
                  Subscribe to us to say updated- hyperlink (takes you to the social media pages)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EfficientModel;
