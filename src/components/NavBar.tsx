import React from "react";
import Logo from "@/assets/Hero/result.svg";
import menu from "@/assets/Hero/menu.svg";
import searchIcon from "@/assets/Hero/searchIcon.svg";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="w-full h-[77px] bg-[#FFF0EC] custom:h-[77px] md:h-[29.7px]">
      <div className="w-full h-full px-[25px] flex justify-between items-center custom:px-[34px]  md:px-[17.6px]">
        {/* logo */}
        <div className="w-[150px] h-[50.12px] overflow-hidden relative custom:w-[150px] custom:h-[50.12px] md:w-[58.3px] md:h-[19.5px]">
          <Image
            src={Logo}
            alt="image"
            fill
            className="object-cover w-[150px] h-[50px] custom:w-[150px] custom:h-[50.12px]  md:w-[58.3px] md:h-[19.5px]"
          />
        </div>
        {/* middle buttons */}
        <div className="font-outfit font-medium text-[15px] leading-[20px] max-md:hidden flex justify-between items-center gap-[16px] text-[#281D1B] max-custom:text-[7.96px] max-custom:leading-[10.61px] max-custom:gap-[8.49px]">
          <Link href={"/"}>Home</Link>
          <Link href={"/blogs"}>About Us</Link>
          <Link href={"/mentorship"}>Mentorship Programme</Link>
          <Link href={"/"}>Join Community</Link>
          <Link href={"/videos"}>Videos</Link>
          <Link href={"/latestNews"}>Latest News</Link>
        </div>
        {/* Subscribe ContactUS */}
        <div className="font-outfit font-medium text-[15px] leading-[20px] text-[#F72C00] flex justify-center gap-[32px] max-md:hidden max-custom:text-[7.96px] max-custom:leading-[10.61px] ">
          <div className="flex justify-center items-center gap-[24px]">
            <Link href={"/"}>Subscribe</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>

          <div className="w-[24px] h-[24px] relative overflow-hidden custom:w-[24px] custom:h-[24px] max-custom:w-[12.73px] max-custom:h-[12.73px]">
            <Image
              src={searchIcon}
              alt="image"
              fill
              className="object-cover w-[24px] h-[24px] custom:w-[24px] custom:h-[24px] max-custom:w-[12.73px] max-custom:h-[12.73px]"
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
  );
};

export default NavBar;
