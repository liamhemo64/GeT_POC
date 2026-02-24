import React from 'react';
import { View, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../../../core/components/ThemedText';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';
import { useFavoritesStore } from '../../../core/store/useFavoritesStore';
import { allTags, type Activity } from '../../../constants/mockData';

interface ActivityCardProps {
  activity: Activity;
  onPress: (activity: Activity) => void;
}

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const CARD_WIDTH = isWeb ? 320 : width * 0.75; // Cap width on web

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onPress }) => {
  const { t, isRTL } = useTranslatedContent();
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const favorite = isFavorite(activity.id);

  return (
    <TouchableOpacity
      onPress={() => onPress(activity)}
      className="mr-4 rounded-2xl bg-white shadow-sm mb-4"
      style={{
        width: CARD_WIDTH,
        shadowColor: '#000',
        elevation: 3,
      }}
    >
      <View className="relative">
        <Image
          source={{ uri: activity.imageUrl }}
          className="w-full h-44 rounded-t-2xl"
          resizeMode="cover"
          style={isWeb ? { width: '100%', height: 176 } : undefined} 
        />
        <TouchableOpacity
          onPress={(e) => {
            e.stopPropagation();
            toggleFavorite(activity.id);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full items-center justify-center bg-white/80 backdrop-blur-sm shadow-sm"
        >
          <Ionicons
            name={favorite ? 'heart' : 'heart-outline'}
            size={20}
            color={favorite ? '#EF4444' : '#333'}
          />
        </TouchableOpacity>
        <View className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded-md">
          <ThemedText className="font-bold text-xs" style={{ color: '#FFF' }}>
            {t(activity.duration)}
          </ThemedText>
        </View>
      </View>

      <View className="p-4">
        <View className={`flex-row justify-between items-start mb-1 gap-2 ${isRTL && !isWeb ? 'flex-row-reverse' : ''}`}>
          <ThemedText className="font-bold text-lg text-[#1D2549]" numberOfLines={1}>
            {t(activity.title)}
          </ThemedText>
          <ThemedText className="font-bold text-[#1D2549]">
            {activity.price}
          </ThemedText>
        </View>

        <View className={`flex-row items-center mb-3 ${isRTL && !isWeb ? 'justify-end' : ''}`}>
          <Ionicons name="location-outline" size={14} color="#9CA3AF" />
          <ThemedText className={`text-xs text-gray-500 ${isRTL ? 'mr-1' : 'ml-1'}`} numberOfLines={1}>
            {t(activity.location)}
          </ThemedText>
        </View>

        <View className={`flex-row flex-wrap gap-1 ${isRTL && !isWeb ? 'justify-end' : ''}`}>
          {activity.tags.slice(0, 3).map((tagValue, index) => {
            const tagLabel = allTags.find((t) => t.value === tagValue)?.label;
            if (!tagLabel) return null;
            
            return (
              <View
                key={index}
                className="px-2 py-1 rounded-md bg-gray-100"
              >
                <ThemedText className="text-gray-500 text-[10px]">
                  {t(tagLabel)}
                </ThemedText>
              </View>
            );
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
};
