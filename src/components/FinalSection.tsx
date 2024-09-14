import imgFinalDesk from "../assets/images/formaDesk.svg";
import imgFinalmobile from "../assets/images/imgFinal.svg";
import Image from "next/image";
const FinalSection = () => {
  return (
    <div className="BackgroundNoise flex flex-col sm:flex-row px-[20px] lg:px-[100px] 2xl:px-[150px] mb-[80px] items-center py-16">
      <Image src={imgFinalmobile} alt="forma decorativa" className=" -mt-10 lg:hidden" />
      <Image src={imgFinalDesk} alt="forma decorativa" className=" -mt-10 hidden lg:block" />

      <h5 className="text-[20px] lg:text-[24px]">Si quieres saber más sobre mí, mis habilidades y mis experiencias, puedes escribirme un correo o visitar mi perfil de Linkedin. Me encanta crear soluciones web innovadoras y eficientes.  😊😊</h5>
    </div>
  );
};

export default FinalSection;
