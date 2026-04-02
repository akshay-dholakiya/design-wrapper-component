// ============================================================
// theme5.jsx — Rose Pink  (rose-500 accent)
// ============================================================

 const DEFAULT_COLORS = {
  background:      "#1a0510",
  backgroundSoft:  "#250a18",
  surface:         "#381228",
  surfaceElevated: "#4a1a36",
  border:          "#7a1f4e",
  borderSoft:      "rgba(251, 113, 133, 0.06)",
  textPrimary:     "#fff0f5",
  textSecondary:   "rgba(255, 240, 245, 0.55)",
  textMuted:       "rgba(255, 240, 245, 0.30)",
  textInverse:     "#1a0510",
  primary:         "#f43f5e",    // rose-500
  secondary:       "#fb7185",    // rose-400
};

const sidebarColors = {

  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:       DEFAULT_COLORS.background,
  backgroundSoft:   DEFAULT_COLORS.backgroundSoft,
  surface:          DEFAULT_COLORS.surface,
  surfaceElevated:  DEFAULT_COLORS.surfaceElevated,

  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:     "#2e0e1e",
  surfaceTint:      "#33122a",
  surfaceMutedDeep: "#1e0816",
  surfaceTintDark:  "#250a18",
  backgroundDeep:   "#0d0208",

  // ── BORDERS ──────────────────────────────────────────────────
  border:           DEFAULT_COLORS.border,
  borderSoft:       DEFAULT_COLORS.borderSoft,
  borderSubtle:     "rgba(251, 113, 133, 0.08)",
  borderStrong:     "rgba(251, 113, 133, 0.45)",
  borderAccent:     "rgba(251, 113, 133, 0.20)",

  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:      DEFAULT_COLORS.textPrimary,
  textSecondary:    DEFAULT_COLORS.textSecondary,
  textMuted:        DEFAULT_COLORS.textMuted,
  textInverse:      DEFAULT_COLORS.textInverse,
  textAccent:       DEFAULT_COLORS.secondary,
  textDim:          "#7a1f4e",
  textDisabled:     "#55153a",
  textLighter:      "#fecdd3",    // rose-200
  textOffWhite:     "#fff0f5",
  textTertiary:     "#fda4af",    // rose-300

  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:      DEFAULT_COLORS.primary,
  primaryTo:        DEFAULT_COLORS.secondary,
  primary:          DEFAULT_COLORS.primary,
  accent:           DEFAULT_COLORS.secondary,
  primaryMuted:     "#fda4af",    // rose-300

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
  loginBgFrom:      "#1a0510",
  loginBgTo:        "#381228",

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
  stoneDark800:     "#250a18",
  stoneDark900:     "#1a0510",

  // ── HOVER STATES ─────────────────────────────────────────────
  hoverBackground:   DEFAULT_COLORS.surface,
  hoverBorder:       DEFAULT_COLORS.surface,
  hoverShadow:       "rgba(251, 113, 133, 0.55)",
  hoverShadowSpread: "0 0 20px",
  hoverText:         DEFAULT_COLORS.secondary,

  // ── ACTIVE STATES ────────────────────────────────────────────
  activeBackground:  DEFAULT_COLORS.surface,
  activeBorder:      DEFAULT_COLORS.surface,
  activeShadow:      "rgba(251, 113, 133, 0.45)",
  activeText:        DEFAULT_COLORS.primary,

  // ── BUTTON ───────────────────────────────────────────────────
  buttonBackground:  DEFAULT_COLORS.background,
  buttonIconColor:   DEFAULT_COLORS.textPrimary,

  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient:   "from-rose-500 to-rose-400",
  primaryShadow:     "shadow-rose-500/50",
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
  primary:     ["#f43f5e", "#fb7185", "#e11d48", "#fda4af", "#fecdd3"],
  severity:    { critical: "#ef4444", high: "#f43f5e", medium: "#fb7185", low: "#f43f5e", info: "#fb7185" },
  series:      ["#f43f5e","#fb7185","#e11d48","#fda4af","#be123c","#f97316","#a78bfa","#06b6d4","#14b8a6","#84cc16"],
  categorical: ["#f43f5e","#fb7185","#e11d48","#fda4af","#be123c","#fecdd3","#ef4444","#f87171","#ec4899","#f472b6"],
  gradients: {
    rose:   ["#f43f5e", "#fb7185"],
    pink:   ["#ec4899", "#f472b6"],
    red:    ["#ef4444", "#f87171"],
    purple: ["#8b5cf6", "#a78bfa"],
  },
  ui: {
    grid:          "rgba(251, 113, 133, 0.08)",
    axis:          "rgba(255, 240, 245, 0.30)",
    label:         "rgba(255, 240, 245, 0.60)",
    tooltip:       "rgba(26, 5, 16, 0.97)",
    tooltipBorder: "rgba(251, 113, 133, 0.50)",
    border:        "rgba(251, 113, 133, 0.15)",
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
      borderSubtle:    "rgba(251, 113, 133, 0.08)",
      borderStrong:    "rgba(251, 113, 133, 0.45)",
      borderAccent:    "rgba(251, 113, 133, 0.20)",
      textPrimary:     DEFAULT_COLORS.textPrimary,
      textSecondary:   DEFAULT_COLORS.textSecondary,
      textMuted:       DEFAULT_COLORS.textMuted,
      textInverse:     DEFAULT_COLORS.textInverse,
      textAccent:      "#fb7185",
      primaryFrom:     "#f43f5e",
      primaryTo:       "#fb7185",
      primary:         "#f43f5e",
      accent:          "#fb7185",
      nodeBg:          "#210614",
      nodeStroke:      "#fb7185",
      edge:            "#fff0f5",
      edgeGlow:        "#f43f5e",
      hubRing1:        "#fb7185",
      hubRing2:        "#ec4899",
      hubCore:         "#120310",
      hubBorder:       "#f43f5e",
      statBorder:      "#ec4899",
    },
    light: {
      background:      "#fff1f2",
      backgroundSoft:  "#ffe4e6",
      surface:         "#fecdd3",
      surfaceElevated: "#ffffff",
      border:          "#fda4af",
      borderSoft:      "rgba(244, 63, 94, 0.08)",
      borderSubtle:    "rgba(244, 63, 94, 0.10)",
      borderStrong:    "rgba(244, 63, 94, 0.35)",
      borderAccent:    "rgba(244, 63, 94, 0.18)",
      textPrimary:     "#4c0519",
      textSecondary:   "#881337",
      textMuted:       "#be123c",
      textInverse:     "#fff1f2",
      textAccent:      "#e11d48",
      primary:         "#e11d48",
      accent:          "#f43f5e",
      nodeBg:          "#ffe4e6",
      nodeStroke:      "#e11d48",
      edge:            "#fda4af",
      edgeGlow:        "rgba(244, 63, 94, 0.4)",
      hubRing1:        "#f43f5e",
      hubRing2:        "#ec4899",
      hubCore:         "#fff1f2",
      hubBorder:       "#e11d48",
      statBorder:      "#f43f5e",
    },
    cyber: {
      background:      "#120310",
      backgroundSoft:  "#1e0518",
      surface:         "#2a0822",
      surfaceElevated: "#380a2e",
      border:          "#6d1245",
      borderSoft:      "rgba(255, 0, 128, 0.06)",
      borderSubtle:    "rgba(255, 0, 128, 0.10)",
      borderStrong:    "rgba(255, 0, 128, 0.40)",
      borderAccent:    "rgba(255, 0, 128, 0.20)",
      textPrimary:     "#fff0f5",
      textSecondary:   "rgba(255, 240, 245, 0.55)",
      textMuted:       "rgba(255, 240, 245, 0.30)",
      textInverse:     "#060108",
      textAccent:      "#ff0080",
      primary:         "#ff0080",
      accent:          "#ff4da6",
      nodeBg:          "#0c0210",
      nodeStroke:      "#ff0080",
      edge:            "#fff0f5",
      edgeGlow:        "#ff0080",
      hubRing1:        "#ff0080",
      hubRing2:        "#ff4da6",
      hubCore:         "#060108",
      hubBorder:       "#f43f5e",
      statBorder:      "#ff0080",
    },
  },
  networkSankey: {
    hubGradientFrom:   "#280818",
    hubGradientTo:     "#160410",
    panelGradientFrom: "#1e0614",
    panelGradientTo:   "#10030c",
    input:             "#fb7185",
    inputGlow:         "#f43f5e",
    output:            "#34d399",
    outputGlow:        "#059669",
    cyan:              "#ec4899",
    textInput:         "#fecdd3",
    textPanel:         "#ffe0e8",
    textOutput:        "#d1fae5",
  },
  default: "#f43f5e",
};

export const panelSummaryColors = {
  primary: "#f43f5e",
  info:    "#ec4899",
  warning: "#f97316",
  success: "#14b8a6",
  overlay: "#000000",
};

export const sidebarClasses = {
  primaryGradient: "from-rose-500 to-rose-400",
  primaryShadow:   "shadow-rose-500/50",
};

export { DEFAULT_COLORS };
export default sidebarColors;