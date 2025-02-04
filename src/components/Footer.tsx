import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/LawDecoded/ImageOwl.png";
import Face from "@/assets/Footer/facebook.svg";
import Insta from "@/assets/Footer/insta.svg";
import Twitter from "@/assets/Footer/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center border-t-[0.8px] border-[#6E504933] mt-[67.32px] mid:flex-row mid:justify-between mid:pl-[19.61px] mid:pr-[31.95px] mid:items-start mid:pt-[12.72px] mid:mb-[59.93px] lg:border-t-[1px] custom:border-t-[1.5px] custom:pl-[36px] custom:pr-[60px] custom:pt-[24px] custom:mb-[20px]">
        {/* Logo */}
        <div className="w-[342px] max-xs:w-[250px] mid:w-[82.49px] lg:w-[120px] custom:w-[155.61px] mid:h-full mid:flex mid:flex-col mid:justify-center mid:gap-[31.68px] lg:gap-[40px] custom:gap-[56px]">
          <Link href="/">
            <Image
              src={Logo}
              alt="Law Decoded Logo"
              className="w-[225px] h-[76px] mt-[113px] mid:mt-0 mid:w-[82.49px] mid:h-[27.56px] lg:w-[120px] lg:h-[40px] custom:w-[155.61px] custom:h-[52px]"
            />
          </Link>
          <div className="hidden mid:flex justify-start mid:gap-[6.36px] lg:gap-[9px] custom:gap-[12px]">
            <Link href="https://facebook.com/lawdecoded" target="_blank" rel="noopener noreferrer">
              <Image src={Face} alt="Facebook" className="mid:w-[12.72px] mid:h-[12.72px] lg:w-[18px] lg:h-[18px] custom:w-[24px] custom:h-[24px]" />
            </Link>
            <Link href="https://instagram.com/lawdecodedwithsp" target="_blank" rel="noopener noreferrer">
              <Image src={Insta} alt="Instagram" className="mid:w-[12.72px] mid:h-[12.72px] lg:w-[18px] lg:h-[18px] custom:w-[24px] custom:h-[24px]" />
            </Link>
            <Link href="https://x.com/poovayya" target="_blank" rel="noopener noreferrer">
              <Image src={Twitter} alt="Twitter" className="mid:w-[12.72px] mid:h-[12.72px] lg:w-[18px] lg:h-[18px] custom:w-[24px] custom:h-[24px]" />
            </Link>
          </div>
        </div>
        {/* text */}
        <div className="flex flex-col mt-[48px] gap-[48px] mid:flex-row mid:justify-center mid:gap-[25.44px] mid:m-0 lg:gap-[36px] custom:gap-[48px]">
          {/* First two */}
          <div className="w-[340px] flex justify-between max-xs:w-[250px] mid:justify-center mid:gap-[25.44px] mid:w-auto lg:gap-[36px] custom:gap-[48px]">
            <div className="flex flex-col gap-[8px] text-base mid:text-[10px] lg:text-[12px] custom:text-[16px] font-inter font-medium mid:w-[106.02px] lg:w-[150px] custom:w-[200px]">
              <p className="text-[#281D1B]">About Us</p>
              <Link href="/about-us/#sajan-poovayya" className="text-[#2E19149E] hover:text-[#281D1B]">Sajan Poovayya</Link>
              <Link href="/law-decoded" className="text-[#2E19149E] hover:text-[#281D1B]">Law Decoded<br />with Us</Link>
              <Link href="/about-team" className="text-[#2E19149E] hover:text-[#281D1B]">Our team</Link>
            </div>
            <div className="flex flex-col gap-[8px] text-base mid:text-[10px] lg:text-[12px] custom:text-[16px] font-inter font-medium w-[100px] items-start mid:w-[106.02px] lg:w-[150px] custom:w-[200px]">
              <p className="text-[#281D1B]">Resources</p>
              <Link href="https://blog.sajanpoovayya.com/" className="text-[#2E19149E] hover:text-[#281D1B]">Blogs</Link>
              <Link href="/videos" className="text-[#2E19149E] hover:text-[#281D1B]">Videos</Link>
            </div>
          </div>
          {/* Second two */}
          <div className="w-[340px] flex justify-between max-xs:w-[250px] mid:justify-center mid:gap-[25.44px] mid:w-auto lg:gap-[36px] custom:gap-[48px]">
            <div className="flex flex-col gap-[8px] text-base mid:text-[10px] lg:text-[12px] custom:text-[16px] font-inter font-medium mid:w-[106.02px] lg:w-[150px] custom:w-[200px]">
              <p className="text-[#281D1B]">Follow Us</p>
              <Link href="https://wa.me/yourwhatsappnumber" className="text-[#2E19149E] hover:text-[#281D1B]" target="_blank" rel="noopener noreferrer">Whatsapp</Link>
              <Link href="https://x.com/poovayya" className="text-[#2E19149E] hover:text-[#281D1B]" target="_blank" rel="noopener noreferrer">Twitter/X</Link>
              <Link href="https://instagram.com/lawdecodedwithsp" className="text-[#2E19149E] hover:text-[#281D1B]" target="_blank" rel="noopener noreferrer">Instagram</Link>
              <Link href="https://www.linkedin.com/in/poovayya/" className="text-[#2E19149E] hover:text-[#281D1B]" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </div>
            <div className="flex flex-col gap-[8px] text-base mid:text-[10px] lg:text-[12px] custom:text-[16px] font-inter font-medium w-[100px] items-start mid:w-[106.02px] lg:w-[150px] custom:w-[200px]">
              <p className="text-[#281D1B]">Legal</p>
              <Link href="/legal-terms" className="text-[#2E19149E] hover:text-[#281D1B]">Terms of<br />Service</Link>
              <Link href="/cookie-policy" className="text-[#2E19149E] hover:text-[#281D1B]">Cookie Policy</Link>
            </div>
          </div>
        </div>
        {/*Social Media Mobile */}
        <div className="mt-[48px] mb-[49px] w-[340px] flex justify-start gap-[12px] max-xs:w-[250px] mid:hidden">
          <Link href="https://facebook.com/lawdecoded" target="_blank" rel="noopener noreferrer">
            <Image src={Face} alt="Facebook" />
          </Link>
          <Link href="https://instagram.com/lawdecodedwithsp" target="_blank" rel="noopener noreferrer">
            <Image src={Insta} alt="Instagram" />
          </Link>
          <Link href="https://x.com/poovayya" target="_blank" rel="noopener noreferrer">
            <Image src={Twitter} alt="Twitter" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
