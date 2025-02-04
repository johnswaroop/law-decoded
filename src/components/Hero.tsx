import Image from "next/image";
import OwlImage from "@/assets/Hero/Mask-group.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full mb-[3.5%] sm:mb-[4.275%] mid:mb-[5.13%] custom:mb-[6.6%] max-w-[1920px] mx-auto">
      {/* Owl Image */}
      <div className="relative flex justify-center items-end min-h-[250px] h-[40vh] xs:h-[30vh] sm:h-[22vh] mid:h-[23vh] lg:h-[24vh] custom:h-[26vh] mt-0 sm:mt-[-15%] mid:mt-[-5%] custom:mt-[2%] 2xl:mt-[2%] xs:mt-[-20%] xxs:mt-[-35%] mb-[-1.62%] pointer-events-none">
        <div className="relative w-[100px] xs:w-[140px] sm:w-[150px] mid:w-[160px] lg:w-[180px] custom:w-[200px] h-[133px] xs:h-[186px] sm:h-[200px] mid:h-[213px] lg:h-[240px] custom:h-[266px] select-none">
          <Image
            src={OwlImage}
            alt="Owl"
            fill
            className="object-contain select-none"
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            draggable="false"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center w-[90%] xs:w-[85%] sm:w-[80%] mid:w-[75%] lg:w-[70%] mx-auto">
        <div className="max-w-[80%] mx-auto flex flex-col gap-[5.5%] sm:gap-[6.5%] mid:gap-[7.5%] custom:gap-[25px]">
          {/* Heading */}
          <h1 className="font-georgia text-center text-[2rem] xs:text-[2.25rem] sm:text-[2.625rem] mid:text-[3rem] lg:text-[3.75rem] custom:text-[5rem] leading-[1.035] -tracking-[0.125rem] sm:-tracking-[0.1875rem] custom:-tracking-[0.25rem]">
            Declutter the Maze of Law{" "}
            <br className="hidden sm:block" /> with Sajan Poovayya
          </h1>

          {/* Quote */}
          <p className="font-inter italic text-center text-[0.75rem] xs:text-[0.8125rem] sm:text-[0.875rem] mid:text-[0.9375rem] lg:text-[1rem] custom:text-[1.125rem] leading-[1.6] -tracking-[0.00625rem] custom:-tracking-[0.0125rem] text-[#000000BF]">
            &quot;Law as a subject or law as a profession is not just for the
            privileged. We dejargonise law,
            <br className="hidden lg:block" /> make legal studies accessible,
            reducing systemic barriers.&quot; -SP
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/about-us"
          className="mt-[1%] sm:mt-[2%] mid:mt-[3%] custom:mt-[4%] bg-[#DD4826] text-white font-inter font-medium px-6 py-2.5 xs:py-3 mid:py-3.5 text-center hover:bg-[#c13816] transition-colors inline-block"
        >
          <span className="text-[0.875rem] xs:text-[0.9375rem] sm:text-[1rem] whitespace-nowrap">
            Know More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
