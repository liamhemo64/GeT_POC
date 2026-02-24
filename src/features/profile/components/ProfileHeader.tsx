import React from 'react';
import { View, Text, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { UserProfile } from '../../../constants/mockData';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';

type ProfileHeaderProps = {
  user: UserProfile;
};

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const { t } = useTranslatedContent();
  const insets = useSafeAreaInsets();
  const topPadding = Platform.OS === 'web' ? 24 : insets.top + 40;

  return (
    <View className="items-center pb-6 px-4" style={{ paddingTop: topPadding }}>
      <Text
        className="text-2xl font-bold"
        style={{ color: '#1D2549' }}
      >
        {user.name}
      </Text>

      <Text
        className="text-sm mt-1"
        style={{ color: '#6B7280' }}
      >
        {user.email}
      </Text>

      <Text
        className="text-xs mt-1"
        style={{ color: '#9CA3AF' }}
      >
        {t({ en: `Member since ${user.memberSince}`, he: `חבר מאז ${user.memberSince}`, ja: `${user.memberSince}年から会員` })}
      </Text>
    </View>
  );
}
