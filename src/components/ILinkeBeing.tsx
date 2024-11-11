import React from "react";
import LaawyerImage from "@/assets/ILike/Image.png";
import Arrow from "@/assets/ILike/Arrow.svg";
import Image from "next/image";

const ILinkeBeing = () => {
  return (
    <>
      {/* h = self */}
      <div className="flex flex-col items-center bg-[#FFA89A4D] justify-center gap-[63.01px] w-full h-[735.99px]">
        <div className="w-[304.87px] h-[282.78px] pr-[20.87px] flex flex-col justify-between gap-[14px]">
          <div className="w-[284px] h-[192px] font-georgia font-normal text-[22.19px] leading-[27.42px] -tracking-[1.17px] ">
            “I like being in control of my payroll, without the back and forth
            of using an accountant. Onfolk is clear, clean, and makes payroll
            really easy to do. Other software products were confusing to use.”
          </div>
          <div className="flex flex-col justify-center items-start gap-[4.67px] w-[284px]">
            <p className="font-inter font-medium  text-[16.64px] leading-[16.34px] -tracking-[0.09px] text-[#121212]">
              Sajan Poovayya
            </p>
            <p className="font-inter font-medium  text-[11.1px] leading-[12.84px] -tracking-[0.09px] text-[#121212]">
              Founder Law Decoded
            </p>

            {/* button */}
          </div>
          <button className="w-[115.89px] h-[28.11px] bg-[#000000] rounded-[4.67px] flex justify-center gap-[7px] items-center">
            <p className="font-inter font-medium text-[9.33px] leading-[14px] -tracking-[0.09px] text-white">
              View case study
            </p>
            <Image alt="image" src={Arrow} className="w-[8.82px] h-[9.88px]" />
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
