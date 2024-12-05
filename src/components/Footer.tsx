import React from "react";
import Image from "next/image";
import Logo from "@/assets/LawDecoded/ImageOwl.png";
import Face from "@/assets/Footer/facebook.svg";
import Insta from "@/assets/Footer/insta.svg";
import Twitter from "@/assets/Footer/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center md:hidden ">
        {/* Logo */}
        <div className="w-[342px] max-xs:w-[250px] ">
          {" "}
          <Image
            src={Logo}
            alt="image"
            className="w-[225px] h-[76px] mt-[113px]"
          />
        </div>
        {/* text */}
        <div className="flex flex-col mt-[48px] gap-[48px]">
          {/* First two */}
          <div className="w-[340px] flex justify-start gap-[86px] max-xs:w-[250px]">
            <div className="flex flex-col gap-[8px] text-[15px] leading-[20px] font-inter font-medium ">
              <p className="text-[#281D1B]">About Us</p>
              <p className="text-[#2E19149E]">Sajan Poovayya</p>
              <p className="text-[#2E19149E]">Law Decoded with Us</p>
              <p className="text-[#2E19149E]">Our team</p>
            </div>
            <div className="flex flex-col gap-[8px] text-[15px] leading-[20px] font-inter font-medium ">
              <p className="text-[#281D1B]">Resources</p>
              <p className="text-[#2E19149E]">Blogs</p>
              <p className="text-[#2E19149E]">Videos</p>
            </div>
          </div>
          {/* Second two */}
          <div className="w-[340px] flex justify-between max-xs:w-[250px]">
            <div className="flex flex-col gap-[8px] text-[15px] leading-[20px] font-inter font-medium ">
              <p className="text-[#281D1B]">Follow Us</p>
              <p className="text-[#2E19149E]">Whatsapp</p>
              <p className="text-[#2E19149E]">Twitter/X</p>
              <p className="text-[#2E19149E]">Instagram</p>
              <p className="text-[#2E19149E]">LinkedIn</p>
            </div>
            <div className="flex flex-col gap-[8px] text-[15px] leading-[20px] font-inter font-medium ">
              <p className="text-[#281D1B]">legal</p>
              <p className="text-[#2E19149E]">
                Terms of <br /> Service
              </p>
              <p className="text-[#2E19149E]">Cookie Policy</p>
            </div>
          </div>
        </div>
        {/*Social Media  */}
        <div className="mt-[48px] mb-[49px] w-[340px] flex justify-start gap-[12px] max-xs:w-[250px]">
          <Image src={Face} alt="image" />
          <Image src={Insta} alt="image" />
          <Image src={Twitter} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Footer;
