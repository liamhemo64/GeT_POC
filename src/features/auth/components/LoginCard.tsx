import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { YStack, XStack, Text, Button, Separator } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { colors, spacing, radius, fontSize } from '../../../core/theme/tokens';
import { PhoneInputField } from './PhoneInputField';

interface LoginCardProps {
  phone: string;
  onPhoneChange: (text: string) => void;
  onSubmit: () => void;
}

export const LoginCard = ({ phone, onPhoneChange, onSubmit }: LoginCardProps) => {
  const { t } = useTranslation();
  return (
    <YStack
      borderRadius={radius.xxl}
      padding="$xxl"
      gap="$lg"
      borderWidth={1}
      borderColor="rgba(255,255,255,0.18)"
      style={{ backgroundColor: 'rgba(255,255,255,0.13)' }}
    >
      {/* Phone input */}
      <PhoneInputField value={phone} onChangeText={onPhoneChange} />

      {/* CTA */}
      <Button
        backgroundColor={colors.accent}
        borderRadius={radius.lg}
        height={52}
        pressStyle={{ opacity: 0.85 }}
        onPress={onSubmit}
      >
        <Text color={colors.primary} fontSize={fontSize.lg} fontWeight="700">
          {t('auth.sendCode')}
        </Text>
      </Button>

      {/* Divider */}
      <XStack alignItems="center" gap="$md">
        <Separator flex={1} borderColor="rgba(255,255,255,0.3)" />
        <Text color="rgba(255,255,255,0.7)" fontSize={fontSize.xs}>
          {t('auth.orContinueWith')}
        </Text>
        <Separator flex={1} borderColor="rgba(255,255,255,0.3)" />
      </XStack>

      {/* Google */}
      <TouchableOpacity style={styles.googleBtn} activeOpacity={0.8}>
        <Text style={styles.googleG}>G</Text>
        <Text style={styles.googleLabel}>{t('auth.google')}</Text>
      </TouchableOpacity>
    </YStack>
  );
};

const styles = StyleSheet.create({
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    borderRadius: radius.lg,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  googleG: {
    fontSize: fontSize.xl,
    fontWeight: '700',
    color: '#ffffff',
  },
  googleLabel: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: '#ffffff',
  },
});
