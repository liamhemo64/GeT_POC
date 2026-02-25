import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

// Temporary stub screens
const AuthScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Auth Screen</Text></View>;
const FeedScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Feed Screen</Text></View>;

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
