"use client";


import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import LenguajeDropdown from "./LenguajeDropdown";
import Image from "next/image";

export default function NavBar({ activeLink, setActiveLink }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const { t } = useTranslation("common");

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (isHomepage) {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isHomepage]);

  const navbarClass = isHomepage
    ? scrollPosition >= 100
      ? "top-0 w-full fixed z-50 h-20 bg-white backdrop-blur-md px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 text-black "
      : `top-0 w-full fixed z-50 h-20 bg-slate/70 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 ${
          open ? "bg-white text-black" : "lg:text-white text-white"
        }`
    : "top-0 w-full fixed z-50 h-20 bg-white px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 text-black";

  const imageSrc = isHomepage
    ? scrollPosition >= 100
      ? "/Images/Logos/original.png"
      : "/Images/Logos/White5.webp"
    : "/Images/Logos/original.png";

  const hrClass = isHomepage
    ? open
      ? "hidden"
      : scrollPosition >= 100
        ? "hidden"
        : "bg-white h-0.2 w-full"
    : "hidden";

  const Links = [
    { name: t("us"), link: "/Nosotros" },
    { name: t("services"), link: "/Servicios" },
    { name: t("agents"), link: "/Agentes" },
    { name: t("Projects"), link: "/Proyectos" },
    { name: t("centro_de_ayuda"), link: "/Centrodeayuda" },
    { name: t("news"), link: "/Noticias" },
    { name: t("myaccount"), link: "https://my.mclogs.com/auth/login" },
  ];

  return (
    <header className={navbarClass}>
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex-none h-full w-auto items-center justify-center pt-2">
          <Link href="/" onClick={() => setActiveLink("/")} className="text-3xl">
            <Image className="pt-2 h-auto w-32" src={imageSrc} alt="Logo" width={500} height={300}/>
          </Link>
        </div>

        {/* Menu Toggle (Mobile) */}
        <div className="flex text-2xl cursor-pointer xl:hidden" onClick={toggleMenu}>
          <span>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden xl:flex items-center justify-center">
          <ul className="flex space-x-4 list-none">
            {/* Dropdown para "Us" */}
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="cursor-pointer flex justify-center items-center py-2">
                <p>{t("information")}</p>
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg"
                  >
                    {Links.slice(0, 5).map((link) => (
                      <li key={link.name}>
                        {link.link.startsWith('/') ? (
                          <Link
                            href={link.link}
                            className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${
                              activeLink === link.link ? "text-oldgold" : ""
                            }`}
                            onClick={() => setActiveLink(link.link)}
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${
                              activeLink === link.link ? "text-oldgold" : ""
                            }`}
                          >
                            {link.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Enlaces restantes */}
            {Links.slice(5).map((link) => (
              <li key={link.name}>
                {link.link.startsWith('/') ? (
                  <Link
                    href={link.link}
                    className={`xl:hover:bg-transparent hover:bg-gray-100 flex py-2 px-4 items-center rounded-md border-gray-300 cursor-pointer ${
                      activeLink === link.link ? "text-oldgold" : ""
                    }`}
                    onClick={() => setActiveLink(link.link)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`xl:hover:bg-transparent hover:bg-gray-100 flex py-2 px-4 items-center rounded-md border-gray-300 cursor-pointer ${
                      activeLink === link.link ? "text-oldgold" : ""
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}

            {/* Dropdown de Lenguaje */}
            <li className="flex items-center">
              <LenguajeDropdown />
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex-none z-20 top-20 left-0 w-full xl:w-auto xl:flex xl:items-center xl:pb-0 xl:pl-0 py-8 xl:py-0 px-10 sm:px-10 md:px-20 xl:px-0 2xl:px-0 absolute bg-white xl:bg-transparent text-black text-2xl font-medium list-none`}
            >
              {Links.map((link) => (
                <li key={link.name}>
                  {link.link.startsWith('/') ? (
                    <Link
                      href={link.link}
                      className={`xl:hover:bg-transparent hover:bg-gray-100 flex py-2 px-4 items-center rounded-md border-gray-300 cursor-pointer ${
                        activeLink === link.link ? "text-oldgold" : ""
                      }`}
                      onClick={() => {setActiveLink(link.link); setOpen(false);}}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`xl:hover:bg-transparent hover:bg-gray-100 flex py-2 px-4 items-center rounded-md border-gray-300 cursor-pointer ${
                        activeLink === link.link ? "text-oldgold" : ""
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <LenguajeDropdown />
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <div>
        <hr className={hrClass} />
      </div>
    </header>
  );
}
