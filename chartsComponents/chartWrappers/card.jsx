import React, { useState } from 'react';
import sidebarColors, { chartColors, fontStyles } from '../../colors';
import { borderRadius, componentSpacing, layout, spacing } from '../../spacing';
import CardStructureLoader from '../../skeleton/card_structure_loader';


export default function CardWrapper({
    cards = [],
    children = null,
    isLoading = false,
    loadingComponent = <CardStructureLoader/>,
    noDataComponent = 'No data available',
    onClick,
}) {
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const hasDynamicCards = Array.isArray(cards) && cards.length > 0;
    const structureCount = hasDynamicCards ? cards.length : 0;
    const minCardWidth = layout.width.md;
    const bottomBorderWidth = spacing.xs;

    const toRgba = (color, alpha = 1) => {
        if (!color || typeof color !== 'string') {
            return `rgba(0, 0, 0, ${alpha})`;
        }

        if (color.startsWith('#')) {
            const hex = color.slice(1);
            const normalized = hex.length === 3
                ? hex.split('').map((char) => char + char).join('')
                : hex;

            if (normalized.length === 6) {
                const intValue = Number.parseInt(normalized, 16);
                const r = (intValue >> 16) & 255;
                const g = (intValue >> 8) & 255;
                const b = intValue & 255;
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            }
        }

        if (color.startsWith('rgb')) {
            return color.replace(/rgba?\(([^)]+)\)/, (_, values) => {
                const [r, g, b] = values.split(',').map((value) => value.trim());
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            });
        }

        return color;
    };

    const resolveBottomColor = (card) => {
        if (card?.bottomColor) {
            return (
                chartColors?.severity?.[card.bottomColor]
                || sidebarColors?.[card.bottomColor]
                || card.bottomColor
            );
        }

        if (card?.variant) {
            return (
                chartColors?.severity?.[card.variant]
                || sidebarColors?.[card.variant]
                || sidebarColors.primary
            );
        }

        return sidebarColors.primary;
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}, 1fr))`,
                gap: componentSpacing.gap.lg,
            }}
        >
            {isLoading ? (
                <CardStructureLoader count={structureCount} minCardWidth={minCardWidth} />
            ) : hasDynamicCards ? (
                cards.map((card) => {
                    const bottomColor = resolveBottomColor(card);
                    const isHovered = hoveredCardId === card.id;

                    return (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredCardId(card.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                            onClick={onClick ? () => onClick(card) : undefined}
                            style={{
                                padding: componentSpacing.card.default,
                                backgroundColor: sidebarColors.backgroundSoft,
                                border: `1px solid ${sidebarColors.border}`,
                                borderBottom: `${bottomBorderWidth} solid ${bottomColor}`,
                                borderRadius: borderRadius.lg,
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'visible',
                                transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                                transition: 'transform 180ms ease, border-color 180ms ease',
                                boxShadow: 'none',
                                cursor: onClick ? 'pointer' : 'default',
                            }}
                        >
                            {isHovered && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '10%',
                                        right: '10%',
                                        bottom: -7,
                                        height: 10,
                                        pointerEvents: 'none',
                                        borderRadius: '999px',
                                        background: `radial-gradient(ellipse at center, ${toRgba(bottomColor, 0.55)} 0%, ${toRgba(bottomColor, 0.2)} 58%, transparent 82%)`,
                                        filter: 'blur(6px)',
                                    }}
                                />
                            )}
                            <div
                                style={{
                                    ...fontStyles.bodySmall,
                                    color: sidebarColors.textSecondary,
                                    marginBottom: spacing.sm,
                                }}
                            >
                                {card.title}
                            </div>
                            <div style={{ ...fontStyles.heading2, color: sidebarColors.textPrimary }}>
                                {card.value}
                            </div>
                        </div>
                    );
                })
            ) : (
                children || (
                    <div
                        style={{
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