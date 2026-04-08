// Import all themes statically (no await needed)
import * as theam1 from "./theam/theam1.jsx";
import * as theam2 from "./theam/theam2.jsx";
import * as theam3 from "./theam/theam3.jsx";
import * as theam4 from "./theam/theam4.jsx";
import * as theam5 from "./theam/theme5.jsx";
const themeMap = {
    theam1,
    theam2,
    theam3,
    theam4,
    theam5,
};
// Safe localStorage read — returns default during SSR where window is undefined
const getThemeKey = () => {
    if (typeof window === "undefined") return "theam1"; // SSR: always default, no crash
    return localStorage.getItem("theme") || "theam1";
};

const themeKey = getThemeKey();


const theme = themeMap[themeKey] ?? themeMap["theam1"]; // fallback to default

const sidebarColors      = theme.default;
const DEFAULT_COLORS     = theme.DEFAULT_COLORS;
const fontStyles         = theme.fontStyles;
const chartColors        = theme.chartColors;
const panelSummaryColors = theme.panelSummaryColors;
const sidebarClasses     = theme.sidebarClasses;

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
    if (typeof window === "undefined") return themeMap["theam1"].default;
    const key = localStorage.getItem("theme") || "theam1";
    return (themeMap[key] || themeMap["theam1"]).default;
};