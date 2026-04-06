import { useState, useRef, useEffect, useCallback } from "react";
import { sidebarColors } from "@design-pattern/colors.js";
    // import { applyTheme } from "@/lib/colors";

const themes = [
  { name: "Ocean",  bg: "#0077b6", key: "theam1" },
  { name: "Sunset", bg: "#e76f51", key: "theam2" },
  { name: "Purple", bg: "#8b5cf6", key: "theam3" },
  { name: "Forest", bg: "#2d6a4f", key: "theam4" },
  { name: "Rose",   bg: "#f43f5e", key: "theam5" },
];

const PANEL_W = 260;
const BTN_H   = 64;
const BTN_W   = 32;

export const ThemeSelection = () => {
  // ── mounted guard — ensures no server/client state mismatch ───────────────
  const [mounted,  setMounted]  = useState(false);
  const [isOpen,   setIsOpen]   = useState(false);
  const [selected, setSelected] = useState("theam1"); // stable SSR value
  const [btnY,     setBtnY]     = useState(0);         // stable SSR value

  const dragging    = useRef(false);
  const startY      = useRef(0);
  const startBtnY   = useRef(0);
  const moved       = useRef(false);

  // Patch to real client values after first paint — runs only on client
  useEffect(() => {
    setMounted(true);
    setSelected(localStorage.getItem("theme") || "theam1");
    setBtnY(window.innerHeight - BTN_H);
  }, []);

  // clamp is only ever called inside event handlers — always client-side
  const clamp = useCallback(
    (y) => Math.max(0, Math.min(window.innerHeight - BTN_H, y)),
    []
  );

  // Re-clamp btn position on window resize (only after mount)
  useEffect(() => {
    if (!mounted) return;
    const onResize = () => setBtnY((prev) => clamp(prev));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mounted, clamp]);

  const onMouseDown = useCallback((e) => {
    dragging.current  = true;
    moved.current     = false;
    startY.current    = e.clientY;
    startBtnY.current = btnY;
    e.preventDefault();
  }, [btnY]);

  const onTouchStart = useCallback((e) => {
    dragging.current  = true;
    moved.current     = false;
    startY.current    = e.touches[0].clientY;
    startBtnY.current = btnY;
  }, [btnY]);

  // Pointer tracking (only active after mount)
  useEffect(() => {
    if (!mounted) return;
    const onMove = (clientY) => {
      if (!dragging.current) return;
      const delta = clientY - startY.current;
      if (Math.abs(delta) > 4) moved.current = true;
      setBtnY(clamp(startBtnY.current + delta));
    };
    const onEnd = () => { dragging.current = false; };
    const mm = (e) => onMove(e.clientY);
    const tm = (e) => onMove(e.touches[0].clientY);
    window.addEventListener("mousemove",  mm);
    window.addEventListener("mouseup",    onEnd);
    window.addEventListener("touchmove",  tm, { passive: true });
    window.addEventListener("touchend",   onEnd);
    return () => {
      window.removeEventListener("mousemove",  mm);
      window.removeEventListener("mouseup",    onEnd);
      window.removeEventListener("touchmove",  tm);
      window.removeEventListener("touchend",   onEnd);
    };
  }, [mounted, clamp]);

  const handleClick = () => {
    if (!moved.current) setIsOpen((p) => !p);
  };

  // Nothing rendered on server — no SSR HTML means no hydration mismatch
  if (!mounted) return null;

  const panelH   = themes.length * 54 + 60;
  const panelTop = Math.min(btnY, window.innerHeight - panelH);

  return (
    <>
      {/* Slider Panel */}
      <div
        style={{
          position:     "fixed",
          right:        BTN_W,
          top:          panelTop,
          zIndex:       99998,
          width:        isOpen ? `${PANEL_W}px` : "0px",
          overflow:     "hidden",
          transition:   "width 0.35s cubic-bezier(0.4,0,0.2,1)",
          background:   sidebarColors.background,    // FIX: was DEFAULT_COLORS.background
          borderRadius: "12px 0 0 12px",
          boxShadow:    isOpen ? "-4px 4px 16px rgba(0,0,0,0.18)" : "none",
        }}
      >
        <div style={{ width: PANEL_W, padding: "20px 16px", fontFamily: "sans-serif" }}>
          <p style={{ margin: "0 0 14px", fontWeight: 700, fontSize: 15, color: sidebarColors.textPrimary }}>
            \uD83C\uDFA8 Theme
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  // Event handlers are browser-only — localStorage/window are safe here
                  localStorage.setItem("theme", t.key);
                  setSelected(t.key);
                  // applyTheme(t.key); // apply all CSS vars instantly before reload
                  window.location.reload();
                }}
                style={{
                  display:      "flex",
                  alignItems:   "center",
                  gap:          10,
                  padding:      "8px 12px",
                  borderRadius: 8,
                  border:       selected === t.key
                    ? `2px solid ${sidebarColors.primary}`
                    : "2px solid transparent",
                  background:   selected === t.key
                    ? `${sidebarColors.primary}20`
                    : "transparent",
                  color:        sidebarColors.textPrimary, // FIX: was hardcoded "white"
                  cursor:       "pointer",
                  fontWeight:   selected === t.key ? 700 : 500,
                  fontSize:     14,
                  transition:   "all 0.2s",
                  width:        "100%",
                }}
              >
                <span
                  style={{
                    width:        18,
                    height:       18,
                    borderRadius: "50%",
                    background:   t.bg,
                    border:       "2px solid rgba(255,255,255,0.6)",
                    flexShrink:   0,
                  }}
                />
                {t.name}
                {selected === t.key && (
                  <span style={{ marginLeft: "auto" }}>\u2713</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Draggable Toggle Button */}
      <div
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onClick={handleClick}
        style={{
          position:       "fixed",
          right:          0,
          top:            btnY,
          zIndex:         99999,
          width:          BTN_W,
          height:         BTN_H,
          background:     sidebarColors.primary,
          borderRadius:   "8px 0 0 8px",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          fontSize:       20,
          color:          "white",
          cursor:         dragging.current ? "grabbing" : "grab",
          userSelect:     "none",
          boxShadow:      "-3px 3px 10px rgba(0,0,0,0.25)",
          transition:     dragging.current ? "none" : "box-shadow 0.2s",
          flexDirection:  "column",
          gap:            2,
        }}
      >
        <span style={{ fontSize: 18, lineHeight: 1 }}>{isOpen ? "\u203A" : "\u2039"}</span>
        <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width:        4,
              height:       4,
              borderRadius: "50%",
              background:   sidebarColors.textPrimary, // FIX: was DEFAULT_COLORS.textPrimary
              display:      "block",
            }}/>
          ))}
        </span>
      </div>
    </>
  );
};