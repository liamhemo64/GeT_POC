import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { isRTL } from '../i18n';

export type { TranslatedString } from '../types';
import type { TranslatedString } from '../types';

type SupportedLanguage = 'en' | 'he' | 'ja';

export function useTranslatedContent() {
  const { i18n } = useTranslation();
  const lang = i18n.language as SupportedLanguage;

  const t = useCallback(
    (translatedString: TranslatedString): string => {
      return translatedString[lang] ?? translatedString.en;
    },
    [lang],
  );

  return { t, lang, isRTL: isRTL(lang) };
}
