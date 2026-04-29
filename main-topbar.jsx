// main-topbar.jsx
"use client";
import React from "react";
import { LiveClock } from "@design-pattern/liveclick";
import sidebarColors, { getLiveSidebarColors, fontStyles } from "@design-pattern/colors";

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

export const MainTopbar = ({
  routeLabels = {},
  pathname,
  leftContent,
  rightContent,
  style,
  className,
}) => {
  const colors = getLiveSidebarColors();

  const resolvedPath =
    pathname ??
    (typeof window !== "undefined" ? window.location.pathname : "/");

  const dashboardName = getDashboardName(resolvedPath, routeLabels);

  const visibleBreadcrumbs = getBreadcrumbs(resolvedPath, routeLabels).filter(
    (crumb, i, arr) => i === 0 || crumb !== arr[i - 1]
  );

  return (
    <div
      className={`w-full border-b px-6 ${className ?? ""}`}  // ← removed py-4
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
        display: "flex",          // ← added
        alignItems: "center",     // ← added (replaces py-4 centering)
        boxSizing: "border-box",  // ← added (border doesn't add to height)
        ...style,                 // ← height: 90 from caller lands here ✅
      }}
    >
      {/* ← added w-full so inner row still stretches end-to-end */}
      <div className="flex items-center justify-between gap-4 w-full">

        {/* ── LEFT ── */}
        <div className="flex items-center gap-8 min-w-0">
          <div className="flex flex-col min-w-0">
            <h1 style={{ ...fontStyles.heading2, color: colors.primary, margin: 0 }}>
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
                      color: i === arr.length - 1 ? colors.primaryFrom : colors.textSecondary,
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

          {leftContent && (
            <div className="flex items-center gap-3 flex-shrink-0">{leftContent}</div>
          )}
        </div>

        {/* ── RIGHT ── */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {rightContent && (
            <div className="flex items-center gap-3">{rightContent}</div>
          )}
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