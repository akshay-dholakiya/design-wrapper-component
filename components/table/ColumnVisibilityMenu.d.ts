import * as React from 'react';

export interface ColumnVisibilityColumn {
  id: string;
  label: React.ReactNode;
}

export interface ColumnVisibilityMenuProps {
  columns?: ColumnVisibilityColumn[];
  hidden?: Set<string> | string[];
  onChange?: (hidden: Set<string>) => void;
  minVisible?: number;
  label?: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

declare const ColumnVisibilityMenu: React.FC<ColumnVisibilityMenuProps>;
export default ColumnVisibilityMenu;
