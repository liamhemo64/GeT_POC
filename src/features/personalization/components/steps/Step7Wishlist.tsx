import React from 'react';
import { YStack, Text, Input } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { usePersonalizationStore } from '../../../../store/usePersonalizationStore';
import { colors, radius, fontSize, size, spacing } from '../../../../core/theme/tokens';

export const Step7Wishlist = () => {
  const { t } = useTranslation();
  const { data, setField } = usePersonalizationStore();

  return (
    <YStack gap="$xl" flex={1}>
      <Text 
        fontSize={fontSize['2xl']} 
        fontWeight="700" 
        color={colors.primary} 
      >
        {t('personalization.step7.title')}
      </Text>

      <Input
        multiline
        numberOfLines={6}
        value={data.wishlist}
        onChangeText={(text) => setField('wishlist', text)}
        placeholder={t('personalization.step7.placeholder')}
        placeholderTextColor="$textSecondary"
        textAlign="right"
        backgroundColor={colors.surface}
        borderWidth={1}
        borderColor={colors.border}
        borderRadius={radius.lg}
        color={colors.text}
        fontSize={fontSize.md}
        padding="$md"
        height={size.cardImg}
        textAlignVertical="top"
        style={{ paddingTop: spacing.lg }}
      />
    </YStack>
  );
};
