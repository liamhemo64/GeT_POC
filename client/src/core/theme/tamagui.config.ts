import {
  createTamagui,
  createTokens,
  createFont,
} from 'tamagui'
import { config as baseConfig } from '@tamagui/config/v3'
import { colors, spacing, radius, fontSize, lineHeight, size } from './tokens'

// ─── Fonts ────────────────────────────────────────────────────────────────────

const bodyFont = createFont({
  family: 'NotoSansHebrew-Regular',
  size: {
    xs:    fontSize.xs,
    sm:    fontSize.sm,
    md:    fontSize.md,
    lg:    fontSize.lg,
    xl:    fontSize.xl,
    '2xl': fontSize['2xl'],
    title: fontSize.title,
    // Tamagui requires numbered keys for its internal scale
    1: fontSize.xs,
    2: fontSize.sm,
    3: fontSize.md,
    4: fontSize.lg,
    5: fontSize.xl,
    6: fontSize['2xl'],
    7: fontSize.title,
    true: fontSize.md, // default
  },
  lineHeight: {
    xs:    lineHeight.tight,
    sm:    lineHeight.tight,
    md:    lineHeight.normal,
    lg:    lineHeight.relaxed,
    xl:    lineHeight.relaxed,
    '2xl': lineHeight.relaxed,
    title: lineHeight.relaxed,
    1: lineHeight.tight,
    2: lineHeight.tight,
    3: lineHeight.normal,
    4: lineHeight.relaxed,
    5: lineHeight.relaxed,
    6: lineHeight.relaxed,
    7: lineHeight.relaxed,
    true: lineHeight.normal,
  },
  weight: {
    regular: '400',
    medium:  '500',
    bold:    '700',
    true:    '400',
  },
  face: {
    400: { normal: 'NotoSansHebrew-Regular' },
    500: { normal: 'NotoSansHebrew-Medium' },
    700: { normal: 'NotoSansHebrew-Bold' },
  },
})

// ─── Tokens ───────────────────────────────────────────────────────────────────

const tokens = createTokens({
  // Inherit base geometry tokens so Tamagui internals stay intact
  ...baseConfig.tokens,

  color: {
    // Semantic palette
    primary:        colors.primary,
    primaryDark:    colors.primaryDark,
    accent:         colors.accent,
    accentDark:     colors.accentDark,
    background:     colors.background,
    surface:        colors.surface,
    surfaceVariant: colors.surfaceVariant,
    text:           colors.text,
    textSecondary:  colors.textSecondary,
    border:         colors.border,
    borderLight:    colors.borderLight,
    divider:        colors.divider,
    success:        colors.success,
    error:          colors.error,
    mapsBlue:       colors.mapsBlue,
  },

  space: {
    ...baseConfig.tokens.space,
    xs:   spacing.xs,
    sm:   spacing.sm,
    md:   spacing.md,
    lg:   spacing.lg,
    xl:   spacing.xl,
    xxl:  spacing.xxl,
    xxxl: spacing.xxxl,
    true: spacing.md,
  },

  radius: {
    ...baseConfig.tokens.radius,
    sm:   radius.sm,
    md:   radius.md,
    lg:   radius.lg,
    xl:   radius.xl,
    xxl:  radius.xxl,
    pill: radius.pill,
    full: radius.full,
    true: radius.md,
  },

  size: {
    ...baseConfig.tokens.size,
    avatarSm:  size.avatarSm,
    avatarMd:  size.avatarMd,
    avatarLg:  size.avatarLg,
    btnIcon:   size.btnIcon,
    btnClose:  size.btnClose,
    cardImg:   size.cardImg,
    mapHeight: size.mapHeight,
    true: size.avatarMd,
  },

  zIndex: baseConfig.tokens.zIndex,
})

// ─── Tamagui Config ───────────────────────────────────────────────────────────

const tamaguiConfig = createTamagui({
  ...baseConfig,
  tokens,
  fonts: {
    body:    bodyFont,
    heading: bodyFont,
  },
  themes: {
    light: {
      background:     colors.background,
      color:          colors.text,
      borderColor:    colors.border,
      placeholderColor: colors.textSecondary,
    },
    dark: {
      background:     colors.primaryDark,
      color:          colors.surface,
      borderColor:    colors.border,
      placeholderColor: colors.textSecondary,
    },
  },
})

type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig
