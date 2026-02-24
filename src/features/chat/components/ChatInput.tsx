import React from 'react';
import { View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  placeholder?: string;
  isRTL?: boolean;
}

export function ChatInput({ value, onChangeText, onSend, placeholder, isRTL }: Props) {
  const { t } = useTranslation();
  const hasText = value.trim().length > 0;

  return (
    <View className="px-lg py-2.5 bg-background">
      <View className={`flex-row items-center bg-surface rounded-pill border border-border px-lg py-sm gap-md ${isRTL ? 'flex-row-reverse' : ''}`}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder ?? t('chat.inputPlaceholder', 'Type a message...')}
          placeholderTextColor="#6B7280"
          className={`flex-1 text-md text-primary pb-2 ${isRTL ? 'text-right' : 'text-left'}`}
          style={{ textAlignVertical: 'center', height: '100%' }}
          returnKeyType="send"
          onSubmitEditing={hasText ? onSend : undefined}
          textAlign={isRTL ? 'right' : 'left'}
        />
        <TouchableOpacity
          onPress={onSend}
          disabled={!hasText}
          className={`w-btn-icon h-btn-icon rounded-btn-icon items-center justify-center ${
            hasText ? 'bg-primary' : 'bg-transparent'
          } `}
          activeOpacity={0.7}
        >
          <Ionicons name="send" size={16} color={hasText ? '#FFFFFF' : '#6B7280'} style={isRTL ? { transform: [{ scaleX: -1 }] } : {}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
