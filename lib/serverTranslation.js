// lib/serverTranslation.js
import i18n from '../src/i18n.server';

export async function serverTranslation(locale, namespace = 'common') {
  await i18n.changeLanguage(locale);
  await i18n.loadNamespaces(namespace);

  return {
    t: i18n.getFixedT(locale, namespace),
  };
}
