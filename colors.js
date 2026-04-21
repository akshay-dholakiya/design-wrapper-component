// Import all themes statically (no await needed)
import * as ocean from "./theam/ocean.jsx";
import * as eagleye from "./theam/eagleye.jsx";
import * as sentinel from "./theam/sentinel.jsx";
import * as aurora from "./theam/aurora.jsx";
import * as neon from "./theam/neon.jsx";
import * as emerald from "./theam/emerald.jsx";
import * as nebula from "./theam/nebula.jsx";

const themeMap = {
    eagleye,
    sentinel,
    aurora,
    neon,
    emerald,
    nebula,
    ocean,
    // ── Legacy key aliases (preserves existing localStorage values) ──
    theam1: ocean,
};

// Safe localStorage read — returns default during SSR where window is undefined
const getThemeKey = () => {
    if (typeof window === "undefined") return "eagleye"; // SSR: EagleEye brand theme is the default
    return localStorage.getItem("theme") || "eagleye";
};

const themeKey = getThemeKey();

const theme = themeMap[themeKey] ?? themeMap['eagleye']; // fallback to brand theme

const sidebarColors = theme.default;
const DEFAULT_COLORS = theme.DEFAULT_COLORS;
const fontStyles = theme.fontStyles;
const chartColors = theme.chartColors;
const panelSummaryColors = theme.panelSummaryColors;
const sidebarClasses = theme.sidebarClasses;

export {
  DEFAULT_COLORS,
  fontStyles,
  chartColors,
  panelSummaryColors,
  sidebarClasses,
  sidebarColors,
};

export default sidebarColors;

/**
 * getLiveSidebarColors — reads current localStorage theme on every call.
 * Use inside React component bodies to get theme-accurate colors on every render.
 * Bypasses the module-level cache that is frozen at SSR time.
 */
export const getLiveSidebarColors = () => {
    if (typeof window === "undefined") return themeMap["eagleye"].default;
    const key = localStorage.getItem("theme") || "eagleye";
    return (themeMap[key] || themeMap["eagleye"]).default;
};
