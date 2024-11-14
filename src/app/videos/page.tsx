import React from "react";
import VideoImage1 from "@/assets/Video/VideoImage.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col px-[24px] custom:w-[1344px] custom:mx-auto custom:p-0">
        <p className="mt-[68px] mb-[65px] font-georgia font-normal text-[48px] leading-[52px] -tracking-[4px] custom:mt-[98px] custom:mb-[31px] custom:text-[80px] custom:leading-[80px]">
          Videos
        </p>

        {/* videon topic one */}
        <p className="font-georgia font-normal text-[24px] leading-[28px] -tracking-[0.2px] mb-[24px] custom:text-[28px] custom:leading-[32px] custom:-tracking-[2%] custom:mb-[31px] ">
          Video Topic 1
        </p>
        <div className="flex flex-col gap-[40px] items-center mb-[101px] custom:flex-row custom:justify-between custom:mb-[62px]">
          <div>
            <Image
              src={VideoImage1}
              alt="image"
              className="w-[342px] h-[225px] mb-[12px] custom:w-[432px] custom:h-[225px] custom:mb-[12px]"
            />
            <p className="font-georgia font-normal text-[16px] leading-[24px] text-[#281D1B] mb-[8px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p className="font-inter font-semibold text-[13px] leading-[16px] text-[#DD4826] custom:text-[13px] custom:leading-[16px]">
              20 Mins
            </p>
          </div>
          <div>
            <Image
              src={VideoImage1}
              alt="image"
              className="w-[342px] h-[225px] mb-[12px] custom:w-[432px] custom:h-[225px] custom:mb-[12px]"
            />
            <p className="font-georgia font-normal text-[16px] leading-[24px] text-[#281D1B] mb-[8px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p className="font-inter font-semibold text-[13px] leading-[16px] text-[#DD4826] custom:text-[13px] custom:leading-[16px]">
              20 Mins
            </p>
          </div>
          <div>
            <Image
              src={VideoImage1}
              alt="image"
              className="w-[342px] h-[225px] mb-[12px] custom:w-[432px] custom:h-[225px] custom:mb-[12px]"
            />
            <p className="font-georgia font-normal text-[16px] leading-[24px] text-[#281D1B] mb-[8px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p className="font-inter font-semibold text-[13px] leading-[16px] text-[#DD4826] custom:text-[13px] custom:leading-[16px]">
              20 Mins
            </p>
          </div>
        </div>

        {/* Video Topic 2 */}
        <p className="font-georgia font-normal text-[24px] leading-[28px] -tracking-[0.2px] mb-[24px] custom:text-[28px] custom:leading-[32px] custom:-tracking-[2%] custom:mb-[31px] ">
          Video Topic 2
        </p>
        <div className="flex flex-col gap-[40px] items-center mb-[101px] custom:flex-row custom:justify-between custom:mb-[62px]">
          <div>
            <Image
              src={VideoImage1}
              alt="image"
              className="w-[342px] h-[225px] mb-[12px] custom:w-[432px] custom:h-[225px] custom:mb-[12px]"
            />
            <p className="font-georgia font-normal text-[16px] leading-[24px] text-[#281D1B] mb-[8px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p className="font-inter font-semibold text-[13px] leading-[16px] text-[#DD4826] custom:text-[13px] custom:leading-[16px]">
              20 Mins
            </p>
          </div>
          <div>
            <Image
              src={VideoImage1}
              alt="image"
              className="w-[342px] h-[225px] mb-[12px] custom:w-[432px] custom:h-[225px] custom:mb-[12px]"
            />
            <p className="font-georgia font-normal text-[16px] leading-[24px] text-[#281D1B] mb-[8px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p className="font-inter font-semibold text-[13px] leading-[16px] text-[#DD4826] custom:text-[13px] custom:leading-[16px]">
              20 Mins
            </p>
          </div>
          <div>
            <Image
              src={VideoImage1}
              alt="image"
              className="w-[342px] h-[225px] mb-[12px] custom:w-[432px] custom:h-[225px] custom:mb-[12px]"
            />
            <p className="font-georgia font-normal text-[16px] leading-[24px] text-[#281D1B] mb-[8px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p className="font-inter font-semibold text-[13px] leading-[16px] text-[#DD4826] custom:text-[13px] custom:leading-[16px]">
              20 Mins
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
