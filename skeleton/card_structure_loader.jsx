import React from 'react';
import sidebarColors from '../colors';
import { borderRadius, spacing } from '../spacing';

export default function CardStructureLoader({
    count = 5,
    minCardWidth = '220px',
}) {
    if (count <= 0) {
        return null;
    }

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}, 1fr))`,
                gap: spacing.lg,
            }}
        >
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={`card-structure-${index}`}
                    style={{
                        minHeight: '110px',
                        border: `1px solid ${sidebarColors.border}`,
                        borderRadius: borderRadius.lg,
                        backgroundColor: sidebarColors.backgroundSoft,
                        padding: spacing.lg,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            height: '12px',
                            width: '40%',
                            borderRadius: borderRadius.full,
                            backgroundColor: `${sidebarColors.border}`,
                            opacity: 0.7,
                        }}
                    />
                    <div
                        style={{
                            height: '26px',
                            width: '28%',
                            borderRadius: borderRadius.md,
                            backgroundColor: `${sidebarColors.border}`,
                            opacity: 0.5,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}