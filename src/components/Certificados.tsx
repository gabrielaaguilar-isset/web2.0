
import CertificadosSlider from './CertificadosSlider';
import { Subtitles } from "./Subtitles";
import Titles from "./Titles";

const Certificados = () => {
  return (
    <div className="mb-[100px] mx-[20px] lg:px-[100px] 2xl:px-[150px] pb-10 ">
      <div className=" flex flex-col lg:flex-row    lg:gap-44 lg:justify-between ">
        <div className="max-w-[207px] lg:max-w-[277px]">
          <Titles text="Certificados" customClass="text-left" />
        </div>
        <div className=" ">
          <Subtitles
            text="Cada certificado refleja mi compromiso con la excelencia y mi dedicación al aprendizaje continuo. Estas acreditaciones garantizan mis habilidades y conocimientos en las tecnologías y herramientas clave del desarrollo web."
            customClass="leading-[171%] text-black mt-2 lg:max-w-[838px]"
          />
        </div>
      </div>
      <CertificadosSlider />
    </div>
  );
};

export default Certificados;
