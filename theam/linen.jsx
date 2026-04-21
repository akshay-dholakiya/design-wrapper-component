// ============================================================
// linen.jsx — LINEN Theme (Light / Warm Neutral)
// ------------------------------------------------------------
// Editorial light-mode theme built from the NUDE palette.
//   • #F1EDE6  Ivory       — app canvas
//   • #EBE3DB  Cream       — muted surfaces
//   • #D1C7BD  Warm gray   — borders / dividers
//   • #CBAD8D  Camel       — warm accent
//   • #A48374  Mauve       — primary brand
//   • #3A2D28  Espresso    — headlines / high contrast
// A premium, editorial alternative to Daylight (indigo + rose).
// Feels like soft suede and warm linen — minimal, sophisticated.
// ============================================================

const DEFAULT_COLORS = {
  // Core canvas — cream base, ivory cards lift above it
  // (No pure white — every surface comes from the nude palette.)
  background: '#EBE3DB',          // Cream — app canvas
  backgroundSoft: '#F1EDE6',      // Ivory cards, clearly lifted off cream
  surface: '#F1EDE6',
  surfaceElevated: '#F6F1E9',     // A whisper lighter for hover / modal

  // Borders — warm gray, visible on cream without being heavy
  border: '#D1C7BD',
  borderSoft: 'rgba(164, 131, 116, 0.18)',

  // Typography — espresso for strong editorial contrast
  textPrimary: '#3A2D28',
  textSecondary: 'rgba(58, 45, 40, 0.68)',
  textMuted: 'rgba(58, 45, 40, 0.45)',
  textInverse: '#F1EDE6',

  // Brand identity — Mauve (primary) + Camel (secondary)
  primary: '#A48374',             // Mauve
  secondary: '#CBAD8D',           // Camel
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background: DEFAULT_COLORS.background,
  backgroundSoft: DEFAULT_COLORS.backgroundSoft,
  surface: DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted: '#EBE3DB',
  surfaceTint: '#F1EDE6',
  surfaceMutedDeep: '#e2d8cc',
  surfaceTintDark: '#EBE3DB',
  backgroundDeep: '#e8dfd2',

  // ── BORDERS ──────────────────────────────────────────────────
  border: DEFAULT_COLORS.border,
  borderSoft: DEFAULT_COLORS.borderSoft,
  borderSubtle: 'rgba(164, 131, 116, 0.22)',
  borderStrong: 'rgba(164, 131, 116, 0.55)',
  borderAccent: 'rgba(203, 173, 141, 0.45)',

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary: DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted: DEFAULT_COLORS.textMuted,
  textInverse: DEFAULT_COLORS.textInverse,
  textAccent: '#8a6b5f',           // Deeper mauve for accent text
  textDim: '#a89a8e',
  textDisabled: '#D1C7BD',
  textLighter: '#5c4a43',
  textOffWhite: '#3A2D28',
  textTertiary: '#8a6b5f',

  // ── PRIMARY BRAND ────────────────────────────────────────────
  // Gradient: Mauve → Camel (editorial warmth)
  primaryFrom: DEFAULT_COLORS.primary,         // #A48374
  primaryTo: DEFAULT_COLORS.secondary,         // #CBAD8D
  primary: DEFAULT_COLORS.primary,
  accent: '#3A2D28',                           // Espresso — dark accent moments
  primaryMuted: '#c8b0a5',

  // ── STATUS — DANGER ──────────────────────────────────────────
  // Burgundy family — warm, editorial, reads cleanly on ivory
  danger: '#9a1f2e',
  dangerDark: '#7a1824',
  dangerHover: '#b52535',
  dangerSoft: '#e8b5ba',
  dangerLight: '#f5dbe0',
  dangerDark2: '#5e121b',
  dangerDarker: '#3d0c12',

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success: '#4a6b3a',                          // Olive forest — harmonizes with warm neutrals
  successSoft: '#8fa97d',
  successGreen: '#5c7b4a',

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning: '#a67c2a',                          // Antique gold (camel family, deeper)
  warningLight: '#c29546',
  warningDark: '#7d5a1a',
  warningSoft: '#e4cf9a',
  warningOrange: '#b04a1e',                    // Terracotta

  // ── STATUS — INFO ────────────────────────────────────────────
  info: '#4a6fa5',                             // Dusty blue — cool but not cold
  infoSoft: '#8aa3cc',

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral: '#78716c',                          // Warm stone
  errorcolor: '#9a1f2e',
  sucesscolor: '#4a6b3a',

  // ── LOGIN PAGE ───────────────────────────────────────────────
  // Cream → ivory — editorial dawn gradient
  loginBgFrom: '#EBE3DB',
  loginBgTo: '#F1EDE6',

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple: '#7e22ce',
  accentCyan: '#0e7490',
  accentIndigo: '#4338ca',
  accentPink: '#be185d',
  accentBlue: '#1e40af',
  accentTeal: '#0f766e',
  accentViolet: '#6d28d9',
  accentOrange: '#c2410c',
  accentYellow: '#a16207',
  accentBlueDark: '#1e3a8a',
  accentIndigoDark: '#312e81',
  accentVioletDark: '#5b21b6',
  accentPurple600: '#6b21a8',

  // ── EXTENDED "DARK" SHADES (inverted for light mode) ─────────
  orangeDark700: '#fdba74',
  orangeDark800: '#fb923c',
  orangeDark900: '#f97316',
  amberDark900: '#d97706',
  orangeDark950: '#fed7aa',
  stoneDark800: '#F1EDE6',
  stoneDark900: '#EBE3DB',

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground: '#EBE3DB',
  hoverBorder: DEFAULT_COLORS.primary,
  hoverShadow: 'rgba(164, 131, 116, 0.30)',
  hoverShadowSpread: '0 0 18px',
  hoverText: '#8a6b5f',
  activeBackground: '#e2d8cc',
  activeBorder: '#3A2D28',
  activeShadow: 'rgba(58, 45, 40, 0.30)',
  activeText: '#3A2D28',
  buttonBackground: '#F6F1E9',
  buttonIconColor: DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: 'from-stone-400 to-amber-200',
  primaryShadow: 'shadow-stone-400/40',
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
// Editorial jewel-tone palette tuned to harmonize with nude neutrals.
// Every hue skews warm or desaturated so it reads with the ivory canvas
// rather than fighting it (no pure sky-blues, no neon reds).
export const chartColors = {
  primary: ['#A48374', '#CBAD8D', '#D1C7BD', '#EBE3DB', '#F1EDE6'],
  severity: {
    critical: '#9a1f2e',   // Burgundy — editorial "critical"
    high: '#b04a1e',       // Terracotta — warm urgent
    medium: '#a67c2a',     // Warm amber / antique gold
    low: '#4a6fa5',        // Dusty blue — cool without cold
    info: '#4a6fa5',
  },
  series: [
    '#A48374',   // Mauve (primary brand)
    '#3A2D28',   // Espresso (dark anchor)
    '#CBAD8D',   // Camel
    '#9a1f2e',   // Burgundy
    '#4a6fa5',   // Dusty blue
    '#6b7f4a',   // Olive sage
    '#7c3a5a',   // Plum wine
    '#a67c2a',   // Antique gold
    '#8b5a40',   // Bronze
    '#2c4a43',   // Forest pine
  ],
  categorical: [
    '#A48374',
    '#9a1f2e',
    '#CBAD8D',
    '#4a6fa5',
    '#6b7f4a',
    '#7c3a5a',
    '#a67c2a',
    '#8b5a40',
    '#2c4a43',
    '#3A2D28',
  ],
  gradients: {
    linen: ['#A48374', '#CBAD8D'],           // Brand primary (mauve → camel)
    ivory: ['#F1EDE6', '#EBE3DB'],           // Canvas
    suede: ['#CBAD8D', '#A48374'],           // Reversed warmth
    ember: ['#b04a1e', '#a67c2a'],           // Terracotta → gold
    mist:  ['#4a6fa5', '#7c3a5a'],           // Cool counterpoint
  },
  ui: {
    grid: 'rgba(164, 131, 116, 0.10)',
    axis: 'rgba(58, 45, 40, 0.30)',
    label: 'rgba(58, 45, 40, 0.65)',
    tooltip: 'rgba(246, 241, 233, 0.98)',    // Warm ivory tooltip (no pure white)
    tooltipBorder: 'rgba(164, 131, 116, 0.55)',
    border: 'rgba(164, 131, 116, 0.22)',
  },
  edges: {
    critical: '#9a1f2e',
    high: '#b04a1e',
    medium: '#a67c2a',
    low: '#4a6fa5',
    default: '#A48374',
  },
  themes: {
    // Aurora-style: a darker slot exists for components that explicitly
    // request a dark treatment — uses espresso as the canvas.
    dark: {
      background: '#3A2D28',
      backgroundSoft: '#4a3a33',
      surface: '#5c4a43',
      surfaceElevated: '#6d584f',
      border: '#6d584f',
      borderSoft: 'rgba(241, 237, 230, 0.10)',
      borderSubtle: 'rgba(241, 237, 230, 0.14)',
      borderStrong: 'rgba(203, 173, 141, 0.55)',
      borderAccent: 'rgba(203, 173, 141, 0.30)',
      textPrimary: '#F1EDE6',
      textSecondary: 'rgba(241, 237, 230, 0.65)',
      textMuted: 'rgba(241, 237, 230, 0.38)',
      textInverse: '#3A2D28',
      textAccent: '#CBAD8D',
      primaryFrom: '#CBAD8D',
      primaryTo: '#A48374',
      primary: '#CBAD8D',
      accent: '#A48374',
      nodeBg: '#4a3a33',
      nodeStroke: '#CBAD8D',
      edge: '#D1C7BD',
      edgeGlow: '#A48374',
      hubRing1: '#CBAD8D',
      hubRing2: '#A48374',
      hubCore: '#3A2D28',
      hubBorder: '#A48374',
      statBorder: '#CBAD8D',
    },
    light: {
      background: DEFAULT_COLORS.background,        // #EBE3DB cream
      backgroundSoft: DEFAULT_COLORS.backgroundSoft, // #F1EDE6 ivory
      surface: '#EBE3DB',                            // Cream — gives hub gradient depth
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border: DEFAULT_COLORS.border,
      borderSoft: DEFAULT_COLORS.borderSoft,
      borderSubtle: 'rgba(164, 131, 116, 0.22)',
      borderStrong: 'rgba(164, 131, 116, 0.55)',
      borderAccent: 'rgba(203, 173, 141, 0.45)',
      textPrimary: '#3A2D28',                        // Espresso — strong on cream
      textSecondary: 'rgba(58, 45, 40, 0.68)',
      textMuted: 'rgba(58, 45, 40, 0.45)',
      textInverse: '#F6F1E9',                        // Warm ivory — readable on colored badges
      textAccent: '#8a6b5f',
      // ── Brand — now explicit so gauge gradient has 3 real stops ──
      primary: '#A48374',                            // Mauve
      primaryFrom: '#A48374',
      primaryTo: '#CBAD8D',
      secondary: '#CBAD8D',                          // Camel — gauge gradient left stop
      accent: '#3A2D28',                             // Espresso — accent moments / gauge right stop
      // ── Hub / node framing — deeper tones for visible discs on cream ──
      nodeBg: '#F6F1E9',                             // Warm ivory — readable behind vendor logos
      nodeStroke: '#8a6b5f',                         // Deeper mauve — visible ring on cream
      edge: '#A48374',                               // Mauve base — cohesive warm line on ivory
      edgeGlow: '#8a6b5f',                           // Deeper mauve — shimmer / traveling dots
      hubRing1: '#A48374',                           // Mauve
      hubRing2: '#CBAD8D',                           // Camel
      hubCore: '#3A2D28',                            // Espresso — dark central disc frames EAGLEYE logo
      hubBorder: '#A48374',
      statBorder: '#CBAD8D',
    },
    cyber: {
      background: '#EBE3DB',
      backgroundSoft: '#F1EDE6',
      surface: '#F6F1E9',
      surfaceElevated: '#F6F1E9',
      border: '#D1C7BD',
      borderSoft: 'rgba(58, 45, 40, 0.10)',
      borderSubtle: 'rgba(58, 45, 40, 0.14)',
      borderStrong: 'rgba(58, 45, 40, 0.50)',
      borderAccent: 'rgba(164, 131, 116, 0.50)',
      textPrimary: '#3A2D28',
      textSecondary: 'rgba(58, 45, 40, 0.68)',
      textMuted: 'rgba(58, 45, 40, 0.42)',
      textInverse: '#F1EDE6',
      textAccent: '#3A2D28',
      primary: '#3A2D28',
      accent: '#A48374',
      nodeBg: '#F1EDE6',
      nodeStroke: '#3A2D28',
      edge: '#CBAD8D',
      edgeGlow: 'rgba(58, 45, 40, 0.40)',
      hubRing1: '#3A2D28',
      hubRing2: '#A48374',
      hubCore: '#F6F1E9',
      hubBorder: '#3A2D28',
      statBorder: '#A48374',
    },
  },
  networkSankey: {
    hubGradientFrom: '#F1EDE6',
    hubGradientTo: '#EBE3DB',
    panelGradientFrom: '#F6F1E9',
    panelGradientTo: '#F1EDE6',
    input: '#A48374',
    inputGlow: '#CBAD8D',
    output: '#3A2D28',
    outputGlow: '#A48374',
    cyan: '#0e7490',
    textInput: '#3A2D28',
    textPanel: '#3A2D28',
    textOutput: '#F1EDE6',
  },
  default: '#A48374',
};

export const panelSummaryColors = {
  primary: '#A48374',      // Mauve — headline metric
  info: '#4a6fa5',         // Dusty blue — informational
  warning: '#a67c2a',      // Antique gold — caution
  success: '#4a6b3a',      // Olive — success
  overlay: '#3A2D28',
};

export const sidebarClasses = {
  primaryGradient: 'from-stone-400 to-amber-200',
  primaryShadow: 'shadow-stone-400/40',
};

// Identifies this as a light theme — consumers (e.g. AppInput) can
// read this to adjust form-control chrome (luma-sniff also works).
export const isLight = true;

export { DEFAULT_COLORS };
export default sidebarColors;
