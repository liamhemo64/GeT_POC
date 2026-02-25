import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

const resources = {
  he: {
    translation: {
      welcome: "ברוכים הבאים ל-geTrip",
      auth: {
        login:            "כניסה",
        tagline:          "גלה, תכנן, וצא לדרך 🌍",
        phoneLabel:       "מספר טלפון",
        phonePlaceholder: "050-000-0000",
        sendCode:         "שלח קוד אימות",
        orContinueWith:   "או המשך עם",
        google:           "Google",
        noAccount:        "עדיין אין חשבון?",
        register:         "הצטרף עכשיו",
        phoneHint:        "נשלח לך קוד ב-SMS לאימות",
      }
    }
  },
  en: {
    translation: {
      welcome: "Welcome to geTrip",
      auth: {
        login:            "Sign In",
        tagline:          "Discover, Plan & Go 🌍",
        phoneLabel:       "Phone Number",
        phonePlaceholder: "050-000-0000",
        sendCode:         "Send Verification Code",
        orContinueWith:   "Or continue with",
        google:           "Google",
        noAccount:        "Don't have an account?",
        register:         "Join Now",
        phoneHint:        "We'll send you a verification SMS",
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
