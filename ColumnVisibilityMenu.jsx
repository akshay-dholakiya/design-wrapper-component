/**
 * ColumnVisibilityMenu — show/hide columns dropdown
 *
 * A themed button + dropdown with a checkbox per column. Controlled — pass
 * the current `hidden` set and an `onChange(next)` handler. Designed for
 * grid/table headers (e.g. alongside an AgGrid wrapper).
 *
 * Props
 * ─────
 *   columns      – { id, label }[]                   required
 *   hidden       – Set<id>  |  Array<id>             current hidden column ids
 *   onChange     – (nextHiddenSet: Set<id>) => void  called on every toggle
 *   minVisible   – number (default 1)                disables the last visible checkbox
 *   label        – button text (default "Columns")
 *   align        – "left" | "right" (default "right") menu alignment
 *   className    – forwarded to the outer wrapper
 *   style        – inline overrides on the outer wrapper
 */

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { getLiveSidebarColors } from "./colors.js";
import {hex2rgba} from "@design-pattern/utils/utils.js";



const toSet = (v) => (v instanceof Set ? new Set(v) : new Set(v || []));

const ColumnVisibilityMenu = ({
    columns = [],
    hidden,
    onChange,
    minVisible = 1,
    label = "Columns",
    align = "right",
    className = "",
    style,
}) => {
    const c = getLiveSidebarColors();
    const ff = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const onDocClick = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, [open]);

    const hiddenSet  = hidden instanceof Set ? hidden : toSet(hidden);
    const total      = columns.length;
    const visibleCnt = total - hiddenSet.size;
    const anyHidden  = hiddenSet.size > 0;

    const toggle = (id) => {
        const next = new Set(hiddenSet);
        if (next.has(id)) next.delete(id); else next.add(id);
        onChange?.(next);
    };

    const showAll = () => onChange?.(new Set());

    return (
        <div ref={wrapRef} className={className} style={{position: "relative", ...style}}>
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                title="Show / hide columns"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    height: 30,
                    padding: "0 10px",
                    background: c.backgroundSoft,
                    border: `1px solid ${c.border}`,
                    borderRadius: 8,
                    color: c.textSecondary,
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: ff,
                }}
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1.5" y="2.5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M5.5 2.5v9M9 2.5v9" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {label}
                {anyHidden && (
                    <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: 16,
                        height: 16,
                        padding: "0 5px",
                        borderRadius: 8,
                        fontSize: 10,
                        fontWeight: 600,
                        background: hex2rgba(c.primary, 0.12),
                        color: c.primary,
                    }}>
                        {visibleCnt}/{total}
                    </span>
                )}
            </button>

            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        ...(align === "left" ? {left: 0} : {right: 0}),
                        zIndex: 50,
                        width: 220,
                        background: c.background,
                        border: `1px solid ${c.border}`,
                        borderRadius: 10,
                        boxShadow: `0 8px 24px ${hex2rgba("#000000", 0.18)}`,
                        padding: 8,
                        fontFamily: ff,
                    }}
                >
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "4px 8px 6px",
                        borderBottom: `1px solid ${c.border}`,
                        marginBottom: 4,
                    }}>
                        <span style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: c.textSecondary,
                            textTransform: "uppercase",
                            letterSpacing: ".04em",
                        }}>
                            {label}
                        </span>
                        <button
                            type="button"
                            onClick={showAll}
                            disabled={!anyHidden}
                            style={{
                                fontSize: 11,
                                fontWeight: 600,
                                color: anyHidden ? c.primary : c.textMuted,
                                background: "transparent",
                                border: "none",
                                cursor: anyHidden ? "pointer" : "default",
                                padding: 0,
                            }}
                        >
                            Show all
                        </button>
                    </div>

                    {columns.map((col) => {
                        const visible        = !hiddenSet.has(col.id);
                        const isOnlyVisible  = visible && visibleCnt <= minVisible;
                        return (
                            <label
                                key={col.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "6px 8px",
                                    borderRadius: 6,
                                    fontSize: 12,
                                    color: c.textPrimary,
                                    cursor: isOnlyVisible ? "not-allowed" : "pointer",
                                    opacity: isOnlyVisible ? 0.6 : 1,
                                }}
                                onMouseEnter={(e) => {
                                    if (!isOnlyVisible) e.currentTarget.style.background = hex2rgba(c.primary, 0.06);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={visible}
                                    disabled={isOnlyVisible}
                                    onChange={() => toggle(col.id)}
                                    style={{accentColor: c.primary}}
                                />
                                <span>{col.label}</span>
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

ColumnVisibilityMenu.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.node.isRequired,
        })
    ).isRequired,
    hidden: PropTypes.oneOfType([
        PropTypes.instanceOf(Set),
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ]),
    onChange: PropTypes.func,
    minVisible: PropTypes.number,
    label: PropTypes.string,
    align: PropTypes.oneOf(["left", "right"]),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default ColumnVisibilityMenu;
