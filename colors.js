// ===== SIDEBAR COLOR PALETTE =====

const sidebarColors = {
  background: "#000000",
  border: "rgba(255, 255, 255, 0.2)",
  textPrimary: "#ffffff",
  textSecondary: "rgba(255, 255, 255, 0.6)",

  primaryFrom: "#3b82f6",
  primaryTo: "#60a5fa",

  hoverBorder: "rgba(59, 130, 246, 0.5)",
  hoverShadow: "rgba(59, 130, 246, 0.7)",
  hoverShadowSpread: "0 0 20px",

  activeShadow: "rgba(59, 130, 246, 0.5)",

  buttonBackground: "#000000",
  buttonIconColor: "#ffffff",
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

  heading1: { fontSize: "32px", fontWeight: "800", lineHeight: "1.1", letterSpacing: "-0.02em", ...fontSmoothing },
  heading2: { fontSize: "24px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.015em", ...fontSmoothing },
  heading3: { fontSize: "20px", fontWeight: "700", lineHeight: "1.3", letterSpacing: "-0.01em", ...fontSmoothing },
  heading4: { fontSize: "18px", fontWeight: "700", lineHeight: "1.4", letterSpacing: "-0.005em", ...fontSmoothing },
  heading5: { fontSize: "16px", fontWeight: "700", lineHeight: "1.4", ...fontSmoothing },
  heading6: { fontSize: "14px", fontWeight: "700", lineHeight: "1.5", letterSpacing: "0.01em", ...fontSmoothing },

  sidebarIcon: { fontSize: "1.25rem" },

  body: { fontSize: "14px", fontWeight: "400", lineHeight: "1.6", ...fontSmoothing },
  bodyLarge: { fontSize: "16px", fontWeight: "400", lineHeight: "1.6", ...fontSmoothing },
  bodySmall: { fontSize: "12px", fontWeight: "400", lineHeight: "1.5", ...fontSmoothing },

  caption: { fontSize: "12px", fontWeight: "400", lineHeight: "1.4", ...fontSmoothing },
  label: { fontSize: "13px", fontWeight: "500", letterSpacing: "0.01em", ...fontSmoothing },
  button: { fontSize: "14px", fontWeight: "600", letterSpacing: "0.02em", ...fontSmoothing },

  metric: { fontSize: "24px", fontWeight: "700", lineHeight: "1.2", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metricMedium: { fontSize: "30px", fontWeight: "700", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metric2xl: { fontSize: "32px", fontWeight: "700", lineHeight: "1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metricLarge: { fontSize: "48px", fontWeight: "700", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },
  metricXL: { fontSize: "60px", fontWeight: "700", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", ...fontSmoothing },

  code: {
    fontSize: "13px",
    fontWeight: "400",
    fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
    lineHeight: "1.6",
  },
};

// ===== CHART COLOR PALETTE =====

export const chartColors = {
  primary: ["#3b82f6", "#60a5fa", "#2563eb", "#93c5fd", "#dbeafe"],

  severity: {
    critical: "#ef4444",
    high: "#f97316",
    medium: "#eab308",
    low: "#3b82f6",
    info: "#3b82f6",
  },

  series: [
    "#3b82f6",
    "#8b5cf6",
    "#f59e0b",
    "#ec4899",
    "#06b6d4",
    "#22c55e", // ✅ UPDATED GREEN
    "#f97316",
    "#6366f1",
    "#14b8a6",
    "#60a5fa",
  ],

  categorical: [
    "#3b82f6",
    "#60a5fa",
    "#8b5cf6",
    "#a78bfa",
    "#ec4899",
    "#f472b6",
    "#f59e0b",
    "#fbbf24",
    "#6366f1",
    "#22c55e", // ✅ UPDATED GREEN
  ],

  gradients: {
    blue: ["#3b82f6", "#60a5fa"],
    purple: ["#8b5cf6", "#a78bfa"],
    orange: ["#f97316", "#fb923c"],
    pink: ["#ec4899", "#f472b6"],
  },

  ui: {
    grid: "rgba(255, 255, 255, 0.1)",
    axis: "rgba(255, 255, 255, 0.3)",
    label: "rgba(255, 255, 255, 0.6)",
    tooltip: "rgba(0, 0, 0, 0.95)",
    tooltipBorder: "rgba(59, 130, 246, 0.5)",
    border: "rgba(255, 255, 255, 0.2)",
  },

  edges: {
    critical: "#ef4444",
    high: "#f87171",
    medium: "#fca5a5",
    low: "#bbf7d0", // ✅ softer green edge
    default: "#dc2626",
  },

  themes: {
    dark: {
      background: "transparent",
      surface: "#0f172a",
      primary: "#38bdf8",
      secondary: "#818cf8",
      accent: "#06b6d4",
      textPrimary: "#f1f5f9",
      textSecondary: "#94a3b8",
      nodeBg: "#0a1628",
      nodeStroke: "#38bdf8",
      edge: "#ffffff",
      edgeGlow: "#38bdf8",
      hubRing1: "#60a5fa",
      hubRing2: "#22d3ee",
      hubCore: "#0b1220",
      hubBorder: "#3b82f6",
      statBorder: "#06b6d4",
    },

    light: {
      background: "transparent",
      surface: "#f8fafc",
      primary: "#0284c7",
      secondary: "#6366f1",
      accent: "#0891b2",
      textPrimary: "#0f172a",
      textSecondary: "#475569",
      nodeBg: "#e0f2fe",
      nodeStroke: "#0284c7",
      edge: "#ffffff",
      edgeGlow: "#0891b2",
      hubRing1: "#0284c7",
      hubRing2: "#0891b2",
      hubCore: "#dbeafe",
      hubBorder: "#3b82f6",
      statBorder: "#0891b2",
    },

    cyber: {
      background: "transparent",
      surface: "#0d0d1a",
      primary: "#00ff88",
      secondary: "#7c3aed",
      accent: "#00d4ff",
      textPrimary: "#e2e8f0",
      textSecondary: "#64748b",
      nodeBg: "#0a0a1a",
      nodeStroke: "#00ff88",
      edge: "#ffffff",
      edgeGlow: "#00d4ff",
      hubRing1: "#00ff88",
      hubRing2: "#00d4ff",
      hubCore: "#050510",
      hubBorder: "#7c3aed",
      statBorder: "#00d4ff",
    },
  },

  networkSankey: {
    hubGradientFrom: "#0c1a2e",
    hubGradientTo: "#050a14",
    panelGradientFrom: "#0b1520",
    panelGradientTo: "#060b11",
    input: "#a78bfa",
    inputGlow: "#7c3aed",
    output: "#10b981", // ✅ UPDATED GREEN
    outputGlow: "#059669",
    cyan: "#06b6d4",
    textInput: "#c4b5fd",
    textPanel: "#d4e5f7",
    textOutput: "#bbf7d0", // ✅ UPDATED
  },

  default: "#3b82f6",
};

// ===== TAILWIND CLASSES =====

export const sidebarClasses = {
  primaryGradient: "from-blue-500 to-blue-400",
  primaryShadow: "shadow-blue-500/50",
};

export default sidebarColors;