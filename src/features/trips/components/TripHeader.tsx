import React from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, ScrollView, Pressable, Platform } from "react-native";
import { ThemedText as Text } from "../../../core/components/ThemedText";
import type { Trip } from "../types";
import { useTranslatedContent } from "../../../core/hooks/useTranslatedContent";

type TripHeaderProps = {
  trips: Trip[];
  selectedTripId: string;
  onSelectTrip: (tripId: string) => void;
};

export function TripHeader({
  trips,
  selectedTripId,
  onSelectTrip,
}: TripHeaderProps) {
  const { t, isRTL } = useTranslatedContent();
  const insets = useSafeAreaInsets();
  const selectedTrip = trips.find((trip) => trip.id === selectedTripId);

  return (
    <View>
      <View className="px-4 pt-2 pb-2 ">
        <Text
          className={`text-2xl font-bold w-full ${isRTL ? "text-right" : "text-left"}`}
          style={{ color: "#1D2549" }}
        >
          {t({ en: "Your Journey", he: "המסע שלך", ja: "あなたの旅" })}
        </Text>

        {selectedTrip && (
          <Text
            className={`text-sm mt-1 w-full ${isRTL ? "text-right" : "text-left"}`}
            style={{ color: "#1D2549", opacity: 0.6 }}
          >
            {t(selectedTrip.name)}
          </Text>
        )}

        <View style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4"
            contentContainerStyle={{
              gap: 12,
              flexDirection: 'row',
            }}
          >
            {trips.map((trip) => {
              const isActive = trip.id === selectedTripId;
              return (
                <Pressable
                  key={trip.id}
                  onPress={() => onSelectTrip(trip.id)}
                  className={`rounded-2xl px-4 py-3 ${
                    isActive ? "border-2" : "border border-gray-300"
                  }`}
                  style={isActive ? { backgroundColor: "#1D2549" } : undefined}
                >
                  <Text
                    className="text-sm font-semibold"
                    style={{ color: isActive ? "#FFFFFF" : "#1D2549" }}
                  >
                    {t(trip.name).split(" - ")[0]}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
