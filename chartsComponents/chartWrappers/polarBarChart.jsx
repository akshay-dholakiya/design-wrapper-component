import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import sidebarColors, { chartColors, fontStyles } from '../../colors';
import { spacing } from '../../spacing';
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

const px = (value, fallback = 0) => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value.endsWith('px')) {
        const parsed = Number.parseInt(value, 10);
        return Number.isFinite(parsed) ? parsed : fallback;
    }
    return fallback;
};

const tokens = {
    tooltipPadY: px(spacing.xs, 4),
    tooltipPadX: px(spacing.sm, 8),
};

export default function PolarBarChartWrapper({
    data = [],
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = 'No data available',
    labelField = 'name',
    valueField = 'value',
    colorMap = {},
    colors = [],
    height = 400,
    onClick,
}) {
    const containerRef = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            const el = containerRef.current;
            setReady(Boolean(el && el.clientWidth > 0 && el.clientHeight > 0));
        };
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
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

    const themeSeriesColors = Array.isArray(chartColors?.series) && chartColors.series.length > 0
        ? chartColors.series
        : [
            sidebarColors.primary,
            sidebarColors.accent,
            sidebarColors.warning,
            sidebarColors.danger,
            sidebarColors.success,
            sidebarColors.info,
        ].filter(Boolean);

    const categories = data.map((item, index) => {
        const rawLabel = item?.[labelField] ?? item?.name ?? `Item ${index + 1}`;
        return typeof rawLabel === 'string' ? rawLabel : String(rawLabel);
    });

    const seriesData = data.map((item, index) => {
        const rawValue = item?.[valueField] ?? 0;
        const value = Number(rawValue);
        const color = colorMap?.[categories[index]] || colors[index] || themeSeriesColors[index % themeSeriesColors.length];
        return {
            value: Number.isFinite(value) ? value : 0,
            itemStyle: { color, borderRadius: 4 },
            raw: item,
        };
    });

    const maxValue = Math.max(1, ...seriesData.map((d) => d.value));

    const option = {
        backgroundColor: 'transparent',
        animationDuration: 650,
        animationEasing: 'cubicOut',
        polar: {
            radius: [30, '70%'],
        },
        angleAxis: {
            type: 'category',
            data: categories,
            startAngle: 90,
            axisLine: { lineStyle: { color: withAlpha(chartColors.ui.axis, 0.4) } },
            axisLabel: {
                color: sidebarColors.textPrimary,
                ...fontStyles.bodySmall,
                overflow: 'truncate',
                width: 80,
            },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: withAlpha(chartColors.ui.grid, 0.18) } },
        },
        radiusAxis: {
            type: 'value',
            max: maxValue,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: sidebarColors.textMuted, ...fontStyles.bodySmall },
            splitLine: { lineStyle: { color: withAlpha(chartColors.ui.grid, 0.18) } },
        },
        tooltip: {
            trigger: 'item',
            confine: true,
            backgroundColor: chartColors.ui.tooltip,
            borderColor: chartColors.ui.tooltipBorder,
            borderWidth: 1,
            extraCssText: `border-radius:8px;box-shadow:0 10px 26px ${withAlpha(sidebarColors.background, 0.55)};white-space:nowrap;`,
            textStyle: { color: sidebarColors.textPrimary, ...fontStyles.bodySmall },
            formatter: (param) => {
                const name = categories[param.dataIndex] ?? 'Unknown';
                const value = Number.isFinite(param?.value) ? Number(param.value).toLocaleString() : '0';
                return `<div style="padding:${tokens.tooltipPadY + 2}px ${tokens.tooltipPadX + 4}px;font-weight:${fontStyles.heading6?.fontWeight || 700};color:${sidebarColors.textPrimary};">${name}: ${value}</div>`;
            },
        },
        series: [
            {
                type: 'bar',
                coordinateSystem: 'polar',
                data: seriesData,
                roundCap: true,
                emphasis: {
                    focus: 'self',
                    itemStyle: { shadowBlur: 10, shadowColor: withAlpha(sidebarColors.primary, 0.4) },
                },
            },
        ],
    };

    return (
        <div ref={containerRef} style={{ width: '100%', height }}>
            {isLoading ? loadingComponent : (
                ready && (
                    <ReactECharts
                        option={option}
                        style={{ width: '100%', height: '100%' }}
                        onEvents={onClick ? { click: (params) => onClick(params?.data?.raw ?? params?.data) } : {}}
                    />
                )
            )}
        </div>
    );
}
