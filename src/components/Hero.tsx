import React from "react";
import Image from "next/image";
import OwlImage from "@/assets/Hero/Mask-group.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full min-h-[400px] xs:min-h-[450px] sm:min-h-[500px] mid:min-h-[550px] lg:min-h-[580px] custom:h-[603px] mb-6 sm:mb-8 mid:mb-[30px] custom:mb-[50px]">
      {/* Owl Image */}
      <div className="relative flex justify-center items-end h-[140px] xs:h-[160px] sm:h-[180px] mid:h-[200px] lg:h-[210px] custom:h-[240px] mt-4 sm:mt-8 custom:mt-[60px] mb-4 custom:mb-[20px]">
        <div className="relative w-[100px] h-[112px] xs:w-[120px] xs:h-[135px] sm:w-[130px] sm:h-[146px] mid:w-[140px] mid:h-[157px] lg:w-[150px] lg:h-[168px] custom:w-[159.38px] custom:h-[179.58px]">
          <Image src={OwlImage} alt="Owl" fill className="object-cover" />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center px-4 xs:px-6 sm:px-8 mid:px-12 lg:px-16 custom:px-0">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-4 sm:gap-6 mid:gap-7 custom:gap-[40px]">
          {/* Heading */}
          <h1 className="font-georgia text-center text-[32px] xs:text-[36px] sm:text-[42px] mid:text-[48px] lg:text-[60px] custom:text-[80px] leading-[1.1] -tracking-[2px] sm:-tracking-[3px] custom:-tracking-[4px]">
            Declutter the Maze of Law{" "}
            <br className="hidden sm:block" /> with Sajan Poovayya
          </h1>

          {/* Quote */}
          <p className="font-inter italic text-center text-[12px] xs:text-[13px] sm:text-[14px] mid:text-[15px] lg:text-[16px] custom:text-[18px] leading-[1.6] -tracking-[0.1px] custom:-tracking-[0.2px] text-[#000000BF]">
            &quot;Law as a subject or law as a profession is not just for the
            privileged. We dejargonise law,
            <br className="hidden lg:block" /> make legal studies accessible,
            reducing systemic barriers.&quot; -SP
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/about-team"
          className="mt-6 sm:mt-8 mid:mt-10 custom:mt-[28px] bg-[#DD4826] text-white font-inter font-medium px-6 py-3 xs:px-7 xs:py-3.5 mid:px-8 mid:py-4 hover:bg-[#c13816] transition-colors"
        >
          <span className="text-[14px] xs:text-[15px] sm:text-[16px] leading-normal">
            Know More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
