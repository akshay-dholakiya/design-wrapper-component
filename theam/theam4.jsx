// ============================================================
// theme4.jsx — Emerald Green  (emerald-500 accent)
// ============================================================

const DEFAULT_COLORS = {
  background:      "#050d1a",
  backgroundSoft:  "#091710",
  surface:         "#0f1f38",
  surfaceElevated: "#003320",
  border:          "#005c2e",
  borderSoft:      "rgba(52, 211, 153, 0.06)",
  textPrimary:     "#edfff6",
  textSecondary:   "rgba(237, 255, 246, 0.55)",
  textMuted:       "rgba(237, 255, 246, 0.30)",
  textInverse:     "#00110a",
  primary:         "#10b981",    // emerald-500
  secondary:       "#34d399",    // emerald-400
};

const sidebarColors = {

  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:       "#050d1a",
  backgroundSoft:   "#091710",
  surface:          "#0f1f38",
  surfaceElevated:  "#003320",

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:     "#001a0e",
  surfaceTint:      "#001f12",
  surfaceMutedDeep: "#000f08",
  surfaceTintDark:  "#001408",
  backgroundDeep:   "#000402",

  // ── BORDERS ──────────────────────────────────────────────────
  border:           "#005c2e",
  borderSoft:       "rgba(52, 211, 153, 0.06)",
  borderSubtle:     "rgba(52, 211, 153, 0.08)",
  borderStrong:     "rgba(52, 211, 153, 0.45)",
  borderAccent:     "rgba(52, 211, 153, 0.20)",

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:      "#edfff6",
  textSecondary:    "rgba(237, 255, 246, 0.55)",
  textMuted:        "rgba(237, 255, 246, 0.30)",
  textInverse:      "#00110a",
  textAccent:       "#34d399",
  textDim:          "#005c2e",
  textDisabled:     "#003d1f",
  textLighter:      "#a7f3d0",    // emerald-200
  textOffWhite:     "#edfff6",
  textTertiary:     "#6ee7b7",    // emerald-300

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:      "#10b981",
  primaryTo:        "#34d399",
  primary:          "#10b981",
  accent:           "#34d399",
  primaryMuted:     "#6ee7b7",    // emerald-300

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
  info:             "#10b981",
  infoSoft:         "#34d399",

  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral:          "#6b7280",
  errorcolor:       "#ef4444",
  sucesscolor:      "#22c55e",

  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom:      "#050d1a",
  loginBgTo:        "#003320",

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
  stoneDark800:     "#001408",
  stoneDark900:     "#000904",

  // ── HOVER STATES ─────────────────────────────────────────────
  hoverBackground:   "#0f1f38",
  hoverBorder:       "#0f1f38",
  hoverShadow:       "rgba(52, 211, 153, 0.55)",
  hoverShadowSpread: "0 0 20px",
  hoverText:         "#34d399",

  // ── ACTIVE STATES ────────────────────────────────────────────
  activeBackground:  "#0f1f38",
  activeBorder:      "#0f1f38",
  activeShadow:      "rgba(52, 211, 153, 0.45)",
  activeText:        "#10b981",

  // ── BUTTON ───────────────────────────────────────────────────
  buttonBackground:  "#050d1a",
  buttonIconColor:   "#edfff6",

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient:   "from-emerald-500 to-emerald-400",
  primaryShadow:     "shadow-emerald-500/50",
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
  primary:     ["#10b981", "#34d399", "#059669", "#6ee7b7", "#a7f3d0"],
  severity:    { critical: "#ef4444", high: "#10b981", medium: "#34d399", low: "#10b981", info: "#34d399" },
  series:      ["#10b981","#34d399","#059669","#6ee7b7","#047857","#ef4444","#ec4899","#f59e0b","#a78bfa","#84cc16"],
  categorical: ["#10b981","#34d399","#059669","#6ee7b7","#047857","#a7f3d0","#ef4444","#f87171","#ec4899","#f472b6"],
  gradients: {
    orange: ["#10b981", "#34d399"],
    amber:  ["#059669", "#6ee7b7"],
    red:    ["#ef4444", "#f87171"],
    pink:   ["#ec4899", "#f472b6"],
  },
  ui: {
    grid:          "rgba(52, 211, 153, 0.08)",
    axis:          "rgba(237, 255, 246, 0.30)",
    label:         "rgba(237, 255, 246, 0.60)",
    tooltip:       "rgba(0, 17, 10, 0.97)",
    tooltipBorder: "rgba(52, 211, 153, 0.50)",
    border:        "rgba(52, 211, 153, 0.15)",
  },
  edges: { critical: "#ef4444", high: "#f87171", medium: "#fca5a5", low: "#fecaca", default: "#dc2626" },
  themes: {
    dark: {
      background:      "#050d1a",
      backgroundSoft:  "#091710",
      surface:         "#0f1f38",
      surfaceElevated: "#003320",
      border:          "#005c2e",
      borderSoft:      "rgba(52, 211, 153, 0.06)",
      borderSubtle:    "rgba(52, 211, 153, 0.08)",
      borderStrong:    "rgba(52, 211, 153, 0.45)",
      borderAccent:    "rgba(52, 211, 153, 0.20)",
      textPrimary:     "#edfff6",
      textSecondary:   "rgba(237, 255, 246, 0.55)",
      textMuted:       "rgba(237, 255, 246, 0.30)",
      textInverse:     "#00110a",
      textAccent:      "#34d399",
      primaryFrom:     "#10b981",
      primaryTo:       "#34d399",
      primary:         "#10b981",
      accent:          "#34d399",
      nodeBg:          "#000f09",
      nodeStroke:      "#34d399",
      edge:            "#edfff6",
      edgeGlow:        "#10b981",
      hubRing1:        "#34d399",
      hubRing2:        "#059669",
      hubCore:         "#000804",
      hubBorder:       "#10b981",
      statBorder:      "#059669",
    },
    light: {
      background:      "#ecfdf5",
      backgroundSoft:  "#d1fae5",
      surface:         "#a7f3d0",
      surfaceElevated: "#ffffff",
      border:          "#6ee7b7",
      borderSoft:      "rgba(16, 185, 129, 0.08)",
      borderSubtle:    "rgba(16, 185, 129, 0.10)",
      borderStrong:    "rgba(16, 185, 129, 0.35)",
      borderAccent:    "rgba(16, 185, 129, 0.18)",
      textPrimary:     "#022c22",
      textSecondary:   "#064e3b",
      textMuted:       "#047857",
      textInverse:     "#ecfdf5",
      textAccent:      "#059669",
      primary:         "#059669",
      accent:          "#10b981",
      nodeBg:          "#d1fae5",
      nodeStroke:      "#059669",
      edge:            "#6ee7b7",
      edgeGlow:        "rgba(16, 185, 129, 0.4)",
      hubRing1:        "#10b981",
      hubRing2:        "#059669",
      hubCore:         "#ecfdf5",
      hubBorder:       "#059669",
      statBorder:      "#10b981",
    },
    cyber: {
      background:      "#050d1a",
      backgroundSoft:  "#091710",
      surface:         "#0f1f38",
      surfaceElevated: "#001f12",
      border:          "#003d1a",
      borderSoft:      "rgba(74, 222, 128, 0.06)",
      borderSubtle:    "rgba(74, 222, 128, 0.10)",
      borderStrong:    "rgba(74, 222, 128, 0.40)",
      borderAccent:    "rgba(74, 222, 128, 0.20)",
      textPrimary:     "#edfff6",
      textSecondary:   "rgba(237, 255, 246, 0.55)",
      textMuted:       "rgba(237, 255, 246, 0.30)",
      textInverse:     "#000a05",
      textAccent:      "#4ade80",
      primary:         "#4ade80",
      accent:          "#22c55e",
      nodeBg:          "#000d07",
      nodeStroke:      "#4ade80",
      edge:            "#edfff6",
      edgeGlow:        "#4ade80",
      hubRing1:        "#4ade80",
      hubRing2:        "#22c55e",
      hubCore:         "#000604",
      hubBorder:       "#10b981",
      statBorder:      "#4ade80",
    },
  },
  networkSankey: {
    hubGradientFrom:   "#002e14",
    hubGradientTo:     "#00180a",
    panelGradientFrom: "#002010",
    panelGradientTo:   "#000f07",
    input:             "#34d399",
    inputGlow:         "#10b981",
    output:            "#34d399",
    outputGlow:        "#059669",
    cyan:              "#059669",
    textInput:         "#a7f3d0",
    textPanel:         "#c6ffe6",
    textOutput:        "#d1fae5",
  },
  default: "#10b981",
};

export const panelSummaryColors = {
  primary: "#10b981",
  info:    "#059669",
  warning: "#34d399",
  success: "#14b8a6",
  overlay: "#000000",
};

export const sidebarClasses = {
  primaryGradient: "from-emerald-500 to-emerald-400",
  primaryShadow:   "shadow-emerald-500/50",
};

export { DEFAULT_COLORS };
export default sidebarColors;