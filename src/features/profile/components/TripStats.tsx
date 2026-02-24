import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { UserProfile } from '../../../constants/mockData';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';

type TripStatsProps = {
  stats: UserProfile['stats'];
};

type StatItemProps = {
  value: number;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

function StatItem({ value, label, icon }: StatItemProps) {
  return (
    <View className="items-center flex-1">
      <Ionicons name={icon} size={18} color="#FFB7C5" />
      <Text className="text-2xl font-bold mt-1" style={{ color: '#1D2549' }}>
        {value}
      </Text>
      <Text className="text-xs mt-1" style={{ color: '#6B7280' }}>
        {label}
      </Text>
    </View>
  );
}

export function TripStats({ stats }: TripStatsProps) {
  const { t } = useTranslatedContent();

  return (
    <View
      className="flex-row mx-4 py-4 px-2 rounded-2xl"
      style={{ backgroundColor: 'rgba(255, 183, 197, 0.15)' }}
    >
      <StatItem
        icon="airplane"
        value={stats.totalTrips}
        label={t({ en: 'Trips', he: 'טיולים', ja: '旅行' })}
      />
      <View style={{ width: 1, backgroundColor: '#E5E7EB' }} />
      <StatItem
        icon="globe-outline"
        value={stats.countriesVisited}
        label={t({ en: 'Countries', he: 'מדינות', ja: '国' })}
      />
      <View style={{ width: 1, backgroundColor: '#E5E7EB' }} />
      <StatItem
        icon="calendar-outline"
        value={stats.daysTraveled}
        label={t({ en: 'Days', he: 'ימים', ja: '日' })}
      />
    </View>
  );
}
