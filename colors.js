// ===== SIDEBAR COLOR PALETTE =====
// Change colors here and they will apply throughout the sidebar component

const sidebarColors = {
  // Background Colors
  background: "#000000",           // Main sidebar background (black)

  // Border Colors
  border: "rgba(255, 255, 255, 0.2)",  // Border color (white with 20% opacity)

  // Text Colors
  textPrimary: "#ffffff",          // Primary text color (white)
  textSecondary: "rgba(255, 255, 255, 0.6)", // Secondary text (60% white)

  // Primary Brand Colors (Gradient)
  primaryFrom: "#10b981",          // Emerald-500 - Start of gradient
  primaryTo: "#4ade80",            // Green-400 - End of gradient

  // Hover States
  hoverBorder: "rgba(16, 185, 129, 0.5)",     // Border on hover (emerald with 50% opacity)
  hoverShadow: "rgba(16, 185, 129, 0.7)",     // Shadow glow on hover (emerald with 70% opacity)
  hoverShadowSpread: "0 0 20px",              // Shadow spread

  // Active/Selected State
  activeShadow: "rgba(16, 185, 129, 0.5)",    // Shadow for active items (50% opacity)

  // Button Colors
  buttonBackground: "#000000",     // Collapse/expand button background
  buttonIconColor: "#ffffff",      // Button icon color
};

// ===== FONT STYLES =====
// Common font properties for smooth text rendering
const fontSmoothing = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility'
};

// Typography styles - use these for consistent text across the app
export const fontStyles = {
  // Font smoothing properties (apply to all text)
  smoothing: fontSmoothing,

  // Heading styles
  heading1: {
    fontSize: '32px',
    fontWeight: '800',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    ...fontSmoothing
  },

  heading2: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.015em',
    ...fontSmoothing
  },

  heading3: {
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1.3',
    letterSpacing: '-0.01em',
    ...fontSmoothing
  },

  heading4: {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '1.4',
    letterSpacing: '-0.005em',
    ...fontSmoothing
  },

  heading5: {
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '1.4',
    letterSpacing: '0em',
    ...fontSmoothing
  },

  heading6: {
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '1.5',
    letterSpacing: '0.01em',
    ...fontSmoothing
  },

  // Body text styles
  body: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.6',
    ...fontSmoothing
  },

  bodyLarge: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.6',
    ...fontSmoothing
  },

  bodySmall: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '1.5',
    ...fontSmoothing
  },

  // Specialized text styles
  caption: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '1.4',
    ...fontSmoothing
  },

  label: {
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '0.01em',
    ...fontSmoothing
  },

  button: {
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.02em',
    ...fontSmoothing
  },

  metric: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '1.2',
    fontVariantNumeric: 'tabular-nums',
    ...fontSmoothing
  },

  code: {
    fontSize: '13px',
    fontWeight: '400',
    fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
    lineHeight: '1.6',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  }
};

// ===== CHART COLOR PALETTE =====
// Colors for charts, graphs, and data visualizations
export const chartColors = {
  // Primary chart colors (gradient-friendly)
  primary: ["#10b981", "#4ade80", "#22c55e", "#86efac", "#bbf7d0"],

  // Severity colors for alerts/incidents
  severity: {
    critical: "#ef4444",    // red-500
    high: "#f97316",        // orange-500
    medium: "#eab308",      // yellow-500
    low: "#3b82f6",         // blue-500
    info: "#10b981"         // emerald-500
  },

  // Multi-series colors (for multiple data series in one chart)
  series: [
    "#10b981",  // emerald-500
    "#3b82f6",  // blue-500
    "#f59e0b",  // amber-500
    "#8b5cf6",  // violet-500
    "#ec4899",  // pink-500
    "#06b6d4",  // cyan-500
    "#84cc16",  // lime-500
    "#f97316",  // orange-500
    "#6366f1",  // indigo-500
    "#14b8a6"   // teal-500
  ],

  // Categorical colors (for pie charts, category distinctions)
  categorical: [
    "#10b981",  // emerald-500
    "#4ade80",  // green-400
    "#3b82f6",  // blue-500
    "#60a5fa",  // blue-400
    "#8b5cf6",  // violet-500
    "#a78bfa",  // violet-400
    "#ec4899",  // pink-500
    "#f472b6",  // pink-400
    "#f59e0b",  // amber-500
    "#fbbf24",  // amber-400
  ],

  // Gradient colors (for area charts, backgrounds)
  gradients: {
    emerald: ["#10b981", "#4ade80"],
    blue: ["#3b82f6", "#60a5fa"],
    purple: ["#8b5cf6", "#a78bfa"],
    orange: ["#f97316", "#fb923c"],
    pink: ["#ec4899", "#f472b6"]
  },

  // Chart UI colors
  ui: {
    grid: "rgba(255, 255, 255, 0.1)",      // Grid lines
    axis: "rgba(255, 255, 255, 0.3)",      // Axis lines
    label: "rgba(255, 255, 255, 0.6)",     // Labels
    tooltip: "rgba(0, 0, 0, 0.95)",        // Tooltip background
    tooltipBorder: "rgba(16, 185, 129, 0.5)", // Tooltip border
    border: "rgba(255, 255, 255, 0.2)"     // General border color
  },

  // Connection/Edge flow colors (for geolocation maps, network diagrams)
  edges: {
    critical: "#ef4444",      // red-500 - High volume/critical flows
    high: "#f87171",          // red-400 - Medium-high flows
    medium: "#fca5a5",        // red-300 - Medium flows
    low: "#fecaca",           // red-200 - Low volume flows
    default: "#dc2626"        // red-600 - Default edge color
  },

  // Default fallback color
  default: "#10b981"  // emerald-500
};

// CSS class mappings for Tailwind
export const sidebarClasses = {
  // Primary gradient classes
  primaryGradient: "from-emerald-500 to-green-400",

  // Shadow classes
  primaryShadow: "shadow-emerald-500/50",
};

export default sidebarColors;

