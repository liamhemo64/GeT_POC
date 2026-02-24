import './global.css';
import './src/core/i18n';

import React from 'react';
import { Platform, View, type ViewStyle } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { isRTL } from './src/core/i18n';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useAppInit } from './src/core/hooks/useAppInit';

export default function App() {
  const { isReady } = useAppInit();
  const { i18n } = useTranslation();

  if (!isReady) {
    return null; // Splash screen is still visible
  }

  // Web: RN Web's <div> elements default to direction:ltr, ignoring document.dir.
  //      We must set direction explicitly on the root so it cascades to all children.
  // Native: I18nManager already told Yoga the direction. Adding direction style
  //         here would cause a double-flip, so we leave it out.
  const rootStyle: ViewStyle =
    Platform.OS === 'web'
      ? { flex: 1, direction: isRTL(i18n.language) ? 'rtl' : 'ltr' }
      : { flex: 1 };

  return (
    <GestureHandlerRootView style={rootStyle}>
      <SafeAreaProvider>
        {/* key forces a full tree remount on language change, clearing cached NativeWind styles */}
        <View key={i18n.language} style={{ flex: 1 }}>
          <AppNavigator />
        </View>
        <StatusBar style="dark" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
