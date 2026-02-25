import React from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import tamaguiConfig from './src/core/theme/tamagui.config';
import { AppNavigator } from './src/navigation/AppNavigator';
import './src/core/i18n'; // Initialize i18n
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
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
