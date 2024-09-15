import { BannerAboutMe } from "@/components/BannerAboutMe";
import Tecnologias from "../../components/Tecnologias";
import Certificados from "@/components/Certificados";

export default function Home() {
  return (
    <>
      <div className="backgroundNoiseLargo">
        <BannerAboutMe />
        <Tecnologias />
        <Certificados />
      </div>
    </>
  );
}
