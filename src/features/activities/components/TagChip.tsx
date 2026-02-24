import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../../core/components/ThemedText';

interface TagChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

export const TagChip: React.FC<TagChipProps> = ({ label, selected = false, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 rounded-full mr-2 mb-2 border ${
        selected ? 'bg-[#1D2549] border-[#1D2549]' : 'bg-white border-gray-200'
      }`}
    >
      <ThemedText
        className={`${selected ? 'text-white font-medium' : 'text-gray-500'}`}
      >
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
};
