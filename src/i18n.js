// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../public/locales/en/common.json';
import esCommon from '../public/locales/es/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
      },
      es: {
        common: esCommon,
      },
    },
    lng: 'es', // Establece el idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
