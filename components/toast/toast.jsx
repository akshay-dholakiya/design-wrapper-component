import React, { useEffect, useState } from "react";
import { getLiveSidebarColors } from "@design-pattern/colors.js";

const TOAST_CFG = {
    info:    { accent: "#0ea5e9", bg: "rgba(14,165,233,0.08)",  border: "rgba(14,165,233,0.22)",  icon: <InfoIcon /> },
    success: { accent: "#10b981", bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.22)",  icon: <CheckIcon /> },
    warning: { accent: "#f59e0b", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.22)",  icon: <WarnIcon /> },
    error:   { accent: "#ef4444", bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.22)",   icon: <ErrorIcon /> },
};

function CheckIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6.5" stroke="#10b981" strokeWidth="1.2" />
            <path d="M4 7l2.2 2.2L10 5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function ErrorIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6.5" stroke="#ef4444" strokeWidth="1.2" />
            <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#ef4444" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    );
}
function WarnIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1.5L12.8 12H1.2L7 1.5Z" stroke="#f59e0b" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M7 5.5v3" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="7" cy="10" r="0.6" fill="#f59e0b" />
        </svg>
    );
}
function InfoIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6.5" stroke="#0ea5e9" strokeWidth="1.2" />
            <path d="M7 6.5v4" stroke="#0ea5e9" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="7" cy="4.5" r="0.65" fill="#0ea5e9" />
        </svg>
    );
}

function ToastItem({ id, message, title, type = "info", duration = 4000, onDismiss, stackIndex }) {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(100);
    const colors = getLiveSidebarColors();
    const s = TOAST_CFG[type] ?? TOAST_CFG.info;

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const start = Date.now();
        const tick = () => {
            const elapsed = Date.now() - start;
            const pct = Math.max(0, 100 - (elapsed / duration) * 100);
            setProgress(pct);
            if (pct > 0) raf = requestAnimationFrame(tick);
        };
        let raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [duration]);

    const handleDismiss = () => {
        setVisible(false);
        setTimeout(() => onDismiss(id), 250);
    };

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                padding: "12px 14px 14px",
                borderRadius: 12,
                background: colors.backgroundSoft,
                border: `1px solid ${s.border}`,
                borderLeft: `3px solid ${s.accent}`,
                minWidth: 280,
                maxWidth: 360,
                boxShadow: `0 8px 28px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04)`,
                transform: visible ? "translateX(0) scale(1)" : "translateX(28px) scale(0.97)",
                opacity: visible ? 1 : 0,
                transition: "transform 0.28s cubic-bezier(0.34,1.3,0.64,1), opacity 0.22s ease",
                pointerEvents: "auto",
                zIndex: 999999 - stackIndex,
                overflow: "hidden",
            }}
        >
            {/* Icon */}
            <span style={{ flexShrink: 0, marginTop: 1 }}>{s.icon}</span>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
                {title && (
                    <div style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: s.accent,
                        lineHeight: 1.35,
                        marginBottom: message ? 3 : 0,
                        letterSpacing: "0.1px",
                    }}>
                        {title}
                    </div>
                )}
                {message && (
                    <div style={{
                        fontSize: 12,
                        color: colors.textSecondary,
                        lineHeight: 1.55,
                        fontWeight: 400,
                    }}>
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
                    padding: "2px 2px 0",
                    opacity: 0.35,
                    flexShrink: 0,
                    transition: "opacity 0.15s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.35)}
            >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1 1l7 7M8 1l-7 7" stroke={colors.textPrimary} strokeWidth="1.4" strokeLinecap="round" />
                </svg>
            </button>

            {/* Progress bar */}
            <div style={{
                position: "absolute",
                bottom: 0, left: 0,
                height: 2,
                width: `${progress}%`,
                background: s.accent,
                opacity: 0.55,
                borderRadius: "0 0 0 12px",
                transition: "width 0.1s linear",
            }} />
        </div>
    );
}

export function ToastContainer({ toasts, onDismiss }) {
    return (
        <div
            style={{
                position: "fixed",
                top: 20,
                right: 20,
                display: "flex",
                flexDirection: "column",
                gap: 7,
                alignItems: "flex-end",
                zIndex: 999999,
                pointerEvents: "none",
            }}
        >
            {toasts.map((t, i) => (
                <ToastItem key={t.id} {...t} onDismiss={onDismiss} stackIndex={i} />
            ))}
        </div>
    );
}
