import * as React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface UnifiedSelectProps {
  value?: string;
  onChange: (value: string) => void;
  options?: (SelectOption | string)[];
  placeholder?: string;
  mode?: 'native' | 'custom';
  searchable?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
  className?: string;
  error?: boolean;
  size?: 'sm' | 'md';
}

declare const UnifiedSelect: React.FC<UnifiedSelectProps>;
export default UnifiedSelect;
