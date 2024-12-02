import React from "react";
import Image from "next/image";
import LawyerImage from "@/assets/AboutSection/LawyerImage.png";

const AboutSection = () => {
  return (
    <>
      <div className="h-[907px] xs:h-[1000px] max-xs:h-[1075px] custom:h-[724px] md:h-[384px] flex flex-col items-center custom:flex-row md:flex-row custom:items-center md:items-center mb-[60px] custom:justify-center md:justify-center custom:gap-[139px] md:gap-[70px] md:mb-[40px]">
        <div className="max-mid:hidden h-full w-1/2 flex justify-center items-center custom:w-[591px] md:w-[300px]">
          <div className="w-[591px] h-[550px] relative overflow-hidden my-[80px] max-mid:hidden md:w-[300px] md:h-[250px]">
            <Image
              src={LawyerImage}
              alt="image"
              className="custom:object-cover md:object-fill  w-[591px] h-[550px] md:w-[300px] md:h-[250px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center custom:w-[462px] md:w-[247.16px] custom:justify-start md:justify-start custom:h-[483px] md:h-[256.18px]">
          <p className="font-georgia font-normal text-[32px] leading-[50px] text-center -tracking-[1px] custom:text-[40px] md:text-[21.22px] custom:mb-[24px] md:mb-[12px] custom:w-[466px] md:w-full custom:text-start md:text-start md:leading-[26.52px]">
            About Sajan Poovayya
          </p>
          <div className="w-[336px] h-[313px] relative overflow-hidden my-[80px] mid:hidden max-xs:w-[300px]">
            <Image
              src={LawyerImage}
              alt="image"
              fill
              className="object-cover w-[336px] h-[313px] max-xs:w-[300px]"
            />
          </div>
          <p className="font-inter font-normal text-[16px] leading-[28px] -tracking-[0.2px] px-[27px] custom:text-[18px] md:text-[9.55px] custom:leading-[14.85px] md:leading-[14.84px] custom:w-[466px] md:w-full custom:px-0 md:px-0">
            As a Senior Advocate, Sajan Poovayya is highly respected for his
            legal expertise and dedication. He is the leading voice in the
            country for tech laws, artificial intelligence, Web 3 and the whole
            new verse of laws emerging as technology transforms the world of
            law.
            <br className=" max-md:hidden" />
            <br className=" max-md:hidden" />
            He is also a strong advocate for the rights of junior lawyers,
            championing pay parity and equitable opportunities. Sajan believes
            that the future of the legal profession hinges on well-trained
            advocates and actively promotes mentorship, offering practical
            advice based on his extensive experience.
          </p>
          <button className="mt-[28px] w-[129px] h-[48px] flex justify-center items-center bg-[#DD4826] custom:w-[466px] md:w-[247.16px] custom:h-[64px] md:h-[33.95px] md:mt-[14px]">
            <p className="text-white font-inter font-medium text-[16px] leading-[24px] -tracking-[0.16px] custom:hidden md:hidden">
              Read More
            </p>
            <p
              className="text-white font-inter font-medium text-[16px] leading-[24px] -tracking-[0.16px] max-md:hidden md:text-[8.49px] md:leading-[12.73px]
           "
            >
              {" "}
              Book 30 minutes consultation
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
