"use client";

import React, { useState } from "react";
import YouIcon from "@/assets/ReviewAndLinks/youtube.svg";
import WhatIacon from "@/assets/ReviewAndLinks/whatsapp.svg";
import Image from "next/image";

const ReviewsAndLinks = () => {
  const [num, setNumber] = useState<number>(2);

  return (
    <>
      {/* h = T + S + B */}
      <div className="h-[1173.01px] w-full flex flex-col items-center">
        {/* Text + buttons */}
        {/* h = s + b */}
        <div className="mt-[108.01px] w-[342px] h-[167.85px] flex flex-col items-center mb-[188.15px]">
          <p className="w-full h-[95.72px] font-inter font-normal italic text-[12px] leading-[17.55px] -tracking-[0.22px] text-center mb-[5.21px]  max-xs:w-[300px]">
            “Quis vel eros donec ac odio. Cras tincidunt lobortis feugiat
            vivamus at augue eget arcu dictum. Arcu cursus euismod quis viverra
            nibh cras. accumsan. Neque volutpat ac tincidunt vitae semper. Quis
            vel eros donec ac odio. Cras tincidunt lobortis feugiat vivamus at
            augue eget arcu dictum.”
          </p>
          <p className="font-georgia font-normal text-[14px] leading-[17.55px] mb-[5.07px]">
            Rose Schultz
          </p>
          <p className="font-inter font-semibold text-[8px]  leading-[13.16px] tracking-[2.19px] mb-[20.52px]">
            UI DESIGNER SHADYLABS
          </p>
          <div className="w-[66.92px] h-[9.32px] flex justify-between ">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                num === 0
                  ? "w-[30.72px] bg-[#DD4826] "
                  : "w-[9.32px] bg-[#eea292]"
              } `}
              onClick={() => setNumber(0)}
            ></div>
            <div
              className={`h-full transition-all duration-300 ${
                num === 1
                  ? "w-[30.72px] bg-[#DD4826] rounded-full"
                  : "w-[9.32px] bg-[#eea292] rounded-full"
              } `}
              onClick={() => setNumber(1)}
            ></div>
            <div
              className={`h-full transition-all duration-300 ${
                num === 2
                  ? "w-[30.72px] bg-[#DD4826] rounded-full"
                  : "w-[9.32px] bg-[#eea292] rounded-full"
              } `}
              onClick={() => setNumber(2)}
            ></div>
          </div>
        </div>

        <p className="font-georgia font-normal  text-[32px] leading-[52px] -tracking-[2.4px] text-black">
          Join our community
        </p>

        {/* whatsapp ans youtube combined div */}
        <div className="w-[342px] h-[520.64px] flex flex-col items-center justify-center gap-[34.3px]">
          <div className="w-full h-[243.33px] pt-[23.94px] flex flex-col items-center ">
            <Image src={YouIcon} alt="image" />
            <p className="font-inter font-semibold text-[23.94px] leading-[30.78px] -tracking-[0.27px] text-black mt-[27.36px] mb-[10.26px]">
              Youtube
            </p>
            <p className="font-inter font-medium text-[15.36px] leading-[23.94px] -tracking-[0.17px] text-center">
              Seamlessly integrate with HMRC,
              <br className="md:hidden" /> accounting software for efficient
              payroll management.
            </p>
          </div>
          <div className="w-full h-[243.33px] pt-[23.94px] flex flex-col items-center ">
            <Image src={WhatIacon} alt="image" />
            <p className="font-inter font-semibold text-[23.94px] leading-[30.78px] -tracking-[0.27px] text-black mt-[27.36px] mb-[10.26px]">
              Whatsapp Community
            </p>
            <p className="font-inter font-medium text-[15.36px] leading-[23.94px] -tracking-[0.17px] text-center">
              Seamlessly integrate with HMRC,
              <br className="md:hidden" /> accounting software for efficient
              payroll management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsAndLinks;
