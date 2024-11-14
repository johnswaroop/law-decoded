import React from "react";
import ImageProfile from "@/assets/Video/Profile.svg";
import Image1 from "@/assets/Video/Image1.png";
import Image2 from "@/assets/Video/Image2.png";
import Image3 from "@/assets/Video/Image3.png";
import Image4 from "@/assets/Video/Image4.png";
import Image5 from "@/assets/Video/Image5.png";
import Image from "next/image";

const FututreOfAi = () => {
  return (
    <>
      <div className="mt-[39px] flex flex-col px-[26px] custom:items-center custom:mt-[72px]">
        {/* Ai texh fututre text */}
        <p className="font-inter font-medium text-[10px] leading-[9.36px] text-[#F72C00] ml-0 mb-[11.29px] custom:w-[730px] custom:text-start custom:text-[15px] custom:leading-[20px] custom:mb-[24px]">
          AI, Technology, Future
        </p>
        <p className="font-georgia font-normal text-[40px] leading-[45px] -tracking-[2%] text-[#281D1B] mb-[11.29px] max-xs:text-[32px] max-xs:leading-[38px]  custom:text-start custom:text-[48px] custom:leading-[52px] custom:truncate custom:mb-[24px]">
          The Future of AI: Trends to Watch
        </p>
        <p className="font-inter font-normal text-[12px] leading-[17px] text-[#281D1B] text-start mb-[11.29px] custom:text-[20px] custom:leading-[20px] custom:w-[730px] custom:mb-[24px] ">
          An in-depth look at the emerging trends in artificial intelligence and
          what they mean for the future.
        </p>

        {/* round Image and text */}
        <div className="flex justify-start items-center gap-[7.72px] mb-[7.48px] custom:w-[730px] custom:gap-[12px] custom:mb-[18px]">
          <Image
            src={ImageProfile}
            alt="Image"
            className="custom:w-[36px] custom:h-[36px]"
          />
          <div className="flex flex-col">
            <p className="font-georgia font-normal text-[7.83px] leading-[9.64px] text-[#281D1B] custom:text-[13px] custom:leading-[16px]">
              Jason Bialis
            </p>
            <p className="font-inter font-normal text-[7.83px] leading-[9.64px] text-[#2E19149E] custom:text-[13px] custom:leading-[16px]">
              Product Designercustom:text-[13px] custom:leading-[16px]
            </p>
          </div>
        </div>

        {/* date */}
        <p className="font-inter font-normal text-[8px] leading-[9.36px] text-[#281D1B] mb-[20px] custom:text-[15px] custom:leading-[20px] custom:w-[730px] custom:mb-[48px]">
          October 10, 2023
        </p>
        {/* Image 1 */}
        <Image
          src={Image1}
          alt="image"
          className="w-[344.77px] h-[292.38px] mb-[33px] max-xs:h-[250px] custom:w-[730px] custom:h-[625px] custom:mb-[70px]"
        />

        <p className="font-georgia font-normal text-[16px] leading-[14.97px] -tracking-[2%] ml-[2.57px] mb-[11.23px] custom:w-[730px] custom:text-[28px] custom:leading-[32px] custom:mb-[24px]">
          Introduction
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px] text-[#281D1B]  ml-[2.57px] h-[187px] mb-[33px] max-xs:text-[13px] custom:w-[730px] custom:text-[17px] custom:leading-[28px] custom:h-[112px] custom:mb-[72px]">
          Artificial Intelligence (AI) has been a rapidly evolving field over
          the last few years. From self-driving cars to advanced natural
          language processing, the capabilities of AI are expanding at an
          unprecedented rate. In this article, we will explore the key trends
          that are shaping the future of AI and what they mean for various
          industries.
        </p>
        <Image
          src={Image2}
          alt="image"
          className="w-[344.77px] h-[353.66px] mb-[33px] max-xs:h-[250px] custom:w-[730px] custom:h-[756px] custom:mb-[72px]"
        />
        <p className="font-georgia font-normal text-[16px] leading-[14.97px] -tracking-[2%] ml-[2.57px] mb-[11.23px]  custom:w-[730px] custom:text-[28px] custom:leading-[32px] custom:mb-[24px]">
          Key Trends
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px] text-[#281D1B]  ml-[2.57px] h-[187px] mb-[33px] max-xs:text-[13px] custom:w-[730px] custom:text-[17px] custom:leading-[28px] custom:h-[112px] custom:mb-[72px]">
          Artificial Intelligence (AI) has been a rapidly evolving field over
          the last few years. From self-driving cars to advanced natural
          language processing, the capabilities of AI are expanding at an
          unprecedented rate. In this article, we will explore the key trends
          that are shaping the future of AI and what they mean for various
          industries.
        </p>
        <Image
          src={Image3}
          alt="image"
          className="w-[344.77px] h-[362.08px] mb-[22.46px] max-xs:h-[250px] custom:w-[730px] custom:h-[774px] custom:mb-[48px]"
        />
        <Image
          src={Image4}
          alt="image"
          className="w-[344.77px] h-[362.08px] mb-[33px] max-xs:h-[250px] custom:w-[730px] custom:h-[774px] custom:mb-[72px]"
        />
        <p className="font-georgia font-normal text-[16px] leading-[14.97px] -tracking-[2%] ml-[2.57px] mb-[11.23px] custom:w-[730px] custom:text-[28px] custom:leading-[32px] custom:mb-[24px]">
          Key Trends
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px] text-[#281D1B]  ml-[2.57px] h-[187px] mb-[61px] max-xs:text-[13px]  custom:w-[730px] custom:text-[17px] custom:leading-[28px] custom:h-[112px] custom:mb-[72px]">
          Artificial Intelligence (AI) has been a rapidly evolving field over
          the last few years. From self-driving cars to advanced natural
          language processing, the capabilities of AI are expanding at an
          unprecedented rate. In this article, we will explore the key trends
          that are shaping the future of AI and what they mean for various
          industries.
        </p>

        {/* Related Articles */}
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[341.97px] h-[0.7px] bg-[#6E504933] mb-[7.48px] max-xs:w-[300px] custom:w-[1344px] custom:mb-[16px]"></div>
        <p className="font-georgia font-normal text-[16px] leading-[14.97px] -tracking-[2%] mb-[7.48px] text-start w-[341.97px] max-xs:w-[300px] custom:w-[1344px] custom:text-[28px] custom:leading-[32px] custom:mb-[16px]">
          Related Articles
        </p>

        <div className="flex flex-wrap gap-x-[11.23px] gap-y-[7.48px] w-full items-center justify-center custom:gap-x-[24px] custom:mb-[200px]">
          <div className="flex flex-col w-[165.37px] max-xs:w-[150px] custom:w-[432px] ">
            <Image
              src={Image5}
              alt="image"
              className="w-[165.37px] h-[105.26px] mb-[5.61px] max-xs:w-[150px] custom:w-[432px] custom:h-[225px] custom:mb-[12px]"
            />
            <p className="font-georgia font-normal text-[12px] leading-[14px] text-[#281D1B] mb-[8px] max-xs:text-[9px]   max-xs:leading-[10px] max-xs:mb-[6px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p
              className="font-inter font-medium text-[8px] leading-[7.48px] text-[#F72C00] mb-[4px] max-xs:mb-[2px]
            custom:text-[13px] custom:leading-[16px] custom:mb-[8px]"
            >
              AI, Robotics
            </p>
            <p className="font-inter font-normal text-[8px] leading-[7.48px] text-[#2E19149E] custom:text-[13px] custom:leading-[16px]">
              October 1, 2023
            </p>
          </div>
          <div className="flex flex-col w-[165.37px] max-xs:w-[150px]  custom:w-[432px]">
            <Image
              src={Image5}
              alt="image"
              className="w-[165.37px] h-[105.26px] mb-[5.61px] max-xs:w-[150px] custom:w-[432px] custom:h-[225px] custom:mb-[12px]"
            />
            <p className="font-georgia font-normal text-[12px] leading-[14px] text-[#281D1B] mb-[8px] max-xs:text-[9px]   max-xs:leading-[10px] max-xs:mb-[6px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p
              className="font-inter font-medium text-[8px] leading-[7.48px] text-[#F72C00] mb-[4px] max-xs:mb-[2px]
            custom:text-[13px] custom:leading-[16px] custom:mb-[8px]"
            >
              AI, Robotics
            </p>
            <p className="font-inter font-normal text-[8px] leading-[7.48px] text-[#2E19149E] custom:text-[13px] custom:leading-[16px]">
              October 1, 2023
            </p>
          </div>
          <div className="flex flex-col w-[165.37px] max-xs:w-[150px] custom:w-[432px]">
            <Image
              src={Image5}
              alt="image"
              className="w-[165.37px] h-[105.26px] mb-[5.61px] max-xs:w-[150px] custom:w-[432px] custom:h-[225px] custom:mb-[12px]"
            />
            <p className="font-georgia font-normal text-[12px] leading-[14px] text-[#281D1B] mb-[8px] max-xs:text-[9px]   max-xs:leading-[10px] max-xs:mb-[6px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p
              className="font-inter font-medium text-[8px] leading-[7.48px] text-[#F72C00] mb-[4px] max-xs:mb-[2px]
            custom:text-[13px] custom:leading-[16px] custom:mb-[8px]"
            >
              AI, Robotics
            </p>
            <p className="font-inter font-normal text-[8px] leading-[7.48px] text-[#2E19149E] custom:text-[13px] custom:leading-[16px]">
              October 1, 2023
            </p>
          </div>
          <div className="flex flex-col w-[165.37px] max-xs:w-[150px] custom:hidden">
            <Image
              src={Image5}
              alt="image"
              className="w-[165.37px] h-[105.26px] mb-[5.61px] max-xs:w-[150px]"
            />
            <p className="font-georgia font-normal text-[12px] leading-[14px] text-[#281D1B] mb-[8px] max-xs:text-[9px]   max-xs:leading-[10px] max-xs:mb-[6px] custom:text-[17px] custom:leading-[24px] custom:mb-[8px]">
              How Robotics is Transforming Manufacturing
            </p>
            <p className="font-inter font-medium text-[8px] leading-[7.48px] text-[#F72C00] mb-[4px] max-xs:mb-[2px]">
              AI, Robotics
            </p>
            <p className="font-inter font-normal text-[8px] leading-[7.48px] text-[#2E19149E]">
              October 1, 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FututreOfAi;
