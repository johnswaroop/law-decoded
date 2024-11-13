import React from "react";
import LaawyerImage from "@/assets/ILike/Image.png";
import Arrow from "@/assets/ILike/Arrow.svg";
import Image from "next/image";

const ILinkeBeing = () => {
  return (
    <>
      {/* h = self */}
      <div className="flex flex-col items-center bg-[#FFA89A4D] justify-center gap-[63.01px] w-full h-[735.99px] custom:flex-row custom:gap-[108px]">
        <div className="w-[304.87px] h-[282.78px] pr-[20.87px] flex flex-col justify-between gap-[14px] custom:w-[515px] custom:h-[483.19px] custom:gap-[24px]">
          <div className="w-[284px] h-[192px] font-georgia font-normal text-[22.19px] leading-[27.42px] -tracking-[1.17px] custom:text-[40px] custom:leading-[47px] custom:w-full custom:h-[329px] ">
            “I like being in control of my payroll, without the back and forth
            of using an accountant. Onfolk is clear, clean, and makes payroll
            really easy to do. Other software products were confusing to use.”
          </div>
          <div className="flex flex-col justify-center items-start gap-[4.67px] w-[284px] custom:gap-[8px]">
            <p className="font-inter font-medium  text-[16.64px] leading-[16.34px] -tracking-[0.09px] text-[#121212] custom:text-[18px] custom:leading-[28px]">
              Sajan Poovayya
            </p>
            <p className="font-inter font-normal  text-[11.1px] leading-[12.84px] -tracking-[0.09px] text-[#121212] custom:text-[14px] custom:leading-[22px]">
              Founder Law Decoded
            </p>
          </div>
          {/* button */}
          <button className="w-[115.89px] h-[28.11px] bg-[#000000] rounded-[4.67px] flex justify-center gap-[7px] items-center custom:w-[200px] custom:h-[48.19px]">
            <p className="font-inter font-medium text-[9.33px] leading-[14px] -tracking-[0.09px] text-white custom:text-[16px]">
              View case study
            </p>
            <Image
              alt="image"
              src={Arrow}
              className="w-[8.82px] h-[9.88px] custom:w-[16px] custom:h-[16px]"
            />
          </button>
        </div>
        {/* image */}
        <div className="w-[304.87px] h-[332.9px] overflow-hidden relative">
          <Image
            src={LaawyerImage}
            alt="image"
            fill
            className="object-cover w-[304.87px] h-[332.9px] "
          />
        </div>
      </div>
    </>
  );
};

export default ILinkeBeing;
