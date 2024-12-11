import React from "react";
import Image from "next/image";
import Pic from "@/assets/MentorPage/Second.png";
import EfficientModel from "@/components/EfficientModel";
import Charger from "@/assets/MentorPage/Chsrging.svg";
import Wifi from "@/assets/MentorPage/Wifi.svg";
import Circle from "@/assets/MentorPage/Circle.svg";
import Wrench from "@/assets/MentorPage/Wrench.svg";
import Pin from "@/assets/MentorPage/Round.svg";
import Footer from "@/components/Footer";

// Desktop First build
const page = () => {
  return (
    <>
      <div className="mt-[134px] flex flex-col items-center">
        <div className="w-[1344px] h-[574px] rounded-[23.94px] border-[1.28px] border-[#00000000] bg-[#00000033]"></div>
        <p className="font-georgia font-normal text-[100px] leading-[120px] -tracking-[2%] mt-[40px]">
          Sajan Poovayya
        </p>
        <p className="font-domine font-bold text-[48px] leading-[52px] -tracking-[2%] mt-[147.5px]">
          Introduction
        </p>
        <p className="w-[857px] font-outfit font-normal text-[24px] leading-[32px] text-justify text-[#1B2128] mt-[44px]">
          Gain invaluable insights, network with professionals, and receive
          personalized guidance to excel in your legal career.
          <br /> Gain invaluable insights, network with professionals, and
          receive personalized guidance to excel in your legal career.
          <br />
          <br /> Gain invaluable insights, network with professionals, and
          receive personalized guidance to excel in your legal career.
        </p>

        {/* text and image */}
        <div className="flex mt-[193.5px] h-[420px] px-[90px] justify-between gap-[234px]">
          {/* text */}
          <div className="h-full flex flex-col w-[631px]">
            <p className="font-domine font-bold text-[48px] leading-[52px] -tracking-[2%] text-[#1B2128] text-left mt-[50px]">
              Legacy and Journey
            </p>
            <p className="mt-[36px]  font-outfit font-normal text-[24px] leading-[32px] text-justify text-[#1B2128]">
              Gain invaluable insights, network with professionals, and receive
              personalized guidance to excel in your legal career. Gain
              invaluable insights, network with professionals, and receive
              personalized guidance to excel in your legal career.
              <br />
              <br /> Gain invaluable insights, network with professionals, and
              receive personalized guidance to excel in your legal career.
            </p>
          </div>

          {/* image */}
          <div className="h-[420px] flex items-center">
            <Image
              src={Pic}
              alt="image"
              className="w-[394.99px] h-[343px] object-fit"
            />
          </div>
        </div>

        {/* Innovation in legal practice */}
        <p className="mt-[181.5px] font-domine font-bold text-[48px] leading-[52px] -tracking-[2%]">
          Innovations in Legal Practice
        </p>
        <p className="w-[857px] font-outfit font-normal text-[24px] leading-[32px] text-justify text-[#1B2128] mt-[36px]">
          Gain invaluable insights, network with professionals, and receive
          personalized guidance to excel in your legal career.
          <br /> Gain invaluable insights, network with professionals, and
          receive personalized guidance to excel in your legal career.
          <br />
          <br /> Gain invaluable insights, network with professionals, and
          receive personalized guidance to excel in your legal career.
        </p>

        {/* Three Images */}
        <div className="mt-[90px] flex justify-center gap-[40px] mb-[120px]">
          <Image
            src={Pic}
            alt="image"
            className="w-[394.99px] h-[343px] object-fit"
          />
          <Image
            src={Pic}
            alt="image"
            className="w-[394.99px] h-[343px] object-fit"
          />
          <Image
            src={Pic}
            alt="image"
            className="w-[394.99px] h-[343px] object-fill"
          />
        </div>

        <EfficientModel />

        {/* Why choose us */}

        <div>
          {" "}
          <p className="mt-[64px] ml-[24px] mr-[24px] mb-[24px] font-georgia font-normal text-[48px] leading-[52px] -tracking-[-1%] text-[#281D1B] custom:mt-[64px] custom:w-[1344px] custom:text-start custom:mx-auto custom:mb-[40px]">
            Why Choose Us
          </p>
          {/* brown boxes */}
          <div className="flex flex-wrap gap-x-[21.6px] gap-y-[24px] px-[24px] max-xs:gap-x-[10px] items-center justify-center custom:gap-x-[24px] custom:gap-y-[24px] mb-[96px] custom:mb-[96px]">
            {/* First */}
            <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px] custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px]">
              <Image
                src={Charger}
                alt="image"
                className=" w-[27.48px] h-[14.99px] custom:w-[58px] custom:h-[32px]"
              />
              <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px] custom:w-[330px]  ">
                Gain industry insights from experienced mentors.
              </p>
            </div>
            {/* Second */}
            <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px]">
              <Image
                src={Wifi}
                alt="image"
                className=" w-[29.98px] h-[29.98px] custom:w-[64px] custom:h-[64px]"
              />
              <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px] custom:w-[330px] ">
                Gain industry insights from experienced mentors.
              </p>
            </div>
            {/* Third*/}
            <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px]">
              <Image
                src={Circle}
                alt="image"
                className=" w-[29.98px] h-[29.98px] custom:w-[64px] custom:h-[64px]"
              />
              <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px] custom:w-[330px] ">
                Gain industry insights from experienced mentors.
              </p>
            </div>
            {/* Forth */}
            <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px]">
              <Image
                src={Wrench}
                alt="image"
                className=" w-[29.98px] h-[29.98px] custom:w-[51px] custom:h-[51px]"
              />
              <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px] custom:w-[330px] ">
                Gain industry insights from experienced mentors.
              </p>
            </div>
            {/* Fifth */}
            <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px]">
              <Image
                src={Wrench}
                alt="image"
                className="w-[29.98px] h-[29.98px] custom:w-[51px] custom:h-[51px]"
              />
              <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px] custom:w-[330px] ">
                Gain industry insights from experienced mentors.
              </p>
            </div>
            {/* Sixth */}
            <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px]">
              <Image
                src={Pin}
                alt="image"
                className=" w-[29.98px] h-[29.98px] custom:w-[64px] custom:h-[64px]"
              />
              <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px] custom:w-[330px] ">
                Gain industry insights from experienced mentors.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
