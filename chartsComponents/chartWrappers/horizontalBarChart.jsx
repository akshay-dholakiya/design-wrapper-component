import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import sidebarColors, { chartColors, fontStyles } from '../../colors';
import { spacing } from '../../spacing';
import { EagleEyeLoader } from '../../loaders';

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
    labelMarginX: px(spacing.md, 12),
    labelMarginY: px(spacing.sm, 8),
    singleBarWidth: '60%',
    multiBarWidth: '28%',
    singleBarMaxWidth: 44,
    multiBarMaxWidth: 22,
    barBorderRadius: 6,
    tooltipHeaderPadY: px(spacing.xs, 4),
    tooltipHeaderPadX: px(spacing.sm, 8),
    tooltipRowPadY: px(spacing.none, 0),
    tooltipRowPadX: px(spacing.sm, 8),
    tooltipDotSize: px(spacing.sm, 8),
    tooltipDotGap: px(spacing.sm, 8),
    tooltipValueGap: px(spacing.sm, 8),
    legendItemGap: px(spacing.xl, 20),
    legendPadding: px(spacing.xs, 4),
    gridLeft: px(spacing['5xl'], 48),
    gridRight: px(spacing['3xl'], 32),
    gridTop: px(spacing['3xl'], 32),
    gridBottom: px(spacing['7xl'], 80),
};

const getResponsiveLabelStyle = () => {
    if (typeof window === 'undefined') {
        return fontStyles.bodySmall;
    }

    if (window.innerWidth < 640) {
        return { ...fontStyles.bodySmall, fontSize: '10px' };
    }

    if (window.innerWidth < 1024) {
        return { ...fontStyles.bodySmall, fontSize: '11px' };
    }

    return fontStyles.bodySmall;
};

const baseAxisStyle = (labelStyle, isYAxis = false) => ({
    axisLabel: {
        color: withAlpha(sidebarColors.textPrimary, 0.9),
        ...labelStyle,
        margin: isYAxis ? chartTokens.labelMarginY : chartTokens.labelMarginX,
    },
    axisLine: { lineStyle: { color: withAlpha(chartColors.ui.axis, 0.7) } },
    axisTick: { show: false },
    splitLine: {
        show: isYAxis,
        lineStyle: { color: withAlpha(chartColors.ui.grid, 0.22) },
    },
});

export default function HorizontalBarChartWrapper({
    data = [],
    children = null,
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = 'No data available',
    xAxisField = 'name',
    yAxisFields = null,
    colorMap = {},
    height = 400,
    tickCount,
    yAxisInterval = 5,
    fillMissingWithZero = false,
    onClick,
}) {
    const [labelStyle, setLabelStyle] = useState(getResponsiveLabelStyle());
    const containerRef = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const handleResize = () => setLabelStyle(getResponsiveLabelStyle());
        window.addEventListener('resize', handleResize);

        const el = containerRef.current;
        if (el) {
            const observer = new ResizeObserver((entries) => {
                const entry = entries[0];
                if (entry) {
                    const { width, height } = entry.contentRect;
                    setReady(width > 0 && height > 0);
                }
            });
            observer.observe(el);
            setReady(el.clientWidth > 0 && el.clientHeight > 0);
            return () => {
                window.removeEventListener('resize', handleResize);
                observer.disconnect();
            };
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const hasData = Array.isArray(data) && data.length > 0;

    const categories = hasData ? data.map((item) => item?.[xAxisField]) : [];

    const detectedFields = hasData
        ? Object.keys(data[0] || {}).filter((key) => key !== xAxisField)
        : [];

    const seriesFields = Array.isArray(yAxisFields) && yAxisFields.length > 0
        ? yAxisFields
        : detectedFields;

    const isSingleSeries = seriesFields.length === 1;

    const series = seriesFields.map((field, index) => {
        const seriesColor = colorMap[field] || chartColors.series[index % chartColors.series.length];
        return {
            name: field,
            type: 'bar',
            data: data.map((item) => {
                const rawValue = item?.[field];
                if (rawValue === null || rawValue === undefined || rawValue === '') {
                    return fillMissingWithZero ? 0 : null;
                }
                const value = Number(rawValue);
                return Number.isFinite(value) ? value : (fillMissingWithZero ? 0 : null);
            }),
            itemStyle: {
                color: seriesColor,
                borderRadius: chartTokens.barBorderRadius,
                borderColor: withAlpha(sidebarColors.background, 0.75),
                borderWidth: 1,
            },
            emphasis: {
                focus: 'series',
                itemStyle: {
                    color: withAlpha(seriesColor, 0.9),
                    shadowColor: withAlpha(seriesColor, 0.45),
                    shadowBlur: 6,
                },
            },
            barWidth: isSingleSeries ? chartTokens.singleBarWidth : chartTokens.multiBarWidth,
            barMaxWidth: isSingleSeries ? chartTokens.singleBarMaxWidth : chartTokens.multiBarMaxWidth,
            barGap: isSingleSeries ? '0%' : '10%',
            barCategoryGap: isSingleSeries ? '42%' : '30%',
        };
    });

    const numericValues = series.flatMap((item) =>
        (Array.isArray(item.data) ? item.data : []).filter((v) => typeof v === 'number' && Number.isFinite(v)),
    );
    const maxValue = numericValues.length > 0 ? Math.max(...numericValues) : 1;
    const smartInterval = maxValue <= 10 ? 1 : maxValue <= 100 ? 5 : maxValue <= 1000 ? 50 : yAxisInterval;
    const xAxisMax = Math.max(smartInterval, Math.ceil(maxValue / smartInterval) * smartInterval);

    const interval = tickCount && categories.length > tickCount
        ? Math.ceil(categories.length / tickCount) - 1
        : 0;

    const option = {
        backgroundColor: sidebarColors.backgroundSoft,
        tooltip: {
            trigger: 'axis',
            confine: true,
            axisPointer: {
                type: 'shadow',
                shadowStyle: {
                    color: withAlpha(chartColors.ui.grid, 0.15),
                },
            },
            backgroundColor: chartColors.ui.tooltip,
            borderColor: chartColors.ui.tooltipBorder,
            borderWidth: 1,
            extraCssText: `border-radius:8px;box-shadow:0 8px 24px ${withAlpha(sidebarColors.background, 0.55)};`,
            textStyle: { color: sidebarColors.textPrimary, ...fontStyles.bodySmall },
            formatter: (params = []) => {
                if (!params.length) return '';
                let result = `<div style="padding:${chartTokens.tooltipHeaderPadY + 2}px ${chartTokens.tooltipHeaderPadX + 2}px ${chartTokens.tooltipHeaderPadY + 4}px ${chartTokens.tooltipHeaderPadX + 2}px;font-weight:${fontStyles.heading6?.fontWeight || 700};font-size:${fontStyles.body?.fontSize || '14px'};color:${sidebarColors.textPrimary};border-bottom:1px solid ${withAlpha(sidebarColors.border, 0.8)};margin-bottom:2px;">${params[0].axisValue}</div>`;
                params.forEach((param) => {
                    const value = typeof param.value === 'number'
                        ? (param.value % 1 !== 0 ? param.value.toFixed(1) : param.value)
                        : param.value;
                    const label = String(param.seriesName || '').replace(/_/g, ' ');
                    result += `<div style="padding:${chartTokens.tooltipRowPadY + 4}px ${chartTokens.tooltipRowPadX + 2}px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;column-gap:${chartTokens.tooltipDotGap}px;min-width:220px;line-height:1.35;">
                        <span style="display:inline-block;width:${chartTokens.tooltipDotSize}px;height:${chartTokens.tooltipDotSize}px;border-radius:50%;background:${param.color};"></span>
                        <span style="color:${sidebarColors.textSecondary};text-transform:capitalize;padding-right:${chartTokens.tooltipValueGap}px;">${label}</span>
                        <strong style="color:${sidebarColors.textPrimary};font-weight:${fontStyles.heading6?.fontWeight || 700};text-align:right;">${value}</strong>
                    </div>`;
                });
                return result;
            },
        },
        legend: {
            show: seriesFields.length > 1,
            data: seriesFields,
            bottom: 0,
            left: 'center',
            orient: 'horizontal',
            itemWidth: 25,
            itemHeight: 14,
            itemGap: chartTokens.legendItemGap,
            icon: 'roundRect',
            padding: [chartTokens.legendPadding, chartTokens.legendPadding, chartTokens.legendPadding, chartTokens.legendPadding],
            textStyle: { color: withAlpha(sidebarColors.textPrimary, 0.92), ...fontStyles.body },
        },
        grid: {
            left: px(spacing['7xl'], 80),
            right: chartTokens.gridRight,
            top: chartTokens.gridTop,
            bottom: chartTokens.gridBottom,
            containLabel: true,
            backgroundColor: sidebarColors.backgroundSoft,
        },
        xAxis: {
            type: 'value',
            ...baseAxisStyle(labelStyle, true),
            max: xAxisMax,
            minInterval: 1,
            axisLabel: {
                ...baseAxisStyle(labelStyle, true).axisLabel,
                formatter: (value) => {
                    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
                    if (value % 1 !== 0) return value.toFixed(1);
                    return value;
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: [
                        withAlpha(sidebarColors.textPrimary, 0.03),
                        withAlpha(sidebarColors.textPrimary, 0.08),
                    ],
                },
            },
        },
        yAxis: {
            type: 'category',
            data: categories,
            ...baseAxisStyle(labelStyle),
            axisTick: {
                show: true,
                alignWithLabel: true,
                lineStyle: { color: withAlpha(chartColors.ui.axis, 0.55) },
            },
            axisLabel: {
                ...baseAxisStyle(labelStyle).axisLabel,
                interval,
                align: 'right',
                hideOverlap: true,
                overflow: 'truncate',
                width: 120,
            },
            boundaryGap: true,
        },
        series,
    };

    const chartContent = children || (
        ready && (
            <ReactECharts
                option={option}
                style={{ width: '100%', height: '100%' }}
                onEvents={onClick ? { click: onClick } : {}}
            />
        )
    );

    const resolvedHeight = typeof height === 'number' ? `${height}px` : (height || '300px');

    return (
        <div ref={containerRef} style={{ width: '100%', height: resolvedHeight, minHeight: 150 }}>
            {isLoading ? (
                loadingComponent
            ) : (
                hasData ? (
                    chartContent
                ) : (
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: sidebarColors.textSecondary,
                            ...fontStyles.body,
                        }}
                    >
                        {noDataComponent}
                    </div>
                )
            )}
        </div>
    );
}
