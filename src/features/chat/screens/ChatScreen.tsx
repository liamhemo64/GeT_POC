import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { FlashList, type FlashListRef } from '@shopify/flash-list';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { MessageBubble } from '../components/MessageBubble';
import { ChatInput } from '../components/ChatInput';
import { TypingIndicator } from '../components/TypingIndicator';
import { TagChip } from '../../../core/components/TagChip';
import type { Message } from '../types';
import { useChatStore } from '../../../core/store/useChatStore';

const QUICK_QUESTIONS = [
  'chat.quick1', // e.g., "Recommend a 7-day itinerary"
  'chat.quick2', // e.g., "Best ramen in Tokyo?"
  'chat.quick3', // e.g., "What is the budget for 2 weeks?"
];

export function ChatScreen() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const { messages: storeMessages, sendMessage, isLoading, addMessage } = useChatStore();
  const [inputValue, setInputValue] = useState('');
  const flashListRef = useRef<FlashListRef<Message>>(null);

  // Add welcome message if we don't have any messages
  useEffect(() => {
    if (storeMessages.length === 0) {
      addMessage(t('chat.welcomeMessage', 'Hello! I am JapanJourney AI. How can I help you plan your trip to Japan?'), 'model');
    }
  }, [storeMessages.length, t, addMessage]);

  const handleSend = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    const query = inputValue;
    setInputValue('');
    await sendMessage(query);
  }, [inputValue, sendMessage, isLoading]);

  const handleQuickQuestion = useCallback(
    (key: string) => {
       const translated = t(key, 'Help me plan a trip');
       sendMessage(translated);
    },
    [sendMessage, t]
  );

  const renderMessage = useCallback(
    ({ item }: { item: Message }) => <MessageBubble message={item} isRTL={isRTL} />,
    [isRTL]
  );

  const keyExtractor = useCallback((item: Message) => item.id, []);

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      {/* Header */}
      <View className={`flex-row items-center gap-md px-lg py-md  ${isRTL ? 'flex-row-reverse' : ''}`}>
        <View className="w-avatar-md h-avatar-md rounded-xl bg-accent items-center justify-center">
          <Ionicons name="sparkles" size={18} color="#1D2549" />  
        </View>
        <View className={`flex-1 ${isRTL ? 'items-end' : 'items-start'}`}>
          <Text className="text-lg font-bold text-primary">
            {t('chat.title', 'Japan AI Assistant')}
          </Text>
          <Text className="text-xs text-text-secondary">
            {t('chat.subtitle', 'Powered by Gemini')}
          </Text>
        </View>
      </View>

      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={0}>
        <FlashList
          ref={flashListRef}
          data={storeMessages}
          keyExtractor={keyExtractor}
          renderItem={renderMessage}
          contentContainerClassName="px-lg pt-lg pb-sm"
          ListFooterComponent={isLoading ? <TypingIndicator isRTL={isRTL} /> : null}
        />

        {storeMessages.length <= 2 && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className={`max-h-12 px-lg mb-xs ${isRTL ? 'flex-row-reverse' : ''}`}>
            {QUICK_QUESTIONS.map((key, i) => (
              <TagChip key={i} label={t(key, key.includes('1') ? '7-day itinerary' : key.includes('2') ? 'Food recommendations' : 'Travel budget')} onPress={() => handleQuickQuestion(key)} />
            ))}
          </ScrollView>
        )}

        <ChatInput value={inputValue} onChangeText={setInputValue} onSend={handleSend} isRTL={isRTL} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
