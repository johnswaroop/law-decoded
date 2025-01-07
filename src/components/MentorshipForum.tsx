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
        className={`w-full h-auto  flex flex-col items-center custom:h-auto max-md:h-auto max-md:pb-[50px] md:h-auto ${
          pathname.endsWith("mentorship") ? "bg-white" : "bg-[#FFF2CF]"
        }`}
      >
        {/* h = t + s + b */}
        <p className="font-georgia font-bold text-[32px] leading-[50px] text-center mt-[60px] mb-[65px] custom:mt-[97px] custom:text-[40px] custom:leading-[50px]  md:mt-[51.42px] md:mb-[11.66px] md:w-[309.57px] md:text-[21.2px] md:leading-[26.5px] md:-tracking-[0.53px] custom:w-[584px] custom:mb-[34px] ">
          Sajan Poovayya <br /> Mentorshiop Program for{" "}
          <br className="max-custom:hidden" /> law Students
        </p>

        <p className="font-inter font-normal text-[16px] leading-[28px] -tracking-[0.2px] text-justify w-[304.49px] mb-[52px] custom:text-[18px] custom:leading-[28px] custom:font-normal custom:w-[551px] custom:text-justify custom:mb-[51px] text-[#212424] md:text-[9.54px] md:leading-[14.84px] md:text-justify md:mb-[27.03px] ">
          Join Our Community Step a realm where ambition meets opportunity! Our
          mentorship program invites you to connect with a new world. Embrace
          the chance to ignite your potential and broaden your horizons in a
          supportive community that values growth and inclusivity. Ready to
          embark on this exciting journey? Fill out the form below and
          let&apos;s make waves together!
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
