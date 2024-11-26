'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';

const languages = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

const LenguajeDropdown = () => {
  const { i18n } = useTranslation(); // Usar i18n de next-i18next
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);
  const dropdownRef = useRef(null);

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
        <span className="mr-2 text-xl">{selectedLang?.flag || '🇪🇸'}</span>
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
                <span className="mr-3 text-xl">{lang.flag}</span>
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
