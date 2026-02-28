import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { YStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { LoginBackground } from '../components/LoginBackground';
import { AppLogo } from '../components/AppLogo';
import { LoginCard } from '../components/LoginCard';
import { RegisterLink } from '../components/RegisterLink';

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [phone, setPhone] = useState('');

  const handleSendCode = () => {
    // TODO: Replace with real SMS OTP flow (e.g. Firebase Auth, Twilio Verify)
    navigation.replace('Personalization');
  };

  return (
    <LoginBackground>
      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <YStack
          flex={1}
          justifyContent="space-between"
          paddingHorizontal="$xxl"
          paddingTop={72}
          paddingBottom="$xxxl"
        >
          <AppLogo />
          <LoginCard phone={phone} onPhoneChange={setPhone} onSubmit={handleSendCode} />
          <RegisterLink />
        </YStack>
      </KeyboardAvoidingView>
    </LoginBackground>
  );
};

const styles = StyleSheet.create({
  kav: { flex: 1 },
});
