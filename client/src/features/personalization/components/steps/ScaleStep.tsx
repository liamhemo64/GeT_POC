import React from 'react';
import { YStack, Text, XStack } from 'tamagui';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { usePersonalizationStore } from '../../../../store/usePersonalizationStore';
import { ScaleValue, WizardData } from '../../types/wizard.types';
import { colors, radius, fontSize } from '../../../../core/theme/tokens';
import { isRTL } from '../../../../core/i18n';

interface ScaleStepProps {
  titleKey: string;
  fieldKey: keyof Pick<WizardData, 'travelPace' | 'natureLevel' | 'cityLevel'>;
  options: {
    value: ScaleValue;
    labelKey: string;
    descKey?: string;
  }[];
}

export const ScaleStep = ({ titleKey, fieldKey, options }: ScaleStepProps) => {
  const { t, i18n } = useTranslation();
  const { data, setField } = usePersonalizationStore();
  const selectedValue = data[fieldKey] as ScaleValue | null;
  const rtl = isRTL(i18n.language);

  return (
    <YStack gap="$xl" flex={1} {...{ dir: rtl ? 'rtl' : 'ltr' }}>
      <Text 
        fontSize={fontSize['2xl']} 
        fontWeight="700" 
        color={colors.primary} 
        textAlign="auto"
      >
        {t(`personalization.${titleKey}`)}
      </Text>

      <YStack gap="$md">
        {options.map((opt) => {
          const isSelected = selectedValue === opt.value;
          return (
            <TouchableOpacity
              key={opt.value}
              onPress={() => setField(fieldKey, opt.value)}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: isSelected ? colors.primary : colors.surface,
                borderWidth: isSelected ? 0 : 1,
                borderColor: colors.border,
                borderRadius: radius.xl,
                padding: '$lg' as any,
                paddingVertical: '$xl' as any,
              }}
            >
              <Text 
                color={isSelected ? colors.surface : colors.text} 
                fontSize={fontSize.md} 
                fontWeight={isSelected ? '700' : '500'}
                textAlign="auto"
              >
                {t(`personalization.${opt.labelKey}`)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </YStack>

      <YStack flex={1} justifyContent="center" padding="$lg" gap="$sm">
        {options.map((opt) => opt.descKey ? (
          <XStack key={`desc-${opt.value}`} alignItems="flex-start" gap="$sm">
            <Text color={colors.primary} fontWeight="bold" fontSize={fontSize.md} width={120} textAlign="auto">
              {t(`personalization.${opt.labelKey}`)}:
            </Text>
            <Text color={colors.text} opacity={0.6} fontSize={fontSize.md} flex={1} textAlign="auto">
              {t(`personalization.${opt.descKey}`)}
            </Text>
          </XStack>
        ) : null)}
      </YStack>
    </YStack>
  );
};
