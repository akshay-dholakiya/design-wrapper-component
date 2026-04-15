// ============================================================
// theme2.jsx — Orange Amber  (orange-500 accent)
// ============================================================

const DEFAULT_COLORS = {
  background: '#0f0a00',
  backgroundSoft: '#0E0A02',
  surface: '#261800',
  surfaceElevated: '#332200',
  border: '#5c3a00',
  borderSoft: 'rgba(251, 146, 60, 0.06)',
  textPrimary: '#fff8ed',
  textSecondary: 'rgba(255, 248, 237, 0.55)',
  textMuted: 'rgba(255, 248, 237, 0.30)',
  textInverse: '#0f0a00',
  primary: '#f97316', // orange-500
  secondary: '#fb923c', // orange-400
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#1a1200',
  surfaceTint: '#1f1500',
  surfaceMutedDeep: '#100c00',
  surfaceTintDark: '#150f00',
  backgroundDeep: '#060300',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(251, 146, 60, 0.08)',
  borderStrong: 'rgba(251, 146, 60, 0.45)',
  borderAccent: 'rgba(251, 146, 60, 0.20)',

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: DEFAULT_COLORS.secondary,
  textDim: '#5c3a00',
  textDisabled: '#3d2600',
  textLighter: '#fed7aa', // orange-200
  textOffWhite: '#fff8ed',
  textTertiary: '#fdba74', // orange-300

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom: DEFAULT_COLORS.primary,
  primaryTo: DEFAULT_COLORS.secondary,
  primary: DEFAULT_COLORS.primary,
  accent: DEFAULT_COLORS.secondary,
  primaryMuted: '#fdba74', // orange-300

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger: '#ff2d2d',
  dangerDark: '#dc2626',
  dangerHover: '#ef4444',
  dangerSoft: '#fca5a5',
  dangerLight: '#f87171',
  dangerDark2: '#b91c1c',
  dangerDarker: '#991b1b',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success: '#10b981',
  successSoft: '#34d399',
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
  loginBgFrom: '#0f0a00',
  loginBgTo: '#261800',

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
  stoneDark800: '#1a1000',
  stoneDark900: '#0f0a00',

  // ── HOVER STATES ─────────────────────────────────────────────
  hoverBackground: DEFAULT_COLORS.surface,
  hoverBorder: DEFAULT_COLORS.surface,
  hoverShadow: 'rgba(251, 146, 60, 0.55)',
  hoverShadowSpread: '0 0 20px',
  hoverText: DEFAULT_COLORS.secondary,

  // ── ACTIVE STATES ────────────────────────────────────────────
  activeBackground: DEFAULT_COLORS.surface,
  activeBorder: DEFAULT_COLORS.surface,
  activeShadow: 'rgba(251, 146, 60, 0.45)',
  activeText: DEFAULT_COLORS.primary,

  // ── BUTTON ───────────────────────────────────────────────────
  buttonBackground: DEFAULT_COLORS.background,
  buttonIconColor: DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-orange-500 to-orange-400',
  primaryShadow: 'shadow-orange-500/50',
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
  primary: ['#f97316', '#fb923c', '#ea6d0a', '#fdba74', '#fed7aa'],
  severity: {
    critical: '#ef4444',
    high: '#f97316',
    medium: '#eab308',
    low: '#f97316',
    info: '#fb923c',
  },
  series: [
    '#f97316',
    '#fb923c',
    '#eab308',
    '#f59e0b',
    '#fbbf24',
    '#ef4444',
    '#ec4899',
    '#a78bfa',
    '#14b8a6',
    '#84cc16',
  ],
  categorical: [
    '#f97316',
    '#fb923c',
    '#f59e0b',
    '#fbbf24',
    '#eab308',
    '#facc15',
    '#ef4444',
    '#f87171',
    '#ec4899',
    '#f472b6',
  ],
  gradients: {
    orange: ['#f97316', '#fb923c'],
    amber: ['#f59e0b', '#fbbf24'],
    red: ['#ef4444', '#f87171'],
    pink: ['#ec4899', '#f472b6'],
  },
  ui: {
    grid: 'rgba(251, 146, 60, 0.08)',
    axis: 'rgba(255, 248, 237, 0.30)',
    label: 'rgba(255, 248, 237, 0.60)',
    tooltip: 'rgba(15, 10, 0, 0.97)',
    tooltipBorder: 'rgba(251, 146, 60, 0.50)',
    border: 'rgba(251, 146, 60, 0.15)',
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
      background: DEFAULT_COLORS.background,
      backgroundSoft: DEFAULT_COLORS.backgroundSoft,
      surface: DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border: DEFAULT_COLORS.border,
      borderSoft: DEFAULT_COLORS.borderSoft,
      borderSubtle: 'rgba(251, 146, 60, 0.08)',
      borderStrong: 'rgba(251, 146, 60, 0.45)',
      borderAccent: 'rgba(251, 146, 60, 0.20)',
      textPrimary: DEFAULT_COLORS.textPrimary,
      textSecondary: DEFAULT_COLORS.textSecondary,
      textMuted: DEFAULT_COLORS.textMuted,
      textInverse: DEFAULT_COLORS.textInverse,
      textAccent: '#fb923c',
      primaryFrom: '#f97316',
      primaryTo: '#fb923c',
      primary: '#f97316',
      accent: '#fb923c',
      nodeBg: '#120900',
      nodeStroke: '#fb923c',
      edge: '#fff8ed',
      edgeGlow: '#f97316',
      hubRing1: '#fb923c',
      hubRing2: '#f59e0b',
      hubCore: '#0a0600',
      hubBorder: '#f97316',
      statBorder: '#f59e0b',
    },
    light: {
      background: '#fff7ed',
      backgroundSoft: '#ffedd5',
      surface: '#fed7aa',
      surfaceElevated: '#ffffff',
      border: '#fdba74',
      borderSoft: 'rgba(249, 115, 22, 0.08)',
      borderSubtle: 'rgba(249, 115, 22, 0.10)',
      borderStrong: 'rgba(249, 115, 22, 0.35)',
      borderAccent: 'rgba(249, 115, 22, 0.18)',
      textPrimary: '#431407',
      textSecondary: '#7c2d12',
      textMuted: '#c2410c',
      textInverse: '#fff7ed',
      textAccent: '#ea580c',
      primary: '#ea580c',
      accent: '#f97316',
      nodeBg: '#ffedd5',
      nodeStroke: '#ea580c',
      edge: '#fdba74',
      edgeGlow: 'rgba(249, 115, 22, 0.4)',
      hubRing1: '#f97316',
      hubRing2: '#f59e0b',
      hubCore: '#fff7ed',
      hubBorder: '#ea580c',
      statBorder: '#f97316',
    },
    cyber: {
      background: DEFAULT_COLORS.background,
      backgroundSoft: DEFAULT_COLORS.backgroundSoft,
      surface: DEFAULT_COLORS.surface,
      surfaceElevated: '#1f1200',
      border: '#3d2000',
      borderSoft: 'rgba(255, 170, 0, 0.06)',
      borderSubtle: 'rgba(255, 170, 0, 0.10)',
      borderStrong: 'rgba(255, 170, 0, 0.40)',
      borderAccent: 'rgba(255, 170, 0, 0.20)',
      textPrimary: '#fff8ed',
      textSecondary: 'rgba(255, 248, 237, 0.55)',
      textMuted: 'rgba(255, 248, 237, 0.30)',
      textInverse: '#080400',
      textAccent: '#ffaa00',
      primary: '#ffaa00',
      accent: '#ff6a00',
      nodeBg: '#0d0700',
      nodeStroke: '#ffaa00',
      edge: '#fff8ed',
      edgeGlow: '#ffaa00',
      hubRing1: '#ffaa00',
      hubRing2: '#ff6a00',
      hubCore: '#070400',
      hubBorder: '#f97316',
      statBorder: '#ffaa00',
    },
  },
  networkSankey: {
    hubGradientFrom: '#1f1000',
    hubGradientTo: '#0f0800',
    panelGradientFrom: '#180d00',
    panelGradientTo: '#0c0600',
    input: '#fb923c',
    inputGlow: '#f97316',
    output: '#34d399',
    outputGlow: '#059669',
    cyan: '#f59e0b',
    textInput: '#fed7aa',
    textPanel: '#fde8c8',
    textOutput: '#d1fae5',
  },
  default: '#f97316',
};

export const panelSummaryColors = {
  primary: '#f97316',
  info: '#f59e0b',
  warning: '#eab308',
  success: '#14b8a6',
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-orange-500 to-orange-400',
  primaryShadow: 'shadow-orange-500/50',
};

export { DEFAULT_COLORS };
export default sidebarColors;
