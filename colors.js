// Import all themes statically (no await needed)
import * as theam1 from "./theam/theam1.jsx";
import * as theam2 from "./theam/theam2.jsx";
import * as theam3 from "./theam/theam3.jsx";
import * as theam4 from "./theam/theam4.jsx";
// add more theme imports here as needed...

const themeMap = {
    theam1,
    theam2,
    theam3,
    theam4
};
let themeKey =  "theam1";

if (typeof window !== 'undefined') {
    themeKey = localStorage.getItem("theme") || "theam1";
}


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
