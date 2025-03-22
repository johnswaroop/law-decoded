import React from "react";
import Image from "next/image";
import YouIcon from "@/assets/ReviewAndLinks/youtube.svg";

const StudentConnectWithUS = () => {
  return (
    <div className="flex flex-col items-center px-4 xs:px-[2%]">
      <h1
        className="mt-[10.14px] xs:mt-[45.64px] mid:mt-[48.59px] lg:mt-[60.88px] custom:mt-[80px] 
         mb-4 xs:mb-[16px] mid:mb-[22px] custom:mb-[32px] 
         font-georgia font-normal 
         text-[24px] xs:text-[32px] mid:text-[48px] custom:text-[72px] 
            leading-[1.1]   custom:leading-[86px] 
         -tracking-[2%] text-center text-[#1B2128] 
         w-full mid:w-[92%]"
      >
        Find the right mentorship to advance
        <br /> your legal journey
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
          mid:items-center mid:justify-between"
      >
        <h2
          className="font-georgia font-normal 
          text-[20px] xs:text-[24px] mid:text-[32px] custom:text-[40px] 
          leading-tight xs:leading-[28px] mid:leading-[40px] custom:leading-[44px] 
          -tracking-[2%] text-[#1B2128] 
          text-center self-center mx-auto"
        >
          What is the Mentorship<br></br>Programme?
        </h2>

        <div className="px-4 mid:p-0 w-full mid:w-[48%] custom:w-[524px]">
          <p
            className="font-inter font-normal 
           text-[12px] xs:text-[14px] mid:text-[16px] custom:text-[20px] 
           leading-[18px] xs:leading-[21px] mid:leading-[24px] custom:leading-[28px] 
           text-gray-600 
           w-full text-justify"
          >
            The Sajan Poovayya Mentorship Programme for Law Students is an
            initiative aimed at providing aspiring legal professionals with
            practical insights and real-world experience. Led by distinguished
            Supreme Court lawyer Sajan Poovayya, the programme offers students
            the chance to observe and learn from a leading figure in the legal
            field. Participants will engage in internships where they can assist
            in case preparation and attend various court proceedings. This
            hands-on experience is designed to enhance their understanding of
            legal practice and courtroom procedures.
          </p>
        </div>
      </div>

      {/* Second box */}
      <div
        className="flex flex-col mid:flex-row-reverse w-full mid:w-[92%] custom:w-[1144px] 
          mb-12 mid:mb-[120px] custom:mb-[120px] 
          gap-6 mid:gap-8 custom:gap-12 
          mid:items-center mid:justify-between"
      >
        <h2
          className="font-georgia font-normal 
          text-[20px] xs:text-[24px] mid:text-[32px] custom:text-[40px] 
          leading-tight xs:leading-[28px] mid:leading-[40px] custom:leading-[44px] 
          -tracking-[2%] text-[#1B2128] 
          text-center self-center 
          mb-4 mid:mb-0 mx-auto"
        >
          We aim to create
          <br /> the lawyers of tomorrow
        </h2>

        <div className="px-4 mid:p-0 w-full mid:w-[48%] custom:w-[524px]">
          <p
            className="font-inter font-normal 
           text-[12px] xs:text-[14px] mid:text-[16px] custom:text-[20px] 
           leading-[18px] xs:leading-[21px] mid:leading-[24px] custom:leading-[28px] 
           text-gray-600 
           w-full text-justify"
          >
            In addition to practical work, students will benefit from mentorship
            sessions, receiving personalized guidance on their career
            development and academic journeys. The programme fosters a
            collaborative learning environment, encouraging students to ask
            questions and seek advice on navigating the complexities of the
            legal profession. Networking opportunities with legal experts and
            peers are a vital component, allowing students to build valuable
            connections for their future careers. Overall, the Sajan Poovayya
            Mentorship Programme serves as a crucial stepping stone for law
            students, equipping them with the skills and knowledge necessary for
            success in the legal field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentConnectWithUS;
