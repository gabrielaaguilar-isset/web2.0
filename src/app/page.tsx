import AboutMeSectionD from "@/components/AboutMeSectionD";
import AboutMeSection from "@/components/AboutMeSection";
import Banner from "@/components/Banner";
import WorkExperiencie from "@/components/WorkExperiencie";
import { PortfolioSection } from "@/components/PortfolioSection";

export default function Home() {
  return (
   <>
      <Banner />
      <AboutMeSection />
      <AboutMeSectionD />
      <WorkExperiencie />
      
      <PortfolioSection />
   </>
  );
}
