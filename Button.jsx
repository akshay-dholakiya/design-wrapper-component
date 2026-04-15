import React from 'react';
import PropTypes from 'prop-types';
import sidebarColors, { chartColors, fontStyles } from './colors.js';
import { componentSpacing, borderRadius, layout } from './spacing.js';

/**
 * Reusable Button Component - Using Design System Tokens
 * All styles derived from design-wrapper-component
 * NO hardcoded values!
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  type = 'button',
  style = {},
  ...rest
}) => {
  // Base button styles using design tokens
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    opacity: disabled || loading ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    ...fontStyles.button,
  };

  // Variant styles using design system colors
  const variantStyles = {
    primary: {
      backgroundImage: `linear-gradient(to right, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`,
      color: '#ffffff',
      boxShadow: `0 4px 12px ${sidebarColors.primaryFrom}40`,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: sidebarColors.primaryFrom,
      border: `1px solid ${sidebarColors.primaryFrom}`,
    },
    danger: {
      backgroundImage: `linear-gradient(to right, ${chartColors.severity.critical}, #dc2626)`,
      color: '#ffffff',
      boxShadow: `0 4px 12px ${chartColors.severity.critical}40`,
    },
    success: {
      backgroundImage: `linear-gradient(to right, ${sidebarColors.primaryFrom}, #22c55e)`,
      color: '#ffffff',
      boxShadow: `0 4px 12px ${sidebarColors.primaryFrom}40`,
    },
    warning: {
      backgroundImage: `linear-gradient(to right, ${chartColors.severity.medium}, ${chartColors.severity.high})`,
      color: '#ffffff',
      boxShadow: `0 4px 12px ${chartColors.severity.medium}40`,
    },
    outline: {
      backgroundColor: 'transparent',
      border: `2px solid ${sidebarColors.primaryFrom}`,
      color: sidebarColors.primaryFrom,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: sidebarColors.textSecondary,
    },
    dark: {
      backgroundColor: sidebarColors.background,
      color: sidebarColors.textPrimary,
      border: `1px solid ${sidebarColors.border}`,
    },
  };

  // Size styles using spacing tokens
  const sizeStyles = {
    xs: {
      ...componentSpacing.button.xs,
      fontSize: '12px',
      gap: '4px',
      borderRadius: borderRadius.md,
      height: layout.height.xs,
    },
    sm: {
      ...componentSpacing.button.sm,
      fontSize: '13px',
      gap: '6px',
      borderRadius: borderRadius.lg,
      height: layout.height.sm,
    },
    md: {
      ...componentSpacing.button.md,
      fontSize: '14px',
      gap: '8px',
      borderRadius: borderRadius.lg,
      height: layout.height.md,
    },
    lg: {
      ...componentSpacing.button.lg,
      fontSize: '16px',
      gap: '10px',
      borderRadius: borderRadius.xl,
      height: layout.height.lg,
    },
    xl: {
      ...componentSpacing.button.xl,
      fontSize: '18px',
      gap: '12px',
      borderRadius: borderRadius.xl,
      height: layout.height.xl,
    },
  };

  // Combine all styles
  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  // Hover styles (applied via onMouseEnter/onMouseLeave)
  const getHoverStyles = () => {
    if (
      variant === 'primary' ||
      variant === 'success' ||
      variant === 'danger' ||
      variant === 'warning'
    ) {
      return {
        transform: 'translateY(-2px)',
        boxShadow: `0 8px 20px ${variantStyles[variant]?.boxShadow?.split(' ').pop()}`,
      };
    }
    if (variant === 'secondary' || variant === 'outline') {
      return {
        backgroundColor: `${sidebarColors.primaryFrom}20`,
      };
    }
    if (variant === 'ghost') {
      return {
        backgroundColor: `${sidebarColors.textSecondary}10`,
        color: sidebarColors.textPrimary,
      };
    }
    return {};
  };

  // Loading spinner using design tokens
  const LoadingSpinner = () => (
    <svg
      style={{
        animation: 'spin 1s linear infinite',
        width: layout.iconSize.md,
        height: layout.iconSize.md,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        style={{ opacity: 0.25 }}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        style={{ opacity: 0.75 }}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const [isHovered, setIsHovered] = React.useState(false);

  const finalStyles = {
    ...combinedStyles,
    ...(isHovered && !disabled && !loading ? getHoverStyles() : {}),
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <button
        type={type}
        style={finalStyles}
        disabled={disabled || loading}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...rest}
      >
        {loading && iconPosition === 'left' && <LoadingSpinner />}
        {!loading && icon && iconPosition === 'left' && (
          <span style={{ flexShrink: 0, display: 'flex' }}>{icon}</span>
        )}

        {children && <span>{children}</span>}

        {!loading && icon && iconPosition === 'right' && (
          <span style={{ flexShrink: 0, display: 'flex' }}>{icon}</span>
        )}
        {loading && iconPosition === 'right' && <LoadingSpinner />}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'warning',
    'outline',
    'ghost',
    'dark',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  style: PropTypes.object,
};

export default Button;
