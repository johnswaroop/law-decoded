import React from "react";
import Image from "next/image";

// import rebank from "@/assets/Hero/rebank.svg";
// import packfleet from "@/assets/Hero/packFleet.svg";
// import cable from "@/assets/Hero/cable.svg";
// import hyperMile from "@/assets/Hero/hyperMile.svg";
// import citation from "@/assets/Hero/citationsy.svg";
// import minimum from "@/assets/Hero/minimum.svg";
import OwlImage from "@/assets/Hero/Mask-group.png";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="w-full h-auto max-custom:mb-[120px] custom:h-[603px] flex flex-col  items-center custom:mt-[68.53px] custom:mb-[50px]">
        {/* Owl Image */}
        <div className="h-[228px] w-full custom:h-[267px] overflow-hidden relative flex justify-center items-center ">
          <div className="overflow-hidden relative w-[159.38px] h-[179.58px]">
            <Image src={OwlImage} alt="image" fill className="object-cover" />
          </div>
        </div>

        {/* Declutter + text + knowMore */}
        <div className="flex flex-col justify-center gap-[28px] items-center px-[26px] custom:mx-auto custom:w-[910px] custom:gap-[40px]">
          {/* Declutter + text */}
          <div className="flex flex-col justify-center gap-[28px] ">
            <p className="font-georgia font-normal  text-[48px] leading-[52px] -tracking-[4px] text-center custom:text-[80px] custom:leading-[80px] custom:-tracking-[4px]">
              Declutter the <br className="md:hidden" /> Maze of Law{" "}
              <br className="max-custom:hidden" /> with Sajan Poovayya
            </p>
            <p className="font-inter font-normal text-[16px] leading-[28px] -tracking-[0.2px] text-center custom:text-[18px] custom:leading-[28px] custom:-tracking-[0.2px] text-[#000000BF]">
              Law as a subject or law as a profession is not just for the
              privileged. We dejargonise law,
              <br className="max-custom:hidden" /> make legal studies
              accessible, reducing systemic barriers.
            </p>
          </div>
          {/* knowMore */}
          <button className="bg-[#DD4826] w-[133px] h-[48px] flex justify-center items-center custom:h-[52px]">
            <p className="text-white font-inter font-medium text-[16px] leading-[24px] -tracking-[0.16px]">
              Know More
            </p>
          </button>
        </div>

        {/* Trusted by + icons */}
        {/* <div className="pt-[49px] flex flex-col justify-center items-center gap-[20px]">
          <p className="font-inter font-medium text-[14px] leading-[28px] -tracking-[0.2px]">
            Trusted by the best
          </p>
          <div className="flex justify-center items-center">
            <Carousel className="w-[90%] p-2 flex justify-center">
              <CarouselContent className="flex justify-evenly">
                <CarouselItem className="basis-1/3 w-[85px]">
                  <Image src={rebank} alt="image" className="w-[85px]" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <Image src={packfleet} alt="image" />
                </CarouselItem>
                <CarouselItem className="basis-1/3 w-[66px]">
                  <Image src={cable} alt="image" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <Image src={hyperMile} alt="image" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <Image src={citation} alt="image" />
                </CarouselItem>
                <CarouselItem className="basis-1/3 align-bottom">
                  <Image src={minimum} alt="image" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="max-custom:hidden" />
              <CarouselNext className="max-custom:hidden" />
            </Carousel>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
