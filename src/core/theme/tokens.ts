/**
 * Design tokens for geTrip.
 *
 * Philosophy: "rem-first, Tamagui-compatible"
 * - All sizes are derived from a single REM constant (1rem = 16px by default).
 * - Change REM here to scale the entire app's density at once.
 * - Tokens are in plain numbers (px) so Tamagui can consume them directly,
 *   but every value is annotated with its rem equivalent for readability.
 */

export const REM = 16 // 1rem = 16px — change this to rescale everything

/** Converts a rem value to pixels using the global REM constant */
export const rem = (r: number): number => Math.round(r * REM)

// ─── Colors ───────────────────────────────────────────────────────────────────

export const colors = {
  primary:        '#1D2549',
  primaryDark:    '#141A36',
  accent:         '#FFB7C5',
  accentDark:     '#FF9BB0',
  background:     '#FFF8F0',
  surface:        '#FFFFFF',
  surfaceVariant: '#F5E6D3',
  text:           '#1D2549',
  textSecondary:  '#6B7280',
  border:         '#E8D4BB',
  borderLight:    '#D4C4B0',
  divider:        '#F0E0D0',
  success:        '#4CAF50',
  error:          '#EF4444',
  mapsBlue:       '#4285F4',
} as const

export type ColorKey = keyof typeof colors

// ─── Spacing ──────────────────────────────────────────────────────────────────
// rem:  0.25  0.5   0.75  1     1.25  1.5   2
// px:    4     8    12    16    20    24    32

export const spacing = {
  xs:   rem(0.25),  //  4
  sm:   rem(0.5),   //  8
  md:   rem(0.75),  // 12
  lg:   rem(1),     // 16
  xl:   rem(1.25),  // 20
  xxl:  rem(1.5),   // 24
  xxxl: rem(2),     // 32
} as const

// ─── Border Radius ────────────────────────────────────────────────────────────

export const radius = {
  sm:   rem(0.625),  // 10
  md:   rem(0.875),  // 14
  lg:   rem(1),      // 16
  xl:   rem(1.25),   // 20
  xxl:  rem(1.5),    // 24
  pill: rem(1.75),   // 28
  full: 9999,
} as const

// ─── Font Sizes ───────────────────────────────────────────────────────────────

export const fontSize = {
  xs:    rem(0.6875),  // 11
  sm:    rem(0.8125),  // 13
  md:    rem(0.9375),  // 15
  lg:    rem(1.0625),  // 17
  xl:    rem(1.25),    // 20
  '2xl': rem(1.5),     // 24
  title: rem(2),       // 32
} as const

// ─── Line Heights ─────────────────────────────────────────────────────────────

export const lineHeight = {
  tight:   rem(1.125),  // 18
  snug:    rem(1.25),   // 20
  normal:  rem(1.375),  // 22
  relaxed: rem(1.5),    // 24
} as const

// ─── Sizes (avatars, images, cards) ──────────────────────────────────────────

export const size = {
  avatarSm:  rem(1.75),   // 28
  avatarMd:  rem(2.5),    // 40
  avatarLg:  rem(5),      // 80
  btnIcon:   rem(2.125),  // 34
  btnClose:  rem(2.25),   // 36
  cardImg:   rem(10),     // 160
  mapHeight: rem(14),     // 224
} as const
