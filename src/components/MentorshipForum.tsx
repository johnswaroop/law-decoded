"use client";

import React, { useState } from "react";

import { usePathname } from "next/navigation";

const MentorshipForum = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  const pathname = usePathname();
  return (
    <>
      {/* h = s */}
      <div
        className={`w-full h-[1079px]  flex flex-col items-center custom:h-auto max-md:h-auto max-md:pb-[50px] md:h-auto ${
          pathname.endsWith("mentorship") ? "bg-white" : "bg-[#FFF2CF]"
        }`}
      >
        {/* h = t + s + b */}
        <p className="font-georgia font-bold text-[32px] leading-[50px] text-center mt-[60px] mb-[65px] custom:mt-[97px] custom:text-[40px] custom:leading-[50px] custom:mb-[22px] md:mt-[51.42px] md:mb-[11.66px] md:w-[309.57px] md:text-[21.2px] md:leading-[26.5px] md:-tracking-[0.53px] custom:w-[584px]">
          Sagar Poovayya Mentorship
          <br className="max-custom:hidden" /> Program
        </p>

        <p className="font-inter font-normal text-[16px] leading-[28px] -tracking-[0.2px] text-justify w-[304.49px] mb-[52px] custom:text-[18px] custom:leading-[28px] custom:font-normal custom:w-[551px] custom:text-justify custom:mb-[51px] text-[#212424] md:text-[9.54px] md:leading-[14.84px] md:text-justify md:mb-[27.03px]">
          Sajan Poovayya Mentorship program is designed to bridge the gap
          between academic learning and real world legal practice. The number of
          law students across the country has seen a sharp rise. Many sharp
          minds often find lack of mentorship, opportunities and face a glass
          ceiling. We have designed series of measures to bridge this gap. Our
          efforts include weekly newsletters, opportunity for students to write
          for our website and newsletters, special seminars and events designed
          for law students, court internships and also a merit based
          scholarship. We also host series of guest lectures and workshops.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[25px] items-center md:gap-[13.25px] custom:gap-[25px]"
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[341px] max-xs:w-[300px] h-[55px] px-3 py-2 custom:w-[551px] custom:h-[55px] custom:rounded-[5px] md:w-[292.08px] md:h-[29.15px] md:rounded-[2.65px] md:placeholder:text-[9.54px] custom:placeholder:text-[18px]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[341px] max-xs:w-[300px] h-[55px] px-3 py-2 custom:w-[551px] custom:h-[55px] custom:rounded-[5px] md:w-[292.08px] md:h-[29.15px] md:rounded-[2.65px]  md:placeholder:text-[9.54px] custom:placeholder:text-[18px]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[341px] max-xs:w-[300px] h-[55px] px-3 py-2 custom:w-[551px] custom:h-[55px] custom:rounded-[5px] md:w-[292.08px] md:h-[29.15px] md:rounded-[2.65px]  md:placeholder:text-[9.54px] custom:placeholder:text-[18px]"
          />
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[341px] max-xs:w-[300px] h-[159px] px-3 py-2 custom:w-[551px] custom:h-[159px] custom:rounded-[5px] md:w-[292.08px] md:h-[84.28px] md:rounded-[2.65px]  md:placeholder:text-[9.54px] custom:placeholder:text-[18px]"
          />
          <button
            type="submit"
            className="w-[341px] h-[64px] flex justify-center items-center rounded-[8px] bg-[#DD4826] hover:bg-[#5f271a] max-xs:w-[300px] custom:w-[551px] custom:h-[55px] custom:rounded-[5px]  md:placeholder:text-[9.54px] md:w-[292.08px] md:h-[33px] md:roudded-[4.24px] md:mb-[51.42px] custom:placeholder:text-[18px]"
          >
            <p className="text-white font-inter font-medium text-[16px] leading-[24px] -tracking-[0.16px] md:text-[8.48px] custom:text-[16px] custom:leading-[24px] ">
              {" "}
              Book a Consultation
            </p>
          </button>
        </form>
      </div>
    </>
  );
};

export default MentorshipForum;
