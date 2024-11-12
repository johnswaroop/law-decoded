import React from "react";

const EfficientModel = () => {
  return (
    <>
      {/* only height */}
      <div className="h-[1146px] w-full custom:h-[997px] flex flex-col items-center">
        <p className="text-[32px] font-georgia font-normal leading-[40px] -tracking-[2.4px] text-center mb-[40px] custom:mb-[24px]">
          A single, efficient platform <br className="md:hidden" /> for managing
          all
          <br className="max-md:hidden" /> your <br className="md:hidden" />
          personnel needs.
        </p>
        <p
          className="font-inter font-normal text-[16px] leading-[28px] -tracking-[0.2px] text-center px-[26px] mb-[92px]
        custom:mb-[56px] max-xs:px-0"
        >
          Myself and he brought and to and text the <br className="md:hidden" />
          thought, of she line such
          <br className="max-md:hidden" /> founder, think being{" "}
          <br className="md:hidden" />
          my just ducks
        </p>
        <div className="flex flex-col items-center  px-[24px] custom:flex-row custom:w-[1232px] custom:h-[550px] custom:justify-center custom:gap-[81px]">
          {/* yellow screen */}
          <div className="w-[342px] h-[270px] bg-[#FFF2CF] mb-[81px] custom:h-full custom:w-[695px] custom:mb-0 max-xs:w-[300px]"></div>
          <div className="flex flex-col items-center custom:h-full custom:w-[456px] custom:justify-center">
            {/* First box---- */}
            <div
              className="w-[342px] h-[123px] px-[30px] rounded-[9px] border-t-[0.75px] border-[#FC5A5A] flex flex-col justify-center items-center gap-[16.5px] mb-[18px] custom:w-full custom:h-[164px] custom:border-t-[1px] custom:radius-[12px]  max-xs:w-[300px]"
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
            >
              {/* firstText */}
              <div className="flex justify-start gap-[4.5px] w-[282px] custom:w-[376px] custom:gap-[13px]">
                {/* circle */}
                <div className="rounded-full w-[30px] h-[30px] bg-[#FFF2CF] border-[0.75px] border-[#000000] text-[#000000] font-inter font-semibold text-[15.75px] leading-[21px] text-center flex justify-center items-center custom:w-[40px] custom:h-[40px]">
                  <p>1</p>
                </div>
                <div className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] flex justify-center items-center custom:text-[21px] custom:leading-[28px]">
                  <p>1 min payroll</p>
                </div>
              </div>
              <div className="w-[282px] custom:w-[376px]">
                <p className="font-inter font-normal text-[12.0px] leading-[16.5px] text-[#000000BF] custom:text-[14px] custom:leading-[22px] ">
                  Cut 90% of payroll admin vs. legacy tools or outsourcing.
                  Dramatically increase accuracy. User-friendly interface.
                </p>
              </div>
            </div>

            {/* Second Box */}
            <div
              className="w-[342px] h-[78px] py-[24px] pl-[30px] pr-[59.25px] flex justify-start gap-[9.75px] bg-white rounded-[9px] mb-[18px] custom:w-full custom:h-[164px] custom:radius-[12px] custom:p-0 custom:flex custom:justify-center custom:text-center  max-xs:w-[300px] max-xs:gap-[4.5px] max-xs:p-0 max-xs:justify-center max-xs:items-center "
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
            >
              <div className="rounded-full w-[30px] h-[30px] bg-white border-[0.75px] border-[#000000] text-[#000000] font-inter font-semibold text-[15.75px] leading-[21px] text-center flex justify-center items-center ">
                <p>2</p>
              </div>
              <div className="flex justify-center items-center max-xs:w-[210px]">
                <p className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] text-center">
                  Your people info, centralised
                </p>
              </div>
            </div>

            {/* Third Box */}
            <div
              className="w-[342px] h-[78px] py-[24px] pl-[30px] pr-[37.25px] flex justify-start gap-[9.75px] bg-white rounded-[9px] mb-[18px]  max-xs:w-[300px] max-xs:gap-[4.5px] max-xs:p-0 max-xs:justify-center max-xs:items-center"
              style={{ boxShadow: "9px 9px 37.5px 0px #00000014" }}
            >
              <div className="rounded-full w-[30px] h-[30px] bg-white border-[0.75px] border-[#000000] text-[#000000] font-inter font-semibold text-[15.75px] leading-[21px] text-center flex justify-center items-center ">
                <p>3</p>
              </div>
              <div className="flex justify-center items-center max-xs:w-[210px]">
                <p className="font-inter font-semibold text-[15.75px] leading-[21px] -tracking-[0.18px] text-center max-xs:leading-[18px]">
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
