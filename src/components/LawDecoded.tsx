import React from "react";
// import MountainIcon from "@/assets/AboutSection/Mountain.svg";
import LawDecodedw from "@/assets/LawDecoded/ImageOwl.png";
import Image from "next/image";

const LawDecoded = () => {
  return (
    <>
      {/* height =  self + bottom */}
      <div className="h-[774px] w-full flex flex-col items-center custom:h-auto custom:mb-[100px] custom:mt-[63px] mt-[70px] md:mt-0 md:h-auto md:mb-[71.01px] custom:mb-[157px]">
        {/* Mt icon */}
        <div className="w-[442px] h-[121px] overflow-hidden relative mb-[135px] custom:mb-[60px] max-custom:w-[342px] max-custom:mb-[40px] max-xs:w-[300px] md:w-[235px] md:h-[78px] md:mb-[28.21px] custom:w-[443px] custom:h-[148px]">
          <Image
            src={LawDecodedw}
            alt="mountain"
            fill
            className="object-fit w-[443px] h-[148px] custom:w-[443px] custom:h-[148px] max-custom:w-[342px] max-xs:w-[300px] md:w-[235px] md:h-[78px] "
          />
        </div>
        {/* Text */}
        <div className="w-full h-[95px] flex justify-center items-center max-custom:mb-[20px] md:h-[26.52px] md:mb-[15.38px] ">
          <p className="font-georgia font-normal text-[32px] leading-[40px] -tracking-[1px] text-center custom:text-[40px] custom:leading-[50px] md:text-[21.22px] md:leading-[26.52px] md:-tracking-[0.53px] custom:mb-[29px]">
            Law Decoded with
            <br className="md:hidden" /> Sajan Poovayya
          </p>
        </div>

        {/* small text + button */}
        <div className="w-full h-[400px] flex flex-col  items-center custom:h-[300px] md:h-auto">
          <p className="w-[336px] h-[315px] font-inter font-normal text-[16px] leading-[28px] -tracking-tighter-[0.2px] text-justify  max-xs:w-[300px] custom:text-[18px] custom:leading-[28px]  custom:h-[199px] text-[#212424] md:text-[9.55px] md:leading-[14.85px] md:-tracking-[0.11px] md:h-auto md:text-justify custom:-tracking-[0.2px] custom:w-[606px]">
            Law Decoded is a platform dedicated to empowering the legal
            community by bridging the gap between aspiring law students and
            experienced lawyers. Through its mentorship program, Law Decoded
            fosters meaningful connections, providing students with the guidance
            they need to navigate their legal journey while offering lawyers an
            opportunity to share their expertise and shape the next generation
            of legal professionals.
          </p>
          <button className="w-[129px] h-[48px] flex justify-center items-center bg-[#DD4826] mt-[39.9px] md:mt-[21.2px] text-white custom:mt-[40px] custom:w-[466px] custom:h-[64px] md:w-[247.02px] md:h-[33.93px]">
            <p className="font-inter font-medium text-[16px] md:text-[8.48px] md:leading-[12.72px] custom:text-[16px] custom:leading-[24px] custom:-tracking-[0.16px]">
              Read More
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default LawDecoded;
