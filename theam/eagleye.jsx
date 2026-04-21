// ============================================================
// eagleye.jsx — EAGLEYE Brand Theme
// ------------------------------------------------------------
// Inspired by the EAGLEYE logo ("Protect. Detect. Respond.")
//   • Deep Navy Blue   — trust, authority, security operations
//   • Golden Amber     — alertness, vigilance, brand accent
//   • Sky Blue         — clarity, calm, supportive surfaces
//   • White            — contrast, legibility
// Designed for a modern SOC / cyber-defense dashboard experience.
// ============================================================

const DEFAULT_COLORS = {
  // Core canvas — deep navy, slightly cooler than logo's ring
  background: '#040f22',          // Deep space navy — app backdrop
  backgroundSoft: '#081c3a',      // Logo ring navy — panels/cards
  surface: '#0c2f5a',             // Shield navy — raised surfaces
  surfaceElevated: '#143a6c',     // Hover surface

  // Borders — subtle sky-blue tint (brand accent)
  border: '#1f4478',
  borderSoft: 'rgba(127, 181, 230, 0.08)',

  // Typography
  textPrimary: '#f5faff',         // Near-white, tuned for navy
  textSecondary: 'rgba(245, 250, 255, 0.62)',
  textMuted: 'rgba(245, 250, 255, 0.34)',
  textInverse: '#081c3a',

  // Brand identity — amber gold + sky blue duo (logo colors)
  primary: '#f5b800',             // EAGLEYE gold (primary brand)
  secondary: '#a8d4f5',           // Shield sky-blue (secondary)
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#071a35',
  surfaceTint: '#0a2444',
  surfaceMutedDeep: '#051428',
  surfaceTintDark: '#081c3a',
  backgroundDeep: '#020817',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(127, 181, 230, 0.10)',
  borderStrong: 'rgba(245, 184, 0, 0.45)',      // Gold, for emphasis
  borderAccent: 'rgba(168, 212, 245, 0.22)',    // Sky-blue subtle

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: DEFAULT_COLORS.primary,            // Gold accent text
  textDim: '#1f4478',
  textDisabled: '#143050',
  textLighter: '#cfe6fa',
  textOffWhite: '#f5faff',
  textTertiary: '#7fb5e6',                      // Logo sky blue

  // ── PRIMARY BRAND ────────────────────────────────────────────
  // Brand gradient: Gold → Warm Amber (headline actions, highlights)
  primaryFrom: DEFAULT_COLORS.primary,          // #f5b800
  primaryTo: '#ffc72c',                         // Slightly warmer gold
  primary: DEFAULT_COLORS.primary,
  accent: DEFAULT_COLORS.secondary,             // Sky blue
  primaryMuted: '#ffe28a',

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
  // Warning shares brand gold family for cohesion
  warning: '#f5b800',
  warningLight: '#ffd45c',
  warningDark: '#c28c00',
  warningSoft: '#ffe9a3',
  warningOrange: '#ea7c00',

  // ── STATUS — INFO ────────────────────────────────────────────
  info: '#7fb5e6',                              // Sky blue (brand)
  infoSoft: '#a8d4f5',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral: '#64748b',
  errorcolor: '#ef4444',
  sucesscolor: '#22c55e',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  // Navy → deeper shield navy — echoes the logo ring gradient
  loginBgFrom: '#040f22',
  loginBgTo: '#0c2f5a',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple: '#a78bfa',
  accentCyan: '#38bdf8',
  accentIndigo: '#6366f1',
  accentPink: '#ec4899',
  accentBlue: '#7fb5e6',
  accentTeal: '#14b8a6',
  accentViolet: '#8b5cf6',
  accentOrange: '#f97316',
  accentYellow: '#f5b800',
  accentBlueDark: '#1e5a9c',
  accentIndigoDark: '#4338ca',
  accentVioletDark: '#7c3aed',
  accentPurple600: '#9333ea',

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: '#c2410c',
  orangeDark800: '#9a3412',
  orangeDark900: '#7c2d12',
  amberDark900: '#78350f',
  orangeDark950: '#451a03',
  stoneDark800: '#081c3a',
  stoneDark900: '#040f22',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground: DEFAULT_COLORS.surface,
  hoverBorder: DEFAULT_COLORS.primary,
  hoverShadow: 'rgba(245, 184, 0, 0.45)',       // Gold glow
  hoverShadowSpread: '0 0 20px',
  hoverText: DEFAULT_COLORS.primary,
  activeBackground: DEFAULT_COLORS.surfaceElevated,
  activeBorder: DEFAULT_COLORS.primary,
  activeShadow: 'rgba(245, 184, 0, 0.50)',
  activeText: DEFAULT_COLORS.primary,
  buttonBackground: DEFAULT_COLORS.background,
  buttonIconColor: DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-amber-400 to-yellow-400',
  primaryShadow: 'shadow-amber-500/50',
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
// Series stay readable against deep navy while echoing brand gold + sky blue
export const chartColors = {
  primary: ['#f5b800', '#ffc72c', '#c28c00', '#ffe28a', '#fff4c8'],
  severity: {
    critical: '#ef4444',
    high: '#f97316',
    medium: '#f5b800',   // Brand gold — warning severity
    low: '#7fb5e6',      // Brand sky-blue — low severity
    info: '#a8d4f5',
  },
  series: [
    '#f5b800',   // Gold (primary brand)
    '#7fb5e6',   // Sky blue (secondary brand)
    '#ffc72c',   // Warm amber
    '#a8d4f5',   // Light sky blue
    '#38bdf8',   // Cyan highlight
    '#f97316',   // Orange (warning tone)
    '#10b981',   // Green
    '#8b5cf6',   // Violet
    '#ec4899',   // Pink
    '#14b8a6',   // Teal
  ],
  categorical: [
    '#f5b800',
    '#7fb5e6',
    '#ffc72c',
    '#a8d4f5',
    '#ea7c00',
    '#38bdf8',
    '#10b981',
    '#8b5cf6',
    '#ec4899',
    '#14b8a6',
  ],
  gradients: {
    gold: ['#f5b800', '#ffc72c'],
    sky: ['#7fb5e6', '#a8d4f5'],
    navy: ['#0c2f5a', '#081c3a'],
    amber: ['#f5b800', '#ea7c00'],
  },
  ui: {
    grid: 'rgba(127, 181, 230, 0.08)',
    axis: 'rgba(245, 250, 255, 0.30)',
    label: 'rgba(245, 250, 255, 0.62)',
    tooltip: 'rgba(4, 15, 34, 0.97)',
    tooltipBorder: 'rgba(245, 184, 0, 0.55)',
    border: 'rgba(127, 181, 230, 0.18)',
  },
  edges: {
    critical: '#ef4444',
    high: '#f97316',
    medium: '#f5b800',
    low: '#7fb5e6',
    default: '#f5b800',
  },
  themes: {
    dark: {
      background: DEFAULT_COLORS.background,
      backgroundSoft: DEFAULT_COLORS.backgroundSoft,
      surface: DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border: DEFAULT_COLORS.border,
      borderSoft: DEFAULT_COLORS.borderSoft,
      borderSubtle: 'rgba(127, 181, 230, 0.10)',
      borderStrong: 'rgba(245, 184, 0, 0.45)',
      borderAccent: 'rgba(168, 212, 245, 0.22)',
      textPrimary: DEFAULT_COLORS.textPrimary,
      textSecondary: DEFAULT_COLORS.textSecondary,
      textMuted: DEFAULT_COLORS.textMuted,
      textInverse: DEFAULT_COLORS.textInverse,
      textAccent: DEFAULT_COLORS.primary,
      primaryFrom: DEFAULT_COLORS.primary,
      primaryTo: '#ffc72c',
      primary: DEFAULT_COLORS.primary,
      accent: DEFAULT_COLORS.secondary,
      nodeBg: '#081c3a',
      nodeStroke: DEFAULT_COLORS.primary,
      edge: '#cfe6fa',
      edgeGlow: DEFAULT_COLORS.primary,
      hubRing1: DEFAULT_COLORS.primary,
      hubRing2: DEFAULT_COLORS.secondary,
      hubCore: '#030c1c',
      hubBorder: DEFAULT_COLORS.primary,
      statBorder: DEFAULT_COLORS.secondary,
    },
    light: {
      background: '#f8fbff',
      backgroundSoft: '#eaf2fb',
      surface: '#d7e6f5',
      surfaceElevated: '#ffffff',
      border: '#a8d4f5',
      borderSoft: 'rgba(12, 47, 90, 0.08)',
      borderSubtle: 'rgba(12, 47, 90, 0.10)',
      borderStrong: 'rgba(245, 184, 0, 0.55)',
      borderAccent: 'rgba(12, 47, 90, 0.18)',
      textPrimary: '#081c3a',
      textSecondary: '#1e5a9c',
      textMuted: '#4a7ba8',
      textInverse: '#f8fbff',
      textAccent: '#c28c00',
      primary: '#c28c00',
      accent: '#1e5a9c',
      nodeBg: '#eaf2fb',
      nodeStroke: '#c28c00',
      edge: '#a8d4f5',
      edgeGlow: 'rgba(245, 184, 0, 0.4)',
      hubRing1: '#f5b800',
      hubRing2: '#1e5a9c',
      hubCore: '#ffffff',
      hubBorder: '#c28c00',
      statBorder: '#1e5a9c',
    },
    cyber: {
      background: '#020817',
      backgroundSoft: '#051428',
      surface: '#081c3a',
      surfaceElevated: '#0c2f5a',
      border: '#143a6c',
      borderSoft: 'rgba(245, 184, 0, 0.06)',
      borderSubtle: 'rgba(245, 184, 0, 0.10)',
      borderStrong: 'rgba(245, 184, 0, 0.50)',
      borderAccent: 'rgba(245, 184, 0, 0.22)',
      textPrimary: '#fff4c8',
      textSecondary: 'rgba(255, 244, 200, 0.60)',
      textMuted: 'rgba(255, 244, 200, 0.32)',
      textInverse: '#020817',
      textAccent: '#f5b800',
      primary: '#f5b800',
      accent: '#7fb5e6',
      nodeBg: '#030e1f',
      nodeStroke: '#f5b800',
      edge: '#ffe28a',
      edgeGlow: '#f5b800',
      hubRing1: '#f5b800',
      hubRing2: '#7fb5e6',
      hubCore: '#020817',
      hubBorder: '#ffc72c',
      statBorder: '#f5b800',
    },
  },
  networkSankey: {
    hubGradientFrom: '#081c3a',
    hubGradientTo: '#040f22',
    panelGradientFrom: '#0a2444',
    panelGradientTo: '#051428',
    input: '#7fb5e6',
    inputGlow: '#a8d4f5',
    output: '#f5b800',
    outputGlow: '#ffc72c',
    cyan: '#38bdf8',
    textInput: '#cfe6fa',
    textPanel: '#f5faff',
    textOutput: '#ffe28a',
  },
  default: '#f5b800',
};

export const panelSummaryColors = {
  primary: '#f5b800',      // Gold — headline metric
  info: '#7fb5e6',         // Sky blue — informational
  warning: '#f97316',      // Orange — caution
  success: '#10b981',      // Green — success
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-amber-400 to-yellow-400',
  primaryShadow: 'shadow-amber-500/50',
};

export { DEFAULT_COLORS };
export default sidebarColors;
