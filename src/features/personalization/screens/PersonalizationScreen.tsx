import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { View } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { WizardController } from '../components/WizardController';
import { colors } from '../../../core/theme/tokens';
import { usePersonalizationStore } from '../../../store/usePersonalizationStore';

export const PersonalizationScreen = () => {
  const navigation = useNavigation<any>();
  const data = usePersonalizationStore(state => state.data);

  const handleComplete = () => {
    console.log("Wizard Data Submitted:", JSON.stringify(data, null, 2));
    // Submitting and routing to feed
    navigation.replace('Feed');
  };

  return (
    <View flex={1} backgroundColor={colors.background}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <SafeAreaView style={styles.safeArea}>
        <WizardController onComplete={handleComplete} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
});
