import { Platform, DevSettings } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
import i18n, { isRTL as checkIsRTL, LANGUAGE_STORAGE_KEY } from './index';
import { applyRTLStrategy } from './rtlStrategy';

const RESTART_DELAY_MS = 150;

/**
 * Safe language switcher.
 *
 * 1. Persists the choice to AsyncStorage.
 * 2. Updates i18next in-memory.
 * 3. Applies the platform RTL strategy.
 * 4. If the RTL direction actually changed -> delay + restart.
 *    (Same-direction switches, e.g. en->ja, resolve live via the key-remount in App.tsx)
 */
export async function changeAppLanguage(code: string): Promise<void> {
  const previousRTL = checkIsRTL(i18n.language);
  const newRTL = checkIsRTL(code);

  // 1. Persist
  await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, code);

  // 2. Update i18next
  await i18n.changeLanguage(code);

  // 3. Apply RTL
  const nativeFlagChanged = applyRTLStrategy(newRTL);

  // 4. Restart only when the RTL *direction* flipped
  if (nativeFlagChanged || previousRTL !== newRTL) {
    setTimeout(() => {
      if (Platform.OS === 'web') {
        window.location.reload();
      } else if (__DEV__) {
        // Updates.reloadAsync() is a no-op in dev mode — use DevSettings instead
        DevSettings.reload();
      } else {
        Updates.reloadAsync();
      }
    }, RESTART_DELAY_MS);
  }
}
