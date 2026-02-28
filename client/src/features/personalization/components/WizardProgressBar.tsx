import React, { useEffect } from 'react';
import { YStack, Text, XStack } from 'tamagui';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { colors, radius, fontSize, size } from '../../../core/theme/tokens';
import { isRTL } from '../../../core/i18n';

interface WizardProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const WizardProgressBar = ({ currentStep, totalSteps }: WizardProgressBarProps) => {
  const { t, i18n } = useTranslation();
  const progress = useSharedValue(0);
  const rtl = isRTL(i18n.language);

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
    <YStack gap="$sm" width="100%" {...{ dir: rtl ? 'rtl' : 'ltr' }}>
      <XStack justifyContent="space-between" alignItems="center">
        <Text color={colors.textSecondary} fontSize={fontSize.sm} fontWeight="600" textAlign="auto">
          {t('personalization.progress', { current: currentStep, total: totalSteps })}
        </Text>
      </XStack>
      
      <YStack width="100%" height={size.trackHeight} backgroundColor={colors.border} borderRadius={radius.full} overflow="hidden">
        {/* Use logical start property instead of left/right */}
        <Animated.View style={[animatedStyle, { position: 'absolute', bottom: 0, start: 0 }]} />
      </YStack>
    </YStack>
  );
};
