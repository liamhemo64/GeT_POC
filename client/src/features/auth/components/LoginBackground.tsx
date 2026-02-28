import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, StyleSheet, Animated } from 'react-native';
import { Image } from 'expo-image';
import { View } from 'tamagui';

const BACKGROUNDS = [
  require('../../../../assets/bg1.jpg'),
  require('../../../../assets/bg2.jpg'),
  require('../../../../assets/bg3.jpg'),
] as const;

const ROTATE_INTERVAL_MS = 10000;

interface LoginBackgroundProps {
  children: React.ReactNode;
}

export const LoginBackground = ({ children }: LoginBackgroundProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out → swap image → fade in
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(prev => (prev + 1) % BACKGROUNDS.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();
      });
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  return (
    <View flex={1} backgroundColor="#0a0a0a">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Background photo with crossfade */}
      <Animated.View style={[StyleSheet.absoluteFill, { opacity: fadeAnim }]}>
        <Image
          source={BACKGROUNDS[currentIndex]}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
        />
      </Animated.View>

      {/* Dark overlay — same as JapanJourney: rgba(0,0,0,0.45) */}
      <View
        style={StyleSheet.absoluteFill}
        backgroundColor="rgba(0,0,0,0.50)"
      />

      {children}
    </View>
  );
};
