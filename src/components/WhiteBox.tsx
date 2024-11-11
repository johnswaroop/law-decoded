import React from "react";

const WhiteBox = () => {
  return (
    <>
      {/* height= top + center + bottom */}
      <div className="w-full h-[1049.71px] flex flex-col items-center ">
        {/* h = t + s + b */}
        <div className="mt-[151.21px] w-[320px] h-[234px] border-[1.69px] border-[#202020] mb-[43px]"></div>
        {/* h = s + b */}
        <div className="w-[329px] text-[28px] font-georgia font-normal leading-[36px] text-center mb-[12px]  max-xs:w-[300px]">
          Catchy Blog Headline That Is Also Optimized for SEO
        </div>

        {/* h = s + b */}
        <div
          className="w-[320px] h-[280px] font-inter font-normal text-[18px] leading-[28px] text-[#212424] text-justify mb-[45px] 
"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
          volutpat sed cras ornare. Lectus vestibulum mattis ullamcorper velit
          sed ullamcorper morbi. Lacus sed turpis tincidunt id aliquet risus.
          Consequat semper viverra nam libero.
        </div>

        <button className="bg-[#DD4826] w-[129px] h-[48px] flex justify-center items-center text-white text-[16px] font-inter font-medium">
          <p>Read More</p>
        </button>
      </div>
    </>
  );
};

export default WhiteBox;
