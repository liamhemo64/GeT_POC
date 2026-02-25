import React from 'react';
import { YStack, Text, View } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { colors, radius, fontSize } from '../../../core/theme/tokens';

export const AppLogo = () => {
  const { t } = useTranslation();
  return (
    <YStack alignItems="center" gap="$sm">
      <View
        width={72}
        height={72}
        borderRadius={radius.xl}
        backgroundColor={colors.accent}
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={fontSize['2xl']}>✈️</Text>
      </View>

      <Text
        color={colors.surface}
        fontSize={fontSize.title}
        fontWeight="bold"
        letterSpacing={-0.5}
      >
        geTrip
      </Text>

      <Text color={colors.accent} fontSize={fontSize.md} opacity={0.9}>
        {t('auth.tagline')}
      </Text>
    </YStack>
  );
};
