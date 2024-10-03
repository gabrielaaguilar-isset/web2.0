import imgFinalDesk from "../assets/images/formaDesk.svg";
import imgFinalmobile from "../assets/images/imgFinal.svg";
import Image from "next/image";
const FinalSection = () => {
  return (
<<<<<<< HEAD
    <div className="BackgroundNoise flex flex-col sm:flex-row px-[20px] lg:px-[100px] 2xl:px-[150px] mb-10 items-center py-16 ">
=======
    <div className="BackgroundNoise ">
      <div className="max-w-[1920px] m-auto flex flex-col sm:flex-row px-[20px] lg:px-[100px] 2xl:px-[150px] mb-10 items-center py-16 ">
>>>>>>> 433c992611cfeeb185e4d50809121962aeed34d9
      <Image src={imgFinalmobile} alt="forma decorativa" className=" -mt-10 lg:hidden" />
      <Image src={imgFinalDesk} alt="forma decorativa" className=" -mt-10 hidden lg:block lg:mr-10" />

      <h5 className="text-[20px] lg:text-[24px]">Si estás buscando soluciones web innovadoras y personalizadas, estoy aquí para hacer realidad tus ideas. No dudes en escribirme un correo o visitar mi perfil de LinkedIn. ¡Hagamos que tu proyecto sea un éxito! 😊😊</h5>
      </div>

    </div>
  );
};

export default FinalSection;
