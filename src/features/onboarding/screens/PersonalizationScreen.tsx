import React, { useMemo } from 'react';
import { View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { ThemedText as Text } from '../../../core/components/ThemedText';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { usePreferencesStore } from '../../../core/store/usePreferencesStore';
import { InterestButton } from '../../../core/components/InterestButton';
import { SectionHeader } from '../../../core/components/SectionHeader';
import { ScreenWrapper } from '../../../core/components/ScreenWrapper';
import { isRTL } from '../../../core/i18n';

function SimpleSlider({ value, onValueChange, labels, isRightToLeft }: { value: number; onValueChange: (v: number) => void; labels: string[], isRightToLeft: boolean }) {
  return (
    <View 
      className="gap-sm mt-sm"
      style={{ flexDirection: isRightToLeft && Platform.OS !== 'web' ? 'row-reverse' : 'row' }}
    >
      {labels.map((label, i) => {
        // We need to map the visual index to the logical value
        // Use visual index for display order
        const logicalIndex = isRightToLeft ? labels.length - 1 - i : i;
        const segmentValue = (i / (labels.length - 1)) * 100;
        
        // However, the value passed to onValueChange needs to correspond to the label's meaning
        // If we reverse the row, the first item visually (rightmost) is the last in the array?
        // Wait, row-reverse:
        // [Label3] [Label2] [Label1]
        // If user clicks Label1 (now on left in RTL? No, row-reverse starts from right):
        // LTR: [1][2][3]
        // RTL (row-reverse): [3][2][1] -> 1 is on the right.
        // User wants "Relaxed" (1st item) on the Right? Usually RTL timelines go Right to Left.
        // So 1st item (Relaxed) should be on the Right.
        // row-reverse puts the *last* item first? No, it just reverses direction.
        // Flex-start is right.
        // [1] [2] [3] -> (row-reverse) -> [3] [2] [1] (visual order from left to right?)
        // Actually row-reverse aligns items from right to left if enclosed?
        // Let's stick to standard RN row-reverse: renders children in reverse order.
        // If we want [Relaxed (Right)] ... [Adventure (Left)]
        // We should just render them in normal order but with flex-direction: row-reverse.
        // Then the first child (Relaxed) will be on the right (flex-end).
        // So we keep the map index `i` as is.
        
        const isActive = Math.abs(value - segmentValue) < 100 / (labels.length - 1) / 2 + 1;
        return (
          <TouchableOpacity
            key={label}
            onPress={() => onValueChange(segmentValue)}
            className={`flex-1 py-md rounded-md items-center border ${
              isActive
                ? 'bg-primary border-primary'
                : 'bg-surface border-border'
            }`}
          >
            <Text className={`text-sm font-medium ${isActive ? 'text-white' : 'text-primary'}`}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export function PersonalizationScreen() {
  const navigation = useNavigation<any>();
  const { t, i18n } = useTranslation();
  const isRightToLeft = isRTL(i18n.language);
  
  const {
      selectedInterests,
      adventureLevel,
      budgetLevel,
      toggleInterest,
      setAdventureLevel,
      setBudgetLevel,
      completeOnboarding,
    } = usePreferencesStore();

  const interests = useMemo(() => [
    { id: 'nature', label: t('personalization.interests.nature') },
    { id: 'temples', label: t('personalization.interests.temples') },
    { id: 'food', label: t('personalization.interests.food') },
    { id: 'nightlife', label: t('personalization.interests.nightlife') },
    { id: 'culture', label: t('personalization.interests.culture') },
    { id: 'shopping', label: t('personalization.interests.shopping') },
    { id: 'anime', label: t('personalization.interests.anime') },
    { id: 'hiking', label: t('personalization.interests.hiking') },
    { id: 'onsen', label: t('personalization.interests.onsen') },
  ], [t]);

  const adventureLevels = useMemo(() => [
    t('personalization.levels.relaxed'),
    t('personalization.levels.moderate'),
    t('personalization.levels.adventure')
  ], [t]);

  const budgetLevels = useMemo(() => [
    t('personalization.levels.budget'),
    t('personalization.levels.midrange'),
    t('personalization.levels.luxury')
  ], [t]);

  const handleContinue = () => {
    completeOnboarding();
    // Navigate to Main/Dashboard
    navigation.replace('Main'); 
  };

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View style={{ direction: isRightToLeft && Platform.OS === 'web' ? 'rtl' : 'ltr' }}>
            <SectionHeader 
            title={t('personalization.title')} 
            subtitle={t('personalization.subtitle')} 
            />

            <Text 
                className={`text-md font-semibold text-primary mb-md mt-lg ${isRightToLeft ? 'text-right' : 'text-left'}`}
            >
            {t('personalization.interestsTitle')}
            </Text>
            
            <View 
                className="flex-wrap mb-sm" 
                style={{ flexDirection: isRightToLeft && Platform.OS !== 'web' ? 'row-reverse' : 'row' }}
            >
            {interests.map((interest) => (
                <InterestButton
                key={interest.id}
                label={interest.label}
                selected={selectedInterests.includes(interest.id)}
                onPress={() => toggleInterest(interest.id)}
                />
            ))}
            </View>

            <View className="mt-sm mb-sm">
            <Text 
                className={`text-md font-semibold text-primary mb-md mt-lg ${isRightToLeft ? 'text-right' : 'text-left'}`}
            >
                {t('personalization.adventureTitle')}
            </Text>
            <SimpleSlider
                value={adventureLevel}
                onValueChange={setAdventureLevel}
                labels={adventureLevels}
                isRightToLeft={isRightToLeft}
            />
            </View>

            <View className="mt-sm mb-sm">
            <Text 
                className={`text-md font-semibold text-primary mb-md mt-lg ${isRightToLeft ? 'text-right' : 'text-left'}`}
            >
                {t('personalization.budgetTitle')}
            </Text>
            <SimpleSlider
                value={budgetLevel}
                onValueChange={setBudgetLevel}
                labels={budgetLevels}
                isRightToLeft={isRightToLeft}
            />
            </View>

            <TouchableOpacity
            onPress={handleContinue}
            activeOpacity={0.85}
            className="bg-primary rounded-md items-center mt-xxl py-lg"
            >
            <Text className="text-md font-bold text-white">
                {t('personalization.startExploring')}
            </Text>
            </TouchableOpacity>

            <View className="h-xxxl" />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

