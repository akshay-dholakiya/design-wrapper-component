  // // ===== SIDEBAR COLOR PALETTE =====
  // // Never change
  //
  // // ============================================================
  // // colors.js
  // // ============================================================
  //
  // // ── BASE TOKENS (shared defaults, no accent) ─────────────────
  // const DEFAULT_COLORS = {
  //   background: "#09090b",
  //   backgroundSoft: "#111111",          // ✅ fixed: was "backgroundsoft"
  //   surface: "#1a1a1a",
  //   surfaceElevated: "#222222",          // ✅ fixed: was "#161638" (indigo bleed — neutral value)
  //
  //   border: "#27272a",
  //   borderSoft: "rgba(255, 255, 255, 0.05)",
  //
  //   textPrimary: "#f1f5f9",
  //   textSecondary: "rgba(241, 245, 249, 0.55)",
  //   textMuted: "rgba(241, 245, 249, 0.30)",
  //   textInverse: "#07071a",
  // };
  //
  //
  // // ── SIDEBAR / THEME COLORS (accent-aware) ────────────────────
  // const sidebarColors = {
  //
  //   // ── BACKGROUNDS ────────────────────────────────────────────
  //   background: DEFAULT_COLORS.background,
  //   backgroundSoft: DEFAULT_COLORS.backgroundSoft,   // ✅ fixed camelCase
  //   surface: DEFAULT_COLORS.surface,
  //   surfaceElevated: DEFAULT_COLORS.surfaceElevated,
  //
  //   // ── BORDERS ────────────────────────────────────────────────
  //   border: DEFAULT_COLORS.border,            // ✅ fixed: was defined twice
  //   borderSoft: DEFAULT_COLORS.borderSoft,
  //   borderSubtle: "rgba(255, 255, 255, 0.06)",
  //   borderStrong: "rgba(59, 130, 246, 0.40)",       // accent-aware strong border
  //   borderAccent: "rgba(59, 130, 246, 0.20)",
  //
  //   // ── TEXT ───────────────────────────────────────────────────
  //   textPrimary: DEFAULT_COLORS.textPrimary,
  //   textSecondary: DEFAULT_COLORS.textSecondary,
  //   textMuted: DEFAULT_COLORS.textMuted,
  //   textInverse: DEFAULT_COLORS.textInverse,
  //   textAccent: "#60a5fa",
  //
  //   // ── PRIMARY BRAND (Electric Blue) ──────────────────────────
  //   primaryFrom: "#3b82f6",   // blue-500
  //   primaryTo: "#60a5fa",   // blue-400
  //   primary: "#3b82f6",
  //   accent: "#60a5fa",
  //
  //   // ── HOVER STATES ───────────────────────────────────────────
  //   hoverBackground: DEFAULT_COLORS.surface,         // ✅ fixed: was string "DEFAULT_COLORS.surface"
  //   hoverBorder: DEFAULT_COLORS.surface,         // ✅ fixed: was string "DEFAULT_COLORS.surface"
  //   hoverShadow: "rgba(59, 130, 246, 0.60)",
  //   hoverShadowSpread: "0 0 20px",
  //   hoverText: "#60a5fa",
  //
  //   // ── ACTIVE / SELECTED STATES ───────────────────────────────
  //   activeBackground: DEFAULT_COLORS.surface,         // ✅ fixed: was string "DEFAULT_COLORS.surface"
  //   activeBorder: DEFAULT_COLORS.surface,         // ✅ fixed: was string "DEFAULT_COLORS.surface"
  //   activeShadow: "rgba(59, 130, 246, 0.50)",
  //   activeText: "#3b82f6",
  //
  //   // ── BUTTON ─────────────────────────────────────────────────
  //   buttonBackground: DEFAULT_COLORS.background,
  //   buttonIconColor: DEFAULT_COLORS.textPrimary,
  //
  //   // ── TAILWIND ───────────────────────────────────────────────
  //   primaryGradient: "from-blue-500 to-blue-400",
  //   primaryShadow: "shadow-blue-500/50",
  // };
  //
  //
  // // ===== FONT STYLES =====
  //
  // const fontSmoothing = {
  //   fontFamily:
  //     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  //   WebkitFontSmoothing: "antialiased",
  //   MozOsxFontSmoothing: "grayscale",
  //   textRendering: "optimizeLegibility",
  // };
  //
  // export const fontStyles = {
  //   smoothing: fontSmoothing,
  //
  //   heading1: {
  //     fontSize: "32px",
  //     fontWeight: "800",
  //     lineHeight: "1.1",
  //     letterSpacing: "-0.02em",
  //     ...fontSmoothing,
  //   },
  //
  //   heading2: {
  //     fontSize: "24px",
  //     fontWeight: "700",
  //     lineHeight: "1.2",
  //     letterSpacing: "-0.015em",
  //     ...fontSmoothing,
  //   },
  //
  //   heading3: {
  //     fontSize: "20px",
  //     fontWeight: "700",
  //     lineHeight: "1.3",
  //     letterSpacing: "-0.01em",
  //     ...fontSmoothing,
  //   },
  //
  //   heading4: {
  //     fontSize: "18px",
  //     fontWeight: "700",
  //     lineHeight: "1.4",
  //     letterSpacing: "-0.005em",
  //     ...fontSmoothing,
  //   },
  //
  //   heading5: {
  //     fontSize: "16px",
  //     fontWeight: "700",
  //     lineHeight: "1.4",
  //     letterSpacing: "0em",
  //     ...fontSmoothing,
  //   },
  //
  //   heading6: {
  //     fontSize: "14px",
  //     fontWeight: "700",
  //     lineHeight: "1.5",
  //     letterSpacing: "0.01em",
  //     ...fontSmoothing,
  //   },
  //
  //   body: {
  //     fontSize: "14px",
  //     fontWeight: "400",
  //     lineHeight: "1.6",
  //     ...fontSmoothing,
  //   },
  //
  //   bodyLarge: {
  //     fontSize: "16px",
  //     fontWeight: "400",
  //     lineHeight: "1.6",
  //     ...fontSmoothing,
  //   },
  //
  //   bodySmall: {
  //     fontSize: "12px",
  //     fontWeight: "400",
  //     lineHeight: "1.5",
  //     ...fontSmoothing,
  //   },
  //
  //   caption: {
  //     fontSize: "12px",
  //     fontWeight: "400",
  //     lineHeight: "1.4",
  //     ...fontSmoothing,
  //   },
  //
  //   label: {
  //     fontSize: "13px",
  //     fontWeight: "500",
  //     letterSpacing: "0.01em",
  //     ...fontSmoothing,
  //   },
  //
  //   button: {
  //     fontSize: "14px",
  //     fontWeight: "600",
  //     letterSpacing: "0.02em",
  //     ...fontSmoothing,
  //   },
  //
  //   metric: {
  //     fontSize: "24px",
  //     fontWeight: "700",
  //     lineHeight: "1.2",
  //     fontVariantNumeric: "tabular-nums",
  //     ...fontSmoothing,
  //   },
  //
  //   // 30px metric — used in medium-sized KPI / stat cards
  //   metricMedium: {
  //     fontSize: "30px",
  //     fontWeight: "700",
  //     lineHeight: "1.1",
  //     fontVariantNumeric: "tabular-nums",
  //     ...fontSmoothing,
  //   },
  //
  //   // 32px metric — used in severity-card count values
  //   metric2xl: {
  //     fontSize: "32px",
  //     fontWeight: "700",
  //     lineHeight: "1",
  //     fontVariantNumeric: "tabular-nums",
  //     ...fontSmoothing,
  //   },
  //
  //   metricLarge: {
  //     fontSize: "48px",
  //     fontWeight: "700",
  //     lineHeight: "1.1",
  //     fontVariantNumeric: "tabular-nums",
  //     ...fontSmoothing,
  //   },
  //
  //   metricXL: {
  //     fontSize: "60px",
  //     fontWeight: "700",
  //     lineHeight: "1.1",
  //     fontVariantNumeric: "tabular-nums",
  //     ...fontSmoothing,
  //   },
  //
  //   code: {
  //     fontSize: "13px",
  //     fontWeight: "400",
  //     fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
  //     lineHeight: "1.6",
  //     WebkitFontSmoothing: "antialiased",
  //     MozOsxFontSmoothing: "grayscale",
  //   },
  // };
  //
  // // ===== CHART COLOR PALETTE =====
  //
  // export const chartColors = {
  //   // 🔵 Primary chart colors (BLUE)
  //   primary: ["#3b82f6", "#60a5fa", "#2563eb", "#93c5fd", "#dbeafe"],
  //
  //   severity: {
  //     critical: "#ef4444",
  //     high: "#f97316",
  //     medium: "#eab308",
  //     low: "#3b82f6",
  //     info: "#3b82f6",
  //   },
  //
  //   series: [
  //     "#3b82f6",
  //     "#8b5cf6",
  //     "#f59e0b",
  //     "#ec4899",
  //     "#06b6d4",
  //     "#84cc16",
  //     "#f97316",
  //     "#6366f1",
  //     "#14b8a6",
  //     "#60a5fa",
  //   ],
  //
  //   categorical: [
  //     "#3b82f6",
  //     "#60a5fa",
  //     "#8b5cf6",
  //     "#a78bfa",
  //     "#ec4899",
  //     "#f472b6",
  //     "#f59e0b",
  //     "#fbbf24",
  //     "#6366f1",
  //     "#818cf8",
  //   ],
  //
  //   gradients: {
  //     blue: ["#3b82f6", "#60a5fa"],
  //     purple: ["#8b5cf6", "#a78bfa"],
  //     orange: ["#f97316", "#fb923c"],
  //     pink: ["#ec4899", "#f472b6"],
  //   },
  //
  //   ui: {
  //     grid: "rgba(255, 255, 255, 0.1)",
  //     axis: "rgba(255, 255, 255, 0.3)",
  //     label: "rgba(255, 255, 255, 0.6)",
  //     tooltip: "rgba(0, 0, 0, 0.95)",
  //     tooltipBorder: "rgba(59, 130, 246, 0.5)",
  //     border: "rgba(255, 255, 255, 0.2)",
  //   },
  //
  //   edges: {
  //     critical: "#ef4444",
  //     high: "#f87171",
  //     medium: "#fca5a5",
  //     low: "#fecaca",
  //     default: "#dc2626",
  //   },
  //
  //   themes: {
  //     dark: {
  //       // ── BACKGROUNDS ────────────────────────────────────────────
  //       background: DEFAULT_COLORS.background,
  //       backgroundSoft: DEFAULT_COLORS.backgroundSoft,   // ✅ fixed camelCase
  //       surface: DEFAULT_COLORS.surface,
  //       surfaceElevated: DEFAULT_COLORS.surfaceElevated,
  //
  //       // ── BORDERS ────────────────────────────────────────────────
  //       border: DEFAULT_COLORS.border,            // ✅ fixed: was defined twice
  //       borderSoft: DEFAULT_COLORS.borderSoft,
  //       borderSubtle: "rgba(255, 255, 255, 0.06)",
  //       borderStrong: "rgba(59, 130, 246, 0.40)",       // accent-aware strong border
  //       borderAccent: "rgba(59, 130, 246, 0.20)",
  //
  //       // ── TEXT ───────────────────────────────────────────────────
  //       textPrimary: DEFAULT_COLORS.textPrimary,
  //       textSecondary: DEFAULT_COLORS.textSecondary,
  //       textMuted: DEFAULT_COLORS.textMuted,
  //       textInverse: DEFAULT_COLORS.textInverse,
  //       textAccent: "#60a5fa",
  //
  //       // ── PRIMARY BRAND (Electric Blue) ──────────────────────────
  //       primaryFrom: "#3b82f6",   // blue-500
  //       primaryTo: "#60a5fa",   // blue-400
  //       primary: "#3b82f6",
  //       accent: "#60a5fa",
  //       nodeBg: "#0a1628",
  //       nodeStroke: "#38bdf8",
  //       edge: "#ffffff",
  //       edgeGlow: "#38bdf8",
  //       hubRing1: "#60a5fa",
  //       hubRing2: "#22d3ee",
  //       hubCore: "#0b1220",
  //       hubBorder: "#3b82f6",
  //       statBorder: "#06b6d4",
  //     },
  //     light: {
  //       background: "transparent",
  //       surface: "#f8fafc",
  //       primary: "#0284c7",
  //       secondary: "#6366f1",
  //       accent: "#0891b2",
  //       textPrimary: "#0f172a",
  //       textSecondary: "#475569",
  //       nodeBg: "#e0f2fe",
  //       nodeStroke: "#0284c7",
  //       edge: "#ffffff",
  //       edgeGlow: "#0891b2",
  //       hubRing1: "#0284c7",
  //       hubRing2: "#0891b2",
  //       hubCore: "#dbeafe",
  //       hubBorder: "#3b82f6",
  //       statBorder: "#0891b2",
  //     },
  //     cyber: {
  //       background: "transparent",
  //       surface: "#0d0d1a",
  //       primary: "#00ff88",
  //       secondary: "#7c3aed",
  //       accent: "#00d4ff",
  //       textPrimary: "#e2e8f0",
  //       textSecondary: "#64748b",
  //       nodeBg: "#0a0a1a",
  //       nodeStroke: "#00ff88",
  //       edge: "#ffffff",
  //       edgeGlow: "#00d4ff",
  //       hubRing1: "#00ff88",
  //       hubRing2: "#00d4ff",
  //       hubCore: "#050510",
  //       hubBorder: "#7c3aed",
  //       statBorder: "#00d4ff",
  //     },
  //   },
  //
  //   networkSankey: {
  //     hubGradientFrom: "#0c1a2e",
  //     hubGradientTo: "#050a14",
  //     panelGradientFrom: "#0b1520",
  //     panelGradientTo: "#060b11",
  //     input: "#a78bfa",
  //     inputGlow: "#7c3aed",
  //     output: "#34d399",
  //     outputGlow: "#059669",
  //     cyan: "#06b6d4",
  //     textInput: "#c4b5fd",
  //     textPanel: "#d4e5f7",
  //     textOutput: "#d1fae5",
  //   },
  //
  //   default: "#3b82f6",
  // };
  //
  // // ===== TAILWIND CLASSES =====
  // export { DEFAULT_COLORS };
  //
  // export const sidebarClasses = {
  //   primaryGradient: "from-blue-500 to-blue-400",
  //   primaryShadow: "shadow-blue-500/50",
  // };
  //
  // export default sidebarColors;




  // ===== SIDEBAR COLOR PALETTE =====
  // Never change

  // ============================================================
  // colors.js
  // ============================================================

  // ── BASE TOKENS (shared defaults, no accent) ─────────────────
  // ============================================================
// colors.js  —  Cyber Blue Theme System
// ============================================================

// ── BASE TOKENS (Cyber Blue Base) ────────────────────────────
const DEFAULT_COLORS = {
  background:      "#050d1a",       // ← CHANGED: deep navy (was #09090b zinc)
  backgroundSoft:  "#0a1628",       // ← CHANGED: dark blue-tinted card bg
  surface:         "#0f1f38",       // ← CHANGED: elevated blue surface
  surfaceElevated: "#162844",       // ← CHANGED: modals / drawers

  border:          "#1e3a5f",       // ← CHANGED: blue-tinted border
  borderSoft:      "rgba(56, 189, 248, 0.06)",  // ← CHANGED: sky blue tint

  textPrimary:     "#e2f4ff",       // ← CHANGED: cool white-blue
  textSecondary:   "rgba(226, 244, 255, 0.55)",
  textMuted:       "rgba(226, 244, 255, 0.30)",
  textInverse:     "#050d1a",
};


// ── SIDEBAR / THEME COLORS (Cyber Blue Accent) ───────────────
const sidebarColors = {
  background:      DEFAULT_COLORS.background,
  backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
  surface:         DEFAULT_COLORS.surface,
  surfaceElevated: DEFAULT_COLORS.surfaceElevated,

  border:          DEFAULT_COLORS.border,
  borderSoft:      DEFAULT_COLORS.borderSoft,
  borderSubtle:    "rgba(56, 189, 248, 0.08)",    // ← sky-400 tint
  borderStrong:    "rgba(56, 189, 248, 0.45)",    // ← CHANGED: sky blue
  borderAccent:    "rgba(56, 189, 248, 0.20)",    // ← CHANGED: sky blue

  textPrimary:     DEFAULT_COLORS.textPrimary,
  textSecondary:   DEFAULT_COLORS.textSecondary,
  textMuted:       DEFAULT_COLORS.textMuted,
  textInverse:     DEFAULT_COLORS.textInverse,
  textAccent:      "#38bdf8",                     // ← CHANGED: sky-400

  primaryFrom:     "#0ea5e9",                     // ← CHANGED: sky-500
  primaryTo:       "#38bdf8",                     // ← CHANGED: sky-400
  primary:         "#0ea5e9",                     // ← CHANGED: sky-500
  accent:          "#38bdf8",                     // ← CHANGED: sky-400

  hoverBackground: DEFAULT_COLORS.surface,
  hoverBorder:     DEFAULT_COLORS.surface,
  hoverShadow:     "rgba(56, 189, 248, 0.55)",    // ← CHANGED: sky glow
  hoverShadowSpread: "0 0 20px",
  hoverText:       "#38bdf8",

  activeBackground: DEFAULT_COLORS.surface,
  activeBorder:    DEFAULT_COLORS.surface,
  activeShadow:    "rgba(56, 189, 248, 0.45)",    // ← CHANGED
  activeText:      "#0ea5e9",                     // ← CHANGED

  buttonBackground: DEFAULT_COLORS.background,
  buttonIconColor:  DEFAULT_COLORS.textPrimary,

  primaryGradient: "from-sky-500 to-sky-400",     // ← CHANGED
  primaryShadow:   "shadow-sky-500/50",           // ← CHANGED
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

  metric:       { fontSize: "24px", fontWeight: "700", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metricMedium: { fontSize: "30px", fontWeight: "700", ...fontSmoothing },
  metric2xl:    { fontSize: "32px", fontWeight: "700", ...fontSmoothing },
  metricLarge:  { fontSize: "48px", fontWeight: "700", ...fontSmoothing },
  metricXL:     { fontSize: "60px", fontWeight: "700", ...fontSmoothing },

  code: {
    fontSize:   "13px",
    fontFamily: '"Fira Code", "Consolas", monospace',
    lineHeight: "1.6",
  },
};


// ===== CHART COLOR PALETTE =====

export const chartColors = {
  // 🔵 Primary chart colors (Cyber Blue)
  primary: ["#0ea5e9", "#38bdf8", "#0284c7", "#7dd3fc", "#bae6fd"],  // ← CHANGED

  severity: {
    critical: "#ef4444",
    high:     "#f97316",
    medium:   "#eab308",
    low:      "#0ea5e9",   // ← CHANGED: sky-500 instead of blue-500
    info:     "#0ea5e9",   // ← CHANGED
  },

  series: [
    "#0ea5e9",   // sky-500        ← primary
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
    blue:   ["#0ea5e9", "#38bdf8"],   // ← CHANGED: sky gradient
    cyan:   ["#06b6d4", "#22d3ee"],   // ← CHANGED: was purple
    orange: ["#f97316", "#fb923c"],
    pink:   ["#ec4899", "#f472b6"],
  },

  ui: {
    grid:         "rgba(56, 189, 248, 0.08)",    // ← CHANGED: sky tint grid
    axis:         "rgba(226, 244, 255, 0.30)",   // ← CHANGED: cool white
    label:        "rgba(226, 244, 255, 0.60)",   // ← CHANGED
    tooltip:      "rgba(5, 13, 26, 0.97)",       // ← CHANGED: navy tooltip
    tooltipBorder:"rgba(56, 189, 248, 0.50)",    // ← CHANGED: sky border
    border:       "rgba(56, 189, 248, 0.15)",    // ← CHANGED
  },

  edges: {
    critical: "#ef4444",
    high:     "#f87171",
    medium:   "#fca5a5",
    low:      "#fecaca",
    default:  "#dc2626",
  },

  themes: {

    // ── DARK (Cyber Blue) ────────────────────────────────────
    dark: {
      background:      DEFAULT_COLORS.background,       // #050d1a
      backgroundSoft:  DEFAULT_COLORS.backgroundSoft,   // #0a1628
      surface:         DEFAULT_COLORS.surface,           // #0f1f38
      surfaceElevated: DEFAULT_COLORS.surfaceElevated,   // #162844

      border:          DEFAULT_COLORS.border,            // #1e3a5f
      borderSoft:      DEFAULT_COLORS.borderSoft,
      borderSubtle:    "rgba(56, 189, 248, 0.08)",
      borderStrong:    "rgba(56, 189, 248, 0.45)",       // ← CHANGED
      borderAccent:    "rgba(56, 189, 248, 0.20)",       // ← CHANGED

      textPrimary:     DEFAULT_COLORS.textPrimary,       // #e2f4ff
      textSecondary:   DEFAULT_COLORS.textSecondary,
      textMuted:       DEFAULT_COLORS.textMuted,
      textInverse:     DEFAULT_COLORS.textInverse,
      textAccent:      "#38bdf8",                        // ← sky-400

      primaryFrom:     "#0ea5e9",
      primaryTo:       "#38bdf8",
      primary:         "#0ea5e9",
      accent:          "#38bdf8",

      nodeBg:          "#071221",                        // ← CHANGED: deep navy
      nodeStroke:      "#38bdf8",                        // ← sky-400
      edge:            "#e2f4ff",                        // ← CHANGED: cool white
      edgeGlow:        "#0ea5e9",                        // ← sky-500
      hubRing1:        "#38bdf8",                        // ← sky-400
      hubRing2:        "#06b6d4",                        // ← cyan-500
      hubCore:         "#040d18",                        // ← deepest navy
      hubBorder:       "#0ea5e9",                        // ← sky-500
      statBorder:      "#06b6d4",                        // ← cyan-500
    },

    // ── LIGHT (Cyber Blue Light) ─────────────────────────────
    light: {
      background:      "#f0f9ff",                        // ← CHANGED: sky-50
      backgroundSoft:  "#e0f2fe",                        // ← sky-100
      surface:         "#bae6fd",                        // ← sky-200
      surfaceElevated: "#ffffff",

      border:          "#7dd3fc",                        // ← sky-300
      borderSoft:      "rgba(14, 165, 233, 0.08)",
      borderSubtle:    "rgba(14, 165, 233, 0.10)",
      borderStrong:    "rgba(14, 165, 233, 0.35)",
      borderAccent:    "rgba(14, 165, 233, 0.18)",

      textPrimary:     "#0c2340",                        // ← CHANGED: deep navy text
      textSecondary:   "#1e5080",
      textMuted:       "#4a90b8",
      textInverse:     "#f0f9ff",
      textAccent:      "#0284c7",                        // ← sky-600

      primary:         "#0284c7",                        // ← sky-600
      accent:          "#0ea5e9",                        // ← sky-500

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

    // ── CYBER (Neon Cyber — kept + tuned) ───────────────────
    cyber: {
      background:      "#020812",                        // ← CHANGED: absolute deep
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
      textAccent:      "#00d4ff",                        // ← neon cyan

      primary:         "#00d4ff",                        // ← neon cyan
      accent:          "#00ff88",                        // ← neon green

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
    hubGradientFrom:   "#071628",      // ← CHANGED: navy
    hubGradientTo:     "#020d1a",
    panelGradientFrom: "#060f20",
    panelGradientTo:   "#030a14",
    input:             "#38bdf8",      // ← CHANGED: sky-400
    inputGlow:         "#0ea5e9",
    output:            "#34d399",
    outputGlow:        "#059669",
    cyan:              "#06b6d4",
    textInput:         "#bae6fd",      // ← CHANGED: sky-200
    textPanel:         "#d4e5f7",
    textOutput:        "#d1fae5",
  },

  default: "#0ea5e9",                  // ← CHANGED: sky-500
};


// ===== TAILWIND CLASSES =====
export { DEFAULT_COLORS };

export const sidebarClasses = {
  primaryGradient: "from-sky-500 to-sky-400",   // ← CHANGED
  primaryShadow:   "shadow-sky-500/50",          // ← CHANGED
};

export default sidebarColors;