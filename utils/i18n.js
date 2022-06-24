import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import translationEn from "../locales/en/translationEn.json";
import translationRu from "../locales/ru/translationRu.json";
import translationUz from "../locales/uz/translationUz.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
  uz: {
    translation: translationUz,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
