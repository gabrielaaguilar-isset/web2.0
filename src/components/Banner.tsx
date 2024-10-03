import Image from "next/image";
import soy from "../assets/images/soy.svg";

const Banner = () => {
  return (
    <div className="MainBanner min-h-[437px] flex flex-col items-center justify-center px-[20px] lg:min-h-[670px] lg:rounded-b-[55px] ">
      <div className="flex justify-start w-full flex-col relative max-w-[384px] lg:max-w-[794px]">
        <Image
          src={soy}
          alt="imagen de un texto en cursiva que dice soy"
          className="text-left mt-7 w-10 h-auto absolute -top-11 left-2 lg:left-16"
        />
        <h1 className="font-semibold text-white text-center text-4xl z-20 lg:text-[72px]  lg:leading-[98%] animate__animated animate__bounce">
          Gabriela Aguilar
          <span className="text-yellow"> - Frontend Developer</span>
        </h1>
      </div>

      <div className=" max-w-[425px] lg:max-w-[525px]">
        <h3 className="font-medium text-white text-center text- mt-2">
          ¡Bienvenido/a a mi sitio web! Aquí podrás descubrir mis proyectos
          digitales, las paginas web que he hecho y mis habilidades
        </h3>
      </div>
    </div>
  );
};

export default Banner;
