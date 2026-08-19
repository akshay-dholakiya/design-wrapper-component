// ============================================================
// trendmicro.jsx — TRENDMICRO Theme
// ------------------------------------------------------------
// Graphite dark canvas with electric-blue primary, matching the
// Trend Micro Vision One severity palette (blue/green/red/amber).
//   • Graphite Canvas   — #212121 background
//   • Electric Blue     — #578AEF primary
//   • Severity colors   — green/red/amber sourced directly from palette
// ============================================================

const DEFAULT_COLORS = {
  background:      '#151515',
  backgroundSoft:  '#212121',
  surface:         '#212121',
  surfaceElevated: '#424242',

  border:     '#424242',
  borderSoft: 'rgba(66, 66, 66, 0.20)',

  textPrimary:   '#f5f5f5',
  textSecondary: 'rgba(255, 255, 255, 0.64)',
  textMuted:     'rgba(255, 255, 255, 0.56)',
  textInverse:   '#212121',

  primary:   '#578AEF',
  secondary: '#04C45A',
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:      DEFAULT_COLORS.background,
  backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
  surface:         DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:      '#1a1a1a',
  surfaceTint:       '#232b3a',
  surfaceMutedDeep:  '#0d0d0d',
  surfaceTintDark:   '#212121',
  backgroundDeep:    '#0a0a0a',

  // ── BORDERS ──────────────────────────────────────────────────
  border:       DEFAULT_COLORS.border,
  borderSoft:   DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(66, 66, 66, 0.28)',
  borderStrong: 'rgba(87, 138, 239, 0.50)',
  borderAccent: 'rgba(87, 138, 239, 0.24)',

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:   DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted:     DEFAULT_COLORS.textMuted,
  textInverse:   DEFAULT_COLORS.textInverse,
  textAccent:    DEFAULT_COLORS.primary,
  textDim:       '#424242',
  textDisabled:  '#2c2c2c',
  textLighter:   'rgba(255, 255, 255, 0.80)',
  textOffWhite:  'rgba(255, 255, 255, 0.96)',
  textTertiary:  '#C9C9C9',

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:  DEFAULT_COLORS.primary,
  primaryTo:    '#3E6FE0',
  primary:      DEFAULT_COLORS.primary,
  accent:       DEFAULT_COLORS.secondary,
  primaryMuted: '#8AACF5',

  // ── SURFACE FX / MODALS ──────────────────────────────────────
  overlayBackdrop: 'rgba(0,0,0,0.55)',
  modalShadow:     'rgba(0,0,0,0.45)',
  elevatedShadow:  'rgba(0,0,0,0.45)',
  thumbShadow:     'rgba(0,0,0,0.35)',
  focusRing:       'rgba(87,138,239,0.15)',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger:       '#F24C4F',
  dangerDark:   '#D93638',
  dangerHover:  '#F5716F',
  dangerSoft:   '#F79A98',
  dangerLight:  '#FAC1BF',
  dangerDark2:  '#B92B2D',
  dangerDarker: '#8C2022',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success:      '#04C45A',
  successSoft:  '#4FDB8C',
  successGreen: '#04C45A',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning:       '#FABA2A',
  warningLight:  '#FCCB5C',
  warningDark:   '#D99A12',
  warningSoft:   '#FDE29B',
  warningOrange: '#F97316',

  // ── STATUS — INFO ────────────────────────────────────────────
  info:     '#578AEF',
  infoSoft: '#8AACF5',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral:     '#C9C9C9',
  errorcolor:  '#F24C4F',
  sucesscolor: '#04C45A',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom: '#151515',
  loginBgTo:   '#212121',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple:     '#a78bfa',
  accentCyan:       '#22d3ee',
  accentIndigo:     '#6366f1',
  accentPink:       '#ec4899',
  accentBlue:       '#578AEF',
  accentTeal:       '#14b8a6',
  accentViolet:     '#8b5cf6',
  accentOrange:     '#F97316',
  accentYellow:     '#FABA2A',
  accentBlueDark:   '#3E6FE0',
  accentIndigoDark: '#4338ca',
  accentVioletDark: '#7c3aed',
  accentPurple600:  '#9333ea',

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: '#c2410c',
  orangeDark800: '#9a3412',
  orangeDark900: '#7c2d12',
  amberDark900:  '#78350f',
  orangeDark950: '#451a03',
  stoneDark800:  '#212121',
  stoneDark900:  '#151515',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground:   DEFAULT_COLORS.surface,
  hoverBorder:       DEFAULT_COLORS.primary,
  hoverShadow:       'rgba(87, 138, 239, 0.35)',
  hoverShadowSpread: '0 0 20px',
  hoverText:         '#8AACF5',
  activeBackground:  DEFAULT_COLORS.surfaceElevated,
  activeBorder:      DEFAULT_COLORS.primary,
  activeShadow:      'rgba(87, 138, 239, 0.50)',
  activeText:        DEFAULT_COLORS.primary,
  buttonBackground:  DEFAULT_COLORS.background,
  buttonIconColor:   DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-blue-500 to-blue-600',
  primaryShadow:   'shadow-blue-500/50',
};

// ===== FONT STYLES ===== (same across all themes)
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
// Palette sourced directly from the Trend Micro dashboard color extraction
export const chartColors = {
  primary: ['#578AEF', '#8AACF5', '#04C45A', '#FABA2A', '#F24C4F'],
  severity: {
    critical: '#F24C4F',
    high:     '#F97316',
    medium:   '#FABA2A',
    low:      '#04C45A',
    info:     '#578AEF',
  },
  series: [
    '#578AEF',  // primary blue
    '#04C45A',  // green
    '#FABA2A',  // amber
    '#F24C4F',  // red
    '#C9C9C9',  // neutral gray
    '#8AACF5',  // light blue
    '#4FDB8C',  // light green
    '#a78bfa',  // violet
    '#22d3ee',  // cyan
    '#ec4899',  // pink
  ],
  categorical: [
    '#578AEF', '#8AACF5',
    '#04C45A', '#4FDB8C',
    '#FABA2A', '#FCCB5C',
    '#F24C4F', '#F79A98',
    '#C9C9C9', '#424242',
  ],
  gradients: {
    blue:  ['#578AEF', '#3E6FE0'],
    green: ['#04C45A', '#4FDB8C'],
    amber: ['#FABA2A', '#FCCB5C'],
    red:   ['#F24C4F', '#F79A98'],
  },
  ui: {
    grid:          'rgba(87, 138, 239, 0.08)',
    axis:          'rgba(255, 255, 255, 0.28)',
    label:         'rgba(255, 255, 255, 0.60)',
    tooltip:       'rgba(21, 21, 21, 0.97)',
    tooltipBorder: 'rgba(87, 138, 239, 0.50)',
    border:        'rgba(66, 66, 66, 0.20)',
  },
  edges: {
    critical: '#F24C4F',
    high:     '#F97316',
    medium:   '#FABA2A',
    low:      '#04C45A',
    default:  '#578AEF',
  },
  themes: {
    dark: {
      background:      DEFAULT_COLORS.background,
      backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
      surface:         DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border:          DEFAULT_COLORS.border,
      borderSoft:      DEFAULT_COLORS.borderSoft,
      borderSubtle:    'rgba(66, 66, 66, 0.28)',
      borderStrong:    'rgba(87, 138, 239, 0.45)',
      borderAccent:    'rgba(87, 138, 239, 0.22)',
      textPrimary:     DEFAULT_COLORS.textPrimary,
      textSecondary:   DEFAULT_COLORS.textSecondary,
      textMuted:       DEFAULT_COLORS.textMuted,
      textInverse:     DEFAULT_COLORS.textInverse,
      textAccent:      DEFAULT_COLORS.primary,
      primaryFrom:     DEFAULT_COLORS.primary,
      primaryTo:       '#3E6FE0',
      primary:         DEFAULT_COLORS.primary,
      accent:          DEFAULT_COLORS.secondary,
      nodeBg:          '#212121',
      nodeStroke:      DEFAULT_COLORS.primary,
      edge:            'rgba(255, 255, 255, 0.80)',
      edgeGlow:        DEFAULT_COLORS.primary,
      hubRing1:        DEFAULT_COLORS.primary,
      hubRing2:        '#04C45A',
      hubCore:         '#151515',
      hubBorder:       DEFAULT_COLORS.primary,
      statBorder:      '#04C45A',
    },
  },
  networkSankey: {
    hubGradientFrom:   '#212121',
    hubGradientTo:     '#151515',
    panelGradientFrom: '#424242',
    panelGradientTo:   '#212121',
    input:      '#578AEF',
    inputGlow:  '#8AACF5',
    output:     '#04C45A',
    outputGlow: '#4FDB8C',
    cyan:       '#22d3ee',
    textInput:  'rgba(255, 255, 255, 0.96)',
    textPanel:  'rgba(255, 255, 255, 0.80)',
    textOutput: 'rgba(255, 255, 255, 0.64)',
  },
  default: '#578AEF',
};

export const panelSummaryColors = {
  primary: '#578AEF',
  info:    '#578AEF',
  warning: '#FABA2A',
  success: '#04C45A',
  overlay: '#151515',
};

export const sidebarClasses = {
  primaryGradient: 'from-blue-500 to-blue-600',
  primaryShadow:   'shadow-blue-500/50',
};

export { DEFAULT_COLORS };
export default sidebarColors;
