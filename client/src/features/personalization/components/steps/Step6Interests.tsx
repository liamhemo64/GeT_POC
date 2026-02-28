import React from 'react';
import { YStack, Text, XStack } from 'tamagui';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { usePersonalizationStore } from '../../../../store/usePersonalizationStore';
import { colors, radius, fontSize } from '../../../../core/theme/tokens';
import { isRTL } from '../../../../core/i18n';

const INTERESTS = [
  { id: 'art' },
  { id: 'culinary' },
  { id: 'nightlife' },
  { id: 'anime' },
  { id: 'shopping' },
  { id: 'nature' },
  { id: 'culture' },
  { id: 'history' },
  { id: 'sport' },
  { id: 'photography' },
  { id: 'architecture' },
  { id: 'relaxing' },
  { id: 'festivals' },
];

export const Step6Interests = () => {
  const { t, i18n } = useTranslation();
  const { data, setField } = usePersonalizationStore();
  const rtl = isRTL(i18n.language);

  const toggleInterest = (id: string) => {
    let current = [...data.interests];
    if (current.includes(id)) {
      current = current.filter(i => i !== id);
    } else {
      current.push(id);
    }
    setField('interests', current);
  };

  return (
    <YStack gap="$xl" flex={1} {...{ dir: rtl ? 'rtl' : 'ltr' }}>
      <Text 
        fontSize={fontSize['2xl']} 
        fontWeight="700" 
        color={colors.primary} 
        textAlign="auto"
      >
        {t('personalization.step6.title')}
      </Text>

      <XStack flexWrap="wrap" gap="$md">
        {INTERESTS.map(({ id }) => {
          const isSelected = data.interests.includes(id);
          return (
            <TouchableOpacity
              key={id}
              onPress={() => toggleInterest(id)}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isSelected ? colors.primary : colors.surface,
                borderWidth: isSelected ? 0 : 1,
                borderColor: colors.border,
                borderRadius: radius.full,
                paddingHorizontal: '$lg' as any,
                paddingVertical: '$md' as any,
              }}
            >
              <Text 
                color={isSelected ? colors.surface : colors.text} 
                fontSize={fontSize.sm} 
                fontWeight={isSelected ? '600' : '500'}
                textAlign="auto"
              >
                {t(`personalization.step6.${id}`)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </XStack>
    </YStack>
  );
};
