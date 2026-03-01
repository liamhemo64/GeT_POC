import React, { useState } from 'react';
import { Button, ScrollView, Text, View, TextInput, Switch } from 'react-native';

export interface TripRequestDto {
  arrivalDate: string;
  departureDate: string;
  arrivalCity: string;
  departureCity: string;
  groupComposition: string;
  carRental: boolean;
  amusementParks: string[];
  pace: number;
  naturePreference: number;
  cityPreference: number;
  interests: string[];
  freeText: string;
}

export const TripPreferencesForm = () => {
  const [formData, setFormData] = useState<TripRequestDto>({
    arrivalDate: new Date().toISOString(),
    departureDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    arrivalCity: 'Tokyo',
    departureCity: 'Osaka',
    groupComposition: 'Family of 4',
    carRental: false,
    amusementParks: ['Universal Studios Japan', 'DisneySea'],
    pace: 2,
    naturePreference: 2,
    cityPreference: 3,
    interests: ['Anime', 'Food', 'Culture'],
    freeText: 'We want to see Mt. Fuji if possible.',
  });

  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Assuming you might need to adjust the URL for Android simulator (e.g. 10.0.2.2 instead of localhost)
      // or use your local machine IP. Using a placeholder here.
      const response = await fetch('http://localhost:5200/api/trips/generate-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedPrompt(data.prompt);
    } catch (error) {
      console.error('Error fetching generated prompt:', error);
      setGeneratedPrompt('Error generating prompt. Ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Trip Preferences Form</Text>
      
      {/* Mocking inputs simply with Text just to show state */}
      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Arrival City:</Text>
        <TextInput 
          style={{ borderWidth: 1, padding: 8, marginTop: 4 }} 
          value={formData.arrivalCity} 
          onChangeText={(text) => setFormData({...formData, arrivalCity: text})} 
        />
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Departure City:</Text>
        <TextInput 
          style={{ borderWidth: 1, padding: 8, marginTop: 4 }} 
          value={formData.departureCity} 
          onChangeText={(text) => setFormData({...formData, departureCity: text})} 
        />
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Group Composition:</Text>
        <TextInput 
          style={{ borderWidth: 1, padding: 8, marginTop: 4 }} 
          value={formData.groupComposition} 
          onChangeText={(text) => setFormData({...formData, groupComposition: text})} 
        />
      </View>
      
      <View style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 8 }}>Car Rental:</Text>
        <Switch 
          value={formData.carRental} 
          onValueChange={(val) => setFormData({...formData, carRental: val})} 
        />
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Free Text Notes:</Text>
        <TextInput 
          style={{ borderWidth: 1, padding: 8, marginTop: 4, height: 80 }} 
          multiline
          value={formData.freeText} 
          onChangeText={(text) => setFormData({...formData, freeText: text})} 
        />
      </View>

      <Button title={loading ? "Generating..." : "Generate AI Prompt"} onPress={handleSubmit} disabled={loading} />

      {generatedPrompt ? (
        <View style={{ marginTop: 20, padding: 16, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Generated Base Prompt:</Text>
          <Text style={{ lineHeight: 22 }}>{generatedPrompt}</Text>
        </View>
      ) : null}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};
