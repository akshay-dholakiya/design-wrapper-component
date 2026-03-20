import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Button Wrapper Component
 * Supports multiple variants, sizes, and states
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
  className = '',
  ...rest
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-xl
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    shadow-lg hover:shadow-xl
    ${fullWidth ? 'w-full' : ''}
  `;

  // Variant styles
  const variants = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-blue-600
      hover:from-cyan-600 hover:to-blue-700
      text-white
      focus:ring-cyan-500
      shadow-cyan-500/50
    `,
    secondary: `
      bg-slate-800 hover:bg-slate-700
      text-slate-200 hover:text-white
      border border-slate-700 hover:border-slate-600
      focus:ring-slate-500
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-red-600
      hover:from-red-600 hover:to-red-700
      text-white
      focus:ring-red-500
      shadow-red-500/50
    `,
    success: `
      bg-gradient-to-r from-green-500 to-emerald-600
      hover:from-green-600 hover:to-emerald-700
      text-white
      focus:ring-green-500
      shadow-green-500/50
    `,
    warning: `
      bg-gradient-to-r from-yellow-500 to-orange-600
      hover:from-yellow-600 hover:to-orange-700
      text-white
      focus:ring-yellow-500
      shadow-yellow-500/50
    `,
    outline: `
      bg-transparent
      border-2 border-cyan-500 hover:border-cyan-400
      text-cyan-500 hover:text-cyan-400
      hover:bg-cyan-500/10
      focus:ring-cyan-500
    `,
    ghost: `
      bg-transparent hover:bg-white/10
      text-slate-300 hover:text-white
      focus:ring-slate-500
      shadow-none
    `,
    dark: `
      bg-slate-900 hover:bg-black
      text-white
      border border-white/10 hover:border-white/20
      focus:ring-white/20
    `,
  };

  // Size styles
  const sizes = {
    xs: 'px-3 py-1.5 text-xs gap-1',
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  // Combine all styles
  const buttonClasses = `
    ${baseStyles}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading && iconPosition === 'left' && <LoadingSpinner />}
      {!loading && icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}

      {children && <span>{children}</span>}

      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {loading && iconPosition === 'right' && <LoadingSpinner />}
    </button>
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
  className: PropTypes.string,
};

export default Button;

