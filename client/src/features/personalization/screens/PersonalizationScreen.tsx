import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { WizardController } from '../components/WizardController';
import { apiClient } from '../../../core/api/client';
import { colors } from '../../../core/theme/tokens';
import { usePersonalizationStore } from '../../../store/usePersonalizationStore';

export const PersonalizationScreen = () => {
  const navigation = useNavigation<any>();
  const data = usePersonalizationStore(state => state.data);

  const handleComplete = async () => {
    console.log("Wizard Data Submitted:", JSON.stringify(data, null, 2));

    try {
      const requestDto = {
        ArrivalDate: data.arrivalDate,
        DepartureDate: data.departureDate,
        ArrivalCity: data.arrivalLocation,
        DepartureCity: data.departureLocation,
        GroupComposition: data.travelGroup === 'family' ? data.familySub : data.travelGroup,
        CarRental: data.rentCar === true,
        AmusementParks: data.selectedParks || [],
        Pace: data.travelPace || 2,
        NaturePreference: data.natureLevel || 2,
        CityPreference: data.cityLevel || 2,
        Interests: data.interests || [],
        FreeText: data.wishlist || ""
      };

      console.log("Sending request to backend:", JSON.stringify(requestDto, null, 2));
      const response = await apiClient.post('/api/trips/generate-prompt', requestDto);
      console.log('Generate Prompt Response:', response.data);
    } catch (error) {
      console.error('Error generating prompt:', error);
    }

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
