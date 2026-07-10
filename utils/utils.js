export const getCookie = (name) => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
};

// Shares the cookie across all *.eagleyesoc.ai subdomains (edr, soar, ioc, dashboard, ...)
const getCookieDomain = () => {
    if (typeof window === "undefined") return "";
    const { hostname } = window.location;
    return hostname.endsWith("eagleyesoc.ai") ? "; domain=.eagleyesoc.ai" : "";
};

export const setCookie = (name, value, days = 365) => {
    if (typeof document === "undefined") return;
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${getCookieDomain()}`;
};

export const hex2rgba = (hex, a = 1) => {
    if (typeof hex !== "string" || !hex.startsWith("#")) return hex;
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map((ch) => ch + ch).join("") : h;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const hasPermission = ({
                                  permissions = [],
                                  permission,
                                  any = false,
                              }) => {
    if (!permission) return true;

    const requiredPermissions = Array.isArray(permission)
        ? permission
        : [permission];

    return any
        ? requiredPermissions.some((p) => permissions.includes(p))
        : requiredPermissions.every((p) => permissions.includes(p));
};