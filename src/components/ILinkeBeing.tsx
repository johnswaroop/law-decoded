import React from "react";
import LaawyerImage from "@/assets/ILike/sittingImage.png";
import Arrow from "@/assets/ILike/Arrow.svg";
import Image from "next/image";

const ILinkeBeing = () => {
  return (
    <>
      {/* h = self */}
      <div className="flex flex-col items-center bg-[#FFA89A4D] justify-center gap-[63.01px] w-full h-auto md:flex-row custom:gap-0  md:h-[428.31px] md:pt-[60.96px] md:pb-[34.84px] md:gap-[35.52px] custom:h-auto custom:pt-[115px] custom:pb-[68.81px]">
        <div className="w-[304.87px] h-auto pr-[20.87px] flex flex-col max-md:mt-[33.69px] justify-between max-md:justify-center gap-[20px] custom:w-[614px] custom:h-[624.14px] custom:gap-[24px] md:w-[325.47px] md:px-0 md:gap-[12.72px] md:justify-center ">
          <div className="w-[284px] h-[292px] font-georgia font-normal text-[17.19px] leading-[27.42px] -tracking-[1.17px] custom:text-[32px] custom:leading-[47px] custom:w-[614px] custom:h-[470px] custom:-tracking-[2px] md:text-[16.96px] md:leading-[24.91px] md:-tracking-[1.06px] md:text-justify italic md:w-[325.47px] md:h-auto text-justify ">
            &quot;When only a privileged few have access to legal knowledge, it
            creates barriers that prevent fair representation and the full
            participation of marginalized communities in legal and civic
            processes. For true equality in the justice system, we need lawyers,
            policymakers, and advocates from all walks of life. This diversity
            can lead to a more compassionate and effective legal system, as
            those within it better reflect the society they serve.&quot;
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
        <div className="w-[304.87px] h-[361.9px] overflow-hidden relative custom:w-[509px] custom:h-[624px] custom:ml-[67px]  md:w-[269.81px] md:h-[330.77px] md:rounded-[5.85px] max-md:mb-[33.65px]">
          <Image
            src={LaawyerImage}
            alt="image"
            fill
            className="object-fit w-[304.87px] h-[361.9px] custom:w-[509px] custom:h-[624px] md:w-[269.81px] md:h-[330.77px] md:rounded-[5.85px]"
          />
        </div>
      </div>
    </>
  );
};

export default ILinkeBeing;
