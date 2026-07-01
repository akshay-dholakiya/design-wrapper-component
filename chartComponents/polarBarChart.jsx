import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { getLiveSidebarColors, chartColors as getChartColors } from '../colors';
import EagleEyeLoader from '../chartsComponents/chartWrappers/EagleEyeLoader';

/* ─── helpers ──────────────────────────────────────────────── */

const withAlpha = (hex, alpha) => {
    if (typeof hex !== 'string') return hex;
    if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
    const normalized = hex.replace('#', '');
    if (![3, 6].includes(normalized.length)) return hex;
    const full =
        normalized.length === 3
            ? normalized.split('').map(ch => `${ch}${ch}`).join('')
            : normalized;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/* ─── component ────────────────────────────────────────────── */

/**
 * PolarBarChartWrapper
 *
 * Radial / polar bar chart — bars extend outward from a centre ring,
 * one bar per category, each with its own theme colour and a round cap.
 * Built entirely on echarts-for-react.
 *
 * Props
 *   data             – array of objects
 *   labelField       – key for the category label   (default: 'name')
 *   valueField       – key for the numeric value     (default: 'value')
 *   colorField       – optional per-item colour key
 *   colorMap         – { [label]: colour }
 *   colors           – explicit colour array (overrides theme)
 *   height           – px number or css string       (default: 320)
 *   showLegend       – show / hide the legend        (default: true)
 *   isLoading        – show loader
 *   loadingComponent – custom loader node
 *   noDataComponent  – custom empty-state node
 *   onClick          – (rawItem) => void
 */
export default function PolarBarChartWrapper({
    data = [],
    labelField       = 'name',
    valueField       = 'value',
    colorField       = 'color',
    colorMap         = {},
    colors           = [],
    height           = 320,
    showLegend       = true,
    isLoading        = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent  = 'No data available',
    onClick,
}) {
    const containerRef = useRef(null);
    const [ready, setReady]   = useState(false);
    const c = getLiveSidebarColors();

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new ResizeObserver(entries => {
            const { width, height: h } = entries[0]?.contentRect ?? {};
            if (width > 0 && h > 0) setReady(true);
        });
        observer.observe(el);
        setReady(el.clientWidth > 0 && el.clientHeight > 0);
        return () => observer.disconnect();
    }, []);

    /* ── resolve theme series colours ── */
    const themeSeriesColors =
        Array.isArray(getChartColors?.series) && getChartColors.series.length > 0
            ? getChartColors.series
            : [
                  c.primary,
                  c.accentOrange,
                  c.accentPurple,
                  c.accentTeal,
                  c.accentPink,
                  c.accentIndigo,
                  c.accentCyan,
                  c.warning,
                  c.danger,
                  c.accentViolet,
              ].filter(Boolean);

    /* ── validate ── */
    const hasData = Array.isArray(data) && data.length > 0;
    const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

    if (!hasData) {
        return isLoading ? loadingComponent : (
            <div style={{
                height: resolvedHeight,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: c.textMuted, fontSize: 13, fontWeight: 500,
            }}>
                {noDataComponent}
            </div>
        );
    }

    /* ── normalise data ── */
    const normalised = data.map((item, idx) => {
        const rawLabel = item?.[labelField] ?? item?.name ?? `Item ${idx + 1}`;
        const label    = typeof rawLabel === 'string' ? rawLabel : String(rawLabel);
        const value    = Number(item?.[valueField] ?? item?.value ?? 0);
        const color    =
            item?.[colorField] ||
            colorMap?.[label]  ||
            colors[idx]        ||
            themeSeriesColors[idx % themeSeriesColors.length];

        return { label, value: Number.isFinite(value) ? value : 0, color, raw: item };
    });

    const total    = normalised.reduce((s, d) => s + d.value, 0);
    const maxValue = Math.max(...normalised.map(d => d.value), 1);

    /* ── echarts option ── */
    const option = {
        backgroundColor: 'transparent',
        animation:          true,
        animationDuration:  800,
        animationEasing:    'cubicOut',

        tooltip: {
            trigger: 'item',
            backgroundColor: c.backgroundSoft,
            borderColor:     withAlpha(c.primary, 0.35),
            borderWidth:     1,
            extraCssText: [
                'border-radius:10px',
                `box-shadow:0 8px 32px ${withAlpha(c.background, 0.85)}`,
                'padding:10px 14px',
                'min-width:160px',
            ].join(';'),
            textStyle: { color: c.textPrimary, fontSize: 12 },
            formatter: params => {
                const pct = total > 0
                    ? ((params.value / total) * 100).toFixed(1)
                    : '0';
                return (
                    `<div style="font-weight:700;margin-bottom:6px;color:${params.color}">${params.name}</div>` +
                    `<div style="color:${c.textPrimary}">Count: <strong>${Number(params.value).toLocaleString()}</strong></div>` +
                    `<div style="color:${c.textMuted};font-size:11px;margin-top:3px">${pct}% of total</div>`
                );
            },
        },

        legend: showLegend ? {
            type:        'scroll',
            bottom:      0,
            left:        'center',
            orient:      'horizontal',
            icon:        'circle',
            itemWidth:   8,
            itemHeight:  8,
            itemGap:     12,
            textStyle:   { color: c.textSecondary, fontSize: 10, fontWeight: 500 },
            pageIconColor:         c.primary,
            pageIconInactiveColor: c.textMuted,
            pageTextStyle:         { color: c.textMuted, fontSize: 10 },
            data: normalised.map(d => ({ name: d.label, itemStyle: { color: d.color } })),
        } : { show: false },

        polar: {
            radius: ['18%', '72%'],
            center: ['50%', showLegend ? '46%' : '50%'],
        },

        angleAxis: {
            type:       'category',
            data:       normalised.map(d => d.label),
            startAngle: 90,
            boundaryGap: true,
            axisLine:  { show: false },
            axisTick:  { show: false },
            splitLine: {
                show:      true,
                lineStyle: { color: withAlpha(c.border, 0.30), type: 'dashed' },
            },
            axisLabel: {
                color:      c.textSecondary,
                fontSize:   10,
                fontWeight: 500,
                interval:   0,
                /* truncate long labels */
                formatter: val =>
                    typeof val === 'string' && val.length > 10
                        ? `${val.slice(0, 10)}…`
                        : val,
            },
        },

        radiusAxis: {
            type:      'value',
            min:       0,
            max:       Math.ceil(maxValue * 1.15),
            axisLabel: { show: false },
            axisLine:  { show: false },
            axisTick:  { show: false },
            splitLine: {
                show:      true,
                lineStyle: { color: withAlpha(c.border, 0.18), type: 'dashed' },
            },
        },

        series: [
            {
                type:              'bar',
                coordinateSystem:  'polar',
                roundCap:          true,
                barMaxWidth:       14,
                data: normalised.map(d => ({
                    name:  d.label,
                    value: d.value,
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5, y: 0.5, r: 1,
                            colorStops: [
                                { offset: 0,   color: withAlpha(d.color, 0.25) },
                                { offset: 0.6, color: withAlpha(d.color, 0.70) },
                                { offset: 1,   color: d.color },
                            ],
                        },
                        shadowBlur:  6,
                        shadowColor: withAlpha(d.color, 0.25),
                    },
                })),
                emphasis: {
                    focus: 'self',
                    itemStyle: {
                        shadowBlur:  18,
                        shadowColor: withAlpha(c.primary, 0.50),
                    },
                },
                label: { show: false },
            },
        ],
    };

    return (
        <div ref={containerRef} style={{ width: '100%', height: resolvedHeight, minHeight: 180 }}>
            {isLoading ? loadingComponent : (
                ready && (
                    <ReactECharts
                        option={option}
                        style={{ width: '100%', height: '100%' }}
                        notMerge
                        onEvents={onClick
                            ? { click: p => onClick(p?.data?.raw ?? p?.data) }
                            : {}
                        }
                    />
                )
            )}
        </div>
    );
}
