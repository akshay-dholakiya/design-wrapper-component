import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import sidebarColors, { chartColors, fontStyles } from '../../theme/colors';
import EagleEyeLoader from './EagleEyeLoader';

export default function DonutChartWrapper({
    data = [],
    children = null,
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = 'No data available',
    labelField = 'name',
    valueField = 'value',
    colorField = 'color',
    colorMap = {},
    colors = [],
    height = 400,
    radiusInner = '48%',
    radiusOuter = '78%',
    showLegend = true,
    showLabel = true,
    center = ['50%', '44%'],
    centerText = '',
    centerSubtext = '',
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

    const hasData = Array.isArray(data) && data.length > 0 && typeof data[0] === 'object';

    if (!hasData) {
        return isLoading ? loadingComponent : (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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

    const normalizedData = data.map((item, index) => {
        const rawLabel = item?.[labelField] ?? item?.name ?? item?.label ?? `Slice ${index + 1}`;
        const label = typeof rawLabel === 'string' ? rawLabel : String(rawLabel);

        const rawValue = item?.[valueField] ?? item?.value ?? 0;
        const value = Number(rawValue);

        const sliceColor = item?.[colorField]
            || colorMap?.[label]
            || colors[index]
            || themeSeriesColors[index % themeSeriesColors.length]
            || sidebarColors.primary;

        return {
            name: label,
            value: Number.isFinite(value) ? value : 0,
            itemStyle: {
                color: sliceColor,
            },
            raw: item,
        };
    });

    const graphic = centerText ? [
        {
            type: 'text',
            left: 'center',
            top: centerSubtext ? '42%' : 'middle',
            style: {
                text: centerText,
                font: `bold 22px ${fontStyles.body?.fontFamily || 'sans-serif'}`,
                fill: sidebarColors.textPrimary,
                textAlign: 'center',
            },
        },
        ...(centerSubtext ? [{
            type: 'text',
            left: 'center',
            top: '56%',
            style: {
                text: centerSubtext,
                font: `11px ${fontStyles.body?.fontFamily || 'sans-serif'}`,
                fill: sidebarColors.textSecondary,
                textAlign: 'center',
            },
        }] : []),
    ] : [];

    const option = {
        backgroundColor: sidebarColors.backgroundSoft,
        tooltip: {
            trigger: 'item',
            backgroundColor: chartColors.ui.tooltip,
            borderColor: chartColors.ui.tooltipBorder,
            textStyle: { color: sidebarColors.textPrimary, ...fontStyles.bodySmall },
        },
        legend: {
            show: showLegend,
            type: 'scroll',
            bottom: 0,
            left: 'center',
            icon: 'circle',
            textStyle: {
                color: sidebarColors.textPrimary,
                ...fontStyles.bodySmall,
            },
        },
        graphic,
        series: [
            {
                type: 'pie',
                radius: [radiusInner, radiusOuter],
                center,
                avoidLabelOverlap: false,
                itemStyle: {
                    borderColor: sidebarColors.background,
                    borderWidth: 2,
                },
                label: {
                    show: showLabel,
                    color: sidebarColors.textPrimary,
                    ...fontStyles.bodySmall,
                    formatter: '{b}',
                },
                labelLine: {
                    show: showLabel,
                    lineStyle: { color: chartColors.ui.axis },
                },
                emphasis: {
                    label: {
                        show: true,
                        fontWeight: 'bold',
                        ...fontStyles.body,
                    },
                },
                data: normalizedData,
            },
        ],
    };

    const chartContent = children || (
        ready && (
            <ReactECharts
                ref={chartRef}
                option={option}
                style={{ width: '100%', height: '100%' }}
                onEvents={onClick ? { click: onClick } : {}}
            />
        )
    );

    const resolvedHeight = typeof height === 'number' ? `${height}px` : (height || '400px');

    return (
        <div ref={containerRef} style={{ width: '100%', height: resolvedHeight, minHeight: 180 }}>
            {isLoading ? loadingComponent : chartContent}
        </div>
    );
}
