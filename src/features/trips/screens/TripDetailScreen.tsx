import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { trips } from '../../../constants/mockData';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';
import { ScreenWrapper } from '../../../core/components/ScreenWrapper';
import { TripHeader } from '../components/TripHeader';
import { DaySelector } from '../components/DaySelector';
import { ItineraryTimeline } from '../components/ItineraryTimeline';

const DEFAULT_TRIP_ID = 'grand-japan-tour';

export function TripDetailScreen() {
  const { t, isRTL } = useTranslatedContent();
  const [selectedTripId, setSelectedTripId] = useState(DEFAULT_TRIP_ID);
  const [selectedDay, setSelectedDay] = useState(1);

  const selectedTrip = useMemo(
    () => trips.find((trip) => trip.id === selectedTripId),
    [selectedTripId],
  );

  const currentDayData = useMemo(
    () => selectedTrip?.days.find((d) => d.day === selectedDay),
    [selectedTrip, selectedDay],
  );

  const handleSelectTrip = (tripId: string) => {
    setSelectedTripId(tripId);
    setSelectedDay(1);
  };

  if (!selectedTrip || !currentDayData) {
    return null;
  }

  return (
    <ScreenWrapper>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Trip selector header */}
        <TripHeader
          trips={trips}
          selectedTripId={selectedTripId}
          onSelectTrip={handleSelectTrip}
        />

        {/* Day selector pills */}
        <DaySelector
          days={selectedTrip.days}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />

        {/* Day title & date */}
        <View className="px-4 mt-5">
          <Text
            className={`text-lg font-bold w-full ${isRTL ? 'text-right' : 'text-left'}`}
            style={{ color: '#1D2549' }}
          >
            {t(currentDayData.title)}
          </Text>
          <Text
            className={`text-sm mt-1 w-full ${isRTL ? 'text-right' : 'text-left'}`}
            style={{ color: '#6B7280' }}
          >
            {t(currentDayData.date)}
          </Text>
        </View>

        {/* Timeline */}
        <ItineraryTimeline items={currentDayData.items} />

        {/* Bottom spacing for tab bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </ScreenWrapper>
  );
}
