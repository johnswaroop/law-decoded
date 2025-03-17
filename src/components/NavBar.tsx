"use client";

import React, { useState, useEffect, useRef } from "react";
import Logo from "@/assets/Hero/result.svg";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  const [showMentorshipDropdown, setShowMentorshipDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMentorshipDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setShowMentorshipDropdown(false);
  }, []);

  return (
    <div className="w-full h-[60px] xs:h-[65px] sm:h-[70px] mid:h-[77px] bg-[#FFF0EC] z-50">
      <div className="w-full h-full px-4 xs:px-5 sm:px-6 mid:px-8 lg:px-[25px] custom:px-[34px] flex justify-between items-center">
        {/* logo */}
        <div className="relative w-[100px] h-[33px] xs:w-[120px] xs:h-[40px] sm:w-[130px] sm:h-[43px] mid:w-[140px] mid:h-[47px] lg:w-[150px] lg:h-[50.12px]">
          <Link href="/">
            <Image
              src={Logo}
              alt="Law Decoded Logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        {/* middle buttons - hidden on mobile */}
        <div className="hidden mid:flex items-center">
          <div className="font-inter font-medium text-[15px] flex items-center gap-[16px] text-[#281D1B]">
            <Link href={"/"}>Home</Link>
            <Link href={"/about-us"}>About Us</Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1"
                onClick={() => setShowMentorshipDropdown(!showMentorshipDropdown)}
              >
                Mentorship Programme
                <MdKeyboardArrowDown className="text-lg" />
              </button>
              {showMentorshipDropdown && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 mt-1 w-40 z-50">
                  <Link
                    href="/mentorship/students"
                    className="block px-4 py-2 hover:bg-[#FFF0EC] text-[#281D1B]"
                    onClick={() => setShowMentorshipDropdown(false)}
                  >
                    For Students
                  </Link>
                  <Link
                    href="/mentorship"
                    className="block px-4 py-2 hover:bg-[#FFF0EC] text-[#281D1B]"
                    onClick={() => setShowMentorshipDropdown(false)}
                  >
                    For Lawyers
                  </Link>
                </div>
              )}
            </div>
            <Link href="/#community">Join Community</Link>
            <Link href={"/videos"}>Videos</Link>
            <Link href={"https://blog.sajanpoovayya.com/"}>Latest News</Link>
          </div>
        </div>

        {/* Subscribe ContactUS */}
        <div className="font-inter font-medium text-[15px] leading-[20px] text-[#F72C00] hidden mid:flex justify-center gap-[32px]">
          <div className="flex justify-center items-center">
            <Link href={"/#contact"}>Contact Us</Link>
          </div>
        </div>

        {/* mobile hamburger menu button */}
        <div className="mid:hidden relative z-20">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMentorshipDropdown, setShowMentorshipDropdown] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setShowMentorshipDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowMentorshipDropdown(false);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <div className="relative z-50">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 p-4 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="flex flex-col justify-between w-6 h-5">
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

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: '60px' }}
      >
        <div className="h-full overflow-y-auto">
          <div className="pt-6 pb-8 px-6 xs:px-8 sm:px-10 font-inter">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  className="block text-lg xs:text-xl font-medium hover:text-[#E43D12] transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="block text-lg xs:text-xl font-medium hover:text-[#E43D12] transition-colors"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <div ref={mobileDropdownRef}>
                  <button
                    onClick={() => setShowMentorshipDropdown(!showMentorshipDropdown)}
                    className="flex items-center text-lg xs:text-xl font-medium hover:text-[#E43D12] transition-colors"
                  >
                    Mentorship Programme
                    <MdKeyboardArrowDown className="text-2xl" />
                  </button>
                  {showMentorshipDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        href="/mentorship/students"
                        className="block text-lg font-medium hover:text-[#E43D12] transition-colors"
                        onClick={toggleMenu}
                      >
                        For Students
                      </Link>
                      <Link
                        href="/mentorship"
                        className="block text-lg font-medium hover:text-[#E43D12] transition-colors"
                        onClick={toggleMenu}
                      >
                        For Lawyers
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  href="/#community"
                  className="block text-lg xs:text-xl font-medium hover:text-[#E43D12] transition-colors"
                  onClick={toggleMenu}
                >
                  Join Community
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="block text-lg xs:text-xl font-medium hover:text-[#E43D12] transition-colors"
                  onClick={toggleMenu}
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/latestNews"
                  className="block text-lg xs:text-xl font-medium hover:text-[#E43D12] transition-colors"
                  onClick={toggleMenu}
                >
                  Latest News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
