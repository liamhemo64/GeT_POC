import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { ThemedText as Text } from "../../../core/components/ThemedText";
import type { TripDay } from '../types';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';

type DaySelectorProps = {
  days: TripDay[];
  selectedDay: number;
  onSelectDay: (day: number) => void;
};

export function DaySelector({ days, selectedDay, onSelectDay }: DaySelectorProps) {
  const { t, isRTL } = useTranslatedContent();

  return (
    <View style={{ direction: isRTL ? 'rtl' : 'ltr' }} className="mt-4 px-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, flexDirection: 'row' }}
      >
        {days.map((dayData) => {
        const isActive = dayData.day === selectedDay;
        const label = t({
          en: `Day ${dayData.day}`,
          he: `יום ${dayData.day}`,
          ja: `${dayData.day}日目`,
        });
        return (
          <Pressable
            key={dayData.day}
            onPress={() => onSelectDay(dayData.day)}
            className="rounded-2xl px-4 py-2"
            style={
              isActive
                ? { backgroundColor: '#FFB7C5' }
                : { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#D1D5DB' }
            }
          >
            <Text
              className="text-sm font-semibold"
              style={{ color: isActive ? '#1D2549' : '#6B7280' }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
    </View>
  );
}
