import React from "react";
import Image from "next/image";
import Pic from "@/assets/MentorPage/Second.png";
import ProfilePic from "@/assets/MentorPage/MentorPage.png";
import AboutSajan from "@/components/AboutSajan";
import LawyerPic from "@/assets/EfficientModel/lawyerPic.png";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16 lg:mt-20 mid:mt-12 sm:mt-8 xs:mt-6 mb-10">
        {/* Hero Section */}
        <div className="w-full max-w-[1000px] px-4 sm:px-6 flex flex-col items-center">
          <Image
            src={LawyerPic}
            alt="Hero image"
            className="w-full h-[500px] mid:h-[400px] sm:h-[250px] xs:h-[200px] rounded-[20px] object-cover object-[center_90%]"
          />

          {/* Name */}
          <h1 className="font-georgia font-normal text-[32px] xs:text-[36px] sm:text-[42px] mid:text-[52px] lg:text-[72px] leading-[1.2] -tracking-[0.02em] mt-6 sm:mt-8">
            Sajan Poovayya
          </h1>

          {/* Introduction Section */}
          <div className="w-full flex flex-col items-center mt-12 sm:mt-16">
            <h2 className="font-georgia font-bold text-[24px] xs:text-[24px] sm:text-[28px] mid:text-[32px] lg:text-[36px] leading-[1.2] -tracking-[0.02em]">
              Introduction
            </h2>

            <p className="font-inter font-normal text-[14px] xs:text-[14px] sm:text-[15px] mid:text-[16px] lg:text-[18px] leading-[1.6] text-justify text-[#1B2128] w-full max-w-[800px] mt-6">
              In the vibrant corridors of India&apos;s legal community, Sajan
              Poovayya&apos;s name is synonymous with immense respect. Today, he
              is regarded as one of the nation&apos;s most esteemed Senior
              Advocates, but his path to this esteemed role is a story rich with
              inspiration, dedication, and an unwavering commitment to justice.
              Sajan&apos;s journey began in Bangalore, where he was raised under
              the guidance of his father, a seasoned trial lawyer.
              <br />
              <br />
              The courtroom was a stage for his father&apos;s passionate
              advocacy, and young Sajan often quietly observed, absorbing the
              intricacies of legal conflicts. Initially, however, his
              aspirations lay far from the legal arena; he dreamed of becoming a
              neurosurgeon, fascinated by the complexities of the human brain.
              Yet, destiny had a different course in mind.
            </p>
          </div>

          {/* Legacy and Journey Section */}
          <div className="w-full flex flex-col mid:flex-row mt-16 sm:mt-20 justify-between gap-8 mid:gap-12">
            <div className="w-full mid:w-[60%] flex flex-col">
              <h2 className="font-georgia font-bold text-[24px] xs:text-[24px] sm:text-[28px] mid:text-[32px] lg:text-[36px] leading-[1.2] -tracking-[0.02em] text-[#1B2128] text-center mid:text-left">
                Legacy and Journey
              </h2>

              <div className="mid:hidden my-6">
                <Image
                  src={Pic}
                  alt="Legacy image"
                  className="w-[50%] h-[160px] object-cover mx-auto"
                />
              </div>

              <p className="font-inter font-normal text-[14px] xs:text-[14px] sm:text-[15px] mid:text-[16px] lg:text-[18px] leading-[1.6] text-justify text-[#1B2128] mt-6">
                One pivotal day, his father saw the potential in him and
                proposed an alternative path. He encouraged Sajan to attend the
                National Law School of India University (NLSIU) and pursue a
                legal career. Intrigued and inspired by witnessing his
                father&apos;s courtroom endeavors throughout his childhood,
                Sajan agreed. NLSIU marked a transformative phase in
                Sajan&apos;s life.
                <br />
                <br />
                The rigorous academic setting, paired with stimulating
                intellectual discussions, sharpened his legal acumen. His time
                there went beyond merely learning the law; it shaped his
                worldview and instilled a profound sense of responsibility
                towards both society and the legal profession.
              </p>
            </div>

            <div className="hidden mid:block w-[35%] my-auto">
              <Image
                src={Pic}
                alt="Legacy image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Innovations Section */}
          <div className="w-full flex flex-col items-center mt-16 sm:mt-20">
            <h2 className="font-georgia font-bold text-[24px] xs:text-[24px] sm:text-[28px] mid:text-[32px] lg:text-[36px] leading-[1.2] -tracking-[0.02em] text-center">
              Innovations in Legal Practice
            </h2>

            <p className="font-inter font-normal text-[14px] xs:text-[14px] sm:text-[15px] mid:text-[16px] lg:text-[18px] leading-[1.6] text-justify text-[#1B2128] w-full max-w-[800px] mt-6">
              Upon graduating in 1996, Sajan made a bold decision. Unlike many
              of his classmates who joined established law firms, he opted to
              forge his own path and established Poovayya & Co. Under his
              leadership, the firm blossomed from a nascent entity into a
              reputable name, adept at handling complex legal cases and earning
              clients&apos; trust nationwide. However, Sajan&apos;s aspirations
              reached beyond his firm. In 2012, he was appointed as a Senior
              Advocate in the Supreme Court of India. He also served as the
              Additional Advocate General for Karnataka. This achievement was a
              moment of immense pride, not only for Sajan but also for all who
              had witnessed his remarkable ascent in the legal field.
            </p>
          </div>

          <Image
            src={ProfilePic}
            alt="Profile image"
            className="w-full max-w-[800px] h-auto mt-16 sm:mt-20"
          />

          <div className="w-full mt-16">
            <AboutSajan />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
