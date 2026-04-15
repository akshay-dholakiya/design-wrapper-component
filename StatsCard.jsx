/**
 * StatsCard — centralized statistics / metric card component
 *
 * Enforces a single source of truth for all metric displays:
 *   • Alert Statistics Dashboard (Critical / High / Medium / Low / Total)
 *   • Threat Summary Statistics (Advisory / IoC's Swept / Matched / Total Logs)
 *   • Security Summary inline metrics (Risk Score, Vulnerabilities, …)
 *
 * Two render modes
 * ────────────────
 *   layout="card"   (default) — bordered card with optional icon, centered label,
 *                               large white value, colored bottom accent bar.
 *                               Hover lifts + accents the border.
 *   layout="inline" — no card border; just colored value text + gray uppercase label.
 *                     Designed to sit inside a parent card container.
 *   shape="compact" — horizontal single-row: muted label on left, colored value on right.
 *                     No icon, no border, minimal height. Ideal for dense stat rows.
 *
 * Variant → color mapping (all from design tokens — no hardcoded colors)
 * ───────────────────────────────────────────────────────────────────────
 *   critical → chartColors.severity.critical   (#ef4444 red)
 *   high     → chartColors.severity.high       (#f97316 orange)
 *   medium   → chartColors.severity.medium     (#eab308 yellow)
 *   low      → chartColors.severity.low        (#3b82f6 blue)
 *   info     → chartColors.series[4]           (cyan)
 *   primary  → sidebarColors.primaryFrom       (blue-500)
 *   success  → #22c55e (green — only hardcoded value, no semantic token exists)
 *
 * Props
 * ─────
 *   title      – string   label displayed below the value  (required)
 *   value      – number|string  the metric value           (required)
 *   icon       – React component (e.g. AlertTriangle from lucide-react)
 *   variant    – "critical"|"high"|"medium"|"low"|"info"|"primary"|"success"
 *   color      – explicit CSS color string (overrides variant)
 *   layout     – "card" | "inline"   (default: "card")
 *   shape      – "default" | "compact"  controls the layout shape (default: "default")
 *                compact = horizontal [ Title | Value ] row, no icon
 *   accentBar  – boolean  show bottom color bar (card layout, default true)
 *   trend      – { direction: "up"|"down"|"flat", percent: number } (optional)
 *   onClick    – () => void  makes card clickable with hover elevate effect
 *   style      – extra inline style for the root element
 *   size       – "sm" | "md" | "lg"  controls metric font size (default: "md")
 *
 * Usage
 * ─────
 *   // Severity alert card
 *   <StatsCard title="Critical" value={368} icon={AlertOctagon} variant="critical" onClick={...} />
 *
 *   // Threat summary card (no icon)
 *   <StatsCard title="Advisory" value={12} color={chartColors.severity.medium} />
 *
 *   // Inline metric inside a parent card
 *   <StatsCard layout="inline" title="Risk Score" value="56.3" color={chartColors.series[0]} />
 */

import { useState } from 'react';
import sidebarColors, { fontStyles, chartColors } from './colors';
import { spacing, borderRadius, layout, componentSpacing } from './spacing';

// ─── helpers ──────────────────────────────────────────────────────────────────

/** Convert a hex/rgba color to rgba with a given alpha */
function withAlpha(color, alpha) {
  if (!color) return `rgba(59,130,246,${alpha})`;
  if (color.startsWith('rgba')) {
    return color.replace(/[\d.]+\)$/, `${alpha})`);
  }
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const full =
      hex.length === 3
        ? hex
            .split('')
            .map((c) => c + c)
            .join('')
        : hex;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return color;
}

// ─── variant → design-token color mapping ────────────────────────────────────
const VARIANT_COLORS = {
  critical: chartColors.severity.critical,    // #ef4444
  high:     chartColors.severity.high,        // #f97316
  medium:   chartColors.severity.medium,      // #eab308
  low:      chartColors.severity.low,         // #3b82f6
  info:     chartColors.series[4],            // cyan-ish from chartColors palette
  primary:  sidebarColors.primaryFrom,        // #3b82f6
  success:  sidebarColors.successcolor,        // green-500 (no semantic token exists)
  warning:  sidebarColors.warning,            // amber/warning color
  default:  sidebarColors.primary,            // default brand color
};

// ─── metric font sizes ────────────────────────────────────────────────────────
const METRIC_SIZE = {
  sm: fontStyles.metric, // ~24px
  md: fontStyles.metric2xl, // component-defined 2xl metric
  lg: fontStyles.metricLarge, // ~48px
};

// ─── component ───────────────────────────────────────────────────────────────
export default function StatsCard({
  title,
  value,
  icon: Icon,
  variant,
  color: colorProp,
  layout: cardLayout = 'card',
  shape = 'default',
  accentBar = true,
  trend,
  onClick,
  style,
  size = 'md',
}) {
  const [hovered, setHovered] = useState(false);

  // Resolve accent color from prop → variant → primary fallback
  const accentColor =
    colorProp ||
    (variant ? VARIANT_COLORS[variant] : null) ||
    sidebarColors.primaryFrom;

  // Format numeric values with locale separators
  const formattedValue =
    typeof value === 'number' ? value.toLocaleString() : (value ?? '—');

  const isClickable = Boolean(onClick);
  const metricFont = METRIC_SIZE[size] || METRIC_SIZE.md;

  // ─── compact layout ─────────────────────────────────────────────────────────
  // Horizontal row: [ Label (left, muted) | Value (right, accent color) ]
  if (shape === 'compact') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `${spacing.sm} ${spacing.md}`,
          cursor: isClickable ? 'pointer' : 'default',
          transition: 'opacity 150ms ease',
          ...style,
        }}
        onClick={onClick}
        onMouseEnter={isClickable ? () => setHovered(true) : undefined}
        onMouseLeave={isClickable ? () => setHovered(false) : undefined}
      >
        <div
          style={{
            ...fontStyles.caption,
            color: sidebarColors.textSecondary,
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {title}
        </div>
        <div
          style={{
            ...fontStyles.metric,
            color: accentColor,
            ...fontStyles.smoothing,
          }}
        >
          {formattedValue}
        </div>
      </div>
    );
  }

  // ─── inline layout ──────────────────────────────────────────────────────────
  if (cardLayout === 'inline') {
    return (
      <div
        style={{
          padding: componentSpacing.card.comfortable,
          textAlign: 'center',
          cursor: isClickable ? 'pointer' : 'default',
          transition: 'opacity 150ms ease',
          ...style,
        }}
        onClick={onClick}
        onMouseEnter={isClickable ? () => setHovered(true) : undefined}
        onMouseLeave={isClickable ? () => setHovered(false) : undefined}
      >
        <div
          style={{
            ...metricFont,
            color: accentColor,
            marginBottom: spacing.sm,
            ...fontStyles.smoothing,
          }}
        >
          {formattedValue}
        </div>
        <div
          style={{
            ...fontStyles.caption,
            color: sidebarColors.textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: '600',
          }}
        >
          {title}
        </div>
      </div>
    );
  }

  // ─── card layout ────────────────────────────────────────────────────────────
  return (
    <div
      className="group"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: sidebarColors.backgroundSoft,
        border: `1px solid ${
          hovered && isClickable
            ? withAlpha(accentColor, 0.5)
            : sidebarColors.border
        }`,
        borderRadius: borderRadius.lg,
        padding: `${spacing['2xl']} ${spacing.xl}`,
        cursor: isClickable ? 'pointer' : 'default',
        transform:
          hovered && isClickable ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow:
          hovered && isClickable
            ? `0 8px 20px -4px ${withAlpha(accentColor, 0.2)}`
            : 'none',
        transition:
          'border-color 150ms ease, transform 150ms ease, box-shadow 150ms ease',
        ...style,
      }}
      onMouseEnter={() => {
        if (isClickable) setHovered(true);
      }}
      onMouseLeave={() => {
        if (isClickable) setHovered(false);
      }}
      onClick={onClick}
    >
      {/* ── Icon ────────────────────────────────────────────────────────────── */}
      {Icon && (
        <div
          style={{
            width: spacing['5xl'],
            height: spacing['5xl'],
            borderRadius: borderRadius.lg,
            backgroundColor: withAlpha(accentColor, 0.08),
            border: `1px solid ${withAlpha(accentColor, 0.2)}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            marginBottom: spacing.md,
            transition: 'transform 300ms ease',
            transform: hovered && isClickable ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <Icon
            style={{
              width: layout.iconSize.lg,
              height: layout.iconSize.lg,
              color: accentColor,
              strokeWidth: 2,
            }}
          />
        </div>
      )}

      {/* ── Label ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          ...fontStyles.bodySmall,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: spacing.sm,
          color: sidebarColors.textSecondary,
          fontWeight: '500',
        }}
      >
        {title}
      </div>

      {/* ── Value ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          ...metricFont,
          textAlign: 'center',
          color: sidebarColors.textPrimary,
          ...fontStyles.smoothing,
        }}
      >
        {formattedValue}
      </div>

      {/* ── Trend (optional) ────────────────────────────────────────────────── */}
      {trend && (
        <div
          style={{
            ...fontStyles.caption,
            textAlign: 'center',
            marginTop: spacing.xs,
            color:
              trend.direction === 'up'
                ? chartColors.severity.high
                : trend.direction === 'down'
                  ? VARIANT_COLORS.success
                  : sidebarColors.textSecondary,
          }}
        >
          {trend.direction === 'up'
            ? '↑'
            : trend.direction === 'down'
              ? '↓'
              : '→'}{' '}
          {trend.percent}%
        </div>
      )}

      {/* ── Bottom accent bar ───────────────────────────────────────────────── */}
      {accentBar && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: hovered && isClickable ? '4px' : '2px',
            backgroundColor: accentColor,
            opacity: 0.6,
            transition: 'height 300ms ease',
          }}
        />
      )}
    </div>
  );
}
