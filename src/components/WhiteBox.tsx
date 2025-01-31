import React from "react";
import ImageNews from "@/assets/WhiteBox/Placeholder.png";
import Image from "next/image";

const WhiteBox = () => {
  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Main container */}
        <div className="w-full flex flex-col items-center">
          {/* Box container with border */}
          <div className="w-full max-w-[320px] md:max-w-[546px] lg:max-w-[944px] xl:max-w-[1030px] border border-black p-4 md:p-6 lg:p-8">
            {/* Image container */}
            <div className="relative w-full aspect-[4/3] md:aspect-[3/1] border border-[#202020] mb-6 md:mb-8">
              <Image
                src={ImageNews}
                alt="News image"
                fill
                className="object-cover"
                sizes="(max-width: 320px) 320px, (max-width: 546px) 546px, (max-width: 944px) 944px, 1030px"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="font-georgia text-2xl md:text-[21.2px] lg:text-3xl xl:text-4xl leading-tight text-center md:text-left">
                Marital Rape
              </h2>

              <p className="font-inter font-medium text-[#121212] text-base md:text-sm lg:text-lg">
                Sajan Poovayya
              </p>

              <div className="font-inter text-base md:text-sm lg:text-lg text-[#212424] text-justify md:text-left">
                In Karnataka in 2022, a landmark decision unfolded as Justice M.
                Nagaprasanna declared the marital rape exception in India&apos;s
                legal system to be regressive and violative of the right to
                equality. The case centered around a woman who accused her husband,
                Hrishikesh Sahoo, of rape and other offenses—a bold move that
                challenged...
              </div>

              <button className="w-full md:w-auto px-6 py-3 md:py-2 lg:py-4 bg-[#DD4826] text-white font-inter font-medium text-sm md:text-base rounded-lg hover:bg-opacity-90 transition-colors">
                Continue reading
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteBox;
