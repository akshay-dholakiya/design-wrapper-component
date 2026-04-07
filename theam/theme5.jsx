// ============================================================
// theme6.jsx — Cyber Neon  (cyan-400 / magenta accent)
// ============================================================


const DEFAULT_COLORS = {
  background:      "#020a10",
  backgroundSoft:  "#061420",
  surface:         "#0a1f30",
  surfaceElevated: "#102840",
  border:          "#0a4a6e",
  borderSoft:      "rgba(0, 229, 255, 0.06)",
  textPrimary:     "#e0faff",
  textSecondary:   "rgba(224, 250, 255, 0.55)",
  textMuted:       "rgba(224, 250, 255, 0.30)",
  textInverse:     "#020a10",
  primary:         "#00e5ff",    // neon cyan
  secondary:       "#ff0090",    // hot magenta
};


const sidebarColors = {


  // ── BACKGROUNDS ──────────────────────────────────────────────
  background:       "#020a10",
  backgroundSoft:   "#061420",
  surface:          "#0a1f30",
  surfaceElevated:  "#102840",


  // ── EXTENDED SURFACES ────────────────────────────────────────
  surfaceMuted:     "#071828",
  surfaceTint:      "#0c2035",
  surfaceMutedDeep: "#040d18",
  surfaceTintDark:  "#061420",
  backgroundDeep:   "#010508",


  // ── BORDERS ──────────────────────────────────────────────────
  border:           "#0a4a6e",
  borderSoft:       "rgba(0, 229, 255, 0.06)",
  borderSubtle:     "rgba(0, 229, 255, 0.08)",
  borderStrong:     "rgba(0, 229, 255, 0.45)",
  borderAccent:     "rgba(0, 229, 255, 0.20)",


  // ── TEXT ─────────────────────────────────────────────────────
  textPrimary:      "#e0faff",
  textSecondary:    "rgba(224, 250, 255, 0.55)",
  textMuted:        "rgba(224, 250, 255, 0.30)",
  textInverse:      "#020a10",
  textAccent:       "#00e5ff",
  textDim:          "#0a4a6e",
  textDisabled:     "#083a55",
  textLighter:      "#99f6ff",    // cyan-200
  textOffWhite:     "#e0faff",
  textTertiary:     "#67e8f9",    // cyan-300


  // ── PRIMARY BRAND ────────────────────────────────────────────
  primaryFrom:      "#00e5ff",
  primaryTo:        "#00b4d8",
  primary:          "#00e5ff",
  accent:           "#ff0090",
  primaryMuted:     "#67e8f9",    // cyan-300


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
  info:             "#00e5ff",
  infoSoft:         "#67e8f9",


  // ── NEUTRAL / ERROR ──────────────────────────────────────────
  neutral:          "#6b7280",
  errorcolor:       "#ef4444",
  sucesscolor:      "#22c55e",


  // ── LOGIN PAGE ───────────────────────────────────────────────
  loginBgFrom:      "#020a10",
  loginBgTo:        "#0a1f30",


  // ── EXTENDED ACCENT PALETTE ──────────────────────────────────
  accentPurple:     "#a78bfa",
  accentCyan:       "#00e5ff",
  accentIndigo:     "#6366f1",
  accentPink:       "#ff0090",
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
  stoneDark800:     "#061420",
  stoneDark900:     "#020a10",


  // ── HOVER STATES ─────────────────────────────────────────────
  hoverBackground:   "#0a1f30",
  hoverBorder:       "#0a1f30",
  hoverShadow:       "rgba(0, 229, 255, 0.55)",
  hoverShadowSpread: "0 0 20px",
  hoverText:         "#00e5ff",


  // ── ACTIVE STATES ────────────────────────────────────────────
  activeBackground:  "#0a1f30",
  activeBorder:      "#0a1f30",
  activeShadow:      "rgba(0, 229, 255, 0.45)",
  activeText:        "#00e5ff",


  // ── BUTTON ───────────────────────────────────────────────────
  buttonBackground:  "#020a10",
  buttonIconColor:   "#e0faff",


  // ── TAILWIND CLASSES ─────────────────────────────────────────
  primaryGradient:   "from-cyan-400 to-cyan-300",
  primaryShadow:     "shadow-cyan-400/50",
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
  primary:     ["#00e5ff", "#67e8f9", "#00b4d8", "#99f6ff", "#cffafe"],
  severity:    { critical: "#ef4444", high: "#ff0090", medium: "#00e5ff", low: "#67e8f9", info: "#00b4d8" },
  series:      ["#00e5ff","#ff0090","#67e8f9","#a78bfa","#00b4d8","#f97316","#14b8a6","#38bdf8","#eab308","#84cc16"],
  categorical: ["#00e5ff","#ff0090","#67e8f9","#a78bfa","#00b4d8","#99f6ff","#8b5cf6","#38bdf8","#06b6d4","#22d3ee"],
  gradients: {
    cyan:    ["#00e5ff", "#00b4d8"],
    magenta: ["#ff0090", "#ff4da6"],
    blue:    ["#38bdf8", "#0284c7"],
    purple:  ["#8b5cf6", "#a78bfa"],
  },
  ui: {
    grid:          "rgba(0, 229, 255, 0.08)",
    axis:          "rgba(224, 250, 255, 0.30)",
    label:         "rgba(224, 250, 255, 0.60)",
    tooltip:       "rgba(2, 10, 16, 0.97)",
    tooltipBorder: "rgba(0, 229, 255, 0.50)",
    border:        "rgba(0, 229, 255, 0.15)",
  },
  edges: { critical: "#ef4444", high: "#ff0090", medium: "#00e5ff", low: "#67e8f9", default: "#00b4d8" },
  themes: {
    dark: {
      background:      "#020a10",
      backgroundSoft:  "#061420",
      surface:         "#0a1f30",
      surfaceElevated: "#102840",
      border:          "#0a4a6e",
      borderSoft:      "rgba(0, 229, 255, 0.06)",
      borderSubtle:    "rgba(0, 229, 255, 0.08)",
      borderStrong:    "rgba(0, 229, 255, 0.45)",
      borderAccent:    "rgba(0, 229, 255, 0.20)",
      textPrimary:     "#e0faff",
      textSecondary:   "rgba(224, 250, 255, 0.55)",
      textMuted:       "rgba(224, 250, 255, 0.30)",
      textInverse:     "#020a10",
      textAccent:      "#00e5ff",
      primaryFrom:     "#00e5ff",
      primaryTo:       "#00b4d8",
      primary:         "#00e5ff",
      accent:          "#ff0090",
      nodeBg:          "#030f1a",
      nodeStroke:      "#00e5ff",
      edge:            "#e0faff",
      edgeGlow:        "#00e5ff",
      hubRing1:        "#00e5ff",
      hubRing2:        "#ff0090",
      hubCore:         "#010508",
      hubBorder:       "#00e5ff",
      statBorder:      "#ff0090",
    },
    light: {
      background:      "#f0feff",
      backgroundSoft:  "#cffafe",
      surface:         "#a5f3fc",
      surfaceElevated: "#ffffff",
      border:          "#67e8f9",
      borderSoft:      "rgba(0, 180, 216, 0.08)",
      borderSubtle:    "rgba(0, 180, 216, 0.10)",
      borderStrong:    "rgba(0, 180, 216, 0.35)",
      borderAccent:    "rgba(0, 180, 216, 0.18)",
      textPrimary:     "#083344",
      textSecondary:   "#164e63",
      textMuted:       "#0e7490",
      textInverse:     "#f0feff",
      textAccent:      "#0891b2",
      primary:         "#0891b2",
      accent:          "#06b6d4",
      nodeBg:          "#cffafe",
      nodeStroke:      "#0891b2",
      edge:            "#a5f3fc",
      edgeGlow:        "rgba(8, 145, 178, 0.4)",
      hubRing1:        "#06b6d4",
      hubRing2:        "#ff0090",
      hubCore:         "#f0feff",
      hubBorder:       "#0891b2",
      statBorder:      "#06b6d4",
    },
    cyber: {
      background:      "#000d14",
      backgroundSoft:  "#001a26",
      surface:         "#002438",
      surfaceElevated: "#003050",
      border:          "#004a6e",
      borderSoft:      "rgba(0, 255, 255, 0.06)",
      borderSubtle:    "rgba(0, 255, 255, 0.10)",
      borderStrong:    "rgba(0, 255, 255, 0.50)",
      borderAccent:    "rgba(0, 255, 255, 0.22)",
      textPrimary:     "#dfffff",
      textSecondary:   "rgba(220, 255, 255, 0.55)",
      textMuted:       "rgba(220, 255, 255, 0.30)",
      textInverse:     "#000d14",
      textAccent:      "#00ffff",
      primary:         "#00ffff",
      accent:          "#ff0090",
      nodeBg:          "#000d14",
      nodeStroke:      "#00ffff",
      edge:            "#dfffff",
      edgeGlow:        "#00ffff",
      hubRing1:        "#00ffff",
      hubRing2:        "#ff0090",
      hubCore:         "#000508",
      hubBorder:       "#00e5ff",
      statBorder:      "#ff0090",
    },
  },
  networkSankey: {
    hubGradientFrom:   "#001a26",
    hubGradientTo:     "#000d14",
    panelGradientFrom: "#001520",
    panelGradientTo:   "#000a10",
    input:             "#00e5ff",
    inputGlow:         "#00b4d8",
    output:            "#34d399",
    outputGlow:        "#059669",
    cyan:              "#ff0090",
    textInput:         "#99f6ff",
    textPanel:         "#cffafe",
    textOutput:        "#d1fae5",
  },
  default: "#00e5ff",
};


export const panelSummaryColors = {
  primary: "#00e5ff",
  info:    "#ff0090",
  warning: "#f97316",
  success: "#14b8a6",
  overlay: "#000000",
};


export const sidebarClasses = {
  primaryGradient: "from-cyan-400 to-cyan-300",
  primaryShadow:   "shadow-cyan-400/50",
};


export { DEFAULT_COLORS };
export default sidebarColors;