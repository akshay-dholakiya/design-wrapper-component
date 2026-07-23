/**
 * Design System - Central Export
 * Import everything you need from here to ensure consistency
 *
 * Usage:
 * import { Button, sidebarColors, spacing, fontStyles } from 'design-wrapper-component';
 */

// Components
export { default as Button } from './components/buttons/Button';
export { default as Sidebar } from './components/navigation/Sidebar';
export { default as RightSidebar } from './components/navigation/RightSidebar.jsx';
export { default as BaseAccordion } from './components/layout/BaseAccordion.jsx';
export { default as PageLoader } from './components/loaders/PageLoader';
export { default as UnifiedSelect } from './components/inputs/UnifiedSelect';
export { default as AppInput } from './components/inputs/AppInput';
export { default as StatsCard } from './components/cards/StatsCard';
export { default as Tabs } from './components/navigation/Tabs';
export { default as ColumnVisibilityMenu } from './components/table/ColumnVisibilityMenu';
export { ToastProvider, useToast } from './components/feedback/toast/toastContext.jsx';

// Color Tokens
export {
  default as sidebarColors,
  chartColors,
  fontStyles,
  sidebarClasses,
  panelSummaryColors,
} from './theme/colors';

// Spacing & Layout Tokens
export {
  spacing,
  componentSpacing,
  borderRadius,
  layout,
  zIndex,
} from './theme/spacing';

// Common Styles (pre-built style objects)
export { default as commonStyles } from './theme/commonStyles';
export {
  // Typography
  widgetTitleStyles,
  sectionTitleStyles,
  subtitleStyles,
  bodyTextStyles,
  smallTextStyles,
  labelStyles,
  metricStyles,
  // Cards
  cardStyles,
  gradientCardStyles,
  compactCardStyles,
  // Buttons
  primaryButtonStyles,
  secondaryButtonStyles,
  iconButtonStyles,
  // Inputs
  inputStyles,
  selectStyles,
  // Badges
  successBadgeStyles,
  warningBadgeStyles,
  errorBadgeStyles,
  infoBadgeStyles,
  // Others
  dividerStyles,
  hoverBackgroundColor,
  hoverTextColor,
} from './theme/commonStyles';

// Side panel tokens
export {
  sidePanelTheme,
  summaryTone,
  severityBadgeStyle,
} from './theme/sidePanelTheme';

// Platform module registry (Apps hub, sidebar app switchers, etc.)
export { PLATFORM_MODULES, MODULE_CATEGORY } from './lib/platform-modules';
