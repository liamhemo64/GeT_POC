import React from 'react';
import { YStack, Text, XStack, View } from 'tamagui';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { usePersonalizationStore } from '../../../../store/usePersonalizationStore';
import { TravelGroup, FamilySub } from '../../types/wizard.types';
import { colors, radius, fontSize, spacing } from '../../../../core/theme/tokens';

const GROUPS: { id: TravelGroup; emoji: string; key: string }[] = [
  { id: 'solo', emoji: '👤', key: 'solo' },
  { id: 'couple', emoji: '👫', key: 'couple' },
  { id: 'friends', emoji: '🏕️', key: 'friends' },
  { id: 'family', emoji: '👨‍👩‍👧‍👦', key: 'family' },
];

export const Step2TravelGroup = () => {
  const { t, i18n } = useTranslation();
  const { data, setField } = usePersonalizationStore();

  const handleGroupSelect = (id: TravelGroup) => {
    setField('travelGroup', id);
    if (id !== 'family') {
      setField('familySub', null); // clear sub-selection if changed
    }
  };

  return (
    <YStack gap="$xl" flex={1}>
      <Text 
        fontSize={fontSize['2xl']} 
        fontWeight="800" 
        color={colors.primary} 
        textAlign="auto"
      >
        {t('personalization.step2.title')}
      </Text>

      <XStack flexWrap="wrap" gap="$md" justifyContent="space-between">
        {GROUPS.map((group) => {
          const isSelected = data.travelGroup === group.id;
          return (
            <TouchableOpacity
              key={group.id}
              onPress={() => handleGroupSelect(group.id)}
              activeOpacity={0.7}
              style={{
                width: '48%', // Keep percentage for simple CSS column layout
                backgroundColor: isSelected ? colors.primary : colors.surface,
                borderWidth: isSelected ? 0 : 1,
                borderColor: colors.border,
                borderRadius: radius.xl,
                padding: '$lg' as any,
                alignItems: 'center',
                gap: '$sm' as any,
                shadowColor: colors.primaryDark,
                shadowOpacity: isSelected ? 0.2 : 0,
                shadowRadius: radius.lg,
                shadowOffset: { width: 0, height: 4 },
                elevation: isSelected ? 4 : 0,
              }}
            >
              <Text fontSize={fontSize.title}>{group.emoji}</Text>
              <Text 
                color={isSelected ? colors.surface : colors.text} 
                fontSize={fontSize.md} 
                fontWeight="600"
              >
                {t(`personalization.step2.${group.key}`)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </XStack>

      {/* Dynamic Sub-selection for Family */}
      {data.travelGroup === 'family' && (
        <Animated.View entering={FadeIn.duration(400)} exiting={FadeOut.duration(200)}>
          <YStack gap="$sm" marginTop="$lg">
            {(['youngChildren', 'teens'] as FamilySub[]).map((sub) => {
              const isSelected = data.familySub === sub;
              return (
                <TouchableOpacity
                  key={sub}
                  onPress={() => setField('familySub', sub)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: spacing.lg as any,
                    backgroundColor: isSelected ? 'rgba(29, 37, 73, 0.05)' : 'transparent',
                    borderWidth: 1,
                    borderColor: isSelected ? colors.primary : colors.border,
                    borderRadius: radius.lg,
                  }}
                >
                  <Text color={colors.text} fontSize={fontSize.md} fontWeight={isSelected ? '700' : '500'}>
                    {t(`personalization.step2.${sub}`)}
                  </Text>
                  <View 
                    width={spacing.xl} 
                    height={spacing.xl} 
                    borderRadius={radius.sm} 
                    borderWidth={2} 
                    borderColor={isSelected ? colors.primary : colors.border}
                    backgroundColor={isSelected ? colors.primary : 'transparent'}
                  />
                </TouchableOpacity>
              );
            })}
          </YStack>
        </Animated.View>
      )}
    </YStack>
  );
};
