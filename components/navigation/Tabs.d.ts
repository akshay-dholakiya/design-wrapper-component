import * as React from 'react';

export interface TabItem {
  key: string;
  label: React.ReactNode;
  count?: number | string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  onChange?: (key: string) => void;
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare const Tabs: React.FC<TabsProps>;
export default Tabs;
