"use client";
import { useEffect, useState } from "react";

import { SliderItems } from "./SliderItems";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Titles from "./Titles";
import dilo from "../assets/images/dilo-club.svg";
import practica from "../assets/images/prueba.svg";
import travnow from "../assets/images/travnow.svg";
import adricapon from "../assets/images/adri-capon.svg";
import mauricorp from "../assets/images/mauricorp.svg";
import storeMauricorp from "../assets/images/store.mauricor.svg";
import svgsPortfolio from "../assets/images/svgPortfolio.svg";
import terracota from "../assets/images/prueba-Terracota.svg";
import verde from "../assets/images/prueba-verde.svg";
import crema from "../assets/images/crema.svg"
import azul from "../assets/images/azulcielo.svg";
import verdeMenta from "../assets/images/verde-menta.svg";

 
import Image from "next/image";


const works = [
  {
    title: "Dilo club",
    url: "https://dilo.club/",
    img: terracota,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Dilo club",
    url: "https://dilo.club/",
    img: verde,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Dilo club",
    url: "https://dilo.club/",
    img: crema,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Dilo club",
    url: "https://dilo.club/",
    img: azul,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Dilo club",
    url: "https://dilo.club/",
    img: verdeMenta,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Dilo club",
    url: "https://dilo.club/",
    img: dilo,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Practica Tailwind",
    url: "https://practica-tailwind.vercel.app/",
    img: practica,
    type: "Tailwind, React + Next js",
    description:
      "Aplicación web desarrollada desde cero utilizando Tailwind CSS, React, y Next.js. Todo el código y la funcionalidad fueron implementados manualmente para cumplir con los requisitos del proyecto. El diseño fue proporcionado por un tercero, y la implementación se realizó asegurando la integración perfecta con la estructura del sitio.",
  },
  {
    title: "Travnow",
    url: "https://travnow.vercel.app/",
    img: travnow,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. El diseño fue proporcionado por un tercero.",
  },
  {
    title: "AdriCapon",
    url: "https://adricapon.com",
    img: adricapon,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Mauricorp",
    url: "https://mauricorp.com/",
    img: mauricorp,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Store Mauricorp",
    url: "https://mauricorp.com/",
    img: storeMauricorp,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
];

export const Portfolio = () => {
  const [spaceBetween, setSpaceBetween] = useState<number>(0);
  const [sliderPerView, setsliderPerView] = useState<number>(1);
  
  const handleResize = () => {
    const width = window.innerWidth;

    if (width > 1540) {
      setsliderPerView(4);
      setSpaceBetween(18);
    } else if (width >= 1024) {
      setsliderPerView(3);
      setSpaceBetween(5);
    } else if (width >= 640 && width <= 1024) {
      setsliderPerView(2);
      setSpaceBetween(5);
    } else if (width >= 430) {
      setsliderPerView(1);
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

  console.log(sliderPerView);
  return (
    <div className="BackgroundPortfolio min-h-[670px] w-full flex flex-col sm:px-[50px] px-[20px] lg:px-[100px] 2xl:px-[200px] pt-12 pb-5 m-auto relative mb-10">
      <Image src={svgsPortfolio} className="absolute top-1 left-1 w-24 sm:w-auto" alt="imagen de decoracion" />
      <Titles text="Portafolio" customClass="text-white text-center mb-0 sm:mb-4" />

      <Swiper
        slidesPerView={sliderPerView}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full m-auto cursor-grab"
        id="sliderHome"
      >
        {works.map(({ title, url, img, type, description }) => (
          <SwiperSlide className="w-full ">
            <SliderItems
              title={title}
              url={url}
              img={img}
              type={type}
              description={description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Image src={svgsPortfolio} className="absolute bottom-1 right-1 w-28 sm:w-auto h-auto" alt="imagen de decoracion" />
    </div>
  );
};
