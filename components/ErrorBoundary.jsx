import React from 'react';
import { sidebarColors, chartColors } from '@design-pattern';

/* ─── keyframe injector ─────────────────────────────────────────────── */
function injectKeyframes() {
  if (typeof document === 'undefined') return;
  const id = '__eb_keyframes__';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    @keyframes eb-float {
      0%,100% { transform: translateY(0px); }
      50%      { transform: translateY(-7px); }
    }
    @keyframes eb-blink {
      0%,90%,100% { transform: scaleY(1); }
      95%          { transform: scaleY(0.1); }
    }
    @keyframes eb-fadein {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes eb-shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position:  400px 0; }
    }
    @keyframes eb-pulse-glow {
      0%,100% { box-shadow: 0 0 0 0 rgba(14,165,233,0); }
      50%      { box-shadow: 0 0 18px 4px rgba(14,165,233,0.18); }
    }
    .eb-btn-primary:hover  { filter: brightness(1.12) !important; }
    .eb-btn-ghost:hover    { background: rgba(14,165,233,0.08) !important; }
    .eb-btn-primary:active, .eb-btn-ghost:active { transform: scale(0.97) !important; }
  `;
  document.head.appendChild(style);
}

/* ─── Desk Illustration SVG ─────────────────────────────────────────── */
function DeskIllustration() {
  // Pull live theme colours (with dark-theme fallbacks)
  const surf   = sidebarColors?.surfaceElevated ?? '#162844';
  const surf2  = sidebarColors?.surface         ?? '#0f1f38';
  const bdr    = sidebarColors?.border          ?? '#1e3a5f';
  const pFrom  = sidebarColors?.primaryFrom     ?? '#0ea5e9';
  const pTo    = sidebarColors?.primaryTo       ?? '#38bdf8';

  return (
    <svg
      width="320" height="200" viewBox="0 0 320 200"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ animation: 'eb-float 3.5s ease-in-out infinite', overflow: 'visible' }}
    >
      {/* ── glow under illustration ── */}
      <ellipse cx="160" cy="190" rx="120" ry="12" fill={pFrom} opacity="0.10"/>

      {/* ── Desk surface ── */}
      <rect x="20"  y="158" width="280" height="8"  rx="4" fill={surf}/>
      <rect x="60"  y="166" width="8"   height="28" rx="4" fill={bdr}/>
      <rect x="252" y="166" width="8"   height="28" rx="4" fill={bdr}/>

      {/* ── Monitor stand ── */}
      <rect x="138" y="148" width="24" height="12" rx="3" fill={surf2}/>
      <rect x="130" y="155" width="40" height="6"  rx="3" fill={bdr}/>

      {/* ── Monitor body ── */}
      <rect x="88"  y="80"  width="124" height="72" rx="8" fill={surf}/>
      <rect x="93"  y="85"  width="114" height="58" rx="5" fill={surf2}/>

      {/* screen scan lines */}
      <rect x="100" y="95"  width="60" height="5" rx="2.5" fill={pFrom} opacity="0.35"/>
      <rect x="100" y="105" width="80" height="5" rx="2.5" fill={pFrom} opacity="0.25"/>
      <rect x="100" y="115" width="50" height="5" rx="2.5" fill={pTo}   opacity="0.30"/>
      <rect x="100" y="125" width="70" height="5" rx="2.5" fill={pFrom} opacity="0.20"/>
      <rect x="100" y="135" width="40" height="5" rx="2.5" fill={pTo}   opacity="0.15"/>

      {/* monitor accent line */}
      <rect x="93" y="85" width="114" height="3" rx="1.5" fill={pFrom} opacity="0.5"/>

      {/* ── Sad-face speech bubble ── */}
      <g style={{ animation: 'eb-float 2.8s ease-in-out infinite 0.4s' }}>
        <rect x="148" y="42" width="62" height="52" rx="12" fill="#f5c842"/>
        <path d="M162 94 L155 106 L174 94Z" fill="#f5c842"/>
        <ellipse cx="165" cy="62" rx="5" ry="6" fill="#4a3f00"
                 style={{ animation: 'eb-blink 3s ease-in-out infinite' }}/>
        <ellipse cx="183" cy="62" rx="5" ry="6" fill="#4a3f00"
                 style={{ animation: 'eb-blink 3s ease-in-out infinite 0.1s' }}/>
        <path d="M162 80 Q174 73 186 80" stroke="#4a3f00" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M161 55 Q165 52 169 54" stroke="#4a3f00" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M179 54 Q183 52 187 55" stroke="#4a3f00" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </g>

      {/* ── Lamp ── */}
      <line x1="246" y1="158" x2="246" y2="118" stroke={pFrom} strokeWidth="5" strokeLinecap="round"/>
      <line x1="246" y1="118" x2="264" y2="100" stroke={pFrom} strokeWidth="5" strokeLinecap="round"/>
      <ellipse cx="246" cy="158" rx="10" ry="5" fill={pTo}/>
      <path d="M252 92 Q274 88 276 106 Q264 112 252 92Z" fill={pTo}/>
      <ellipse cx="264" cy="108" rx="10" ry="6" fill={pTo} opacity="0.45"/>

      {/* ── Books ── */}
      <rect x="268" y="134" width="34" height="10" rx="3" fill="#e07b6a"/>
      <rect x="270" y="124" width="30" height="10" rx="3" fill="#7ecba1"/>
      <rect x="272" y="114" width="26" height="10" rx="3" fill="#f5c842"/>

      {/* ── Pen holder ── */}
      <rect x="54" y="130" width="22" height="28" rx="6" fill={surf}/>
      <rect x="59" y="114" width="4" height="20" rx="2" fill="#e07b6a"/>
      <rect x="65" y="110" width="4" height="24" rx="2" fill="#7ecba1"/>
      <rect x="71" y="116" width="4" height="18" rx="2" fill="#f5c842"/>

      {/* ── Keyboard ── */}
      <rect x="100" y="160" width="100" height="8" rx="4" fill={surf}/>
      <rect x="108" y="162" width="12" height="4" rx="2" fill={bdr}/>
      <rect x="124" y="162" width="12" height="4" rx="2" fill={bdr}/>
      <rect x="140" y="162" width="12" height="4" rx="2" fill={bdr}/>
      <rect x="156" y="162" width="12" height="4" rx="2" fill={bdr}/>
      <rect x="172" y="162" width="12" height="4" rx="2" fill={bdr}/>

      {/* ── Mouse ── */}
      <ellipse cx="220" cy="162" rx="10" ry="7" fill={surf}/>
      <line x1="220" y1="155" x2="220" y2="162" stroke={bdr} strokeWidth="1.5"/>
    </svg>
  );
}

/* ─── Decorative corner shapes ───────────────────────────────────────── */
function CornerDeco() {
  const pFrom = sidebarColors?.primaryFrom ?? '#0ea5e9';
  const pTo   = sidebarColors?.primaryTo   ?? '#38bdf8';

  return (
    <>
      {/* top-left blobs */}
      <svg style={{ position:'absolute', top:0, left:0, pointerEvents:'none' }} width="200" height="180" viewBox="0 0 200 180">
        <ellipse cx="20"  cy="60"  rx="42" ry="60" fill={pFrom} opacity="0.08"/>
        <ellipse cx="70"  cy="10"  rx="30" ry="22" fill={pTo}   opacity="0.06"/>
        <path d="M120 20 L127 28 L120 37 L113 28Z" fill={pFrom} opacity="0.18"/>
        <path d="M155 55 L159 61 L155 67 L151 61Z" fill={pTo}   opacity="0.15"/>
        <path d="M100 52 L103 56 L100 60 L97 56Z"  fill={pFrom} opacity="0.13"/>
      </svg>
      {/* bottom-right blobs */}
      <svg style={{ position:'absolute', bottom:0, right:0, pointerEvents:'none' }} width="220" height="190" viewBox="0 0 220 190">
        <ellipse cx="200" cy="110" rx="45" ry="65" fill={pFrom} opacity="0.08"/>
        <ellipse cx="155" cy="182" rx="38" ry="24" fill={pTo}   opacity="0.06"/>
        <path d="M60 40 L67 48 L60 57 L53 48Z"  fill={pFrom} opacity="0.16"/>
        <path d="M28 104 L33 109 L28 114 L23 109Z" fill={pTo} opacity="0.14"/>
        <path d="M92 132 L95 136 L92 140 L89 136Z" fill={pFrom} opacity="0.12"/>
      </svg>
      {/* top-right bolt */}
      <svg style={{ position:'absolute', top:'10%', right:'4%', pointerEvents:'none' }} width="32" height="52" viewBox="0 0 32 52">
        <path d="M18 2 L6 28 L14 28 L10 50 L28 20 L18 20 Z" fill={pFrom} opacity="0.22"/>
      </svg>
      {/* bottom-left bolt */}
      <svg style={{ position:'absolute', bottom:'8%', left:'3%', pointerEvents:'none' }} width="28" height="46" viewBox="0 0 28 46">
        <path d="M16 2 L5 24 L12 24 L9 44 L24 18 L16 18 Z" fill={pTo} opacity="0.18"/>
      </svg>
    </>
  );
}

/* ─── ErrorBoundary ─────────────────────────────────────────────────── */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null, showStack: false };
    injectKeyframes();
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('[ErrorBoundary] Uncaught error:', error, errorInfo);
  }

  handleReload = () => window.location.reload();
  handleReset  = () => this.setState({ hasError: false, error: null, errorInfo: null, showStack: false });
  toggleStack  = () => this.setState(s => ({ showStack: !s.showStack }));

  render() {
    const { hasError, error, errorInfo, showStack } = this.state;
    const { children, fallback } = this.props;

    if (!hasError) return children;
    if (fallback) {
      return typeof fallback === 'function'
        ? fallback({ error, errorInfo, onReset: this.handleReset, onReload: this.handleReload })
        : fallback;
    }

    // ── live theme tokens ──────────────────────────────────────────
    const bg        = sidebarColors?.background        ?? '#050d1a';
    const card      = sidebarColors?.surface           ?? '#0f1f38';
    const cardBdr   = sidebarColors?.border            ?? '#1e3a5f';
    const txt1      = sidebarColors?.textPrimary       ?? '#e2f4ff';
    const txt2      = sidebarColors?.textSecondary     ?? 'rgba(226,244,255,0.55)';
    const txtMuted  = sidebarColors?.textMuted         ?? 'rgba(226,244,255,0.30)';
    const pFrom     = sidebarColors?.primaryFrom       ?? '#0ea5e9';
    const pTo       = sidebarColors?.primaryTo         ?? '#38bdf8';
    const danger    = chartColors?.severity?.critical  ?? '#ef4444';

    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: bg,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        padding: '24px',
      }}>
        <CornerDeco />

        {/* ── Main card ── */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          background: card,
          border: `1px solid ${cardBdr}`,
          borderRadius: '20px',
          boxShadow: `0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px ${pFrom}18`,
          padding: '48px 40px 40px',
          maxWidth: '520px',
          width: '100%',
          textAlign: 'center',
          animation: 'eb-fadein 0.45s ease both, eb-pulse-glow 4s ease-in-out infinite',
        }}>

          {/* top accent bar */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: '3px',
            background: `linear-gradient(90deg, transparent, ${pFrom}, ${pTo}, transparent)`,
            borderRadius: '0 0 4px 4px',
          }}/>

          {/* ── Illustration ── */}
          <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
            <DeskIllustration />
          </div>

          {/* ── Divider ── */}
          <div style={{
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${cardBdr}, ${pFrom}55, ${cardBdr}, transparent)`,
            marginBottom: '28px',
          }}/>

          {/* ── Heading ── */}
          <h1 style={{
            margin: '0 0 10px',
            fontSize: '28px',
            fontWeight: 700,
            color: txt1,
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
          }}>
            Something went wrong.
          </h1>

          {/* ── Subtitle ── */}
          <p style={{
            margin: '0 0 14px',
            fontSize: '15px',
            color: txt2,
            lineHeight: 1.55,
            fontWeight: 400,
          }}>
            Sorry, something went wrong there. Try again.
          </p>

          {/* ── Error detail ── */}
          {error && (
            <div style={{
              margin: '0 0 20px',
              padding: '10px 16px',
              borderRadius: '10px',
              background: `${danger}18`,
              border: `1px solid ${danger}40`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0, borderRadius: 'inherit',
                background: `linear-gradient(90deg, transparent, ${danger}18, transparent)`,
                backgroundSize: '400px 100%',
                animation: 'eb-shimmer 2.5s linear infinite',
                pointerEvents: 'none',
              }}/>
              <code style={{
                color: `${danger}`,
                fontSize: '12px',
                lineHeight: 1.6,
                wordBreak: 'break-word',
                fontFamily: 'ui-monospace, "Cascadia Code", "Fira Code", monospace',
                display: 'block',
                textAlign: 'left',
                position: 'relative',
              }}>
                {error.toString()}
              </code>
            </div>
          )}

          {/* ── Description ── */}
          <p style={{
            margin: '0 0 28px',
            fontSize: '12.5px',
            color: txtMuted,
            lineHeight: 1.65,
          }}>
            An unexpected error occurred in the application. Your data is safe and all other
            services are running normally. If this issue persists, please contact support.
          </p>

          {/* ── Stack trace toggle ── */}
          {errorInfo?.componentStack && (
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <button
                onClick={this.toggleStack}
                style={{
                  all: 'unset', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  color: pTo, fontSize: '12px', fontWeight: 500,
                  marginBottom: showStack ? '8px' : 0,
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                     style={{ transition: 'transform .25s', transform: showStack ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                {showStack ? 'Hide' : 'Show'} component stack
              </button>
              {showStack && (
                <pre style={{
                  margin: 0, padding: '10px 12px',
                  background: `${pFrom}0d`,
                  border: `1px solid ${cardBdr}`,
                  borderRadius: '8px',
                  color: txt2, fontSize: '11px', lineHeight: 1.65,
                  overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                  maxHeight: '160px', overflowY: 'auto',
                  fontFamily: 'ui-monospace, "Cascadia Code", monospace',
                }}>
                  {errorInfo.componentStack.trim()}
                </pre>
              )}
            </div>
          )}

          {/* ── Buttons ── */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Try Again */}
            <button
              className="eb-btn-primary"
              onClick={this.handleReset}
              style={{
                flex: '1', minWidth: '140px',
                padding: '12px 20px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${pFrom}, ${pTo})`,
                color: '#ffffff',
                fontWeight: 600, fontSize: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                transition: 'filter .2s, transform .15s',
                boxShadow: `0 4px 16px ${pFrom}55`,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10"/>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
              </svg>
              Try Again
            </button>

            {/* Reload Page */}
            <button
              className="eb-btn-ghost"
              onClick={this.handleReload}
              style={{
                flex: '1', minWidth: '140px',
                padding: '12px 20px',
                borderRadius: '10px',
                border: `1.5px solid ${cardBdr}`,
                cursor: 'pointer',
                background: 'transparent',
                color: txt2,
                fontWeight: 500, fontSize: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                transition: 'background .2s, transform .15s',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"/>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
              </svg>
              Reload Page
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;

