// src/i18n.server.js

import i18n from 'i18next';
import Backend from 'i18next-fs-backend';

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .init({
      backend: {
        loadPath: './public/locales/{{lng}}/common.json',
      },
      lng: 'es', // Default language
      fallbackLng: 'es',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
