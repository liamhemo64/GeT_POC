import React from 'react';
import { Pressable, Text } from 'react-native';

interface Props {
  label: string;
  selected?: boolean;
  onPress: () => void;
}

export function TagChip({ label, selected, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`px-lg py-xs rounded-full border me-sm items-center justify-center ${
        selected
          ? 'border-primary bg-primary'
          : 'border-border bg-surface'
      }`}
      style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
    >
      <Text
        className={`text-sm font-medium ${
          selected ? 'text-white' : 'text-primary'
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
