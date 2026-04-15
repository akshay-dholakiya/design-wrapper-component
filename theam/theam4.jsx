// ============================================================
// theme_forest_dark.jsx — Forest Dark Theme  (Forest-Green accent)
// ============================================================

const DEFAULT_COLORS = {
  background: '#000000',
  backgroundSoft: '#000000',
  surface: '#0e1f0e',
  surfaceElevated: '#142814',
  border: '#1f4a1f',
  borderSoft: 'rgba(74, 163, 74, 0.06)',
  textPrimary: '#edfde8',
  textSecondary: 'rgba(237, 253, 232, 0.55)',
  textMuted: 'rgba(237, 253, 232, 0.30)',
  textInverse: '#050e05',
  primary: '#4a9e4a', // forest-green
  secondary: '#6abf6a', // lighter forest-green
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#0b180b',
  surfaceTint: '#101e10',
  surfaceMutedDeep: '#081408',
  surfaceTintDark: '#0d1a0d',
  backgroundDeep: '#030803',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(74, 163, 74, 0.08)',
  borderStrong: 'rgba(74, 163, 74, 0.45)',
  borderAccent: 'rgba(74, 163, 74, 0.20)',

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: DEFAULT_COLORS.primary,
  textDim: '#1f4a1f',
  textDisabled: '#163016',
  textLighter: '#a8dba8',
  textOffWhite: '#edfde8',
  textTertiary: '#88cc88',

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom: DEFAULT_COLORS.primary,
  primaryTo: DEFAULT_COLORS.secondary,
  primary: DEFAULT_COLORS.primary,
  accent: DEFAULT_COLORS.secondary,
  primaryMuted: '#88cc88',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger: '#ff2d2d',
  dangerDark: '#dc2626',
  dangerHover: '#ef4444',
  dangerSoft: '#fca5a5',
  dangerLight: '#f87171',
  dangerDark2: '#b91c1c',
  dangerDarker: '#991b1b',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success: '#4a9e4a',
  successSoft: '#6abf6a',
  successGreen: '#22c55e',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning: '#f59e0b',
  warningLight: '#fbbf24',
  warningDark: '#d97706',
  warningSoft: '#fde68a',
  warningOrange: '#ea580c',

  // ── STATUS — INFO ────────────────────────────────────────────
  info: DEFAULT_COLORS.primary,
  infoSoft: DEFAULT_COLORS.secondary,

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral: '#6b7280',
  errorcolor: '#ef4444',
  sucesscolor: '#22c55e',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom: '#050e05',
  loginBgTo: '#142814',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple: '#a78bfa',
  accentCyan: '#06b6d4',
  accentIndigo: '#6366f1',
  accentPink: '#ec4899',
  accentBlue: '#38bdf8',
  accentTeal: '#14b8a6',
  accentViolet: '#8b5cf6',
  accentOrange: '#f97316',
  accentYellow: '#eab308',
  accentBlueDark: '#0284c7',
  accentIndigoDark: '#4338ca',
  accentVioletDark: '#7c3aed',
  accentPurple600: '#9333ea',

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: '#c2410c',
  orangeDark800: '#9a3412',
  orangeDark900: '#7c2d12',
  amberDark900: '#78350f',
  orangeDark950: '#451a03',
  stoneDark800: '#091209',
  stoneDark900: '#050e05',

  // ── HOVER STATES ─────────────────────────────────────────────
  hoverBackground: DEFAULT_COLORS.surface,
  hoverBorder: DEFAULT_COLORS.surface,
  hoverShadow: 'rgba(74, 163, 74, 0.55)',
  hoverShadowSpread: '0 0 20px',
  hoverText: DEFAULT_COLORS.secondary,
  activeBackground: DEFAULT_COLORS.surface,
  // ── ACTIVE STATES ────────────────────────────────────────────

  activeBorder: '#0e1f0e',
  activeShadow: 'rgba(74, 163, 74, 0.45)',
  activeText: '#4a9e4a',

  // ── BUTTON ───────────────────────────────────────────────────
  buttonBackground: '#050e05',
  buttonIconColor: '#edfde8',

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-green-700 to-green-500',
  primaryShadow: 'shadow-green-700/50',
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
  smoothing: fontSmoothing,
  heading1: {
    fontSize: '32px',
    fontWeight: '800',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    ...fontSmoothing,
  },
  heading2: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.015em',
    ...fontSmoothing,
  },
  heading3: {
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1.3',
    letterSpacing: '-0.01em',
    ...fontSmoothing,
  },
  heading4: {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '1.4',
    letterSpacing: '-0.005em',
    ...fontSmoothing,
  },
  heading5: {
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '1.4',
    ...fontSmoothing,
  },
  heading6: {
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '1.5',
    letterSpacing: '0.01em',
    ...fontSmoothing,
  },
  body: { fontSize: '14px', lineHeight: '1.6', ...fontSmoothing },
  bodyLarge: { fontSize: '16px', lineHeight: '1.6', ...fontSmoothing },
  bodySmall: { fontSize: '12px', lineHeight: '1.5', ...fontSmoothing },
  caption: { fontSize: '12px', lineHeight: '1.4', ...fontSmoothing },
  label: {
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '0.01em',
    ...fontSmoothing,
  },
  button: {
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.02em',
    ...fontSmoothing,
  },
  metric: {
    fontSize: '24px',
    fontWeight: '700',
    fontVariantNumeric: 'tabular-nums',
    lineHeight: '1.2',
    ...fontSmoothing,
  },
  metricMedium: {
    fontSize: '30px',
    fontWeight: '700',
    lineHeight: '1.1',
    fontVariantNumeric: 'tabular-nums',
    ...fontSmoothing,
  },
  metric2xl: {
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '1',
    fontVariantNumeric: 'tabular-nums',
    ...fontSmoothing,
  },
  metricLarge: {
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '1.1',
    fontVariantNumeric: 'tabular-nums',
    ...fontSmoothing,
  },
  metricXL: {
    fontSize: '60px',
    fontWeight: '700',
    lineHeight: '1.1',
    fontVariantNumeric: 'tabular-nums',
    ...fontSmoothing,
  },
  code: {
    fontSize: '13px',
    fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
    lineHeight: '1.6',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
};

// ===== CHART COLORS =====

export const chartColors = {
  primary: ['#4a9e4a', '#6abf6a', '#336e33', '#88cc88', '#a8dba8'],
  severity: {
    critical: '#ef4444',
    high: '#f97316',
    medium: '#f59e0b',
    low: '#4a9e4a',
    info: '#6abf6a',
  },
  series: [
    '#4a9e4a',
    '#6abf6a',
    '#336e33',
    '#88cc88',
    '#255225',
    '#ef4444',
    '#ec4899',
    '#f59e0b',
    '#a78bfa',
    '#84cc16',
  ],
  categorical: [
    '#4a9e4a',
    '#6abf6a',
    '#336e33',
    '#88cc88',
    '#255225',
    '#a8dba8',
    '#ef4444',
    '#f87171',
    '#ec4899',
    '#f472b6',
  ],
  gradients: {
    orange: ['#4a9e4a', '#6abf6a'],
    amber: ['#336e33', '#88cc88'],
    red: ['#ef4444', '#f87171'],
    pink: ['#ec4899', '#f472b6'],
  },
  ui: {
    grid: 'rgba(74, 163, 74, 0.08)',
    axis: 'rgba(237, 253, 232, 0.30)',
    label: 'rgba(237, 253, 232, 0.60)',
    tooltip: 'rgba(5, 14, 5, 0.97)',
    tooltipBorder: 'rgba(74, 163, 74, 0.50)',
    border: 'rgba(74, 163, 74, 0.15)',
  },
  edges: {
    critical: '#ef4444',
    high: '#f87171',
    medium: '#fca5a5',
    low: '#fecaca',
    default: '#dc2626',
  },
  themes: {
    dark: {
      background: '#050e05',
      backgroundSoft: '#091209',
      surface: '#0e1f0e',
      surfaceElevated: '#142814',
      border: '#1f4a1f',
      borderSoft: 'rgba(74, 163, 74, 0.06)',
      borderSubtle: 'rgba(74, 163, 74, 0.08)',
      borderStrong: 'rgba(74, 163, 74, 0.45)',
      borderAccent: 'rgba(74, 163, 74, 0.20)',
      textPrimary: '#edfde8',
      textSecondary: 'rgba(237, 253, 232, 0.55)',
      textMuted: 'rgba(237, 253, 232, 0.30)',
      textInverse: '#050e05',
      textAccent: '#6abf6a',
      primaryFrom: '#4a9e4a',
      primaryTo: '#6abf6a',
      primary: '#4a9e4a',
      accent: '#6abf6a',
      nodeBg: '#0b180b',
      nodeStroke: '#6abf6a',
      edge: '#edfde8',
      edgeGlow: '#4a9e4a',
      hubRing1: '#6abf6a',
      hubRing2: '#336e33',
      hubCore: '#030803',
      hubBorder: '#4a9e4a',
      statBorder: '#336e33',
    },
    light: {
      background: '#f2fbf2',
      backgroundSoft: '#e0f5e0',
      surface: '#c2e8c2',
      surfaceElevated: '#ffffff',
      border: '#8fcc8f',
      borderSoft: 'rgba(74, 163, 74, 0.08)',
      borderSubtle: 'rgba(74, 163, 74, 0.10)',
      borderStrong: 'rgba(74, 163, 74, 0.35)',
      borderAccent: 'rgba(74, 163, 74, 0.18)',
      textPrimary: '#0d2b0d',
      textSecondary: '#1a4a1a',
      textMuted: '#2e6b2e',
      textInverse: '#f2fbf2',
      textAccent: '#336e33',
      primary: '#336e33',
      accent: '#4a9e4a',
      nodeBg: '#e0f5e0',
      nodeStroke: '#336e33',
      edge: '#8fcc8f',
      edgeGlow: 'rgba(74, 163, 74, 0.4)',
      hubRing1: '#4a9e4a',
      hubRing2: '#336e33',
      hubCore: '#f2fbf2',
      hubBorder: '#336e33',
      statBorder: '#4a9e4a',
    },
    cyber: {
      background: '#020802',
      backgroundSoft: '#040f04',
      surface: '#071607',
      surfaceElevated: '#0a1e0a',
      border: '#0f3a0f',
      borderSoft: 'rgba(57, 255, 57, 0.06)',
      borderSubtle: 'rgba(57, 255, 57, 0.10)',
      borderStrong: 'rgba(57, 255, 57, 0.40)',
      borderAccent: 'rgba(57, 255, 57, 0.20)',
      textPrimary: '#edfde8',
      textSecondary: 'rgba(237, 253, 232, 0.55)',
      textMuted: 'rgba(237, 253, 232, 0.30)',
      textInverse: '#020802',
      textAccent: '#39ff39',
      primary: '#39ff39',
      accent: '#6abf6a',
      nodeBg: '#030a03',
      nodeStroke: '#39ff39',
      edge: '#edfde8',
      edgeGlow: '#39ff39',
      hubRing1: '#39ff39',
      hubRing2: '#6abf6a',
      hubCore: '#020802',
      hubBorder: '#4a9e4a',
      statBorder: '#39ff39',
    },
  },
  networkSankey: {
    hubGradientFrom: '#142814',
    hubGradientTo: '#050e05',
    panelGradientFrom: '#0e1f0e',
    panelGradientTo: '#050e05',
    input: '#6abf6a',
    inputGlow: '#4a9e4a',
    output: '#4a9e4a',
    outputGlow: '#336e33',
    cyan: '#336e33',
    textInput: '#a8dba8',
    textPanel: '#edfde8',
    textOutput: '#c2e8c2',
  },
  default: '#4a9e4a',
};

export const panelSummaryColors = {
  primary: '#4a9e4a',
  info: '#336e33',
  warning: '#6abf6a',
  success: '#255225',
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-green-700 to-green-500',
  primaryShadow: 'shadow-green-700/50',
};

export { DEFAULT_COLORS };
export default sidebarColors;
