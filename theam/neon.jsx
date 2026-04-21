// ============================================================
// neon.jsx — NEON Theme (Dark / Vibrant)
// ------------------------------------------------------------
// Cyberpunk-inspired dark theme with saturated electric accents.
//   • Deep Space Black  — high-contrast canvas for glowing UI
//   • Electric Magenta  — primary brand, commanding
//   • Electric Violet   — gradient endpoint, modern energy
//   • Neon Cyan         — info cues, electric highlights
//   • Neon Lime / Hot Red — vibrant severity signals
// Designed to feel alive: strong color saturation on a near-black
// canvas so every accent pops without eye strain.
// ============================================================

const DEFAULT_COLORS = {
  // Core canvas — deep space with a subtle magenta undertone
  background: '#0a0a14',          // Deep space black
  backgroundSoft: '#14141f',      // Panels / cards
  surface: '#1d1d2d',             // Raised surfaces
  surfaceElevated: '#262639',     // Hover / elevated

  // Borders — magenta-tinted for brand coherence
  border: '#2e2e45',
  borderSoft: 'rgba(255, 0, 110, 0.08)',

  // Typography — near-white with a violet undertone
  textPrimary: '#f5f3ff',
  textSecondary: 'rgba(245, 243, 255, 0.65)',
  textMuted: 'rgba(245, 243, 255, 0.38)',
  textInverse: '#0a0a14',

  // Brand identity — Electric Magenta (primary) + Neon Cyan (secondary)
  primary: '#ff006e',             // Electric magenta
  secondary: '#00f5ff',           // Neon cyan
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#10101b',
  surfaceTint: '#181828',
  surfaceMutedDeep: '#08080f',
  surfaceTintDark: '#14141f',
  backgroundDeep: '#05050d',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(255, 0, 110, 0.12)',
  borderStrong: 'rgba(255, 0, 110, 0.55)',      // Magenta emphasis
  borderAccent: 'rgba(0, 245, 255, 0.30)',      // Cyan accent

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: DEFAULT_COLORS.primary,
  textDim: '#2e2e45',
  textDisabled: '#1f1f30',
  textLighter: '#d4d0ff',
  textOffWhite: '#f5f3ff',
  textTertiary: '#c084fc',                      // Violet tertiary

  // ── PRIMARY BRAND ────────────────────────────────────────────
  // Gradient: Electric Magenta → Electric Violet (synthwave energy)
  primaryFrom: DEFAULT_COLORS.primary,          // #ff006e
  primaryTo: '#8338ec',                         // Electric violet
  primary: DEFAULT_COLORS.primary,
  accent: DEFAULT_COLORS.secondary,             // Neon cyan
  primaryMuted: '#ff5c9e',

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger: '#ff0054',                            // Hot neon red
  dangerDark: '#e60044',
  dangerHover: '#ff1a66',
  dangerSoft: '#ff6b9d',
  dangerLight: '#ffb3cc',
  dangerDark2: '#b3003d',
  dangerDarker: '#800029',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success: '#00ff88',                           // Neon green
  successSoft: '#5cffb1',
  successGreen: '#00cc6e',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning: '#ffbe0b',                           // Electric yellow
  warningLight: '#ffd166',
  warningDark: '#d49800',
  warningSoft: '#ffe28a',
  warningOrange: '#ff6b35',

  // ── STATUS — INFO ────────────────────────────────────────────
  info: '#00f5ff',                              // Neon cyan
  infoSoft: '#66f9ff',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral: '#6b6b85',
  errorcolor: '#ff0054',
  sucesscolor: '#00ff88',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  // Magenta wash → violet wash — synthwave gradient
  loginBgFrom: '#14001a',
  loginBgTo: '#1a0033',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple: '#c084fc',
  accentCyan: '#00f5ff',
  accentIndigo: '#8338ec',
  accentPink: '#ff006e',
  accentBlue: '#3a86ff',
  accentTeal: '#06ffa5',
  accentViolet: '#a855f7',
  accentOrange: '#ff6b35',
  accentYellow: '#ffbe0b',
  accentBlueDark: '#1e5fff',
  accentIndigoDark: '#5e17eb',
  accentVioletDark: '#7c3aed',
  accentPurple600: '#9333ea',

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: '#cc4a1f',
  orangeDark800: '#992f0a',
  orangeDark900: '#661d00',
  amberDark900: '#664d00',
  orangeDark950: '#331500',
  stoneDark800: '#14141f',
  stoneDark900: '#0a0a14',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground: DEFAULT_COLORS.surface,
  hoverBorder: DEFAULT_COLORS.primary,
  hoverShadow: 'rgba(255, 0, 110, 0.55)',       // Magenta glow
  hoverShadowSpread: '0 0 24px',
  hoverText: DEFAULT_COLORS.primary,
  activeBackground: DEFAULT_COLORS.surfaceElevated,
  activeBorder: DEFAULT_COLORS.secondary,
  activeShadow: 'rgba(0, 245, 255, 0.50)',      // Cyan glow
  activeText: DEFAULT_COLORS.secondary,
  buttonBackground: DEFAULT_COLORS.background,
  buttonIconColor: DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-pink-500 to-violet-500',
  primaryShadow: 'shadow-pink-500/60',
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
// Bold neon palette — each series glows on the near-black canvas.
export const chartColors = {
  primary: ['#ff006e', '#ff3d8f', '#ff70ab', '#ffa3c6', '#ffd6e2'],
  severity: {
    critical: '#ff0054',    // Hot neon red
    high: '#ff6b35',        // Electric orange
    medium: '#ffbe0b',      // Electric yellow
    low: '#00f5ff',         // Neon cyan
    info: '#00f5ff',
  },
  series: [
    '#ff006e',   // Electric magenta (primary brand)
    '#00f5ff',   // Neon cyan (secondary brand)
    '#8338ec',   // Electric violet
    '#00ff88',   // Neon green
    '#ffbe0b',   // Electric yellow
    '#3a86ff',   // Electric blue
    '#ff6b35',   // Electric orange
    '#06ffa5',   // Neon mint
    '#c084fc',   // Lavender glow
    '#fb7185',   // Hot pink
  ],
  categorical: [
    '#ff006e',
    '#00f5ff',
    '#8338ec',
    '#ffbe0b',
    '#00ff88',
    '#3a86ff',
    '#ff6b35',
    '#c084fc',
    '#06ffa5',
    '#fb7185',
  ],
  gradients: {
    neon: ['#ff006e', '#8338ec'],           // Magenta → violet
    synth: ['#00f5ff', '#ff006e'],          // Cyan → magenta
    pulse: ['#8338ec', '#3a86ff'],          // Violet → blue
    matrix: ['#00ff88', '#00f5ff'],         // Green → cyan
  },
  ui: {
    grid: 'rgba(255, 0, 110, 0.08)',
    axis: 'rgba(245, 243, 255, 0.30)',
    label: 'rgba(245, 243, 255, 0.65)',
    tooltip: 'rgba(10, 10, 20, 0.97)',
    tooltipBorder: 'rgba(255, 0, 110, 0.55)',
    border: 'rgba(255, 0, 110, 0.18)',
  },
  edges: {
    critical: '#ff0054',
    high: '#ff6b35',
    medium: '#ffbe0b',
    low: '#00f5ff',
    default: '#ff006e',
  },
  themes: {
    dark: {
      background: DEFAULT_COLORS.background,
      backgroundSoft: DEFAULT_COLORS.backgroundSoft,
      surface: DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border: DEFAULT_COLORS.border,
      borderSoft: DEFAULT_COLORS.borderSoft,
      borderSubtle: 'rgba(255, 0, 110, 0.12)',
      borderStrong: 'rgba(255, 0, 110, 0.55)',
      borderAccent: 'rgba(0, 245, 255, 0.30)',
      textPrimary: DEFAULT_COLORS.textPrimary,
      textSecondary: DEFAULT_COLORS.textSecondary,
      textMuted: DEFAULT_COLORS.textMuted,
      textInverse: DEFAULT_COLORS.textInverse,
      textAccent: DEFAULT_COLORS.primary,
      primaryFrom: DEFAULT_COLORS.primary,
      primaryTo: '#8338ec',
      primary: DEFAULT_COLORS.primary,
      accent: DEFAULT_COLORS.secondary,
      nodeBg: '#14141f',
      nodeStroke: DEFAULT_COLORS.primary,
      edge: '#d4d0ff',
      edgeGlow: DEFAULT_COLORS.primary,
      hubRing1: DEFAULT_COLORS.primary,
      hubRing2: DEFAULT_COLORS.secondary,
      hubCore: '#05050d',
      hubBorder: '#8338ec',
      statBorder: DEFAULT_COLORS.secondary,
    },
    light: {
      background: '#fdf4ff',
      backgroundSoft: '#fae8ff',
      surface: '#ffffff',
      surfaceElevated: '#ffffff',
      border: '#f0abfc',
      borderSoft: 'rgba(236, 72, 153, 0.12)',
      borderSubtle: 'rgba(236, 72, 153, 0.18)',
      borderStrong: 'rgba(236, 72, 153, 0.50)',
      borderAccent: 'rgba(131, 56, 236, 0.35)',
      textPrimary: '#500724',
      textSecondary: 'rgba(80, 7, 36, 0.70)',
      textMuted: 'rgba(80, 7, 36, 0.42)',
      textInverse: '#fdf4ff',
      textAccent: '#be185d',
      primary: '#be185d',
      accent: '#7e22ce',
      nodeBg: '#fae8ff',
      nodeStroke: '#be185d',
      edge: '#f0abfc',
      edgeGlow: 'rgba(236, 72, 153, 0.45)',
      hubRing1: '#ec4899',
      hubRing2: '#8b5cf6',
      hubCore: '#ffffff',
      hubBorder: '#be185d',
      statBorder: '#8b5cf6',
    },
    cyber: {
      background: '#000008',
      backgroundSoft: '#080012',
      surface: '#100018',
      surfaceElevated: '#1a0028',
      border: '#330055',
      borderSoft: 'rgba(255, 0, 110, 0.08)',
      borderSubtle: 'rgba(255, 0, 110, 0.15)',
      borderStrong: 'rgba(255, 0, 110, 0.65)',
      borderAccent: 'rgba(0, 245, 255, 0.40)',
      textPrimary: '#ffe3f1',
      textSecondary: 'rgba(255, 227, 241, 0.62)',
      textMuted: 'rgba(255, 227, 241, 0.35)',
      textInverse: '#000008',
      textAccent: '#ff006e',
      primary: '#ff006e',
      accent: '#00f5ff',
      nodeBg: '#080012',
      nodeStroke: '#ff006e',
      edge: '#ff6bb5',
      edgeGlow: '#ff006e',
      hubRing1: '#ff006e',
      hubRing2: '#00f5ff',
      hubCore: '#000008',
      hubBorder: '#8338ec',
      statBorder: '#00f5ff',
    },
  },
  networkSankey: {
    hubGradientFrom: '#14141f',
    hubGradientTo: '#0a0a14',
    panelGradientFrom: '#1d1d2d',
    panelGradientTo: '#14141f',
    input: '#00f5ff',
    inputGlow: '#3a86ff',
    output: '#ff006e',
    outputGlow: '#8338ec',
    cyan: '#00f5ff',
    textInput: '#cffbff',
    textPanel: '#f5f3ff',
    textOutput: '#ffe3f1',
  },
  default: '#ff006e',
};

export const panelSummaryColors = {
  primary: '#ff006e',      // Electric magenta — headline
  info: '#00f5ff',         // Neon cyan — informational
  warning: '#ffbe0b',      // Electric yellow — caution
  success: '#00ff88',      // Neon green — success
  overlay: '#000000',
};

export const sidebarClasses = {
  primaryGradient: 'from-pink-500 to-violet-500',
  primaryShadow: 'shadow-pink-500/60',
};

export { DEFAULT_COLORS };
export default sidebarColors;
