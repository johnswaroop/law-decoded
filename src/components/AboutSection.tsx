import React from "react";
import Image from "next/image";
import LawyerImage from "@/assets/AboutSection/LawyerImage.png";

const AboutSection = () => {
  return (
    <div className="w-full px-4 py-8 xs:px-6 sm:px-8 md:px-10 lg:px-12 custom:px-16 mb-[6%] max-w-[1920px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 lg:gap-16 custom:gap-[139px] max-w-[1440px] mx-auto">
        {/* Image Section - Hidden on mobile, visible from md breakpoint */}
        <div className="hidden md:block md:w-[300px] lg:w-[450px] custom:w-[591px]">
          <div className="relative w-full aspect-[591/550]">
            <Image
              src={LawyerImage}
              alt="Sajan Poovayya"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center md:items-start max-w-[336px] md:max-w-[247px] lg:max-w-[400px] custom:max-w-[462px]">
          {/* Title */}
          <h1 className="font-georgia text-center md:text-left text-2xl xs:text-3xl md:text-[21px] lg:text-[32px] custom:text-[40px] leading-tight mb-6 md:mb-4 custom:mb-[29px]">
            About Sajan Poovayya
          </h1>

          {/* Mobile Image */}
          <div className="md:hidden w-full max-w-[336px] aspect-[336/313] relative mb-8">
            <Image
              src={LawyerImage}
              alt="Sajan Poovayya"
              className="object-cover"
              fill
              priority
            />
          </div>

          {/* Description */}
          <p className="font-inter text-justify px-4 md:px-0 text-sm xs:text-base md:text-[9.55px] lg:text-base custom:text-[18px] leading-relaxed md:leading-[14.84px] lg:leading-7 custom:leading-7">
            As a Senior Advocate, Sajan Poovayya is highly respected for his
            legal expertise and dedication. He is the leading voice in the
            country for tech laws, artificial intelligence, Web 3 and the whole
            new verse of laws emerging as technology transforms the world of
            law.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            He is also a strong advocate for the rights of junior lawyers,
            championing pay parity and equitable opportunities. Sajan believes
            that the future of the legal profession hinges on well-trained
            advocates and actively promotes mentorship, offering practical
            advice based on his extensive experience.
          </p>

          {/* Button */}
          <button className="mt-6 md:mt-4 lg:mt-7 custom:mt-[28px] w-[129px] md:w-full h-12 md:h-[34px] lg:h-[48px] custom:h-[64px] bg-[#DD4826] hover:bg-[#c13f21] transition-colors">
            <span className="text-white font-inter font-medium md:text-[8.49px] lg:text-base">
              {/* Mobile Text */}
              <span className="md:hidden">Read More</span>
              {/* Desktop Text */}
              <span className="hidden md:block">Book 30 minutes consultation</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
