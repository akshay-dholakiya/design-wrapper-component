import React from "react";
import {
  Link,
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import sidebarColors, { getLiveSidebarColors } from "@design-pattern/colors.js";

/* Shared corner-blob decoration — mirrors ErrorBoundary’s CornerDeco */
function BgDeco({ pFrom, pTo }) {
  return (
    <>
      {/* top-left blobs */}
      <svg style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }} width="200" height="180" viewBox="0 0 200 180" aria-hidden="true">
        <ellipse cx="20"  cy="60"  rx="42" ry="60" fill={pFrom} opacity="0.08" />
        <ellipse cx="70"  cy="10"  rx="30" ry="22" fill={pTo}   opacity="0.06" />
        <path d="M120 20 L127 28 L120 37 L113 28Z" fill={pFrom} opacity="0.18" />
        <path d="M155 55 L159 61 L155 67 L151 61Z" fill={pTo}   opacity="0.15" />
        <path d="M100 52 L103 56 L100 60 L97 56Z"  fill={pFrom} opacity="0.13" />
      </svg>
      {/* bottom-right blobs */}
      <svg style={{ position: "absolute", bottom: 0, right: 0, pointerEvents: "none" }} width="220" height="190" viewBox="0 0 220 190" aria-hidden="true">
        <ellipse cx="200" cy="110" rx="45" ry="65" fill={pFrom} opacity="0.08" />
        <ellipse cx="155" cy="182" rx="38" ry="24" fill={pTo}   opacity="0.06" />
        <path d="M60 40 L67 48 L60 57 L53 48Z"    fill={pFrom} opacity="0.16" />
        <path d="M28 104 L33 109 L28 114 L23 109Z" fill={pTo}   opacity="0.14" />
        <path d="M92 132 L95 136 L92 140 L89 136Z" fill={pFrom} opacity="0.12" />
      </svg>
      {/* top-right bolt */}
      <svg style={{ position: "absolute", top: "10%", right: "4%", pointerEvents: "none" }} width="32" height="52" viewBox="0 0 32 52" aria-hidden="true">
        <path d="M18 2 L6 28 L14 28 L10 50 L28 20 L18 20 Z" fill={pFrom} opacity="0.22" />
      </svg>
      {/* bottom-left bolt */}
      <svg style={{ position: "absolute", bottom: "8%", left: "3%", pointerEvents: "none" }} width="28" height="46" viewBox="0 0 28 46" aria-hidden="true">
        <path d="M16 2 L5 24 L12 24 L9 44 L24 18 L16 18 Z" fill={pTo} opacity="0.18" />
      </svg>
    </>
  );
}

function BrokenCompass({ colors }) {
  return (
    <svg
      width="220"
      height="150"
      viewBox="0 0 220 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ animation: "ep-float 4s ease-in-out infinite" }}
      aria-hidden="true"
    >
      <ellipse cx="110" cy="138" rx="74" ry="10" fill={colors.primaryFrom} opacity="0.14" />
      <circle cx="110" cy="72" r="46" fill={colors.surface} stroke={colors.borderStrong} strokeWidth="2" />
      <circle cx="110" cy="72" r="34" fill={colors.background} stroke={colors.border} strokeWidth="1.5" />
      <path d="M110 40 L124 72 L110 104 L96 72 Z" fill={colors.primaryTo} opacity="0.24" />
      <path d="M110 46 L118 72 L110 98 L102 72 Z" fill={colors.primaryFrom} opacity="0.65" />
      <line x1="82" y1="72" x2="138" y2="72" stroke={colors.border} strokeWidth="1.2" opacity="0.6" />
      <line x1="110" y1="44" x2="110" y2="100" stroke={colors.border} strokeWidth="1.2" opacity="0.6" />
      <path d="M151 38 L182 55" stroke={colors.danger} strokeWidth="3" strokeLinecap="round" />
      <path d="M182 55 L170 59" stroke={colors.danger} strokeWidth="3" strokeLinecap="round" />
      <path d="M182 55 L176 44" stroke={colors.danger} strokeWidth="3" strokeLinecap="round" />
      <circle cx="110" cy="72" r="4" fill={colors.textPrimary} />
    </svg>
  );
}

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const live = getLiveSidebarColors?.() || sidebarColors;
  const colors = {
    background: live.background || "#0a1324",
    surface: live.surface || "#12233f",
    border: live.border || "#27446f",
    borderStrong: live.borderStrong || live.borderAccent || live.border || "#2f5385",
    primaryFrom: live.primaryFrom || live.primary || "#0ea5e9",
    primaryTo: live.primaryTo || "#38bdf8",
    textPrimary: live.textPrimary || "#e7f5ff",
    textSecondary: live.textSecondary || "rgba(231,245,255,0.72)",
    textMuted: live.textMuted || "rgba(231,245,255,0.5)",
    danger: "#ef4444",
  };

  const isRouteError = isRouteErrorResponse(error);
  const isDirectNotFound = error == null;
  const status = isRouteError ? error.status : isDirectNotFound ? 404 : 500;

  let title = "Something went wrong";
  let message = "Unexpected error occurred.";
  if (isRouteError) {
    if (error.status === 404) {
      title = "Page Not Found";
      message = "The route may have moved, or the link may be outdated.";
    } else {
      title = `${error.status} Error`;
      message = error.statusText || "Something went wrong while loading this page.";
    }
  } else if (isDirectNotFound) {
    title = "Page Not Found";
    message = "The route may have moved, or the link may be outdated.";
  } else if (error instanceof Error && error.message) {
    message = error.message;
  }

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: `radial-gradient(circle at 18% 18%, ${colors.primaryFrom}24 0%, transparent 34%), radial-gradient(circle at 85% 80%, ${colors.primaryTo}22 0%, transparent 28%), ${colors.background}`,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <BgDeco pFrom={colors.primaryFrom} pTo={colors.primaryTo} />

      <section
        style={{
          width: "100%",
          maxWidth: "520px",
          borderRadius: "24px",
          border: `1px solid ${colors.borderStrong}`,
          background: `linear-gradient(170deg, ${colors.surface}f5 0%, ${colors.surface}d9 100%)`,
          boxShadow: `0 24px 70px rgba(0,0,0,0.42), 0 0 0 1px ${colors.primaryFrom}20`,
          position: "relative",
          zIndex: 2,
          padding: "24px 28px 20px",
          animation: "ep-rise 0.55s ease both, ep-pulse-glow 4s ease-in-out infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "8%",
            right: "8%",
            height: "3px",
            borderRadius: "0 0 4px 4px",
            background: `linear-gradient(90deg, transparent, ${colors.primaryFrom}, ${colors.primaryTo}, transparent)`,
          }}
        />

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
          <BrokenCompass colors={colors} />
        </div>

        {/* ── Divider ── */}
        <div style={{
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${colors.border}, ${colors.primaryFrom}55, ${colors.border}, transparent)`,
          marginBottom: "14px",
        }} />

        <p
          style={{
            margin: "0 auto 4px",
            width: "fit-content",
            borderRadius: "999px",
            border: `1px solid ${colors.borderStrong}`,
            background: `${colors.primaryFrom}1e`,
            color: colors.textSecondary,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            padding: "4px 10px",
            textTransform: "uppercase",
          }}
        >
          Status {status}
        </p>

        <h1
          style={{
            margin: "0 0 4px",
            textAlign: "center",
            fontSize: "clamp(28px, 5vw, 52px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            fontWeight: 800,
            background: `linear-gradient(135deg, ${colors.primaryFrom}, ${colors.primaryTo})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {status === 404 ? "404" : title}
        </h1>

        <h2
          style={{
            margin: "0 0 6px",
            textAlign: "center",
            color: colors.textPrimary,
            fontSize: "clamp(16px, 2.2vw, 22px)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          {status === 404 ? title : "Unable to open this view"}
        </h2>

        <p
          style={{
            margin: "0 auto 12px",
            maxWidth: "600px",
            textAlign: "center",
            color: colors.textSecondary,
            fontSize: "13px",
            lineHeight: 1.55,
          }}
        >
          {message}
        </p>

        <div
          style={{
            margin: "0 auto 14px",
            maxWidth: "620px",
            borderRadius: "12px",
            border: `1px solid ${colors.border}`,
            background: `${colors.background}ba`,
            padding: "10px 14px",
            color: colors.textMuted,
            fontSize: "11.5px",
            lineHeight: 1.55,
          }}
        >
          The path may no longer be available in this environment. Use one of the actions below to continue navigating safely.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/dashboard"
            className="ep-btn-primary"
            style={{
              minWidth: "150px",
              padding: "12px 18px",
              borderRadius: "10px",
              background: `linear-gradient(135deg, ${colors.primaryFrom}, ${colors.primaryTo})`,
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 700,
              textAlign: "center",
              boxShadow: `0 10px 26px ${colors.primaryFrom}4f`,
            }}
          >
            Go To Home
          </Link>

          <button
            className="ep-btn-ghost"
            onClick={() => navigate(-1)}
            style={{
              minWidth: "150px",
              padding: "12px 18px",
              borderRadius: "10px",
              border: `1.5px solid ${colors.borderStrong}`,
              background: "transparent",
              color: colors.textPrimary,
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Go Back
          </button>
        </div>
      </section>

      <style>{`
        @keyframes ep-rise {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes ep-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes ep-pulse-glow {
          0%, 100% { box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(14, 165, 233, 0.12); }
          50%       { box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42), 0 0 22px 5px rgba(14, 165, 233, 0.18); }
        }

        .ep-btn-primary:hover  { filter: brightness(1.12) !important; }
        .ep-btn-ghost:hover    { background: rgba(14, 165, 233, 0.08) !important; }
        .ep-btn-primary:active, .ep-btn-ghost:active { transform: scale(0.97) !important; }

        @media (max-width: 640px) {
          section {
            padding: 28px 20px 22px !important;
          }
        }
      `}</style>
    </div>
  );
}