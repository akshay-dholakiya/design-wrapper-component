import React from 'react';
import sidebarColors, { chartColors, fontStyles } from '../../colors';
import { borderRadius, spacing } from '../../spacing';
import EagleEyeLoader from './EagleEyeLoader';

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

const toRows = (items = []) => (Array.isArray(items)
    ? items.map((item, index) => {
        if (typeof item === 'string') {
            return {
                id: `${item}-${index}`,
                name: item,
                subtitle: '',
                rank: index + 1,
                signal: Math.min(5, Math.max(2, index + 2)),
            };
        }

        return {
            id: item?.id ?? `${item?.name ?? item?.label ?? 'item'}-${index}`,
            name: String(item?.name ?? item?.label ?? 'Unknown'),
            subtitle: String(item?.subtitle ?? ''),
            rank: Number(item?.rank) || (index + 1),
            signal: Number(item?.signal) || Math.min(5, Math.max(2, index + 2)),
            raw: item,
        };
    })
    : []);

export default function ThreatListCardWrapper({
    title = 'Top Malwares',
    icon = '🦠',
    items = [],
    subtitleFallback = 'Detected malware',
    maxItems = 5,
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = 'No data available',
    onItemClick,
}) {
    if (isLoading) {
        return loadingComponent;
    }

    const rows = toRows(items).slice(0, maxItems);
    const accent = sidebarColors.primaryFrom || chartColors?.series?.[0] || '#1fbef2';
    const accentSoft = sidebarColors.primaryTo || chartColors?.series?.[1] || '#4bd5ff';

    if (!rows.length) {
        return (
            <div
                style={{
                    padding: spacing['2xl'],
                    textAlign: 'center',
                    color: sidebarColors.textSecondary,
                    ...fontStyles.body,
                }}
            >
                {noDataComponent}
            </div>
        );
    }

    return (
        <div
            style={{
                background: `linear-gradient(130deg, ${withAlpha(sidebarColors.backgroundSoft, 0.98)} 0%, ${withAlpha(sidebarColors.background, 0.98)} 100%)`,
                border: `1px solid ${withAlpha(accent, 0.32)}`,
                borderRadius: borderRadius.xl,
                padding: spacing.lg,
                boxShadow: `inset 0 0 0 1px ${withAlpha(sidebarColors.border, 0.22)}`,
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.lg }}>
                <div
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: borderRadius.md,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${withAlpha(accent, 0.34)} 0%, ${withAlpha(accentSoft, 0.3)} 100%)`,
                        border: `1px solid ${withAlpha(accentSoft, 0.4)}`,
                    }}
                >
                    <span style={{ fontSize: 14, lineHeight: 1 }}>{icon}</span>
                </div>
                <div style={{ ...fontStyles.heading5, color: withAlpha(sidebarColors.primaryTo, 0.98) }}>
                    {title}
                </div>
            </div>

            <div style={{ display: 'grid', gap: spacing.md }}>
                {rows.map((row, idx) => {
                    const signalBars = Math.min(5, Math.max(1, Number(row?.signal) || 1));

                    return (
                        <div
                            key={row.id}
                            onClick={onItemClick ? () => onItemClick(row.raw || row) : undefined}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'auto 1fr auto',
                                alignItems: 'center',
                                columnGap: spacing.md,
                                padding: `${spacing.md} ${spacing.md}`,
                                borderRadius: borderRadius.lg,
                                background: `linear-gradient(120deg, ${withAlpha(sidebarColors.background, 0.75)} 0%, ${withAlpha(sidebarColors.backgroundSoft, 0.65)} 100%)`,
                                border: `1px solid ${withAlpha(sidebarColors.border, 0.32)}`,
                                cursor: onItemClick ? 'pointer' : 'default',
                            }}
                        >
                            <div
                                style={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: borderRadius.full,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: withAlpha(sidebarColors.primaryTo, 0.95),
                                    ...fontStyles.body,
                                    fontWeight: 700,
                                    background: `linear-gradient(135deg, ${withAlpha(accent, 0.25)} 0%, ${withAlpha(accentSoft, 0.2)} 100%)`,
                                    border: `1px solid ${withAlpha(accentSoft, 0.45)}`,
                                }}
                            >
                                {row.rank || idx + 1}
                            </div>

                            <div>
                                <div style={{ ...fontStyles.heading5, color: sidebarColors.textPrimary }}>
                                    {row.name}
                                </div>
                                <div style={{ ...fontStyles.bodySmall, color: withAlpha(sidebarColors.textSecondary, 0.9) }}>
                                    {row.subtitle || subtitleFallback}
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                                    {Array.from({ length: signalBars }).map((_, i) => (
                                        <span
                                            key={`sig-${row.id}-${i}`}
                                            style={{
                                                width: 6,
                                                height: 12 + (i % 2) * 4,
                                                borderRadius: 999,
                                                backgroundColor: withAlpha(accent, 0.85),
                                            }}
                                        />
                                    ))}
                                </div>
                                <span
                                    style={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: borderRadius.full,
                                        backgroundColor: accentSoft,
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
