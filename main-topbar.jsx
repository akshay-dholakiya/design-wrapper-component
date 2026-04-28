// main-topbar.jsx
"use client";
import React from "react";
import dynamic from "next/dynamic";
import sidebarColors, { getLiveSidebarColors, fontStyles } from "@design-pattern/colors";
import { tr } from "zod/v4/locales";

const LiveClock = dynamic(
  () => import("@design-pattern/liveclick").then((m) => ({ default: m.LiveClock })),
  {
    ssr: false,
    loading: () => (
      <span style={{ color: sidebarColors.textMuted, fontSize: "12px", fontFamily: "monospace" }}>
        --:--:--
      </span>
    ),
  }
);

// ── Path helpers (pure) ──────────────────────────────────────────────────────

const normalizePath = (p) => {
  const trimmed = (p || "/").replace(/\/+$/, "");
  return (trimmed || "/").toLowerCase();
};

const toLabel = (segment) => {
  const name = segment.replace(/-/g, " ");
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const getDashboardName = (p, labels) => {
  const norm = normalizePath(p);
  if (labels[norm]) return labels[norm];
  const parts = norm.split("/").filter(Boolean);
  return parts.length === 0 ? "Home" : toLabel(parts[parts.length - 1]);
};

const getBreadcrumbs = (p, labels) => {
  const norm = normalizePath(p);
  if (norm === "/" || norm === "/home") return ["Home"];
  if (labels[norm]) return ["Home", labels[norm]];
  const parts = norm.split("/").filter(Boolean).map(toLabel);
  return ["Home", ...parts.filter((part, i, arr) => part !== arr[i - 1])];
};

// ── Component ────────────────────────────────────────────────────────────────

/**
 * MainTopbar
 *
 * @param {{ 
 *   routeLabels?:  Record<string, string>,
 *   pathname?:     string,
 *   leftContent?:  import("react").ReactNode,
 *   rightContent?: import("react").ReactNode,
 *   style?:        import("react").CSSProperties,
 *   className?:    string,
 * }} props
 */
export const MainTopbar = ({
  routeLabels  = {},
  pathname,
  leftContent,
  rightContent,
  style,
  className,
}) => {
  const colors = getLiveSidebarColors();

  // Resolve pathname: prop → window (CSR fallback) → '/'
  const resolvedPath =
    pathname ??
    (typeof window !== "undefined" ? window.location.pathname : "/");

  const dashboardName = getDashboardName(resolvedPath, routeLabels);

  const visibleBreadcrumbs = getBreadcrumbs(resolvedPath, routeLabels).filter(
    (crumb, i, arr) => i === 0 || crumb !== arr[i - 1]
  );

  return (
    <div
      className={`w-full  border-b px-6 py-4 ${className ?? ""}`}
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
        ...style,
      }}
    >
      <div className="flex items-center justify-between gap-4">

        {/* ── LEFT: Title › Breadcrumbs › leftContent slot ── */}
        <div className="flex items-center gap-8 min-w-0">

          {/* Title + Breadcrumbs */}
          <div className="flex flex-col min-w-0">
            <h1
              style={{
                ...fontStyles.heading2,
                color: colors.primary,
               
                margin: 0,
              }}
            >
              {dashboardName === "Home" ? "Home" : `${dashboardName} `}
            </h1>

            <div
              className="flex items-center gap-2 mt-1 min-h-[18px]"
              style={{ visibility: visibleBreadcrumbs.length > 1 ? "visible" : "hidden" }}
            >
              {visibleBreadcrumbs.map((crumb, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    style={{
                      ...fontStyles.label,
                      color:
                        i === arr.length - 1
                          ? colors.primaryFrom
                          : colors.textSecondary,
                    }}
                  >
                    {crumb}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ color: colors.textSecondary, fontSize: "12px" }}>›</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Slot: leftContent — e.g. tenant switcher, context selector */}
          {leftContent && (
            <div className="flex items-center gap-3 flex-shrink-0">
              {leftContent}
            </div>
          )}
        </div>

        {/* ── RIGHT: rightContent slot + Pulse + Clock ── */}
        <div className="flex items-center gap-4 flex-shrink-0">

          {/* Slot: rightContent — e.g. timeline filter, action controls */}
          {rightContent && (
            <div className="flex items-center gap-3">
              {rightContent}
            </div>
          )}

          {/* Always-present: pulse dot + live clock */}
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: colors.primaryFrom }}
            />
            <LiveClock />
          </div>
        </div>

      </div>
    </div>
  );
};