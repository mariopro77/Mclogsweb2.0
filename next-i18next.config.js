const path = require('path');

module.exports = {
  i18n: {
    locales: ['es', 'en'], // Lista de idiomas soportados
    defaultLocale: 'es',   // Idioma predeterminado
    localeDetection: false, // Desactiva la detección automática de idioma
  },
  fallbackLng: 'en',     // Idioma de reserva
  load: 'languageOnly',   // Ignora las variantes regionales
  supportedLngs: ['es', 'en'], // Lista de idiomas soportados
  localePath: path.resolve('./public/locales'), // Ruta a los archivos de traducción

};
