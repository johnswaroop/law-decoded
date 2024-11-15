import React from "react";
import BlackMt from "@/assets/WhiteBox/BlackMt.svg";
import Image from "next/image";

const WhiteBox = () => {
  return (
    <>
      {/* height= top + center + bottom */}
      <div className="w-full h-[1049.71px] flex flex-col items-center  custom:h-[1253px]">
        {/* h = t + s + b */}
        {/* outer-box only visible > 1440px */}
        <div className="max-custom:hidden w-[944px] h-[765.29px] border-[1px] border-[#000000] mt-[286px] mb-[201.7px] flex flex-col items-center">
          {/* inner box */}
          <div className="mt-[151.21px] w-[320px] h-[234px] border-[1.69px] border-[#202020] mb-[43px] max-xs:w-[300px]    custom:mt-[40px] custom:mb-[28px] custom:w-[812px] custom:h-[276.29px] flex justify-center items-center">
            <Image src={BlackMt} alt="image" />
          </div>
          {/* h = s + b */}
          <div className="w-[329px] text-[28px] font-georgia font-normal leading-[36px] text-center mb-[12px]  max-xs:w-[300px] custom:text-[40px] custom:leading-[50px] custom:w-[812px] custom:h-[100px] custom:text-start custom:mb-[43px]">
            Catchy Blog Headline That Is <br className="max-custom:hidden" />{" "}
            Also Optimized for SEO
          </div>

          {/* h = s + b */}
          <div className="w-[320px] h-[280px] font-inter font-normal text-[18px] leading-[28px] text-[#212424] text-justify mb-[45px] max-xs:w-[300px] custom:w-[812px] custom:h-[129px] custom:mb-[45px] custom:text-[22p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
            volutpat sed cras ornare. Lectus vestibulum mattis ullamcorper velit
            sed ullamcorper morbi. Lacus sed turpis tincidunt id aliquet risus.
            Consequat semper viverra nam libero.
          </div>

          <button className="bg-[#DD4826] w-[129px] h-[48px] flex justify-center items-center text-white text-[16px] font-inter font-medium custom:w-[812px] custom:h-[64px] custom:rounded-[8px]">
            <p>Read More</p>
          </button>
        </div>

        {/* mobile box */}
        <div className="mt-[151.21px] w-[320px] h-[234px] border-[1.69px] border-[#202020] mb-[43px] max-xs:w-[300px]    custom:mt-[40px] custom:mb-[28px] custom:w-[812px] custom:h-[276.29px] flex justify-center items-center custom:hidden">
          <Image src={BlackMt} alt="image" />
        </div>
        {/* h = s + b */}
        <div className="w-[329px] text-[28px] font-georgia font-normal leading-[36px] text-center mb-[12px]  max-xs:w-[300px] custom:text-[40px] custom:leading-[50px] custom:w-[812px] custom:h-[100px] custom:text-start custom:mb-[43px] custom:hidden">
          Catchy Blog Headline That Is <br className="max-custom:hidden" /> Also
          Optimized for SEO
        </div>

        {/* h = s + b */}
        <div className="w-[320px] h-[280px] font-inter font-normal text-[18px] leading-[28px] text-[#212424] text-justify mb-[45px] max-xs:w-[300px] custom:w-[812px] custom:h-[129px] custom:mb-[45px] custom:text-[22p custom:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
          volutpat sed cras ornare. Lectus vestibulum mattis ullamcorper velit
          sed ullamcorper morbi. Lacus sed turpis tincidunt id aliquet risus.
          Consequat semper viverra nam libero.
        </div>

        <button className="bg-[#DD4826] w-[129px] h-[48px] flex justify-center items-center text-white text-[16px] font-inter font-medium custom:w-[812px] custom:h-[64px] custom:rounded-[8px] custom:hidden">
          <p>Read More</p>
        </button>
      </div>
    </>
  );
};

export default WhiteBox;
