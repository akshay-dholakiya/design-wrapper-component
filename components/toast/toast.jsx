import React, { useEffect, useState } from "react";
import { getLiveSidebarColors } from "@design-pattern/colors.js";

const TOAST_STYLES = {
    info:    { dot: "#0ea5e9", title: "#7dd3fc", bg: "rgba(14,165,233,0.07)",  border: "#0ea5e9" },
    success: { dot: "#10b981", title: "#34d399", bg: "rgba(16,185,129,0.07)",  border: "#10b981" },
    warning: { dot: "#f59e0b", title: "#fbbf24", bg: "rgba(245,158,11,0.07)",  border: "#f59e0b" },
    error:   { dot: "#ef4444", title: "#fca5a5", bg: "rgba(239,68,68,0.07)",   border: "#ef4444" },
};

function ToastItem({ id, message, title, type = "info", onDismiss }) {
    const [visible, setVisible] = useState(false);
    const colors = getLiveSidebarColors();
    const s = TOAST_STYLES[type] ?? TOAST_STYLES.info;

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(t);
    }, []);

    const handleDismiss = () => {
        setVisible(false);
        setTimeout(() => onDismiss(id), 250);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                borderRadius: 10,
                background: s.bg,
                borderLeft: `3px solid ${s.border}`,
                minWidth: 260,
                maxWidth: 380,
                transform: visible ? "translateX(0)" : "translateX(20px)",
                opacity: visible ? 1 : 0,
                transition: "transform 0.25s cubic-bezier(0.34,1.3,0.64,1), opacity 0.2s ease",
                pointerEvents: "auto",
            }}
        >
            {/* Dot */}
            <span
                style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: s.dot,
                    flexShrink: 0,
                }}
            />

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
                {title && (
                    <div
                        style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: s.title,
                            lineHeight: 1.3,
                            marginBottom: message ? 2 : 0,
                        }}
                    >
                        {title}
                    </div>
                )}
                {message && (
                    <div
                        style={{
                            fontSize: 12,
                            color: colors.textSecondary,
                            lineHeight: 1.5,
                        }}
                    >
                        {message}
                    </div>
                )}
            </div>

            {/* Close */}
            <button
                onClick={handleDismiss}
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 2,
                    opacity: 0.3,
                    flexShrink: 0,
                    transition: "opacity 0.15s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.9)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.3)}
            >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                        d="M1 1l8 8M9 1l-8 8"
                        stroke={colors.textPrimary}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
        </div>
    );
}

export function ToastContainer({ toasts, onDismiss }) {
    return (
        <div
            style={{
                position: "fixed",
                top: 24,
                right: 24,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "flex-end",
                zIndex: 9999,
                pointerEvents: "none",
            }}
        >
            {toasts.map((t) => (
                <ToastItem key={t.id} {...t} onDismiss={onDismiss} />
            ))}
        </div>
    );
}