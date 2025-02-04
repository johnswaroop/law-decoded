import React from "react";

const page = () => {
  const videos = [
    {
      category: "Constitutional Law",
      items: [
        {
          title: "Understanding Constitutional Rights",
          url: "https://www.youtube.com/embed/gI-6Xtkh1Qw",
          duration: "15:24"
        },
        {
          title: "Fundamental Rights Deep Dive",
          url: "https://www.youtube.com/embed/8LLgnVAFqx4",
          duration: "18:45"
        },
        {
          title: "Right to Freedom of Religion",
          url: "https://www.youtube.com/embed/jnR0OMVFIpA",
          duration: "16:32"
        }
      ]
    },
    {
      category: "Criminal Law",
      items: [
        {
          title: "Criminal Procedure Explained",
          url: "https://www.youtube.com/embed/uXZSjs3K26c",
          duration: "22:10"
        },
        {
          title: "Understanding Criminal Justice",
          url: "https://www.youtube.com/embed/EcraoHltwCI",
          duration: "20:15"
        },
        {
          title: "IPC Section 498A Explained",
          url: "https://www.youtube.com/embed/IsGC9IIm8Os",
          duration: "17:45"
        }
      ]
    },
    {
      category: "Civil Law",
      items: [
        {
          title: "Civil Rights and Procedures",
          url: "https://www.youtube.com/embed/AXSaOUGauhI",
          duration: "16:30"
        },
        {
          title: "Property Law Fundamentals",
          url: "https://www.youtube.com/embed/2DLZwqMXdS0",
          duration: "19:45"
        },
        {
          title: "Is India ready for One Nation, One Election?",
          url: "https://www.youtube.com/embed/wE-5cZianYo",
          duration: "10:52"
        }        
      ]
    }
  ];

  const formatDuration = (duration: string) => {
    const [minutes] = duration.split(":");
    return (
      <span className="text-orange-500 font-inter text-xs">
        {minutes} mins
      </span>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <div className="w-full px-4 xs:px-6 sm:px-8 mid:px-10 lg:px-0 max-w-[1025px] mx-auto py-8 xs:py-10 sm:py-12">
        <header className="mb-8 xs:mb-10 sm:mb-12">
          <h1 className="text-2xl xs:text-[28px] sm:text-[32px] mid:text-[36px] custom:text-[40px] 
                         font-georgia font-normal 
                         leading-tight tracking-tight mid:-tracking-[0.53px]
                         text-foreground">
            Legal Education Videos
          </h1>
          <p className="mt-3 xs:mt-4 
                       text-base xs:text-lg sm:text-xl 
                       text-muted-foreground font-inter">
            Explore our curated collection of legal educational content
          </p>
        </header>

        <section className="grid gap-10 sm:gap-12">
          {videos.map((category, index) => (
            <div key={index} className="space-y-5 sm:space-y-6">
              <h2 className="text-xl xs:text-2xl sm:text-[28px] 
                           font-georgia font-normal
                           leading-tight tracking-tight
                           text-foreground">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 gap-5 sm:gap-6 
                            mid:grid-cols-2 lg:grid-cols-3">
                {category.items.map((video, videoIndex) => (
                  <article 
                    key={videoIndex} 
                    className="rounded-lg border bg-card 
                             shadow-sm hover:shadow-md
                             transition-all duration-300
                             flex flex-col h-full
                             overflow-hidden"
                  >
                    <div className="relative aspect-video bg-muted">
                      <iframe 
                        className="absolute inset-0 h-full w-full"
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-georgia text-base sm:text-lg
                                   leading-tight
                                   text-foreground
                                   line-clamp-2 mb-auto">
                        {video.title}
                      </h3>
                      <div className="mt-3 flex items-center">
                        {formatDuration(video.duration)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default page;
