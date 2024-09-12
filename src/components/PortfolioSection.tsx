"use client";

import { useState } from "react";

import Image from "next/image";
import Titles from "./Titles";
import dilo from "../assets/images/dilo-club.svg";
import practica from "../assets/images/prueba.svg";
import travnow from "../assets/images/travnow.svg";
import adricapon from "../assets/images/adri-capon.svg";
import mauricorp from "../assets/images/mauricorp.svg";
import storeMauricorp from "../assets/images/store.mauricor.svg";
import Link from "next/link";

const works = [
  {
    title: "Dilo club",
    url: "https://dilo.club/",
    img: dilo,
    type: "Wordpress, Elementor",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Practica Tailwind y React",
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

export const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 317; // Ancho del slide

  const updateIndex = (index: number) => {
    const normalizedIndex = Math.max(0, Math.min(index, works.length - 1));
    setCurrentIndex(normalizedIndex);
  };

  const nextSlide = () => {
    if (currentIndex < works.length - 1) {
      updateIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      updateIndex(currentIndex - 1);
    }
  };

  return (
    <div className="BackgroundPortfolio min-h-[670px] pl-[20px] lg:pl-[100px] 2xl:pl-[150px] pt-[69px] mb-[100px]">
      <div className="relative flex flex-col lg:flex-row lg:items-center">
        <Titles
          text="Portfolio"
          customClass="text-white sm:w-[45%] lg:w-[35%] mr-4"
        />

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex gap-[25px] transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
          >
            {works.map(({ title, url, img, type }) => (
              
              <div key={title} className="min-w-[317px] max-w-[317px] lg:min-w-[330px] mb-19">
                <div className="h-[436px] max-h-[437px] bg-white rounded-[35px]">
                  <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto object-cover rounded-t-[35px]"
                  />

                  <div className="flex justify-between items-center -mt-16 px-[26px] lg:-mt-15">
                    <Link href={url} target="_blank">
                      dfsd
                    </Link>
                    <button
                      type="button"
                      className="bg-black py-[14px] px-[16px] rounded-full text-white"
                    >
                      Ver Información
                    </button>
                  </div>

                  <div className="mt-16 px-[25px] lg:mt-9">
                    <h4 className="font-semibold text-[17px] text-black lg:text-[20px]">
                      {title}
                    </h4>
                  </div>
                  <div className="flex mt-6 lg:mt-9 px-[25px] justify-between items-center">
                    <h4 className="font-medium text-[14px] text-black/80">
                      {type}
                    </h4>
                    <Link href={url} target="_blank">
                      <button className="text-blue-500">Ver sitio</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-24 w-full justify-end mt-6 pr-[25px] lg:pr-[100px] 2xl:pr-[150px]">
            <button
              onClick={prevSlide}
              className={` transform  bg-black text-white p-2 rounded-full z-10 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className={` transform  bg-black text-white p-2 rounded-full z-10 ${
                currentIndex === works.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex === works.length - 1}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
