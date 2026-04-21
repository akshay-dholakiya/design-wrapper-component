// ============================================================
// sentinel.jsx — SENTINEL Theme
// ------------------------------------------------------------
// A command-center aesthetic for SOC / incident-response work.
//   • Graphite Base   — focused, low-fatigue work surface
//   • Crimson Primary — alertness, decisive action, incident focus
//   • Steel Accents   — precision, neutrality, data-first
//   • Amber Warning   — retained for severity clarity
//   • Cyan Info       — signal over noise for low-priority cues
// A strong counterpart to the EAGLEYE theme: where EagleEye is
// authoritative navy + gold, Sentinel is alert graphite + crimson.
// ============================================================

const DEFAULT_COLORS = {
  // Core canvas — deep graphite with a hint of warm undertone
  background: '#0b0d14',          // Graphite black
  backgroundSoft: '#14171f',      // Raised surfaces
  surface: '#1c212b',             // Panels / cards
  surfaceElevated: '#252b37',     // Hover / elevated

  // Borders — subtle steel tone
  border: '#2e3545',
  borderSoft: 'rgba(148, 163, 184, 0.08)',

  // Typography
  textPrimary: '#f1f5f9',         // Ice white
  textSecondary: 'rgba(241, 245, 249, 0.62)',
  textMuted: 'rgba(241, 245, 249, 0.34)',
  textInverse: '#0b0d14',

  // Brand identity — crimson (primary) + steel blue (secondary)
  primary: '#dc2626',             // Crimson red
  secondary: '#94a3b8',           // Steel
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#10131b',
  surfaceTint: '#181d27',
  surfaceMutedDeep: '#0a0c11',
  surfaceTintDark: '#14171f',
  backgroundDeep: '#05070b',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(148, 163, 184, 0.10)',
  borderStrong: 'rgba(220, 38, 38, 0.45)',     // Crimson emphasis
  borderAccent: 'rgba(220, 38, 38, 0.22)',

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: DEFAULT_COLORS.primary,
  textDim: '#2e3545',
  textDisabled: '#1f2532',
  textLighter: '#cbd5e1',
  textOffWhite: '#f1f5f9',
  textTertiary: '#94a3b8',

  // ── PRIMARY BRAND ────────────────────────────────────────────
  // Gradient: Crimson → Rose (commanding, incident-forward)
  primaryFrom: DEFAULT_COLORS.primary,         // #dc2626
  primaryTo: '#f87171',                        // Rose — softer endpoint
  primary: DEFAULT_COLORS.primary,
  accent: DEFAULT_COLORS.secondary,            // Steel
  primaryMuted: '#fca5a5',

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
  warningOrange: '#ea580c',

  // ── STATUS — INFO ────────────────────────────────────────────
  info: '#22d3ee',                             // Cyan — informational
  infoSoft: '#67e8f9',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral: '#64748b',
  errorcolor: '#ef4444',
  sucesscolor: '#22c55e',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  // Graphite → deeper shade (no crimson wash — keeps login calm)
  loginBgFrom: '#05070b',
  loginBgTo: '#1c212b',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple: '#a78bfa',
  accentCyan: '#22d3ee',
  accentIndigo: '#6366f1',
  accentPink: '#ec4899',
  accentBlue: '#38bdf8',
  accentTeal: '#14b8a6',
  accentViolet: '#8b5cf6',
  accentOrange: '#f97316',
  accentYellow: '#f59e0b',
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
  stoneDark800: '#14171f',
  stoneDark900: '#0b0d14',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground: DEFAULT_COLORS.surface,
  hoverBorder: DEFAULT_COLORS.primary,
  hoverShadow: 'rgba(220, 38, 38, 0.45)',      // Crimson glow
  hoverShadowSpread: '0 0 20px',
  hoverText: '#f87171',
  activeBackground: DEFAULT_COLORS.surfaceElevated,
  activeBorder: DEFAULT_COLORS.primary,
  activeShadow: 'rgba(220, 38, 38, 0.50)',
  activeText: DEFAULT_COLORS.primary,
  buttonBackground: DEFAULT_COLORS.background,
  buttonIconColor: DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-red-600 to-rose-400',
  primaryShadow: 'shadow-red-600/50',
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
// Series start warm (crimson → rose → amber), transition through steel
// into cyan/teal cool tones. Always legible on graphite canvas.
export const chartColors = {
  primary: ['#dc2626', '#f87171', '#fca5a5', '#fecaca', '#fee2e2'],
  severity: {
    critical: '#dc2626',   // Crimson (brand primary)
    high: '#f97316',
    medium: '#f59e0b',
    low: '#22d3ee',        // Cyan
    info: '#22d3ee',
  },
  series: [
    '#dc2626',   // Crimson (primary brand)
    '#22d3ee',   // Cyan (cool counter-tone)
    '#f87171',   // Rose
    '#94a3b8',   // Steel
    '#f59e0b',   // Amber
    '#8b5cf6',   // Violet
    '#10b981',   // Emerald
    '#fb923c',   // Warm orange
    '#a78bfa',   // Lavender
    '#14b8a6',   // Teal
  ],
  categorical: [
    '#dc2626',
    '#f87171',
    '#f97316',
    '#f59e0b',
    '#22d3ee',
    '#38bdf8',
    '#8b5cf6',
    '#a78bfa',
    '#10b981',
    '#94a3b8',
  ],
  gradients: {
    crimson: ['#dc2626', '#f87171'],
    ember: ['#dc2626', '#f59e0b'],
    steel: ['#475569', '#94a3b8'],
    signal: ['#22d3ee', '#38bdf8'],
  },
  ui: {
    grid: 'rgba(148, 163, 184, 0.08)',
    axis: 'rgba(241, 245, 249, 0.28)',
    label: 'rgba(241, 245, 249, 0.60)',
    tooltip: 'rgba(11, 13, 20, 0.97)',
    tooltipBorder: 'rgba(220, 38, 38, 0.55)',
    border: 'rgba(148, 163, 184, 0.18)',
  },
  edges: {
    critical: '#dc2626',
    high: '#f97316',
    medium: '#f59e0b',
    low: '#22d3ee',
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
      borderSubtle: 'rgba(148, 163, 184, 0.10)',
      borderStrong: 'rgba(220, 38, 38, 0.45)',
      borderAccent: 'rgba(220, 38, 38, 0.22)',
      textPrimary: DEFAULT_COLORS.textPrimary,
      textSecondary: DEFAULT_COLORS.textSecondary,
      textMuted: DEFAULT_COLORS.textMuted,
      textInverse: DEFAULT_COLORS.textInverse,
      textAccent: DEFAULT_COLORS.primary,
      primaryFrom: DEFAULT_COLORS.primary,
      primaryTo: '#f87171',
      primary: DEFAULT_COLORS.primary,
      accent: DEFAULT_COLORS.secondary,
      nodeBg: '#14171f',
      nodeStroke: DEFAULT_COLORS.primary,
      edge: '#cbd5e1',
      edgeGlow: DEFAULT_COLORS.primary,
      hubRing1: DEFAULT_COLORS.primary,
      hubRing2: '#22d3ee',
      hubCore: '#07090f',
      hubBorder: DEFAULT_COLORS.primary,
      statBorder: '#22d3ee',
    },
    light: {
      background: '#f8fafc',
      backgroundSoft: '#f1f5f9',
      surface: '#e2e8f0',
      surfaceElevated: '#ffffff',
      border: '#cbd5e1',
      borderSoft: 'rgba(15, 23, 42, 0.08)',
      borderSubtle: 'rgba(15, 23, 42, 0.10)',
      borderStrong: 'rgba(220, 38, 38, 0.45)',
      borderAccent: 'rgba(15, 23, 42, 0.18)',
      textPrimary: '#0f172a',
      textSecondary: '#334155',
      textMuted: '#64748b',
      textInverse: '#f8fafc',
      textAccent: '#b91c1c',
      primary: '#b91c1c',
      accent: '#475569',
      nodeBg: '#f1f5f9',
      nodeStroke: '#b91c1c',
      edge: '#cbd5e1',
      edgeGlow: 'rgba(220, 38, 38, 0.40)',
      hubRing1: '#dc2626',
      hubRing2: '#475569',
      hubCore: '#ffffff',
      hubBorder: '#b91c1c',
      statBorder: '#475569',
    },
    cyber: {
      background: '#030508',
      backgroundSoft: '#07090f',
      surface: '#10131b',
      surfaceElevated: '#181d27',
      border: '#1f2532',
      borderSoft: 'rgba(220, 38, 38, 0.06)',
      borderSubtle: 'rgba(220, 38, 38, 0.12)',
      borderStrong: 'rgba(220, 38, 38, 0.55)',
      borderAccent: 'rgba(220, 38, 38, 0.25)',
      textPrimary: '#fef2f2',
      textSecondary: 'rgba(254, 242, 242, 0.60)',
      textMuted: 'rgba(254, 242, 242, 0.32)',
      textInverse: '#030508',
      textAccent: '#f87171',
      primary: '#ef4444',
      accent: '#22d3ee',
      nodeBg: '#060810',
      nodeStroke: '#ef4444',
      edge: '#fca5a5',
      edgeGlow: '#dc2626',
      hubRing1: '#ef4444',
      hubRing2: '#22d3ee',
      hubCore: '#020406',
      hubBorder: '#dc2626',
      statBorder: '#22d3ee',
    },
  },
  networkSankey: {
    hubGradientFrom: '#14171f',
    hubGradientTo: '#0b0d14',
    panelGradientFrom: '#181d27',
    panelGradientTo: '#10131b',
    input: '#22d3ee',
    inputGlow: '#38bdf8',
    output: '#f87171',
    outputGlow: '#dc2626',
    cyan: '#22d3ee',
    textInput: '#cffafe',
    textPanel: '#f1f5f9',
    textOutput: '#fee2e2',
  },
  default: '#dc2626',
};

export const panelSummaryColors = {
  primary: '#dc2626',      // Crimson — headline metric
  info: '#22d3ee',         // Cyan — informational
  warning: '#f59e0b',      // Amber — caution
  success: '#10b981',      // Emerald — success
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-red-600 to-rose-400',
  primaryShadow: 'shadow-red-600/50',
};

export { DEFAULT_COLORS };
export default sidebarColors;
