import React from "react";
import MountainIcon from "@/assets/AboutSection/Mountain.svg";
import Image from "next/image";

const LawDecoded = () => {
  return (
    <>
      {/* height =  self + bottom */}
      <div className="h-[774px] w-full flex flex-col items-center">
        {/* Mt icon */}
        <div className="w-[66px] h-[49px] overflow-hidden relative mb-[135px] ">
          <Image
            src={MountainIcon}
            alt="mountain"
            fill
            className="object-cover w-[66px] h-[49px]"
          />
        </div>
        {/* Text */}
        <div className="w-full h-[95px] flex justify-center items-center">
          <p className="font-georgia font-normal text-[32px] leading-[40px] -tracking-[1px] text-center">
            Law Decoded with
            <br className="md:hidden" /> Sajan Poovayya
          </p>
        </div>

        {/* small text + button */}
        <div className="w-full h-[469px] flex flex-col  items-center pt-[30px]">
          <p className="w-[336px] h-[315px] font-inter font-normal text-[16px] leading-[28px] -tracking-tighter-[0.2px] text-justify  max-xs:w-[300px]">
            Proin libero nunc consequat interdum varius sit amet mattis
            vulputate. Dui sapien eget mi proin sed libero enim sed. Et ultrices
            neque ornare aenean. A arcu cursus vitae congue mauris rhoncus
            aenean vel elit. Accumsan sit amet nulla facilisi.
            <br />
            <br /> Fames ac turpis egestas integer. Vel risus commodo viverra
            maecenas accumsan. Neque volutpat ac tincidunt vitae semper. Quis
            vel eros{" "}
          </p>
          <button className="w-[129px] h-[48px] flex justify-center items-center bg-[#DD4826] mt-[39.9px] text-white">
            <p className="font-inter font-medium text-[16px]">Read More</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default LawDecoded;
