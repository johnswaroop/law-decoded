// import AboutSanjay from "@/components/AboutSanjay";
import AboutSection from "@/components/AboutSection";
import EfficientModel from "@/components/EfficientModel";
import Hero from "@/components/Hero";
import ILinkeBeing from "@/components/ILinkeBeing";
import LawDecoded from "@/components/LawDecoded";
import MentorshipForum from "@/components/MentorshipForum";
import ReviewsAndLinks from "@/components/ReviewsAndLinks";
import WhiteBox from "@/components/WhiteBox";
import DisclaimerModal from "@/components/Disclaimer";

export default function Home() {
  return (
    //checking
    <>
      <DisclaimerModal />
      <Hero />
      <AboutSection />
      <EfficientModel />
      <LawDecoded />
      {/* <AboutSanjay /> */}
      <WhiteBox />
      <ILinkeBeing />
      <ReviewsAndLinks />
      <MentorshipForum />
    </>
  );
}
