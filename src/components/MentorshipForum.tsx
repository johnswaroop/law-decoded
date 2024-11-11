"use client";

import React, { useState } from "react";

const MentorshipForum = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      {/* h = s */}
      <div className="w-full h-[1079px] bg-[#FFF2CF] flex flex-col items-center">
        {/* h = t + s + b */}
        <p className="font-georgia font-bold text-[32px] leading-[50px] text-center mt-[60px] mb-[65px]">
          Sagar Poovayya Mentorship Program
        </p>
        <p className="font-inter font-semibold text-[16px] leading-[28px] -tracking-[0.2px] text-center mb-[50px]">
          Join Our Community
        </p>
        <p className="font-inter font-normal text-[16px] leading-[28px] -tracking-[0.2px] text-center w-[304.49px] mb-[52px]">
          Et ultrices neque ornare aenean. A arcu cursus vitae congue mauris
          rhoncus aenean vel elit. Accumsan sit amet nulla facilisi. Fames ac
          turpis egestas integer. Vel risus commodo viverra maecenas accumsan
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[25px] items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[341px] max-xs:w-[300px] h-[55px] px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[341px] max-xs:w-[300px] h-[55px] px-3 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[341px] max-xs:w-[300px] h-[55px] px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[341px] max-xs:w-[300px] h-[159px] px-3 py-2"
          />
          <button
            type="submit"
            className="w-[341px] h-[64px] flex justify-center items-center rounded-[8px] bg-[#DD4826] hover:bg-[#5f271a] max-xs:w-[300px]"
          >
            <p className="text-white font-inter font-medium text-[16px] leading-[24px] -tracking-[0.16px]">
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
