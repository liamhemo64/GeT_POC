import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Alert } from 'react-native';
import { userProfile } from '../../../constants/mockData';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';
import { ScreenWrapper } from '../../../core/components/ScreenWrapper';
import { ProfileHeader } from '../components/ProfileHeader';
import { TripStats } from '../components/TripStats';
import { SettingsList } from '../components/SettingsList';
import { LanguageSelector } from '../components/LanguageSelector';

export function ProfileScreen() {
  const { t } = useTranslatedContent();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      t({ en: 'Logout', he: 'התנתקות', ja: 'ログアウト' }),
      t({ en: 'Are you sure you want to logout?', he: 'האם אתה בטוח שברצונך להתנתק?', ja: 'ログアウトしますか？' }),
      [
        { text: t({ en: 'Cancel', he: 'ביטול', ja: 'キャンセル' }), style: 'cancel' },
        { text: t({ en: 'Logout', he: 'התנתקות', ja: 'ログアウト' }), style: 'destructive' },
      ],
    );
  };

  const handleEditAvatar = () => {
    Alert.alert(
      t({ en: 'Change Photo', he: 'שנה תמונה', ja: '写真を変更' }),
      t({ en: 'This feature is coming soon!', he: 'פיצ\'ר זה יגיע בקרוב!', ja: 'この機能は近日公開予定です！' }),
    );
  };

  const handleMyTrips = () => {
    Alert.alert(
      t({ en: 'My Trips', he: 'הטיולים שלי', ja: 'マイトリップ' }),
      t({ en: 'Navigate to your trips overview.', he: 'נווט לסקירת הטיולים שלך.', ja: '旅行の概要に移動します。' }),
    );
  };

  const handleHelp = () => {
    Alert.alert(
      t({ en: 'Help & Support', he: 'עזרה ותמיכה', ja: 'ヘルプ＆サポート' }),
      t({ en: 'Contact us at support@japanjourney.app', he: 'צרו קשר בכתובת support@japanjourney.app', ja: 'support@japanjourney.app までお問い合わせください' }),
    );
  };

  return (
    <ScreenWrapper>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <ProfileHeader user={userProfile} onEditAvatar={handleEditAvatar} />
        <TripStats stats={userProfile.stats} />
        <SettingsList
          notificationsEnabled={notificationsEnabled}
          onToggleNotifications={setNotificationsEnabled}
          onLanguagePress={() => setLanguageModalVisible(true)}
          onMyTripsPress={handleMyTrips}
          onHelpPress={handleHelp}
        />

        <Pressable
          className="mx-4 mt-8 mb-4 py-4 rounded-2xl items-center"
          style={{ backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#FCA5A5' }}
          onPress={handleLogout}
        >
          <Text className="text-base font-semibold" style={{ color: '#EF4444' }}>
            {t({ en: 'Logout', he: 'התנתקות', ja: 'ログアウト' })}
          </Text>
        </Pressable>

        <Text className="text-center text-xs mb-8" style={{ color: '#9CA3AF' }}>
          JapanJourney v1.0.0
        </Text>

        <View style={{ height: 40 }} />
      </ScrollView>

      <LanguageSelector
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
        onLanguageChanged={() => {}}
      />
    </ScreenWrapper>
  );
}
