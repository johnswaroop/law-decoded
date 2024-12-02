import React from "react";
import Image from "next/image";
import OwlImage from "@/assets/Hero/Mask-group.png";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="w-full h-auto max-custom:mb-[120px] custom:h-[603px] flex flex-col  items-center custom:mt-[68.53px] custom:mb-[50px] md:mb-[30px]">
        {/* Owl Image */}
        <div className="h-[228px] w-full custom:h-[267px] overflow-hidden relative flex justify-center items-center md:h-[141px] max-custom:items-end ">
          <div className="overflow-hidden relative w-[159.38px] h-[179.58px] custom:w-[159.38px] custom:h-[179.58px] md:w-[99.71px] md:h-[112.35px]">
            <Image src={OwlImage} alt="image" fill className="object-cover" />
          </div>
        </div>

        {/* Declutter + text + knowMore */}
        <div className="flex flex-col justify-center gap-[28px] items-center px-[26px] custom:mx-auto custom:w-[910px] custom:gap-[40px] md:w-[482.66px] md:gap-[14.85px] md:px-[12px]">
          {/* Declutter + text */}
          <div className="flex flex-col justify-center gap-[28px] ">
            <p className="font-georgia font-normal  text-[48px] leading-[52px] -tracking-[4px] text-center custom:text-[80px] custom:leading-[80px] custom:-tracking-[4px] md:text-[42.43px] md:leading-[42.43px] md:-tracking-[2.21px]">
              Declutter the <br className="md:hidden" /> Maze of Law{" "}
              <br className="max-md:hidden" /> with Sajan Poovayya
            </p>
            <p className="font-inter font-normal italic text-[16px] leading-[28px] -tracking-[0.2px] text-center custom:text-[18px] custom:leading-[28px] custom:-tracking-[0.2px] text-[#000000BF] md:text-[9.55px] md:leading-[14.84px] md:-tracking-[0.11px]">
              &quot;Law as a subject or law as a profession is not just for the
              privileged. We dejargonise law,
              <br className="max-md:hidden" /> make legal studies accessible,
              reducing systemic barriers.&quot; -SP
            </p>
          </div>
          {/* knowMore */}
          <button className="bg-[#DD4826] w-[133px] h-[48px] flex justify-center items-center custom:h-[52px] md:w-[71px] md:h-[27.58px]">
            <p className="text-white font-inter font-medium text-[16px] leading-[24px] -tracking-[0.16px] custom:text-[16px] custom:leading-[24px] md:text-[8.49px] md:leading-[12.73px]">
              Know More
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
