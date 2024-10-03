import AboutMeSectionD from "@/components/AboutMeSectionD";
import AboutMeSection from "@/components/AboutMeSection";
import Banner from "@/components/Banner";
import WorkExperiencie from "@/components/WorkExperiencie";
import { Portfolio } from "@/components/Portfolio";
import FinalSection from "@/components/FinalSection";

export default function Home() {
  return (
    <>
  
      <Banner />
      <AboutMeSection />
      <AboutMeSectionD />
      <WorkExperiencie />
      <Portfolio />
      <FinalSection />
    </>
  );
}
