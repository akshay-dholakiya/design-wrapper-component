// ============================================================
// nebula.jsx — NEBULA Theme (Dark / Violet)
// ------------------------------------------------------------
// A cosmic dark theme built around violet with electric counters.
//   • Deep Violet-Black Canvas — inky cosmic backdrop
//   • Violet Primary           — rich, authoritative, premium
//   • Electric Cyan Accent     — cool counterpoint, "distant stars"
//   • Amber Warnings / Rose Danger — unambiguous severity
// Distinct from Pulse (magenta) by leaning further into violet/purple
// and keeping chrome calm rather than neon.
// ============================================================

const DEFAULT_COLORS = {
  // Core canvas — very dark violet-indigo
  background: '#0c0a1a',          // Deep space violet
  backgroundSoft: '#15122b',      // Panels
  surface: '#1e1a3d',             // Cards
  surfaceElevated: '#282350',     // Hover

  // Borders — soft violet tint for visible card edges
  border: '#342a5f',
  borderSoft: 'rgba(168, 85, 247, 0.10)',

  // Typography — violet-white (soft cosmic sheen, still readable)
  textPrimary: '#f5f3ff',
  textSecondary: 'rgba(245, 243, 255, 0.66)',
  textMuted: 'rgba(245, 243, 255, 0.40)',
  textInverse: '#0c0a1a',

  // Brand identity — Violet (primary) + Cyan (secondary)
  primary: '#a855f7',             // Violet 500
  secondary: '#22d3ee',           // Cyan 400 — cool counterpoint
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#100d23',
  surfaceTint: '#191535',
  surfaceMutedDeep: '#08061a',
  surfaceTintDark: '#15122b',
  backgroundDeep: '#06050f',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(168, 85, 247, 0.14)',
  borderStrong: 'rgba(168, 85, 247, 0.50)',   // Violet emphasis
  borderAccent: 'rgba(34, 211, 238, 0.30)',   // Cyan accent

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: DEFAULT_COLORS.primary,
  textDim: '#342a5f',
  textDisabled: '#232046',
  textLighter: '#ddd6fe',
  textOffWhite: '#f5f3ff',
  textTertiary: '#c084fc',                    // Light violet tertiary

  // ── PRIMARY BRAND ────────────────────────────────────────────
  // Gradient: Violet → Purple (deep cosmic)
  primaryFrom: DEFAULT_COLORS.primary,        // #a855f7
  primaryTo: '#c084fc',                       // Violet 400
  primary: DEFAULT_COLORS.primary,
  accent: DEFAULT_COLORS.secondary,           // Cyan
  primaryMuted: '#d8b4fe',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger: '#f43f5e',                          // Rose — reads cleanly on violet
  dangerDark: '#e11d48',
  dangerHover: '#fb7185',
  dangerSoft: '#fda4af',
  dangerLight: '#fecdd3',
  dangerDark2: '#be123c',
  dangerDarker: '#9f1239',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success: '#10b981',
  successSoft: '#34d399',
  successGreen: '#22c55e',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning: '#facc15',                         // Amber gold
  warningLight: '#fde047',
  warningDark: '#ca8a04',
  warningSoft: '#fef08a',
  warningOrange: '#f97316',

  // ── STATUS — INFO ────────────────────────────────────────────
  info: '#22d3ee',                            // Cyan (brand secondary)
  infoSoft: '#67e8f9',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral: '#6b6b85',
  errorcolor: '#f43f5e',
  sucesscolor: '#22c55e',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  // Violet wash → deeper violet — a cosmic entrance
  loginBgFrom: '#06050f',
  loginBgTo: '#1e1a3d',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple: '#c084fc',
  accentCyan: '#22d3ee',
  accentIndigo: '#818cf8',
  accentPink: '#f472b6',
  accentBlue: '#3b82f6',
  accentTeal: '#2dd4bf',
  accentViolet: '#a855f7',
  accentOrange: '#fb923c',
  accentYellow: '#facc15',
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
  stoneDark800: '#15122b',
  stoneDark900: '#0c0a1a',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground: DEFAULT_COLORS.surface,
  hoverBorder: DEFAULT_COLORS.primary,
  hoverShadow: 'rgba(168, 85, 247, 0.45)',    // Violet glow
  hoverShadowSpread: '0 0 22px',
  hoverText: '#c084fc',
  activeBackground: DEFAULT_COLORS.surfaceElevated,
  activeBorder: DEFAULT_COLORS.secondary,     // Cyan on active
  activeShadow: 'rgba(34, 211, 238, 0.45)',   // Cyan glow
  activeText: DEFAULT_COLORS.secondary,
  buttonBackground: DEFAULT_COLORS.background,
  buttonIconColor: DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-purple-500 to-violet-400',
  primaryShadow: 'shadow-purple-500/50',
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
// Violet-led diverse palette — series are distinguishable against
// a violet canvas without leaning mono-purple.
export const chartColors = {
  primary: ['#a855f7', '#c084fc', '#d8b4fe', '#e9d5ff', '#f3e8ff'],
  severity: {
    critical: '#f43f5e',   // Rose — strong against violet
    high: '#fb923c',       // Orange
    medium: '#facc15',     // Amber
    low: '#22d3ee',        // Cyan
    info: '#22d3ee',
  },
  series: [
    '#a855f7',   // Violet (primary brand)
    '#22d3ee',   // Cyan (secondary brand)
    '#f472b6',   // Pink
    '#facc15',   // Amber
    '#38bdf8',   // Sky
    '#10b981',   // Emerald
    '#fb923c',   // Orange
    '#818cf8',   // Indigo
    '#f43f5e',   // Rose
    '#2dd4bf',   // Teal
  ],
  categorical: [
    '#a855f7',
    '#22d3ee',
    '#f472b6',
    '#facc15',
    '#38bdf8',
    '#10b981',
    '#fb923c',
    '#818cf8',
    '#f43f5e',
    '#2dd4bf',
  ],
  gradients: {
    nebula: ['#a855f7', '#c084fc'],           // Brand primary
    cosmic: ['#6366f1', '#a855f7'],           // Indigo → violet
    stellar: ['#22d3ee', '#818cf8'],          // Cyan → indigo
    dusk: ['#f472b6', '#a855f7'],             // Pink → violet
  },
  ui: {
    grid: 'rgba(168, 85, 247, 0.08)',
    axis: 'rgba(245, 243, 255, 0.30)',
    label: 'rgba(245, 243, 255, 0.65)',
    tooltip: 'rgba(12, 10, 26, 0.97)',
    tooltipBorder: 'rgba(168, 85, 247, 0.55)',
    border: 'rgba(168, 85, 247, 0.18)',
  },
  edges: {
    critical: '#f43f5e',
    high: '#fb923c',
    medium: '#facc15',
    low: '#22d3ee',
    default: '#a855f7',
  },
  themes: {
    dark: {
      background: DEFAULT_COLORS.background,
      backgroundSoft: DEFAULT_COLORS.backgroundSoft,
      surface: DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border: DEFAULT_COLORS.border,
      borderSoft: DEFAULT_COLORS.borderSoft,
      borderSubtle: 'rgba(168, 85, 247, 0.14)',
      borderStrong: 'rgba(168, 85, 247, 0.50)',
      borderAccent: 'rgba(34, 211, 238, 0.30)',
      textPrimary: DEFAULT_COLORS.textPrimary,
      textSecondary: DEFAULT_COLORS.textSecondary,
      textMuted: DEFAULT_COLORS.textMuted,
      textInverse: DEFAULT_COLORS.textInverse,
      textAccent: DEFAULT_COLORS.primary,
      primaryFrom: DEFAULT_COLORS.primary,
      primaryTo: '#c084fc',
      primary: DEFAULT_COLORS.primary,
      accent: DEFAULT_COLORS.secondary,
      nodeBg: '#15122b',
      nodeStroke: DEFAULT_COLORS.primary,
      edge: '#ddd6fe',
      edgeGlow: DEFAULT_COLORS.primary,
      hubRing1: DEFAULT_COLORS.primary,
      hubRing2: DEFAULT_COLORS.secondary,
      hubCore: '#06050f',
      hubBorder: '#c084fc',
      statBorder: DEFAULT_COLORS.secondary,
    },
    light: {
      background: '#faf5ff',
      backgroundSoft: '#f3e8ff',
      surface: '#ffffff',
      surfaceElevated: '#ffffff',
      border: '#d8b4fe',
      borderSoft: 'rgba(147, 51, 234, 0.12)',
      borderSubtle: 'rgba(147, 51, 234, 0.18)',
      borderStrong: 'rgba(147, 51, 234, 0.50)',
      borderAccent: 'rgba(8, 145, 178, 0.35)',
      textPrimary: '#2e1065',
      textSecondary: 'rgba(46, 16, 101, 0.70)',
      textMuted: 'rgba(46, 16, 101, 0.42)',
      textInverse: '#faf5ff',
      textAccent: '#7e22ce',
      primary: '#7e22ce',
      accent: '#0891b2',
      nodeBg: '#f3e8ff',
      nodeStroke: '#7e22ce',
      edge: '#d8b4fe',
      edgeGlow: 'rgba(147, 51, 234, 0.45)',
      hubRing1: '#9333ea',
      hubRing2: '#0891b2',
      hubCore: '#ffffff',
      hubBorder: '#7e22ce',
      statBorder: '#0891b2',
    },
    cyber: {
      background: '#06050f',
      backgroundSoft: '#0c0a1a',
      surface: '#15122b',
      surfaceElevated: '#1e1a3d',
      border: '#2a2150',
      borderSoft: 'rgba(168, 85, 247, 0.08)',
      borderSubtle: 'rgba(168, 85, 247, 0.16)',
      borderStrong: 'rgba(168, 85, 247, 0.65)',
      borderAccent: 'rgba(34, 211, 238, 0.40)',
      textPrimary: '#ede9fe',
      textSecondary: 'rgba(237, 233, 254, 0.62)',
      textMuted: 'rgba(237, 233, 254, 0.34)',
      textInverse: '#06050f',
      textAccent: '#c084fc',
      primary: '#c084fc',
      accent: '#22d3ee',
      nodeBg: '#0c0a1a',
      nodeStroke: '#c084fc',
      edge: '#ddd6fe',
      edgeGlow: '#a855f7',
      hubRing1: '#c084fc',
      hubRing2: '#22d3ee',
      hubCore: '#06050f',
      hubBorder: '#a855f7',
      statBorder: '#22d3ee',
    },
  },
  networkSankey: {
    hubGradientFrom: '#15122b',
    hubGradientTo: '#0c0a1a',
    panelGradientFrom: '#1e1a3d',
    panelGradientTo: '#15122b',
    input: '#22d3ee',
    inputGlow: '#0891b2',
    output: '#a855f7',
    outputGlow: '#7e22ce',
    cyan: '#22d3ee',
    textInput: '#cffafe',
    textPanel: '#f5f3ff',
    textOutput: '#ede9fe',
  },
  default: '#a855f7',
};

export const panelSummaryColors = {
  primary: '#a855f7',      // Violet — headline metric
  info: '#22d3ee',         // Cyan — informational
  warning: '#facc15',      // Amber — caution
  success: '#10b981',      // Emerald — success
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-purple-500 to-violet-400',
  primaryShadow: 'shadow-purple-500/50',
};

export { DEFAULT_COLORS };
export default sidebarColors;
