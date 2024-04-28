import { useTranslation as useI18NextTranslation } from 'react-i18next';

import { storage } from '../storage';

const useTranslation = () => {
  const { t, i18n } = useI18NextTranslation();

  const handleChangeLanguage = (lng) => i18n.changeLanguage(lng).then(() => storage().set('lng', lng))

  return { t, handleChangeLanguage };
}



export {
  useTranslation,
};
