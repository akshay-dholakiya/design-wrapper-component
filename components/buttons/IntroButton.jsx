import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import sidebarColors from '../../theme/colors.js';

const SIZE = 52;
const MARGIN = 24;
const DRAG_THRESHOLD = 5; // px of movement before a press counts as a drag, not a click

function defaultPosition(size) {
  if (typeof window === 'undefined') return { left: 0, top: 0 };
  return {
    left: window.innerWidth - size - MARGIN,
    top: window.innerHeight - size - MARGIN,
  };
}

function clamp(pos, size) {
  const maxLeft = Math.max(0, window.innerWidth - size);
  const maxTop = Math.max(0, window.innerHeight - size);
  return {
    left: Math.min(Math.max(pos.left, 0), maxLeft),
    top: Math.min(Math.max(pos.top, 0), maxTop),
  };
}

/**
 * IntroButton — generic draggable floating action button.
 *
 * Presentational + drag mechanics only — it knows nothing about "intro" content.
 * Each consuming project supplies its own `onClick` handler (open a tour, a modal,
 * navigate somewhere, etc.), so the same button can be reused across projects for
 * whatever floating-trigger use case they need.
 *
 * Position is persisted per `storageKey` in localStorage, so pass a unique key per
 * page/project if you don't want drag position shared.
 *
 * @param {object}   props
 * @param {function} props.onClick     Called on a genuine click (not after a drag)
 * @param {node}     [props.icon]      Icon element, defaults to a "?" glyph
 * @param {string}   [props.title]     Tooltip / aria-label text
 * @param {string}   [props.storageKey] localStorage key for persisted drag position
 * @param {number}   [props.size]      Button diameter in px (default 52)
 */
export default function IntroButton({
  onClick,
  icon,
  title = 'Show intro',
  storageKey = 'intro-button-position',
  size = SIZE,
  style = {},
}) {
  const [pos, setPos] = useState(() => defaultPosition(size));
  const dragRef = useRef({ dragging: false, moved: false, startX: 0, startY: 0, startLeft: 0, startTop: 0 });

  useEffect(() => {
    let stored = null;
    try { stored = JSON.parse(localStorage.getItem(storageKey)); } catch { /* ignore */ }
    setPos(stored && typeof stored.left === 'number' && typeof stored.top === 'number'
      ? clamp(stored, size)
      : defaultPosition(size));
  }, [storageKey, size]);

  useEffect(() => {
    const onResize = () => setPos(p => clamp(p, size));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [size]);

  const handlePointerDown = (e) => {
    dragRef.current = {
      dragging: true, moved: false,
      startX: e.clientX, startY: e.clientY,
      startLeft: pos.left, startTop: pos.top,
    };
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handlePointerMove = (e) => {
    const d = dragRef.current;
    if (!d.dragging) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) d.moved = true;
    setPos(clamp({ left: d.startLeft + dx, top: d.startTop + dy }, size));
  };

  const handlePointerUp = () => {
    const d = dragRef.current;
    d.dragging = false;
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
    setPos(p => {
      try { localStorage.setItem(storageKey, JSON.stringify(p)); } catch { /* ignore */ }
      return p;
    });
    if (!d.moved) onClick?.();
  };

  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onPointerDown={handlePointerDown}
      style={{
        position: 'fixed',
        left: pos.left, top: pos.top,
        width: size, height: size, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundImage: `linear-gradient(135deg, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`,
        color: '#fff', border: 'none', cursor: 'grab',
        boxShadow: `0 8px 24px ${sidebarColors.primaryFrom}50, 0 2px 8px rgba(0,0,0,0.3)`,
        zIndex: 9999, touchAction: 'none', userSelect: 'none',
        ...style,
      }}
    >
      {icon ?? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="17" x2="12" y2="11" />
          <line x1="12" y1="7.5" x2="12.01" y2="7.5" />
        </svg>
      )}
    </button>
  );
}

IntroButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  title: PropTypes.string,
  storageKey: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};
