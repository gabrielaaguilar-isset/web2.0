"use client";
import { useEffect, useState } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";
import CertificadosItems from "./CertificadosItems";

import google from "../assets/icons/google.svg";
import udemy from "../assets/icons/udemy.svg";
import platzi from "../assets/icons/platzi.svg";
import Image from "next/image";
import Link from "next/link";

const certificados = [
  {
    name: " Curso WordPress 2024: Cómo Crear una Página Web Desde Cero",
    company: "Udemy",
    id_credencial: "UC-d7b2ceb4-9b61-477e-9fa4-419cd8a0f770",
    url: "https://www.udemy.com/certificate/UC-d7b2ceb4-9b61-477e-9fa4-419cd8a0f770/",
    type: "Frontend",
    img: udemy,
  },
  {
    name: "Curso de Frontend Developer",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/2467-frontend-developer/diploma/detalle/",
    type: "Frontend",
    img: platzi,
  },
  {
    name: "React: De cero a experto (Hooks y MERN )",
    company: "Udemy",
    id_credencial: "UC-6b12f72e-031c-4e9e-b946-7f61a5ede244",
    url: "https://www.udemy.com/certificate/UC-6b12f72e-031c-4e9e-b946-7f61a5ede244/",
    type: "Frontend",
    img: udemy,
  },
  {
    name: "Curso Práctico de Frontend Developer",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/",
    type: "Frontend",
    img: platzi,
  },
  {
    name: "JavaScript Moderno: Guía para dominar el lenguaje ",
    company: "Udemy",
    id_credencial: "UC-c4bf3bbd-f130-4845-a83e-9fc8f7895ad5",
    url: "https://www.udemy.com/certificate/UC-c4bf3bbd-f130-4845-a83e-9fc8f7895ad5/",
    type: "Frontend",
    img: udemy,
  },
  {
    name: " JavaScript Moderno Guía Definitiva Construye +20 Proyectos ",
    company: "Udemy",
    id_credencial: "UC-42004e08-0dcc-4cce-ab9f-13ced17ffd44",
    url: "https://www.udemy.com/certificate/UC-42004e08-0dcc-4cce-ab9f-13ced17ffd44/",
    type: "Frontend",
    img: udemy,
  },
  {
    name: "Curso Práctico de Frontend Developer",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/2477-frontend-developer-practico/diploma/detalle/",
    type: "Frontend",
    img: platzi,
  },
  {
    name: "JavaScript Moderno Guia Definitiva Construye +20 Proyectos ",
    company: "Udemy",
    id_credencial: "ID CREDENCIAL: UC-42004e08-0dcc-4cce-ab9f-13ced17ffd44",
    url: "https://www.udemy.com/certificate/UC-42004e08-0dcc-4cce-ab9f-13ced17ffd44/",
    type: "Frontend",
    img: udemy,
  },
  {
    name: "Curso Definitivo de HTML y CSS",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/2008-html-css/diploma/detalle/",
    type: "Frontend",
    img: platzi,
  },
  {
    name: "Curso Básico de PHP: Instalación, Fundamentos y Operadores",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/2646-php/diploma/detalle/",
    type: "Backend",
    img: platzi,
  },
  {
    name: "Curso Básico de Programación",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/1050-basico-programacion/diploma/detalle/",
    type: "Frontend",
    img: platzi,
  },
  {
    name: "Curso Práctico de PHP",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/2516-php-practico/diploma/detalle/",
    type: "Backend",
    img: platzi,
  },
  {
    name: "Curso de Manejo de Datos en PHP",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/2032-datos-php/diploma/detalle/",
    type: "Backend",
    img: platzi,
  },
  {
    name: "Curso de PHP con Composer",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/2024-php-composer/diploma/detalle/",
    type: "Backend",
    img: platzi,
  },
  {
    name: "Curso de PHP: Arreglos, Funciones y Estructuras de Control",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/2794-php-arreglos-funciones/diploma/detalle/",
    type: "Backend",
    img: platzi,
  },
  {
    name: "Curso Básico de Computadores e Informática",
    company: "Platzi",
    id_credencial: "",
    url: "https://platzi.com/p/gabrielaangelaguilar/curso/2793-computacion-basica/diploma/detalle/",
    type: "Backend",
    img: platzi,
  },
  {
    name: "Curso de Introducción al Desarrollo web: HTML y CSS (2/2)",
    company: "Google",
    id_credencial: "ID CREDENCIAL:VSY JT7 42M ",
    url: "/desarrollo2.png",
    type: "Frontend",
    img: google,
  },
  {
    name: "Competencias digitales para profesionales",
    company: "Google",
    id_credencial: "ID CREDENCIAL:  H3F UF5 FJZ ",
    url: "/competencias.png",
    type: "Desarrollo web",
    img: google,
  },
  {
    name: "Curso de Introducción al Desarrollo web: HTML y CSS (1/2) ",
    company: "Google",
    id_credencial: "ID CREDENCIAL: XYH PSU JAU ",
    url: "/desarrollo1.png",
    type: "Frontend",
    img: google,
  },
];

const CertificadosSlider = () => {
  const [spaceBetween, setSpaceBetween] = useState<number>(0);
  const [sliderPerView, setSliderPerView] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>("Todos");

  // Handle resizing
  const handleResize = () => {
    const width = window.innerWidth;

    if (width > 1540) {
      setSliderPerView(5);
      setSpaceBetween(18);
    } else if (width >= 1024) {
      setSliderPerView(4);
      setSpaceBetween(15);
    } else if (width >= 640 && width <= 1024) {
      setSliderPerView(3);
      setSpaceBetween(10);
    } else if (width >= 430) {
      setSliderPerView(1);
      setSpaceBetween(0);
    } else {
      setSpaceBetween(25);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to filter certificates based on type
  const filteredCertificados = certificados.filter(
    (certificado) =>
      selectedType === "Todos" || certificado.type === selectedType
  );

  return (
    <div className="flex mt-12 flex-col">
      <div className="flex w-full justify-center items-center gap-2 sm:gap-6 mb-12 flex-wrap">
        <button
          className={`${
            selectedType === "Todos" ? "bg-purple" : "bg-black"
          } rounded-[35px] text-white py-4 px-8 hover:bg-purple hover:text-white`}
          onClick={() => setSelectedType("Todos")}
        >
          Todos
        </button>
        <button
          className={`${
            selectedType === "Frontend" ? "bg-purple" : "bg-black"
          } rounded-[35px] text-white py-4 px-8 hover:bg-purple hover:text-white`}
          onClick={() => setSelectedType("Frontend")}
        >
          Frontend
        </button>
        <button
          className={`${
            selectedType === "Backend" ? "bg-purple" : "bg-black"
          } rounded-[35px] text-white py-4 px-8 hover:bg-purple hover:text-white`}
          onClick={() => setSelectedType("Backend")}
        >
          Backend
        </button>
      </div>

      <Swiper
        slidesPerView={sliderPerView}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="w-full m-auto"
        id="sliderAboutMe"
      >
        {filteredCertificados.map(
          ({ name, company, id_credencial, url, type, img }) => (
            <SwiperSlide key={name} className="w-full pb-12">
              <CertificadosItems
                name={name}
                company={company}
                id_credencial={id_credencial}
                url={url}
                type={type}
                img={img}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default CertificadosSlider;
