"use client";
import { useState } from "react";
import react from "../assets/icons/react.svg";
import wordpress from "../assets/icons/wordpress.svg";
import nextJs from "../assets/icons/nextjs.svg";
import typeScript from "../assets/icons/typescript.svg";
import tailwind from "../assets/icons/tailwind.svg";
import mongoDb from "../assets/icons/mongodb.svg";
import photoshop from "../assets/icons/photshop.svg";
 
import figma from "../assets/icons/figma.svg";
import Image from "next/image";
import arrowRight from "../assets/icons/arrow-right.svg";


const logos = [
  { alt: "logo wordpress", url: wordpress },
  { alt: "logo react", url: react },
  { alt: "logo next js", url: nextJs },
  { alt: "logo typescript", url: typeScript },
  { alt: "logo tailwind", url: tailwind },
  { alt: "logo figma", url: figma },
  { alt: "logo mongo db", url: mongoDb },
  { alt: "logo photoshop", url: photoshop },
];

const services = [
  { servicio: "Paginas Web" },
  { servicio: "Tiendas Virtuales" },
  { servicio: "Landing Page" },
  { servicio: "Mantenimiento" },
  { servicio: "SEO" },
  { servicio: "Flyers" },
  { servicio: "Community Manager" },
  { servicio: "Content Manager" },
];

const AboutMeSectionD = () => {
  const [activeTab, setActiveTab] = useState("habilidadesytecnologias");

  const renderContent = () => {
    switch (activeTab) {
      case "habilidadesytecnologias":
        return (
          <>
            <h4 className="font-medium text-[19px] leading-[124%]">
              Desarrolladora web con más de 3 años de experiencia creando sitios
              dinámicos y funcionales. Experta en:
            </h4>
            <div className="flex gap-[20px] flex-wrap mt-8">
              {logos.map(({ alt, url }) => (
                <Image
                  src={url}
                  key={alt}
                  alt={alt}
                  className="w-[144px] h-auto"
                />
              ))}
            </div>
            <h3 className="text-sm mt-11 text-[#6A6A6A] pb-6">
              Me apasiona el diseño limpio y la optimización, siempre enfocada
              en ofrecer soluciones innovadoras que superen expectativas.
            </h3>
          </>
        );
      case "servicios":
        return (
          <>
            <h4 className="font-medium  text-[19px] leading-[124%]">
              Ofrezco una amplia gama de servicios para impulsar tu presencia
              digital. Desde el desarrollo web hasta la gestión de redes
              sociales, cada proyecto es una oportunidad para crear soluciones
              efectivas y personalizadas:
            </h4>
            <div className="flex gap-2 flex-col mt-4 pb-6">
              <ul>
                {services.map(({ servicio }) => (
                  <li key={servicio} className="flex items-center  text-[19px]">
                    <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                    {servicio}
                  </li>
                ))}
              </ul>
            </div>
          </>
        );
      case "certificados":
        return (
          <>
            <h4 className="font-medium  text-[19px] leading-[124%]">
              Avalando mi dedicación y crecimiento profesional, he obtenido
              certificaciones de reconocidas empresas:
            </h4>
            <div className="flex gap-2 flex-col mt-8 pb-6">
              <ul>
                <li className="flex items-center  text-[19px]">
                  <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                  Google Garage Digital
                </li>
                <li className="flex items-center  text-[19px]">
                  <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                  Platzi
                </li>
                <li className="flex items-center  text-[19px]">
                  <div className="w-3 h-3 bg-yellow rounded-full mr-3"></div>
                  Udemy
                </li>
              </ul>
            </div>
            <div className="flex h-full justify-end items-end ">
              <button className="bg-black text-white py-3 px-6 rounded-full">
                Ver todos los certificados
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="hidden max-w-[1009px] h-[437px] bg-black rounded-[35px] m-auto -mt-44 lg:flex overflow-hidden items-center mb-[100px]">
      <div className="bg-black w-[456px] h-full rounded-l-[35px] flex pl-[25px] flex-col pt-[102px]">
        <div
          className={`${activeTab === "habilidadesytecnologias" ? "flex bg-purple mb-6 py-[6px] w-[355px] rounded-[35px] z-20 justify-between pr-2 cursor-pointer pl-[35px]" : "flex items-start mb-9 cursor-pointer"}  `}
          onClick={() => setActiveTab("habilidadesytecnologias")}
        >
          <div className={`${activeTab !== "habilidadesytecnologias" ? "pl-[35px]" : "max-w-[177px]" } max-w-[277px]`}>
            <h3 className="font-semibold text-[21px] text-white">
              Habilidades y Tecnologías
            </h3>
          </div>
          <div className={`${activeTab === "habilidadesytecnologias" ? "flex" : "hidden" } bg-black w-[62px] h-[62px] rounded-full justify-center items-center`}>
            <Image
              src={arrowRight}
              alt="imagen de una flecha que señala a derecha"
              className="w-[24px] h-auto text-white"
            />
          </div>
        </div>

        <div
           className={`${activeTab === "servicios" ? "flex bg-purple mb-6 py-[6px] w-[355px] rounded-[35px] z-20 justify-between pr-2 cursor-pointer pl-[35px]" : "flex items-start mb-6 cursor-pointer"}  items-center `}
          onClick={() => setActiveTab("servicios")}
        >
          <div className={`${activeTab !== "servicios" ? "pl-[35px]" : "" } `}>
            <h3 className="font-semibold text-[21px] text-white">Servicios</h3>
          </div>
          <div className={`${activeTab === "servicios" ? "flex" : "hidden" } bg-black w-[62px] h-[62px] rounded-full justify-center items-center`}>
            <Image
              src={arrowRight}
              alt="imagen de una flecha que señala a derecha"
              className="w-[24px] h-auto text-white"
            />
          </div>
        </div>

        <div
          className={`${activeTab === "certificados" ? "flex bg-purple mb-6 py-[6px] w-[355px] rounded-[35px] z-20 justify-between pr-2 cursor-pointer pl-[35px]" : "flex items-start mt-6 cursor-pointer"}  items-center`}
          onClick={() => setActiveTab("certificados")}
        >
          <div className={`${activeTab !== "certificados" ? "pl-[35px]" : "" } `}>
            <h3 className="font-semibold text-[21px] text-white">
              Certificados
            </h3>
          </div>
          <div className={`${activeTab === "certificados" ? "flex" : "hidden" } bg-black w-[62px] h-[62px] rounded-full justify-center items-center`} >
            <Image
              src={arrowRight}
              alt="imagen de una flecha que señala a derecha"
              className="w-[24px] h-auto text-white"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray h-full w-[716px] rounded-[35px] -ml-36 pl-[126px]">
        <div className="flex flex-col justify-start pr-[61px] h-full pt-[67px] pb-[50px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutMeSectionD;
