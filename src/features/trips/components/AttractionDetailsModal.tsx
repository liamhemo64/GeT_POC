import React from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { useTranslatedContent } from '../../../core/hooks/useTranslatedContent';
import type { ItineraryItem } from '../types';

const { width } = Dimensions.get('window');

interface AttractionDetailsModalProps {
  item: ItineraryItem | null;
  visible: boolean;
  onClose: () => void;
}

export function AttractionDetailsModal({ item, visible, onClose }: AttractionDetailsModalProps) {
  const { t, isRTL } = useTranslatedContent();
  
  if (!item) return null;

  const handleOpenMaps = async () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`;
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error('Error opening maps', error);
    }
  };

  const imageUrl = item.imageUrl || 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop';
  const mapEmbedUrl = `https://maps.google.com/maps?q=${item.latitude},${item.longitude}&z=15&output=embed`;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-white">
        {/* Header with Image */}
        <View className="h-72 relative">
          <Image
            source={{ uri: imageUrl }}
            className="w-full h-full"
            resizeMode="cover"
          />
          {/* Dark Overlay */}
          <View className="absolute inset-0 bg-black/30" />
          
          {/* Close Button */}
          <TouchableOpacity
            onPress={onClose}
            className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-9 h-9 rounded-full items-center justify-center bg-black/40 z-10`}
          >
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          {/* Title Overlay */}
          <View className="absolute bottom-4 left-4 right-4">
            <Text className={`text-2xl font-extrabold text-white mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t(item.title)}
            </Text>
            
            <View className={`flex-row items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Ionicons name="location" size={13} color="#FFB7C5" />
              <Text className="text-sm font-medium text-white/90">
                {t(item.location)}
              </Text>
            </View>
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          {/* Time & Description */}
          <View className="pt-6 pb-4 border-b border-gray-100">
            <View className={`flex-row items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Ionicons name="time" size={15} color="#FFB7C5" />
              <Text className="text-base font-semibold text-accent">
                {item.time}
              </Text>
            </View>
            <Text className={`text-base leading-relaxed text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t(item.description)}
            </Text>
          </View>

          {/* Details (About Place) */}
          {item.details && (
            <View className="py-4 border-b border-gray-100">
              <Text className={`text-lg font-bold text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'על המקום' : 'About this place'}
              </Text>
              <Text className={`text-sm leading-normal text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t(item.details)}
              </Text>
            </View>
          )}

          {/* Map Preview */}
          <View className="py-4 pb-2">
            <Text className={`text-lg font-bold text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
              {isRTL ? 'מיקום' : 'Location'}
            </Text>
            <View className="h-40 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              {Platform.OS === 'web' ? (
                 <iframe
                  src={mapEmbedUrl}
                  style={{ width: '100%', height: '100%', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <WebView
                  source={{
                    html: `
                      <html>
                        <head>
                          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                          <style>body { margin: 0; padding: 0; overflow: hidden; } iframe { width: 100%; height: 100%; border: 0; }</style>
                        </head>
                        <body>
                          <iframe
                            src="${mapEmbedUrl}"
                            allowfullscreen
                          ></iframe>
                        </body>
                      </html>
                    `
                  }}
                  style={{ width: '100%', height: '100%' }}
                  scrollEnabled={false}
                />
              )}
            </View>
          </View>

          {/* CTA Button */}
          <TouchableOpacity
            onPress={handleOpenMaps}
            activeOpacity={0.85}
            className="flex-row items-center justify-center gap-2 bg-blue-600 rounded-xl py-4 mt-4 mb-8"
          >
            <Ionicons name="navigate" size={20} color="#FFFFFF" />
            <Text className="text-base font-bold text-white">
              {isRTL ? 'הצג במפות' : 'Open in Maps'}
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </Modal>
  );
}
