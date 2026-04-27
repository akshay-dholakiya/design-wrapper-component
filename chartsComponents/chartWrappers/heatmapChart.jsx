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

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const HOURS = Array.from({ length: 24 }, (_, i) => `${i}h`);

/**
 * HeatmapChartWrapper
 *
 * Renders a weekday × hour heatmap colored by failure rate (green → red).
 *
 * Props:
 *   data               — array of { weekday: 1–7, hour: 0–23, failure_count, success_count }
 *   height             — chart height in px (default 220)
 *   isLoading          — show loader skeleton
 *   loadingComponent   — custom loader node
 *   noDataComponent    — custom empty-state node
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

    const successColor = c.success || '#22c55e';
    const failureColor = c.danger || '#ef4444';
    const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

    const chartData = data.map((d) => {
        const fc = d.failure_count ?? 0;
        const sc = d.success_count ?? 0;
        const total = fc + sc;
        return {
            value: [d.hour, d.weekday - 1, total ? fc / total : 0],
            failure_count: fc,
            success_count: sc,
        };
    });

    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            backgroundColor: c.backgroundSoft,
            borderColor: c.borderSoft,
            borderWidth: 1,
            extraCssText: `border-radius:8px;box-shadow:0 8px 24px ${withAlpha(c.background, 0.6)};`,
            textStyle: { color: c.textPrimary, fontSize: 12 },
            formatter: (params) => {
                const [hour, dayIdx] = params.data.value;
                const fc = params.data.failure_count;
                const sc = params.data.success_count;
                const total = fc + sc;
                const rate = total ? Math.round((fc / total) * 100) : 0;
                return (
                    `<strong>${DAYS[dayIdx]}</strong> ${hour}:00–${hour + 1}:00` +
                    `<br/><span style="color:${successColor}">✓ ${sc} success</span>` +
                    `<br/><span style="color:${failureColor}">✗ ${fc} failure${fc !== 1 ? 's' : ''}</span>` +
                    `<br/><span style="color:${c.textMuted};font-size:11px">${rate}% failure rate</span>`
                );
            },
        },
        grid: { left: 44, right: 12, top: 8, bottom: 32, containLabel: false },
        xAxis: {
            type: 'category',
            data: HOURS,
            splitArea: { show: true },
            axisLabel: { color: c.textMuted, fontSize: 9, interval: 2 },
            axisLine: { show: false },
            axisTick: { show: false },
        },
        yAxis: {
            type: 'category',
            data: DAYS,
            splitArea: { show: true },
            axisLabel: { color: c.textMuted, fontSize: 10 },
            axisLine: { show: false },
            axisTick: { show: false },
        },
        visualMap: {
            min: 0,
            max: 1,
            show: false,
            inRange: { color: [successColor, failureColor] },
        },
        series: [
            {
                type: 'heatmap',
                data: chartData,
                label: {
                    show: true,
                    formatter: (p) => {
                        const { failure_count: fc, success_count: sc } = p.data;
                        if (fc === 0 && sc === 0) return '';
                        return fc > 0 ? `${sc}✓\n${fc}✗` : `${sc}✓`;
                    },
                    color: '#fff',
                    fontSize: 8,
                    fontWeight: 700,
                    lineHeight: 12,
                },
                emphasis: {
                    itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.3)' },
                },
            },
        ],
    };

    return (
        <div ref={containerRef} style={{ width: '100%' }}>
            {isLoading ? loadingComponent : !hasData ? (
                <div style={{
                    height: resolvedHeight, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: c.textMuted, fontSize: 13,
                }}>
                    {noDataComponent}
                </div>
            ) : (
                <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <span style={{ width: 10, height: 10, borderRadius: 2, background: successColor, display: 'inline-block' }} />
                            <span style={{ fontSize: 11, color: c.textMuted, fontWeight: 500 }}>Success</span>
                        </span>
                        <span style={{
                            flex: 1, height: 6, borderRadius: 3,
                            background: `linear-gradient(to right, ${successColor}, ${failureColor})`,
                            display: 'inline-block',
                        }} />
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <span style={{ fontSize: 11, color: c.textMuted, fontWeight: 500 }}>Failure</span>
                            <span style={{ width: 10, height: 10, borderRadius: 2, background: failureColor, display: 'inline-block' }} />
                        </span>
                    </div>
                    {ready && (
                        <ReactECharts
                            option={option}
                            style={{ width: '100%', height: resolvedHeight }}
                        />
                    )}
                </>
            )}
        </div>
    );
}
