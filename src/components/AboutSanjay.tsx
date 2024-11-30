import React from "react";

const AboutSanjay = () => {
  return (
    <>
      {/* heingt = self */}
      <div className="h-[954px] w-full flex flex-col items-center custom:h-[402px] custom:w-[1025px] custom:mx-auto">
        <p className="text-[32px] font-georgia font-normal leading-[50px] mb-[35px] custom:text-[40px] custom:mb-[82px]">
          Our Social Media
        </p>

        <div className="flex justify-between w-[1025px] max-custom:flex-col max-custom:w-[300px] max-custom:items-center max-custom:h-[900px]">
          <div className="w-[261px] h-[261px] rounded-[6px] bg-[#D9D9D9]"></div>
          <div className="w-[261px] h-[261px] rounded-[6px] bg-[#D9D9D9]"></div>
          <div className="w-[261px] h-[261px] rounded-[6px] bg-[#D9D9D9]"></div>
        </div>
      </div>
    </>
  );
};

export default AboutSanjay;
