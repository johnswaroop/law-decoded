import React from "react";
import Image from "next/image";
import YouIcon from "@/assets/ReviewAndLinks/youtube.svg";

const ConnectWithUS = () => {
  return (
    <div className="flex flex-col items-center px-4 xs:px-[2%] max-w-[1920px] mx-auto">
      <h1
        className="mt-[10.14px] xs:mt-[45.64px] mid:mt-[48.59px] lg:mt-[60.88px] custom:mt-[80px] 
         mb-6 xs:mb-[16px] mid:mb-[22px] custom:mb-[32px] 
         font-georgia font-normal 
         text-[24px] xs:text-[32px] mid:text-[48px] custom:text-[72px] 
         leading-[1.1] 
         -tracking-[2%] text-center text-[#1B2128] 
         w-full mid:w-[92%] "
      >
        Connect with Mentors to Advance Your Legal Journey
      </h1>
      <div className="relative w-full xs:w-[342px] mid:w-[506px] custom:w-[949px] h-auto xs:h-[179.45px] mid:h-[264px] custom:h-[550px] mb-12 xs:mb-[90px] custom:mb-[120px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tzr2FBIDkX4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-[20px] shadow-md"
        ></iframe>
        <a
          href="https://www.youtube.com/watch?v=tzr2FBIDkX4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#281D1B] hover:text-[#DD4826] transition-colors mt-4 justify-center"
        >
          <Image src={YouIcon} alt="YouTube" width={20} height={20} />
          <span className="font-inter text-sm">View on YouTube</span>
        </a>
      </div>
      {/* First box */}
      <div
        className="flex flex-col mid:flex-row w-full mid:w-[92%] custom:w-[1144px] 
          mb-12 mid:mb-[120px] custom:mb-[200px] 
          gap-6 mid:gap-8 custom:gap-12 
          mid:items-start mid:justify-between"
      >
        <h2
          className="font-georgia font-normal 
          text-[20px] xs:text-[24px] mid:text-[32px] custom:text-[40px] 
          leading-tight xs:leading-[28px] mid:leading-[40px] custom:leading-[44px] 
          -tracking-[2%] text-[#1B2128] 
          text-center self-center"
        >
          What is the Mentorship Programme?
        </h2>

        <div className="px-4 mid:p-0 w-full mid:w-[48%] custom:w-[524px]">
          <p
            className="font-inter font-normal 
           text-[12px] xs:text-[14px] mid:text-[16px] custom:text-[20px] 
           leading-[18px] xs:leading-[21px] mid:leading-[24px] custom:leading-[28px] 
           text-gray-600 
           w-full text-justify"
          >
            The Mentorship Programme invites you to explore the intricacies of
            the legal field through the guidance of experienced legal
            professionals. Participants will have the opportunity to engage in
            meaningful work, gaining practical insights into the day-to-day
            realities of legal practice.
            <br />
            <br />
            This programme aims to provide tailored mentorship, allowing young
            lawyers to navigate their career journeys with the support of
            knowledgeable mentors. Through hands-on experience and skill
            development in areas such as research, drafting, and case
            preparation, participants can deepen their understanding of the
            legal landscape.
            <br />
            <br />
            Moreover, the programme fosters connections with peers and mentors
            alike, creating an enriching environment for professional growth.
            Engaging in discussion and collaboration with fellow participants
            enhances learning and cultivates a sense of community within the
            legal profession.
            <br />
            <br />
            Join us in this journey of exploration and growth, as we support
            your aspirations in the legal field.
          </p>
        </div>
      </div>

      {/* Second Box */}
      <div
        className="flex flex-col mid:flex-row-reverse w-full mid:w-[92%] custom:w-[1144px] 
          mb-12 mid:mb-[120px] custom:mb-[120px] 
          gap-6 mid:gap-8 custom:gap-12 
          mid:items-start mid:justify-between"
      >
        <h2
          className="font-georgia font-normal mx-auto
          text-[20px] xs:text-[24px] mid:text-[32px] custom:text-[40px] 
          leading-tight xs:leading-[28px] mid:leading-[40px] custom:leading-[44px] 
          -tracking-[2%] text-[#1B2128] 
          text-center self-center mb-4 mid:mb-5"
        >
          Why Choose this
          <br className="hidden mid:block" /> Programme?
        </h2>

        <div className="px-4 mid:p-0 w-full mid:w-[48%] custom:w-[524px]">
          <p
            className="font-inter font-normal 
           text-[12px] xs:text-[14px] mid:text-[16px] custom:text-[20px] 
           leading-[18px] xs:leading-[21px] mid:leading-[24px] custom:leading-[28px] 
           text-gray-600 
           w-full text-justify"
          >
            Embark on a transformative journey of knowledge-sharing and
            networking by joining our mentorship program, guided by a
            distinguished Supreme Court lawyer. This initiative is more than
            just a learning experience; it's an opportunity to cultivate rich
            relationships within the legal community.
            <br />
            <br />
            Participants will benefit from the wisdom of a senior advocate,
            gaining profound insights into the intricacies of law while building
            connections that pave the way for future collaborations. Together,
            we aim to bridge the gap in the legal profession, fostering a
            culture of inclusivity and mentorship that empowers aspiring lawyers
            to thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUS;
