// ============================================================
// void.jsx — VOID Theme
// ------------------------------------------------------------
// Deep black canvas with a violet accent — matches the picker
// swatch gradient (#000000 → #27262c → #a78bfa).
//   • Pure Black Canvas    — #000000 background
//   • Graphite Cards       — #1a1720 surface (purple-tinted)
//   • Violet Primary       — #a78bfa
//   • Crimson Destructive  — #f4212e
// ============================================================

const DEFAULT_COLORS = {
  background:      '#000000',
  backgroundSoft:  '#0a0910',
  surface:         '#1a1720',
  surfaceElevated: '#221e2c',

  border:     '#2a2632',
  borderSoft: 'rgba(167, 139, 250, 0.08)',

  textPrimary:   '#ece9f5',
  textSecondary: 'rgba(236, 233, 245, 0.62)',
  textMuted:     '#7a7488',
  textInverse:   '#0f0d14',

  primary:   '#a78bfa',   // violet accent
  secondary: '#ece9f5',   // near-white foreground
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:      DEFAULT_COLORS.background,
  backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
  surface:         DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:      '#141119',
  surfaceTint:       '#1d1a24',
  surfaceMutedDeep:  '#08070b',
  surfaceTintDark:   '#0a0910',
  backgroundDeep:    '#000000',

  // ── BORDERS ──────────────────────────────────────────────────
  border:       DEFAULT_COLORS.border,
  borderSoft:   DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(167, 139, 250, 0.12)',
  borderStrong: 'rgba(167, 139, 250, 0.45)',
  borderAccent: 'rgba(167, 139, 250, 0.22)',

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:   DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted:     DEFAULT_COLORS.textMuted,
  textInverse:   DEFAULT_COLORS.textInverse,
  textAccent:    DEFAULT_COLORS.primary,
  textDim:       '#4a4458',
  textDisabled:  '#2a2632',
  textLighter:   '#d9d9d9',
  textOffWhite:  '#f5f3fa',
  textTertiary:  '#948da3',

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:  DEFAULT_COLORS.primary,    // #a78bfa
  primaryTo:    '#9061fa',                 // slightly deeper endpoint
  primary:      DEFAULT_COLORS.primary,
  accent:       DEFAULT_COLORS.secondary,
  primaryMuted: '#cbbcfb',
  primaryHover: '#8b5cf6',
  primaryGlow: 'rgba(167,139,250,0.07)',
  primarySoft: 'rgba(167,139,250,0.10)',

  // ── SURFACE FX / AUTH PAGES / GLASS CARDS ─────────────────────
  authPageBg: '#000000',
  authCardBg: 'rgba(26,23,32,0.88)',
  authCardBorder: 'rgba(167,139,250,0.28)',
  glassSurfaceBg: 'rgba(0,0,0,0.78)',
  glassBorder: 'rgba(255,255,255,0.07)',
  shimmerOverlay: 'rgba(255,255,255,0.06)',
  overlayBackdrop: 'rgba(0,0,0,0.55)',
  modalShadow: 'rgba(0,0,0,0.45)',
  elevatedShadow: 'rgba(0,0,0,0.45)',
  thumbShadow: 'rgba(0,0,0,0.35)',
  focusRing: 'rgba(167,139,250,0.15)',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger:      '#f4212e',
  dangerDark:  '#d71920',
  dangerHover: '#f7485e',
  dangerSoft:  '#f88090',
  dangerLight: '#fbb4bb',
  dangerDark2: '#b3141a',
  dangerDarker:'#8c0f14',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success:      '#17bf63',
  successSoft:  '#4dd68c',
  successGreen: '#00b87a',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning:       '#f7b928',
  warningLight:  '#fac94f',
  warningDark:   '#d49a10',
  warningSoft:   '#fde68a',
  warningOrange: '#ea580c',

  // ── STATUS — INFO ────────────────────────────────────────────
  info:     '#a78bfa',
  infoSoft: '#cbbcfb',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral:     '#5c5570',
  errorcolor:  '#f4212e',
  sucesscolor: '#17bf63',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom: '#000000',
  loginBgTo:   '#221e2c',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple:     '#a78bfa',
  accentCyan:       '#22d3ee',
  accentIndigo:     '#6366f1',
  accentPink:       '#ec4899',
  accentBlue:       '#1da1f2',
  accentTeal:       '#00b87a',
  accentViolet:     '#8b5cf6',
  accentOrange:     '#f97316',
  accentYellow:     '#f7b928',
  accentBlueDark:   '#0d8ecf',
  accentIndigoDark: '#4338ca',
  accentVioletDark: '#7c3aed',
  accentPurple600:  '#9333ea',

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: '#c2410c',
  orangeDark800: '#9a3412',
  orangeDark900: '#7c2d12',
  amberDark900:  '#78350f',
  orangeDark950: '#451a03',
  stoneDark800:  '#1a1720',
  stoneDark900:  '#0a0910',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground:   DEFAULT_COLORS.surface,
  hoverBorder:       DEFAULT_COLORS.primary,
  hoverShadow:       'rgba(167, 139, 250, 0.35)',
  hoverShadowSpread: '0 0 20px',
  hoverText:         '#c4b5fd',
  activeBackground:  DEFAULT_COLORS.surfaceElevated,
  activeBorder:      DEFAULT_COLORS.primary,
  activeShadow:      'rgba(167, 139, 250, 0.50)',
  activeText:        DEFAULT_COLORS.primary,
  buttonBackground:  DEFAULT_COLORS.background,
  buttonIconColor:   DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-violet-400 to-purple-500',
  primaryShadow:   'shadow-violet-400/50',
};

// ===== FONT STYLES =====
const fontSmoothing = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
};

export const fontStyles = {
  smoothing:    fontSmoothing,
  heading1:     { fontSize: '32px', fontWeight: '800', lineHeight: '1.1',  letterSpacing: '-0.02em',  ...fontSmoothing },
  heading2:     { fontSize: '24px', fontWeight: '700', lineHeight: '1.2',  letterSpacing: '-0.015em', ...fontSmoothing },
  heading3:     { fontSize: '20px', fontWeight: '700', lineHeight: '1.3',  letterSpacing: '-0.01em',  ...fontSmoothing },
  heading4:     { fontSize: '18px', fontWeight: '700', lineHeight: '1.4',  letterSpacing: '-0.005em', ...fontSmoothing },
  heading5:     { fontSize: '16px', fontWeight: '700', lineHeight: '1.4',  ...fontSmoothing },
  heading6:     { fontSize: '14px', fontWeight: '700', lineHeight: '1.5',  letterSpacing: '0.01em',   ...fontSmoothing },
  body:         { fontSize: '14px', lineHeight: '1.6', ...fontSmoothing },
  bodyLarge:    { fontSize: '16px', lineHeight: '1.6', ...fontSmoothing },
  bodySmall:    { fontSize: '12px', lineHeight: '1.5', ...fontSmoothing },
  caption:      { fontSize: '12px', lineHeight: '1.4', ...fontSmoothing },
  label:        { fontSize: '13px', fontWeight: '500', letterSpacing: '0.01em', ...fontSmoothing },
  button:       { fontSize: '14px', fontWeight: '600', letterSpacing: '0.02em', ...fontSmoothing },
  metric:       { fontSize: '24px', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.2', ...fontSmoothing },
  metricMedium: { fontSize: '30px', fontWeight: '700', lineHeight: '1.1',  fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metric2xl:    { fontSize: '32px', fontWeight: '700', lineHeight: '1',    fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metricLarge:  { fontSize: '48px', fontWeight: '700', lineHeight: '1.1',  fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metricXL:     { fontSize: '60px', fontWeight: '700', lineHeight: '1.1',  fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  code:         { fontSize: '13px', fontFamily: '"Fira Code", "Consolas", "Monaco", monospace', lineHeight: '1.6', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' },
};

// ===== CHART COLORS =====
export const chartColors = {
  primary: ['#a78bfa', '#c4b5fd', '#dcd0fe', '#ece3ff', '#f6f2ff'],
  severity: {
    critical: '#f4212e',
    high:     '#f97316',
    medium:   '#f7b928',
    low:      '#17bf63',
    info:     '#a78bfa',
  },
  series: [
    '#a78bfa',  // Violet (primary)
    '#00b87a',  // Green
    '#f7b928',  // Amber
    '#17bf63',  // Emerald
    '#e0245e',  // Rose
    '#8b5cf6',  // Deep violet
    '#8b98a5',  // Steel
    '#f97316',  // Orange
    '#6366f1',  // Indigo
    '#22d3ee',  // Cyan
  ],
  categorical: [
    '#a78bfa', '#c4b5fd',
    '#00b87a', '#4dd68c',
    '#f7b928', '#fac94f',
    '#e0245e', '#f7485e',
    '#17bf63', '#8b98a5',
  ],
  gradients: {
    void: ['#000000', '#221e2c'],
    violet: ['#a78bfa', '#c4b5fd'],
    feed:   ['#00b87a', '#17bf63'],
    alert:  ['#f4212e', '#f7b928'],
  },
  ui: {
    grid:         'rgba(167, 139, 250, 0.07)',
    axis:         'rgba(236, 233, 245, 0.28)',
    label:        'rgba(236, 233, 245, 0.60)',
    tooltip:      'rgba(0, 0, 0, 0.97)',
    tooltipBorder:'rgba(167, 139, 250, 0.55)',
    border:       'rgba(167, 139, 250, 0.18)',
  },
  edges: {
    critical: '#f4212e',
    high:     '#f97316',
    medium:   '#f7b928',
    low:      '#17bf63',
    default:  '#a78bfa',
  },
  themes: {
    dark: {
      background:      DEFAULT_COLORS.background,
      backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
      surface:         DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border:          DEFAULT_COLORS.border,
      borderSoft:      DEFAULT_COLORS.borderSoft,
      borderSubtle:    'rgba(167, 139, 250, 0.10)',
      borderStrong:    'rgba(167, 139, 250, 0.45)',
      borderAccent:    'rgba(167, 139, 250, 0.22)',
      textPrimary:     DEFAULT_COLORS.textPrimary,
      textSecondary:   DEFAULT_COLORS.textSecondary,
      textMuted:       DEFAULT_COLORS.textMuted,
      textInverse:     DEFAULT_COLORS.textInverse,
      textAccent:      DEFAULT_COLORS.primary,
      primaryFrom:     DEFAULT_COLORS.primary,
      primaryTo:       '#9061fa',
      primary:         DEFAULT_COLORS.primary,
      accent:          DEFAULT_COLORS.secondary,
      nodeBg:          '#1a1720',
      nodeStroke:      DEFAULT_COLORS.primary,
      edge:            '#d9d9d9',
      edgeGlow:        DEFAULT_COLORS.primary,
      hubRing1:        DEFAULT_COLORS.primary,
      hubRing2:        '#00b87a',
      hubCore:         '#000000',
      hubBorder:       DEFAULT_COLORS.primary,
      statBorder:      '#00b87a',
    },
  },
  networkSankey: {
    hubGradientFrom:  '#1a1720',
    hubGradientTo:    '#000000',
    panelGradientFrom:'#221e2c',
    panelGradientTo:  '#1a1720',
    input:      '#a78bfa',
    inputGlow:  '#c4b5fd',
    output:     '#f4212e',
    outputGlow: '#d71920',
    cyan:       '#a78bfa',
    textInput:  '#f6f2ff',
    textPanel:  '#ece9f5',
    textOutput: '#fbb4bb',
  },
  default: '#a78bfa',
};

export const panelSummaryColors = {
  primary: '#a78bfa',
  info:    '#00b87a',
  warning: '#f7b928',
  success: '#17bf63',
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-violet-400 to-purple-500',
  primaryShadow:   'shadow-violet-400/50',
};

export { DEFAULT_COLORS };
export default sidebarColors;
