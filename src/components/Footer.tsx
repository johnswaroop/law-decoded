import React from "react";
import Image from "next/image";
import Logo from "@/assets/LawDecoded/ImageOwl.png";
import Face from "@/assets/Footer/facebook.svg";
import Insta from "@/assets/Footer/insta.svg";
import Twitter from "@/assets/Footer/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center md:border-t-[0.8px] md:border-[#6E504933] md:mt-[67.32px] md:flex-row md:justify-between md:pl-[19.61px] md:pr-[31.95px] md:items-start md:pt-[12.72px] md:mb-[59.93px] custom:mt-[127px] custom:border-t-[1.5px] custom:pl-[36px] custom:pr-[60px] custom:pt-[24px] custom:mb-[20px]">
        {/* Logo */}
        <div className="w-[342px] max-xs:w-[250px] custom:w-[155.61px] md:h-full md:flex md:flex-col md:justify-center custom:gap-[56px] md:gap-[31.68px] md:w-[82.49px] ">
          {" "}
          <Image
            src={Logo}
            alt="image"
            className="w-[225px] h-[76px] mt-[113px] custom:w-[155.61px] custom:h-[52px] md:mt-0 md:w-[82.49px] md:h-[27.56px]"
          />
          <div className=" flex justify-start custom:gap-[12px] md:gap-[6.36px] max-md:hidden ">
            <Image
              src={Face}
              alt="image"
              className="custom:w-[24px] custom:h-[24px] md:w-[12.72px] md:h-[12.72px]"
            />
            <Image
              src={Insta}
              alt="image"
              className="custom:w-[24px] custom:h-[24px] md:w-[12.72px] md:h-[12.72px]"
            />
            <Image
              src={Twitter}
              alt="image"
              className="custom:w-[24px] custom:h-[24px] md:w-[12.72px] md:h-[12.72px]"
            />
          </div>
        </div>
        {/* text */}
        <div className="flex flex-col mt-[48px] gap-[48px] md:flex-row  md:justify-center md:gap-[25.44px] md:m-0 custom:gap-[48px]">
          {/* First two */}
          <div className="w-[340px] flex justify-between max-xs:w-[250px] md:justify-center md:gap-[25.44px] md:w-auto custom:gap-[48px]">
            <div className="flex flex-col gap-[8px] text-[15px] leading-[20px] font-inter font-medium md:w-[106.02px] custom:text-[15px] custom:leading-[20px] md:text-[7.95px] md:leading-[10.6px] custom:w-[200px]">
              <p className="text-[#281D1B]">About Us</p>
              <p className="text-[#2E19149E]">Sajan Poovayya</p>
              <p className="text-[#2E19149E]">
                Law Decoded
                <br /> with Us
              </p>
              <p className="text-[#2E19149E]">Our team</p>
            </div>
            <div className="flex flex-col gap-[8px] text-[15px] leading-[20px] font-inter font-medium w-[100px] items-start md:w-[106.02px]  custom:text-[15px] custom:leading-[20px] md:text-[7.95px] md:leading-[10.6px] custom:w-[200px]">
              <p className="text-[#281D1B]">Resources</p>
              <p className="text-[#2E19149E]">Blogs</p>
              <p className="text-[#2E19149E]">Videos</p>
            </div>
          </div>
          {/* Second two */}
          <div className="w-[340px] flex justify-between max-xs:w-[250px]  md:justify-center md:gap-[25.44px] md:w-auto custom:gap-[48px]">
            <div className="flex flex-col gap-[8px] text-[15px] leading-[20px] font-inter font-medium md:w-[106.02px] custom:text-[15px] custom:leading-[20px] md:text-[7.95px] md:leading-[10.6px] custom:w-[200px] ">
              <p className="text-[#281D1B]">Follow Us</p>
              <p className="text-[#2E19149E]">Whatsapp</p>
              <p className="text-[#2E19149E]">Twitter/X</p>
              <p className="text-[#2E19149E]">Instagram</p>
              <p className="text-[#2E19149E]">LinkedIn</p>
            </div>
            <div className="flex flex-col gap-[8px] text-[15px] leading-[20px] font-inter font-medium w-[100px] items-start md:w-[106.02px]  custom:text-[15px] custom:leading-[20px] md:text-[7.95px] md:leading-[10.6px] custom:w-[200px]">
              <p className="text-[#281D1B]">Legal</p>
              <p className="text-[#2E19149E]">
                Terms of <br /> Service
              </p>
              <p className="text-[#2E19149E]">Cookie Policy</p>
            </div>
          </div>
        </div>
        {/*Social Media  */}
        <div className="mt-[48px] mb-[49px] w-[340px] flex justify-start gap-[12px] max-xs:w-[250px] md:hidden ">
          <Image src={Face} alt="image" />
          <Image src={Insta} alt="image" />
          <Image src={Twitter} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Footer;
