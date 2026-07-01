import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { getLiveSidebarColors } from '../../colors';
import EagleEyeLoader from './EagleEyeLoader';

const withAlpha = (hex, alpha) => {
    if (typeof hex !== 'string') return hex;
    if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
    const normalized = hex.replace('#', '');
    if (![3, 6].includes(normalized.length)) return hex;
    const full =
        normalized.length === 3
            ? normalized.split('').map((ch) => `${ch}${ch}`).join('')
            : normalized;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const DAYS  = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const HOURS = Array.from({ length: 24 }, (_, i) => `${i}h`);

/**
 * HeatmapChartWrapper
 *
 * Renders a weekday x hour heatmap colored by alert severity rate (theme primary -> danger).
 *
 * Props:
 *   data             -- array of { weekday: 1-7, hour: 0-23, failure_count, success_count }
 *   height           -- chart height in px (default 220)
 *   isLoading        -- show loader skeleton
 *   loadingComponent -- custom loader node
 *   noDataComponent  -- custom empty-state node
 */
export function HeatmapChartWrapper({
    data = [],
    height = 220,
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = 'No heatmap data',
}) {
    const containerRef = useRef(null);
    const [ready, setReady] = useState(false);
    const c = getLiveSidebarColors();

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (entry) {
                const { width, height: h } = entry.contentRect;
                setReady(width > 0 && h > 0);
            }
        });
        observer.observe(el);
        setReady(el.clientWidth > 0 && el.clientHeight > 0);
        return () => observer.disconnect();
    }, []);

    const hasData = Array.isArray(data) && data.length > 0;

    const primary      = c.primary       || '#0ea5e9';
    const accentOrange = c.accentOrange  || '#f97316';
    const danger       = c.danger        || '#ef4444';

    /* 5-stop gradient: faint primary -> full primary -> orange -> red */
    const heatmapColors = [
        withAlpha(primary, 0.10),
        withAlpha(primary, 0.38),
        primary,
        accentOrange,
        danger,
    ];

    const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

    const chartData = data.map((d) => {
        const fc    = d.failure_count ?? 0;
        const sc    = d.success_count ?? 0;
        const total = fc + sc;
        return {
            value:         [d.hour, d.weekday - 1, total ? fc / total : 0],
            failure_count: fc,
            success_count: sc,
            total,
        };
    });

    const option = {
        backgroundColor: 'transparent',
        animation: true,
        animationDuration: 600,
        tooltip: {
            trigger: 'item',
            backgroundColor: c.backgroundSoft  || '#0a1628',
            borderColor:     withAlpha(primary, 0.35),
            borderWidth:     1,
            extraCssText: [
                'border-radius:10px',
                `box-shadow:0 8px 32px ${withAlpha(c.background || '#050d1a', 0.85)}`,
                'padding:10px 14px',
                'min-width:180px',
            ].join(';'),
            textStyle: { color: c.textPrimary || '#e2f4ff', fontSize: 12 },
            formatter: (params) => {
                const [hour, dayIdx] = params.data.value;
                const fc    = params.data.failure_count;
                const sc    = params.data.success_count;
                const total = fc + sc;
                const rate  = total ? Math.round((fc / total) * 100) : 0;
                const pct   = rate > 0
                    ? `<div style="color:${c.textMuted || 'rgba(226,244,255,0.3)'};font-size:11px;margin-top:6px;padding-top:5px;border-top:1px solid ${withAlpha(c.border || '#1e3a5f', 0.5)}">${rate}% high-severity rate</div>`
                    : '';
                return (
                    `<div style="font-weight:700;font-size:12px;color:${c.textPrimary};margin-bottom:7px">${DAYS[dayIdx]}&nbsp;&nbsp;${hour}:00 &ndash; ${hour + 1}:00</div>` +
                    `<div style="color:${primary};margin-bottom:3px;font-size:11px">&#9679; ${sc.toLocaleString()} low-severity</div>` +
                    `<div style="color:${danger};font-size:11px">&#9679; ${fc.toLocaleString()} high-severity</div>` +
                    pct
                );
            },
        },
        grid: { left: 44, right: 16, top: 4, bottom: 26, containLabel: false },
        xAxis: {
            type: 'category',
            data: HOURS,
            splitArea: {
                show: true,
                areaStyle: {
                    color: [
                        withAlpha(c.border || '#1e3a5f', 0.07),
                        'transparent',
                    ],
                },
            },
            axisLabel: {
                color:    withAlpha(c.textMuted || 'rgba(226,244,255,0.30)', 0.9),
                fontSize: 9,
                interval: 2,
                margin:   6,
            },
            axisLine: { show: false },
            axisTick: { show: false },
        },
        yAxis: {
            type: 'category',
            data: DAYS,
            splitArea: {
                show: true,
                areaStyle: {
                    color: [
                        withAlpha(c.surface || '#0f1f38', 0.45),
                        'transparent',
                    ],
                },
            },
            axisLabel: {
                color:    withAlpha(c.textSecondary || 'rgba(226,244,255,0.55)', 0.85),
                fontSize: 10,
                margin:   8,
            },
            axisLine: { show: false },
            axisTick: { show: false },
        },
        visualMap: {
            min: 0,
            max: 1,
            show: false,
            inRange: { color: heatmapColors },
        },
        series: [
            {
                type: 'heatmap',
                data: chartData,
                /* no cell labels — tooltip handles the detail */
                label: { show: false },
                itemStyle: {
                    borderRadius: 3,
                    borderColor:  withAlpha(c.background || '#050d1a', 0.85),
                    borderWidth:  1.5,
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur:  14,
                        shadowColor: withAlpha(primary, 0.45),
                        borderColor: primary,
                        borderWidth: 1.5,
                    },
                },
            },
        ],
    };

    return (
        <div ref={containerRef} style={{ width: '100%' }}>
            {isLoading ? loadingComponent : !hasData ? (
                <div style={{
                    height: resolvedHeight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: c.textMuted, fontSize: 13, fontWeight: 500,
                }}>
                    {noDataComponent}
                </div>
            ) : (
                <>
                    {/* legend strip */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
                    }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                            <span style={{
                                width: 8, height: 8, borderRadius: 2,
                                background: primary, display: 'inline-block',
                            }} />
                            <span style={{
                                fontSize: 10, color: c.textMuted,
                                fontWeight: 600, letterSpacing: '0.5px',
                            }}>
                                Low
                            </span>
                        </span>

                        <span style={{
                            flex: 1, height: 5, borderRadius: 3,
                            background: `linear-gradient(to right, ${heatmapColors.join(', ')})`,
                            display: 'inline-block',
                        }} />

                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                            <span style={{
                                fontSize: 10, color: c.textMuted,
                                fontWeight: 600, letterSpacing: '0.5px',
                            }}>
                                High
                            </span>
                            <span style={{
                                width: 8, height: 8, borderRadius: 2,
                                background: danger, display: 'inline-block',
                            }} />
                        </span>
                    </div>

                    {ready && (
                        <ReactECharts
                            option={option}
                            style={{ width: '100%', height: resolvedHeight }}
                            notMerge
                        />
                    )}
                </>
            )}
        </div>
    );
}
