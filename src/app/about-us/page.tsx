import React from "react";
import Image from "next/image";
import Pic from "@/assets/MentorPage/Second.png";
import ProfilePic from "@/assets/MentorPage/MentorPage.png";
import AboutSajan from "@/components/AboutSajan";
import LawyerPic from '@/assets/EfficientModel/lawyerPic.png'

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-[92px] lg:mt-[92px] mid:mt-[50px] sm:mt-[24px] xs:mt-[24px] mb-14">
        {/* Hero Section */}
        <Image
          src={LawyerPic}
          alt="Hero image"
          className="w-[92%] xs:w-[85%] h-[700px] mid:h-[600px] sm:h-[303px] xs:h-[303px] rounded-[23.94px] object-cover object-[center_90%]"
        />

        {/* Name */}
        <h1 className="font-georgia font-normal text-[40px] xs:text-[40px] sm:text-[52px] mid:text-[72px] lg:text-[100px] leading-[48px] xs:leading-[48px] sm:leading-[63px] mid:leading-[86px] lg:leading-[120px] -tracking-[0.02em] mt-[16px] sm:mt-[20px] mid:mt-[30px] lg:mt-[40px]">
          Sajan Poovayya
        </h1>

        {/* Introduction Section */}
        <h2 className="font-domine font-bold text-[28px] xs:text-[28px] sm:text-[25px] mid:text-[36px] lg:text-[48px] leading-[34px] xs:leading-[34px] sm:leading-[27px] mid:leading-[40px] lg:leading-[52px] -tracking-[0.02em] mt-[38px] sm:mt-[64px] mid:mt-[100px] lg:mt-[147.5px]">
          Introduction
        </h2>

        <p className="font-outfit font-normal text-[16px] xs:text-[16px] sm:text-[12.7px] mid:text-[18px] lg:text-[24px] leading-[20px] xs:leading-[20px] sm:leading-[16px] mid:leading-[24px] lg:leading-[32px] text-justify text-[#1B2128] w-[88%] mid:w-[75%] lg:w-[58%] mt-[24px] sm:mt-[20px] mid:mt-[32px] lg:mt-[44px]">
          In the vibrant corridors of India&apos;s legal community, Sajan
          Poovayya&apos;s name is synonymous with immense respect. Today, he is
          regarded as one of the nation&apos;s most esteemed Senior Advocates,
          but his path to this esteemed role is a story rich with inspiration,
          dedication, and an unwavering commitment to justice. Sajan&apos;s
          journey began in Bangalore, where he was raised under the guidance of
          his father, a seasoned trial lawyer.
          <br /><br />
          The courtroom was a stage for his father&apos;s passionate
          advocacy, and young Sajan often quietly observed, absorbing the
          intricacies of legal conflicts. Initially, however, his aspirations
          lay far from the legal arena; he dreamed of becoming a neurosurgeon,
          fascinated by the complexities of the human brain. Yet, destiny had a
          different course in mind.
        </p>

        {/* Legacy and Journey Section */}
        <div className="flex flex-col mid:flex-row w-[88%] mid:w-[92%] mt-[64px] mid:mt-[120px] lg:mt-[193.5px] px-[3%] justify-between mb-[68px] mid:mb-[80px] lg:mb-[92px] gap-8 mid:gap-12">
          <div className="w-full mid:w-[50%] flex flex-col">
            <h2 className="font-domine font-bold text-[28px] xs:text-[28px] sm:text-[25px] mid:text-[36px] lg:text-[48px] leading-[34px] xs:leading-[34px] sm:leading-[27px] mid:leading-[40px] lg:leading-[52px] -tracking-[0.02em] text-[#1B2128] text-center mid:text-left">
              Legacy and Journey
            </h2>

            <div className="mid:hidden my-[40px]">
              <Image
                src={Pic}
                alt="Legacy image"
                className="w-[50%] h-[180px] object-cover mx-auto"
              />
            </div>

            <p className="font-outfit font-normal text-[16px] xs:text-[16px] sm:text-[12.7px] mid:text-[18px] lg:text-[24px] leading-[20px] xs:leading-[20px] sm:leading-[16px] mid:leading-[24px] lg:leading-[32px] text-justify text-[#1B2128] mt-[20px] mid:mt-[36px]">
              One pivotal day, his father saw the potential in him and proposed
              an alternative path. He encouraged Sajan to attend the National
              Law School of India University (NLSIU) and pursue a legal career.
              Intrigued and inspired by witnessing his father&apos;s courtroom
              endeavors throughout his childhood, Sajan agreed. NLSIU marked a
              transformative phase in Sajan&apos;s life.
              <br /><br />
              The rigorous academic setting, paired with stimulating
              intellectual discussions, sharpened his legal acumen. His time
              there went beyond merely learning the law; it shaped his worldview
              and instilled a profound sense of responsibility towards both
              society and the legal profession.
            </p>
          </div>

          <div className="hidden mid:block w-[30%] my-auto">
            <Image
              src={Pic}
              alt="Legacy image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Innovations Section */}
        <h2 className="font-domine font-bold text-[28px] xs:text-[28px] sm:text-[25px] mid:text-[36px] lg:text-[48px] leading-[34px] xs:leading-[34px] sm:leading-[27px] mid:leading-[40px] lg:leading-[52px] -tracking-[0.02em] w-[88%] mid:w-auto text-center">
          Innovations in Legal Practice
        </h2>

        <p className="font-outfit font-normal text-[16px] xs:text-[16px] sm:text-[12.7px] mid:text-[18px] lg:text-[24px] leading-[20px] xs:leading-[20px] sm:leading-[16px] mid:leading-[24px] lg:leading-[32px] text-justify text-[#1B2128] w-[88%] mid:w-[75%] lg:w-[64%] mt-[24px] sm:mt-[20px] mid:mt-[28px] lg:mt-[36px]">
          Upon graduating in 1996, Sajan made a bold decision. Unlike many of
          his classmates who joined established law firms, he opted to forge his
          own path and established Poovayya & Co. Under his leadership, the firm
          blossomed from a nascent entity into a reputable name, adept at
          handling complex legal cases and earning clients&apos; trust
          nationwide. However, Sajan&apos;s aspirations reached beyond his firm.
          In 2012, he was appointed as a Senior Advocate in the Supreme Court of
          India. He also served as the Additional Advocate General for Karnataka.
          This achievement was a moment of immense pride, not only for Sajan but
          also for all who had witnessed his remarkable ascent in the legal
          field.
        </p>

        <Image
          src={ProfilePic}
          alt="Profile image"
          className="w-[88%] mid:w-[60%] lg:w-[45%] h-auto mt-[48px] mid:mt-[70px] lg:mt-[90px] mb-[21px] mid:mb-[30px] lg:mb-[40px]"
        />

        <AboutSajan />
      </div>
    </>
  );
};

export default Page;
