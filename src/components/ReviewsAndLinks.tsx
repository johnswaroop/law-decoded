"use client";

import YouIcon from "@/assets/ReviewAndLinks/youtube.svg";
import WhatIacon from "@/assets/ReviewAndLinks/whatsapp.svg";
import Image from "next/image";

const ReviewsAndLinks = () => {
  const selectedVideos = [
    {
      title: "Understanding Constitutional Rights",
      url: "https://www.youtube.com/embed/gI-6Xtkh1Qw",
      duration: "15:24"
    },
    {
      title: "Criminal Procedure Explained",
      url: "https://www.youtube.com/embed/uXZSjs3K26c",
      duration: "22:10"
    },
    {
      title: "Is India ready for One Nation, One Election?",
      url: "https://www.youtube.com/embed/wE-5cZianYo",
      duration: "10:52"
    }
  ];

  return (
    <div className="w-full min-h-screen px-4 sm:px-5 lg:px-7 pt-24 lg:pt-32 pb-14 lg:pb-16">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Videos Section */}
        <div className="space-y-12 lg:space-y-16">
          <h2 className="text-center font-georgia text-3xl sm:text-4xl lg:text-5xl mb-[5.5rem]">
            Videos
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {selectedVideos.map((video, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="font-georgia text-sm xs:text-base sm:text-lg text-[#281D1B] mt-1.5">
                  {video.title}
                </h3>
                <p className="font-inter font-semibold text-xs xs:text-sm text-[#DD4826] -mt-1">
                  {video.duration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="space-y-12 lg:space-y-16 pt-12">
          <h2 className="text-center font-georgia text-3xl sm:text-4xl lg:text-5xl mb-12">
            Join our community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[10%] max-w-4xl mx-auto">
            {/* YouTube Box */}
            <div className="flex flex-col items-center p-10 lg:p-12 rounded-lg bg-white shadow-sm space-y-6">
              <Image
                src={YouIcon}
                alt="YouTube"
                width={48}
                height={48}
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
              <h3 className="font-inter font-semibold text-xl sm:text-2xl">
                Youtube
              </h3>
              <p className="font-inter text-center text-sm sm:text-base text-[#000000BF]">
                Subscribe to our Youtube channel to
                <br />
                watch more videos.
              </p>
            </div>

            {/* WhatsApp Box */}
            <div className="flex flex-col items-center p-10 lg:p-12 rounded-lg bg-white shadow-sm space-y-6">
              <Image
                src={WhatIacon}
                alt="WhatsApp"
                width={48}
                height={48}
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
              <h3 className="font-inter font-semibold text-xl sm:text-2xl">
                Whatsapp Community
              </h3>
              <p className="font-inter text-center text-sm sm:text-base text-[#000000BF]">
                Join our whatsapp community of daily
                <br />
                updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndLinks;
