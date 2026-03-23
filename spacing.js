/**
 * SPACING SYSTEM - Design Tokens
 *
 * Use these tokens throughout the application for consistent spacing
 * Based on 4px base unit (0.25rem)
 *
 * Usage:
 * import { spacing } from 'design-wrapper-component/spacing';
 * <div style={{ padding: spacing.md, margin: spacing.lg }} />
 */

// Base spacing scale (4px increments)
export const spacing = {
  none: '0',
  xs: '4px',      // 0.25rem
  sm: '8px',      // 0.5rem
  md: '12px',     // 0.75rem
  lg: '16px',     // 1rem
  xl: '20px',     // 1.25rem
  '2xl': '24px',  // 1.5rem
  '3xl': '32px',  // 2rem
  '4xl': '40px',  // 2.5rem
  '5xl': '48px',  // 3rem
  '6xl': '64px',  // 4rem
  '7xl': '80px',  // 5rem
  '8xl': '96px',  // 6rem
};

// Component-specific spacing presets
export const componentSpacing = {
  // Button padding
  button: {
    xs: { padding: `${spacing.xs} ${spacing.md}` },      // 4px 12px
    sm: { padding: `${spacing.sm} ${spacing.lg}` },      // 8px 16px
    md: { padding: `${spacing.md} ${spacing.xl}` },      // 12px 20px
    lg: { padding: `${spacing.lg} ${spacing['2xl']}` },  // 16px 24px
    xl: { padding: `${spacing.xl} ${spacing['3xl']}` },  // 20px 32px
  },

  // Card/Container padding
  card: {
    compact: spacing.md,    // 12px
    default: spacing.lg,    // 16px
    comfortable: spacing['2xl'], // 24px
    spacious: spacing['3xl'],    // 32px
  },

  // Form input padding
  input: {
    sm: { padding: `${spacing.sm} ${spacing.md}` },   // 8px 12px
    md: { padding: `${spacing.md} ${spacing.lg}` },   // 12px 16px
    lg: { padding: `${spacing.lg} ${spacing.xl}` },   // 16px 20px
  },

  // Gap/Grid spacing
  gap: {
    xs: spacing.xs,   // 4px
    sm: spacing.sm,   // 8px
    md: spacing.md,   // 12px
    lg: spacing.lg,   // 16px
    xl: spacing.xl,   // 20px
  },

  // Section spacing
  section: {
    xs: spacing['2xl'],  // 24px
    sm: spacing['3xl'],  // 32px
    md: spacing['4xl'],  // 40px
    lg: spacing['5xl'],  // 48px
    xl: spacing['6xl'],  // 64px
  },
};

// Border radius tokens
export const borderRadius = {
  none: '0',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
};

// Common layout values
export const layout = {
  maxWidth: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    full: '100%',
  },

  height: {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '56px',
    '2xl': '64px',
  },

  iconSize: {
    xs: '12px',
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
  },
};

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
};

export default {
  spacing,
  componentSpacing,
  borderRadius,
  layout,
  zIndex,
};

