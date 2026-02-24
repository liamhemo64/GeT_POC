import React from 'react';
import { Text as RNText, TextInput as RNTextInput, TextProps, TextInputProps } from 'react-native';
import { useTranslation } from 'react-i18next';

/**
 * Helper to get the font family class based on the current language.
 */
function useFontFamilyClass() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  if (lang === 'he') {
    return 'font-hebrew';
  } else if (lang === 'ja') {
    return 'font-japanese';
  }
  return ''; // Default font
}

export function ThemedText({ className, style, ...props }: TextProps & { className?: string }) {
  const fontClass = useFontFamilyClass();
  return (
    <RNText 
      className={`${fontClass} ${className || ''}`.trim()} 
      style={style} 
      {...props} 
    />
  );
}

export function ThemedTextInput({ className, style, ...props }: TextInputProps & { className?: string }) {
  const fontClass = useFontFamilyClass();
  return (
    <RNTextInput 
      className={`${fontClass} ${className || ''}`.trim()} 
      style={style} 
      {...props} 
    />
  );
}
