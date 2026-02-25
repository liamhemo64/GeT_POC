import React, { useEffect } from 'react';
import { YStack, Text, XStack } from 'tamagui';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { colors, radius, fontSize, size } from '../../../core/theme/tokens';

interface WizardProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const WizardProgressBar = ({ currentStep, totalSteps }: WizardProgressBarProps) => {
  const { t } = useTranslation();
  const progress = useSharedValue(0);

  useEffect(() => {
    // 0 to 1 scale
    progress.value = withSpring(currentStep / totalSteps, {
      damping: 20,
      stiffness: 90,
    });
  }, [currentStep, totalSteps, progress]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
      height: size.trackHeight,
      backgroundColor: colors.accent,
      borderRadius: radius.full,
    };
  });

  return (
    <YStack gap="$sm" width="100%">
      <XStack justifyContent="space-between" alignItems="center">
        <Text color={colors.textSecondary} fontSize={fontSize.sm} fontWeight="600">
          {t('personalization.progress', { current: currentStep, total: totalSteps })}
        </Text>
      </XStack>
      
      <YStack width="100%" height={size.trackHeight} backgroundColor={colors.border} borderRadius={radius.full} overflow="hidden">
        {/* Use logical start property instead of left/right */}
        <Animated.View style={[animatedStyle, { position: 'absolute', top: 0, bottom: 0, start: 0 }]} />
      </YStack>
    </YStack>
  );
};
