import React from "react";
import ImageNews from "@/assets/WhiteBox/Placeholder.png";
import Image from "next/image";

const WhiteBox = () => {
  return (
    <>
      {/* height= top + center + bottom */}
      <div className="w-full h-[900.71px] flex flex-col items-center  custom:h-[1019px] max-custom:pt-[50px]">
        {/* h = t + s + b */}
        {/* outer-box only visible > 1440px */}
        <div className="max-custom:hidden w-[944px] h-[765.29px] border-[1px] border-[#000000] mt-[141px] mb-[133px] flex flex-col items-center ">
          {/* inner box */}
          <div className="mt-[151.21px] w-[320px] h-[234px] border-[1.69px] border-[#202020] mb-[43px] max-xs:w-[300px]    custom:mt-[40px] custom:mb-[28px] custom:w-[812px] custom:h-[276.29px] flex justify-center items-center">
            <Image src={ImageNews} alt="image" />
          </div>
          {/* h = s + b */}
          <div className="w-[329px] text-[28px] font-georgia font-normal leading-[36px] text-center mb-[12px]  max-xs:w-[300px] custom:text-[40px] custom:leading-[50px] custom:w-[812px] custom:h-[50px] custom:text-start custom:mb-0">
            Marital Rape
          </div>
          <p className="max-custom:hidden mt-[12px] font-inter font-medium text-[#121212] w-[812px] text-[18px] leading-[28px] -tracking-[0.16px] mb-[32px]">
            Sajan Poovayya
          </p>

          {/* h = s + b */}
          <div className="w-[320px] h-[280px] font-inter font-normal text-[18px] leading-[28px] text-[#212424] text-justify custom:text-left mb-[45px] max-xs:w-[300px] custom:w-[812px] custom:h-[129px] custom:mb-[45px] custom:text-[22p">
            In Karnataka in 2022, a landmark decision unfolded as Justice M.
            Nagaprasanna declared the marital rape exception in India&lsquo;s
            legal system to be regressive and violative of the right to
            equality. The case centered around a woman who accused her husband,
            Hrishikesh Sahoo, of rape and other offenses—a bold move that
            challenged...
          </div>

          <button className="bg-[#DD4826] w-[129px] h-[48px] flex justify-center items-center text-white text-[16px] font-inter font-medium custom:w-[812px] custom:h-[64px] custom:rounded-[8px]">
            <p>Continue reading</p>
          </button>
        </div>

        {/* mobile box */}
        <div className="mt-[100px] w-[317px] h-[107px]  mb-[43px] max-xs:w-[300px]    custom:mt-[40px] custom:mb-[28px] custom:w-[812px] custom:h-[276.29px] flex justify-center items-center custom:hidden">
          <Image src={ImageNews} alt="image" />
        </div>
        {/* h = s + b */}
        <div className="w-[329px] text-[28px] font-georgia font-normal leading-[36px] text-center mb-[12px]  max-xs:w-[300px] custom:text-[40px] custom:leading-[50px] custom:w-[812px] custom:h-[100px] custom:text-start custom:mb-[43px] custom:hidden">
          Marital Rape
        </div>
        <p className="mb-[30px] font-inter font-medium text-[#121212] custom:hidden ">
          Sajan Poovayya
        </p>

        {/* h = s + b */}
        <div className="w-[320px] h-[280px] font-inter font-normal text-[18px] leading-[28px] text-[#212424] text-justify mb-[45px] max-xs:w-[300px] custom:w-[812px] custom:h-[129px] custom:mb-[45px] custom:text-[22p custom:hidden">
          In Karnataka in 2022, a landmark decision unfolded as Justice M.
          Nagaprasanna declared the marital rape exception in India&lsquo;s
          legal system to be regressive and violative of the right to equality.
          The case centered around a woman who accused her husband, Hrishikesh
          Sahoo, of rape and other offenses—a bold move that challenged...
        </div>

        <button className="bg-[#DD4826] w-[139px] h-[48px] flex justify-center items-center text-white text-[14px] font-inter font-medium custom:w-[812px] custom:h-[64px] custom:rounded-[8px] custom:hidden rounded-[7px]">
          <p>Continue Reading</p>
        </button>
      </div>
    </>
  );
};

export default WhiteBox;
