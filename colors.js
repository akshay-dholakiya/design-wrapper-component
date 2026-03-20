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

// CSS class mappings for Tailwind
export const sidebarClasses = {
  // Primary gradient classes
  primaryGradient: "from-emerald-500 to-green-400",

  // Shadow classes
  primaryShadow: "shadow-emerald-500/50",
};

export default sidebarColors;

