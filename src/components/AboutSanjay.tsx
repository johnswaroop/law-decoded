import React from "react";
import Image from "next/image";
import insta from "@/assets/AboutSanjay/insta.png";
import twitter from "@/assets/AboutSanjay/twitter.png";
import linkidin from "@/assets/AboutSanjay/linkdin.png";

const AboutSanjay = () => {
  return (
    <>
      {/* heingt = self */}
      <div className="h-[954px] w-full flex flex-col items-center custom:h-[402px] custom:w-[1025px] custom:mx-auto md:h-auto">
        <p className="text-[32px] font-georgia font-normal leading-[50px] mb-[35px] custom:text-[40px] custom:mb-[87px] md:text-[21.2px] md:leading-[26.5px] md:-tracking-[0.53px] custom:leading-[50px]">
          Our Social Media
        </p>

        <div className="flex justify-between w-[1025px] max-md:flex-col md:w-[543.34px] md:h-[138.35px] max-custom:w-[300px] max-custom:items-center max-custom:h-[900px] custom:w-[1025px] custom:h-[261px]">
          <div className="w-[261px] h-[261px] rounded-[6px]  md:w-[138.35px] md:h-[138.35px] custom:w-[261px] custom:h-[261px]">
            <Image
              src={insta}
              alt="image"
              className="object-cover w-[261px] h-[261px] rounded-[6px]  md:w-[138.35px] md:h-[138.35px] custom:w-[261px] custom:h-[261px]"
            />
          </div>
          <div className="w-[261px] h-[261px] rounded-[6px] md:w-[138.35px] md:h-[138.35px] custom:w-[261px] custom:h-[261px]">
            <Image
              src={twitter}
              alt="image"
              className="object-cover w-[261px] h-[261px] rounded-[6px]  md:w-[138.35px] md:h-[138.35px] custom:w-[261px] custom:h-[261px]"
            />
          </div>
          <div className="w-[261px] h-[261px] rounded-[6px]  md:w-[138.35px] md:h-[138.35px] custom:w-[261px] custom:h-[261px]">
            <Image
              src={linkidin}
              alt="image"
              className="object-cover w-[261px] h-[261px] rounded-[6px]  md:w-[138.35px] md:h-[138.35px] custom:w-[261px] custom:h-[261px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSanjay;
