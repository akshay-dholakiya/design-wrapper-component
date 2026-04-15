import sidebarColors, { chartColors, fontStyles } from './colors';
import { borderRadius, componentSpacing, spacing } from './spacing';

const toAlpha = (hexColor, alpha) => {
  if (typeof hexColor !== 'string' || !hexColor.startsWith('#')) {
    return hexColor;
  }

  const clean = hexColor.replace('#', '');
  const expanded =
    clean.length === 3
      ? clean
          .split('')
          .map((c) => `${c}${c}`)
          .join('')
      : clean;

  const int = Number.parseInt(expanded, 16);
  if (Number.isNaN(int)) return hexColor;

  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const sidePanelTheme = {
  background: `linear-gradient(135deg, ${toAlpha(sidebarColors.background, 0.98)}, ${toAlpha(sidebarColors.background, 0.92)})`,
  surface: toAlpha(sidebarColors.background, 0.78),
  surfaceStrong: toAlpha(sidebarColors.background, 0.88),
  border: chartColors.ui.border,
  textPrimary: sidebarColors.textPrimary,
  textSecondary: chartColors.ui.label,
  textMuted: sidebarColors.textSecondary,
  accent: chartColors.default,
  shadow: `0 18px 40px ${toAlpha(sidebarColors.background, 0.45)}`,
  backdropBackground: toAlpha(sidebarColors.background, 0.48),
  backdropBlur: 'blur(6px)',
  radius: borderRadius.xl,
  radiusLg: borderRadius['2xl'],
  cardPadding: componentSpacing.card.default,
  compactPadding: componentSpacing.card.compact,
  sectionGap: spacing.lg,
  chipBackground: chartColors.ui.grid,
  nestedSurface: toAlpha(chartColors.ui.axis, 0.28),
  dangerBorder: toAlpha(chartColors.severity.critical, 0.3),
  dangerBackground: toAlpha(chartColors.severity.critical, 0.12),
  dangerText: chartColors.severity.high,
  maxLogListHeight: '520px',
  title: {
    ...fontStyles.heading4,
    color: sidebarColors.textPrimary,
  },
  subtitle: {
    ...fontStyles.caption,
    color: chartColors.ui.label,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: 700,
  },
};

export const summaryTone = {
  primary: {
    border: toAlpha(chartColors.severity.medium, 0.38),
    background: `linear-gradient(135deg, ${toAlpha(chartColors.severity.medium, 0.16)}, ${toAlpha(sidebarColors.background, 0.42)})`,
    icon: toAlpha(chartColors.severity.medium, 0.82),
  },
  info: {
    border: toAlpha(chartColors.series[4], 0.38),
    background: `linear-gradient(135deg, ${toAlpha(chartColors.series[4], 0.16)}, ${toAlpha(sidebarColors.background, 0.42)})`,
    icon: toAlpha(chartColors.series[4], 0.82),
  },
  success: {
    border: toAlpha(chartColors.series[8], 0.38),
    background: `linear-gradient(135deg, ${toAlpha(chartColors.series[8], 0.16)}, ${toAlpha(sidebarColors.background, 0.42)})`,
    icon: toAlpha(chartColors.series[8], 0.82),
  },
};

export const severityBadgeStyle = (severity) => {
  const sev = String(severity || '').toLowerCase();
  if (sev === 'critical')
    return {
      backgroundColor: chartColors.severity.critical,
      color: sidebarColors.textPrimary,
    };
  if (sev === 'high')
    return {
      backgroundColor: chartColors.severity.high,
      color: sidebarColors.textPrimary,
    };
  if (sev === 'medium')
    return {
      backgroundColor: chartColors.severity.medium,
      color: sidebarColors.background,
    };
  if (sev === 'low')
    return {
      backgroundColor: chartColors.severity.info,
      color: sidebarColors.textPrimary,
    };
  return {
    backgroundColor: chartColors.ui.axis,
    color: sidebarColors.textPrimary,
  };
};
