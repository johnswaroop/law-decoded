import React from "react";
import Image from "next/image";
import MountainImage from "@/assets/AboutSection/Mountain.svg";

const AboutSection = () => {
  return (
    <>
      <div className="h-[659px] custom:h-[724px] flex flex-col items-center custom:flex-row custom:items-center">
        <div className="max-mid:hidden h-full w-1/2 flex justify-center items-center">
          <div className="w-[66px] h-[49px] relative overflow-hidden my-[80px] max-mid:hidden">
            <Image
              src={MountainImage}
              alt="image"
              fill
              className="object-cover w-[66px] h-[49px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center  custom:w-1/2 custom:justify-start custom:mx-auto custom:h-[483px]">
          <p className="font-georgia font-normal text-[32px] leading-[50px] text-center -tracking-[1px] custom:text-[40px] custom:mb-[24px] custom:w-[466px]  custom:text-start ">
            About Sajan Poovayya
          </p>
          <div className="w-[66px] h-[49px] relative overflow-hidden my-[80px] mid:hidden custom:w-[466px]">
            <Image
              src={MountainImage}
              alt="image"
              fill
              className="object-cover w-[66px] h-[49px]"
            />
          </div>
          <p className="font-inter font-normal text-[16px] leading-[28px] -tracking-[0.2px] px-[27px] custom:text-[18px] custom:w-[466px] custom:px-0">
            Proin libero nunc consequat interdum varius sit amet mattis
            vulputate. Dui sapien eget mi proin sed libero enim sed. Et ultrices
            neque ornare aenean. A arcu cursus vitae congue mauris rhoncus
            aenean vel elit. Accumsan sit amet nulla facilisi.
            <br className="max-custom:hidden" />
            <br className="max-custom:hidden" /> Fames ac turpis egestas
            integer. Vel risus commodo viverra maecenas accumsan.
            <br className="max-custom:hidden" />
            <br className="max-custom:hidden" /> Neque volutpat ac tincidunt
            vitae semper. Quis vel eros{" "}
          </p>
          <button className="mt-[28px] w-[129px] h-[48px] flex justify-center items-center bg-[#DD4826] custom:w-[466px] custom:h-[64px]">
            <p className="text-white font-inter font-medium text-[16px] leading-[24px] -tracking-[0.16px] custom:hidden">
              Read More
            </p>
            <p className="text-white font-inter font-medium text-[16px] leading-[24px] -tracking-[0.16px] max-custom:hidden">
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
