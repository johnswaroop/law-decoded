import React from "react";
import Image from "next/image";
import Pic from "@/assets/MentorPage/Second.png";
// import EfficientModel from "@/components/EfficientModel";
// import Charger from "@/assets/MentorPage/Chsrging.svg";
// import Wifi from "@/assets/MentorPage/Wifi.svg";
// import Circle from "@/assets/MentorPage/Circle.svg";
// import Wrench from "@/assets/MentorPage/Wrench.svg";
// import Pin from "@/assets/MentorPage/Round.svg";
import ProfilePic from "@/assets/MentorPage/MentorPage.png";
import Footer from "@/components/Footer";
import AboutSanjay from "@/components/AboutSanjay";

// Desktop First build
const page = () => {
  return (
    <>
      <div className="mt-[134px] flex flex-col items-center max-md:mt-[34px] max-sm:mt-[72px]">
        <div className="w-[92%] max-sm:w-[85%] h-[574px] rounded-[23.94px] border-[1.28px] border-[#00000000] bg-[#00000033] max-md:h-[303px]"></div>
        <p className="font-georgia font-normal text-[100px] leading-[120px] -tracking-[2%] mt-[40px] max-md:text-[52px] max-md:leading-[63px] max-md:-tracking-[2%] max-md:mt-[20px] max-sm:mt-[16px] max-sm:text-[40px] max-sm:leading-[48px] ">
          Sajan Poovayya
        </p>
        <p className="font-domine font-bold text-[48px] leading-[52px] -tracking-[2%] mt-[147.5px] max-md:mt-[64px] max-md:text-[25px] max-md:leading-[27px] max-md:-tracking-[2%]  max-sm:mt-[38px] max-sm:text-[28px] max-sm:leading-[34px]">
          Introduction
        </p>
        <p className="w-[58%] font-outfit font-normal text-[24px] leading-[32px] text-justify text-[#1B2128] mt-[44px] max-md:mt-[20px] max-md:text-[12.7px] max-md:leading-[16px] max-md:-tracking-[2%] max-sm:mt-[24px] max-sm:text-[16px] max-sm:leading-[20px] max-sm:w-[88%]">
          In the vibrant corridors of India&apos;s legal community, Sajan
          Poovayya&apos;s name is synonymous with immense respect. Today, he is
          regarded as one of the nation&apos;s most esteemed Senior Advocates,
          but his path to this esteemed role is a story rich with inspiration,
          dedication, and an unwavering commitment to justice. Sajan&apos;s
          journey began in Bangalore, where he was raised under the guidance of
          his father, a seasoned trial lawyer.
          <br />
          <br /> The courtroom was a stage for his father&apos;s passionate
          advocacy, and young Sajan often quietly observed, absorbing the
          intricacies of legal conflicts. Initially, however, his aspirations
          lay far from the legal arena; he dreamed of becoming a neurosurgeon,
          fascinated by the complexities of the human brain. Yet, destiny had a
          different course in mind.
        </p>

        {/* text and image */}
        <div className="flex mt-[193.5px] w-[92%] px-[3%] justify-between  mb-[92px] max-md:mt-[64px] max-md:mb-[68px] max-sm:w-[88%]">
          {/* text */}
          <div className="h-full flex flex-col w-[50%]  max-sm:w-full">
            <p className="font-domine font-bold text-[48px] leading-[52px] -tracking-[2%] text-[#1B2128] text-left mt-[50px]  max-md:mt-[26px]  max-md:text-[25px] max-md:leading-[27px] max-md:-tracking-[2%] max-sm:text-center">
              Legacy and Journey
            </p>
            <div className=" w-full h-full  sm:hidden my-[40px]">
              <Image
                src={Pic}
                alt="image"
                className="w-[50%] h-[180px] object-fit mx-auto"
              />
            </div>
            <p className="mt-[36px]  font-outfit font-normal text-[24px] leading-[32px] text-justify text-[#1B2128]  max-md:mt-[20px] max-md:text-[12.7px] max-md:leading-[16px] max-md:-tracking-[2%] max-sm:text-[16px] max-sm:leading-[20px]  ">
              One pivotal day, his father saw the potential in him and proposed
              an alternative path. He encouraged Sajan to attend the National
              Law School of India University (NLSIU) and pursue a legal career.
              Intrigued and inspired by witnessing his father&apos;s courtroom
              endeavors throughout his childhood, Sajan agreed. NLSIU marked a
              transformative phase in Sajan&apos;s life.
              <br />
              <br /> The rigorous academic setting, paired with stimulating
              intellectual discussions, sharpened his legal acumen. His time
              there went beyond merely learning the law; it shaped his worldview
              and instilled a profound sense of responsibility towards both
              society and the legal profession.
            </p>
          </div>

          {/* image */}
          <div className=" w-[30%] h-full my-auto max-sm:hidden">
            <Image
              src={Pic}
              alt="image"
              className="w-full h-[54%] object-fit"
            />
          </div>
        </div>

        {/* Innovation in legal practice */}
        <p className=" font-domine font-bold text-[48px] leading-[52px] -tracking-[2%]  max-md:text-[25px] max-md:leading-[27px] max-sm:text-[28px] max-sm:leading-[34px] max-sm:w-[88%] max-sm:text-center">
          Innovations in Legal Practice
        </p>
        <p className="w-[64%] font-outfit font-normal text-[24px] leading-[32px] text-justify text-[#1B2128] mt-[36px] max-md:mt-[20px] max-md:text-[12.7px] max-md:leading-[16px] max-md:-tracking-[2%] max-sm:text-[16px] max-sm:leading-[20px] max-sm:w-[88%] ">
          Upon graduating in 1996, Sajan made a bold decision. Unlike many of
          his classmates who joined established law firms, he opted to forge his
          own path and established Poovayya & Co. Under his leadership, the firm
          blossomed from a nascent entity into a reputable name, adept at
          handling complex legal cases and earning clients&apos; trust
          nationwide. However, Sajan&apos;s aspirations reached beyond his firm.
          In 2012, he was appointed as a Senior Advocate in the Supreme Court of
          India.He also served as the Additional Advocate General for Karnataka.
          This achievement was a moment of immense pride, not only for Sajan but
          also for all who had witnessed his remarkable ascent in the legal
          field.
        </p>

        {/* Three Images */}
        {/* <div className="mt-[90px] flex justify-center gap-[40px] mb-[42px]">
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
        </div> */}

        <Image
          src={ProfilePic}
          alt="image"
          className="w-[45%] max-md:h-[182px] custom:h-[343px] max-md:mt-[48px] mt-[90px] max-md:mb-[21px] mb-[40px]"
        />

        <AboutSanjay />

        <Footer />
      </div>
    </>
  );
};

export default page;
