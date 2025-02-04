"use client";
import React, { useEffect, useState } from "react";
import { InstagramEmbed, XEmbed } from "react-social-media-embed";

interface SocialMediaLinks {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

const AboutSajan: React.FC = () => {
  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLinks | null>(null);

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
      <div className="w-full min-h-[600px] flex justify-center items-center bg-background">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-solid"></div>
          <p className="mt-4 text-muted-foreground font-outfit text-lg">
            Loading social media links...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full px-4 xs:px-6 sm:px-8 mid:px-10 lg:px-0 py-12 bg-background">
      <div className="max-w-[1025px] mx-auto">
        <h2 className="text-2xl xs:text-[28px] sm:text-[32px] mid:text-[34px] custom:text-[40px] 
                       font-georgia font-bold 
                       leading-tight 
                       text-center text-foreground
                       mb-8 sm:mb-12 custom:mb-16">
          Our Social Media
        </h2>

        <div className="grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {socialMediaLinks.instagram && (
            <div className="w-full xs:w-[324px] h-[610px] bg-card rounded-lg shadow-md overflow-hidden">
              <InstagramEmbed
                url={socialMediaLinks.instagram}
                width="100%"
              />
            </div>
          )}

          {socialMediaLinks.twitter && (
            <div className="w-full xs:w-[324px] h-[610px] bg-card rounded-lg shadow-md overflow-hidden">
              <XEmbed
                url={socialMediaLinks.twitter}
                width="100%"
                className="h-full"
              />
            </div>
          )}

          {socialMediaLinks.linkedin && (
            <div className="w-full xs:w-[324px] h-[610px] bg-card rounded-lg shadow-md overflow-hidden">
              <iframe
                src={socialMediaLinks.linkedin}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="LinkedIn Embedded Post"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSajan;
