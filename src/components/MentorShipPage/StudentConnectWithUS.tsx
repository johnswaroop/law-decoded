import React from "react";
import Image from "next/image";
import PersonImage from "@/assets/About-team/sajanpoovayya.jpeg";

const StudentConnectWithUS = () => {
  return (
    <div className="flex flex-col items-center px-4 xs:px-[2%]">
      <h1 className="mt-[10.14px] xs:mt-[45.64px] mid:mt-[48.59px] lg:mt-[60.88px] custom:mt-[106.4px] 
         mb-4 xs:mb-[16px] mid:mb-[22px] custom:mb-[40px] 
         font-georgia font-normal 
         text-[32px] xs:text-[40px] custom:text-[100px] 
         leading-tight xs:leading-[48px] custom:leading-[120px] 
         -tracking-[2%] text-center text-[#1B2128] 
         w-full mid:w-[92%]">
        Find the right mentorship<br/> to advance your legal journey
      </h1>

    <Image
        src={PersonImage}
        alt="Sajan Poovayya with people"
        className="w-full xs:w-[342px] mid:w-[606px] custom:w-[1149px] 
          h-auto xs:h-[179.45px] mid:h-[304px] custom:h-[650px] 
          mb-16 xs:mb-[114.48px] custom:mb-[146px]
          object-cover object-[50%_52%] 
          rounded-[20px] shadow-md"
      />

      <div className="flex flex-col mid:flex-row w-full mid:w-[92%] custom:w-[1344px] 
          mb-16 mid:mb-[154px] custom:mb-[250px] 
          gap-6 mid:gap-8 custom:gap-16 
          mid:items-start mid:justify-between">
        <h2 className="font-georgia font-normal 
          text-[24px] xs:text-[28px] mid:text-[40px] custom:text-[48px] 
          leading-tight xs:leading-[33.41px] mid:leading-[48px] custom:leading-[52px] 
          -tracking-[2%] text-[#1B2128] 
          text-center mid:text-start">
          What is Mentorship Programme
        </h2>
        
        <div className="px-4 mid:p-0 w-full mid:w-[48%] custom:w-[624px]">
          <p className="font-outfit font-normal 
           text-[14px] xs:text-[16px] mid:text-[18px] custom:text-[24px] 
           leading-[20px] xs:leading-[24px] mid:leading-[27px] custom:leading-[32px] 
           text-[#1B2128] 
           w-full">
            The Sajan Poovayya Mentorship Programme for Law Students is an initiative aimed at providing aspiring legal professionals with practical insights and real-world experience. Led by distinguished Supreme Court lawyer Sajan Poovayya, the programme offers students the chance to observe and learn from a leading figure in the legal field. Participants will engage in internships where they can assist in case preparation and attend various court proceedings. This hands-on experience is designed to enhance their understanding of legal practice and courtroom procedures.
          </p>
        </div>
      </div>

    <div className="flex flex-col mid:flex-row-reverse w-full mid:w-[92%] custom:w-[1344px] 
          mb-16 mid:mb-[154px] custom:mb-[146px] 
          gap-6 mid:gap-8 custom:gap-16 
          mid:items-start mid:justify-between">
      <h2 className="font-georgia font-normal 
          text-[24px] xs:text-[28px] mid:text-[40px] custom:text-[48px] 
          leading-tight xs:leading-[33.41px] mid:leading-[48px] custom:leading-[52px] 
          -tracking-[2%] text-[#1B2128] 
          text-center mid:text-end
          w-full mid:w-[38%]">
        We aim to create the lawyers of tomorrow
      </h2>
      
      <div className="px-4 mid:p-0 w-full mid:w-[58%] custom:w-[724px]">
        <p className="font-outfit font-normal 
           text-[14px] xs:text-[16px] mid:text-[18px] custom:text-[24px] 
           leading-[20px] xs:leading-[24px] mid:leading-[27px] custom:leading-[32px] 
           text-[#1B2128] 
           w-full">
        In addition to practical work, students will benefit from mentorship sessions, receiving personalized guidance on their career development and academic journeys. The programme fosters a collaborative learning environment, encouraging students to ask questions and seek advice on navigating the complexities of the legal profession. Networking opportunities with legal experts and peers are a vital component, allowing students to build valuable connections for their future careers. Overall, the Sajan Poovayya Mentorship Programme serves as a crucial stepping stone for law students, equipping them with the skills and knowledge necessary for success in the legal field.
        </p>
      </div>
      </div>
    </div>
  );
};

export default StudentConnectWithUS;