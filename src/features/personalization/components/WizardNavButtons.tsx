import React from 'react';
import { XStack, Button, Text } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { colors, radius, fontSize, size } from '../../../core/theme/tokens';

interface WizardNavButtonsProps {
  onBack?: () => void; // Optional if on the first step
  onNext: () => void;
  isLastStep: boolean;
  isNextDisabled: boolean;
}

export const WizardNavButtons = ({ onBack, onNext, isLastStep, isNextDisabled }: WizardNavButtonsProps) => {
  const { t, i18n } = useTranslation();

  return (
    <XStack 
      gap="$md" 
      paddingVertical="$xl" 
      width="100%" 
    >
      {onBack && (
        <Button
          flex={1}
          height={size.btnHeight}
          backgroundColor="transparent"
          borderWidth={1}
          borderColor={colors.border}
          borderRadius={radius.lg}
          onPress={onBack}
        >
          <Text color={colors.text} fontSize={fontSize.md} fontWeight="600">
            {t('personalization.nav.back')}
          </Text>
        </Button>
      )}

      <Button
        flex={1}
        height={size.btnHeight}
        backgroundColor={colors.primary}
        borderRadius={radius.lg}
        onPress={onNext}
        disabled={isNextDisabled}
        opacity={isNextDisabled ? 0.5 : 1}
      >
        <Text color={colors.surface} fontSize={fontSize.md} fontWeight="700">
          {isLastStep ? t('personalization.nav.submit') : t('personalization.nav.next')}
        </Text>
      </Button>
    </XStack>
  );
};
