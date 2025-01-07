import React from "react";
import Image from "next/image";
import Charger from "@/assets/MentorPage/Chsrging.svg";
import Wifi from "@/assets/MentorPage/Wifi.svg";
import Circle from "@/assets/MentorPage/Circle.svg";
import Wrench from "@/assets/MentorPage/Wrench.svg";
import Pin from "@/assets/MentorPage/Round.svg";
import SeniorLawyer from "@/assets/MentorPage/seniorImage.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Test1 from "@/assets/MentorPage/TestimonyImage1.png";
import Test2 from "@/assets/MentorPage/TestimonyImage2.png";
import Test3 from "@/assets/MentorPage/TestimonyImage3.png";
import Test4 from "@/assets/MentorPage/TestimonyImage4.png";

const ProgramAndSuccess = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <p className="mt-[64px] ml-[24px] mr-[24px] mb-[24px] font-georgia font-normal text-[28px] leading-[52px] -tracking-[-1%] text-[#281D1B] custom:mt-[64px]  md:w-[92%] custom:text-start md:mx-0 custom:text-[48px] custom:leading-[52px] ">
          Program Benefits
        </p>
        {/* brown boxes */}
        <div className="flex flex-wrap gap-x-[21.6px] gap-y-[24px] px-[24px] max-xs:gap-x-[10px] md:p-0 md:w-[92%] items-center justify-center custom:gap-x-[24px] custom:gap-y-[24px] mb-[96px] custom:mb-[96px]">
          {/* First */}
          <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px] custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px] md:w-[228px] md:h-[135px]">
            <Image
              src={Charger}
              alt="image"
              className=" w-[27.48px] h-[14.99px] custom:w-[58px] custom:h-[32px] md:w-[34px] md:h-[34px]"
            />
            <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px] md:w-[84%] md:text-[12px] md:leading-[16px] ">
              Gain industry insights from experienced mentors.
            </p>
          </div>
          {/* Second */}
          <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px] md:w-[228px] md:h-[135px]">
            <Image
              src={Wifi}
              alt="image"
              className=" w-[29.98px] h-[29.98px] custom:w-[64px] custom:h-[64px] md:w-[34px] md:h-[34px]"
            />
            <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px]  md:w-[84%] md:text-[12px] md:leading-[16px]  ">
              Expand your professional network.
            </p>
          </div>
          {/* Third*/}
          <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px] md:w-[228px] md:h-[135px]">
            <Image
              src={Circle}
              alt="image"
              className=" w-[29.98px] h-[29.98px] custom:w-[64px] custom:h-[64px] md:w-[34px] md:h-[34px]"
            />
            <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px]  md:w-[84%] md:text-[12px] md:leading-[16px]   ">
              Receive personalized career guidance.
            </p>
          </div>
          {/* Forth */}
          <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px] md:w-[228px] md:h-[135px]">
            <Image
              src={Wrench}
              alt="image"
              className=" w-[29.98px] h-[29.98px] custom:w-[51px] custom:h-[51px] md:w-[34px] md:h-[34px]"
            />
            <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px] md:w-[84%] md:text-[12px] md:leading-[16px]  ">
              Access to exclusive resources and events.
            </p>
          </div>
          {/* Fifth */}
          <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px] md:w-[228px] md:h-[135px]">
            <Image
              src={Wrench}
              alt="image"
              className="w-[29.98px] h-[29.98px] custom:w-[51px] custom:h-[51px] md:w-[34px] md:h-[34px]"
            />
            <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px]  md:w-[84%] md:text-[12px] md:leading-[16px]   ">
              Improve your skills and knowledge.
            </p>
          </div>
          {/* Sixth */}
          <div className="w-[160.2px] h-[119.92px] bg-[#7E352517] pl-[16.24px] flex flex-col justify-center items-start gap-[11.24px] rounded-[7.49px] max-xs:w-[131px]  custom:w-[432px] custom:h-[256px] custom:pl-[32px] custom:gap-[24px] custom:rounded-[16px] md:w-[228px] md:h-[135px]">
            <Image
              src={Pin}
              alt="image"
              className=" w-[29.98px] h-[29.98px] custom:w-[64px] custom:h-[64px] md:w-[34px] md:h-[34px]"
            />
            <p className="text-[#281D1B] font-sans font-normal text-[11.24px] leading-[14.99px] -tracking-[0.5px] w-[120px] custom:text-[24px] custom:leading-[32px]  md:w-[84%]  md:text-[12px] md:leading-[16px]  ">
              Boost your confidence and motivation.
            </p>
          </div>
        </div>

        {/* Success Stories Text */}
        <p className="mt-[39.69px] font-georgia font-bold text-[24px] leading-[41.28px] mx-auto mb-[39.69px] custom:mt-[50px] custom:text-[48px] custom:leading-[52px]">
          Success Stories
        </p>
        <CarouselComponent />
        <p className="font-georgia font-normal text-[32px] leading-[43px] -tracking-[2%] text-center px-[24px] mb-[50px] max-xs:px-[18px] custom:w-[1317px] custom:text-[64px] custom:leading-[68px] mx-auto">
          Mentorship bridges the gap between theory and practice, providing
          real-world insights that textbooks can&apos;t offer.
        </p>
        <div className="flex w-full justify-center gap-[16px] mb-[50px]">
          {" "}
          <Image src={SeniorLawyer} alt="image" className="w-[64px] h-[64px]" />
          <div className="flex flex-col items-start justify-center">
            <p className="font-outfit font-semibold text-[17px] leading-[24px] text-[#1B2128]">
              Sagar Poovaya
            </p>
            <p className="font-outfit font-normal text-[17px] leading-[24px] text-[#14202E9E]">
              Mentor
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramAndSuccess;

const carouselData = [
  {
    image: Test1,
    name: "Amara Singh",
    role: "Law Student",
    feedback: "Thanks to Law Decoded, I secured an internship at a top firm.",
  },
  {
    image: Test2,
    name: "Liam Thompson",
    role: "Law Graduate",
    feedback: "Mentoring helped me navigate the complexities of law school.",
  },
  {
    image: Test3,
    name: "Sophia Martinez",
    role: "Junior Associate",
    feedback: "The guidance I received was instrumental in my career growth.",
  },
  {
    image: Test4,
    name: "Ethan Brown",
    role: "Paralegal",
    feedback: "I found my mentor's advice on work-life balance invaluable.",
  },
];
const CarouselComponent = () => {
  return (
    <>
      <Carousel className="custom:w-[1344px] custom:mx-auto mb-[139px] custom:mb-[170px] w-full overflow-hidden ">
        <CarouselContent className="mx-auto w-[768px] custom:w-[1232px]">
          {carouselData.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 custom:basis-1/4 max-w-[192px] custom:max-w-[308px]"
            >
              <div className="w-[175px] h-[138.22px] bg-[#FFF2CF66] rounded-[12.19px] flex flex-col justify-center items-center gap-[10.97px] max-xs:w-[140px] custom:w-[288px] custom:h-[250px]">
                <div className="w-[141px] h-[29.25px] flex justify-start gap-[7.31px] max-xs:w-[120px] custom:w-[232px] custom:h-[48px] custom:gap-[12px]">
                  <Image
                    src={item.image}
                    alt="image"
                    className="w-[29px] h-[29px] custom:w-[48px] custom:h-[48px]"
                  />
                  <div className="flex flex-col w-[104px] items-start custom:w-[172px] custom:justify-center">
                    <p className="font-inter font-semibold text-[9.14px] leading-[12.19px] custom:text-[15px] custom:leading-[20px]">
                      {item.name}
                    </p>
                    <p className="font-inter font-normal text-[9.14px] leading-[12.19px] text-[#14202E9E] custom:text-[15px] custom:leading-[20px]">
                      {item.role}
                    </p>
                  </div>
                </div>
                <div className="w-[141px] h-[63.38px] flex justify-start gap-[21.9px] ml-[14.61px] max-xs:w-[120px] custom:w-[232px] custom:h-[128px] custom:ml-[24px] custom:items-center">
                  <div className="w-[0.91px] h-[59px] bg-[#495A6E33] custom:w-[1.5px] custom:h-[120px]"></div>
                  <p className="font-inter font-normal text-[12.19px] leading-[14.63px] max-xs:text-[10px] custom:text-[20px] custom:leading-[24px]">
                    {item.feedback}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
