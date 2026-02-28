import React from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import tamaguiConfig from './src/core/theme/tamagui.config';
import { AppNavigator } from './src/navigation/AppNavigator';
import './src/core/i18n';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAppInit } from './src/core/hooks/useAppInit';

export default function App() {
  const { isReady } = useAppInit();

  if (!isReady) return null; // Splash screen is still visible

  return (
    <TamaguiProvider config={tamaguiConfig as any} defaultTheme="light">
      <Theme name="light">
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  );
}
