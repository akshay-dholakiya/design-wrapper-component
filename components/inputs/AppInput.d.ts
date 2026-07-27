import * as React from 'react';

export interface AppInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  error?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

declare const AppInput: React.ForwardRefExoticComponent<
  AppInputProps & React.RefAttributes<HTMLInputElement>
>;
export default AppInput;
