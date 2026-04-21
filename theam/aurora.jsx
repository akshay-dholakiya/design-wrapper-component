// ============================================================
// aurora.jsx — AURORA Theme (Light Mode)
// ------------------------------------------------------------
// A premium light-mode theme with real chromatic character.
//   • Lavender-tinted canvas    — distinct from pure white
//   • Pure white cards          — visibly floating against canvas
//   • Strong indigo/rose accent — unmistakably branded
//   • Layered soft shadows      — depth without heaviness
// Every surface is *visibly* different. No white-on-white flat look.
// ============================================================

const DEFAULT_COLORS = {
  // Core canvas — soft lavender wash (NOT near-white) for real contrast
  background: '#e8ecf7',          // Lavender-tinted canvas
  backgroundSoft: '#ffffff',      // Pure white cards — clearly lifted
  surface: '#ffffff',             // Cards / widgets
  surfaceElevated: '#ffffff',     // Hover / modals

  // Borders — visible indigo tint so cards have defined edges
  border: '#c7d2fe',              // Indigo-200 — clearly visible
  borderSoft: 'rgba(99, 102, 241, 0.18)',

  // Typography — deep indigo-navy for strong contrast on lavender/white
  textPrimary: '#1e1b4b',         // Very dark indigo
  textSecondary: 'rgba(30, 27, 75, 0.70)',
  textMuted: 'rgba(30, 27, 75, 0.48)',
  textInverse: '#ffffff',

  // Brand identity — Indigo (primary) + Rose (secondary)
  primary: '#6366f1',             // Indigo 500
  secondary: '#ec4899',           // Rose 500
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#eef2ff',        // Indigo wash panel
  surfaceTint: '#fdf4ff',         // Rose wash panel
  surfaceMutedDeep: '#e0e7ff',
  surfaceTintDark: '#dbeafe',
  backgroundDeep: '#dfe4f3',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(99, 102, 241, 0.22)',
  borderStrong: 'rgba(99, 102, 241, 0.55)',
  borderAccent: 'rgba(236, 72, 153, 0.35)',

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: '#4f46e5',          // Indigo 600 — stronger for light bg
  textDim: '#64748b',
  textDisabled: '#cbd5e1',
  textLighter: '#334155',
  textOffWhite: '#1e1b4b',
  textTertiary: '#7c3aed',        // Violet 600

  // ── PRIMARY BRAND ────────────────────────────────────────────
  // Gradient: Indigo → Violet (bold, saturated for light bg)
  primaryFrom: DEFAULT_COLORS.primary,
  primaryTo: '#8b5cf6',
  primary: DEFAULT_COLORS.primary,
  accent: DEFAULT_COLORS.secondary,
  primaryMuted: '#818cf8',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger: '#dc2626',
  dangerDark: '#b91c1c',
  dangerHover: '#ef4444',
  dangerSoft: '#fca5a5',
  dangerLight: '#fecaca',
  dangerDark2: '#991b1b',
  dangerDarker: '#7f1d1d',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success: '#059669',
  successSoft: '#34d399',
  successGreen: '#16a34a',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning: '#d97706',
  warningLight: '#f59e0b',
  warningDark: '#b45309',
  warningSoft: '#fed7aa',
  warningOrange: '#ea580c',

  // ── STATUS — INFO ────────────────────────────────────────────
  info: '#0284c7',                // Sky 600 — readable on light bg
  infoSoft: '#38bdf8',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral: '#64748b',
  errorcolor: '#dc2626',
  sucesscolor: '#16a34a',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  // Lavender → rose — a "dawn sky" moment
  loginBgFrom: '#e0e7ff',
  loginBgTo: '#fbcfe8',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple: '#9333ea',
  accentCyan: '#0891b2',
  accentIndigo: '#4f46e5',
  accentPink: '#db2777',
  accentBlue: '#2563eb',
  accentTeal: '#0d9488',
  accentViolet: '#7c3aed',
  accentOrange: '#ea580c',
  accentYellow: '#ca8a04',
  accentBlueDark: '#1e40af',
  accentIndigoDark: '#3730a3',
  accentVioletDark: '#6d28d9',
  accentPurple600: '#7e22ce',

  // ── EXTENDED LIGHT SHADES ────────────────────────────────────
  orangeDark700: '#fdba74',
  orangeDark800: '#fb923c',
  orangeDark900: '#f97316',
  amberDark900: '#fbbf24',
  orangeDark950: '#fed7aa',
  stoneDark800: '#ffffff',
  stoneDark900: '#e8ecf7',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground: '#eef2ff',
  hoverBorder: DEFAULT_COLORS.primary,
  hoverShadow: 'rgba(99, 102, 241, 0.30)',
  hoverShadowSpread: '0 0 20px',
  hoverText: '#4f46e5',
  activeBackground: '#e0e7ff',
  activeBorder: DEFAULT_COLORS.primary,
  activeShadow: 'rgba(99, 102, 241, 0.40)',
  activeText: '#4338ca',
  buttonBackground: '#ffffff',
  buttonIconColor: DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-indigo-500 to-violet-500',
  primaryShadow: 'shadow-indigo-500/40',
};

// ===== FONT STYLES ===== (consistent across all themes)
const fontSmoothing = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
};

export const fontStyles = {
  smoothing: fontSmoothing,
  heading1: { fontSize: '32px', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em', ...fontSmoothing },
  heading2: { fontSize: '24px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.015em', ...fontSmoothing },
  heading3: { fontSize: '20px', fontWeight: '700', lineHeight: '1.3', letterSpacing: '-0.01em', ...fontSmoothing },
  heading4: { fontSize: '18px', fontWeight: '700', lineHeight: '1.4', letterSpacing: '-0.005em', ...fontSmoothing },
  heading5: { fontSize: '16px', fontWeight: '700', lineHeight: '1.4', ...fontSmoothing },
  heading6: { fontSize: '14px', fontWeight: '700', lineHeight: '1.5', letterSpacing: '0.01em', ...fontSmoothing },
  body: { fontSize: '14px', lineHeight: '1.6', ...fontSmoothing },
  bodyLarge: { fontSize: '16px', lineHeight: '1.6', ...fontSmoothing },
  bodySmall: { fontSize: '12px', lineHeight: '1.5', ...fontSmoothing },
  caption: { fontSize: '12px', lineHeight: '1.4', ...fontSmoothing },
  label: { fontSize: '13px', fontWeight: '500', letterSpacing: '0.01em', ...fontSmoothing },
  button: { fontSize: '14px', fontWeight: '600', letterSpacing: '0.02em', ...fontSmoothing },
  metric: { fontSize: '24px', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.2', ...fontSmoothing },
  metricMedium: { fontSize: '30px', fontWeight: '700', lineHeight: '1.1', fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metric2xl: { fontSize: '32px', fontWeight: '700', lineHeight: '1', fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metricLarge: { fontSize: '48px', fontWeight: '700', lineHeight: '1.1', fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  metricXL: { fontSize: '60px', fontWeight: '700', lineHeight: '1.1', fontVariantNumeric: 'tabular-nums', ...fontSmoothing },
  code: {
    fontSize: '13px',
    fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
    lineHeight: '1.6',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
};

// ===== CHART COLORS =====
// Deeper, more saturated palette — reads cleanly on white cards.
export const chartColors = {
  primary: ['#4f46e5', '#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd'],
  severity: {
    critical: '#dc2626',
    high: '#ea580c',
    medium: '#d97706',
    low: '#0284c7',
    info: '#0284c7',
  },
  series: [
    '#4f46e5',   // Indigo 600 (primary brand, deeper)
    '#db2777',   // Pink 600 (secondary brand, deeper)
    '#0891b2',   // Cyan 600
    '#7c3aed',   // Violet 600
    '#059669',   // Emerald 600
    '#d97706',   // Amber 600
    '#2563eb',   // Blue 600
    '#e11d48',   // Rose 600
    '#0d9488',   // Teal 600
    '#9333ea',   // Purple 600
  ],
  categorical: [
    '#4f46e5',
    '#db2777',
    '#0891b2',
    '#059669',
    '#d97706',
    '#7c3aed',
    '#e11d48',
    '#0d9488',
    '#2563eb',
    '#9333ea',
  ],
  gradients: {
    aurora: ['#6366f1', '#8b5cf6'],
    blossom: ['#ec4899', '#f472b6'],
    dawn: ['#a78bfa', '#f0abfc'],
    ocean: ['#0891b2', '#2563eb'],
  },
  ui: {
    grid: 'rgba(99, 102, 241, 0.12)',
    axis: 'rgba(30, 27, 75, 0.35)',
    label: 'rgba(30, 27, 75, 0.70)',
    tooltip: 'rgba(255, 255, 255, 0.98)',
    tooltipBorder: 'rgba(99, 102, 241, 0.55)',
    border: 'rgba(99, 102, 241, 0.22)',
  },
  edges: {
    critical: '#dc2626',
    high: '#ea580c',
    medium: '#d97706',
    low: '#0284c7',
    default: '#4f46e5',
  },
  themes: {
    dark: {
      background: '#1e1b4b',
      backgroundSoft: '#312e81',
      surface: '#3730a3',
      surfaceElevated: '#4338ca',
      border: '#4338ca',
      borderSoft: 'rgba(196, 181, 253, 0.10)',
      borderSubtle: 'rgba(196, 181, 253, 0.12)',
      borderStrong: 'rgba(196, 181, 253, 0.45)',
      borderAccent: 'rgba(196, 181, 253, 0.22)',
      textPrimary: '#f5f3ff',
      textSecondary: 'rgba(245, 243, 255, 0.62)',
      textMuted: 'rgba(245, 243, 255, 0.34)',
      textInverse: '#1e1b4b',
      textAccent: '#a5b4fc',
      primaryFrom: '#6366f1',
      primaryTo: '#8b5cf6',
      primary: '#6366f1',
      accent: '#ec4899',
      nodeBg: '#312e81',
      nodeStroke: '#a5b4fc',
      edge: '#ddd6fe',
      edgeGlow: '#6366f1',
      hubRing1: '#6366f1',
      hubRing2: '#ec4899',
      hubCore: '#1e1b4b',
      hubBorder: '#8b5cf6',
      statBorder: '#a5b4fc',
    },
    light: {
      background: DEFAULT_COLORS.background,
      backgroundSoft: DEFAULT_COLORS.backgroundSoft,
      surface: DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border: DEFAULT_COLORS.border,
      borderSoft: DEFAULT_COLORS.borderSoft,
      borderSubtle: 'rgba(99, 102, 241, 0.22)',
      borderStrong: 'rgba(99, 102, 241, 0.55)',
      borderAccent: 'rgba(236, 72, 153, 0.35)',
      textPrimary: DEFAULT_COLORS.textPrimary,
      textSecondary: DEFAULT_COLORS.textSecondary,
      textMuted: DEFAULT_COLORS.textMuted,
      textInverse: DEFAULT_COLORS.textInverse,
      textAccent: '#4f46e5',
      primary: DEFAULT_COLORS.primary,
      accent: DEFAULT_COLORS.secondary,
      nodeBg: '#ffffff',
      nodeStroke: DEFAULT_COLORS.primary,
      edge: '#c7d2fe',
      edgeGlow: 'rgba(99, 102, 241, 0.50)',
      hubRing1: DEFAULT_COLORS.primary,
      hubRing2: DEFAULT_COLORS.secondary,
      hubCore: '#ffffff',
      hubBorder: DEFAULT_COLORS.primary,
      statBorder: '#8b5cf6',
    },
    cyber: {
      background: '#f5f3ff',
      backgroundSoft: '#ede9fe',
      surface: '#ffffff',
      surfaceElevated: '#ffffff',
      border: '#c4b5fd',
      borderSoft: 'rgba(139, 92, 246, 0.18)',
      borderSubtle: 'rgba(139, 92, 246, 0.25)',
      borderStrong: 'rgba(139, 92, 246, 0.55)',
      borderAccent: 'rgba(236, 72, 153, 0.35)',
      textPrimary: '#1e1b4b',
      textSecondary: 'rgba(30, 27, 75, 0.68)',
      textMuted: 'rgba(30, 27, 75, 0.45)',
      textInverse: '#f5f3ff',
      textAccent: '#7c3aed',
      primary: '#7c3aed',
      accent: '#db2777',
      nodeBg: '#ede9fe',
      nodeStroke: '#7c3aed',
      edge: '#c4b5fd',
      edgeGlow: 'rgba(139, 92, 246, 0.45)',
      hubRing1: '#7c3aed',
      hubRing2: '#db2777',
      hubCore: '#ffffff',
      hubBorder: '#4f46e5',
      statBorder: '#8b5cf6',
    },
  },
  networkSankey: {
    hubGradientFrom: '#e0e7ff',
    hubGradientTo: '#c7d2fe',
    panelGradientFrom: '#ffffff',
    panelGradientTo: '#f5f3ff',
    input: '#4f46e5',
    inputGlow: '#6366f1',
    output: '#db2777',
    outputGlow: '#ec4899',
    cyan: '#0891b2',
    textInput: '#312e81',
    textPanel: '#1e1b4b',
    textOutput: '#831843',
  },
  default: '#4f46e5',
};

export const panelSummaryColors = {
  primary: '#4f46e5',
  info: '#0891b2',
  warning: '#d97706',
  success: '#059669',
  overlay: '#1e1b4b',
};

export const sidebarClasses = {
  primaryGradient: 'from-indigo-500 to-violet-500',
  primaryShadow: 'shadow-indigo-500/40',
};

// Identifies this as a light theme — consumers (e.g. AppInput) can
// read this to conditionally adjust form-control chrome.
export const isLight = true;

export { DEFAULT_COLORS };
export default sidebarColors;
