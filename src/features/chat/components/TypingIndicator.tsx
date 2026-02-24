import React from 'react';
import { View } from 'react-native';

interface Props {
  isRTL?: boolean;
}

export function TypingIndicator({ isRTL }: Props) {
  return (
    <View className={`flex-row items-end gap-sm mb-md ${isRTL ? 'flex-row-reverse' : ''}`}>
      <View className="w-avatar-sm h-avatar-sm rounded-avatar-sm bg-accent items-center justify-center overflow-hidden" />
      <View className="bg-surface rounded-lg border border-border px-lg py-md">
        <View className="flex-row gap-xs">
          <View className="w-dot h-dot rounded-dot bg-accent opacity-40" />
          <View className="w-dot h-dot rounded-dot bg-accent opacity-60" />
          <View className="w-dot h-dot rounded-dot bg-accent opacity-80" />
        </View>
      </View>
    </View>
  );
}
