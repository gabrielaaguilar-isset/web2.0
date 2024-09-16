import Image from "next/image";
import soy from "../assets/images/soy.svg";
import miFoto from "../assets/images/mi-imagen.svg";
export const BannerAboutMe = () => {
  return (
    <>
      <div className="backgroundAboutMe min-h-[750px] flex items-center flex-col px-[20px] lg:px-[100px] 2xl:px-[150px] lg:flex-row lg:justify-between ">
        <div className="flex justify-start w-full flex-col relative max-w-[384px] lg:max-w-[794px] mt-64 lg:mt-0  ">
          <Image
            src={soy}
            alt="imagen de un texto en cursiva que dice soy"
            className="text-left mt-7 w-10 h-auto absolute -top-11 -left-4 lg:-left-2 lg:-top-9"
          />
          <h1 className="font-semibold text-white  text-4xl z-20 lg:text-[72px] leading-[97%]   sm:text-center lg:text-left">
            Gabriela Aguilar
            <span className="text-yellow"> - Frontend Developer</span>
          </h1>
        </div>

        <Image src={miFoto} alt="mi imagen" className="w-80 lg:mt-24 lg:w-96" />
      </div>

      <div className="flex max-w-[924px] m-auto px-[20px] 2xl:max-w-[1024px]">
        <h4 className="text-black/80 font-semibold text-[18px] lg:text-[20px] leading-[160%] lg:ml-24 mb-7">
        Soy desarrolladora web con más de 3 años de experiencia en la creación de sitios dinámicos y funcionales. Tengo formación como Técnico Superior Universitario en Informática, lo que me ha dado una base sólida para especializarme en tecnologías como WordPress, React, Next.js, CSS, Tailwind, TypeScript, Photoshop y Figma. Con un nivel intermedio de inglés y un enfoque en el aprendizaje continuo, me mantengo actualizada con las últimas tendencias tecnológicas, buscando siempre ofrecer soluciones optimizadas y superando las expectativas de mis clientes.
        </h4>
      </div>

       
    </>
  );
};
