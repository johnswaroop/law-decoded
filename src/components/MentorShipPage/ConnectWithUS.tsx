import React from "react";
import Image from "next/image";
import PersonImage from "@/assets/MentorPage/MentorPage.png";

const ConnectWithUS = () => {
  return (
    <>
      <div className="flex flex-col items-center px-[2%] ">
        <p className="mt-[72px] mb-[16px] font-georgia font-normal text-[40px] leading-[48px] -tracking-[2%] text-center text-[#1B2128] custom:mt-[121.25px] custom:mb-[40px] custom:text-[100px] custom:leading-[120px] custom:-tracking-[2%] md:mt-[156px] md:w-[92%] md:mb-[22px] ">
          Connect with Mentors to Advance Your Legal Journey
        </p>
        <Image
          src={PersonImage}
          alt="image"
          className="w-[342px] h-[179.45px] mb-[114.48px] custom:w-[1149px] custom:h-[574.5px] custom:mb-[146px] md:w-[606px] md:h-[304px]"
        />
        {/* First  box */}
        <div className="flex flex-col md:flex-row custom:w-[1344px] h-auto  md:items-start md:justify-between custom:mb-[250px] md:mb-[154px]  md:w-[92%]">
          {" "}
          <p className="font-georgia font-normal text-[28px] leading-[33.41px] -tracking-[2%] text-[#1B2128] mb-[24px]  text-start custom:text-[48px] custom:leading-[52px] custom:m-0 md:text-[25px] md:leading-[27px] max-md:text-center ">
            What is the Mentorship Programme?
          </p>
          <div className="flex justify-start w-full px-[24px] md:p-0 mb-[114.48px] md:mb-0 custom:w-[624px] custom:p-0 md:w-[48%] max-md:justify-center">
            <p className=" font-outfit font-normal text-[16px] leading-[20.56px] text-[#1B2128] w-[255px] custom:text-[24px] custom:leading-[32px] md:w-full custom:text-justify md:text-[12px] md:leading-[16px] text-justify">
              The Mentorship Programme invites you to explore the intricacies of
              the legal field through the guidance of experienced legal
              professionals. Participants will have the opportunity to engage in
              meaningful work, gaining practical insights into the day-to-day
              realities of legal practice.
              <br />
              <br /> This programme aims to provide tailored mentorship,
              allowing young lawyers to navigate their career journeys with the
              support of knowledgeable mentors. Through hands-on experience and
              skill development in areas such as research, drafting, and case
              preparation, participants can deepen their understanding of the
              legal landscape. <br />
              <br /> Moreover, the programme fosters connections with peers and
              mentors alike, creating an enriching environment for professional
              growth. Engaging in discussion and collaboration with fellow
              participants enhances learning and cultivates a sense of community
              within the legal profession. <br />
              <br /> Join us in this journey of exploration and growth, as we
              support your aspirations in the legal field
            </p>
          </div>
        </div>

        {/* Secong Box */}
        <div className="flex flex-col mb-[114.48px] md:flex-row-reverse  custom:w-[1344px] custom:h-[288px]  md:items-start md:justify-between custom:mb-[146px] md:w-[92%]">
          {" "}
          <p className="font-georgia font-normal text-[28px] leading-[33.41px] -tracking-[2%] text-[#1B2128] mb-[24px]  text-end custom:text-[48px] custom:leading-[52px] custom:m-0  max-md:text-center ">
            Why Choose this
            <br className="max-md:hidden" /> Programme?
          </p>
          <div className="flex justify-end w-full px-[24px] md:w-[46%]  custom:w-[624px] custom:h-full md:p-0 max-md:justify-center">
            <p className=" font-outfit font-normal text-[16px] leading-[20.56px] text-[#1B2128] w-[255px]  custom:text-[24px] custom:leading-[32px] md:w-full custom:text-justify custom:h-full md:text-[12px] md:leading-[16px] text-justify">
              Embark on a transformative journey of knowledge-sharing and
              networking by joining our mentorship program, guided by a
              distinguished Supreme Court lawyer. This initiative is more than
              just a learning experience; it&apos;s an opportunity to cultivate
              rich relationships within the legal community. <br />
              <br /> Participants will benefit from the wisdom of a senior
              advocate, gaining profound insights into the intricacies of law
              while building connections that pave the way for future
              collaborations. Together, we aim to bridge the gap in the legal
              profession, fostering a culture of inclusivity and mentorship that
              empowers aspiring lawyers to thrive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWithUS;
