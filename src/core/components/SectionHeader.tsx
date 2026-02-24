import React from 'react';
import { View } from 'react-native';
import { ThemedText as Text } from './ThemedText';
import { useTranslation } from 'react-i18next';
import { isRTL } from '../i18n';

interface Props {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: Props) {
  const { i18n } = useTranslation();
  const isRightToLeft = isRTL(i18n.language);
  const align = isRightToLeft ? 'text-right' : 'text-left';

  return (
    <View className="py-md">
      <Text className={`text-2xl font-bold text-primary ${align}`}>
        {title}
      </Text>
      {subtitle && (
        <Text className={`text-sm text-text-secondary mt-xs ${align}`}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}
