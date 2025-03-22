import React from "react";
import Image from "next/image";
import Logo from "@/assets/About-team/IconLogo.png";
import SuitPic from "@/assets/MentorPage/Second.png";
import AboutSajan from "@/components/AboutSajan";
import AboutSection from "@/components/AboutSection";

const pageText = [
  { id: 1, text: "Gain industry insights from experienced mentors." },
  { id: 2, text: "Expand your professional network." },
  { id: 3, text: "Access exclusive legal resources and materials." },
  { id: 4, text: "Participate in interactive learning sessions." },
  { id: 5, text: "Get personalized career guidance." },
  { id: 6, text: "Join a community of legal professionals." },
];

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16 lg:mt-20 mid:mt-12 sm:mt-8 xs:mt-6 mb-10">
        <div className="w-full px-4 sm:px-6 flex flex-col items-center">
          <div className="w-full max-w-[800px]">
            <Image
              src={Logo}
              alt="Law Decoded Logo"
              className="object-contain w-full h-auto"
            />
          </div>

          <h1 className="max-w-[1000px] font-georgia font-normal text-[32px] xs:text-[36px] sm:text-[42px] mid:text-[52px] lg:text-[72px] leading-[1.2] -tracking-[0.02em] mt-6 sm:mt-8">
            Law Decoded
          </h1>

          <div className=" max-w-[1000px] w-full flex flex-col items-center mt-12 sm:mt-16 py-12 sm:py-14 lg:py-16">
            <h2 className="font-georgia font-bold text-[24px] xs:text-[24px] sm:text-[28px] mid:text-[32px] lg:text-[36px] leading-[1.2] -tracking-[0.02em] text-[#1B2128] text-center mid:text-left">
              Making law simpler
            </h2>

            <p className="font-inter font-normal text-[14px] xs:text-[14px] sm:text-[15px] mid:text-[16px] lg:text-[18px] leading-[1.6] text-justify text-[#1B2128] w-full max-w-[800px] mt-6">
              At its core, &quot;Law Decoded&quot; is an initiative designed for
              raising legal awareness by making obscure legal concepts
              accessible to the layperson. We strive to break down intricate
              legal jargon into understandable language, which is essential for
              empowering individuals who may feel intimidated by the law. This
              accessibility is vital in a society where legal literacy can
              significantly impact one&quot;s ability to navigate daily life,
              from understanding contracts to knowing rights in various legal
              situations.
            </p>
          </div>

          <div className="mb-16 max-w-[1000px] w-full flex flex-col mid:flex-row mt-16 sm:mt-20 justify-between gap-8 mid:gap-12">
            <div className="w-full mid:w-[60%] flex flex-col">
              <h2 className="font-georgia font-bold text-[24px] xs:text-[24px] sm:text-[28px] mid:text-[32px] lg:text-[36px] leading-[1.2] -tracking-[0.02em] text-[#1B2128] text-center mid:text-left">
                Our Journey
              </h2>

              <div className="mid:hidden my-6">
                <Image
                  src={SuitPic}
                  alt="Journey image"
                  className="w-[50%] h-[160px] object-cover mx-auto"
                />
              </div>

              <p className="font-inter font-normal text-[14px] xs:text-[14px] sm:text-[15px] mid:text-[16px] lg:text-[18px] leading-[1.6] text-justify text-[#1B2128] mt-6">
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

            <div className="hidden mid:block w-[35%] my-auto">
              <Image
                src={SuitPic}
                alt="Journey image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <AboutSection />

          <div className="w-full mt-16 sm:mt-20 max-w-[1000px]">
            <h2 className="font-georgia font-bold text-[24px] xs:text-[24px] sm:text-[28px] mid:text-[32px] lg:text-[36px] leading-[1.2] -tracking-[0.02em] text-[#1B2128] text-center mid:text-left">
              Program Benefits
            </h2>

            <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageText.map((item) => (
                <BoxCard key={item.id} text={item.text} number={item.id} />
              ))}
            </div>
          </div>

          <div className="w-full mt-16 max-w-[1000px]">
            <AboutSajan />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

const BoxCard = ({ text, number }: { text: string; number: number }) => {
  return (
    <div className="bg-[#7E352517] rounded-lg p-6">
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#711400]">
        <p className="text-[#EFEAEA] font-inter font-normal text-[14px] xs:text-[14px] sm:text-[15px] mid:text-[16px] lg:text-[18px]">
          {number}
        </p>
      </div>
      <p className="font-inter font-normal text-[14px] xs:text-[14px] sm:text-[15px] mid:text-[16px] lg:text-[18px] leading-[1.6] text-[#281D1B] mt-4">
        {text}
      </p>
    </div>
  );
};
