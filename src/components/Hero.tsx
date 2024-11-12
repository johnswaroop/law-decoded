import React from "react";
import Image from "next/image";
import Logo from "@/assets/Hero/result.svg";
import menu from "@/assets/Hero/menu.svg";
import searchIcon from "@/assets/Hero/searchIcon.svg";
import Link from "next/link";
import rebank from "@/assets/Hero/rebank.svg";
import packfleet from "@/assets/Hero/packFleet.svg";
import cable from "@/assets/Hero/cable.svg";
import hyperMile from "@/assets/Hero/hyperMile.svg";
import citation from "@/assets/Hero/citationsy.svg";
import minimum from "@/assets/Hero/minimum.svg";
import OwlImage from "@/assets/Hero/Mask-group.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <>
      {/* nav bar */}
      <div className="w-full h-[77px] bg-[#FFFBFA]">
        <div className="w-full h-full px-[25px] flex justify-between items-center custom:px-[34px]">
          {/* logo */}
          <div className="w-[150px] h-[50.12px] overflow-hidden relative">
            <Image
              src={Logo}
              alt="image"
              fill
              className="object-cover w-[150px] h-[50px]"
            />
          </div>
          {/* middle buttons */}
          <div className="font-outfit font-medium text-[15px] leading-[20px] max-md:hidden flex justify-between items-center gap-[16px] text-[#281D1B]">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Mentorship Programme</Link>
            <Link href={"/"}>Join Community</Link>
            <Link href={"/"}>Videos</Link>
            <Link href={"/"}>Latest News</Link>
          </div>
          {/* Subscribe ContactUS */}
          <div className="font-outfit font-medium text-[15px] leading-[20px] text-[#F72C00] flex justify-center gap-[32px] max-md:hidden">
            <div className="flex justify-center items-center gap-[24px]">
              <Link href={"/"}>Subscribe</Link>
              <Link href={"/"}>Contact Us</Link>
            </div>

            <div className="w-[24px] h-[24px] relative overflow-hidden">
              <Image
                src={searchIcon}
                alt="image"
                fill
                className="object-cover w-[24px] h-[24px]"
              />
            </div>
          </div>
          {/* mubile hamburger menu button */}
          <div className="w-[30px] h-[30px] overflow-hidden relative md:hidden">
            <Image
              src={menu}
              alt="image"
              fill
              className="w-[30px] h-[30px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="w-full h-[831px] custom:h-[633px] flex flex-col  items-center ">
        {/* Owl Image */}
        <div className="h-[228px] w-full custom:h-[267px] overflow-hidden relative flex justify-center items-center">
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
            <p className="font-inter font-normal text-[16px] leading-[28px] -tracking-[0.2px] text-center custom:text-[18px] custom:leading-[28px] custom:-tracking-[0.2px] ">
              Law as a subject or law as a profession is not just for the
              privileged. It must be <br className="max-custom:hidden" />
              democratic within to foster democratic temper
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
        <div className="pt-[49px] flex flex-col justify-center items-center gap-[20px]">
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
        </div>
      </div>
    </>
  );
};

export default Hero;
