import React from 'react';
import sidebarColors, { chartColors, fontStyles } from '../../colors';
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

const toCount = (value) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
};

export default function ListCardWrapper({
    data = [],
    labelField = 'name',
    valueField = 'value',
    percentField = 'percent',
    total = null,
    itemSuffix = 'items',
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = 'No data available',
    onClick,
}) {
    if (isLoading) {
        return loadingComponent;
    }

    const rows = Array.isArray(data) ? data : [];
    if (!rows.length) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 160,
                    color: sidebarColors.textSecondary,
                    ...fontStyles.body,
                }}
            >
                {noDataComponent}
            </div>
        );
    }

    const resolvedTotal = toCount(total) > 0
        ? toCount(total)
        : rows.reduce((sum, item) => sum + toCount(item?.[valueField]), 0);

    return (
        <div style={{ display: 'grid', gap: spacing.md }}>
            {rows.map((item, idx) => {
                const label = String(item?.[labelField] || 'Unknown').toUpperCase();
                const value = toCount(item?.[valueField]);
                const explicitPercent = Number(item?.[percentField]);
                const percent = Number.isFinite(explicitPercent)
                    ? Math.max(0, Math.min(100, explicitPercent))
                    : (resolvedTotal > 0 ? Math.round((value / resolvedTotal) * 100) : 0);

                const accent = chartColors?.series?.[idx % chartColors.series.length] || sidebarColors.primaryFrom;

                return (
                    <div
                        key={`${label}-${idx}`}
                        onClick={onClick ? () => onClick(item) : undefined}
                        style={{
                            border: `1px solid ${withAlpha(sidebarColors.border, 0.45)}`,
                            borderRadius: borderRadius.lg,
                            background: `linear-gradient(140deg, ${withAlpha(sidebarColors.backgroundSoft, 0.97)} 0%, ${withAlpha(sidebarColors.background, 0.98)} 100%)`,
                            boxShadow: `inset 0 0 0 1px ${withAlpha(sidebarColors.primaryFrom, 0.08)}`,
                            padding: `${spacing.md} ${spacing.lg}`,
                            cursor: onClick ? 'pointer' : 'default',
                        }}
                    >
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr auto auto',
                                alignItems: 'center',
                                columnGap: spacing.lg,
                            }}
                        >
                            <div style={{ minWidth: 0 }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: spacing.sm,
                                        marginBottom: spacing.xs,
                                    }}
                                >
                                    <span
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: borderRadius.full,
                                            backgroundColor: accent,
                                            boxShadow: `0 0 10px ${withAlpha(accent, 0.58)}`,
                                            flexShrink: 0,
                                        }}
                                    />
                                    <span
                                        style={{
                                            color: withAlpha(sidebarColors.primaryTo, 0.95),
                                            ...fontStyles.body,
                                            fontWeight: 700,
                                            letterSpacing: 0.3,
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {label}
                                    </span>
                                </div>

                                <div
                                    style={{
                                        width: '100%',
                                        height: 9,
                                        borderRadius: 999,
                                        backgroundColor: withAlpha(sidebarColors.primaryFrom, 0.16),
                                        overflow: 'hidden',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: `${percent}%`,
                                            height: '100%',
                                            borderRadius: 999,
                                            background: `linear-gradient(90deg, ${withAlpha(accent, 0.85)} 0%, ${withAlpha(accent, 1)} 100%)`,
                                        }}
                                    />
                                </div>

                                <div
                                    style={{
                                        marginTop: spacing.xs,
                                        color: withAlpha(sidebarColors.textSecondary, 0.9),
                                        ...fontStyles.bodySmall,
                                    }}
                                >
                                    {percent}%
                                </div>
                            </div>

                            <div style={{ textAlign: 'right', minWidth: 62 }}>
                                <div
                                    style={{
                                        color: sidebarColors.textPrimary,
                                        ...fontStyles.heading5,
                                        fontWeight: 700,
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {value.toLocaleString()}
                                </div>
                                <div
                                    style={{
                                        color: withAlpha(sidebarColors.textSecondary, 0.85),
                                        ...fontStyles.bodySmall,
                                    }}
                                >
                                    {itemSuffix}
                                </div>
                            </div>

                            <div
                                style={{
                                    color: withAlpha(sidebarColors.textSecondary, 0.72),
                                    fontSize: 18,
                                    lineHeight: 1,
                                    userSelect: 'none',
                                }}
                            >
                                
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
