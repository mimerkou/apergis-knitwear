import { useTranslation } from 'react-i18next';

const ChangeLanguage = (ln) => {
  const { i18n } = useTranslation();

  return () => {
    i18n.changeLanguage(ln);
  };
};

export default ChangeLanguage;
