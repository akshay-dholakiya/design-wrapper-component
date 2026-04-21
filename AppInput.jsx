/**
 * AppInput — centralized input component
 *
 * Enforces a single source of truth for:
 *   • Visual state: border, background, text from color tokens
 *   • Focus / hover / disabled from design system
 *   • Consistent height, padding, radius
 *   • Prefix / suffix icon slots
 *
 * Props
 * ─────
 *   value          – controlled value
 *   onChange       – (e) => void  (standard React change event)
 *   placeholder    – placeholder text
 *   type           – input type (default: "text"), supports "date", "search", etc.
 *   disabled       – boolean
 *   prefix         – React node rendered on the left inside the input
 *   suffix         – React node rendered on the right inside the input
 *   error          – boolean — shows error border/glow
 *   size           – "sm" | "md" (default: "md")
 *   style          – inline overrides applied to the outer wrapper (width, minWidth, etc.)
 *   inputStyle     – inline overrides applied to the inner <input> only
 *   className      – CSS classes for the outer wrapper
 *   onFocus        – additional onFocus handler
 *   onBlur         – additional onBlur handler
 *   ...rest        – all other props forwarded to the inner <input> (ref, onKeyDown, id, etc.)
 *
 * Ref forwarding
 * ──────────────
 * Refs are forwarded to the inner <input> element, not the wrapper div.
 * This means you can call ref.current.focus() as expected.
 *
 * Usage
 * ─────
 *   // Basic text
 *   <AppInput value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." />
 *
 *   // With prefix icon
 *   <AppInput prefix={<SearchIcon />} value={q} onChange={...} />
 *
 *   // With ref
 *   const ref = useRef(null);
 *   <AppInput ref={ref} value={q} onChange={...} />
 *
 *   // Date picker
 *   <AppInput type="date" value={date} onChange={(e) => setDate(e.target.value)} />
 */

import { useState, forwardRef } from 'react';
import sidebarColors, { fontStyles } from './colors';
import { borderRadius, componentSpacing, spacing } from './spacing';

// Detect whether the active theme is a light theme by sniffing
// the canvas background — light themes use near-white hues (>= 0xe0).
// This lets form controls (date pickers, etc.) render their native
// chrome with the correct color scheme.
const isLightTheme = (() => {
  const bg = sidebarColors?.background;
  if (typeof bg !== 'string' || !bg.startsWith('#')) return false;
  const hex = bg.replace('#', '');
  const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
  if (full.length < 6) return false;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const luma = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luma > 0.75;
})();

// ─── size variants ────────────────────────────────────────────────────────────
const SIZE = {
  sm: {
    ...componentSpacing.input.sm,
    ...fontStyles.bodySmall,
  },
  md: {
    ...componentSpacing.input.md,
    ...fontStyles.body,
  },
};

// ─── component ───────────────────────────────────────────────────────────────
const AppInput = forwardRef(function AppInput(
  {
    value,
    onChange,
    placeholder,
    type = 'text',
    disabled = false,
    prefix,
    suffix,
    error = false,
    size = 'md',
    style,
    inputStyle,
    className = '',
    onFocus: externalOnFocus,
    onBlur: externalOnBlur,
    ...rest
  },
  ref
) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  // ─── derived styles ─────────────────────────────────────────────────────────
  const borderColor = error
    ? '#ef4444'
    : focused
      ? sidebarColors.primaryFrom
      : hovered
        ? `${sidebarColors.primaryFrom}60`
        : sidebarColors.border;

  const boxShadow = error
    ? `0 0 0 3px rgba(239,68,68,0.2)`
    : focused
      ? `0 0 0 3px ${sidebarColors.primaryFrom}20`
      : 'none';

  const sizeStyles = SIZE[size] || SIZE.md;

  // ─── wrapper ────────────────────────────────────────────────────────────────
  const wrapperStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: `${sidebarColors.backgroundSoft}`,
    border: `1px solid ${borderColor}`,
    borderRadius: borderRadius.md,
    boxShadow,
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
    // Apply padding from size, overriddable by style
    paddingTop: sizeStyles.padding ? undefined : spacing.md,
    paddingBottom: sizeStyles.padding ? undefined : spacing.md,
    paddingLeft: prefix
      ? spacing.sm
      : sizeStyles.padding
        ? undefined
        : spacing.lg,
    paddingRight: suffix
      ? spacing.sm
      : sizeStyles.padding
        ? undefined
        : spacing.lg,
    ...sizeStyles,
    padding: undefined, // break out from shorthand to handle prefix/suffix spacing
    ...style,
  };

  // Manually apply padding shorthand since we need to override it
  if (!prefix && !suffix) {
    wrapperStyle.padding = sizeStyles.padding;
  } else {
    const pad = sizeStyles.padding || `${spacing.md} ${spacing.lg}`;
    const [pt, pr, pb, pl] = parsePadding(pad);
    wrapperStyle.paddingTop = pt;
    wrapperStyle.paddingBottom = pb;
    wrapperStyle.paddingLeft = prefix ? spacing.sm : pl;
    wrapperStyle.paddingRight = suffix ? spacing.sm : pr;
  }

  // ─── inner input ────────────────────────────────────────────────────────────
  const innerStyle = {
    flex: '1 1 0%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: sidebarColors.textPrimary,
    ...fontStyles.body,
    ...(size === 'sm' ? fontStyles.bodySmall : {}),
    cursor: disabled ? 'not-allowed' : 'text',
    width: '100%',
    minWidth: 0,
    // date/time inputs respect the active theme
    colorScheme: isLightTheme ? 'light' : 'dark',
    ...inputStyle,
  };

  return (
    <div
      className={className}
      style={wrapperStyle}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => !disabled && setHovered(false)}
    >
      {prefix && (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            color: sidebarColors.textSecondary,
            marginRight: spacing.sm,
            pointerEvents: 'none',
          }}
        >
          {prefix}
        </span>
      )}

      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={innerStyle}
        onFocus={(e) => {
          setFocused(true);
          externalOnFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          externalOnBlur?.(e);
        }}
        {...rest}
      />

      {suffix && (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            color: sidebarColors.textSecondary,
            marginLeft: spacing.sm,
          }}
        >
          {suffix}
        </span>
      )}
    </div>
  );
});

// ─── helper: parse CSS padding shorthand into [top, right, bottom, left] ─────
function parsePadding(pad) {
  const parts = String(pad).trim().split(/\s+/);
  if (parts.length === 1) return [parts[0], parts[0], parts[0], parts[0]];
  if (parts.length === 2) return [parts[0], parts[1], parts[0], parts[1]];
  if (parts.length === 3) return [parts[0], parts[1], parts[2], parts[1]];
  return parts;
}

export default AppInput;
