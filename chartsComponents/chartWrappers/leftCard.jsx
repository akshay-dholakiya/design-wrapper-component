import React from 'react';
import sidebarColors, { fontStyles } from '../../colors';
import { spacing } from '../../spacing';
import EagleEyeLoader from './EagleEyeLoader';;

const resolveRisk = (score, maxScore) => {
    const ratio = maxScore > 0 ? score / maxScore : 0;
    if (ratio >= 0.7) {
        return { label: 'High Risk', color: '#ef4444', glow: 'rgba(239,68,68,0.35)' };
    }
    if (ratio >= 0.4) {
        return { label: 'Medium Risk', color: '#f59e0b', glow: 'rgba(245,158,11,0.35)' };
    }
    return { label: 'Low Risk', color: '#14cba8', glow: 'rgba(20,203,168,0.35)' };
};

export default function RiskScoreCardWrapper({
    data = [],
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = 'No data available',
    valueField = 'riskScore',
    maxScore = 10,
    title = 'Risk Score',
    height = 300,
    fixedScore,
}) {
    const latest = Array.isArray(data) && data.length > 0 ? data[data.length - 1] : null;
    const resolvedValue = typeof fixedScore === 'number'
        ? fixedScore
        : Number(latest?.[valueField]);

    const hasScore = Number.isFinite(resolvedValue);

    if (isLoading) {
        return loadingComponent;
    }

    if (!hasScore) {
        return (
            <div
                style={{
                    width: '100%',
                    height: typeof height === 'number' ? `${height}px` : (height || '300px'),
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

    const score = Math.max(0, Math.min(resolvedValue, maxScore));
    const risk = resolveRisk(score, maxScore);
    const resolvedHeight = typeof height === 'number' ? `${height}px` : (height || '300px');

    return (
        <div>
            <div style={{ textAlign: 'center', padding: `${spacing['2xl']} ${spacing.xl}` }}>
                <div style={{ color: 'rgba(220, 235, 255, 0.78)', marginBottom: spacing.md, ...fontStyles.body }}>
                    {title}
                </div>

                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'flex-end',
                        gap: 4,
                        color: risk.color,
                        textShadow: `0 0 16px ${risk.glow}`,
                        marginBottom: spacing.md,
                    }}
                >
                    <span style={{ fontSize: 58, lineHeight: 1, fontWeight: 800, ...fontStyles.smoothing }}>
                        {score.toFixed(2)}
                    </span>
                    <span style={{ fontSize: 36, lineHeight: 1, fontWeight: 700, opacity: 0.72, ...fontStyles.smoothing }}>
                        /{maxScore}
                    </span>
                </div>

                <div
                    style={{
                        minWidth: 140,
                        padding: `${spacing.sm} ${spacing['2xl']}`,
                        borderRadius: 999,
                        backgroundColor: 'rgba(6, 83, 92, 0.42)',
                        color: risk.color,
                        boxShadow: `inset 0 0 0 1px ${risk.glow}`,
                        ...fontStyles.label,
                        fontWeight: 700,
                    }}
                >
                    {risk.label}
                </div>
            </div>
        </div>
    );
}
