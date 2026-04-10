import * as React from 'react';

export interface StatsCardTrend {
  direction: 'up' | 'down' | 'flat';
  percent: number;
}

export interface StatsCardProps {
  title: string;
  value: number | string;
  icon?: React.ComponentType<{ style?: React.CSSProperties; size?: number | string }>;
  variant?: 'critical' | 'high' | 'medium' | 'low' | 'info' | 'primary' | 'success' | 'warning' | 'default';
  color?: string;
  layout?: 'card' | 'inline';
  shape?: 'default' | 'compact';
  accentBar?: boolean;
  trend?: StatsCardTrend;
  onClick?: () => void;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
}

declare const StatsCard: React.FC<StatsCardProps>;
export default StatsCard;
