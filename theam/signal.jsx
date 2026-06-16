// ============================================================
// signal.jsx — SIGNAL Theme
// ------------------------------------------------------------
// Twitter / X dark-mode palette — pure black canvas with
// electric sky-blue primary and graphite card surfaces.
//   • Pure Black Canvas    — #000000 background (X dark mode)
//   • Graphite Cards       — #17181c surface (X card color)
//   • Sky-Blue Primary     — #1da1f2 (Twitter / X blue)
//   • Crimson Destructive  — #f4212e (X action red)
//   • Chart palette from X — blue, green, amber, emerald, rose
// ============================================================

const DEFAULT_COLORS = {
  background:      '#000000',
  backgroundSoft:  '#0d0e11',
  surface:         '#17181c',
  surfaceElevated: '#1e2028',

  border:     '#242628',
  borderSoft: 'rgba(29, 161, 242, 0.08)',

  textPrimary:   '#e7e9ea',
  textSecondary: 'rgba(231, 233, 234, 0.62)',
  textMuted:     '#72767a',
  textInverse:   '#0f1419',

  primary:   '#1da1f2',   // X / Twitter blue
  secondary: '#e7e9ea',   // near-white foreground
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:      DEFAULT_COLORS.background,
  backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
  surface:         DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:      '#111214',
  surfaceTint:       '#1a1b1f',
  surfaceMutedDeep:  '#080809',
  surfaceTintDark:   '#0d0e11',
  backgroundDeep:    '#000000',

  // ── BORDERS ──────────────────────────────────────────────────
  border:       DEFAULT_COLORS.border,
  borderSoft:   DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(29, 161, 242, 0.12)',
  borderStrong: 'rgba(29, 161, 242, 0.45)',
  borderAccent: 'rgba(29, 161, 242, 0.22)',

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:   DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted:     DEFAULT_COLORS.textMuted,
  textInverse:   DEFAULT_COLORS.textInverse,
  textAccent:    DEFAULT_COLORS.primary,
  textDim:       '#38444d',
  textDisabled:  '#242628',
  textLighter:   '#d9d9d9',
  textOffWhite:  '#f0f3f4',
  textTertiary:  '#8b98a5',

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:  DEFAULT_COLORS.primary,    // #1da1f2
  primaryTo:    '#1c9cf0',                 // slightly deeper endpoint
  primary:      DEFAULT_COLORS.primary,
  accent:       DEFAULT_COLORS.secondary,
  primaryMuted: '#8ecdf8',

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
  info:     '#1da1f2',
  infoSoft: '#8ecdf8',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral:     '#536471',
  errorcolor:  '#f4212e',
  sucesscolor: '#17bf63',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom: '#000000',
  loginBgTo:   '#061622',

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
  stoneDark800:  '#17181c',
  stoneDark900:  '#0d0e11',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground:   DEFAULT_COLORS.surface,
  hoverBorder:       DEFAULT_COLORS.primary,
  hoverShadow:       'rgba(29, 161, 242, 0.35)',
  hoverShadowSpread: '0 0 20px',
  hoverText:         '#4db5f5',
  activeBackground:  DEFAULT_COLORS.surfaceElevated,
  activeBorder:      DEFAULT_COLORS.primary,
  activeShadow:      'rgba(29, 161, 242, 0.50)',
  activeText:        DEFAULT_COLORS.primary,
  buttonBackground:  DEFAULT_COLORS.background,
  buttonIconColor:   DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-sky-400 to-blue-500',
  primaryShadow:   'shadow-sky-400/50',
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
// Mirrors the X/Twitter chart palette exactly
export const chartColors = {
  primary: ['#1da1f2', '#4db5f5', '#8ecdf8', '#bfe3fb', '#e8f5fe'],
  severity: {
    critical: '#f4212e',
    high:     '#f97316',
    medium:   '#f7b928',
    low:      '#17bf63',
    info:     '#1da1f2',
  },
  series: [
    '#1e9df1',  // X blue (primary)
    '#00b87a',  // Green
    '#f7b928',  // Amber
    '#17bf63',  // Emerald
    '#e0245e',  // Rose
    '#1da1f2',  // Sky
    '#8b98a5',  // Steel
    '#f97316',  // Orange
    '#a78bfa',  // Violet
    '#22d3ee',  // Cyan
  ],
  categorical: [
    '#1e9df1', '#4db5f5',
    '#00b87a', '#4dd68c',
    '#f7b928', '#fac94f',
    '#e0245e', '#f7485e',
    '#17bf63', '#8b98a5',
  ],
  gradients: {
    signal: ['#000000', '#061622'],
    sky:    ['#1da1f2', '#4db5f5'],
    feed:   ['#00b87a', '#17bf63'],
    alert:  ['#f4212e', '#f7b928'],
  },
  ui: {
    grid:         'rgba(29, 161, 242, 0.07)',
    axis:         'rgba(231, 233, 234, 0.28)',
    label:        'rgba(231, 233, 234, 0.60)',
    tooltip:      'rgba(0, 0, 0, 0.97)',
    tooltipBorder:'rgba(29, 161, 242, 0.55)',
    border:       'rgba(29, 161, 242, 0.18)',
  },
  edges: {
    critical: '#f4212e',
    high:     '#f97316',
    medium:   '#f7b928',
    low:      '#17bf63',
    default:  '#1da1f2',
  },
  themes: {
    dark: {
      background:      DEFAULT_COLORS.background,
      backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
      surface:         DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border:          DEFAULT_COLORS.border,
      borderSoft:      DEFAULT_COLORS.borderSoft,
      borderSubtle:    'rgba(29, 161, 242, 0.10)',
      borderStrong:    'rgba(29, 161, 242, 0.45)',
      borderAccent:    'rgba(29, 161, 242, 0.22)',
      textPrimary:     DEFAULT_COLORS.textPrimary,
      textSecondary:   DEFAULT_COLORS.textSecondary,
      textMuted:       DEFAULT_COLORS.textMuted,
      textInverse:     DEFAULT_COLORS.textInverse,
      textAccent:      DEFAULT_COLORS.primary,
      primaryFrom:     DEFAULT_COLORS.primary,
      primaryTo:       '#1c9cf0',
      primary:         DEFAULT_COLORS.primary,
      accent:          DEFAULT_COLORS.secondary,
      nodeBg:          '#17181c',
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
    hubGradientFrom:  '#17181c',
    hubGradientTo:    '#000000',
    panelGradientFrom:'#1e2028',
    panelGradientTo:  '#17181c',
    input:      '#1da1f2',
    inputGlow:  '#4db5f5',
    output:     '#f4212e',
    outputGlow: '#d71920',
    cyan:       '#1da1f2',
    textInput:  '#e8f5fe',
    textPanel:  '#e7e9ea',
    textOutput: '#fbb4bb',
  },
  default: '#1da1f2',
};

export const panelSummaryColors = {
  primary: '#1da1f2',
  info:    '#00b87a',
  warning: '#f7b928',
  success: '#17bf63',
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-sky-400 to-blue-500',
  primaryShadow:   'shadow-sky-400/50',
};

export { DEFAULT_COLORS };
export default sidebarColors;
