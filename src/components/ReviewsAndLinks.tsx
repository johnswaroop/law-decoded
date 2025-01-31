"use client";

import YouIcon from "@/assets/ReviewAndLinks/youtube.svg";
import WhatIacon from "@/assets/ReviewAndLinks/whatsapp.svg";
import VideoImg1 from "@/assets/ReviewAndLinks/videoImage1.png";
import VideoImg2 from "@/assets/ReviewAndLinks/videoImage2.png";
import VideoImg3 from "@/assets/ReviewAndLinks/VideoImage3.png";
import Image from "next/image";

const ReviewsAndLinks = () => {
  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Videos Section */}
        <h2 className="text-center font-georgia text-3xl sm:text-4xl lg:text-5xl mt-8 sm:mt-12 lg:mt-16 mb-6 sm:mb-8 lg:mb-12">
          Videos
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { img: VideoImg1, title: "Why marital rape is still not a crime in India", duration: "12 Mins" },
            { img: VideoImg2, title: "Juniors deserve better", duration: "12 Mins" },
            { img: VideoImg3, title: "Alcohol ban in India?", duration: "14 Mins" },
          ].map((video, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full aspect-video">
                <Image
                  src={video.img}
                  alt={video.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-georgia text-base sm:text-lg mt-3 text-[#281D1B]">
                {video.title}
              </h3>
              <p className="font-inter font-semibold text-sm text-[#DD4826]">
                {video.duration}
              </p>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <h2 className="text-center font-georgia text-3xl sm:text-4xl lg:text-5xl mt-16 sm:mt-20 lg:mt-24 mb-8">
          Join our community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* YouTube Box */}
          <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-sm">
            <Image
              src={YouIcon}
              alt="YouTube"
              width={48}
              height={48}
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <h3 className="font-inter font-semibold text-xl sm:text-2xl mt-4 mb-2">
              Youtube
            </h3>
            <p className="font-inter text-center text-sm sm:text-base text-[#000000BF]">
              Subscribe to our Youtube channel to
              <br />
              watch more videos.
            </p>
          </div>

          {/* WhatsApp Box */}
          <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-sm">
            <Image
              src={WhatIacon}
              alt="WhatsApp"
              width={48}
              height={48}
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <h3 className="font-inter font-semibold text-xl sm:text-2xl mt-4 mb-2">
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
  );
};

export default ReviewsAndLinks;
