import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { storage } from '../storage';

import en from './resources/en';

const initLanguage = () => {
  const lng = storage().get('lng');

  if (lng) {
    return lng;
  }

  storage().set('lng', 'en');

  return 'en';
}

i18n
  .use(initReactI18next)
  .init({
    lng: initLanguage(),
    fallbackLng: 'en',
    resources: { en },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
