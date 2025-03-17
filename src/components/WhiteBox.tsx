import React from "react";
import ImageNews from "@/assets/WhiteBox/Placeholder.png";
import Image from "next/image";
import Link from "next/link";

const WhiteBox = () => {
  return (
    <section className="w-full px-4 py-8 xs:py-10 sm:py-12 mid:py-16 lg:py-20 custom:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Main container */}
        <div className="w-full flex flex-col items-center">
          {/* Box container with border */}
          <div className="w-full max-w-[320px] xs:max-w-[370px] sm:max-w-[600px] mid:max-w-[728px] lg:max-w-[944px] custom:max-w-[1030px] border border-black p-6 xs:p-7 sm:p-8 mid:p-10 lg:p-12">
            {/* Image container */}
            <div className="relative w-full aspect-[4/3] mid:aspect-[3/1] border border-[#202020] mb-6 xs:mb-7 sm:mb-8 mid:mb-10">
              <Image
                src={ImageNews}
                alt="News image"
                fill
                className="object-cover"
                sizes="(max-width: 390px) 320px, (max-width: 640px) 370px, (max-width: 768px) 600px, (max-width: 1024px) 728px, (max-width: 1440px) 944px, 1030px"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-7 mid:space-y-8">
              <h2 className="font-georgia text-xl xs:text-2xl mid:text-[21.2px] lg:text-3xl custom:text-4xl leading-tight text-center mid:text-left">
                Marital Rape
              </h2>

              <p className="font-inter font-medium text-[#121212] text-sm xs:text-base mid:text-sm lg:text-lg">
                Sajan Poovayya
              </p>

              <div className="font-inter text-sm xs:text-base mid:text-sm lg:text-lg text-[#212424] text-justify mid:text-left">
                In Karnataka in 2022, a landmark decision unfolded as Justice M.
                Nagaprasanna declared the marital rape exception in India&apos;s
                legal system to be regressive and violative of the right to
                equality. The case centered around a woman who accused her husband,
                Hrishikesh Sahoo, of rape and other offenses—a bold move that
                challenged...
              </div>

              <Link href="https://blog.sajanpoovayya.com/" className="block w-full px-4 xs:px-6 py-2.5 xs:py-3 mid:py-2 lg:py-4 bg-[#DD4826] text-white font-inter font-medium text-sm mid:text-base rounded-lg hover:bg-opacity-90 transition-colors text-center">
                Continue reading
              </Link>            
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteBox;
