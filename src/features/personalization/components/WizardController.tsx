import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { YStack } from 'tamagui';
import Animated, { SlideInRight, SlideOutLeft, SlideInLeft, SlideOutRight, FadeIn, FadeOut } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { usePersonalizationStore } from '../../../store/usePersonalizationStore';
import { isRTL } from '../../../core/i18n';
import { WIZARD_STEP_COUNT } from '../types/wizard.types';

// Components
import { WizardProgressBar } from './WizardProgressBar';
import { WizardNavButtons } from './WizardNavButtons';
import { spacing } from '../../../core/theme/tokens';
import { Step1Dates } from './steps/Step1Dates';
import { Step2Locations } from './steps/Step2Locations';
import { Step2TravelGroup } from './steps/Step2TravelGroup';
import { ScaleStep } from './steps/ScaleStep';
import { Step6Interests } from './steps/Step6Interests';
import { Step7Wishlist } from './steps/Step7Wishlist';

interface WizardControllerProps {
  onComplete: () => void;
}

export const WizardController = ({ onComplete }: WizardControllerProps) => {
  const { i18n } = useTranslation();
  const rtl = isRTL(i18n.language);
  const { data } = usePersonalizationStore();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const handleNext = () => {
    if (currentStep < WIZARD_STEP_COUNT) {
      setDirection('forward');
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection('backward');
      setCurrentStep(prev => prev - 1);
    }
  };

  // Determine if 'Next' should be disabled based on current step validation
  const isNextDisabled = () => {
    switch (currentStep) {
      case 1: return !data.arrivalDate || !data.departureDate;
      case 2: return !data.arrivalLocation || !data.departureLocation;
      case 3: return !data.travelGroup || (data.travelGroup === 'family' && !data.familySub);
      case 4: return !data.travelPace;
      case 5: return !data.natureLevel;
      case 6: return !data.cityLevel;
      case 7: return data.interests.length === 0;
      case 8: return false; // Wishlist is optional
      default: return false;
    }
  };

  // Logic to determine animation direction based on LTR/RTL and Forward/Backward
  const enteringAnim = () => {
    if (direction === 'forward') return rtl ? SlideInLeft : SlideInRight;
    return rtl ? SlideInRight : SlideInLeft;
  };

  const exitingAnim = () => {
    if (direction === 'forward') return rtl ? SlideOutRight : SlideOutLeft;
    return rtl ? SlideOutLeft : SlideOutRight;
  };

  return (
    <YStack flex={1} paddingHorizontal="$xxl" paddingTop="$xl" paddingBottom="$md">
      {/* Progress */}
      <View style={{ marginBottom: spacing.xxxl }}>
        <WizardProgressBar currentStep={currentStep} totalSteps={WIZARD_STEP_COUNT} />
      </View>

      {/* Animated Step Container */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, overflow: 'visible' }} contentContainerStyle={{ flexGrow: 1 }}>
        <Animated.View 
          key={currentStep} 
          entering={enteringAnim().springify().damping(24).stiffness(120)}
          exiting={exitingAnim().springify().damping(24).stiffness(120)}
          style={{ flex: 1 }}
        >
          {currentStep === 1 && <Step1Dates />}
          {currentStep === 2 && <Step2Locations />}
          {currentStep === 3 && <Step2TravelGroup />}
          {currentStep === 4 && (
            <ScaleStep
              titleKey="step3.title"
              fieldKey="travelPace"
              options={[
                { value: 1, labelKey: 'step3.relaxed' },
                { value: 2, labelKey: 'step3.moderate' },
                { value: 3, labelKey: 'step3.intensive' },
              ]}
            />
          )}
          {currentStep === 5 && (
            <ScaleStep
              titleKey="step4.title"
              fieldKey="natureLevel"
              options={[
                { value: 1, labelKey: 'step4.viewpoints' },
                { value: 2, labelKey: 'step4.hiking' },
                { value: 3, labelKey: 'step4.camping' },
              ]}
            />
          )}
          {currentStep === 6 && (
            <ScaleStep
              titleKey="step5.title"
              fieldKey="cityLevel"
              options={[
                { value: 1, labelKey: 'step5.abit' },
                { value: 2, labelKey: 'step5.moderate' },
                { value: 3, labelKey: 'step5.alot' },
              ]}
            />
          )}
          {currentStep === 7 && <Step6Interests />}
          {currentStep === 8 && <Step7Wishlist />}
        </Animated.View>
      </ScrollView>

      {/* Navigation Footer */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WizardNavButtons 
          onBack={currentStep > 1 ? handleBack : undefined}
          onNext={handleNext}
          isLastStep={currentStep === WIZARD_STEP_COUNT}
          isNextDisabled={isNextDisabled()}
        />
      </KeyboardAvoidingView>
    </YStack>
  );
};
