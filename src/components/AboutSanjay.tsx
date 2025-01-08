"use client";
import React, { useEffect, useState } from "react";
import { InstagramEmbed, XEmbed } from "react-social-media-embed";

interface SocialMediaLinks {
  twitter?: string;
  instagram?: string;
  linkedin?: string; // Fixed to match the JSON property
}

const AboutSanjay: React.FC = () => {
  const [socialMediaLinks, setSocialMediaLinks] =
    useState<SocialMediaLinks | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch(`${process.env.API}/links`);
        if (!response.ok) {
          throw new Error("Failed to fetch social media links");
        }
        const data: SocialMediaLinks = await response.json();
        console.log({ data });
        setSocialMediaLinks(data); // Assuming the API returns an array
      } catch (error) {
        console.error("Error fetching social media links:", error);
      }
    };

    fetchLinks();
  }, []);

  if (!socialMediaLinks) {
    return (
      <div className="w-full flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Loading social media links...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center custom:w-[1025px] custom:mx-auto md:h-auto">
      <p className="text-[32px] font-georgia font-normal leading-[50px] mb-[35px] custom:text-[40px] custom:mb-[87px] md:text-[21.2px] md:leading-[26.5px] md:-tracking-[0.53px] custom:leading-[50px]">
        Our Social Media
      </p>
      <div className="flex gap-4 max-[1040px]:flex-col">
        {socialMediaLinks.instagram && (
          <InstagramEmbed url={socialMediaLinks.instagram} />
        )}
        {socialMediaLinks.twitter && (
          <XEmbed
            className="w-[324px] h-[530px] border-[1px] rounded-none"
            url={socialMediaLinks.twitter}
          />
        )}
        {socialMediaLinks.linkedin && (
          <iframe
            src={socialMediaLinks.linkedin}
            width="324"
            height="530"
            className="border-[1px] rounded-md shadow-md"
            frameBorder="0"
            allowFullScreen
            title="LinkedIn Embedded Post"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default AboutSanjay;
