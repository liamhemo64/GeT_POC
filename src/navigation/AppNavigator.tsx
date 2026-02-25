import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { LoginScreen } from '../features/auth/screens/LoginScreen';
import { PersonalizationScreen } from '../features/personalization/screens/PersonalizationScreen';

const Stack = createNativeStackNavigator();

// Temporary stub screens
const FeedScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Feed Screen</Text></View>;

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Personalization" component={PersonalizationScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
