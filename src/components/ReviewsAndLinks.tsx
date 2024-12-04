"use client";

// import React, { useState } from "react";
import YouIcon from "@/assets/ReviewAndLinks/youtube.svg";
import WhatIacon from "@/assets/ReviewAndLinks/whatsapp.svg";
import VideoImg1 from "@/assets/ReviewAndLinks/videoImage1.png";
import VideoImg2 from "@/assets/ReviewAndLinks/videoImage2.png";
import VideoImg3 from "@/assets/ReviewAndLinks/VideoImage3.png";
import Image from "next/image";

const ReviewsAndLinks = () => {
  return (
    <>
      {/* h = T + S + B */}
      <div className="h-auto w-full flex flex-col items-center custom:h-auto max-md:mb-[97px] ">
        <div className="flex flex-col items-center  ">
          <p className="font-georgia font-normal text-[48px] leading-[50px] -tracking-[1px] mt-[108px] mb-[87px] max-md:mb-[40px] md:mt-[55.25px] md:mb-[43.12px] md:text-[25.55px] md:leading-[26.5px] custom:text-[48px] custom:leading-[50px] custom:mt-[108px] custom:mb-[87px]">
            Videos
          </p>
          <div className="custom:w-[1192px] flex justify-between max-md:flex-col max-md:w-auto max-md:items-center max-md:gap-[25px] md:w-[631.86px] md:mb-[109.29px] custom:mb-[128px]">
            <div className="custom:w-[383.14px] custom:h-[254.29px] flex flex-col max-md:w-[300px] max-md:h-[220px] md:w-[203.1px] md:h-[135.18px]">
              <Image
                alt="image"
                src={VideoImg1}
                className="custom:w-full custom:h-[199px] custom:mb-[10px] max-md:h-[160px] md:w-[203.1px] md:h-[105.78px] md:mb-[5.64px]"
              />
              <p className="font-georgia font-normal custom:text-[15px] custom:leading-[21px] text-[#281D1B] custom:mb-[7.1px] md:text-[7.99px] md:mb-[3.76px] md:leading-[11.28px]">
                Why marital rape is still not a crime in India
              </p>
              <p className="font-inter font-semibold custom:text-[11.53px] custom:leading-[14.19px] text-[#DD4826] md:text-[6.11px]">
                12 Mins
              </p>
            </div>
            <div className="custom:w-[383.14px] custom:h-[254.29px] flex flex-col max-md:w-[300px] max-md:h-[220px] md:w-[203.1px] md:h-[135.18px]">
              <Image
                alt="image"
                src={VideoImg2}
                className="custom:w-full custom:h-[199px] custom:mb-[10px] max-md:h-[160px] md:w-[203.1px] md:h-[105.78px] md:mb-[5.64px]"
              />
              <p className="font-georgia font-normal custom:text-[15px] custom:leading-[21px] text-[#281D1B] custom:mb-[7.1px] md:text-[7.99px] md:mb-[3.76px] md:leading-[11.28px]">
                Juniors deserve better{" "}
              </p>
              <p className="font-inter font-semibold custom:text-[11.53px] custom:leading-[14.19px] text-[#DD4826] md:text-[6.11px]">
                12 Mins
              </p>
            </div>
            <div className="custom:w-[383.14px] custom:h-[254.29px] flex flex-col max-md:w-[300px] max-md:h-[220px] md:w-[203.1px] md:h-[135.18px]">
              <Image
                alt="image"
                src={VideoImg3}
                className="custom:w-full custom:h-[199px] custom:mb-[10px] max-md:h-[160px] md:w-[203.1px] md:h-[105.78px] md:mb-[5.64px]"
              />
              <p className="font-georgia font-normal custom:text-[15px] custom:leading-[21px] text-[#281D1B] custom:mb-[7.1px] md:text-[7.99px] md:mb-[3.76px] md:leading-[11.28px]">
                Alcohol ban in India?{" "}
              </p>
              <p className="font-inter font-semibold custom:text-[11.53px] custom:leading-[14.19px] text-[#DD4826] md:text-[6.11px]">
                14 Mins
              </p>
            </div>
          </div>
        </div>

        <p className="font-georgia font-normal text-[32px] leading-[52px] -tracking-[2.4px] text-black custom:mt-[79.47px] custom:text-[48px] custom:leading-[51.65px] custom:mb-[55.63px] max-md:mb-[10px] md:text-[25.44px] md:leading-[27.38px] md:-tracking-[0.53px]">
          Join our community
        </p>

        {/* whatsapp ans youtube combined div */}
        <div className="w-[342px] h-[520.64px] flex flex-col items-center justify-center gap-[0px] custom:flex-row custom:w-[993.33px] custom:h-[254.91px] custom:gap-[198px] max-xs:w-[300px] md:flex-row md:w-[526.55px] md:h-[135.35px] md:mt-[29.49px] md:gap-[105.31px] md:mb-[42.12px] custom:mb-[70px] ">
          <div className="w-full h-[243.33px] pt-[23.94px] flex flex-col items-center custom:w-[397.33px] custom:h-full    md:h-[135.35px] md:w-[210.62px] md:pt-[14.74px] custom:pt-[37.08px]">
            <Image
              src={YouIcon}
              alt="image"
              className="custom:w-[64px] custom:h-[64px] md:w-[33.7px] md:h-[33.7px] "
            />
            <p className="font-inter font-semibold text-[23.94px] leading-[30.78px] -tracking-[0.27px] text-black mt-[27.36px] mb-[10.26px] custom:mt-[32px] custom:mb-[12px] custom:text-[28px] custom:leading-[36px] md:text-[14.74px] md:leading-[18.96px] md:mt-[16.85px] md:mb-[6.32px] md:-tracking-[0.17] custom:-tracking-[0.32px]">
              Youtube
            </p>
            <p className="font-inter font-medium text-[15.36px] leading-[23.94px] -tracking-[0.17px] text-center custom:text-[18px] custom:leading-[28px] custom:font-normal custom:-tracking-[0.2px] md:text-[9.48px] md:leading-[14.74px] md:-tracking-[0.11px] text-[#000000BF]">
              Subscribe to our Youtube channel to
              <br className="" /> watch more videos.
            </p>
          </div>
          <div className="w-full h-[243.33px] pt-[23.94px] flex flex-col items-center custom:w-[348px] custom:h-full custom:pt-[37.08px]  md:h-[135.35px] md:w-[210.62px] md:pt-[14.74px]">
            <Image
              src={WhatIacon}
              alt="image"
              className="custom:w-[64px] custom:h-[64px] md:w-[33.7px] md:h-[33.7px] w-[56px] h-[56px]"
            />
            <p className="font-inter font-semibold text-[23.94px] leading-[30.78px] -tracking-[0.27px] text-black mt-[27.36px] mb-[10.26px] custom:mt-[32px] custom:mb-[12px] custom:text-[28px] custom:leading-[36px] md:text-[14.74px] md:leading-[18.96px] md:mt-[16.85px] md:mb-[6.32px] md:-tracking-[0.17]">
              Whatsapp Community
            </p>
            <p className="font-inter font-medium text-[15.36px] leading-[23.94px] -tracking-[0.17px] text-center custom:text-[18px] custom:leading-[28px] custom:font-normal custom:-tracking-[0.2px] md:text-[9.48px] md:leading-[14.74px] md:-tracking-[0.11px] text-[#000000BF] ">
              Join our whatsapp community of daily
              <br className="" /> updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsAndLinks;
