import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenWrapperProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

export function ScreenWrapper({ children, backgroundColor = '#FFF8F0' }: ScreenWrapperProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }} edges={['top']}>
      <View className="flex-1 px-lg">
        {children}
      </View>
    </SafeAreaView>
  );
}
