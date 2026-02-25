import React from 'react';
import { YStack, XStack, Text, Input, View } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { colors, radius, fontSize } from '../../../core/theme/tokens';

interface PhoneInputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const PhoneInputField = ({ value, onChangeText }: PhoneInputFieldProps) => {
  const { t } = useTranslation();
  return (
    <YStack gap="$sm">
      {/* Label */}
      <Text
        color="rgba(255,255,255,0.85)"
        fontSize={fontSize.sm}
        fontWeight="600"
        textAlign="right"
      >
        {t('auth.phoneLabel')}
      </Text>

      {/* Input row */}
      <XStack
        borderWidth={1.5}
        borderColor="rgba(255,255,255,0.4)"
        borderRadius={radius.lg}
        backgroundColor="rgba(255,255,255,0.92)"
        alignItems="center"
        paddingHorizontal="$md"
        gap="$sm"
      >
        {/* Country code badge */}
        <View
          backgroundColor={colors.surfaceVariant}
          paddingHorizontal="$sm"
          paddingVertical={6}
          borderRadius={radius.sm}
        >
          <Text color={colors.text} fontSize={fontSize.md} fontWeight="600">
            🇮🇱 +972
          </Text>
        </View>

        <Input
          flex={1}
          unstyled
          keyboardType="phone-pad"
          textAlign="right"
          placeholder={t('auth.phonePlaceholder')}
          placeholderTextColor="$textSecondary"
          value={value}
          onChangeText={onChangeText}
          fontSize={fontSize.md}
          color={colors.text}
          paddingVertical="$md"
        />
      </XStack>

      {/* Hint */}
      <Text color="rgba(255,255,255,0.6)" fontSize={fontSize.xs} textAlign="right">
        {t('auth.phoneHint')}
      </Text>
    </YStack>
  );
};
