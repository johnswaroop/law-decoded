import React from "react";
import Image from "next/image";
import Logo from "@/assets/About-team/IconLogo.png";
import SuitPic from "@/assets/MentorPage/Second.png";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import AboutSanjay from "@/components/AboutSanjay";

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
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] h-[108px] mt-[72px]">
          <Image
            src={Logo}
            alt="image"
            className="object-contain w-full h-full"
          />
        </div>
        <p className="font-georgia font-normal text-[40px] leading-[48px] -tracking-[2%] mt-[16px] ">
          {" "}
          Law Decoded
        </p>
        <p className="mt-[38px] font-georgia font-normal text-[28px] leading-[34px] -tracking-[2%]">
          Introduction
        </p>
        <p className="w-[86%] font-inter font-normal text-[16px] leading-[20px] text-justify mt-[28px]">
          In the vibrant corridors of India&apos;s legal community, Sajan
          Poovayya&apos;s name is synonymous with immense respect. Today, he is
          regarded as one of the nation&apos;s most esteemed Senior Advocates,
          but his path to this esteemed role is a story rich with inspiration,
          dedication, and an unwavering commitment to justice. Sajan&apos;s
          journey began in Bangalore, where he was raised under the guidance of
          his father, a seasoned trial lawyer.
          <br />
          <br />
          The courtroom was a stage for his father&apos;s passionate advocacy,
          and young Sajan often quietly observed, absorbing the intricacies of
          legal conflicts. Initially, however, his aspirations lay far from the
          legal arena; he dreamed of becoming a neurosurgeon, fascinated by the
          complexities of the human brain. Yet, destiny had a different course
          in mind.
        </p>
        <p className="mt-[38px] font-georgia font-normal text-[28px] leading-[34px] -tracking-[2%]">
          Why Legacy and Journey
        </p>
        <Image
          src={SuitPic}
          alt="image"
          className="w-[180px] h-[180px] mt-[40px]"
        />
        <p className="w-[86%] font-inter font-normal text-[16px] leading-[20px] text-justify mt-[28px] mb-[32px]">
          One pivotal day, his father saw the potential in him and proposed an
          alternative path. He encouraged Sajan to attend the National Law
          School of India University (NLSIU) and pursue a legal career.
          Intrigued and inspired by witnessing his father&apos;s courtroom
          endeavors throughout his childhood, Sajan agreed. NLSIU marked a
          transformative phase in Sajan&apos;s life.
          <br />
          <br />
          The rigorous academic setting, paired with stimulating intellectual
          discussions, sharpened his legal acumen. His time there went beyond
          merely learning the law; it shaped his worldview and instilled a
          profound sense of responsibility towards both society and the legal
          profession.
        </p>
        <AboutSection />

        <p className="mt-[40px] w-[86%] text-start font-georgia font-normal text-[28px] leading-[52px] -tracking-[1%]">
          {" "}
          Program Benefits
        </p>
        <div className="w-[86%] mt-[24px]  flex flex-wrap gap-x-[20px] gap-y-[24px] justify-center mb-[60px]">
          {pageText.map((text) => (
            <BoxCard key={text} text={text} />
          ))}
        </div>
        <AboutSanjay />
        <Footer />
      </div>
    </>
  );
};

export default page;

const BoxCard = ({ text }: { text: string }) => {
  return (
    <>
      <div className="w-[160px] h-[120px] bg-[#7E352517] flex flex-col px-[15px]">
        <div className="w-[24px] h-[24px] rounded flex justify-center items-center bg-[#711400] mt-[14.99px]">
          <p className="text-[#EFEAEA] font-inter font-semibold text-[12px] leading-[16px] -tracking-[0.5%]">
            1
          </p>
        </div>
        <p className="mt-[11.24px] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5%] text-[#281D1B]">
          {text}
        </p>
      </div>
    </>
  );
};
