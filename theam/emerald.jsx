// ============================================================
// emerald.jsx — EMERALD Theme (Dark / Balanced)
// ------------------------------------------------------------
// A sophisticated dark theme where emerald is the *brand accent*,
// not the overall wash. The chrome is neutral slate; green appears
// only in brand moments (primary buttons, highlights, hover glow).
//   • Slate-Black Canvas  — neutral, professional, not green-tinted
//   • Pure Slate Text     — no colour cast; reads cleanly
//   • Emerald Primary     — used sparingly as the brand moment
//   • Amber Gold Accent   — warm counterpoint for variety
//   • Diverse chart series — avoid mono-green dashboards
// ============================================================

const DEFAULT_COLORS = {
  // Core canvas — neutral slate-black (NO green undertone)
  background: '#0a0f16',          // Slate 950-ish, neutral
  backgroundSoft: '#111826',      // Panels — cool neutral
  surface: '#1a2332',             // Cards
  surfaceElevated: '#22304a',     // Hover

  // Borders — neutral slate
  border: '#273449',
  borderSoft: 'rgba(148, 163, 184, 0.10)',   // Slate tint, not green

  // Typography — pure slate-white (NO mint cast)
  textPrimary: '#f1f5f9',         // Slate 100 — clean white
  textSecondary: 'rgba(241, 245, 249, 0.65)',
  textMuted: 'rgba(241, 245, 249, 0.42)',
  textInverse: '#0a0f16',

  // Brand identity — Emerald (primary) + Amber (secondary)
  primary: '#10b981',             // Emerald 500 — brand moment
  secondary: '#f59e0b',           // Amber 500 — warm counterpoint
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#0d141e',
  surfaceTint: '#141d2b',
  surfaceMutedDeep: '#070b11',
  surfaceTintDark: '#111826',
  backgroundDeep: '#05080d',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(148, 163, 184, 0.14)',    // Neutral
  borderStrong: 'rgba(16, 185, 129, 0.45)',     // Emerald — only when emphasized
  borderAccent: 'rgba(245, 158, 11, 0.30)',     // Amber accent

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: DEFAULT_COLORS.primary,            // Emerald for accent text only
  textDim: '#273449',
  textDisabled: '#1a2332',
  textLighter: '#cbd5e1',                        // Slate, not mint
  textOffWhite: '#f1f5f9',
  textTertiary: '#94a3b8',                       // Slate, not green

  // ── PRIMARY BRAND ────────────────────────────────────────────
  // Gradient: Emerald → Jade (used sparingly — brand moments only)
  primaryFrom: DEFAULT_COLORS.primary,           // #10b981
  primaryTo: '#34d399',
  primary: DEFAULT_COLORS.primary,
  accent: DEFAULT_COLORS.secondary,              // Amber
  primaryMuted: '#6ee7b7',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger: '#ef4444',
  dangerDark: '#dc2626',
  dangerHover: '#f87171',
  dangerSoft: '#fca5a5',
  dangerLight: '#fecaca',
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
  warningOrange: '#f97316',

  // ── STATUS — INFO ────────────────────────────────────────────
  info: '#38bdf8',                               // Sky blue — neutral cool
  infoSoft: '#7dd3fc',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral: '#64748b',
  errorcolor: '#ef4444',
  sucesscolor: '#22c55e',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  // Slate → deep slate — neutral entrance with subtle emerald hint
  loginBgFrom: '#05080d',
  loginBgTo: '#1a2332',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple: '#a78bfa',
  accentCyan: '#22d3ee',
  accentIndigo: '#818cf8',
  accentPink: '#f472b6',
  accentBlue: '#38bdf8',
  accentTeal: '#2dd4bf',
  accentViolet: '#8b5cf6',
  accentOrange: '#fb923c',
  accentYellow: '#fbbf24',
  accentBlueDark: '#1e40af',
  accentIndigoDark: '#4338ca',
  accentVioletDark: '#7c3aed',
  accentPurple600: '#9333ea',

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: '#c2410c',
  orangeDark800: '#9a3412',
  orangeDark900: '#7c2d12',
  amberDark900: '#78350f',
  orangeDark950: '#451a03',
  stoneDark800: '#111826',
  stoneDark900: '#0a0f16',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground: DEFAULT_COLORS.surface,
  hoverBorder: DEFAULT_COLORS.primary,
  hoverShadow: 'rgba(16, 185, 129, 0.35)',       // Subtler glow
  hoverShadowSpread: '0 0 18px',
  hoverText: '#34d399',
  activeBackground: DEFAULT_COLORS.surfaceElevated,
  activeBorder: DEFAULT_COLORS.primary,
  activeShadow: 'rgba(16, 185, 129, 0.35)',
  activeText: DEFAULT_COLORS.primary,
  buttonBackground: DEFAULT_COLORS.background,
  buttonIconColor: DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-emerald-500 to-emerald-400',
  primaryShadow: 'shadow-emerald-500/40',
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
// Diverse palette — emerald appears but does NOT dominate every chart.
export const chartColors = {
  primary: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'],
  severity: {
    critical: '#ef4444',   // Red — unambiguous critical
    high: '#f97316',       // Orange — high
    medium: '#f59e0b',     // Amber — medium
    low: '#38bdf8',        // Sky blue — low (cool neutral, not green)
    info: '#38bdf8',
  },
  series: [
    '#10b981',   // Emerald (brand — appears first)
    '#38bdf8',   // Sky blue
    '#f59e0b',   // Amber
    '#a78bfa',   // Violet
    '#f472b6',   // Pink
    '#22d3ee',   // Cyan
    '#fb923c',   // Orange
    '#818cf8',   // Indigo
    '#2dd4bf',   // Teal
    '#facc15',   // Yellow
  ],
  categorical: [
    '#10b981',
    '#38bdf8',
    '#f59e0b',
    '#a78bfa',
    '#f472b6',
    '#22d3ee',
    '#fb923c',
    '#818cf8',
    '#2dd4bf',
    '#facc15',
  ],
  gradients: {
    emerald: ['#10b981', '#34d399'],          // Brand primary
    slate: ['#1a2332', '#0a0f16'],            // Canvas
    amber: ['#f59e0b', '#fbbf24'],            // Accent gold
    sky: ['#38bdf8', '#0ea5e9'],              // Info blue
  },
  ui: {
    grid: 'rgba(148, 163, 184, 0.08)',        // Neutral grid
    axis: 'rgba(241, 245, 249, 0.30)',
    label: 'rgba(241, 245, 249, 0.65)',
    tooltip: 'rgba(10, 15, 22, 0.97)',
    tooltipBorder: 'rgba(16, 185, 129, 0.50)',
    border: 'rgba(148, 163, 184, 0.18)',      // Neutral border
  },
  edges: {
    critical: '#ef4444',
    high: '#f97316',
    medium: '#f59e0b',
    low: '#38bdf8',
    default: '#10b981',
  },
  themes: {
    dark: {
      background: DEFAULT_COLORS.background,
      backgroundSoft: DEFAULT_COLORS.backgroundSoft,
      surface: DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border: DEFAULT_COLORS.border,
      borderSoft: DEFAULT_COLORS.borderSoft,
      borderSubtle: 'rgba(148, 163, 184, 0.14)',
      borderStrong: 'rgba(16, 185, 129, 0.45)',
      borderAccent: 'rgba(245, 158, 11, 0.30)',
      textPrimary: DEFAULT_COLORS.textPrimary,
      textSecondary: DEFAULT_COLORS.textSecondary,
      textMuted: DEFAULT_COLORS.textMuted,
      textInverse: DEFAULT_COLORS.textInverse,
      textAccent: DEFAULT_COLORS.primary,
      primaryFrom: DEFAULT_COLORS.primary,
      primaryTo: '#34d399',
      primary: DEFAULT_COLORS.primary,
      accent: DEFAULT_COLORS.secondary,
      nodeBg: '#111826',
      nodeStroke: DEFAULT_COLORS.primary,
      edge: '#cbd5e1',
      edgeGlow: DEFAULT_COLORS.primary,
      hubRing1: DEFAULT_COLORS.primary,
      hubRing2: DEFAULT_COLORS.secondary,
      hubCore: '#05080d',
      hubBorder: DEFAULT_COLORS.primary,
      statBorder: DEFAULT_COLORS.secondary,
    },
    light: {
      background: '#f8fafc',
      backgroundSoft: '#f1f5f9',
      surface: '#ffffff',
      surfaceElevated: '#ffffff',
      border: '#cbd5e1',
      borderSoft: 'rgba(15, 23, 42, 0.08)',
      borderSubtle: 'rgba(15, 23, 42, 0.12)',
      borderStrong: 'rgba(5, 150, 105, 0.45)',
      borderAccent: 'rgba(217, 119, 6, 0.30)',
      textPrimary: '#0f172a',
      textSecondary: 'rgba(15, 23, 42, 0.70)',
      textMuted: 'rgba(15, 23, 42, 0.42)',
      textInverse: '#f8fafc',
      textAccent: '#059669',
      primary: '#059669',
      accent: '#d97706',
      nodeBg: '#f1f5f9',
      nodeStroke: '#059669',
      edge: '#cbd5e1',
      edgeGlow: 'rgba(5, 150, 105, 0.40)',
      hubRing1: '#10b981',
      hubRing2: '#d97706',
      hubCore: '#ffffff',
      hubBorder: '#059669',
      statBorder: '#d97706',
    },
    cyber: {
      background: '#05080d',
      backgroundSoft: '#0a0f16',
      surface: '#111826',
      surfaceElevated: '#1a2332',
      border: '#1e2a3f',
      borderSoft: 'rgba(16, 185, 129, 0.08)',
      borderSubtle: 'rgba(16, 185, 129, 0.14)',
      borderStrong: 'rgba(16, 185, 129, 0.55)',
      borderAccent: 'rgba(245, 158, 11, 0.35)',
      textPrimary: '#f1f5f9',
      textSecondary: 'rgba(241, 245, 249, 0.60)',
      textMuted: 'rgba(241, 245, 249, 0.34)',
      textInverse: '#05080d',
      textAccent: '#34d399',
      primary: '#34d399',
      accent: '#f59e0b',
      nodeBg: '#0a0f16',
      nodeStroke: '#34d399',
      edge: '#cbd5e1',
      edgeGlow: '#10b981',
      hubRing1: '#34d399',
      hubRing2: '#f59e0b',
      hubCore: '#05080d',
      hubBorder: '#10b981',
      statBorder: '#f59e0b',
    },
  },
  networkSankey: {
    hubGradientFrom: '#111826',
    hubGradientTo: '#0a0f16',
    panelGradientFrom: '#1a2332',
    panelGradientTo: '#111826',
    input: '#38bdf8',
    inputGlow: '#0ea5e9',
    output: '#10b981',
    outputGlow: '#059669',
    cyan: '#22d3ee',
    textInput: '#bae6fd',
    textPanel: '#f1f5f9',
    textOutput: '#a7f3d0',
  },
  default: '#10b981',
};

export const panelSummaryColors = {
  primary: '#10b981',      // Emerald — headline metric
  info: '#38bdf8',         // Sky — informational
  warning: '#f59e0b',      // Amber — caution
  success: '#22c55e',      // Fresh green — success (differentiated)
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-emerald-500 to-emerald-400',
  primaryShadow: 'shadow-emerald-500/40',
};

export { DEFAULT_COLORS };
export default sidebarColors;
