"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logoBlanco from "../assets/icons/gabrielaLogo.svg";
import logoNegro from "../assets/icons/logo-negro.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (!isOpen) {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setIsSticky(window.scrollY > 0);
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isSticky ? "bg-white bg-opacity-90 backdrop-blur-md" : "bg-transparent"
      } ${showHeader || isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="px-[20px] lg:px-[100px] 2xl:px-[150px] flex flex-wrap items-center justify-between mx-auto p-4 max-w-[1920px]">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={isSticky ? logoNegro : logoBlanco}
            className="h-12"
            alt="Gabriela Logo"
          />
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${!isSticky ? "text-white" : "text-black"} w-5 h-5`}
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className={`font-medium flex flex-col p-4 justify-center md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-3  md:mt-0 md:border-0 sm:justify-center sm:items-center ${!isSticky ? "bg-white" : ""}`}>
            <li>
              <Link
                href="/sobre-mi"
                className={`block py-2 px-3 ${!isSticky ? "sm:text-white" : "text-black" } text-black rounded hover:bg-purple hover:text-white py-2 px-6 hover:rounded-[35px] md:border-0 `}
                aria-current="page"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className={`block py-2 px-3 ${!isSticky ? "sm:text-white" : "text-black" } rounded hover:bg-purple hover:text-white  py-2  px-6 hover:rounded-[35px]  md:border-0 `}
              >
                Portafolio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`block py-2 px-3 ${!isSticky ? "sm:text-white" : "text-black" } rounded hover:bg-purple hover:text-white py-2 px-6 hover:rounded-[35px] md:border-0 `}
              >
                Inglés
              </Link>
            </li>
            <li>
              <Link
                href="/GabrielaAguilar2024.pdf"
                className={`block  ${!isSticky ? "sm:text-white" : "text-white" }  bg-purple hover:bg-black text-white py-2 px-6 rounded-[35px] md:border-0 `} target="_blank"
              >
                Descargar CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
