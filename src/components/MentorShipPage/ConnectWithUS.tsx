import React from "react";
import Image from "next/image";
import PersonImage from "@/assets/MentorPage/MentorPage.png";

const ConnectWithUS = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <p className="mt-[72px] mb-[16px] font-georgia font-normal text-[40px] leading-[48px] -tracking-[2%] text-center text-[#1B2128] custom:mt-[121.25px] custom:mb-[40px] custom:text-[100px] custom:leading-[120px] custom:-tracking-[2%]">
          Connect with Mentors to Advance Your Legal Journey
        </p>
        <Image
          src={PersonImage}
          alt="image"
          className="w-[342px] h-[179.45px] mb-[114.48px] custom:w-[1149px] custom:h-[574.5px] custom:mb-[146px]"
        />
        {/* First  box */}
        <div className="flex flex-col custom:flex-row custom:w-[1344px] custom:h-[332px]  custom:items-start custom:justify-between custom:mb-[250px]">
          {" "}
          <p className="font-georgia font-normal text-[28px] leading-[33.41px] -tracking-[2%] text-[#1B2128] mb-[24px] ml-[24px] text-start custom:text-[48px] custom:leading-[52px] custom:m-0 ">
            What is the Mentorship Programme?
          </p>
          <div className="flex justify-start w-full px-[24px] mb-[114.48px] custom:w-[624px] custom:p-0">
            <p className=" font-outfit font-normal text-[16px] leading-[20.56px] text-[#1B2128] w-[255px] custom:text-[24px] custom:leading-[32px] custom:w-[624px] custom:text-justify">
              Gain invaluable insights, network with professionals, and receive
              personalized guidance to excel in your legal career. Gain
              invaluable insights, network with professionals, and receive
              personalized guidance to excel in your legal career.
              <br className="" /> <br className="" /> Gain invaluable insights,
              network with professionals, and receive personalized guidance to
              excel in your legal career.
            </p>
          </div>
        </div>

        {/* Secong Box */}
        <div className="flex flex-col mb-[114.48px] custom:flex-row-reverse  custom:w-[1344px] custom:h-[288px]  custom:items-start custom:justify-between custom:mb-[146px]">
          {" "}
          <p className="font-georgia font-normal text-[28px] leading-[33.41px] -tracking-[2%] text-[#1B2128] mb-[24px] mr-[24px] text-end custom:text-[48px] custom:leading-[52px] custom:m-0">
            Why Choose this
            <br className="max-md:hidden" /> Programme?
          </p>
          <div className="flex justify-end w-full px-[24px]  custom:w-[624px] custom:h-full custom:p-0">
            <p className=" font-outfit font-normal text-[16px] leading-[20.56px] text-[#1B2128] w-[255px]  custom:text-[24px] custom:leading-[32px] custom:w-[624px] custom:text-justify custom:h-full">
              Gain invaluable insights, network with professionals, and receive
              personalized guidance to excel in your legal career. Gain
              invaluable insights, network with professionals, and receive
              personalized guidance to excel in your legal career.
              <br className="" /> <br className="" /> Gain invaluable insights,
              network with professionals, and receive personalized guidance to
              excel in your legal career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWithUS;
