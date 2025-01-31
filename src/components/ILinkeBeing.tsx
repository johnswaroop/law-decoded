import React from "react";
import LaawyerImage from "@/assets/ILike/sittingImage.png";
import Arrow from "@/assets/ILike/Arrow.svg";
import Image from "next/image";

const ILinkeBeing = () => {
  return (
    <div className="w-full bg-[#FFA89A4D]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-8 xs:px-6 sm:py-12 mid:flex-row mid:gap-9 lg:py-16 custom:gap-16 custom:py-[115px]">
        {/* Text Content */}
        <div className="flex w-full max-w-[304px] flex-col gap-5 xs:max-w-[350px] sm:max-w-[420px] mid:max-w-[325px] lg:max-w-[450px] custom:max-w-[614px]">
          {/* Quote */}
          <div className="font-georgia italic text-justify">
            <p className="text-base leading-relaxed tracking-tight xs:text-lg sm:text-xl mid:text-[17px] mid:leading-[25px] lg:text-2xl lg:leading-[1.6] custom:text-[32px] custom:leading-[47px] custom:-tracking-[2px]">
              &quot;When only a privileged few have access to legal knowledge, it
              creates barriers that prevent fair representation and the full
              participation of marginalized communities in legal and civic
              processes. For true equality in the justice system, we need lawyers,
              policymakers, and advocates from all walks of life. This diversity
              can lead to a more compassionate and effective legal system, as
              those within it better reflect the society they serve.&quot;
            </p>
          </div>

          {/* Author Info */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="font-inter font-medium text-[#121212] text-base leading-tight xs:text-lg custom:text-[18px] custom:leading-[28px]">
              Sajan Poovayya
            </p>
            <p className="font-inter text-[#121212] text-xs leading-tight xs:text-sm custom:text-[14px] custom:leading-[22px]">
              Founder Law Decoded
            </p>
          </div>

          {/* Button */}
          <button className="flex w-[116px] items-center justify-center gap-2 rounded-lg bg-black py-2 xs:w-[130px] sm:w-[140px] custom:w-[156px] custom:h-[48px]">
            <span className="font-inter font-medium text-white text-xs xs:text-sm custom:text-base">
              View more
            </span>
            <Image
              alt="arrow"
              src={Arrow}
              className="h-2.5 w-2.5 xs:h-3 xs:w-3 custom:h-4 custom:w-4"
            />
          </button>
        </div>

        {/* Image */}
        <div className="relative aspect-[0.84] w-full max-w-[304px] overflow-hidden rounded-lg xs:max-w-[350px] sm:max-w-[420px] mid:max-w-[270px] lg:max-w-[350px] custom:max-w-[509px]">
          <Image
            src={LaawyerImage}
            alt="Lawyer"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ILinkeBeing;
