import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

const resources = {
  he: {
    translation: {
      welcome: "ברוכים הבאים ל-geTrip",
      auth: {
        login: "התחבר",
      }
    }
  },
  en: {
    translation: {
      welcome: "Welcome to geTrip",
      auth: {
        login: "Login",
      }
    }
  }
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

export default i18n;
