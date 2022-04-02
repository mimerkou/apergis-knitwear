import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import translationGR from './locales/gr/translationGR.json';
import translationEN from './locales/en/translationEN.json';

const resources = {
  gr: {
    translation: translationGR,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'gr',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
