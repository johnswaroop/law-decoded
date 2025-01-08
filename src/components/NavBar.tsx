"use client";

import React, { useState } from "react";
import Logo from "@/assets/Hero/result.svg";
// import menu from "@/assets/Hero/menu.svg";

import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="w-full h-[77px] bg-[#FFF0EC] custom:h-[77px] md:h-[29.7px]">
      <div className="w-full h-full pl-[25px] flex justify-between items-center custom:px-[34px]  md:px-[17.6px]">
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
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/mentorship"}>Mentorship Programme</Link>
          <Link href={"/"}>Join Community</Link>
          <Link href={"/videos"}>Videos</Link>
          <Link href={"https://blog.sajanpoovayya.com/"}>Latest News</Link>
        </div>
        {/* Subscribe ContactUS */}
        <div className="font-outfit font-medium text-[15px] leading-[20px] text-[#F72C00] flex justify-center gap-[32px] max-md:hidden max-custom:text-[7.96px] max-custom:leading-[10.61px] ">
          <div className="flex justify-center items-center gap-[24px]">
            {/* <Link href={"/"}>Subscribe</Link> */}
            <Link href={"/#contact"}>Contact Us</Link>
          </div>

          {/* <div className="w-[24px] h-[24px] relative overflow-hidden custom:w-[24px] custom:h-[24px] max-custom:w-[12.73px] max-custom:h-[12.73px]">
            <Image
              src={searchIcon}
              alt="image"
              fill
              className="object-cover w-[24px] h-[24px] custom:w-[24px] custom:h-[24px] max-custom:w-[12.73px] max-custom:h-[12.73px]"
            />
          </div> */}
        </div>
        {/* mubile hamburger menu button */}
        <div className="  relative md:hidden z-20">
          {/* <Image
            src={menu}
            alt="image"
            fill
            className="w-[30px] h-[30px] object-cover"
          /> */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50 lg:hidden ">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 p-4 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="flex flex-col justify-between w-6 h-5 ">
          <span
            className={`block h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Menu Content */}
      <nav
        className={`absolute top-[68px] right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out origin-top-right
          md:w-64 w-screen z-10
          ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
      >
        <div className="pt-[40px] pb-[44px] px-[56px] font-inter">
          <ul>
            <li className="">
              <Link
                href="/"
                className=" block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/mentorship"
                className="block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors"
                onClick={toggleMenu}
              >
                Mentorship Programme
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors"
                onClick={toggleMenu}
              >
                Join Community
              </Link>
            </li>
            <li>
              <Link
                href="/videos"
                className="block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors"
                onClick={toggleMenu}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                href="/latestNews"
                className="block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors"
                onClick={toggleMenu}
              >
                Latest News
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
