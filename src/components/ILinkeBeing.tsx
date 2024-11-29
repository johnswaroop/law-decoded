import React from "react";
import LaawyerImage from "@/assets/ILike/sittingImage.png";
import Arrow from "@/assets/ILike/Arrow.svg";
import Image from "next/image";

const ILinkeBeing = () => {
  return (
    <>
      {/* h = self */}
      <div className="flex flex-col items-center bg-[#FFA89A4D] justify-center gap-[63.01px] w-full h-[735.99px] custom:flex-row custom:gap-0 custom:h-[808px]">
        <div className="w-[304.87px] h-[282.78px] pr-[20.87px] flex flex-col justify-between gap-[14px] custom:w-[614px] custom:h-[577px] custom:gap-[24px]">
          <div className="w-[284px] h-[192px] font-georgia font-normal text-[22.19px] leading-[27.42px] -tracking-[1.17px] custom:text-[32px] custom:leading-[47px] custom:w-[614px] custom:h-[423px] custom:-tracking-[2px] ">
            When only a privileged few have access to legal knowledge, it
            creates barriers that prevent fair representation and the full
            participation of marginalized communities in legal and civic
            processes. For true equality in the justice system, we need lawyers,
            policymakers, and advocates from all walks of life. This diversity
            can lead to a more compassionate and effective legal system, as
            those within it better reflect the society they serve.
          </div>
          <div className="flex flex-col justify-center items-start gap-[4.67px] w-[284px] custom:gap-[8px]">
            <p className="font-inter font-medium  text-[16.64px] leading-[16.34px] -tracking-[0.09px] text-[#121212] custom:text-[18px] custom:leading-[28px] custom:-tracking-[0.16px]">
              Sajan Poovayya
            </p>
            <p className="font-inter font-normal  text-[11.1px] leading-[12.84px] -tracking-[0.09px] text-[#121212] custom:text-[14px] custom:leading-[22px]">
              Founder Law Decoded
            </p>
          </div>
          {/* button */}
          <button className="w-[115.89px] h-[28.11px] bg-[#000000] rounded-[8px] flex justify-center gap-[7px] items-center custom:w-[156px] custom:h-[48.19px]">
            <p className="font-inter font-medium text-[9.33px] leading-[14px] -tracking-[0.09px] text-white custom:text-[16px]">
              View more
            </p>
            <Image
              alt="image"
              src={Arrow}
              className="w-[8.82px] h-[9.88px] custom:w-[16px] custom:h-[16px]"
            />
          </button>
        </div>
        {/* image */}
        <div className="w-[304.87px] h-[332.9px] overflow-hidden relative custom:w-[509px] custom:h-[481px] custom:ml-[67px]">
          <Image
            src={LaawyerImage}
            alt="image"
            fill
            className="object-cover w-[304.87px] h-[332.9px] custom:w-[509px] custom:h-[481px]"
          />
        </div>
      </div>
    </>
  );
};

export default ILinkeBeing;
