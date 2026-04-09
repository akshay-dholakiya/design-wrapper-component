// ============================================================
// theme_amber_dark.jsx — Amber Gold Dark Theme  (Amber-400 accent)
// ============================================================

const DEFAULT_COLORS = {
  background: '#000000',
  backgroundSoft: '#000000',
  surface: '#2e1f00',
  surfaceElevated: '#3d2a00',
  border: '#78530a',
  borderSoft: 'rgba(251, 191, 36, 0.06)',
  textPrimary: '#fef9e7',
  textSecondary: 'rgba(254, 249, 231, 0.60)',
  textMuted: 'rgba(254, 249, 231, 0.35)',
  textInverse: '#140e00',
  primary: '#fbbf24',
  secondary: '#f59e0b',
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#271a00',
  surfaceTint: '#332200',
  surfaceMutedDeep: '#2e1f00',
  surfaceTintDark: '#78530a',
  backgroundDeep: '#0e0900',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(251, 191, 36, 0.08)',
  borderStrong: 'rgba(251, 191, 36, 0.45)',
  borderAccent: 'rgba(251, 191, 36, 0.22)',

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: DEFAULT_COLORS.primary,
  textDim: '#fcd34d',
  textDisabled: '#78530a',
  textLighter: '#fde68a',
  textOffWhite: '#fef9e7',
  textTertiary: '#fcd34d',

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom: DEFAULT_COLORS.primary,
  primaryTo: DEFAULT_COLORS.secondary,
  primary: DEFAULT_COLORS.primary,
  accent: DEFAULT_COLORS.secondary,
  primaryMuted: '#d97706',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger: '#dc2626',
  dangerDark: '#b91c1c',
  dangerHover: '#ef4444',
  dangerSoft: '#fca5a5',
  dangerLight: '#f87171',
  dangerDark2: '#991b1b',
  dangerDarker: '#7f1d1d',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success: '#059669',
  successSoft: '#10b981',
  successGreen: '#16a34a',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning: '#d97706',
  warningLight: '#f59e0b',
  warningDark: '#b45309',
  warningSoft: '#fde68a',
  warningOrange: '#ea580c',

  // ── STATUS — INFO ────────────────────────────────────────────
  info: DEFAULT_COLORS.primary,
  infoSoft: DEFAULT_COLORS.secondary,

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral: '#6b7280',
  errorcolor: '#dc2626',
  sucesscolor: '#16a34a',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom: '#140e00',
  loginBgTo: '#2e1f00',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple: '#7c3aed',
  accentCyan: '#0891b2',
  accentIndigo: '#4338ca',
  accentPink: '#db2777',
  accentBlue: '#0284c7',
  accentTeal: '#0d9488',
  accentViolet: '#7c3aed',
  accentOrange: '#ea580c',
  accentYellow: '#ca8a04',
  accentBlueDark: '#1d4ed8',
  accentIndigoDark: '#3730a3',
  accentVioletDark: '#6d28d9',
  accentPurple600: '#7c3aed',

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: '#c2410c',
  orangeDark800: '#9a3412',
  orangeDark900: '#7c2d12',
  amberDark900: '#78350f',
  orangeDark950: '#451a03',
  stoneDark800: '#1f1500',
  stoneDark900: '#140e00',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground: DEFAULT_COLORS.surface,
  hoverBorder: DEFAULT_COLORS.border,
  hoverShadow: 'rgba(251, 191, 36, 0.25)',
  hoverShadowSpread: '0 0 16px',
  hoverText: DEFAULT_COLORS.primary,
  activeBackground: DEFAULT_COLORS.surfaceElevated,
  activeBorder: DEFAULT_COLORS.border,
  activeShadow: 'rgba(251, 191, 36, 0.20)',
  activeText: DEFAULT_COLORS.primary,
  buttonBackground: DEFAULT_COLORS.surfaceElevated,
  buttonIconColor: DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-amber-400 to-amber-500',
  primaryShadow: 'shadow-amber-400/30',
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
  primary: ['#fbbf24', '#f59e0b', '#fcd34d', '#d97706', '#fde68a'],
  severity: {
    critical: '#dc2626',
    high: '#ea580c',
    medium: '#ca8a04',
    low: '#fbbf24',
    info: '#fbbf24',
  },
  series: [
    '#fbbf24',
    '#f59e0b',
    '#7c3aed',
    '#0891b2',
    '#f97316',
    '#db2777',
    '#0d9488',
    '#4338ca',
    '#65a30d',
    '#fcd34d',
  ],
  categorical: [
    '#fbbf24',
    '#f59e0b',
    '#fcd34d',
    '#d97706',
    '#7c3aed',
    '#a78bfa',
    '#0891b2',
    '#22d3ee',
    '#db2777',
    '#f9a8d4',
  ],
  gradients: {
    rose: ['#fbbf24', '#f59e0b'],
    pink: ['#d97706', '#b45309'],
    orange: ['#ea580c', '#f97316'],
    purple: ['#7c3aed', '#a78bfa'],
  },
  ui: {
    grid: 'rgba(251, 191, 36, 0.10)',
    axis: 'rgba(254, 249, 231, 0.25)',
    label: 'rgba(254, 249, 231, 0.55)',
    tooltip: 'rgba(20, 14, 0, 0.97)',
    tooltipBorder: 'rgba(251, 191, 36, 0.35)',
    border: 'rgba(251, 191, 36, 0.18)',
  },
  edges: {
    critical: '#dc2626',
    high: '#f87171',
    medium: '#fbbf24',
    low: '#78530a',
    default: '#f59e0b',
  },
  themes: {
    dark: {
      background: DEFAULT_COLORS.background,
      backgroundSoft: DEFAULT_COLORS.backgroundSoft,
      surface: DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border: DEFAULT_COLORS.border,
      borderSoft: DEFAULT_COLORS.borderSoft,
      borderSubtle: 'rgba(251,191,36,0.08)',
      borderStrong: 'rgba(251,191,36,0.45)',
      borderAccent: 'rgba(251,191,36,0.20)',
      textPrimary: DEFAULT_COLORS.textPrimary,
      textSecondary: DEFAULT_COLORS.textSecondary,
      textMuted: DEFAULT_COLORS.textMuted,
      textInverse: DEFAULT_COLORS.textInverse,
      textAccent: '#fbbf24',
      primaryFrom: '#fbbf24',
      primaryTo: '#f59e0b',
      primary: '#fbbf24',
      accent: '#f59e0b',
      nodeBg: '#1f1500',
      nodeStroke: '#fbbf24',
      edge: '#fef9e7',
      edgeGlow: '#f59e0b',
      hubRing1: '#fbbf24',
      hubRing2: '#d97706',
      hubCore: '#140e00',
      hubBorder: '#f59e0b',
      statBorder: '#d97706',
    },
    light: {
      background: '#fffbeb',
      backgroundSoft: '#fef3c7',
      surface: '#fde68a',
      surfaceElevated: '#ffffff',
      border: '#fcd34d',
      borderSoft: 'rgba(245,158,11,0.08)',
      borderSubtle: 'rgba(245,158,11,0.10)',
      borderStrong: 'rgba(245,158,11,0.35)',
      borderAccent: 'rgba(245,158,11,0.18)',
      textPrimary: '#451a03',
      textSecondary: 'rgba(69,26,3,0.60)',
      textMuted: 'rgba(69,26,3,0.35)',
      textInverse: '#ffffff',
      textAccent: '#d97706',
      primaryFrom: '#f59e0b',
      primaryTo: '#fbbf24',
      primary: '#f59e0b',
      accent: '#fbbf24',
      nodeBg: '#fef3c7',
      nodeStroke: '#f59e0b',
      edge: '#fcd34d',
      edgeGlow: 'rgba(245,158,11,0.4)',
      hubRing1: '#fbbf24',
      hubRing2: '#d97706',
      hubCore: '#fffbeb',
      hubBorder: '#f59e0b',
      statBorder: '#fbbf24',
    },
    cyber: {
      background: '#0a0700',
      backgroundSoft: '#120f00',
      surface: '#1c1600',
      surfaceElevated: '#261e00',
      border: '#5c4400',
      borderSoft: 'rgba(255,200,0,0.06)',
      borderSubtle: 'rgba(255,200,0,0.10)',
      borderStrong: 'rgba(255,200,0,0.40)',
      borderAccent: 'rgba(255,200,0,0.20)',
      textPrimary: '#fef9e7',
      textSecondary: 'rgba(254,249,231,0.55)',
      textMuted: 'rgba(254,249,231,0.30)',
      textInverse: '#0a0700',
      textAccent: '#ffc800',
      primary: '#ffc800',
      accent: '#fbbf24',
      nodeBg: '#080500',
      nodeStroke: '#ffc800',
      edge: '#fef9e7',
      edgeGlow: '#ffc800',
      hubRing1: '#ffc800',
      hubRing2: '#f59e0b',
      hubCore: '#050400',
      hubBorder: '#d97706',
      statBorder: '#ffc800',
    },
  },
  networkSankey: {
    hubGradientFrom: '#2e1f00',
    hubGradientTo: '#140e00',
    panelGradientFrom: '#1f1500',
    panelGradientTo: '#140e00',
    input: '#fbbf24',
    inputGlow: '#f59e0b',
    output: '#059669',
    outputGlow: '#047857',
    cyan: '#d97706',
    textInput: '#fde68a',
    textPanel: '#fef9e7',
    textOutput: '#6ee7b7',
  },
  default: '#fbbf24',
};

export const panelSummaryColors = {
  primary: '#fbbf24',
  info: '#f59e0b',
  warning: '#ea580c',
  success: '#0d9488',
  overlay: '#fef9e7',
};

export const sidebarClasses = {
  primaryGradient: 'from-amber-400 to-amber-500',
  primaryShadow: 'shadow-amber-400/30',
};

export { DEFAULT_COLORS };
export default sidebarColors;
