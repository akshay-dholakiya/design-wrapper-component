import * as React from 'react';

export interface CanIHavePermissionProps {
  permissions?: string[];
  permission: string | string[];
  any?: boolean;
  hide?: boolean;
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}

declare const CanIHavePermission: React.FC<CanIHavePermissionProps>;
export default CanIHavePermission;
