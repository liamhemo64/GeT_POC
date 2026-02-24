import { Platform, I18nManager } from 'react-native';

/**
 * Apply RTL strategy per platform.
 * - Web: sets document.documentElement.dir (CSS handles the rest).
 * - Native: syncs I18nManager so Yoga/NativeWind resolve logical props correctly.
 *
 * Returns `true` when a full restart is required (native I18nManager state changed).
 */
export function applyRTLStrategy(isRTL: boolean): boolean {
  if (Platform.OS === 'web') {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    return false;
  }

  // Native (iOS / Android)
  const needsUpdate = I18nManager.isRTL !== isRTL;

  if (needsUpdate) {
    I18nManager.allowRTL(isRTL);
    I18nManager.forceRTL(isRTL);
  }

  return needsUpdate;
}
