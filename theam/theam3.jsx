// ============================================================
// theme3.jsx — Violet Purple  (violet-500 accent)
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
  background:       DEFAULT_COLORS.background,
  backgroundSoft:   DEFAULT_COLORS.backgroundSoft,
  surface:          DEFAULT_COLORS.surface,
  surfaceElevated:  DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:     "#110d22",
  surfaceTint:      "#130f28",
  surfaceMutedDeep: "#0b0818",
  surfaceTintDark:  "#0e0b1e",
  backgroundDeep:   "#030210",

  // ── BORDERS ──────────────────────────────────────────────────
  border:           DEFAULT_COLORS.border,
  borderSoft:       DEFAULT_COLORS.borderSoft,
  borderSubtle:     "rgba(167, 139, 250, 0.08)",
  borderStrong:     "rgba(167, 139, 250, 0.45)",
  borderAccent:     "rgba(167, 139, 250, 0.20)",

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:      DEFAULT_COLORS.textPrimary,
  textSecondary:    DEFAULT_COLORS.textSecondary,
  textMuted:        DEFAULT_COLORS.textMuted,
  textInverse:      DEFAULT_COLORS.textInverse,
  textAccent:       DEFAULT_COLORS.secondary,
  textDim:          "#3b2a6e",
  textDisabled:     "#2a1a52",
  textLighter:      "#ddd6fe",    // violet-200
  textOffWhite:     "#f0ecff",
  textTertiary:     "#c4b5fd",    // violet-300

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:      DEFAULT_COLORS.primary,
  primaryTo:        DEFAULT_COLORS.secondary,
  primary:          DEFAULT_COLORS.primary,
  accent:           DEFAULT_COLORS.secondary,
  primaryMuted:     "#c4b5fd",    // violet-300

  // ── STATUS — DANGER ──────────────────────────────────────────
  danger:           "#ff2d2d",
  dangerDark:       "#dc2626",
  dangerHover:      "#ef4444",
  dangerSoft:       "#fca5a5",
  dangerLight:      "#f87171",
  dangerDark2:      "#b91c1c",
  dangerDarker:     "#991b1b",

  // ── STATUS — SUCCESS ─────────────────────────────────────────
  success:          "#10b981",
  successSoft:      "#34d399",
  successGreen:     "#22c55e",

  // ── STATUS — WARNING ─────────────────────────────────────────
  warning:          "#f59e0b",
  warningLight:     "#fbbf24",
  warningDark:      "#d97706",
  warningSoft:      "#fde68a",
  warningOrange:    "#ea580c",

  // ── STATUS — INFO ────────────────────────────────────────────
  info:             DEFAULT_COLORS.primary,
  infoSoft:         DEFAULT_COLORS.secondary,

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral:          "#6b7280",
  errorcolor:       "#ef4444",
  sucesscolor:      "#22c55e",

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom:      "#050d1a",
  loginBgTo:        "#16102e",

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
  orangeDark700:    "#c2410c",
  orangeDark800:    "#9a3412",
  orangeDark900:    "#7c2d12",
  amberDark900:     "#78350f",
  orangeDark950:    "#451a03",
  stoneDark800:     "#0a0718",
  stoneDark900:     "#050412",

  // ── HOVER STATES ─────────────────────────────────────────────
  hoverBackground:   DEFAULT_COLORS.surface,
  hoverBorder:       DEFAULT_COLORS.surface,
  hoverShadow:       "rgba(167, 139, 250, 0.55)",
  hoverShadowSpread: "0 0 20px",
  hoverText:         DEFAULT_COLORS.secondary,

  // ── ACTIVE STATES ────────────────────────────────────────────
  activeBackground:  DEFAULT_COLORS.surface,
  activeBorder:      DEFAULT_COLORS.surface,
  activeShadow:      "rgba(167, 139, 250, 0.45)",
  activeText:        DEFAULT_COLORS.primary,

  // ── BUTTON ───────────────────────────────────────────────────
  buttonBackground:  DEFAULT_COLORS.background,
  buttonIconColor:   DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient:   "from-violet-500 to-violet-400",
  primaryShadow:     "shadow-violet-500/50",
};

// ===== FONT STYLES =====

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
  severity:    { critical: "#ef4444", high: "#8b5cf6", medium: "#a78bfa", low: "#8b5cf6", info: "#a78bfa" },
  series:      ["#8b5cf6","#a78bfa","#7c3aed","#c4b5fd","#6d28d9","#ef4444","#ec4899","#f59e0b","#14b8a6","#84cc16"],
  categorical: ["#8b5cf6","#a78bfa","#7c3aed","#c4b5fd","#6d28d9","#ddd6fe","#ef4444","#f87171","#ec4899","#f472b6"],
  gradients: {
    violet: ["#8b5cf6", "#a78bfa"],
    purple: ["#7c3aed", "#c4b5fd"],
    red:    ["#ef4444", "#f87171"],
    pink:   ["#ec4899", "#f472b6"],
  },
  ui: {
    grid:          "rgba(167, 139, 250, 0.08)",
    axis:          "rgba(240, 236, 255, 0.30)",
    label:         "rgba(240, 236, 255, 0.60)",
    tooltip:       "rgba(10, 7, 20, 0.97)",
    tooltipBorder: "rgba(167, 139, 250, 0.50)",
    border:        "rgba(167, 139, 250, 0.15)",
  },
  edges: { critical: "#ef4444", high: "#f87171", medium: "#fca5a5", low: "#fecaca", default: "#dc2626" },
  themes: {
    dark: {
      background:      DEFAULT_COLORS.background,
      backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
      surface:         DEFAULT_COLORS.surface,
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,
      border:          DEFAULT_COLORS.border,
      borderSoft:      DEFAULT_COLORS.borderSoft,
      borderSubtle:    "rgba(167, 139, 250, 0.08)",
      borderStrong:    "rgba(167, 139, 250, 0.45)",
      borderAccent:    "rgba(167, 139, 250, 0.20)",
      textPrimary:     DEFAULT_COLORS.textPrimary,
      textSecondary:   DEFAULT_COLORS.textSecondary,
      textMuted:       DEFAULT_COLORS.textMuted,
      textInverse:     DEFAULT_COLORS.textInverse,
      textAccent:      "#a78bfa",
      primaryFrom:     "#8b5cf6",
      primaryTo:       "#a78bfa",
      primary:         "#8b5cf6",
      accent:          "#a78bfa",
      nodeBg:          "#0d0a1c",
      nodeStroke:      "#a78bfa",
      edge:            "#f0ecff",
      edgeGlow:        "#8b5cf6",
      hubRing1:        "#a78bfa",
      hubRing2:        "#7c3aed",
      hubCore:         "#060410",
      hubBorder:       "#8b5cf6",
      statBorder:      "#7c3aed",
    },
    light: {
      background:      "#f5f3ff",
      backgroundSoft:  "#ede9fe",
      surface:         "#ddd6fe",
      surfaceElevated: "#ffffff",
      border:          "#c4b5fd",
      borderSoft:      "rgba(139, 92, 246, 0.08)",
      borderSubtle:    "rgba(139, 92, 246, 0.10)",
      borderStrong:    "rgba(139, 92, 246, 0.35)",
      borderAccent:    "rgba(139, 92, 246, 0.18)",
      textPrimary:     "#2e1065",
      textSecondary:   "#4c1d95",
      textMuted:       "#6d28d9",
      textInverse:     "#f5f3ff",
      textAccent:      "#7c3aed",
      primary:         "#7c3aed",
      accent:          "#8b5cf6",
      nodeBg:          "#ede9fe",
      nodeStroke:      "#7c3aed",
      edge:            "#c4b5fd",
      edgeGlow:        "rgba(139, 92, 246, 0.4)",
      hubRing1:        "#8b5cf6",
      hubRing2:        "#7c3aed",
      hubCore:         "#f5f3ff",
      hubBorder:       "#7c3aed",
      statBorder:      "#8b5cf6",
    },
    cyber: {
      background:      DEFAULT_COLORS.background,
      backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
      surface:         DEFAULT_COLORS.surface,
      surfaceElevated: "#130e28",
      border:          "#2a1a5e",
      borderSoft:      "rgba(192, 132, 252, 0.06)",
      borderSubtle:    "rgba(192, 132, 252, 0.10)",
      borderStrong:    "rgba(192, 132, 252, 0.40)",
      borderAccent:    "rgba(192, 132, 252, 0.20)",
      textPrimary:     "#f0ecff",
      textSecondary:   "rgba(240, 236, 255, 0.55)",
      textMuted:       "rgba(240, 236, 255, 0.30)",
      textInverse:     "#04020e",
      textAccent:      "#c084fc",
      primary:         "#c084fc",
      accent:          "#a855f7",
      nodeBg:          "#080514",
      nodeStroke:      "#c084fc",
      edge:            "#f0ecff",
      edgeGlow:        "#c084fc",
      hubRing1:        "#c084fc",
      hubRing2:        "#a855f7",
      hubCore:         "#040210",
      hubBorder:       "#8b5cf6",
      statBorder:      "#c084fc",
    },
  },
  networkSankey: {
    hubGradientFrom:   "#120a2e",
    hubGradientTo:     "#0a0718",
    panelGradientFrom: "#0e0820",
    panelGradientTo:   "#070412",
    input:             "#a78bfa",
    inputGlow:         "#8b5cf6",
    output:            "#34d399",
    outputGlow:        "#059669",
    cyan:              "#7c3aed",
    textInput:         "#ddd6fe",
    textPanel:         "#e8e4ff",
    textOutput:        "#d1fae5",
  },
  default: "#8b5cf6",
};

export const panelSummaryColors = {
  primary: "#8b5cf6",
  info:    "#7c3aed",
  warning: "#a78bfa",
  success: "#14b8a6",
  overlay: "#000000",
};

export const sidebarClasses = {
  primaryGradient: "from-violet-500 to-violet-400",
  primaryShadow:   "shadow-violet-500/50",
};

export { DEFAULT_COLORS };
export default sidebarColors;