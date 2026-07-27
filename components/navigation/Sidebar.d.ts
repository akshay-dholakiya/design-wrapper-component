import * as React from 'react';

export interface SidebarMenuItem {
  title: React.ReactNode;
  path?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  disabled?: boolean;
  children?: SidebarMenuItem[];
}

export interface SidebarProps {
  menuItems?: SidebarMenuItem[];
  bottomMenuItems?: SidebarMenuItem[];
  logo?: string;
  onOpenChange?: (open: boolean) => void;
  showLogout?: boolean;
  onLogout?: () => void;
}

declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
