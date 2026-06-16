// ============================================================
// emerald.jsx — EMERALD Theme
// ------------------------------------------------------------
// Light canvas with emerald-green primary; dark mode flips
// to a slate-900 base with emerald-400 as the brand accent.
//   Light  —  Alice-blue bg · gray-700 text · green-500 primary
//   Dark   —  Slate-900 bg  · gray-300 text · emerald-400 primary
//   Charts —  5-step emerald/teal series (chart-1 → chart-5)
// ============================================================

const DEFAULT_COLORS = {
  // Dark mode canvas — slate-900 base
  background:      '#0f172a',   // --background (dark)
  backgroundSoft:  '#1e293b',   // --muted / --card (dark)
  surface:         '#1e293b',   // --card (dark)
  surfaceElevated: '#2d3748',   // --secondary (dark)

  border:     '#4b5563',                     // --border (dark)
  borderSoft: 'rgba(75, 85, 99, 0.20)',

  textPrimary:   '#d1d5db',                  // --foreground (dark)
  textSecondary: 'rgba(209, 213, 219, 0.65)',
  textMuted:     '#6b7280',                  // --muted-foreground
  textInverse:   '#0f172a',                  // --primary-foreground (dark)

  primary:   '#34d399',   // --primary (dark)  emerald-400
  secondary: '#2dd4bf',   // --chart-2 (dark)  teal-400
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:      DEFAULT_COLORS.background,
  backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
  surface:         DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:      '#131e2e',
  surfaceTint:       '#1a2844',
  surfaceMutedDeep:  '#0a1120',
  surfaceTintDark:   '#1e293b',
  backgroundDeep:    '#080e1a',

  // ── BORDERS ──────────────────────────────────────────────────
  border:       DEFAULT_COLORS.border,
  borderSoft:   DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(75, 85, 99, 0.28)',
  borderStrong: 'rgba(52, 211, 153, 0.50)',    // emerald-400
  borderAccent: 'rgba(45, 212, 191, 0.32)',    // teal-400

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:   DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted:     DEFAULT_COLORS.textMuted,
  textInverse:   DEFAULT_COLORS.textInverse,
  textAccent:    DEFAULT_COLORS.primary,
  textDim:       '#4b5563',
  textDisabled:  '#374151',
  textLighter:   '#e5e7eb',
  textOffWhite:  '#f3f4f6',
  textTertiary:  '#9ca3af',

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:  DEFAULT_COLORS.primary,        // #34d399
  primaryTo:    '#22c55e',
  primary:      DEFAULT_COLORS.primary,
  accent:       DEFAULT_COLORS.secondary,      // teal-400
  primaryMuted: '#6ee7b7',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger:       '#ef4444',   // --destructive
  dangerDark:   '#dc2626',
  dangerHover:  '#f87171',
  dangerSoft:   '#fca5a5',
  dangerLight:  '#fecaca',
  dangerDark2:  '#b91c1c',
  dangerDarker: '#991b1b',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success:      '#34d399',
  successSoft:  '#6ee7b7',
  successGreen: '#22c55e',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning:       '#f59e0b',
  warningLight:  '#fbbf24',
  warningDark:   '#d97706',
  warningSoft:   '#fde68a',
  warningOrange: '#f97316',

  // ── STATUS — INFO ────────────────────────────────────────────
  info:     '#2dd4bf',
  infoSoft: '#5eead4',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral:     '#6b7280',
  errorcolor:  '#ef4444',
  sucesscolor: '#22c55e',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom: '#0f172a',
  loginBgTo:   '#1e293b',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple:     '#a78bfa',
  accentCyan:       '#22d3ee',
  accentIndigo:     '#818cf8',
  accentPink:       '#f472b6',
  accentBlue:       '#38bdf8',
  accentTeal:       '#2dd4bf',
  accentViolet:     '#8b5cf6',
  accentOrange:     '#fb923c',
  accentYellow:     '#fbbf24',
  accentBlueDark:   '#1e40af',
  accentIndigoDark: '#4338ca',
  accentVioletDark: '#7c3aed',
  accentPurple600:  '#9333ea',

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: '#c2410c',
  orangeDark800: '#9a3412',
  orangeDark900: '#7c2d12',
  amberDark900:  '#78350f',
  orangeDark950: '#451a03',
  stoneDark800:  '#1e293b',
  stoneDark900:  '#0f172a',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground:   DEFAULT_COLORS.surface,
  hoverBorder:       DEFAULT_COLORS.primary,
  hoverShadow:       'rgba(52, 211, 153, 0.30)',
  hoverShadowSpread: '0 0 18px',
  hoverText:         '#6ee7b7',
  activeBackground:  DEFAULT_COLORS.surfaceElevated,
  activeBorder:      DEFAULT_COLORS.primary,
  activeShadow:      'rgba(52, 211, 153, 0.40)',
  activeText:        DEFAULT_COLORS.primary,
  buttonBackground:  DEFAULT_COLORS.background,
  buttonIconColor:   DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-emerald-400 to-green-500',
  primaryShadow:   'shadow-emerald-400/40',
};

// ===== FONT STYLES =====
const fontSmoothing = {
  fontFamily:
    '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
  metric:       { fontSize: '24px', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.2',  ...fontSmoothing },
  metricMedium: { fontSize: '30px', fontWeight: '700', lineHeight: '1.1',  fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metric2xl:    { fontSize: '32px', fontWeight: '700', lineHeight: '1',    fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metricLarge:  { fontSize: '48px', fontWeight: '700', lineHeight: '1.1',  fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metricXL:     { fontSize: '60px', fontWeight: '700', lineHeight: '1.1',  fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  code: {
    fontSize: '13px',
    fontFamily: '"IBM Plex Mono", "Fira Code", "Consolas", monospace',
    lineHeight: '1.6',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
};

// ===== CHART COLORS =====
// 5-step emerald/teal progression from CSS --chart-1 … --chart-5
export const chartColors = {
  // Dark: chart-1…5 from .dark vars
  primary: ['#34d399', '#2dd4bf', '#22c55e', '#10b981', '#059669'],
  severity: {
    critical: '#ef4444',   // --destructive
    high:     '#f97316',
    medium:   '#f59e0b',
    low:      '#2dd4bf',   // teal — visually distinct from emerald primary
    info:     '#38bdf8',
  },
  series: [
    '#34d399',   // chart-1 dark  — emerald-400  (primary)
    '#2dd4bf',   // chart-2 dark  — teal-400
    '#22c55e',   // chart-3 dark  — green-500
    '#10b981',   // chart-4 dark  — emerald-500
    '#059669',   // chart-5 dark  — emerald-600
    '#6ee7b7',   // extended      — emerald-300
    '#f59e0b',   // warm contrast — amber
    '#38bdf8',   // cool contrast — sky-400
    '#a78bfa',   // purple
    '#f472b6',   // pink
  ],
  categorical: [
    '#34d399', '#2dd4bf',
    '#22c55e', '#10b981',
    '#059669', '#6ee7b7',
    '#f59e0b', '#38bdf8',
    '#a78bfa', '#f472b6',
  ],
  gradients: {
    emerald: ['#34d399', '#22c55e'],
    teal:    ['#2dd4bf', '#0d9488'],
    slate:   ['#1e293b', '#0f172a'],
    amber:   ['#f59e0b', '#fbbf24'],
  },
  ui: {
    grid:          'rgba(75, 85, 99, 0.12)',
    axis:          'rgba(209, 213, 219, 0.32)',
    label:         'rgba(209, 213, 219, 0.70)',
    tooltip:       'rgba(15, 23, 42, 0.97)',
    tooltipBorder: 'rgba(52, 211, 153, 0.50)',
    border:        'rgba(75, 85, 99, 0.20)',
  },
  edges: {
    critical: '#ef4444',
    high:     '#f97316',
    medium:   '#f59e0b',
    low:      '#2dd4bf',
    default:  '#34d399',
  },
  themes: {
    // Dark from .dark CSS vars
    dark: {
      background:      '#0f172a',
      backgroundSoft:  '#1e293b',
      surface:         '#1e293b',
      surfaceElevated: '#2d3748',
      border:          '#4b5563',
      borderSoft:      'rgba(75, 85, 99, 0.20)',
      borderSubtle:    'rgba(75, 85, 99, 0.28)',
      borderStrong:    'rgba(52, 211, 153, 0.50)',
      borderAccent:    'rgba(45, 212, 191, 0.32)',
      textPrimary:     '#d1d5db',
      textSecondary:   'rgba(209, 213, 219, 0.65)',
      textMuted:       '#6b7280',
      textInverse:     '#0f172a',
      textAccent:      '#34d399',
      primaryFrom:     '#34d399',
      primaryTo:       '#22c55e',
      primary:         '#34d399',
      accent:          '#2dd4bf',
      nodeBg:          '#1e293b',
      nodeStroke:      '#34d399',
      edge:            '#d1d5db',
      edgeGlow:        '#34d399',
      hubRing1:        '#34d399',
      hubRing2:        '#2dd4bf',
      hubCore:         '#0f172a',
      hubBorder:       '#34d399',
      statBorder:      '#2dd4bf',
    },
    // Light from :root CSS vars
    light: {
      background:      '#f0f8ff',   // --background
      backgroundSoft:  '#e0f2fe',   // --sidebar / --secondary
      surface:         '#ffffff',   // --card
      surfaceElevated: '#f3f4f6',   // --muted
      border:          '#e5e7eb',   // --border
      borderSoft:      'rgba(229, 231, 235, 0.60)',
      borderSubtle:    'rgba(229, 231, 235, 0.80)',
      borderStrong:    'rgba(34, 197, 94, 0.50)',
      borderAccent:    'rgba(209, 250, 229, 0.80)',   // --accent
      textPrimary:     '#374151',   // --foreground
      textSecondary:   'rgba(55, 65, 81, 0.70)',
      textMuted:       '#6b7280',   // --muted-foreground
      textInverse:     '#ffffff',   // --primary-foreground
      textAccent:      '#059669',
      primary:         '#22c55e',   // --primary (light)
      accent:          '#e0f2fe',   // --secondary
      nodeBg:          '#f1f5f9',
      nodeStroke:      '#22c55e',
      edge:            '#e5e7eb',
      edgeGlow:        'rgba(34, 197, 94, 0.40)',
      hubRing1:        '#22c55e',
      hubRing2:        '#10b981',
      hubCore:         '#ffffff',
      hubBorder:       '#22c55e',
      statBorder:      '#10b981',
    },
  },
  networkSankey: {
    hubGradientFrom:   '#1e293b',
    hubGradientTo:     '#0f172a',
    panelGradientFrom: '#2d3748',
    panelGradientTo:   '#1e293b',
    input:      '#34d399',
    inputGlow:  '#22c55e',
    output:     '#2dd4bf',
    outputGlow: '#0d9488',
    cyan:       '#22d3ee',
    textInput:  '#a7f3d0',
    textPanel:  '#d1d5db',
    textOutput: '#99f6e4',
  },
  default: '#34d399',
};

export const panelSummaryColors = {
  primary: '#34d399',   // emerald-400 — headline metric
  info:    '#2dd4bf',   // teal-400
  warning: '#f59e0b',   // amber
  success: '#22c55e',   // green-500
  overlay: '#0f172a',
};

export const sidebarClasses = {
  primaryGradient: 'from-emerald-400 to-green-500',
  primaryShadow:   'shadow-emerald-400/40',
};

export { DEFAULT_COLORS };
export default sidebarColors;
