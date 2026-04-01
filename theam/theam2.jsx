export const DEFAULT_COLORS = {
    background:      "#0f0a00",       // deep amber-black
    backgroundSoft:  "#1a1000",       // dark amber-tinted card bg
    surface:         "#261800",       // elevated amber surface
    surfaceElevated: "#332200",       // modals / drawers

    border:          "#5c3a00",       // amber-tinted border
    borderSoft:      "rgba(251, 146, 60, 0.06)",  // orange-400 tint

    textPrimary:     "#fff8ed",       // warm white
    textSecondary:   "rgba(255, 248, 237, 0.55)",
    textMuted:       "rgba(255, 248, 237, 0.30)",
    textInverse:     "#0f0a00",
};


// ── SIDEBAR / THEME COLORS (Orange Amber Accent) ───────────────
const sidebarColors = {
    background:      DEFAULT_COLORS.background,
    backgroundSoft:  DEFAULT_COLORS.backgroundSoft,
    surface:         DEFAULT_COLORS.surface,
    surfaceElevated: DEFAULT_COLORS.surfaceElevated,

    border:          DEFAULT_COLORS.border,
    borderSoft:      DEFAULT_COLORS.borderSoft,
    borderSubtle:    "rgba(251, 146, 60, 0.08)",    // orange-400 tint
    borderStrong:    "rgba(251, 146, 60, 0.45)",    // orange-400
    borderAccent:    "rgba(251, 146, 60, 0.20)",    // orange-400

    textPrimary:     DEFAULT_COLORS.textPrimary,
    textSecondary:   DEFAULT_COLORS.textSecondary,
    textMuted:       DEFAULT_COLORS.textMuted,
    textInverse:     DEFAULT_COLORS.textInverse,
    textAccent:      "#fb923c",                     // orange-400

    primaryFrom:     "#f97316",                     // orange-500
    primaryTo:       "#fb923c",                     // orange-400
    primary:         "#f97316",                     // orange-500
    accent:          "#fb923c",                     // orange-400

    hoverBackground: DEFAULT_COLORS.surface,
    hoverBorder:     DEFAULT_COLORS.surface,
    hoverShadow:     "rgba(251, 146, 60, 0.55)",    // orange glow
    hoverShadowSpread: "0 0 20px",
    hoverText:       "#fb923c",

    activeBackground: DEFAULT_COLORS.surface,
    activeBorder:    DEFAULT_COLORS.surface,
    activeShadow:    "rgba(251, 146, 60, 0.45)",
    activeText:      "#f97316",                     // orange-500

    buttonBackground: DEFAULT_COLORS.background,
    buttonIconColor:  DEFAULT_COLORS.textPrimary,

    primaryGradient: "from-orange-500 to-orange-400",
    primaryShadow:   "shadow-orange-500/50",
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
    // 🟠 Primary chart colors (Orange Amber)
    primary: ["#f97316", "#fb923c", "#ea6d0a", "#fdba74", "#fed7aa"],

    severity: {
        critical: "#ef4444",
        high:     "#f97316",
        medium:   "#eab308",
        low:      "#f97316",   // orange-500
        info:     "#fb923c",   // orange-400
    },

    series: [
        "#f97316",   // orange-500       ← primary
        "#fb923c",   // orange-400
        "#eab308",   // yellow-500
        "#f59e0b",   // amber-500
        "#fbbf24",   // amber-400
        "#ef4444",   // red-500
        "#ec4899",   // pink
        "#a78bfa",   // violet-400
        "#14b8a6",   // teal
        "#84cc16",   // lime
    ],

    categorical: [
        "#f97316",   // orange-500
        "#fb923c",   // orange-400
        "#f59e0b",   // amber-500
        "#fbbf24",   // amber-400
        "#eab308",   // yellow-500
        "#facc15",   // yellow-400
        "#ef4444",   // red-500
        "#f87171",   // red-400
        "#ec4899",   // pink
        "#f472b6",
    ],

    gradients: {
        orange: ["#f97316", "#fb923c"],   // orange gradient
        amber:  ["#f59e0b", "#fbbf24"],   // amber gradient
        red:    ["#ef4444", "#f87171"],
        pink:   ["#ec4899", "#f472b6"],
    },

    ui: {
        grid:         "rgba(251, 146, 60, 0.08)",    // orange-400 tint grid
        axis:         "rgba(255, 248, 237, 0.30)",   // warm white
        label:        "rgba(255, 248, 237, 0.60)",
        tooltip:      "rgba(15, 10, 0, 0.97)",       // deep amber-black tooltip
        tooltipBorder:"rgba(251, 146, 60, 0.50)",    // orange border
        border:       "rgba(251, 146, 60, 0.15)",
    },

    edges: {
        critical: "#ef4444",
        high:     "#f87171",
        medium:   "#fca5a5",
        low:      "#fecaca",
        default:  "#dc2626",
    },

    themes: {

        // ── DARK (Orange Amber) ────────────────────────────────────
        dark: {
            background:      DEFAULT_COLORS.background,       // #0f0a00
            backgroundSoft:  DEFAULT_COLORS.backgroundSoft,   // #1a1000
            surface:         DEFAULT_COLORS.surface,           // #261800
            surfaceElevated: DEFAULT_COLORS.surfaceElevated,   // #332200

            border:          DEFAULT_COLORS.border,            // #5c3a00
            borderSoft:      DEFAULT_COLORS.borderSoft,
            borderSubtle:    "rgba(251, 146, 60, 0.08)",
            borderStrong:    "rgba(251, 146, 60, 0.45)",
            borderAccent:    "rgba(251, 146, 60, 0.20)",

            textPrimary:     DEFAULT_COLORS.textPrimary,       // #fff8ed
            textSecondary:   DEFAULT_COLORS.textSecondary,
            textMuted:       DEFAULT_COLORS.textMuted,
            textInverse:     DEFAULT_COLORS.textInverse,
            textAccent:      "#fb923c",                             // orange-400

            primaryFrom:     "#f97316",
            primaryTo:       "#fb923c",
            primary:         "#f97316",
            accent:          "#fb923c",

            nodeBg:          "#120900",                             // deep amber-black
            nodeStroke:      "#fb923c",                             // orange-400
            edge:            "#fff8ed",                             // warm white
            edgeGlow:        "#f97316",                             // orange-500
            hubRing1:        "#fb923c",                             // orange-400
            hubRing2:        "#f59e0b",                             // amber-500
            hubCore:         "#0a0600",                             // deepest amber-black
            hubBorder:       "#f97316",                             // orange-500
            statBorder:      "#f59e0b",                             // amber-500
        },

        // ── LIGHT (Orange Amber Light) ─────────────────────────────
        light: {
            background:      "#fff7ed",                             // orange-50
            backgroundSoft:  "#ffedd5",                             // orange-100
            surface:         "#fed7aa",                             // orange-200
            surfaceElevated: "#ffffff",

            border:          "#fdba74",                             // orange-300
            borderSoft:      "rgba(249, 115, 22, 0.08)",
            borderSubtle:    "rgba(249, 115, 22, 0.10)",
            borderStrong:    "rgba(249, 115, 22, 0.35)",
            borderAccent:    "rgba(249, 115, 22, 0.18)",

            textPrimary:     "#431407",                             // deep orange-brown text
            textSecondary:   "#7c2d12",                             // orange-900
            textMuted:       "#c2410c",                             // orange-700
            textInverse:     "#fff7ed",
            textAccent:      "#ea580c",                             // orange-600

            primary:         "#ea580c",                             // orange-600
            accent:          "#f97316",                             // orange-500

            nodeBg:          "#ffedd5",
            nodeStroke:      "#ea580c",
            edge:            "#fdba74",
            edgeGlow:        "rgba(249, 115, 22, 0.4)",
            hubRing1:        "#f97316",
            hubRing2:        "#f59e0b",
            hubCore:         "#fff7ed",
            hubBorder:       "#ea580c",
            statBorder:      "#f97316",
        },

        // ── CYBER (Neon Amber — kept + tuned) ───────────────────
        cyber: {
            background:      DEFAULT_COLORS.background,       // #0f0a00
            backgroundSoft:  DEFAULT_COLORS.backgroundSoft,   // #1a1000
            surface:         DEFAULT_COLORS.surface,           // #261800
            surfaceElevated: "#1f1200",

            border:          "#3d2000",
            borderSoft:      "rgba(255, 170, 0, 0.06)",
            borderSubtle:    "rgba(255, 170, 0, 0.10)",
            borderStrong:    "rgba(255, 170, 0, 0.40)",
            borderAccent:    "rgba(255, 170, 0, 0.20)",

            textPrimary:     "#fff8ed",
            textSecondary:   "rgba(255, 248, 237, 0.55)",
            textMuted:       "rgba(255, 248, 237, 0.30)",
            textInverse:     "#080400",
            textAccent:      "#ffaa00",                             // neon amber

            primary:         "#ffaa00",                             // neon amber
            accent:          "#ff6a00",                             // neon orange

            nodeBg:          "#0d0700",
            nodeStroke:      "#ffaa00",
            edge:            "#fff8ed",
            edgeGlow:        "#ffaa00",
            hubRing1:        "#ffaa00",
            hubRing2:        "#ff6a00",
            hubCore:         "#070400",
            hubBorder:       "#f97316",
            statBorder:      "#ffaa00",
        },
    },

    networkSankey: {
        hubGradientFrom:   "#1f1000",      // deep amber navy
        hubGradientTo:     "#0f0800",
        panelGradientFrom: "#180d00",
        panelGradientTo:   "#0c0600",
        input:             "#fb923c",      // orange-400
        inputGlow:         "#f97316",
        output:            "#34d399",
        outputGlow:        "#059669",
        cyan:              "#f59e0b",      // amber-500 (replaces cyan)
        textInput:         "#fed7aa",      // orange-200
        textPanel:         "#fde8c8",
        textOutput:        "#d1fae5",
    },

    default: "#f97316",                  // orange-500
};

export const panelSummaryColors = {
    primary: "#f97316",
    info:    "#f59e0b",
    warning: "#eab308",
    success: "#14b8a6",
    overlay: "#000000",
};


// ===== TAILWIND CLASSES =====

export const sidebarClasses = {
    primaryGradient: "from-orange-500 to-orange-400",
    primaryShadow:   "shadow-orange-500/50",
};

export default sidebarColors;