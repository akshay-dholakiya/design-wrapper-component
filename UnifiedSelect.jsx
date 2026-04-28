/**
 * UnifiedSelect — centralized dropdown / select component
 *
 * Enforces a single source of truth for:
 *   • Styles (border, background, text)
 *   • Hover / focus / active states (all from colors.js tokens)
 *   • Keyboard navigation (ArrowUp/Down, Enter, Escape)
 *   • Consistent transition timing
 *
 * Modes
 * ─────
 *   native   – renders a styled <select> tag (best for simple lists, form submission)
 *   custom   – renders a fully-controlled custom dropdown (supports search)
 *
 * Props
 * ─────
 *   value          – currently selected value (string)
 *   onChange       – callback (value: string) => void
 *   options        – [{ value, label }]  OR  string[]
 *   placeholder    – placeholder text shown when nothing is selected
 *   mode           – "native" | "custom"   (default: "native")
 *   searchable     – boolean — enables type-to-filter in "custom" mode
 *   disabled       – boolean
 *   style          – extra inline styles for the trigger element
 *   menuStyle      – extra inline styles for the dropdown menu
 *   className      – extra Tailwind / CSS classes for the trigger
 *   error          – boolean — shows error border
 *   size           – "sm" | "md" (default: "md")
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import sidebarColors from './colors';
import { borderRadius, componentSpacing, spacing } from './spacing';
import { fontStyles } from './colors';

// ─── helpers ──────────────────────────────────────────────────────────────────

/** Normalise options: always work with [{ value, label }] internally */
function normalise(options) {
  if (!Array.isArray(options)) return [];
  return options.map((o) =>
    typeof o === 'string' ? { value: o, label: o } : o
  );
}

// ─── shared style tokens ──────────────────────────────────────────────────────

const BASE = {
  backgroundColor: `${sidebarColors.backgroundSoft}cc`,
  border: `1px solid ${sidebarColors.border}`,
  color: sidebarColors.textPrimary,
  borderRadius: borderRadius.md,
  outline: 'none',
  transition: `${sidebarColors.border} 0.2s, box-shadow 0.2s, ${sidebarColors.backgroundSoft} 0.2s`,
  cursor: 'pointer',
  width: '100%',
};

const BASE_SM = {
  ...BASE,
  ...componentSpacing.input.sm,
  ...fontStyles.bodySmall,
};

const BASE_MD = {
  ...BASE,
  ...componentSpacing.input.md,
  ...fontStyles.body,
};

const FOCUS = {
  borderColor: sidebarColors.primaryFrom,
  boxShadow: `0 0 0 3px ${sidebarColors.primaryFrom}20`,
};

const ERROR_FOCUS = {
  borderColor: sidebarColors.errorcolor,
  boxShadow: '0 0 0 3px rgba(239,68,68,0.2)',
};

const MENU_BASE = {
  backgroundColor: `${sidebarColors.backgroundSoft}`,
  border: `1px solid ${sidebarColors.border}`,
  borderRadius: borderRadius.lg,
  boxShadow: `0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px ${sidebarColors.primaryFrom}`,
  overflow: 'hidden',
  zIndex: 9999,
};

const OPTION_BASE = {
  ...fontStyles.body,
  color: sidebarColors.textPrimary,
  backgroundColor: 'transparent',
  padding: `${spacing.sm} ${spacing.lg}`,
  cursor: 'pointer',
  transition: `${sidebarColors.backgroundSoft} 0.15s, color 0.15s`,
  display: 'flex',
  alignItems: 'center',
  gap: spacing.sm,
  userSelect: 'none',
};

// ─── Native select (simple) ───────────────────────────────────────────────────

function NativeSelect({
  value,
  onChange,
  options,
  placeholder,
  disabled,
  style,
  className,
  error,
  size,
}) {
  const [focused, setFocused] = useState(false);
  const base = size === 'sm' ? BASE_SM : BASE_MD;
  const computed = {
  ...base,
  appearance: 'none',
  WebkitAppearance: 'none',
  paddingRight: '2.25rem',
  opacity: disabled ? 0.5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer',
  // ↓ longhands BEFORE ...style so user overrides win cleanly
  borderColor: error
    ? sidebarColors.errorcolor
    : focused ? sidebarColors.primaryFrom : sidebarColors.border,
  boxShadow: focused ? (error ? ERROR_FOCUS.boxShadow : FOCUS.boxShadow) : 'none',
  ...style, // ← user style always wins, including border: "none"
};
  return (
    <div style={{ position: 'relative', width: '100%' }} className={className}>
      <select
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        style={computed}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={(e) => {
          if (!focused && !disabled) {
            e.currentTarget.style.borderColor = `${sidebarColors.primaryFrom}60`;
          }
        }}
        onMouseLeave={(e) => {
          if (!focused && !disabled) {
            e.currentTarget.style.borderColor = error
              ? '#ef4444'
              : sidebarColors.border;
          }
        }}
      >
        {placeholder && (
          <option
            value=""
            disabled
            style={{
              color: sidebarColors.textSecondary,
              backgroundColor: sidebarColors.backgroundSoft,
            }}
          >
            {placeholder}
          </option>
        )}
        {normalise(options).map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            style={{
              backgroundColor: sidebarColors.backgroundSoft,
              color: sidebarColors.textPrimary,
            }}
          >
            {opt.label}
          </option>
        ))}
      </select>
      {/* Custom chevron */}
      <span
        style={{
          position: 'absolute',
          right: '0.6rem',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: focused
            ? sidebarColors.primaryFrom
            : sidebarColors.textSecondary,
          transition: 'color 0.2s',
        }}
      >
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  );
}

// ─── Custom dropdown (searchable) ────────────────────────────────────────────

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  disabled,
  style,
  menuStyle,
  className,
  error,
  size,
  searchable,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [highlighted, setHighlighted] = useState(-1);
  const [focused, setFocused] = useState(false);
  const containerRef = useRef(null);
  const searchRef = useRef(null);
  const menuRef = useRef(null);

  const normalised = normalise(options);
  const selected = normalised.find((o) => o.value === value) ?? null;

  const filtered =
    searchable && search
      ? normalised.filter((o) =>
          o.label.toLowerCase().includes(search.toLowerCase())
        )
      : normalised;

  const base = size === 'sm' ? BASE_SM : BASE_MD;

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setSearch('');
        setHighlighted(-1);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Auto-focus search when opened
  useEffect(() => {
    if (open && searchable && searchRef.current) {
      searchRef.current.focus();
    }
    if (!open) {
      setSearch('');
      setHighlighted(-1);
    }
  }, [open, searchable]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlighted >= 0 && menuRef.current) {
      const items = menuRef.current.querySelectorAll('[data-option]');
      if (items[highlighted]) {
        items[highlighted].scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlighted]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!open) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
          e.preventDefault();
          setOpen(true);
          setHighlighted(0);
        }
        return;
      }
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlighted((h) => Math.max(h - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (highlighted >= 0 && filtered[highlighted]) {
            onChange(filtered[highlighted].value);
            setOpen(false);
          }
          break;
        case 'Escape':
          setOpen(false);
          break;
        default:
          break;
      }
    },
    [open, highlighted, filtered, onChange]
  );

  const triggerStyle = {
    ...base,
    borderColor: error
      ? sidebarColors.errorcolor
      : focused || open
        ? sidebarColors.primaryFrom
        : sidebarColors.border,
    boxShadow:
      focused || open
        ? error
          ? ERROR_FOCUS.boxShadow
          : FOCUS.boxShadow
        : 'none',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
    ...style,
  };

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%' }}
      className={className}
    >
      {/* Trigger button */}
      <button
        type="button"
        disabled={disabled}
        style={triggerStyle}
        onClick={() => {
          if (!disabled) setOpen((o) => !o);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={handleKeyDown}
        onMouseEnter={(e) => {
          if (!open && !focused && !disabled) {
            e.currentTarget.style.borderColor = `${sidebarColors.primaryFrom}60`;
          }
        }}
        onMouseLeave={(e) => {
          if (!open && !focused && !disabled) {
            e.currentTarget.style.borderColor = error
              ? sidebarColors.errorcolor
              : sidebarColors.border;
          }
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span
          style={{
            color: selected
              ? sidebarColors.textPrimary
              : sidebarColors.textSecondary,
            flex: 1,
            textAlign: 'left',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {selected ? selected.label : placeholder || 'Select…'}
        </span>
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{
            color: open
              ? sidebarColors.primaryFrom
              : sidebarColors.textSecondary,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s, color 0.2s',
            flexShrink: 0,
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          ref={menuRef}
          role="listbox"
          style={{
            ...MENU_BASE,
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            maxHeight: '240px',
            overflowY: 'auto',
            ...menuStyle,
          }}
        >
          {/* Search input */}
          {searchable && (
            <div
              style={{
                padding: `${spacing.sm} ${spacing.md}`,
                borderBottom: `1px solid ${sidebarColors.border}`,
              }}
            >
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setHighlighted(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search…"
                style={{
                  width: '100%',
                  backgroundColor: `${sidebarColors.backgroundSoft}80`,
                  border: `1px solid ${sidebarColors.border}`,
                  borderRadius: borderRadius.sm,
                  color: sidebarColors.textPrimary,
                  padding: `${spacing.xs} ${spacing.md}`,
                  outline: 'none',
                  ...fontStyles.bodySmall,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = sidebarColors.primaryFrom;
                  e.currentTarget.style.boxShadow = `0 0 0 2px ${sidebarColors.primaryFrom}20`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = sidebarColors.border;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
          )}

          {/* Options */}
          {filtered.length === 0 ? (
            <div
              style={{
                ...OPTION_BASE,
                color: sidebarColors.textSecondary,
                cursor: 'default',
              }}
            >
              {search ? 'No matches found' : 'No options'}
            </div>
          ) : (
            filtered.map((opt, idx) => {
              const isSelected = opt.value === value;
              const isHighlighted = idx === highlighted;
              return (
                <div
                  key={opt.value}
                  data-option
                  role="option"
                  aria-selected={isSelected}
                  style={{
                    ...OPTION_BASE,
                    backgroundColor: isSelected
                      ? `${sidebarColors.primaryFrom}20`
                      : isHighlighted
                        ? sidebarColors.hoverBackground
                        : 'transparent',
                    color: isSelected
                      ? sidebarColors.activeText
                      : isHighlighted
                        ? sidebarColors.hoverText
                        : sidebarColors.textPrimary,
                    fontWeight: isSelected ? 600 : 400,
                    borderLeft: isSelected
                      ? `3px solid ${sidebarColors.activeBorder}`
                      : '3px solid transparent',
                  }}
                  onMouseEnter={() => setHighlighted(idx)}
                  onMouseLeave={() => setHighlighted(-1)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    onChange(opt.value);
                    setOpen(false);
                  }}
                >
                  {isSelected && (
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: sidebarColors.activeText, flexShrink: 0 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                  <span style={{ flex: 1 }}>{opt.label}</span>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────

/**
 * UnifiedSelect — use this everywhere instead of raw <select> or custom dropdowns.
 *
 * @example
 *   // Simple native select
 *   <UnifiedSelect value={range} onChange={setRange} options={[
 *     { value: '24h', label: 'Last 24 Hours' },
 *     { value: '7d',  label: 'Last 7 Days' },
 *   ]} />
 *
 *   // Searchable custom dropdown
 *   <UnifiedSelect mode="custom" searchable value={field} onChange={setField}
 *     options={availableFields} placeholder="Select field" />
 */
export default function UnifiedSelect(props) {
  const { mode = 'native', ...rest } = props;
  if (mode === 'custom') return <CustomSelect {...rest} />;
  return <NativeSelect {...rest} />;
}
