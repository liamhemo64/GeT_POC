import React, { useState } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import type { ItineraryItem } from "../types";
import { AttractionDetailsModal } from "./AttractionDetailsModal";
import { useTranslatedContent } from "../../../core/hooks/useTranslatedContent";

type TimelineItemProps = {
  item: ItineraryItem;
  isLast: boolean;
  onPress: (item: ItineraryItem) => void;
};

const ICON_MAP: Record<string, string> = {
  airplane: "✈",
  bed: "🛏",
  walk: "🚶",
  restaurant: "🍜",
  temple: "🏛",
  shopping: "🛍",
  train: "🚄",
  camera: "📷",
};

function TimelineItem({ item, isLast, onPress }: TimelineItemProps) {
  const { t, isRTL } = useTranslatedContent();
  const align = isRTL ? 'text-right' : 'text-left';

  return (
    <View style={{ flexDirection: isRTL && Platform.OS !== 'web' ? 'row-reverse' : 'row', gap: 16 }}>

      {/* 1. עמודת ה-Timeline (האייקון והקו) */}
      <View className="w-10 items-center">
        <View className="w-10 h-10 rounded-full items-center justify-center bg-accent/20">
          <Text className="text-lg">
            {ICON_MAP[item.icon] ?? "⭕"}
          </Text>
        </View>

        {!isLast && (
          <View className="w-0.5 flex-1 bg-accent/40 mt-2" />
        )}
      </View>

      {/* 2. עמודת התוכן */}
      <View style={{ flex: 1, paddingBottom: 24 }}>
        <Text className={`text-xs font-medium w-full ${align}`} style={{ color: '#FFB7C5' }}>
          {item.time}
        </Text>

        <Text className={`text-base font-bold mt-1 w-full ${align}`} style={{ color: '#1D2549' }}>
          {t(item.title)}
        </Text>

        {/* Location row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, gap: 4 }}>
          {isRTL ? (
            Platform.OS === 'web' ? (
              // Web + RTL: CSS direction:rtl reverses visual order, so [📍][text] → 📍 on right, text to its left
              <>
                <Text style={{ fontSize: 12, color: '#6B7280' }}>{"📍"}</Text>
                <Text className="flex-1 text-right" style={{ fontSize: 12, color: '#6B7280' }}>{t(item.location)}</Text>
              </>
            ) : (
              // Native + RTL: rows flow L→R (no CSS cascade), so [text][📍] → text fills left, 📍 on right
              <>
                <Text className="flex-1 text-right" style={{ fontSize: 12, color: '#6B7280' }}>{t(item.location)}</Text>
                <Text style={{ fontSize: 12, color: '#6B7280' }}>{"📍"}</Text>
              </>
            )
          ) : (
            <>
              <Text style={{ fontSize: 12, color: '#6B7280' }}>{"📍"}</Text>
              <Text className="flex-1" style={{ fontSize: 12, color: '#6B7280' }}>{t(item.location)}</Text>
            </>
          )}
        </View>

        <Text className={`text-sm mt-2 w-full ${align}`} style={{ color: '#4B5563' }} numberOfLines={2}>
          {t(item.description)}
        </Text>

        <View style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
          <Pressable
            onPress={() => onPress(item)}
            style={{ marginTop: 8, flexDirection: 'row', alignItems: 'center', gap: 4 }}
          >
            <Text className="text-xs font-medium" style={{ color: '#FFB7C5' }}>
              {t({
                en: "Tap for details",
                he: "לחץ לפרטים",
                ja: "詳細をタップ",
              })}
            </Text>
            <Text style={{ color: '#FFB7C5', fontSize: 12 }}>
              {isRTL ? "‹" : "›"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

type ItineraryTimelineProps = {
  items: ItineraryItem[];
};

export function ItineraryTimeline({ items }: ItineraryTimelineProps) {
  const { t } = useTranslatedContent();
  const [selectedItem, setSelectedItem] = useState<ItineraryItem | null>(null);

  return (
    <>
      <View className="mt-4 px-4">
        {items.map((item, index) => (
          <TimelineItem
            key={`${item.time}-${index}`}
            item={item}
            isLast={index === items.length - 1}
            onPress={setSelectedItem}
          />
        ))}
      </View>
      
      {selectedItem && (
        <AttractionDetailsModal
          visible={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
        />
      )}
    </>
  );
}