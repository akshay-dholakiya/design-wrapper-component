
const themeKey = localStorage.getItem("theme") ||"theam1";

let sidebarColors,
    DEFAULT_COLORS,
    fontStyles,
    chartColors,
    panelSummaryColors,
    sidebarClasses;


console.log(themeKey);

if (themeKey) {
    const theme = await import((`./theam/${themeKey}`));
    sidebarColors   = theme.default;
    DEFAULT_COLORS  = theme.DEFAULT_COLORS;
    fontStyles      = theme.fontStyles;
    chartColors     = theme.chartColors;
    panelSummaryColors = theme.panelSummaryColors;
    sidebarClasses  = theme.sidebarClasses;
} else {
    // default → theam1
    const theme = await import("./theam/theam1.jsx");
    sidebarColors   = theme.default;
    DEFAULT_COLORS  = theme.DEFAULT_COLORS;
    fontStyles      = theme.fontStyles;
    chartColors     = theme.chartColors;
    panelSummaryColors = theme.panelSummaryColors;
    sidebarClasses  = theme.sidebarClasses;
}

export {
    DEFAULT_COLORS,
    fontStyles,
    chartColors,
    panelSummaryColors,
    sidebarClasses,
    sidebarColors
};

export default sidebarColors;