import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { getLiveSidebarColors } from '../colors';
import EagleEyeLoader from '../chartsComponents/chartWrappers/EagleEyeLoader';

const withAlpha = (hex, alpha) => {
    if (typeof hex !== 'string') return hex;
    if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
    const n = hex.replace('#', '');
    if (![3, 6].includes(n.length)) return hex;
    const f = n.length === 3 ? n.split('').map(ch => ch + ch).join('') : n;
    return `rgba(${parseInt(f.slice(0,2),16)},${parseInt(f.slice(2,4),16)},${parseInt(f.slice(4,6),16)},${alpha})`;
};

export default function TreemapChartWrapper({
    data             = [],
    labelField       = 'name',
    valueField       = 'count',
    height           = 320,
    isLoading        = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent  = 'No data available',
    onClick,
}) {
    const containerRef = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(entries => {
            const { width, height: h } = entries[0]?.contentRect ?? {};
            if (width > 0 && h > 0) setReady(true);
        });
        ro.observe(el);
        setReady(el.clientWidth > 0 && el.clientHeight > 0);
        return () => ro.disconnect();
    }, []);

    const c   = getLiveSidebarColors();
    const P   = c.primary || '#0ea5e9';

    const hasData = Array.isArray(data) && data.length > 0;
    const numH    = typeof height === 'number' ? height : (parseInt(height, 10) || 320);

    if (isLoading) return loadingComponent;

    if (!hasData) return (
        <div style={{
            height: numH, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: c.textMuted, fontSize: 13, fontWeight: 500,
        }}>
            {noDataComponent}
        </div>
    );

    const sorted = [...data]
        .map((item, idx) => ({
            label: String(item?.[labelField] ?? `Item ${idx + 1}`).trim(),
            value: Number(item?.[valueField] || 0),
            raw:   item,
        }))
        .sort((a, b) => b.value - a.value);

    const total = sorted.reduce((s, d) => s + d.value, 0);
    const n     = sorted.length;

    /* highest-value cell → alpha 0.95 (darkest), lowest → 0.18 (lightest) */
    const ALPHA_MAX = 0.95;
    const ALPHA_MIN = 0.18;

    const treeData = sorted.map((d, idx) => {
        const t        = n > 1 ? idx / (n - 1) : 0;          // 0 = top, 1 = bottom
        const alpha    = ALPHA_MAX - t * (ALPHA_MAX - ALPHA_MIN);
        const fill     = withAlpha(P, alpha);
        const sharePct = total > 0 ? (d.value / total) * 100 : 0;
        const isTiny   = sharePct < 3;
        const isSmall  = sharePct < 7;

        /* text contrast: dark cells → white, light cells → slightly dimmer white */
        const textMain = alpha > 0.45 ? '#ffffff' : 'rgba(255,255,255,0.90)';
        const textSub  = alpha > 0.45 ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.50)';

        return {
            name:  d.label,
            value: d.value,
            itemStyle: {
                color:       fill,
                borderColor: withAlpha(P, Math.min(alpha + 0.12, 1) * 0.35),
                borderWidth: isTiny ? 0 : 1,
            },
            emphasis: {
                itemStyle: {
                    color:       withAlpha(P, Math.min(alpha + 0.15, 1)),
                    borderColor: P,
                    borderWidth: 1.5,
                    shadowBlur:  18,
                    shadowColor: withAlpha(P, 0.55),
                },
            },
            label: {
                show:     !isTiny,
                position: 'insideTopLeft',
                distance: 8,
                overflow: 'truncate',
                formatter: params => {
                    const cnt = Number(params.value).toLocaleString();
                    if (isSmall) {
                        return `{ct|${cnt}}`;
                    }
                    const nm = params.name.length > 14
                        ? params.name.slice(0, 13) + '…'
                        : params.name;
                    return `{nm|${nm}}\n{ct|${cnt}}`;
                },
                rich: {
                    nm: { color: textMain, fontSize: 11, fontWeight: 600, lineHeight: 16 },
                    ct: { color: textSub,  fontSize: 15, fontWeight: 800, lineHeight: 19 },
                },
            },
            _alpha: alpha,
            _raw:   d.raw,
        };
    });

    const option = {
        backgroundColor: 'transparent',
        animation:         true,
        animationDuration: 700,
        animationEasing:   'cubicOut',

        tooltip: {
            trigger:         'item',
            backgroundColor: c.backgroundSoft,
            borderColor:     withAlpha(P, 0.40),
            borderWidth:     1,
            extraCssText: [
                'border-radius:10px',
                `box-shadow:0 8px 32px ${withAlpha(c.background, 0.90)}`,
                'padding:10px 14px',
                'min-width:160px',
            ].join(';'),
            textStyle: { color: c.textPrimary, fontSize: 12 },
            formatter: params => {
                const pct  = total > 0 ? ((params.value / total) * 100).toFixed(1) : '0';
                const rank = sorted.findIndex(d => d.label === params.name) + 1;
                return (
                    `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">` +
                        `<span style="width:10px;height:10px;border-radius:3px;background:${P};display:inline-block;flex-shrink:0"></span>` +
                        `<span style="font-weight:700;font-size:12px;color:${c.textPrimary}">${params.name}</span>` +
                        `<span style="margin-left:auto;font-size:9px;font-weight:700;color:${c.textMuted};letter-spacing:0.8px">#${rank}</span>` +
                    `</div>` +
                    `<div style="display:flex;justify-content:space-between;align-items:center">` +
                        `<span style="color:${c.textMuted};font-size:11px">Count</span>` +
                        `<strong style="color:${P};font-size:14px">${Number(params.value).toLocaleString()}</strong>` +
                    `</div>` +
                    `<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">` +
                        `<span style="color:${c.textMuted};font-size:11px">Share</span>` +
                        `<span style="color:${c.textSecondary};font-size:11px;font-weight:600">${pct}%</span>` +
                    `</div>`
                );
            },
        },

        series: [{
            type:        'treemap',
            roam:        false,
            nodeClick:   false,
            breadcrumb:  { show: false },
            width:       '100%',
            height:      '100%',
            squareRatio: 0.65,
            visibleMin:  1,
            upperLabel:  { show: false },
            itemStyle:   { gapWidth: 3, borderRadius: 6, borderWidth: 0 },
            levels: [{
                itemStyle: { gapWidth: 3, borderRadius: 6, borderWidth: 0 },
            }],
            data: treeData,
        }],
    };

    return (
        <div ref={containerRef} style={{ width: '100%', height: numH }}>
            {ready && (
                <ReactECharts
                    option={option}
                    style={{ width: '100%', height: '100%' }}
                    notMerge
                    onEvents={onClick
                        ? { click: p => onClick(p?.data?._raw ?? p?.data) }
                        : {}
                    }
                />
            )}
        </div>
    );
}
