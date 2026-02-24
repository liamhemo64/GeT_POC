import React from 'react';
import { Pressable } from 'react-native';
import { ThemedText as Text } from './ThemedText';

interface Props {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export function InterestButton({ label, selected, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`px-xl py-md rounded-xl border m-xs ${
        selected
          ? 'border-primary bg-primary'
          : 'border-border bg-surface'
      }`}
      style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
    >
      <Text
        className={`text-sm font-semibold text-center ${
          selected ? 'text-white' : 'text-primary'
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
