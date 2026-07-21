import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import sidebarColors, { chartColors, fontStyles } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import EagleEyeLoader from './EagleEyeLoader';

const withAlpha = (hex, alpha) => {
    if (typeof hex !== 'string') return hex;
    if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
    const normalized = hex.replace('#', '');
    if (![3, 6].includes(normalized.length)) return hex;
    const full = normalized.length === 3
        ? normalized.split('').map((ch) => `${ch}${ch}`).join('')
        : normalized;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const px = (value, fallback = 0) => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value.endsWith('px')) {
        const parsed = Number.parseInt(value, 10);
        return Number.isFinite(parsed) ? parsed : fallback;
    }
    return fallback;
};

const chartTokens = {
    gridLeft: px(spacing['5xl'], 48),
    gridRight: px(spacing.lg, 16),
    gridTop: px(spacing.xl, 20),
    gridBottom: px(spacing['4xl'], 40),
    tooltipHeaderPadY: px(spacing.xs, 4),
    tooltipHeaderPadX: px(spacing.sm, 8),
};

const formatDayLabel = (value) => {
    if (typeof value !== 'string') return value;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}-${day}`;
};

/**
 * TimelineChartWrapper — day/count activity timeline.
 * Renders a smoothed line with gradient fill under the curve; a single
 * numeric series plotted against a daily category axis (day → count).
 */
export default function TimelineChartWrapper({
    data = [],
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = 'No data available',
    xAxisField = 'day',
    yAxisField = 'count',
    color,
    height = 280,
    tickCount = 8,
    onClick,
}) {
    const containerRef = useRef(null);
    const chartRef = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            const el = containerRef.current;
            setReady(Boolean(el && el.clientWidth > 0 && el.clientHeight > 0));
        };
        checkSize();
        window.addEventListener('resize', checkSize);

        const el = containerRef.current;
        let rafId = null;
        let observer = null;
        if (el) {
            observer = new ResizeObserver((entries) => {
                const entry = entries[0];
                if (entry) {
                    const { width, height } = entry.contentRect;
                    setReady(width > 0 && height > 0);
                    if (rafId !== null) cancelAnimationFrame(rafId);
                    rafId = requestAnimationFrame(() => {
                        chartRef.current?.getEchartsInstance()?.resize();
                    });
                }
            });
            observer.observe(el);
        }

        return () => {
            window.removeEventListener('resize', checkSize);
            if (rafId !== null) cancelAnimationFrame(rafId);
            observer?.disconnect();
        };
    }, []);

    const hasData = Array.isArray(data) && data.length > 0;

    if (!hasData) {
        return isLoading ? loadingComponent : (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height,
                    color: sidebarColors.textSecondary,
                    ...fontStyles.body,
                }}
            >
                {noDataComponent}
            </div>
        );
    }

    const seriesColor = color || chartColors.series[0];

    const categories = data.map((item) => item?.[xAxisField]);
    const values = data.map((item) => {
        const value = Number(item?.[yAxisField]);
        return Number.isFinite(value) ? value : 0;
    });

    const interval = categories.length > tickCount
        ? Math.ceil(categories.length / tickCount) - 1
        : 0;

    const option = {
        backgroundColor: 'transparent',
        animationDuration: 650,
        animationEasing: 'cubicOut',
        tooltip: {
            trigger: 'axis',
            confine: true,
            axisPointer: {
                type: 'line',
                lineStyle: { color: chartColors.ui.axis, width: 1, type: 'dashed' },
            },
            backgroundColor: chartColors.ui.tooltip,
            borderColor: chartColors.ui.tooltipBorder,
            borderWidth: 1,
            extraCssText: `border-radius:8px;box-shadow:0 8px 24px ${withAlpha(sidebarColors.background, 0.55)};`,
            textStyle: { color: sidebarColors.textPrimary, ...fontStyles.bodySmall },
            formatter: (params = []) => {
                const p = params[0];
                if (!p) return '';
                return `<div style="padding:${chartTokens.tooltipHeaderPadY + 2}px ${chartTokens.tooltipHeaderPadX + 2}px;">
                    <div style="color:${sidebarColors.textSecondary};font-size:11px;margin-bottom:2px;">${p.axisValue}</div>
                    <strong style="color:${sidebarColors.textPrimary};font-weight:${fontStyles.heading6?.fontWeight || 700};">${p.value.toLocaleString()}</strong>
                </div>`;
            },
        },
        grid: {
            left: chartTokens.gridLeft,
            right: chartTokens.gridRight,
            top: chartTokens.gridTop,
            bottom: chartTokens.gridBottom,
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: categories,
            boundaryGap: false,
            axisLine: { lineStyle: { color: withAlpha(chartColors.ui.axis, 0.7) } },
            axisTick: { show: false },
            axisLabel: {
                color: chartColors.ui.label,
                ...fontStyles.bodySmall,
                interval,
                formatter: formatDayLabel,
            },
            splitLine: { show: false },
        },
        yAxis: {
            type: 'value',
            minInterval: 1,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: chartColors.ui.label, ...fontStyles.bodySmall },
            splitLine: { lineStyle: { color: withAlpha(chartColors.ui.grid, 0.22) } },
        },
        series: [
            {
                type: 'line',
                name: yAxisField,
                data: values,
                smooth: true,
                showSymbol: false,
                symbolSize: 6,
                clip: false,
                lineStyle: {
                    color: seriesColor,
                    width: 2.5,
                    shadowColor: withAlpha(seriesColor, 0.45),
                    shadowBlur: 12,
                },
                itemStyle: {
                    color: seriesColor,
                    borderColor: sidebarColors.background,
                    borderWidth: 1.5,
                },
                emphasis: {
                    focus: 'series',
                    scale: true,
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: withAlpha(seriesColor, 0.38) },
                            { offset: 1, color: withAlpha(seriesColor, 0) },
                        ],
                    },
                },
            },
        ],
    };

    const resolvedHeight = typeof height === 'number' ? `${height}px` : (height || '280px');

    return (
        <div ref={containerRef} style={{ width: '100%', height: resolvedHeight, minHeight: 160 }}>
            {isLoading ? loadingComponent : (
                ready && (
                    <ReactECharts
                        ref={chartRef}
                        option={option}
                        style={{ width: '100%', height: '100%' }}
                        onEvents={onClick ? { click: onClick } : {}}
                    />
                )
            )}
        </div>
    );
}
