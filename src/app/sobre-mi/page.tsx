import { BannerAboutMe } from "@/components/BannerAboutMe";
import Tecnologias from "../../components/Tecnologias";
import Certificados from "@/components/Certificados";
import FinalSection from "@/components/FinalSection";
import WorkExperiencie from "@/components/WorkExperiencie";

export default function Home() {
  return (
    <>
      <div className="backgroundNoiseLargo">
        <BannerAboutMe />
        <Tecnologias />
        <Certificados />
      </div>
      <WorkExperiencie />
      <FinalSection />
    </>
  );
}
