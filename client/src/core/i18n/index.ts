import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import heTranslations from './locales/he.json';
import enTranslations from './locales/en.json';

const resources = {
  he: { translation: heTranslations },
  en: { translation: enTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'he', // Primary Language is Hebrew
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

// Strict RTL Architecture
if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

export const isRTL = (lang: string) => lang === 'he';

export default i18n;
