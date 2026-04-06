'use client';

import React from 'react';
import { APP_COLORS } from '@/lib/colors';
import { TYPOGRAPHY } from '@/lib/typography';

export function NoGraphData({
  icon,
  iconColor = APP_COLORS.primary,
  title = 'No data available',
  subtitle = 'Data will appear once records are processed',
  height = 'h-56',
}) {
  return (
    <div
      className={`${height} flex flex-col items-center justify-center rounded-lg `}
      style={{
        backgroundColor: APP_COLORS.backgroundSoft,
        borderColor: APP_COLORS.border,
      }}
    >
      {icon && (
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 border"
          style={{
            backgroundColor: `${iconColor}15`,
            borderColor: `${iconColor}30`,
          }}
        >
          {React.cloneElement(icon, {
            className: 'h-6 w-6',
            style: { color: iconColor },
          })}
        </div>
      )}

      <p
        className={`${TYPOGRAPHY.body.sm} ${TYPOGRAPHY.fontWeight.medium} mb-1 text-center`}
        style={{ color: APP_COLORS.textSecondary }}
      >
        {title}
      </p>

      <p
        className={`${TYPOGRAPHY.caption.xs} text-center px-4`}
        style={{ color: APP_COLORS.textDim }}
      >
        {subtitle}
      </p>
    </div>
  );
}
