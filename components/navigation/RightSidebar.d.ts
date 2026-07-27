import * as React from 'react';

export interface RightSidebarHandle {
  open: () => void;
  close?: () => void;
  toggle?: () => void;
  isOpen?: () => boolean;
}

export interface RightSidebarProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  width?: number | string;
  footer?: React.ReactNode;
}

declare const RightSidebar: React.ForwardRefExoticComponent<
  RightSidebarProps & React.RefAttributes<RightSidebarHandle>
>;
export default RightSidebar;
