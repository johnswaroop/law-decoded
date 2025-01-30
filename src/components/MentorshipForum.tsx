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
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const pathname = usePathname();

  const validate = () => {
    const errors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name) {
      errors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
      isValid = false;
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required.";
      isValid = false;
    }
    if (!formData.message) {
      errors.message = "Message is required.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${process.env.API}/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit the form.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
      id="contact"
      className={`w-full min-h-screen flex flex-col items-center px-4 py-12 xs:py-16 mid:py-20 custom:py-24 ${
        pathname.endsWith("mentorship") ? "bg-white" : "bg-[#FFF2CF]"
      }`}
      >
      <h1 className="font-georgia font-bold text-center mb-6 
        text-2xl xs:text-[28px] mid:text-[32px] lg:text-[36px] custom:text-[40px]
        leading-normal xs:leading-tight mid:leading-relaxed
        w-full xs:w-[90%] mid:w-[80%] lg:w-[600px] custom:w-[584px]">
        Sajan Poovayya <br /> Mentorship Program for{" "}
        <br className="hidden custom:block" /> law Students
      </h1>

      <p className="font-inter text-[#212424] text-center mb-8 
        text-sm xs:text-[15px] mid:text-base lg:text-[17px] custom:text-[18px]
        leading-relaxed
        w-full xs:w-[90%] mid:w-[80%] lg:w-[500px] custom:w-[551px]">
        Join Our Community Step a realm where ambition meets opportunity! Our
        mentorship program invites you to connect with a new world. Embrace
        the chance to ignite your potential and broaden your horizons in a
        supportive community that values growth and inclusivity. Ready to
        embark on this exciting journey? Fill out the form below and
        let's make waves together!
      </p>

      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      <div className="w-full max-w-[1440px] px-4 xs:px-6 lg:px-8">
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-[320px] xs:max-w-[400px] mid:max-w-[450px] lg:max-w-[500px] custom:max-w-[551px] mx-auto"
        >
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          className={`w-full h-12 xs:h-[45px] mid:h-[50px] custom:h-[55px] px-4 rounded-md border-2 ${
          formErrors.name ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {formErrors.name && (
          <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className={`w-full h-12 xs:h-[45px] mid:h-[50px] custom:h-[55px] px-4 rounded-md border-2 ${
          formErrors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {formErrors.email && (
          <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
        )}

        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full h-12 xs:h-[45px] mid:h-[50px] custom:h-[55px] px-4 rounded-md border-2 ${
          formErrors.phone ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {formErrors.phone && (
          <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
        )}

        <textarea
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          className={`w-full h-[100px] xs:h-[120px] mid:h-[140px] custom:h-[159px] px-4 py-3 rounded-md border-2 ${
          formErrors.message ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {formErrors.message && (
          <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
        )}

        <button
          type="submit"
          className="w-full h-12 xs:h-[45px] mid:h-[50px] custom:h-[55px] 
          flex justify-center items-center rounded-md 
          bg-[#DD4826] hover:bg-[#5f271a] transition-colors
          text-white font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default MentorshipForum;
