import AboutSanjay from "@/components/AboutSanjay";
import AboutSection from "@/components/AboutSection";
import EfficientModel from "@/components/EfficientModel";
import Hero from "@/components/Hero";
import ILinkeBeing from "@/components/ILinkeBeing";
import LawDecoded from "@/components/LawDecoded";
import MentorshipForum from "@/components/MentorshipForum";
import ReviewsAndLinks from "@/components/ReviewsAndLinks";
import WhiteBox from "@/components/WhiteBox";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <EfficientModel />
      <LawDecoded />
      <AboutSanjay />
      <WhiteBox />
      <ILinkeBeing />
      <ReviewsAndLinks />
      <MentorshipForum />
    </>
  );
}
