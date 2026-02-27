import React, { useState } from 'react';
import { View, YStack, Text, XStack } from 'tamagui';
import { TouchableOpacity, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useTranslation } from 'react-i18next';
import { usePersonalizationStore } from '../../../../store/usePersonalizationStore';
import { colors, radius, fontSize, spacing } from '../../../../core/theme/tokens';
import { isRTL } from '../../../../core/i18n';

type DateType = 'arrival' | 'departure';

export const Step1Dates = () => {
  const { t, i18n } = useTranslation();
  const { data, setField } = usePersonalizationStore();

  const [showPicker, setShowPicker] = useState(false);
  const [activeType, setActiveType] = useState<DateType>('arrival');

  // Set minimum date to today
  const minDate = new Date();

  const handleOpenPicker = (type: DateType) => {
    setActiveType(type);
    setShowPicker(true);
  };

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
    
    if (event.type === 'set' && selectedDate) {
      if (activeType === 'arrival') {
        setField('arrivalDate', selectedDate);
        if (data.departureDate && data.departureDate < selectedDate) {
          const nextDay = new Date(selectedDate);
          nextDay.setDate(nextDay.getDate() + 1);
          setField('departureDate', nextDay);
        }
      } else {
        setField('departureDate', selectedDate);
      }
    } else if (event.type === 'dismissed') {
      if (Platform.OS === 'android') {
        setShowPicker(false);
      }
    }
  };

  return (
    <YStack gap="$xl" flex={1}>
      <Text 
        fontSize={fontSize['2xl']} 
        fontWeight="700" 
        color={colors.primary} 
      >
        {t('personalization.step1.title')}
      </Text>

      <YStack gap="$md">
        <Text color={colors.textSecondary} fontSize={fontSize.md} fontWeight="600">
          {t('personalization.step1.arrivalLabel')}
        </Text>
        <TouchableOpacity
          onPress={() => handleOpenPicker('arrival')}
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: data.arrivalDate ? colors.primary : colors.border,
            borderRadius: radius.lg,
            padding: spacing.lg,
            alignItems: 'flex-start',
            width: '100%'
          }}
        >
          <Text color={data.arrivalDate ? colors.primary : colors.textSecondary} fontSize={fontSize.lg} fontWeight="600">
            {data.arrivalDate ? data.arrivalDate.toLocaleDateString(i18n.language === 'he' ? 'he-IL' : 'en-US') : t('personalization.step1.selectDate')}
          </Text>
        </TouchableOpacity>
      </YStack>

      <YStack gap="$md">
        <Text color={colors.textSecondary} fontSize={fontSize.md} fontWeight="600">
          {t('personalization.step1.departureLabel')}
        </Text>
        <TouchableOpacity
          onPress={() => handleOpenPicker('departure')}
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: data.departureDate ? colors.primary : colors.border,
            borderRadius: radius.lg,
            padding: spacing.lg,
            alignItems: 'flex-start',
            width: '100%'
          }}
        >
          <Text color={data.departureDate ? colors.primary : colors.textSecondary} fontSize={fontSize.lg} fontWeight="600">
            {data.departureDate ? data.departureDate.toLocaleDateString(i18n.language === 'he' ? 'he-IL' : 'en-US') : t('personalization.step1.selectDate')}
          </Text>
        </TouchableOpacity>
      </YStack>

      {showPicker && (
        <View style={{ marginTop: spacing.lg, alignItems: 'center' }}>
          {Platform.OS === 'web' ? (
            <input
              type="date"
              min={activeType === 'departure' && data.arrivalDate ? data.arrivalDate.toISOString().split('T')[0] : minDate.toISOString().split('T')[0]}
              value={(activeType === 'arrival' ? data.arrivalDate : data.departureDate)?.toISOString().split('T')[0] || ''}
              onChange={(e) => {
                const selectedDate = new Date(e.target.value);
                if (!isNaN(selectedDate.getTime())) {
                  handleDateChange({ type: 'set', nativeEvent: {} } as any, selectedDate);
                }
              }}
              style={{
                padding: spacing.md,
                borderRadius: radius.md,
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.surface,
                color: colors.text,
                fontSize: fontSize.lg,
                fontFamily: 'inherit',
                width: '100%',
                outline: 'none',
              }}
            />
          ) : (
            <DateTimePicker
              value={activeType === 'arrival' && data.arrivalDate ? data.arrivalDate : activeType === 'departure' && data.departureDate ? data.departureDate : new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
              minimumDate={activeType === 'departure' && data.arrivalDate ? data.arrivalDate : minDate}
              themeVariant="light"
            />
          )}
          {Platform.OS === 'ios' && (
            <TouchableOpacity 
              onPress={() => setShowPicker(false)}
              style={{ marginTop: spacing.lg, padding: spacing.md, backgroundColor: colors.primary, borderRadius: radius.lg, width: '100%', alignItems: 'center' }}
            >
              <Text color={colors.surface} fontWeight="600" textAlign="center">
                {t('personalization.nav.next')}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </YStack>
  );
};
