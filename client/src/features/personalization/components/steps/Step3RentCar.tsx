import React from 'react';
import { YStack, Text, XStack } from 'tamagui';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { usePersonalizationStore } from '../../../../store/usePersonalizationStore';
import { isRTL } from '../../../../core/i18n';
import { colors, radius, fontSize, spacing } from '../../../../core/theme/tokens';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export const Step3RentCar = () => {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);
  const { data, setField } = usePersonalizationStore();

  const handleSelect = (value: boolean) => {
    setField('rentCar', value);
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
        {t('personalization.stepRentCar.title')}
      </Text>

      <XStack gap="$md">
        {/* Yes Option */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleSelect(true)}
          style={{ flex: 1 }}
        >
          <YStack
            backgroundColor={data.rentCar === true ? colors.primary : colors.surface}
            padding="$lg"
            borderRadius={radius.lg}
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            borderColor={data.rentCar === true ? colors.primary : colors.border}
            minHeight={80}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: data.rentCar === true ? 0.1 : 0.05,
              shadowRadius: 8,
              elevation: data.rentCar === true ? 4 : 0,
            }}
          >
            <Text 
              color={data.rentCar === true ? colors.surface : colors.text} 
              fontSize={fontSize.lg} 
              fontWeight="600"
              textAlign="auto"
            >
              {t('personalization.stepRentCar.yes')}
            </Text>
          </YStack>
        </TouchableOpacity>

        {/* No Option */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleSelect(false)}
          style={{ flex: 1 }}
        >
          <YStack
            backgroundColor={data.rentCar === false ? colors.primary : colors.surface}
            padding="$lg"
            borderRadius={radius.lg}
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            borderColor={data.rentCar === false ? colors.primary : colors.border}
            minHeight={80}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: data.rentCar === false ? 0.1 : 0.05,
              shadowRadius: 8,
              elevation: data.rentCar === false ? 4 : 0,
            }}
          >
            <Text 
              color={data.rentCar === false ? colors.surface : colors.text} 
              fontSize={fontSize.lg} 
              fontWeight="600"
              textAlign="auto"
            >
              {t('personalization.stepRentCar.no')}
            </Text>
          </YStack>
        </TouchableOpacity>
      </XStack>
    </YStack>
  );
};
