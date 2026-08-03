import { getLiveSidebarColors } from '../../theme/colors.js';

/**
 * IntroTheme — themed CSS override for intro.js (`intro.js-react`'s `<Steps/>`).
 *
 * intro.js ships a light, generic web-1.0 look (white tooltip, grey buttons, blue
 * progress bar) that clashes with this app's dark theme. Render this once alongside
 * any `<Steps/>` tour to reskin the tooltip, buttons, bullets, progress bar, the
 * highlight ring, and the tooltip arrow (recolored per direction so it still matches
 * once the tooltip background changes) using the same design tokens every other
 * themed component in this app uses.
 *
 * Shared across every page's tour instead of duplicated per page — see the
 * `intro-tour-pattern` skill.
 */
export default function IntroTheme() {
  const c = getLiveSidebarColors();
  return (
    <style>{`
      .introjs-tooltip {
        background: ${c.background};
        color: ${c.textPrimary};
        border: 1px solid ${c.border};
        border-radius: 12px;
        box-shadow: 0 16px 40px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.25);
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
        max-width: min(320px, calc(100vw - 32px)) !important;
      }
      .introjs-tooltip-title { color: ${c.textPrimary}; font-size: 14px; font-weight: 700; }
      .introjs-tooltiptext { color: ${c.textSecondary}; font-size: 12.5px; line-height: 1.6; padding: 16px 18px; }
      .introjs-tooltip-header { padding: 14px 18px 0; }
      .introjs-tooltipbuttons { border-top: 1px solid ${c.border}; padding: 12px 14px; }

      .introjs-button {
        box-shadow: none; text-shadow: none; font-family: inherit;
        font-size: 12px; font-weight: 600; padding: 7px 16px; border-radius: 8px;
        border: 1px solid ${c.primary}40; background: ${c.primary}18; color: ${c.primary};
        transition: background 0.15s, border-color 0.15s;
      }
      .introjs-button:hover, .introjs-button:focus {
        background: ${c.primary}30; border-color: ${c.primary}70; color: ${c.primary}; box-shadow: none;
      }
      .introjs-disabled, .introjs-disabled:hover, .introjs-disabled:focus {
        background: transparent; border-color: ${c.border}; color: ${c.textMuted};
        opacity: 0.5; cursor: not-allowed;
      }

      .introjs-skipbutton { color: ${c.textMuted}; }
      .introjs-skipbutton:hover, .introjs-skipbutton:focus { color: ${c.textPrimary}; }

      .introjs-bullets ul li a { background: ${c.border}; }
      .introjs-bullets ul li a:hover, .introjs-bullets ul li a.active { background: ${c.primary}; }

      .introjs-progress { background: ${c.border}; }
      .introjs-progressbar { background: linear-gradient(to right, ${c.primaryFrom}, ${c.primaryTo}); }

      .introjs-helperLayer {
        border-radius: 8px !important;
        box-shadow: 0 0 0 2px ${c.primary}80, rgba(5,8,16,0.78) 0 0 1px 2px, rgba(5,8,16,0.78) 0 0 0 5000px !important;
      }

      .introjs-arrow.top, .introjs-arrow.top-right, .introjs-arrow.top-middle { border-bottom-color: ${c.background} !important; }
      .introjs-arrow.bottom, .introjs-arrow.bottom-right, .introjs-arrow.bottom-middle { border-top-color: ${c.background} !important; }
      .introjs-arrow.left, .introjs-arrow.left-bottom { border-right-color: ${c.background} !important; }
      .introjs-arrow.right, .introjs-arrow.right-bottom { border-left-color: ${c.background} !important; }
    `}</style>
  );
}
