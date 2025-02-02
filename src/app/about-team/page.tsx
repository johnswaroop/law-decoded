import React from "react";
import Image from "next/image";
import Logo from "@/assets/About-team/IconLogo.png";
import SuitPic from "@/assets/MentorPage/Second.png";
import AboutSection from "@/components/AboutSection";
import AboutSajan from "@/components/AboutSajan";

const pageText = [
  "Gain industry insights from experienced mentors.",
  "Expand your professional network.",
  "Gain industry insights from experienced mentors.",
  "Expand your professional network.",
  "Gain industry insights from experienced mentors.",
  "Expand your professional network.",
];

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center px-[3.5%]">
        <div className="w-[80%] h-[108px] mt-[72px] md-[65px] md:w-[550px] md:h-[150px] custom:mt-[117px]  custom:w-[1044px] custom:h-[286px]">
          <Image
            src={Logo}
            alt="image"
            className="object-contain w-full h-full"
          />
        </div>
        <p className="font-georgia font-normal text-[40px] leading-[48px] -tracking-[2%] mt-[16px] md:mt-[20px] md:text-[52px] md:leading-[64px] md:-tracking-[2%] custom:text-[100px] custom:leading-[120px] custom:mt-[40px]">
          {" "}
          Law Decoded
        </p>
        <div className="w-full flex flex-col items-center md:py-[56px] py-[38px] bg-[#FBFCFE] mt-[21px] custom:mt-[40px] custom:py-[96px]">
          {" "}
          <p className=" font-georgia font-normal text-[28px] leading-[34px] -tracking-[2%] md:text-[25px] md:leading-[27px] custom:text-[48px] custom:leading-[52px] ">
            Making law simpler
          </p>
          <p className="w-[86%] font-outfit font-normal text-[16px] leading-[20px] text-justify mt-[28px] md:w-[58%] md:text-[12px] md:leading-[16px] custom:text-[24px] custom:leading-[32px] custom:mt-[44px]">
            At its core, &quot;Law Decoded&quot; is an initiative designed for
            raising legal awareness by making obscure legal concepts accessible
            to the layperson. We strive to break down intricate legal jargon
            into understandable language, which is essential for empowering
            individuals who may feel intimidated by the law. This accessibility
            is vital in a society where legal literacy can significantly impact
            one&quot;s ability to navigate daily life, from understanding
            contracts to knowing rights in various legal situations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-[#FBFCFE] md:mt-[21px] md:justify-between md:px-[22px] md:py-[22px] custom:mt-[40px]   custom:px-[46px] mt-[21px] py-[20px] max-md:mb-[32px]">
          <div className="md:w-[53%] md:pr-[22px] flex flex-col items-center">
            {" "}
            <p className=" font-georgia font-normal text-[28px] leading-[34px] -tracking-[2%] custom:text-[48px] custom:leading-[52px] ">
              Our Journey{" "}
            </p>
            <Image
              src={SuitPic}
              alt="image"
              className="w-[180px] h-[180px] mt-[40px] md:hidden"
            />
            <p className="w-[86%] font-inter font-normal text-[16px] leading-[20px] text-justify mt-[28px] md:text-[12px] md:leading-[16px] custom:text-[24px] custom:leading-[32px] custom:mt-[36px] ">
              The idea to push legal awareness and create specialised content
              stemmed from the pursuit of using technology to bridge gaps that
              exist within the legal world. Whether its video explainers, our
              unique mentorship programme or other initiatives, our journey is
              about increasingly using technology to make law accessible to
              everyone.
              <br />
              <br />
              We started with a small team of dedicated legal researchers,
              innovative production team and creative heads who could generate
              legal content that has not been created before. We are a
              non-profit initiative and we tie up with Universities and
              educational institutes across India to reach out to students and
              aspiring lawyers.
            </p>
          </div>
          <Image
            src={SuitPic}
            alt="image"
            className="w-[208px] h-[180px] max-md:hidden my-auto custom:w-[394px] custom:h-[343px]"
          />
        </div>

        <AboutSection />

        <p className="mt-[40px] w-[86%] md:w-full text-start font-georgia font-normal text-[28px] leading-[52px] -tracking-[1%] md:text-[25px] md:leading-[28px] custom:text-[48px] custom:leading-[52px] ">
          {" "}
          Program Benefits
        </p>
        <div className="w-[86%] mt-[24px] md:w-full  flex flex-wrap gap-x-[20px] gap-y-[24px] justify-center mb-[60px] md:gap-x-[12.66px] md:gap-y-[21.1px] custom:mt-[40px] custom:gap-x-[24px] custom:gap-y-[40px]">
          {pageText.map((text) => (
            <BoxCard key={text} text={text} />
          ))}
        </div>
        <AboutSajan />
      </div>
    </>
  );
};

export default page;

const BoxCard = ({ text }: { text: string }) => {
  return (
    <>
      <div className="w-[160px] h-[120px] bg-[#7E352517] flex flex-col px-[15px] md:w-[227px] md:h-[135px] md:px-[16px] rounded-[7.5px] md:rounded-[8.5px] custom:w-[432px] custom:h-[256px] custom:px-[32px]">
        <div className="w-[24px] h-[24px] rounded-full flex justify-center items-center bg-[#711400] mt-[14.99px] md:mt-[16px] md:w-[34px] md:h-[34px] custom:mt-[32px] custom:w-[64px] custom:h-[64px]">
          <p className="text-[#EFEAEA] font-inter font-semibold text-[12px] leading-[16px] -tracking-[0.5%] md:text-[16.7px] md:leading-[22px] custom:text-[32px] custom:leading-[42px]">
            1
          </p>
        </div>
        <p className="mt-[11.24px] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5%] text-[#281D1B] md:mt-[12.66px] md:text-[12.66px] md:leading-[16.8px] custom:mt-[32px] custom:text-[24px] custom:leading-[32px]">
          {text}
        </p>
      </div>
    </>
  );
};
