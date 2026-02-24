import React from 'react';
import { View } from 'react-native';
import { ThemedText as Text, ThemedTextInput as TextInput } from './ThemedText';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon: keyof typeof Ionicons.glyphMap;
  secureTextEntry?: boolean;
  error?: string;
}

export function AuthInput({ placeholder, value, onChangeText, icon, secureTextEntry, error }: Props) {
  return (
    <View className="mb-md">
      <View
        className={`flex-row items-center rounded-md border px-3.5 ${
          error ? 'border-error' : 'border-border'
        }`}
        style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
      >
        <Ionicons name={icon} size={17} color="#6B7280" className="me-2.5" />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#6B7280"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          className="flex-1 text-md text-primary py-3.5"
          autoCapitalize="none"
        />
      </View>
      {error && (
        <Text className="text-error text-xs mt-xs ps-xs">
          {error}
        </Text>
      )}
    </View>
  );
}
