"use client";
import React, { useState } from "react";
import Image from "next/image";
import LaywerImage from "@/assets/EfficientModel/lawyerPic.png";

const EfficientModel = () => {
  const [expand, setExpande] = useState(0);

  const handleClick = (num: number): void => {
    setExpande((prevExpand) => {
      if (num === prevExpand) {
        return prevExpand === 2 ? 0 : prevExpand + 1;
      } else {
        return num;
      }
    });
  };
  return (
    <>
      {/* only height */}
      <div className="h-auto w-full custom:h-[870px] md:h-[479.8px] flex flex-col items-center  ">
        <p className="text-[48px] custom:text-[48px] md:text-[25px] font-georgia font-normal leading-[52px] -tracking-[2.4px] text-center mb-[40px] custom:mb-[24px] md:mb-[12px] md:leading-[27px] custom:leading-[52px]">
          Sajan Poovayya Mentorship Programme
        </p>
        <p
          className=" w-[844px]  font-inter font-normal text-[17.66px] leading-[28px] -tracking-[0.2px]  px-[70px] mb-[56px] text-[#000000BF]
        custom:mb-[56px] md:mb-[29px] max-xs:px-0 max-custom:text-[16px] md:text-[9px] max-custom:w-[338px] md:w-[447px] max-custom:px-0 md:px-0 max-md:w-[300px] md:leading-[14.85px] custom:text-[17.66px] custom:leading-[28px] custom:-tracking-[0.2px] custom:w-[844px] text-justify"
        >
          A unique mentorship programme that offers law students and young
          lawyers an opportunity to engage with real time litigation. We also
          host special seminars and conversations that help young lawyers make
          strides in the profession of law.
        </p>
        <div className="flex flex-col items-center  px-[24px] max-xs:px-0 custom:flex-row md:flex-row custom:w-[1232px] md:w-auto custom:h-[550px] md:h-[291.55px] custom:justify-center md:justify-center custom:gap-[41px] md:gap-[21.73px]">
          {/* Image screen */}
          <div className="w-[342px] h-[270px] rounded-[12px] mb-[30px] custom:h-full md:h-[291.55px] custom:w-[695px] md:w-[368.41px] custom:mb-0 md:mb-0 max-xs:w-[300px]">
            <Image src={LaywerImage} alt="image" />
          </div>
          <div className="flex flex-col items-center custom:h-full md:h-full custom:w-[456px] md:w-[284px] custom:justify-center md:justify-center gap-[18px] md:gap-[12px] custom:gap-[24px] max-md:mt-[50px]">
            {/* First box */}
            <div
              className={`w-[342px]  rounded-[9px]  px-[30px] py-[24px] flex flex-col justify-between max-xs:w-[300px] bg-white md:w-[243px]  md:px-[21.2px] md:py-[16.96px] custom:w-[458px]  custom:px-[40px] custom:py-[32px] transition-all duration-300 ease-in-out cursor-pointer
                ${
                  expand === 0
                    ? "h-[124px] border-t-[0.75px] border-[#FC5A5A] md:h-[86px] custom:h-[164px]"
                    : "h-[78px] md:h-[55.13px] custom:h-[104px]"
                }`}
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
              onClick={() => handleClick(0)}
            >
              {/* Circle and text */}
              <div
                className="w-full h-[30px] flex justify-start items-center gap-[9.75px] md:h-[21.2px] md:gap-[6.89px]
              custom:h-[40px] custom:gap-[13px]"
              >
                <div className="rounded-full w-[30px] h-full bg-[#FFF2CF] border-[0.75px] border-[#000000] flex justify-center items-center md:w-[21.2px] md:border-[0.53px] custom:w-[40px] custom:border-[1px]">
                  <p className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] text-[#000000] md:text-[11.13px] md:leading-[14.84px] md:-tracking-[0.13px] custom:text-[21px] custom:leading-[28px] custom:-tracking-[0.24px]">
                    1
                  </p>
                </div>
                <p className="font-inter font-semibold text-[15.75px] -tracking-[0.18px] md:text-[11.13px] md:leading-[14.84px] md:-tracking-[0.13px] custom:text-[21px] custom:leading-[28px] custom:-tracking-[0.24px]">
                  Engage
                </p>
              </div>

              {/* Text */}
              <p
                className={`font-inter font-normal text-[10.5px] leading-[16.5px] text-[#000000BF] md:text-[7.42px] md:leading-[11.66px] custom:text-[14px] custom:leading-[22px] transition-all duration-300 ease-in-out ${
                  expand === 0
                    ? "opacity-100 max-h-[33px] delay-300 "
                    : "opacity-0 max-h-0"
                }`}
              >
                Subscribe to us to say updated- hyperlink (takes you to the
                social media pages)
              </p>
            </div>

            {/* second box */}
            <div
              className={`w-[342px] rounded-[9px]  px-[30px] py-[24px] flex flex-col justify-between bg-white max-xs:w-[300px] md:w-[243px]  md:px-[21.2px] md:py-[16.96px] custom:w-[458px]  custom:px-[40px] custom:py-[32px] transition-all duration-300 ease-in-out cursor-pointer ${
                expand === 1
                  ? "h-[124px] border-t-[0.75px] border-[#FC5A5A] md:h-[86px] custom:h-[164px]"
                  : "h-[78px] md:h-[55.13px] custom:h-[104px]"
              }`}
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
              onClick={() => handleClick(1)}
            >
              {/* Circle and text */}
              <div className="w-full h-[30px] flex justify-start items-center gap-[9.75px]  md:h-[21.2px] md:gap-[6.89px] custom:h-[40px] custom:gap-[13px]">
                <div className="rounded-full w-[30px] h-full bg-white border-[0.75px] border-[#000000] flex justify-center items-center md:w-[21.2px] md:border-[0.53px] custom:w-[40px] custom:border-[1px]">
                  <p className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] text-[#000000] md:text-[11.13px] md:leading-[14.84px] md:-tracking-[0.13px] custom:text-[21px] custom:leading-[28px] custom:-tracking-[0.24px]">
                    2
                  </p>
                </div>
                <p className="font-inter font-semibold text-[15.75px] -tracking-[0.18px] md:text-[11.13px] md:leading-[14.84px] md:-tracking-[0.13px] custom:text-[21px] custom:leading-[28px] custom:-tracking-[0.24px]">
                  Ideate
                </p>
              </div>

              {/* Text */}
              <p
                className={`font-inter font-normal text-[10.5px] leading-[16.5px] text-[#000000BF] md:text-[7.42px] md:leading-[11.66px] custom:text-[14px] custom:leading-[22px] transition-all duration-300 ease-in-out ${
                  expand === 1
                    ? "opacity-100 max-h-[33px] delay-300"
                    : "opacity-0 max-h-0"
                }`}
              >
                Subscribe to us to say updated- hyperlink (takes you to the
                social media pages)
              </p>
            </div>

            {/* Third box */}
            <div
              className={`w-[342px] rounded-[9px] px-[30px] py-[24px] flex flex-col justify-between bg-white max-xs:w-[300px]  custom:w-[458px] custom:h-[104px] custom:px-[40px] custom:py-[32px] md:w-[243px] md:h-[55.13px] md:px-[21.2px] md:py-[16.96px] max-md:mb-[44px] transition-all duration-300 ease-in-out cursor-pointer ${
                expand === 2
                  ? "h-[124px] border-t-[0.75px] border-[#FC5A5A] md:h-[86px] custom:h-[164px]"
                  : "h-[78px] md:h-[55.13px] custom:h-[104px]"
              }`}
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
              onClick={() => handleClick(2)}
            >
              {/* Circle and text */}
              <div className="w-full h-[30px] flex justify-start items-center gap-[9.75px]  md:h-[21.2px] md:gap-[6.89px] custom:h-[40px] custom:gap-[13px]">
                <div className="rounded-full w-[30px] h-full bg-white border-[0.75px] border-[#000000] flex justify-center items-center md:w-[21.2px] md:border-[0.53px] custom:w-[40px] custom:border-[1px]">
                  <p className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] text-[#000000] md:text-[11.13px] md:leading-[14.84px] md:-tracking-[0.13px] custom:text-[21px] custom:leading-[28px] custom:-tracking-[0.24px]">
                    3
                  </p>
                </div>
                <p className="font-inter font-semibold text-[15.75px] -tracking-[0.18px] md:text-[11.13px] md:leading-[14.84px] md:-tracking-[0.13px] custom:text-[21px] custom:leading-[28px] custom:-tracking-[0.24px]">
                  Join Us
                </p>
              </div>

              {/* Text */}
              <p
                className={`font-inter font-normal text-[10.5px] leading-[16.5px] text-[#000000BF] md:text-[7.42px] md:leading-[11.66px] custom:text-[14px] custom:leading-[22px] transition-all duration-300 ease-in-out ${
                  expand === 2
                    ? "opacity-100 max-h-[33px] delay-300"
                    : "opacity-0 max-h-0"
                }`}
              >
                Subscribe to us to say updated- hyperlink (takes you to the
                social media pages)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EfficientModel;
