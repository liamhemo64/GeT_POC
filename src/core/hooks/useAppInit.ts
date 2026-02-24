import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, { isRTL as checkIsRTL, LANGUAGE_STORAGE_KEY } from '../i18n';
import { applyRTLStrategy } from '../i18n/rtlStrategy';

const BOOT_DELAY_MS = 100;

// Keep splash screen visible while we initialize
SplashScreen.preventAutoHideAsync();

export function useAppInit() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        // 1. Load saved language preference
        const savedLang = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        const language = savedLang ?? 'he'; // Hebrew primary

        // 2. Load Fonts
        await Font.loadAsync({
          'NotoSansHebrew-Regular': require('../../../assets/fonts/Noto_Sans_Hebrew/static/NotoSansHebrew-Regular.ttf'),
          'NotoSansHebrew-Medium': require('../../../assets/fonts/Noto_Sans_Hebrew/static/NotoSansHebrew-Medium.ttf'),
          'NotoSansHebrew-Bold': require('../../../assets/fonts/Noto_Sans_Hebrew/static/NotoSansHebrew-Bold.ttf'),
          'NotoSansJP-Regular': require('../../../assets/fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf'),
          'NotoSansJP-Medium': require('../../../assets/fonts/Noto_Sans_JP/static/NotoSansJP-Medium.ttf'),
          'NotoSansJP-Bold': require('../../../assets/fonts/Noto_Sans_JP/static/NotoSansJP-Bold.ttf'),
        });

        // 3. Sync i18next
        if (i18n.language !== language) {
          await i18n.changeLanguage(language);
        }

        // 4. Apply platform-specific RTL strategy
        applyRTLStrategy(checkIsRTL(language));

        // 5. Give Yoga / the native bridge time to digest the RTL flag
        await new Promise((resolve) => setTimeout(resolve, BOOT_DELAY_MS));
      } catch (error) {
        console.warn('App init error:', error);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    init();
  }, []);

  return { isReady };
}
