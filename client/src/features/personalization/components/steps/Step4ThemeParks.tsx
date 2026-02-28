import React from 'react';
import { YStack, Text, XStack } from 'tamagui';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { usePersonalizationStore } from '../../../../store/usePersonalizationStore';
import { isRTL } from '../../../../core/i18n';
import { colors, radius, fontSize, spacing } from '../../../../core/theme/tokens';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const PARKS = [
  { id: 'disneySea', titleKey: 'personalization.stepThemeParks.disneySea', descKey: 'personalization.stepThemeParks.disneySeaDesc' },
  { id: 'universal', titleKey: 'personalization.stepThemeParks.universal', descKey: 'personalization.stepThemeParks.universalDesc' },
  { id: 'fujiQ', titleKey: 'personalization.stepThemeParks.fujiQ', descKey: 'personalization.stepThemeParks.fujiQDesc' },
];

export const Step4ThemeParks = () => {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);
  const { data, setField } = usePersonalizationStore();

  const handleSelectLoveParks = (value: boolean) => {
    setField('loveParks', value);
    if (!value) {
      // Clear selected parks if they change answer to false
      setField('selectedParks', []);
    }
  };

  const togglePark = (parkId: string) => {
    const current = data.selectedParks || [];
    if (current.includes(parkId)) {
      setField('selectedParks', current.filter((id: string) => id !== parkId));
    } else {
      setField('selectedParks', [...current, parkId]);
    }
  };

  return (
    <YStack 
      flex={1} 
      gap="$xl"
      {...{ dir: rtl ? 'rtl' : 'ltr' }}
    >
      <Text 
        fontSize={24} 
        fontWeight="bold" 
        color={colors.text}
        textAlign="auto"
      >
        {t('personalization.stepThemeParks.title')}
      </Text>

      <XStack gap="$md">
        {/* Yes Option */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleSelectLoveParks(true)}
          style={{ flex: 1 }}
        >
          <YStack
            backgroundColor={data.loveParks === true ? colors.primary : colors.surface}
            padding="$lg"
            borderRadius={radius.lg}
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            borderColor={data.loveParks === true ? colors.primary : colors.border}
            minHeight={80}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: data.loveParks === true ? 0.1 : 0.05,
              shadowRadius: 8,
              elevation: data.loveParks === true ? 4 : 0,
            }}
          >
            <Text 
              color={data.loveParks === true ? colors.surface : colors.text} 
              fontSize={fontSize.lg} 
              fontWeight="600"
              textAlign="auto"
            >
              {t('personalization.stepThemeParks.yes')}
            </Text>
          </YStack>
        </TouchableOpacity>

        {/* No Option */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleSelectLoveParks(false)}
          style={{ flex: 1 }}
        >
          <YStack
            backgroundColor={data.loveParks === false ? colors.primary : colors.surface}
            padding="$lg"
            borderRadius={radius.lg}
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            borderColor={data.loveParks === false ? colors.primary : colors.border}
            minHeight={80}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: data.loveParks === false ? 0.1 : 0.05,
              shadowRadius: 8,
              elevation: data.loveParks === false ? 4 : 0,
            }}
          >
            <Text 
              color={data.loveParks === false ? colors.surface : colors.text} 
              fontSize={fontSize.lg} 
              fontWeight="600"
              textAlign="auto"
            >
              {t('personalization.stepThemeParks.no')}
            </Text>
          </YStack>
        </TouchableOpacity>
      </XStack>

      {/* Parks Selection List */}
      {data.loveParks && (
        <Animated.View entering={FadeIn.duration(400)} exiting={FadeOut.duration(300)}>
          <YStack gap="$md" marginTop="$lg">
            <Text 
              fontSize={fontSize.lg} 
              fontWeight="600" 
              color={colors.text}
              textAlign="auto"
              marginBottom="$sm"
            >
              {t('personalization.stepThemeParks.subtitle')}
            </Text>
            
            {PARKS.map((park) => {
              const isSelected = data.selectedParks?.includes(park.id);
              
              return (
                <TouchableOpacity
                  key={park.id}
                  activeOpacity={0.7}
                  onPress={() => togglePark(park.id)}
                >
                  <YStack
                    backgroundColor={isSelected ? colors.primary : colors.surface}
                    padding="$lg"
                    borderRadius={radius.lg}
                    borderWidth={1}
                    borderColor={isSelected ? colors.primary : colors.border}
                    gap="$xs"
                  >
                    <Text 
                      color={isSelected ? colors.surface : colors.text} 
                      fontSize={fontSize.md} 
                      fontWeight="bold"
                      textAlign="auto"
                    >
                      {t(park.titleKey)}
                    </Text>
                    <Text 
                      color={isSelected ? 'rgba(255,255,255,0.8)' : colors.textSecondary} 
                      fontSize={fontSize.sm} 
                      textAlign="auto"
                    >
                      {t(park.descKey)}
                    </Text>
                  </YStack>
                </TouchableOpacity>
              );
            })}
          </YStack>
        </Animated.View>
      )}
    </YStack>
  );
};
