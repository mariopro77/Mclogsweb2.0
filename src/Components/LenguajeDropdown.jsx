'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/navigation";
import Image from 'next/image'; // Importar el componente de Next.js para imágenes

const languages = [
  { code: 'es', label: 'Español', flag: '/spain.png' },
  { code: 'en', label: 'English', flag: '/usa.png' },
];

const LenguajeDropdown = () => {
  const { i18n } = useTranslation("common"); // Usar i18n de next-i18next
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Set the selected language on mount
  useEffect(() => {
    const currentLang = languages.find((lang) => lang.code === i18n.language);
    setSelectedLang(currentLang || languages[0]); // Idioma predeterminado: Español
  }, [i18n.language]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectLanguage = (lang) => {
    setSelectedLang(lang);

    // Cambiar idioma usando i18n de next-i18next
    i18n.changeLanguage(lang.code);

    setIsOpen(false);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center px-4 text-sm font-medium text-gray-700 bg-transparent focus:outline-none"
      >
        {selectedLang?.flag ? (
          <Image
            src={selectedLang.flag}
            alt={selectedLang.label}
            width={24}
            height={24}
            className="mr-2"
          />
        ) : (
          '🌐'
        )}
      </button>

      {isOpen && (
        <div
          className="lg:absolute right-0 z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang)}
                className={`${
                  selectedLang?.code === lang.code
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                } flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
              >
                <Image
                  src={lang.flag}
                  alt={lang.label}
                  width={20}
                  height={20}
                  className="mr-3"
                />
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LenguajeDropdown;
