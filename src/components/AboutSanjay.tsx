"use client";
import React, { useEffect, useState } from "react";
import { InstagramEmbed, XEmbed } from "react-social-media-embed";

interface SocialMediaLinks {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
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
        setSocialMediaLinks(data);
      } catch (error) {
        console.error("Error fetching social media links:", error);
      }
    };

    fetchLinks();
  }, []);

  if (!socialMediaLinks) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
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
    <div className="w-full px-4 xs:px-6 sm:px-8 mid:px-10 lg:px-0">
      <div className="max-w-[1025px] mx-auto">
        <h2 className="text-2xl xs:text-[28px] sm:text-[32px] mid:text-[21.2px] custom:text-[40px] 
                       font-georgia font-normal 
                       leading-tight xs:leading-[40px] sm:leading-[50px] mid:leading-[26.5px] custom:leading-[50px]
                       text-center
                       mb-6 xs:mb-8 sm:mb-[35px] custom:mb-[87px]
                       mid:-tracking-[0.53px]">
          Our Social Media
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start lg:justify-center">
          {socialMediaLinks.instagram && (
            <div className="w-full xs:w-[324px] h-[530px]">
              <InstagramEmbed 
                url={socialMediaLinks.instagram}
                width="100%"
              />
            </div>
          )}
          
          {socialMediaLinks.twitter && (
            <div className="w-full xs:w-[324px] h-[530px]">
              <XEmbed
                url={socialMediaLinks.twitter}
                width="100%"
                className="border-[1px] rounded-none h-full"
              />
            </div>
          )}
          
          {socialMediaLinks.linkedin && (
            <iframe
              src={socialMediaLinks.linkedin}
              className="w-full xs:w-[324px] h-[530px] border-[1px] rounded-md shadow-md"
              frameBorder="0"
              allowFullScreen
              title="LinkedIn Embedded Post"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSanjay;
