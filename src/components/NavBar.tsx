import React from "react";
import Logo from "@/assets/Hero/result.svg";
import menu from "@/assets/Hero/menu.svg";
import searchIcon from "@/assets/Hero/searchIcon.svg";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="w-full h-[77px] bg-[#FFFBFA]">
      <div className="w-full h-full px-[25px] flex justify-between items-center custom:px-[34px]">
        {/* logo */}
        <div className="w-[150px] h-[50.12px] overflow-hidden relative ">
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
          <Link href={"/blogs"}>Mentorship Programme</Link>
          <Link href={"/"}>Join Community</Link>
          <Link href={"/videos"}>Videos</Link>
          <Link href={"/latestNews"}>Latest News</Link>
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
  );
};

export default NavBar;
