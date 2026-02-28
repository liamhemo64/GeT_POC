import React from 'react';
import { YStack, Text, Input } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { usePersonalizationStore } from '../../../../store/usePersonalizationStore';
import { colors, radius, fontSize, spacing } from '../../../../core/theme/tokens';
import { isRTL } from '../../../../core/i18n';

export const Step2Locations = () => {
  const { t, i18n } = useTranslation();
  const { data, setField } = usePersonalizationStore();
  const rtl = isRTL(i18n.language);

  return (
    <YStack gap="$xl" flex={1} {...{ dir: rtl ? 'rtl' : 'ltr' }}>
      <Text 
        fontSize={fontSize['2xl']} 
        fontWeight="700" 
        color={colors.primary} 
        textAlign="auto"
      >
        {t('personalization.stepLocations.title')}
      </Text>

      <YStack gap="$md">
        <Text color={colors.textSecondary} fontSize={fontSize.md} fontWeight="600" textAlign="auto">
          {t('personalization.stepLocations.arrivalLabel')}
        </Text>
        <Input
          value={data.arrivalLocation}
          onChangeText={(val) => setField('arrivalLocation', val)}
          placeholder={t('personalization.stepLocations.arrivalPlaceholder')}
          backgroundColor={colors.surface}
          borderWidth={1}
          borderColor={data.arrivalLocation ? colors.primary : colors.border}
          borderRadius={radius.lg}
          paddingHorizontal="1rem"
          height="4rem"
          fontSize={fontSize.lg as any}
          color={colors.text as any}
          placeholderTextColor={colors.textSecondary as any}
          textAlign="auto"
          dir={rtl ? 'rtl' : 'ltr'}
        />
      </YStack>

      <YStack gap="$md">
        <Text color={colors.textSecondary} fontSize={fontSize.md} fontWeight="600" textAlign="auto">
          {t('personalization.stepLocations.departureLabel')}
        </Text>
        <Input
          value={data.departureLocation}
          onChangeText={(val) => setField('departureLocation', val)}
          placeholder={t('personalization.stepLocations.departurePlaceholder')}
          backgroundColor={colors.surface}
          borderWidth={1}
          borderColor={data.departureLocation ? colors.primary : colors.border}
          borderRadius={radius.lg}
          paddingHorizontal="1rem"
          height="4rem"
          fontSize={fontSize.lg as any}
          color={colors.text as any}
          placeholderTextColor={colors.textSecondary as any}
          textAlign="auto"
          dir={rtl ? 'rtl' : 'ltr'}
        />
      </YStack>
    </YStack>
  );
};
