import React from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';

type SettingsItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  textAlign: 'left' | 'right';
  chevronIcon: keyof typeof Ionicons.glyphMap;
  isRTL: boolean;
  trailing?: React.ReactNode;
  onPress?: () => void;
};

function SettingsItem({ icon, label, textAlign, chevronIcon, isRTL, trailing, onPress }: SettingsItemProps) {
  return (
    <Pressable
      style={{
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
      }}
      onPress={onPress}
    >
      <View style={{ width: 32, alignItems: 'center' }}>
        <Ionicons name={icon} size={20} color="#1D2549" />
      </View>
      <Text
        style={{ flex: 1, fontSize: 16, marginHorizontal: 8, color: '#1D2549', textAlign }}
      >
        {label}
      </Text>
      {trailing ?? (
        <Ionicons name={chevronIcon} size={18} color="#9CA3AF" />
      )}
    </Pressable>
  );
}

type SettingsListProps = {
  notificationsEnabled: boolean;
  onToggleNotifications: (value: boolean) => void;
  onLanguagePress: () => void;
  onMyTripsPress?: () => void;
  onHelpPress?: () => void;
};

export function SettingsList({
  notificationsEnabled,
  onToggleNotifications,
  onLanguagePress,
  onMyTripsPress,
  onHelpPress,
}: SettingsListProps) {
  const { t, isRTL } = useTranslatedContent();
  const textAlign = isRTL ? ('right' as const) : ('left' as const);
  const chevronIcon = isRTL ? ('chevron-back' as const) : ('chevron-forward' as const);

  return (
    <View className="mt-6 mx-4">
      <Text
        className="text-xs font-semibold uppercase mb-2 ms-4"
        style={{ color: '#9CA3AF', textAlign }}
      >
        {t({ en: 'Settings', he: 'הגדרות', ja: '設定' })}
      </Text>

      <View className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <SettingsItem
          icon="map-outline"
          label={t({ en: 'My Trips', he: 'הטיולים שלי', ja: 'マイトリップ' })}
          textAlign={textAlign}
          chevronIcon={chevronIcon}
          isRTL={isRTL}
          onPress={onMyTripsPress}
        />

        <View className="mx-4" style={{ height: 1, backgroundColor: '#F3F4F6' }} />

        <SettingsItem
          icon="language-outline"
          label={t({ en: 'Language', he: 'שפה', ja: '言語' })}
          textAlign={textAlign}
          chevronIcon={chevronIcon}
          isRTL={isRTL}
          onPress={onLanguagePress}
        />

        <View className="mx-4" style={{ height: 1, backgroundColor: '#F3F4F6' }} />

        <SettingsItem
          icon="notifications-outline"
          label={t({ en: 'Notifications', he: 'התראות', ja: '通知' })}
          textAlign={textAlign}
          chevronIcon={chevronIcon}
          isRTL={isRTL}
          trailing={
            <Switch
              value={notificationsEnabled}
              onValueChange={onToggleNotifications}
              trackColor={{ false: '#D1D5DB', true: '#FFB7C5' }}
              thumbColor="#FFFFFF"
            />
          }
        />

        <View className="mx-4" style={{ height: 1, backgroundColor: '#F3F4F6' }} />

        <SettingsItem
          icon="help-circle-outline"
          label={t({ en: 'Help & Support', he: 'עזרה ותמיכה', ja: 'ヘルプ＆サポート' })}
          textAlign={textAlign}
          chevronIcon={chevronIcon}
          isRTL={isRTL}
          onPress={onHelpPress}
        />
      </View>
    </View>
  );
}
