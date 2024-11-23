const path = require('path'); // Asegúrate de incluir esta línea

module.exports = {
  i18n: {
    locales: ['es', 'en'], // Lista de idiomas soportados
    defaultLocale: 'es',   // Idioma predeterminado
    localeDetection: false, // Opcional: Desactiva la detección automática de idioma
  },
  localePath: path.resolve('./public/locales'), // Ruta a los archivos de traducción
  react: {
    useSuspense: false, // Necesario para evitar problemas de SSR
  },
  detection: {
    order: ['cookie', 'header', 'querystring'], // Orden para detectar idioma
    caches: ['cookie'], // Dónde guardar el idioma detectado
  },
};
