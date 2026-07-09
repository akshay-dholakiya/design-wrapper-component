// ============================================================
// sentinel.jsx — SENTINEL Theme
// ------------------------------------------------------------
// Tactical charcoal command-center aesthetic.
//   Dark   — Pure charcoal #1a1a1a · crimson-red primary · olive secondary
//   Light  — Medium gray canvas · dark-red primary · steel-blue accent
//   Charts — Red · Olive · Steel-blue · Amber · Taupe
//   Font   — Oxanium (headings) · Source Code Pro (mono)
//   Radius — 0px  (sharp, military edges)
// ============================================================

const DEFAULT_COLORS = {
  // Dark canvas — pure charcoal (no blue undertone)
  background:      '#1a1a1a',   // --background (dark)
  backgroundSoft:  '#252525',   // --muted (dark)
  surface:         '#2a2a2a',   // --card (dark)
  surfaceElevated: '#333333',   // elevated above card

  border:     '#4a4a4a',                     // --border (dark)
  borderSoft: 'rgba(74, 74, 74, 0.30)',

  textPrimary:   '#e0e0e0',                  // --foreground (dark)
  textSecondary: 'rgba(224, 224, 224, 0.65)',
  textMuted:     '#a0a0a0',                  // --muted-foreground (dark)
  textInverse:   '#ffffff',                  // --primary-foreground

  primary:   '#e53935',   // --primary (dark)   crimson-600
  secondary: '#689f38',   // --secondary (dark)  olive-green
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:      DEFAULT_COLORS.background,
  backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
  surface:         DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:      '#1e1e1e',
  surfaceTint:       '#232323',
  surfaceMutedDeep:  '#141414',   // --sidebar (dark)
  surfaceTintDark:   '#252525',
  backgroundDeep:    '#0f0f0f',

  // ── BORDERS ──────────────────────────────────────────────────
  border:       DEFAULT_COLORS.border,
  borderSoft:   DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(74, 74, 74, 0.40)',
  borderStrong: 'rgba(229, 57, 53, 0.55)',    // crimson emphasis
  borderAccent: 'rgba(100, 181, 246, 0.35)',  // steel-blue accent

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:   DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted:     DEFAULT_COLORS.textMuted,
  textInverse:   DEFAULT_COLORS.textInverse,
  textAccent:    DEFAULT_COLORS.primary,
  textDim:       '#4a4a4a',
  textDisabled:  '#333333',
  textLighter:   '#cccccc',
  textOffWhite:  '#e0e0e0',
  textTertiary:  '#808080',

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:  DEFAULT_COLORS.primary,        // #e53935
  primaryTo:    '#ef9a9a',                     // rose endpoint
  primary:      DEFAULT_COLORS.primary,
  accent:       '#64b5f6',                     // --accent (dark) steel-blue
  primaryMuted: '#ef9a9a',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger:       '#e53935',   // aligned with crimson primary
  dangerDark:   '#c62828',
  dangerHover:  '#ef5350',
  dangerSoft:   '#ef9a9a',
  dangerLight:  '#ffcdd2',
  dangerDark2:  '#b71c1c',
  dangerDarker: '#7f0000',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success:      '#689f38',   // olive-green (secondary)
  successSoft:  '#9ccc65',
  successGreen: '#558b2f',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning:       '#ffa000',   // --destructive (dark)  amber-700
  warningLight:  '#ffca28',
  warningDark:   '#ff6f00',
  warningSoft:   '#ffe082',
  warningOrange: '#ff6f00',

  // ── STATUS — INFO ────────────────────────────────────────────
  info:     '#64b5f6',   // --accent (dark) steel-blue
  infoSoft: '#90caf9',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral:     '#757575',
  errorcolor:  '#e53935',
  sucesscolor: '#689f38',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom: '#0f0f0f',
  loginBgTo:   '#2a2a2a',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple:     '#a78bfa',
  accentCyan:       '#22d3ee',
  accentIndigo:     '#6366f1',
  accentPink:       '#ec4899',
  accentBlue:       '#64b5f6',
  accentTeal:       '#14b8a6',
  accentViolet:     '#8b5cf6',
  accentOrange:     '#ffa000',
  accentYellow:     '#ffca28',
  accentBlueDark:   '#1565c0',
  accentIndigoDark: '#4338ca',
  accentVioletDark: '#7c3aed',
  accentPurple600:  '#9333ea',

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: '#e65100',
  orangeDark800: '#bf360c',
  orangeDark900: '#7c2d12',
  amberDark900:  '#78350f',
  orangeDark950: '#451a03',
  stoneDark800:  '#252525',
  stoneDark900:  '#1a1a1a',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground:   DEFAULT_COLORS.surface,
  hoverBorder:       DEFAULT_COLORS.primary,
  hoverShadow:       'rgba(229, 57, 53, 0.50)',
  hoverShadowSpread: '0 0 20px',
  hoverText:         '#ef5350',
  activeBackground:  DEFAULT_COLORS.surfaceElevated,
  activeBorder:      DEFAULT_COLORS.primary,
  activeShadow:      'rgba(229, 57, 53, 0.60)',
  activeText:        DEFAULT_COLORS.primary,
  buttonBackground:  DEFAULT_COLORS.background,
  buttonIconColor:   DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-red-600 to-rose-400',
  primaryShadow:   'shadow-red-600/50',
};

// ===== FONT STYLES =====
const fontSmoothing = {
  fontFamily:
    '"Oxanium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  letterSpacing: '0em',
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
  metric:       { fontSize: '24px', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.2',  ...fontSmoothing },
  metricMedium: { fontSize: '30px', fontWeight: '700', lineHeight: '1.1',  fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metric2xl:    { fontSize: '32px', fontWeight: '700', lineHeight: '1',    fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metricLarge:  { fontSize: '48px', fontWeight: '700', lineHeight: '1.1',  fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metricXL:     { fontSize: '60px', fontWeight: '700', lineHeight: '1.1',  fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  code: {
    fontSize:            '13px',
    fontFamily:          '"Source Code Pro", "Fira Code", "Consolas", monospace',
    lineHeight:          '1.6',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
};

// ===== CHART COLORS =====
// 5-step series from CSS --chart-1…5 (dark): red · olive · steel-blue · amber · taupe
export const chartColors = {
  primary: ['#e53935', '#ef5350', '#ef9a9a', '#ffcdd2', '#ffebee'],
  severity: {
    critical: '#e53935',   // chart-1 crimson
    high:     '#ffa000',   // chart-4 amber
    medium:   '#689f38',   // chart-2 olive
    low:      '#64b5f6',   // chart-3 steel-blue
    info:     '#64b5f6',
  },
  series: [
    '#e53935',   // chart-1 dark  — crimson (primary)
    '#689f38',   // chart-2 dark  — olive green
    '#64b5f6',   // chart-3 dark  — steel blue
    '#ffa000',   // chart-4 dark  — amber
    '#a1887f',   // chart-5 dark  — taupe/brown
    '#ef5350',   // crimson light
    '#9ccc65',   // light olive
    '#90caf9',   // light steel
    '#ffca28',   // light amber
    '#bcaaa4',   // light taupe
  ],
  categorical: [
    '#e53935', '#ef5350',
    '#689f38', '#9ccc65',
    '#64b5f6', '#90caf9',
    '#ffa000', '#ffca28',
    '#a1887f', '#bcaaa4',
  ],
  gradients: {
    crimson:  ['#e53935', '#ef5350'],
    olive:    ['#689f38', '#558b2f'],
    steel:    ['#64b5f6', '#1565c0'],
    amber:    ['#ffa000', '#ff6f00'],
  },
  ui: {
    grid:          'rgba(74, 74, 74, 0.18)',
    axis:          'rgba(224, 224, 224, 0.30)',
    label:         'rgba(224, 224, 224, 0.65)',
    tooltip:       'rgba(26, 26, 26, 0.97)',
    tooltipBorder: 'rgba(229, 57, 53, 0.60)',
    border:        'rgba(74, 74, 74, 0.25)',
  },
  edges: {
    critical: '#e53935',
    high:     '#ffa000',
    medium:   '#689f38',
    low:      '#64b5f6',
    default:  '#e53935',
  },
  themes: {
    // Dark from .dark CSS vars
    dark: {
      background:      '#1a1a1a',
      backgroundSoft:  '#252525',
      surface:         '#2a2a2a',
      surfaceElevated: '#333333',
      border:          '#4a4a4a',
      borderSoft:      'rgba(74, 74, 74, 0.30)',
      borderSubtle:    'rgba(74, 74, 74, 0.40)',
      borderStrong:    'rgba(229, 57, 53, 0.55)',
      borderAccent:    'rgba(100, 181, 246, 0.35)',
      textPrimary:     '#e0e0e0',
      textSecondary:   'rgba(224, 224, 224, 0.65)',
      textMuted:       '#a0a0a0',
      textInverse:     '#ffffff',
      textAccent:      '#e53935',
      primaryFrom:     '#e53935',
      primaryTo:       '#ef9a9a',
      primary:         '#e53935',
      accent:          '#64b5f6',
      nodeBg:          '#2a2a2a',
      nodeStroke:      '#e53935',
      edge:            '#e0e0e0',
      edgeGlow:        '#e53935',
      hubRing1:        '#e53935',
      hubRing2:        '#64b5f6',
      hubCore:         '#141414',
      hubBorder:       '#e53935',
      statBorder:      '#64b5f6',
    },
    // Light from :root CSS vars
    light: {
      background:      '#cccccc',   // --background
      backgroundSoft:  '#b8b8b8',   // --muted
      surface:         '#b0b0b0',   // --card
      surfaceElevated: '#c8c8c8',
      border:          '#505050',   // --border
      borderSoft:      'rgba(80, 80, 80, 0.25)',
      borderSubtle:    'rgba(80, 80, 80, 0.35)',
      borderStrong:    'rgba(183, 28, 28, 0.55)',
      borderAccent:    'rgba(70, 130, 180, 0.45)',
      textPrimary:     '#1f1f1f',   // --foreground
      textSecondary:   'rgba(31, 31, 31, 0.70)',
      textMuted:       '#4a4a4a',   // --muted-foreground
      textInverse:     '#ffffff',
      textAccent:      '#b71c1c',
      primary:         '#b71c1c',   // --primary (light)
      accent:          '#4682b4',   // --accent (light) steel blue
      nodeBg:          '#b8b8b8',
      nodeStroke:      '#b71c1c',
      edge:            '#505050',
      edgeGlow:        'rgba(183, 28, 28, 0.40)',
      hubRing1:        '#b71c1c',
      hubRing2:        '#4682b4',
      hubCore:         '#cccccc',
      hubBorder:       '#b71c1c',
      statBorder:      '#4682b4',
    },
  },
  networkSankey: {
    hubGradientFrom:   '#252525',
    hubGradientTo:     '#1a1a1a',
    panelGradientFrom: '#333333',
    panelGradientTo:   '#2a2a2a',
    input:      '#64b5f6',
    inputGlow:  '#90caf9',
    output:     '#ef5350',
    outputGlow: '#e53935',
    cyan:       '#64b5f6',
    textInput:  '#e3f2fd',
    textPanel:  '#e0e0e0',
    textOutput: '#ffcdd2',
  },
  default: '#e53935',
};

export const panelSummaryColors = {
  primary: '#e53935',   // crimson — headline metric
  info:    '#64b5f6',   // steel-blue
  warning: '#ffa000',   // amber
  success: '#689f38',   // olive green
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-red-600 to-rose-400',
  primaryShadow:   'shadow-red-600/50',
};

export { DEFAULT_COLORS };
export default sidebarColors;
