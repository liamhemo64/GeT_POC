import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { Message } from '../types';

interface Props {
  message: Message;
  isRTL?: boolean;
}

export function MessageBubble({ message, isRTL }: Props) {
  const isUser = message.role === 'user';
  
  // Combine reverse logic based on user role and RTL mode
  const isReversed = isRTL ? !isUser : isUser;

  return (
    <View
      className={`flex-row items-end gap-sm mb-md w-full ${isUser ? 'justify-end' : 'justify-start'} ${isRTL ? 'flex-row-reverse' : ''}`}
    >
      {!isUser && (
        <View className="w-avatar-sm h-avatar-sm rounded-avatar-sm bg-accent items-center justify-center overflow-hidden">
          <Ionicons name="sparkles" size={13} color="#1D2549" />
        </View>
      )}
      
      <View
        className={`max-w-[75%] rounded-lg px-3.5 py-2.5 ${
          isUser
            ? 'bg-primary'
            : 'bg-surface border border-border'
        }`}
      >
        <Text
          className={`text-sm leading-snug ${isRTL ? 'text-right' : 'text-left'} ${
            isUser ? 'text-white' : 'text-primary'
          }`}
        >
          {message.content}
        </Text>
        <Text
          className={`text-xs mt-1.5 opacity-70 ${isRTL ? 'text-right' : 'text-left'} ${
            isUser ? 'text-white' : 'text-text-secondary'
          }`}
        >
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>

      {isUser && (
        <View className="w-avatar-sm h-avatar-sm rounded-avatar-sm items-center justify-center overflow-hidden">
          <View className="w-full h-full bg-primary items-center justify-center">
             <Ionicons name="person" size={13} color="#FFFFFF" />
          </View>
        </View>
      )}
    </View>
  );
}
