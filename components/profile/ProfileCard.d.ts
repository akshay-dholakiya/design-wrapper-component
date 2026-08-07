import * as React from 'react';

export interface ProfileCardStat {
  icon?: React.ComponentType<{ size?: number }> | React.ReactNode;
  label: string;
  value: React.ReactNode;
  color?: string;
}

export interface ProfileCardApp {
  key?: string;
  name: string;
  color?: string;
  icon: ((color: string, size?: number) => React.ReactNode) | React.ReactNode;
}

export interface ProfileCardProvider {
  label: string;
  icon?: React.ReactNode;
  color?: string;
}

export interface ProfileCardAction {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'outline' | 'ghost' | 'dark';
}

export interface ProfileCardProps {
  loading?: boolean;
  loadingText?: string;
  avatarUrl?: string;
  initial?: string;
  username?: string;
  email?: string;
  role?: string;
  roleLabel?: string;
  roleColor?: string;
  isActive?: boolean;
  provider?: ProfileCardProvider;
  stats?: ProfileCardStat[];
  apps?: ProfileCardApp[];
  appsTitle?: string;
  emptyAppsText?: string;
  actions?: ProfileCardAction[];
  style?: React.CSSProperties;
}

declare const ProfileCard: React.FC<ProfileCardProps>;
export default ProfileCard;
