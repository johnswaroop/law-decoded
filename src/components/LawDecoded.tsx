import React from "react";
import LawDecodedw from "@/assets/LawDecoded/ImageOwl.png";
import Image from "next/image";

const LawDecoded = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 my-8 xs:my-12 sm:my-16 mid:my-20 lg:my-24 custom:my-[157px]">
      {/* Logo/Image container */}
      <div className="relative w-[280px] h-[93px] xs:w-[320px] xs:h-[107px] sm:w-[342px] sm:h-[121px] mid:w-[380px] mid:h-[127px] lg:w-[400px] lg:h-[134px] custom:w-[443px] custom:h-[148px] mb-6 sm:mb-8 mid:mb-10 lg:mb-12 custom:mb-[60px]">
        <Image
          src={LawDecodedw}
          alt="Law Decoded Logo"
          fill
          sizes="(max-width: 390px) 280px,
                 (max-width: 640px) 320px,
                 (max-width: 768px) 342px,
                 (max-width: 1024px) 380px,
                 (max-width: 1440px) 400px,
                 443px"
          className="object-contain"
          priority
        />
      </div>

      {/* Title */}
      <div className="mb-4 sm:mb-6 mid:mb-8 lg:mb-10 custom:mb-[29px]">
        <h1 className="font-georgia text-center text-[24px] leading-[32px] xs:text-[28px] xs:leading-[36px] sm:text-[32px] sm:leading-[40px] mid:text-[34px] mid:leading-[42px] lg:text-[36px] lg:leading-[45px] custom:text-[40px] custom:leading-[50px] tracking-[-0.5px]">
          <span>Law Decoded with</span>
          <span className="sm:hidden"><br /></span>
          <span className="sm:ml-2"> Sajan Poovayya</span>
        </h1>
      </div>

      {/* Description and CTA */}
      <div className="flex flex-col items-center max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] mid:max-w-[480px] lg:max-w-[500px] custom:max-w-[606px]">
        <p className="text-[#212424] text-justify font-inter text-[13px] leading-[22px] xs:text-[14px] xs:leading-[24px] sm:text-[15px] sm:leading-[26px] mid:text-[16px] mid:leading-[28px] lg:text-[17px] lg:leading-[29px] custom:text-[18px] custom:leading-[30px] tracking-[-0.2px] mb-6 sm:mb-8 mid:mb-10 custom:mb-[32px]">
          Law Decoded is a platform dedicated to empowering the legal community by
          bridging the gap between aspiring law students and experienced lawyers.
          Through its mentorship program, Law Decoded fosters meaningful
          connections, providing students with the guidance they need to navigate
          their legal journey while offering lawyers an opportunity to share their
          expertise and shape the next generation of legal professionals.
        </p>

        <button className="bg-[#DD4826] text-white font-inter w-full xs:w-[320px] sm:w-[400px] mid:w-[350px] lg:w-[400px] custom:w-[466px] h-[40px] xs:h-[44px] sm:h-[48px] mid:h-[52px] lg:h-[58px] custom:h-[64px] transition-all duration-300 hover:bg-[#c13d1f]">
          <span className="font-medium text-[13px] xs:text-[14px] sm:text-[15px] mid:text-[15px] lg:text-[16px] custom:text-[16px] leading-normal">
            Read More
          </span>
        </button>
      </div>
    </div>
  );
};

export default LawDecoded;
