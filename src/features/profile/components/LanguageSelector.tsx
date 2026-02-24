import React from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';
import { changeAppLanguage } from '../../../core/i18n/changeLanguage';

type Language = {
  code: string;
  nativeName: string;
  flag: string;
};

const LANGUAGES: Language[] = [
  { code: 'he', nativeName: 'עברית', flag: '🇮🇱' },
  { code: 'en', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ja', nativeName: '日本語', flag: '🇯🇵' },
];

type LanguageSelectorProps = {
  visible: boolean;
  onClose: () => void;
  onLanguageChanged: (lang: string) => void;
};

export function LanguageSelector({ visible, onClose, onLanguageChanged }: LanguageSelectorProps) {
  const { t, lang, isRTL } = useTranslatedContent();
  const textAlign = isRTL ? ('right' as const) : ('left' as const);

  const handleSelect = async (code: string) => {
    onClose();
    onLanguageChanged(code);
    await changeAppLanguage(code);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable
        className="flex-1 justify-end"
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        onPress={onClose}
      >
        <Pressable
          className="rounded-t-3xl px-4 pt-6 pb-10"
          style={{ backgroundColor: '#FFF8F0' }}
          onPress={() => {}}
        >
          {/* Handle bar */}
          <View
            className="self-center rounded-full mb-5"
            style={{ width: 40, height: 4, backgroundColor: '#D1D5DB' }}
          />

          <Text
            className="text-lg font-bold mb-4 ms-2"
            style={{ color: '#1D2549', textAlign }}
          >
            {t({ en: 'Choose Language', he: 'בחר שפה', ja: '言語を選択' })}
          </Text>

          {LANGUAGES.map((langOption) => {
            const isActive = lang === langOption.code;
            return (
              <Pressable
                key={langOption.code}
                className="flex-row items-center py-4 px-4 mb-2 rounded-2xl"
                style={
                  isActive
                    ? { backgroundColor: 'rgba(255, 183, 197, 0.2)', borderWidth: 2, borderColor: '#FFB7C5' }
                    : { backgroundColor: '#FFFFFF' }
                }
                onPress={() => handleSelect(langOption.code)}
              >
                <Text style={{ fontSize: 24 }}>{langOption.flag}</Text>
                <Text
                  className="flex-1 text-base font-semibold ms-4"
                  style={{ color: '#1D2549', textAlign }}
                >
                  {langOption.nativeName}
                </Text>
                {isActive && (
                  <Ionicons name="checkmark-circle" size={20} color="#FFB7C5" />
                )}
              </Pressable>
            );
          })}
        </Pressable>
      </Pressable>
    </Modal>
  );
}
