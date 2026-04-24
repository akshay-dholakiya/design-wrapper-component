/**
 * Tabs — centralized tabs component
 *
 * Controlled tab bar. Pass the list of tabs via `items`, the current
 * active key via `value`, and an `onChange(key)` handler.
 *
 * Props
 * ─────
 *   items      – { key, label, count?, icon?, disabled? }[]
 *   value      – currently active tab key (controlled)
 *   onChange   – (key) => void
 *   size       – "sm" | "md" (default: "md")
 *   fullWidth  – stretch tabs to fill the container (default: false)
 *   className  – passed to outer wrapper
 *   style      – inline overrides on the outer wrapper
 *
 * Usage
 * ─────
 *   <Tabs
 *     value={activeTab}
 *     onChange={setActiveTab}
 *     items={[
 *       { key: "organization", label: "Organization Workflow", count: orgCount },
 *       { key: "my",           label: "My Workflow",           count: myCount  },
 *     ]}
 *   />
 */

import React from "react";
import PropTypes from "prop-types";
import { getLiveSidebarColors } from "./colors.js";
import {hex2rgba} from "@design-pattern/utils/utils.js";



const SIZE = {
    sm: { padding: "6px 10px", fontSize: 11, badgeH: 16, badgeMinW: 16 },
    md: { padding: "8px 14px", fontSize: 12, badgeH: 18, badgeMinW: 18 },
};

const Tabs = ({
    items = [],
    value,
    onChange,
    size = "md",
    fullWidth = false,
    className = "",
    style,
}) => {
    const c = getLiveSidebarColors();
    const s = SIZE[size] || SIZE.md;
    const ff = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

    return (
        <div
            className={className}
            role="tablist"
            style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                borderBottom: `1px solid ${c.border}`,
                ...style,
            }}
        >
            {items.map((t) => {
                const active = value === t.key;
                const disabled = !!t.disabled;

                return (
                    <button
                        key={t.key}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        disabled={disabled}
                        onClick={() => !disabled && onChange?.(t.key)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            flex: fullWidth ? 1 : "0 0 auto",
                            padding: s.padding,
                            marginBottom: -1,
                            background: "transparent",
                            border: "none",
                            borderBottom: `2px solid ${active ? c.primary : "transparent"}`,
                            color: disabled
                                ? c.textMuted
                                : active
                                    ? c.textPrimary
                                    : c.textMuted,
                            opacity: disabled ? 0.5 : 1,
                            fontSize: s.fontSize,
                            fontWeight: active ? 600 : 500,
                            cursor: disabled ? "not-allowed" : "pointer",
                            fontFamily: ff,
                            transition: "color 150ms ease, border-color 150ms ease",
                        }}
                    >
                        {t.icon && (
                            <span style={{display: "inline-flex", alignItems: "center"}}>
                                {t.icon}
                            </span>
                        )}
                        {t.label}
                        {t.count != null && (
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minWidth: s.badgeMinW,
                                    height: s.badgeH,
                                    padding: "0 6px",
                                    borderRadius: 9,
                                    fontSize: 10,
                                    fontWeight: 600,
                                    background: active
                                        ? hex2rgba(c.primary, 0.12)
                                        : hex2rgba(c.border, 0.4),
                                    color: active ? c.primary : c.textMuted,
                                }}
                            >
                                {t.count}
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

Tabs.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.node.isRequired,
            count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            icon: PropTypes.node,
            disabled: PropTypes.bool,
        })
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    size: PropTypes.oneOf(["sm", "md"]),
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Tabs;
