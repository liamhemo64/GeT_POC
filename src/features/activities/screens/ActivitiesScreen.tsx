import React, { useState } from 'react';
import { View, ScrollView, FlatList, TouchableOpacity, Platform } from 'react-native';
import { ScreenWrapper } from '../../../core/components/ScreenWrapper';
import { SectionHeader } from '../../../core/components/SectionHeader';
import { ThemedText } from '../../../core/components/ThemedText';
import { useActivities } from '../hooks/useActivities';
import { TagChip } from '../components/TagChip';
import { ActivityCard } from '../components/ActivityCard';
import { allTags } from '../../../constants/mockData';
import type { Activity } from '../../../constants/mockData';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';
import { useTranslation } from 'react-i18next';

export const ActivitiesScreen = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { data: activities } = useActivities(selectedTags);
  const { t } = useTranslation();
  const { t: tContent, isRTL } = useTranslatedContent(); // Renamed for clarity

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleActivityPress = (activity: Activity) => {
    // Placeholder for navigation
    console.log('Pressed activity:', activity.title);
  };

  // Helper for RTL transform (Native only, web handles RTL natively)
  const rtlTransform = isRTL && Platform.OS !== 'web' ? { transform: [{ scaleX: -1 }] } : {};

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="mb-2 pt-4">
          <ThemedText className={`text-3xl font-bold text-[#1D2549] mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('activities.title')}
          </ThemedText>
        </View>
        
        <View className="mb-0">
          <SectionHeader title={t('activities.categories')} />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ paddingHorizontal: 0 }}
            className="flex-row"
            style={rtlTransform}
          >
            {allTags.map((tag) => (
              <View key={tag.value} style={rtlTransform}>
                <TagChip
                  label={tContent(tag.label)}
                  selected={selectedTags.includes(tag.value)}
                  onPress={() => toggleTag(tag.value)}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="mb-0">
          <View className={`flex-row justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
             <SectionHeader title={t('activities.popular')} />
             <TouchableOpacity onPress={() => {}} className="mt-2">
                <ThemedText className="text-[#1D2549] font-medium">{t('activities.seeAll')}</ThemedText>
             </TouchableOpacity>
          </View>
          
          <FlatList
            data={activities}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={rtlTransform}>
                <ActivityCard activity={item} onPress={handleActivityPress} />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 16, paddingBottom: 20 }}
            style={rtlTransform}
          />
        </View>
        
         <View className="mb-0">
          <SectionHeader title={t('activities.recommended')} />
          <FlatList
            data={[...activities].reverse()} 
            keyExtractor={(item) => item.id + '_rec'}
            renderItem={({ item }) => (
              <View style={rtlTransform}>
                <ActivityCard activity={item} onPress={handleActivityPress} />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 0, paddingBottom: 20 }}
            style={rtlTransform}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
