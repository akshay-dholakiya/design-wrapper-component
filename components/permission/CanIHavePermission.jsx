import React from "react";

const CanIHave = ({
                      permissions = [],
                      permission,
                      any = false,
                      hide = true,
                      children,
                      fallback = null,
                  }) => {
    const requiredPermissions = Array.isArray(permission)
        ? permission
        : [permission];

    const hasPermission = any
        ? requiredPermissions.some((p) => permissions.includes(p))
        : requiredPermissions.every((p) => permissions.includes(p));

    if (hasPermission) {
        return <>{children}</>;
    }

    if (hide) {
        return null;
    }

    return <>{fallback}</>;
};

export default CanIHave;