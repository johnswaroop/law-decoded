import React from "react";
import Image from "next/image";
import LaywerImage from "@/assets/EfficientModel/lawyerPic.png";

const EfficientModel = () => {
  return (
    <>
      {/* only height */}
      <div className="h-[1140px] w-full custom:h-[870px] flex flex-col items-center">
        <p className="text-[48px] max-custom:text-[32px] font-georgia font-normal leading-[52px] -tracking-[2.4px] text-center mb-[40px] custom:mb-[24px]">
          Sajan Poovayya Mentorship Programme
        </p>
        <p
          className=" w-[844px]  font-inter font-normal text-[17.66px] leading-[28px] -tracking-[0.2px] text-center px-[70px] mb-[92px] text-[#000000BF]
        custom:mb-[56px] max-xs:px-0 max-custom:text-[16px] max-custom:w-[338px] max-custom:px-0"
        >
          A unique mentorship programme that offers law students and young
          lawyers an opportunity to engage with real time litigation. We also
          host special seminars and conversations that help young lawyers make
          strides in the profession of law.
        </p>
        <div className="flex flex-col items-center  px-[24px] custom:flex-row custom:w-[1232px] custom:h-[550px] custom:justify-center custom:gap-[41px]">
          {/* yellow screen */}
          <div className="w-[342px] h-[270px] rounded-[12px] mb-[81px] custom:h-full custom:w-[695px] custom:mb-0 max-xs:w-[300px]">
            <Image src={LaywerImage} alt="image" />
          </div>
          <div className="flex flex-col items-center custom:h-full custom:w-[456px] custom:justify-center">
            {/* First box---- */}
            <div
              className="w-[342px] h-[123px] px-[30px] rounded-[9px] border-t-[0.75px] border-[#FC5A5A] flex flex-col justify-center items-center gap-[16.5px] mb-[18px] custom:w-full custom:h-[164px] custom:border-t-[1px] custom:radius-[12px] custom:mb-[24px] custom:px-[40px] max-xs:w-[300px] max-xs:px-0 max-xs:gap-2"
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
            >
              {/* firstText */}
              <div className="flex justify-start gap-[4.5px] w-[282px] custom:w-[376px] custom:gap-[13px] max-xs:w-[250px] ">
                {/* circle */}
                <div className="rounded-full w-[30px] h-[30px] bg-[#FFF2CF] border-[0.75px] border-[#000000] text-[#000000] font-inter font-semibold text-[15.75px] leading-[21px] text-center flex justify-center items-center custom:w-[40px] custom:h-[40px]">
                  <p>1</p>
                </div>
                <div className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] flex justify-center items-center custom:text-[21px] custom:leading-[28px]">
                  <p>1 min payroll</p>
                </div>
              </div>
              <div className="w-[282px] custom:w-[376px] max-xs:w-[250px] ">
                <p className="font-inter font-normal text-[12.0px] leading-[16.5px] text-[#000000BF] custom:text-[14px] custom:leading-[22px]  ">
                  Cut 90% of payroll admin vs. legacy tools or outsourcing.
                  Dramatically increase accuracy.
                  <br className="max-xs:hidden custom:hidden" /> User-friendly
                  interface.
                </p>
              </div>
            </div>

            {/* Second Box */}
            <div
              className="w-[342px] h-[78px] py-[24px] pl-[30px] pr-[59.25px] flex justify-start gap-[9.75px] bg-white rounded-[9px] mb-[18px] custom:w-full custom:h-[104px] custom:radius-[12px] custom:p-0 custom:flex custom:justify-start custom:text-center custom:mb-[24px] max-xs:w-[300px] max-xs:gap-[4.5px] max-xs:p-0 max-xs:justify-center max-xs:items-center custom:items-center custom:gap-[13px] custom:pl-[40px]"
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
            >
              <div className="rounded-full w-[30px] h-[30px] bg-white border-[0.75px] border-[#000000] text-[#000000] font-inter font-semibold text-[15.75px] leading-[21px] text-center flex justify-center items-center  custom:h-[40px] custom:w-[40px] custom:border-[1px] custom:text-[21px] custom:leading-[28px]">
                <p>2</p>
              </div>
              <div className="flex justify-center items-center max-xs:w-[210px]">
                <p className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] text-center custom:text-[21px] custom:leading-[28px]">
                  Your people info, centralised
                </p>
              </div>
            </div>

            {/* Third Box */}
            <div
              className="w-[342px] h-[78px] py-[24px] pl-[30px] pr-[59.25px] flex justify-start gap-[9.75px] bg-white rounded-[9px] mb-[18px] custom:w-full custom:h-[104px] custom:radius-[12px] custom:p-0 custom:flex custom:justify-start custom:text-center custom:mb-[24px] max-xs:w-[300px] max-xs:gap-[4.5px] max-xs:p-0 max-xs:justify-center max-xs:items-center custom:items-center custom:gap-[13px] custom:pl-[40px]"
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
            >
              <div className="rounded-full w-[30px] h-[30px] bg-white border-[0.75px] border-[#000000] text-[#000000] font-inter font-semibold text-[15.75px] leading-[21px] text-center flex justify-center items-center  custom:h-[40px] custom:w-[40px] custom:border-[1px] custom:text-[21px] custom:leading-[28px]">
                <p>3</p>
              </div>
              <div className="flex justify-center items-center max-xs:w-[210px]">
                <p className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] text-center custom:text-[21px] custom:leading-[28px]">
                  Reporting across HR & pay data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EfficientModel;
