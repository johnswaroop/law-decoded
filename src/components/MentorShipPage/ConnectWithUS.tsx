import React from "react";
import Image from "next/image";
import PersonImage from "@/assets/MentorPage/MentorPage.png";

const ConnectWithUS = () => {
  return (
    <div className="flex flex-col items-center px-4 xs:px-[2%]">
      <h1 className="mt-16 xs:mt-[72px] mid:mt-[156px] custom:mt-[121.25px] 
                     mb-4 xs:mb-[16px] mid:mb-[22px] custom:mb-[40px] 
                     font-georgia font-normal 
                     text-[32px] xs:text-[40px] custom:text-[100px] 
                     leading-tight xs:leading-[48px] custom:leading-[120px] 
                     -tracking-[2%] text-center text-[#1B2128] 
                     w-full mid:w-[92%]">
        Connect with Mentors to Advance Your Legal Journey
      </h1>

      <Image
        src={PersonImage}
        alt="image"
        className="w-full xs:w-[342px] mid:w-[606px] custom:w-[1149px] 
                   h-auto xs:h-[179.45px] mid:h-[304px] custom:h-[574.5px] 
                   mb-16 xs:mb-[114.48px] custom:mb-[146px]"
      />

      {/* First box */}
      <div className="flex flex-col mid:flex-row w-full mid:w-[92%] custom:w-[1344px] 
                      mb-16 mid:mb-[154px] custom:mb-[250px] 
                      gap-6 mid:gap-8 custom:gap-16 
                      mid:items-start mid:justify-between">
        <h2 className="font-georgia font-normal 
                      text-[24px] xs:text-[28px] mid:text-[25px] custom:text-[48px] 
                      leading-tight xs:leading-[33.41px] mid:leading-[27px] custom:leading-[52px] 
                      -tracking-[2%] text-[#1B2128] 
                      text-center mid:text-start">
          What is the Mentorship Programme?
        </h2>
        
        <div className="px-4 mid:p-0 w-full mid:w-[48%] custom:w-[624px]">
          <p className="font-outfit font-normal 
                       text-[14px] xs:text-[16px] mid:text-[18px] custom:text-[24px] 
                       leading-[20px] xs:leading-[24px] mid:leading-[27px] custom:leading-[32px] 
                       text-[#1B2128] 
                       w-full">
            The Mentorship Programme invites you to explore the intricacies of
            the legal field through the guidance of experienced legal
            professionals. Participants will have the opportunity to engage in
            meaningful work, gaining practical insights into the day-to-day
            realities of legal practice.
            <br /><br />
            This programme aims to provide tailored mentorship,
            allowing young lawyers to navigate their career journeys with the
            support of knowledgeable mentors. Through hands-on experience and
            skill development in areas such as research, drafting, and case
            preparation, participants can deepen their understanding of the
            legal landscape.
            <br /><br />
            Moreover, the programme fosters connections with peers and
            mentors alike, creating an enriching environment for professional
            growth. Engaging in discussion and collaboration with fellow
            participants enhances learning and cultivates a sense of community
            within the legal profession.
            <br /><br />
            Join us in this journey of exploration and growth, as we
            support your aspirations in the legal field
          </p>
        </div>
      </div>

      {/* Second Box */}
      <div className="flex flex-col mid:flex-row-reverse w-full mid:w-[92%] custom:w-[1344px] 
                      mb-16 mid:mb-[154px] custom:mb-[146px] 
                      gap-6 mid:gap-8 custom:gap-16 
                      mid:items-start mid:justify-between">
        <h2 className="font-georgia font-normal 
                      text-[24px] xs:text-[28px] mid:text-[25px] custom:text-[48px] 
                      leading-tight xs:leading-[33.41px] mid:leading-[27px] custom:leading-[52px] 
                      -tracking-[2%] text-[#1B2128] 
                      text-center mid:text-end">
          Why Choose this
          <br className="hidden mid:block" /> Programme?
        </h2>
        
        <div className="px-4 mid:p-0 w-full mid:w-[48%] custom:w-[624px]">
          <p className="font-outfit font-normal 
                       text-[14px] xs:text-[16px] mid:text-[18px] custom:text-[24px] 
                       leading-[20px] xs:leading-[24px] mid:leading-[27px] custom:leading-[32px] 
                       text-[#1B2128] 
                       w-full">
            Embark on a transformative journey of knowledge-sharing and
            networking by joining our mentorship program, guided by a
            distinguished Supreme Court lawyer. This initiative is more than
            just a learning experience; it&apos;s an opportunity to cultivate
            rich relationships within the legal community.
            <br /><br />
            Participants will benefit from the wisdom of a senior
            advocate, gaining profound insights into the intricacies of law
            while building connections that pave the way for future
            collaborations. Together, we aim to bridge the gap in the legal
            profession, fostering a culture of inclusivity and mentorship that
            empowers aspiring lawyers to thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUS;
