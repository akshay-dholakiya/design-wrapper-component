import React from 'react';
import sidebarColors, { fontStyles } from '../../colors';
import { borderRadius, spacing } from '../../spacing';
import { EagleEyeLoader } from '../../loaders';

const withAlpha = (hex, alpha) => {
    if (typeof hex !== 'string') return hex;
    if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;

    const normalized = hex.replace('#', '');
    if (![3, 6].includes(normalized.length)) return hex;

    const full = normalized.length === 3
        ? normalized.split('').map((ch) => `${ch}${ch}`).join('')
        : normalized;

    const r = Number.parseInt(full.slice(0, 2), 16);
    const g = Number.parseInt(full.slice(2, 4), 16);
    const b = Number.parseInt(full.slice(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const DefaultSearchIcon = ({ color }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" stroke={color} strokeWidth="2" />
        <path d="M16 16L21 21" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export default function TopCard({
    value = 0,
    title = 'Total IOCs Swept',
    icon = null,
    height = 130,
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = 'No data available',
    onClick,
}) {
    if (isLoading) {
        return loadingComponent;
    }

    const parsedValue = Number(value);
    const hasValue = Number.isFinite(parsedValue);
    const resolvedHeight = typeof height === 'number' ? `${height}px` : (height || '130px');

    if (!hasValue) {
        return (
            <div
                style={{
                    width: '100%',
                    height: resolvedHeight,
                    borderRadius: borderRadius.xl,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: sidebarColors.textSecondary,
                    background: `linear-gradient(120deg, ${withAlpha(sidebarColors.backgroundSoft, 0.96)} 0%, ${withAlpha(sidebarColors.background, 0.96)} 100%)`,
                    border: `1px solid ${withAlpha(sidebarColors.border, 0.65)}`,
                    ...fontStyles.body,
                }}
            >
                {noDataComponent}
            </div>
        );
    }

    const accent = sidebarColors.primaryFrom || '#12c5ff';
    const accentSoft = sidebarColors.primaryTo || '#67e8f9';

    return (
        <div
            onClick={onClick}
            style={{
                width: '100%',
                height: resolvedHeight,
                borderRadius: borderRadius.xl,
                border: `1px solid ${withAlpha(accent, 0.28)}`,
                background: `linear-gradient(125deg, ${withAlpha(sidebarColors.backgroundSoft, 0.98)} 0%, ${withAlpha(sidebarColors.background, 0.98)} 60%, ${withAlpha(accent, 0.12)} 100%)`,
                boxShadow: `inset 0 0 0 1px ${withAlpha(sidebarColors.border, 0.22)}, 0 12px 24px ${withAlpha(sidebarColors.background, 0.48)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: `0 ${spacing.lg}`,
                cursor: onClick ? 'pointer' : 'default',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
                <div
                    style={{
                        ...fontStyles.heading2,
                        color: accent,
                        lineHeight: 1,
                        fontWeight: 800,
                        textShadow: `0 0 14px ${withAlpha(accentSoft, 0.28)}`,
                    }}
                >
                    {parsedValue}
                </div>

                <div
                    style={{
                        ...fontStyles.bodySmall,
                        color: withAlpha(sidebarColors.textSecondary, 0.95),
                    }}
                >
                    {title}
                </div>
            </div>

            <div
                style={{
                    width: 58,
                    height: 58,
                    borderRadius: borderRadius.full,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `radial-gradient(circle at 35% 30%, ${withAlpha(accentSoft, 0.45)} 0%, ${withAlpha(accent, 0.18)} 45%, ${withAlpha(sidebarColors.background, 0.2)} 100%)`,
                    border: `1px solid ${withAlpha(accentSoft, 0.35)}`,
                    boxShadow: `0 0 0 1px ${withAlpha(accent, 0.16)} inset`,
                }}
            >
                {icon || <DefaultSearchIcon color={withAlpha(accentSoft, 0.92)} />}
            </div>
        </div>
    );
}
