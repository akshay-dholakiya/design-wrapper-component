import {useState, useRef, useEffect, useCallback} from "react";
import {DEFAULT_COLORS, sidebarColors} from "@design-pattern/colors.js";


const themes = [
    {name: "Ocean", bg: "#0077b6",key: 'theam1'},
    {name: "Sunset", bg: "#e76f51" ,key: 'theam2'},
    {name: "Purple", bg: "#8b5cf6", key: 'theam3' },
    {name: "Forest", bg: "#2d6a4f",key: 'theam4'},
];

const PANEL_W = 260;
const BTN_H = 64;
const BTN_W = 32;

export const ThemeSelection = () => {


    const theam  =  localStorage.getItem("theme") || "theam1";
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(theam);
    const [btnY, setBtnY] = useState(window.innerHeight - 80);
    const dragging = useRef(false);
    const startY = useRef(0);
    const startBtnY = useRef(0);
    const moved = useRef(false);

    const clamp = (y) => Math.max(0, Math.min(window.innerHeight - BTN_H, y));

    const onMouseDown = useCallback((e) => {
        dragging.current = true;
        moved.current = false;
        startY.current = e.clientY;
        startBtnY.current = btnY;
        e.preventDefault();
    }, [btnY]);

    const onTouchStart = useCallback((e) => {
        dragging.current = true;
        moved.current = false;
        startY.current = e.touches[0].clientY;
        startBtnY.current = btnY;
    }, [btnY]);

    useEffect(() => {
        const onMove = (clientY) => {
            if (!dragging.current) return;
            const delta = clientY - startY.current;
            if (Math.abs(delta) > 4) moved.current = true;
            setBtnY(clamp(startBtnY.current + delta));
        };

        const onEnd = () => {
            dragging.current = false;
        };

        const mm = (e) => onMove(e.clientY);
        const tm = (e) => onMove(e.touches[0].clientY);

        window.addEventListener("mousemove", mm);
        window.addEventListener("mouseup", onEnd);
        window.addEventListener("touchmove", tm);
        window.addEventListener("touchend", onEnd);
        return () => {
            window.removeEventListener("mousemove", mm);
            window.removeEventListener("mouseup", onEnd);
            window.removeEventListener("touchmove", tm);
            window.removeEventListener("touchend", onEnd);
        };
    }, []);

    const handleClick = () => {
        if (!moved.current) setIsOpen(p => !p);
    };

    // Panel top aligns with button, clamped so it doesn't overflow bottom
    const panelH = themes.length * 54 + 60;
    const panelTop = Math.min(btnY, window.innerHeight - panelH);



    return (
        <>
            {/* Slider Panel */}
            <div style={{
                position: "fixed",
                right: BTN_W,
                top: panelTop,
                zIndex: 99998,
                width: isOpen ? `${PANEL_W}px` : "0px",
                overflow: "hidden",
                transition: "width 0.35s cubic-bezier(0.4,0,0.2,1)",
                background: DEFAULT_COLORS.background,
                borderRadius: "12px 0 0 12px",
                boxShadow: isOpen ? "-4px 4px 16px rgba(0,0,0,0.18)" : "none",
            }}>
                <div style={{width: PANEL_W, padding: "20px 16px", fontFamily: "sans-serif"}}>
                    <p style={{margin: "0 0 14px", fontWeight: 700, fontSize: 15, color: "white"}}>🎨 Theme</p>
                    <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                        {themes.map((t) => (
                            <button key={t.name} onClick={() => {


                                localStorage.setItem("theme", t.key);
                                setSelected(t.name)
                                window.location.reload();


                            }} style={{
                                display: "flex", alignItems: "center", gap: 10,
                                padding: "8px 12px", borderRadius: 8,
                                border: selected === t.key ? "2px solid white" : "2px solid transparent",
                                // background: ,
                                color: "white", cursor: "pointer",
                                fontWeight: selected === t.key ? 700 : 500,
                                fontSize: 14, transition: "all 0.2s", width: "100%",
                                // ...primaryButtonStyles,
                            }}>
                <span style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: t.bg, border: "2px solid rgba(255,255,255,0.6)", flexShrink: 0,
                }}/>
                                {t.name}
                                {selected === t.key && <span style={{marginLeft: "auto"}}>✓</span>}
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
                    position: "fixed",
                    right: 0,
                    top: btnY,
                    zIndex: 99999,
                    width: BTN_W,
                    height: BTN_H,
                    background: sidebarColors.primary,
                    borderRadius: "8px 0 0 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    color: "white",
                    cursor: dragging.current ? "grabbing" : "grab",
                    userSelect: "none",
                    boxShadow: "-3px 3px 10px rgba(0,0,0,0.25)",
                    transition: dragging.current ? "none" : "box-shadow 0.2s",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <span style={{fontSize: 18, lineHeight: 1}}>{isOpen ? "›" : "‹"}</span>
                {/* drag handle dots */}
                <span style={{display: "flex", flexDirection: "column", gap: 3}}>
          {[0, 1, 2].map(i => (
              <span key={i} style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: DEFAULT_COLORS.textPrimary,
                  display: "block"
              }}/>
          ))}
        </span>
            </div>
        </>
    );
};

