// ============================================================
// colors.js  —  Cyber Blue Theme System
// ============================================================
// ── This is the SINGLE SOURCE OF TRUTH for all colors. ──────
// ── Edit here → changes propagate everywhere via colors.ts ──
// ============================================================


// ── BASE TOKENS (Cyber Blue Base) ────────────────────────────
const DEFAULT_COLORS = {
  background:      "#050d1a",       // deep navy
  backgroundSoft:  "#0a1628",       // dark blue-tinted card bg
  surface:         "#0f1f38",       // elevated blue surface
  surfaceElevated: "#162844",       // modals / drawers

  border:          "#1e3a5f",       // blue-tinted border
  borderSoft:      "rgba(56, 189, 248, 0.06)",  // sky blue tint

  textPrimary:     "#e2f4ff",       // cool white-blue
  textSecondary:   "rgba(226, 244, 255, 0.55)",
  textMuted:       "rgba(226, 244, 255, 0.30)",
  textInverse:     "#050d1a",

  primary:         "#0ea5e9",       // sky-500
  secondary:       "#38bdf8",       // sky-400
};


// ── SIDEBAR / THEME COLORS (Cyber Blue Accent) ───────────────
const sidebarColors = {

  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:       DEFAULT_COLORS.background,
  backgroundSoft:   DEFAULT_COLORS.backgroundSoft,
  surface:          DEFAULT_COLORS.surface,
  surfaceElevated:  DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES (added for colors.ts) ──────────────────
  surfaceMuted:     "#0c1a30",                        // muted elements (between bg and surface)
  surfaceTint:      "#0d1f3a",                        // light accent surface
  surfaceMutedDeep: "#071628",                        // deep muted surface
  surfaceTintDark:  "#0a1628",                        // slightly lighter than surface
  backgroundDeep:   "#020812",                        // absolute deepest layer

  // ── BORDERS ──────────────────────────────────────────────────
  border:           DEFAULT_COLORS.border,
  borderSoft:       DEFAULT_COLORS.borderSoft,
  borderSubtle:     "rgba(56, 189, 248, 0.08)",       // sky-400 tint
  borderStrong:     "rgba(56, 189, 248, 0.45)",       // sky blue strong border
  borderAccent:     "rgba(56, 189, 248, 0.20)",       // sky blue accent border

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:      DEFAULT_COLORS.textPrimary,
  textSecondary:    DEFAULT_COLORS.textSecondary,
  textMuted:        DEFAULT_COLORS.textMuted,
  textInverse:      DEFAULT_COLORS.textInverse,
  textAccent:       DEFAULT_COLORS.primary,           // sky-500
  textDim:          "#1e3a5f",                        // dim navy-gray
  textDisabled:     "#143050",                        // disabled navy
  textLighter:      "#bae6fd",                        // sky-200 (lighter secondary)
  textOffWhite:     "#e2f4ff",                        // cool near-white
  textTertiary:     "#7dd3fc",                        // sky-300

  // ── PRIMARY BRAND ─────────────────────────────────────────────
  primaryFrom:      DEFAULT_COLORS.primary,           // sky-500
  primaryTo:        DEFAULT_COLORS.secondary,         // sky-400
  primary:          DEFAULT_COLORS.primary,           // sky-500
  accent:           DEFAULT_COLORS.secondary,         // sky-400
  primaryMuted:     "#7dd3fc",                        // sky-300 (muted brand highlight)

  // ── STATUS — DANGER / RED ────────────────────────────────────
  danger:           "#ff2d2d",                        // bright red
  dangerDark:       "#dc2626",                        // red-600
  dangerHover:      "#ef4444",                        // red-500
  dangerSoft:       "#fca5a5",                        // red-300
  dangerLight:      "#f87171",                        // red-400
  dangerDark2:      "#b91c1c",                        // red-700
  dangerDarker:     "#991b1b",                        // red-800

  // ── STATUS — SUCCESS / GREEN ─────────────────────────────────
  success:          "#10b981",                        // emerald-500
  successSoft:      "#34d399",                        // emerald-400
  successGreen:     "#22c55e",                        // green-500

  // ── STATUS — WARNING / AMBER ─────────────────────────────────
  warning:          "#f59e0b",                        // amber-500
  warningLight:     "#fbbf24",                        // amber-400
  warningDark:      "#d97706",                        // amber-600
  warningSoft:      "#fde68a",                        // amber-200
  warningOrange:    "#ea580c",                        // orange-600

  // ── STATUS — INFO / SKY ───────────────────────────────────────
  info:             DEFAULT_COLORS.primary,           // sky-500
  infoSoft:         DEFAULT_COLORS.secondary,         // sky-400

  // ── NEUTRAL ───────────────────────────────────────────────────
  neutral:          "#6b7280",                        // gray-500

  // ── ERROR ─────────────────────────────────────────────────────
  errorcolor:       "#ef4444",                        // red-500
  sucesscolor:      "#22c55e",                        // green-500

  // ── LOGIN PAGE ────────────────────────────────────────────────
  loginBgFrom:      "#050d1a",                        // login gradient start (deep navy)
  loginBgTo:        "#0f1f38",                        // login gradient end (navy blue)

  // ── EXTENDED ACCENT PALETTE (data visualisation) ─────────────
  accentPurple:     "#a78bfa",                        // violet-400
  accentCyan:       "#06b6d4",                        // cyan-500
  accentIndigo:     "#6366f1",                        // indigo-500
  accentPink:       "#ec4899",                        // pink-500
  accentBlue:       "#38bdf8",                        // sky-400
  accentTeal:       "#14b8a6",                        // teal-500
  accentViolet:     "#8b5cf6",                        // violet-500
  accentOrange:     "#f97316",                        // orange-500
  accentYellow:     "#eab308",                        // yellow-500
  accentBlueDark:   "#0284c7",                        // sky-600
  accentIndigoDark: "#4338ca",                        // indigo-700
  accentVioletDark: "#7c3aed",                        // violet-700
  accentPurple600:  "#9333ea",                        // purple-600

  // ── EXTENDED DARK SHADES (threat type visualisation) ─────────
  orangeDark700:    "#c2410c",                        // orange-700
  orangeDark800:    "#9a3412",                        // orange-800
  orangeDark900:    "#7c2d12",                        // orange-900
  amberDark900:     "#78350f",                        // amber-900
  orangeDark950:    "#451a03",                        // orange-950
  stoneDark800:     "#0a1628",                        // navy-800
  stoneDark900:     "#050d1a",                        // navy-900

  // ── HOVER STATES ─────────────────────────────────────────────
  hoverBackground:  DEFAULT_COLORS.surface,
  hoverBorder:      DEFAULT_COLORS.surface,
  hoverShadow:      "rgba(56, 189, 248, 0.55)",       // sky glow
  hoverShadowSpread: "0 0 20px",
  hoverText:        DEFAULT_COLORS.secondary,

  // ── ACTIVE / SELECTED STATES ─────────────────────────────────
  activeBackground: DEFAULT_COLORS.surface,
  activeBorder:     DEFAULT_COLORS.surface,
  activeShadow:     "rgba(56, 189, 248, 0.45)",
  activeText:       DEFAULT_COLORS.primary,

  // ── BUTTON ───────────────────────────────────────────────────
  buttonBackground: DEFAULT_COLORS.background,
  buttonIconColor:  DEFAULT_COLORS.textPrimary,

  // ── TAILWIND GRADIENT CLASSES ─────────────────────────────────
  primaryGradient:  "from-sky-500 to-sky-400",
  primaryShadow:    "shadow-sky-500/50",
};


// ===== FONT STYLES =====

const fontSmoothing = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
};

export const fontStyles = {
  smoothing: fontSmoothing,
  heading1:  { fontSize: "32px", fontWeight: "800", lineHeight: "1.1",  letterSpacing: "-0.02em",  ...fontSmoothing },
  heading2:  { fontSize: "24px", fontWeight: "700", lineHeight: "1.2",  letterSpacing: "-0.015em", ...fontSmoothing },
  heading3:  { fontSize: "20px", fontWeight: "700", lineHeight: "1.3",  letterSpacing: "-0.01em",  ...fontSmoothing },
  heading4:  { fontSize: "18px", fontWeight: "700", lineHeight: "1.4",  letterSpacing: "-0.005em", ...fontSmoothing },
  heading5:  { fontSize: "16px", fontWeight: "700", lineHeight: "1.4",  ...fontSmoothing },
  heading6:  { fontSize: "14px", fontWeight: "700", lineHeight: "1.5",  letterSpacing: "0.01em",   ...fontSmoothing },

  body:      { fontSize: "14px", lineHeight: "1.6", ...fontSmoothing },
  bodyLarge: { fontSize: "16px", lineHeight: "1.6", ...fontSmoothing },
  bodySmall: { fontSize: "12px", lineHeight: "1.5", ...fontSmoothing },
  caption:   { fontSize: "12px", lineHeight: "1.4", ...fontSmoothing },

  label:  { fontSize: "13px", fontWeight: "500", letterSpacing: "0.01em", ...fontSmoothing },
  button: { fontSize: "14px", fontWeight: "600", letterSpacing: "0.02em", ...fontSmoothing },

  metric:       { fontSize: "24px", fontWeight: "700", fontVariantNumeric: "tabular-nums", lineHeight: "1.2", ...fontSmoothing },
  metricMedium: { fontSize: "30px", fontWeight: "700", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metric2xl:    { fontSize: "32px", fontWeight: "700", lineHeight: "1",   fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metricLarge:  { fontSize: "48px", fontWeight: "700", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metricXL:     { fontSize: "60px", fontWeight: "700", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },

  code: {
    fontSize:   "13px",
    fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
    lineHeight: "1.6",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
};


// ===== CHART COLOR PALETTE =====

export const chartColors = {
  // Primary chart colors (Cyber Blue)
  primary: ["#0ea5e9", "#38bdf8", "#0284c7", "#7dd3fc", "#bae6fd"],

  severity: {
    critical: "#ef4444",
    high:     "#f97316",
    medium:   "#eab308",
    low:      "#0ea5e9",   // sky-500
    info:     "#0ea5e9",
  },

  series: [
    "#0ea5e9",   // sky-500
    "#38bdf8",   // sky-400
    "#8b5cf6",   // violet-500
    "#06b6d4",   // cyan-500
    "#00d4ff",   // cyber cyan
    "#f59e0b",   // amber
    "#ec4899",   // pink
    "#6366f1",   // indigo
    "#14b8a6",   // teal
    "#84cc16",   // lime
  ],

  categorical: [
    "#0ea5e9",   // sky-500
    "#38bdf8",   // sky-400
    "#06b6d4",   // cyan-500
    "#22d3ee",   // cyan-400
    "#8b5cf6",   // violet-500
    "#a78bfa",   // violet-400
    "#ec4899",   // pink
    "#f472b6",
    "#6366f1",   // indigo
    "#818cf8",
  ],

  gradients: {
    blue:   ["#0ea5e9", "#38bdf8"],
    cyan:   ["#06b6d4", "#22d3ee"],
    orange: ["#f97316", "#fb923c"],
    pink:   ["#ec4899", "#f472b6"],
  },

  ui: {
    grid:          "rgba(56, 189, 248, 0.08)",
    axis:          "rgba(226, 244, 255, 0.30)",
    label:         "rgba(226, 244, 255, 0.60)",
    tooltip:       "rgba(5, 13, 26, 0.97)",
    tooltipBorder: "rgba(56, 189, 248, 0.50)",
    border:        "rgba(56, 189, 248, 0.15)",
  },

  edges: {
    critical: "#ef4444",
    high:     "#f87171",
    medium:   "#fca5a5",
    low:      "#fecaca",
    default:  "#dc2626",
  },

  themes: {
    dark: {
      background:      DEFAULT_COLORS.background,
      backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
      surface:         DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border:          DEFAULT_COLORS.border,
      borderSoft:      DEFAULT_COLORS.borderSoft,
      borderSubtle:    "rgba(56, 189, 248, 0.08)",
      borderStrong:    "rgba(56, 189, 248, 0.45)",
      borderAccent:    "rgba(56, 189, 248, 0.20)",
      textPrimary:     DEFAULT_COLORS.textPrimary,
      textSecondary:   DEFAULT_COLORS.textSecondary,
      textMuted:       DEFAULT_COLORS.textMuted,
      textInverse:     DEFAULT_COLORS.textInverse,
      textAccent:      "#38bdf8",
      primaryFrom:     "#0ea5e9",
      primaryTo:       "#38bdf8",
      primary:         "#0ea5e9",
      accent:          "#38bdf8",
      nodeBg:          "#071221",
      nodeStroke:      "#38bdf8",
      edge:            "#e2f4ff",
      edgeGlow:        "#0ea5e9",
      hubRing1:        "#38bdf8",
      hubRing2:        "#06b6d4",
      hubCore:         "#040d18",
      hubBorder:       "#0ea5e9",
      statBorder:      "#06b6d4",
    },
    light: {
      background:      "#f0f9ff",
      backgroundSoft:  "#e0f2fe",
      surface:         "#bae6fd",
      surfaceElevated: "#ffffff",
      border:          "#7dd3fc",
      borderSoft:      "rgba(14, 165, 233, 0.08)",
      borderSubtle:    "rgba(14, 165, 233, 0.10)",
      borderStrong:    "rgba(14, 165, 233, 0.35)",
      borderAccent:    "rgba(14, 165, 233, 0.18)",
      textPrimary:     "#0c2340",
      textSecondary:   "#1e5080",
      textMuted:       "#4a90b8",
      textInverse:     "#f0f9ff",
      textAccent:      "#0284c7",
      primary:         "#0284c7",
      accent:          "#0ea5e9",
      nodeBg:          "#e0f2fe",
      nodeStroke:      "#0284c7",
      edge:            "#7dd3fc",
      edgeGlow:        "rgba(14, 165, 233, 0.4)",
      hubRing1:        "#0ea5e9",
      hubRing2:        "#06b6d4",
      hubCore:         "#dbeafe",
      hubBorder:       "#0284c7",
      statBorder:      "#0ea5e9",
    },
    cyber: {
      background:      "#020812",
      backgroundSoft:  "#040f1e",
      surface:         "#071628",
      surfaceElevated: "#0a1f38",
      border:          "#0e3a5c",
      borderSoft:      "rgba(0, 212, 255, 0.06)",
      borderSubtle:    "rgba(0, 212, 255, 0.10)",
      borderStrong:    "rgba(0, 212, 255, 0.40)",
      borderAccent:    "rgba(0, 212, 255, 0.20)",
      textPrimary:     "#e2f4ff",
      textSecondary:   "rgba(226, 244, 255, 0.55)",
      textMuted:       "rgba(226, 244, 255, 0.30)",
      textInverse:     "#020812",
      textAccent:      "#00d4ff",
      primary:         "#00d4ff",
      accent:          "#00ff88",
      nodeBg:          "#030e1c",
      nodeStroke:      "#00d4ff",
      edge:            "#e2f4ff",
      edgeGlow:        "#00d4ff",
      hubRing1:        "#00d4ff",
      hubRing2:        "#00ff88",
      hubCore:         "#010810",
      hubBorder:       "#7c3aed",
      statBorder:      "#00d4ff",
    },
  },

  networkSankey: {
    hubGradientFrom:   "#071628",
    hubGradientTo:     "#020d1a",
    panelGradientFrom: "#060f20",
    panelGradientTo:   "#030a14",
    input:             "#38bdf8",
    inputGlow:         "#0ea5e9",
    output:            "#34d399",
    outputGlow:        "#059669",
    cyan:              "#06b6d4",
    textInput:         "#bae6fd",
    textPanel:         "#d4e5f7",
    textOutput:        "#d1fae5",
  },

  default: "#0ea5e9",
};


// ===== TAILWIND CLASSES =====
export { DEFAULT_COLORS };

export const sidebarClasses = {
  primaryGradient: "from-sky-500 to-sky-400",
  primaryShadow:   "shadow-sky-500/50",
};

export default sidebarColors;