import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import he from './locales/he.json';
import ja from './locales/ja.json';

export const RTL_LANGUAGES = ['he'];
export const LANGUAGE_STORAGE_KEY = '@japanjourney/language';

i18n.use(initReactI18next).init({
  resources: {
    he: { translation: he },
    en: { translation: en },
    ja: { translation: ja },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export function isRTL(lang?: string): boolean {
  return RTL_LANGUAGES.includes(lang ?? i18n.language);
}

export default i18n;
