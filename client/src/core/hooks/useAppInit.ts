import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

export function useAppInit() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        await Font.loadAsync({
          'NotoSansHebrew-Regular': require('../../../assets/fonts/NotoSansHebrew-Regular.ttf'),
          'NotoSansHebrew-Medium':  require('../../../assets/fonts/NotoSansHebrew-Medium.ttf'),
          'NotoSansHebrew-Bold':    require('../../../assets/fonts/NotoSansHebrew-Bold.ttf'),
        });
      } catch (e) {
        console.warn('Font load error:', e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    init();
  }, []);

  return { isReady };
}
