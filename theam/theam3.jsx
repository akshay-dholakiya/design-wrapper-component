// ============================================================
// theme_violet_dark.jsx — Violet Dark Theme  (Violet-500 accent)
// ============================================================

const DEFAULT_COLORS = {
  background:      "#050d1a",
  backgroundSoft:  "#0a1628",
  surface:         "#16102e",
  surfaceElevated: "#1e1640",
  border:          "#3b2a6e",
  borderSoft:      "rgba(167, 139, 250, 0.06)",
  textPrimary:     "#f0ecff",
  textSecondary:   "rgba(240, 236, 255, 0.55)",
  textMuted:       "rgba(240, 236, 255, 0.30)",
  textInverse:     "#0a0714",
  primary:         "#8b5cf6",    // violet-500
  secondary:       "#a78bfa",    // violet-400
};

const sidebarColors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:      DEFAULT_COLORS.background,
  backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
  surface:         DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:     "#120e28",
  surfaceTint:      "#181230",
  surfaceMutedDeep: "#0e0a20",
  surfaceTintDark:  "#0a0718",
  backgroundDeep:   "#020510",

  // ── BORDERS ──────────────────────────────────────────────────
  border:       DEFAULT_COLORS.border,
  borderSoft:   DEFAULT_COLORS.borderSoft,
  borderSubtle: "rgba(167, 139, 250, 0.08)",
  borderStrong: "rgba(167, 139, 250, 0.45)",
  borderAccent: "rgba(167, 139, 250, 0.20)",

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:   DEFAULT_COLORS.textPrimary,
  textSecondary: DEFAULT_COLORS.textSecondary,
  textMuted:     DEFAULT_COLORS.textMuted,
  textInverse:   DEFAULT_COLORS.textInverse,
  textAccent:    DEFAULT_COLORS.secondary,
  textDim:       "#3b2a6e",
  textDisabled:  "#2a1e52",
  textLighter:   "#ddd6fe",    // violet-200
  textOffWhite:  "#f0ecff",
  textTertiary:  "#c4b5fd",    // violet-300

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:  DEFAULT_COLORS.primary,
  primaryTo:    DEFAULT_COLORS.secondary,
  primary:      DEFAULT_COLORS.primary,
  accent:       DEFAULT_COLORS.secondary,
  primaryMuted: "#c4b5fd",    // violet-300

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger:      "#ff2d2d",
  dangerDark:  "#dc2626",
  dangerHover: "#ef4444",
  dangerSoft:  "#fca5a5",
  dangerLight: "#f87171",
  dangerDark2: "#b91c1c",
  dangerDarker:"#991b1b",

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success:      "#10b981",
  successSoft:  "#34d399",
  successGreen: "#22c55e",

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning:      "#f59e0b",
  warningLight: "#fbbf24",
  warningDark:  "#d97706",
  warningSoft:  "#fde68a",
  warningOrange:"#ea580c",

  // ── STATUS — INFO ────────────────────────────────────────────
  info:     DEFAULT_COLORS.primary,
  infoSoft: DEFAULT_COLORS.secondary,

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral:     "#6b7280",
  errorcolor:  "#ef4444",
  sucesscolor: "#22c55e",

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom: "#050d1a",
  loginBgTo:   "#16102e",

  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple:     "#a78bfa",
  accentCyan:       "#06b6d4",
  accentIndigo:     "#6366f1",
  accentPink:       "#ec4899",
  accentBlue:       "#38bdf8",
  accentTeal:       "#14b8a6",
  accentViolet:     "#8b5cf6",
  accentOrange:     "#f97316",
  accentYellow:     "#eab308",
  accentBlueDark:   "#0284c7",
  accentIndigoDark: "#4338ca",
  accentVioletDark: "#7c3aed",
  accentPurple600:  "#9333ea",

  // ── EXTENDED DARK SHADES ─────────────────────────────────────
  orangeDark700: "#c2410c",
  orangeDark800: "#9a3412",
  orangeDark900: "#7c2d12",
  amberDark900:  "#78350f",
  orangeDark950: "#451a03",
  stoneDark800:  "#0a1628",
  stoneDark900:  "#050d1a",

  // ── HOVER / ACTIVE / BUTTON ──────────────────────────────────
  hoverBackground:   DEFAULT_COLORS.surface,
  hoverBorder:       DEFAULT_COLORS.surface,
  hoverShadow:       "rgba(167, 139, 250, 0.55)",
  hoverShadowSpread: "0 0 20px",
  hoverText:         DEFAULT_COLORS.secondary,
  activeBackground:  DEFAULT_COLORS.surface,
  activeBorder:      DEFAULT_COLORS.surface,
  activeShadow:      "rgba(167, 139, 250, 0.45)",
  activeText:        DEFAULT_COLORS.primary,
  buttonBackground:  DEFAULT_COLORS.background,
  buttonIconColor:   DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient: "from-violet-500 to-violet-400",
  primaryShadow:   "shadow-violet-500/50",
};

// ===== FONT STYLES ===== (same across all themes)
const fontSmoothing = {
  fontFamily:          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering:       "optimizeLegibility",
};

export const fontStyles = {
  smoothing:    fontSmoothing,
  heading1:     { fontSize: "32px", fontWeight: "800", lineHeight: "1.1",  letterSpacing: "-0.02em",  ...fontSmoothing },
  heading2:     { fontSize: "24px", fontWeight: "700", lineHeight: "1.2",  letterSpacing: "-0.015em", ...fontSmoothing },
  heading3:     { fontSize: "20px", fontWeight: "700", lineHeight: "1.3",  letterSpacing: "-0.01em",  ...fontSmoothing },
  heading4:     { fontSize: "18px", fontWeight: "700", lineHeight: "1.4",  letterSpacing: "-0.005em", ...fontSmoothing },
  heading5:     { fontSize: "16px", fontWeight: "700", lineHeight: "1.4",  ...fontSmoothing },
  heading6:     { fontSize: "14px", fontWeight: "700", lineHeight: "1.5",  letterSpacing: "0.01em",   ...fontSmoothing },
  body:         { fontSize: "14px", lineHeight: "1.6", ...fontSmoothing },
  bodyLarge:    { fontSize: "16px", lineHeight: "1.6", ...fontSmoothing },
  bodySmall:    { fontSize: "12px", lineHeight: "1.5", ...fontSmoothing },
  caption:      { fontSize: "12px", lineHeight: "1.4", ...fontSmoothing },
  label:        { fontSize: "13px", fontWeight: "500", letterSpacing: "0.01em", ...fontSmoothing },
  button:       { fontSize: "14px", fontWeight: "600", letterSpacing: "0.02em", ...fontSmoothing },
  metric:       { fontSize: "24px", fontWeight: "700", fontVariantNumeric: "tabular-nums", lineHeight: "1.2", ...fontSmoothing },
  metricMedium: { fontSize: "30px", fontWeight: "700", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metric2xl:    { fontSize: "32px", fontWeight: "700", lineHeight: "1",   fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metricLarge:  { fontSize: "48px", fontWeight: "700", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metricXL:     { fontSize: "60px", fontWeight: "700", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  code: {
    fontSize:            "13px",
    fontFamily:          '"Fira Code", "Consolas", "Monaco", monospace',
    lineHeight:          "1.6",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
};

// ===== CHART COLORS =====
export const chartColors = {
  primary:     ["#8b5cf6", "#a78bfa", "#7c3aed", "#c4b5fd", "#ddd6fe"],
  severity: {
    critical: "#ef4444",
    high:     "#f97316",
    medium:   "#eab308",
    low:      "#8b5cf6",
    info:     "#8b5cf6",
  },
  series: [
    "#8b5cf6",
    "#a78bfa",
    "#7c3aed",
    "#06b6d4",
    "#ec4899",
    "#f59e0b",
    "#6366f1",
    "#14b8a6",
    "#c4b5fd",
    "#84cc16",
  ],
  categorical: [
    "#8b5cf6",
    "#a78bfa",
    "#06b6d4",
    "#22d3ee",
    "#ec4899",
    "#f472b6",
    "#6366f1",
    "#818cf8",
    "#c4b5fd",
    "#ddd6fe",
  ],
  gradients: {
    blue:   ["#8b5cf6", "#a78bfa"],
    cyan:   ["#7c3aed", "#8b5cf6"],
    orange: ["#f97316", "#fb923c"],
    pink:   ["#ec4899", "#f472b6"],
  },
  ui: {
    grid:          "rgba(167, 139, 250, 0.08)",
    axis:          "rgba(240, 236, 255, 0.30)",
    label:         "rgba(240, 236, 255, 0.60)",
    tooltip:       "rgba(5, 13, 26, 0.97)",
    tooltipBorder: "rgba(167, 139, 250, 0.50)",
    border:        "rgba(167, 139, 250, 0.15)",
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
      borderSubtle:    "rgba(167,139,250,0.08)",
      borderStrong:    "rgba(167,139,250,0.45)",
      borderAccent:    "rgba(167,139,250,0.20)",
      textPrimary:     DEFAULT_COLORS.textPrimary,
      textSecondary:   DEFAULT_COLORS.textSecondary,
      textMuted:       DEFAULT_COLORS.textMuted,
      textInverse:     DEFAULT_COLORS.textInverse,
      textAccent:      "#a78bfa",
      primaryFrom:     "#8b5cf6",
      primaryTo:       "#a78bfa",
      primary:         "#8b5cf6",
      accent:          "#a78bfa",
      nodeBg:          "#0e0a20",
      nodeStroke:      "#a78bfa",
      edge:            "#f0ecff",
      edgeGlow:        "#8b5cf6",
      hubRing1:        "#a78bfa",
      hubRing2:        "#7c3aed",
      hubCore:         "#060412",
      hubBorder:       "#8b5cf6",
      statBorder:      "#7c3aed",
    },
    light: {
      background:      "#f5f3ff",
      backgroundSoft:  "#ede9fe",
      surface:         "#ddd6fe",
      surfaceElevated: "#ffffff",
      border:          "#c4b5fd",
      borderSoft:      "rgba(139,92,246,0.08)",
      borderSubtle:    "rgba(139,92,246,0.10)",
      borderStrong:    "rgba(139,92,246,0.35)",
      borderAccent:    "rgba(139,92,246,0.18)",
      textPrimary:     "#1e0a4a",
      textSecondary:   "#3b1f7a",
      textMuted:       "#5b3fa0",
      textInverse:     "#f5f3ff",
      textAccent:      "#7c3aed",
      primary:         "#7c3aed",
      accent:          "#8b5cf6",
      nodeBg:          "#ede9fe",
      nodeStroke:      "#7c3aed",
      edge:            "#c4b5fd",
      edgeGlow:        "rgba(139,92,246,0.4)",
      hubRing1:        "#8b5cf6",
      hubRing2:        "#7c3aed",
      hubCore:         "#f5f3ff",
      hubBorder:       "#7c3aed",
      statBorder:      "#8b5cf6",
    },
    cyber: {
      background:      "#04020f",
      backgroundSoft:  "#080418",
      surface:         "#0e0824",
      surfaceElevated: "#140c30",
      border:          "#2a1060",
      borderSoft:      "rgba(189,0,255,0.06)",
      borderSubtle:    "rgba(189,0,255,0.10)",
      borderStrong:    "rgba(189,0,255,0.40)",
      borderAccent:    "rgba(189,0,255,0.20)",
      textPrimary:     "#f0ecff",
      textSecondary:   "rgba(240,236,255,0.55)",
      textMuted:       "rgba(240,236,255,0.30)",
      textInverse:     "#04020f",
      textAccent:      "#bd00ff",
      primary:         "#bd00ff",
      accent:          "#a78bfa",
      nodeBg:          "#060310",
      nodeStroke:      "#bd00ff",
      edge:            "#f0ecff",
      edgeGlow:        "#bd00ff",
      hubRing1:        "#bd00ff",
      hubRing2:        "#8b5cf6",
      hubCore:         "#04020f",
      hubBorder:       "#7c3aed",
      statBorder:      "#bd00ff",
    },
  },
  networkSankey: {
    hubGradientFrom:   "#16102e",
    hubGradientTo:     "#050d1a",
    panelGradientFrom: "#120e28",
    panelGradientTo:   "#030614",
    input:             "#a78bfa",
    inputGlow:         "#8b5cf6",
    output:            "#34d399",
    outputGlow:        "#059669",
    cyan:              "#06b6d4",
    textInput:         "#ddd6fe",
    textPanel:         "#f0ecff",
    textOutput:        "#d1fae5",
  },
  default: "#8b5cf6",
};

export const panelSummaryColors = {
  primary: "#8b5cf6",
  info:    "#06b6d4",
  warning: "#f97316",
  success: "#14b8a6",
  overlay: "#000000",
};

export const sidebarClasses = {
  primaryGradient: "from-violet-500 to-violet-400",
  primaryShadow:   "shadow-violet-500/50",
};

export { DEFAULT_COLORS };
export default sidebarColors;