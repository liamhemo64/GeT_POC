import React from 'react';
import { TouchableOpacity } from 'react-native';
import { XStack, Text } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { colors, fontSize } from '../../../core/theme/tokens';

export const RegisterLink = () => {
  const { t } = useTranslation();
  return (
    <XStack justifyContent="center" alignItems="center" gap="$xs">
      <Text color="rgba(255,255,255,0.75)" fontSize={fontSize.sm} opacity={0.8}>
        {t('auth.noAccount')}
      </Text>
      <TouchableOpacity>
        <Text
          color={colors.accent}
          fontSize={fontSize.sm}
          fontWeight="700"
          textDecorationLine="underline"
        >
          {t('auth.register')}
        </Text>
      </TouchableOpacity>
    </XStack>
  );
};
