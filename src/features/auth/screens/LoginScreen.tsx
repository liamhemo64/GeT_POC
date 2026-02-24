import React, { useState } from 'react';
import { View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { ThemedText as Text } from '../../../core/components/ThemedText';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../../core/store/useAuthStore';
import { AuthInput } from '../../../core/components/AuthInput';

// Adjusted path to point to src/utils/Fuji_San.jpg
const FujiSan = require('../../../utils/Fuji_San.jpg');

export function LoginScreen() {
  const navigation = useNavigation<any>();
  const login = useAuthStore((s) => s.login);
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login();
    // Navigate to Personalization screen
    navigation.replace('Personalization');
  };

  return (
    <View className="flex-1 bg-primary-dark">
      {/* Background image — inset-0 is not reliable on native, use explicit style */}
      <Image
        source={FujiSan}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        contentFit="cover"
      />
      {/* Overlay */}
      <View
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.45)' }}
      />

      {/* Content */}
      <KeyboardAvoidingView
        className="flex-1 justify-end px-xxl pb-12 w-full self-center max-w-form"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View className="items-center mb-10">
          <Text className="text-title font-extrabold text-white">
            {t('auth.title')}
          </Text>
          <Text className="text-md mt-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {t('auth.subtitle')}
          </Text>
        </View>

        {/* Form */}
        <View
          className="rounded-xxl p-xl"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
        >
          <AuthInput
            icon="mail-outline"
            placeholder={t('auth.emailPlaceholder')}
            value={email}
            onChangeText={setEmail}
          />
          <AuthInput
            icon="lock-closed-outline"
            placeholder={t('auth.passwordPlaceholder')}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            onPress={handleLogin}
            activeOpacity={0.85}
            className="bg-primary rounded-md items-center mt-sm py-lg"
          >
            <Text className="text-md font-bold text-white">
              {t('auth.loginButton')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            className="items-center py-md"
          >
            <Text className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {t('auth.guestButton')}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

