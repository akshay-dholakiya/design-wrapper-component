/**
 * Common Styles - Unified styling for all components
 * Import and use these styles throughout the application for consistency
 *
 * Usage:
 * import { widgetTitleStyles, cardStyles } from 'design-wrapper-component';
 * <h3 style={widgetTitleStyles}>My Title</h3>
 */

import sidebarColors, { fontStyles, chartColors } from './colors.js';
import { spacing, componentSpacing, borderRadius } from './spacing.js';

// ===== TYPOGRAPHY STYLES =====
// Using font styles from design wrapper (colors.js)

// Widget/Card Title - Large heading
export const widgetTitleStyles = {
  ...fontStyles.heading4,
  color: sidebarColors.textPrimary,
};

// Section Title - Medium heading
export const sectionTitleStyles = {
  ...fontStyles.heading5,
  color: sidebarColors.textPrimary,
};

// Subtitle - Secondary heading
export const subtitleStyles = {
  ...fontStyles.heading6,
  color: sidebarColors.textSecondary,
};

// Body Text - Normal paragraph text
export const bodyTextStyles = {
  ...fontStyles.body,
  color: sidebarColors.textPrimary,
};

// Small Text - Helper/caption text
export const smallTextStyles = {
  ...fontStyles.bodySmall,
  color: sidebarColors.textSecondary,
};

// Label Text - Form labels
export const labelStyles = {
  ...fontStyles.label,
  color: sidebarColors.textPrimary,
};

// Value/Metric Text - Large numbers/metrics
export const metricStyles = {
  ...fontStyles.metric,
  color: sidebarColors.textPrimary,
};

// ===== CARD/CONTAINER STYLES =====

// Standard card/widget container
export const cardStyles = {
  backgroundColor: sidebarColors.backgroundSoft,
  border: `1px solid ${sidebarColors.border}`,
  borderRadius: borderRadius.xl,
  padding: componentSpacing.card.default,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

// Card with gradient background
export const gradientCardStyles = {
  background: `linear-gradient(to bottom right, ${sidebarColors.backgroundSoft}, ${sidebarColors.backgroundSoft}f5)`,
  border: `1px solid ${sidebarColors.border}`,
  borderRadius: borderRadius.xl,
  padding: componentSpacing.card.default,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

// Compact card (less padding)
export const compactCardStyles = {
  backgroundColor: sidebarColors.backgroundSoft,
  border: `1px solid ${sidebarColors.border}`,
  borderRadius: borderRadius.lg,
  padding: componentSpacing.card.compact,
};

// ===== BUTTON STYLES =====

// Primary button (gradient)
export const primaryButtonStyles = {
  ...fontStyles.button,
  backgroundImage: `linear-gradient(to right, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`,
  color: sidebarColors.textPrimary,
  border: 'none',
  ...componentSpacing.button.md,
  borderRadius: borderRadius.lg,
  cursor: 'pointer',
  transition: 'all 0.2s',
};

// Secondary button (outline)
export const secondaryButtonStyles = {
  ...fontStyles.button,
  backgroundColor: 'transparent',
  color: sidebarColors.primaryFrom,
  border: `1px solid ${sidebarColors.primaryFrom}`,
  ...componentSpacing.button.md,
  borderRadius: borderRadius.lg,
  cursor: 'pointer',
  transition: 'all 0.2s',
};

// Icon button
export const iconButtonStyles = {
  backgroundColor: 'transparent',
  color: sidebarColors.textSecondary,
  border: 'none',
  padding: spacing.sm,
  borderRadius: borderRadius.md,
  cursor: 'pointer',
  transition: 'all 0.2s',
};

// ===== INPUT STYLES =====

// Text input field
export const inputStyles = {
  ...fontStyles.body,
  backgroundColor: sidebarColors.background,
  color: sidebarColors.textPrimary,
  border: `1px solid ${sidebarColors.border}`,
  borderRadius: borderRadius.md,
  ...componentSpacing.input.md,
  outline: 'none',
  transition: 'border-color 0.2s',
};

// Select dropdown
export const selectStyles = {
  ...fontStyles.body,
  backgroundColor: sidebarColors.background,
  color: sidebarColors.textPrimary,
  border: `1px solid ${sidebarColors.border}`,
  borderRadius: borderRadius.md,
  ...componentSpacing.input.md,
  outline: 'none',
  cursor: 'pointer',
  transition: 'border-color 0.2s',
};

// ===== BADGE/TAG STYLES =====

// Success badge
export const successBadgeStyles = {
  ...fontStyles.caption,
  fontWeight: '600',
  backgroundColor: `${chartColors.severity.info}20`,
  color: chartColors.severity.info,
  padding: `${spacing.xs} ${spacing.md}`,
  borderRadius: borderRadius.full,
};

// Warning badge
export const warningBadgeStyles = {
  ...fontStyles.caption,
  fontWeight: '600',
  backgroundColor: `${chartColors.severity.medium}20`,
  color: chartColors.severity.medium,
  padding: `${spacing.xs} ${spacing.md}`,
  borderRadius: borderRadius.full,
};

// Error badge
export const errorBadgeStyles = {
  ...fontStyles.caption,
  fontWeight: '600',
  backgroundColor: `${chartColors.severity.critical}20`,
  color: chartColors.severity.critical,
  padding: `${spacing.xs} ${spacing.md}`,
  borderRadius: borderRadius.full,
};

// Info badge (emerald theme)
export const infoBadgeStyles = {
  ...fontStyles.caption,
  fontWeight: '600',
  backgroundColor: `${sidebarColors.primaryFrom}20`,
  color: sidebarColors.primaryFrom,
  padding: `${spacing.xs} ${spacing.md}`,
  borderRadius: borderRadius.full,
};

// ===== DIVIDER/SEPARATOR =====

export const dividerStyles = {
  height: '1px',
  backgroundColor: sidebarColors.border,
  border: 'none',
  margin: `${spacing.lg} 0`,
};

// ===== HOVER STATE HELPERS =====

// Hover background for buttons/clickable items
export const hoverBackgroundColor = `${sidebarColors.primaryFrom}20`;

// Hover text color
export const hoverTextColor = sidebarColors.primaryFrom;

// ===== UTILITY FUNCTIONS =====

// Get hover styles for buttons
export const getHoverStyles = (baseStyles) => ({
  ...baseStyles,
  ':hover': {
    backgroundColor: hoverBackgroundColor,
    color: hoverTextColor,
  },
});

// Get focus styles for inputs
export const getFocusStyles = (baseStyles) => ({
  ...baseStyles,
  ':focus': {
    borderColor: sidebarColors.primaryFrom,
    boxShadow: `0 0 0 1px ${sidebarColors.primaryFrom}`,
  },
});

// ===== EXPORT ALL =====
export default {
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

  // Helpers
  hoverBackgroundColor,
  hoverTextColor,
  getHoverStyles,
  getFocusStyles,
};
