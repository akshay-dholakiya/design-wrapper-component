import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import sidebarColors from "./colors";
import "./Sidebar.css";
import { TOPBAR_HEIGHT, SIDEBAR_COLLAPSED_W, SIDEBAR_EXPANDED_W } from "./lib/layout-constants";

const isExternalLink = (path = "") => /^https?:\/\//i.test(path);

// Helper: convert "#rrggbb" → "r, g, b" for use in rgba(var(--x), alpha)
const hexToRgb = (hex = "") => {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
      ? `${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}`
      : "0, 0, 0";
};

const logoutIcon = (
    <svg
        className="logout-item-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
);

const Sidebar = ({
                   menuItems = [],
                   bottomMenuItems = [],
                   logo,
                   onOpenChange,
                   showLogout = false,
                   onLogout,
                 }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    if (onOpenChange) onOpenChange(newOpenState);
  };

  const cssVariables = {
    "--sidebar-background": sidebarColors.background,
    "--sidebar-border": sidebarColors.border,
    "--sidebar-text-primary": sidebarColors.textPrimary,
    "--sidebar-text-secondary": sidebarColors.textSecondary,
    "--sidebar-primary-from": sidebarColors.primaryFrom,
    "--sidebar-primary-to": sidebarColors.primaryTo,
    "--sidebar-hover-border": sidebarColors.hoverBorder,
    "--sidebar-hover-shadow": sidebarColors.hoverShadow,
    "--sidebar-hover-shadow-spread": sidebarColors.hoverShadowSpread,
    "--sidebar-active-shadow": sidebarColors.activeShadow,
    "--sidebar-hover-background": sidebarColors.hoverBackground,
    "--sidebar-hover-text": sidebarColors.hoverText,
    "--sidebar-active-background": sidebarColors.activeBackground,
    "--sidebar-active-text": sidebarColors.activeText,
    "--sidebar-active-border": sidebarColors.activeBorder,
    "--sidebar-button-background": sidebarColors.buttonBackground,
    "--sidebar-button-icon-color": sidebarColors.buttonIconColor,

    // ── Danger tokens ────────────────────────────────────────
    "--sidebar-danger": sidebarColors.danger,
    "--sidebar-danger-dark": sidebarColors.dangerDark,
    "--sidebar-danger-hover": sidebarColors.dangerHover,

    // RGB triples for rgba(var(--x), alpha) usage in CSS
    "--sidebar-danger-rgb": hexToRgb(sidebarColors.danger),
    "--sidebar-danger-dark-rgb": hexToRgb(sidebarColors.dangerDark),
    "--sidebar-primary-rgb": hexToRgb(sidebarColors.primary),

    "--sidebar-expanded-width": SIDEBAR_EXPANDED_W,
    "--sidebar-collapsed-width": SIDEBAR_COLLAPSED_W,
    // for use in CSS calc() to fill remaining height
  };

  const canLogout = showLogout && typeof onLogout === "function";

  const resolvedBottomMenuItems = [
    ...bottomMenuItems,
    ...(canLogout
        ? [{ title: "Logout", icon: logoutIcon, variant: "danger", onClick: onLogout }]
        : []),
  ];

  return (
      <div
          className={`sidebar-container ${open ? "expanded" : "collapsed"}`}
          style={cssVariables}
      >
        {/* Logo */}
        <div className={`sidebar-logo ${open ? "expanded" : "collapsed"}`}>
          {logo && <img src={logo} alt="logo" />}
        </div>

        {/* Menu */}
        <div
            className={`sidebar-menu ${
                menuItems.length > 5 ? "scrollable sidebar-menu-scroll" : "mt-4"
            }`}
        >
          {menuItems.map((item, i) => (
              <MenuItem key={i} item={item} open={open} cssVariables={cssVariables} />
          ))}
        </div>

        {resolvedBottomMenuItems.length > 0 && (
            <div className="sidebar-bottom-menu">
              {resolvedBottomMenuItems.map((item, i) => (
                  <MenuItem
                      key={`bottom-${item.title || i}`}
                      item={item}
                      open={open}
                      cssVariables={cssVariables}
                  />
              ))}
            </div>
        )}

        {/* Toggle Button */}
        <div className="toggle-button-container">
          <button
              className={`toggle-button ${open ? "expanded" : "collapsed"}`}
              onClick={handleToggle}
          >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </div>
      </div>
  );
};

const MenuItem = ({ item, open, cssVariables }) => {
  const [subOpen, setSubOpen] = useState(false);
  const [floatingOpen, setFloatingOpen] = useState(false); // collapsed floating submenu (hover OR click)
  const [tooltipOpen, setTooltipOpen] = useState(false); // leaf-item tooltip when collapsed
  const [floatingPosition, setFloatingPosition] = useState({ top: 0, left: 0 });
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const location = useLocation();
  const wrapperRef = useRef(null);
  const portalRef = useRef(null);
  const closeTimerRef = useRef(null);

  const hasChildren = Boolean(item.children?.length);
  const isActionItem = typeof item.onClick === "function" && !item.path;

  const isParentActive =
      hasChildren && item.children.some((child) => location.pathname === child.path);
  const active = !isActionItem && (location.pathname === item.path || isParentActive);

  const showFloatingSubmenu = !open && hasChildren && floatingOpen;
  const showTooltip = !open && !hasChildren && tooltipOpen;

  useEffect(() => {
    if (open) {
      setSubOpen(isParentActive);
    }
    // reset collapsed-only UI state whenever the sidebar open state changes
    setFloatingOpen(false);
    setTooltipOpen(false);
  }, [open, isParentActive]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const updateFloatingPosition = () => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const estimatedHeight = 260;
    const maxTop = Math.max(12, window.innerHeight - estimatedHeight - 12);
    setFloatingPosition({
      top: Math.min(Math.max(12, rect.top), maxTop),
      left: rect.right + 12,
    });
  };

  const updateTooltipPosition = () => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + rect.height / 2,
      left: rect.right + 12,
    });
  };

  // Hover both opens and closes the floating submenu again: entering cancels
  // any pending close, leaving schedules a short-delay close (so moving the
  // mouse from the trigger to the portal submenu doesn't flicker it shut).
  const openFloatingMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (!open && hasChildren) {
      updateFloatingPosition();
      setFloatingOpen(true);
    }
  };

  const closeFloatingMenu = (immediate = false) => {
    if (!open && hasChildren) {
      if (immediate) {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setFloatingOpen(false);
        return;
      }
      closeTimerRef.current = setTimeout(() => setFloatingOpen(false), 150);
    }
  };

  const toggleFloatingMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (floatingOpen) {
      setFloatingOpen(false);
    } else {
      updateFloatingPosition();
      setFloatingOpen(true);
    }
  };

  // Reposition on resize/scroll while the floating submenu is visible
  useEffect(() => {
    if (!showFloatingSubmenu) return;
    const handleViewportChange = () => updateFloatingPosition();
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);
    return () => {
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [showFloatingSubmenu]);

  // Close the floating submenu on outside click (click anywhere that isn't
  // the trigger wrapper or the portaled submenu itself)
  useEffect(() => {
    if (!showFloatingSubmenu) return;

    const handleOutsideClick = (e) => {
      const clickedWrapper = wrapperRef.current?.contains(e.target);
      const clickedPortal = portalRef.current?.contains(e.target);
      if (!clickedWrapper && !clickedPortal) {
        setFloatingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showFloatingSubmenu]);

  // Close the inline (expanded-sidebar) submenu on outside click too
  useEffect(() => {
    if (!(open && hasChildren && subOpen)) return;

    const handleOutsideClick = (e) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setSubOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open, hasChildren, subOpen]);

  const handleItemClick = () => {
    if (open && hasChildren) {
      // Expanded sidebar: click toggles the inline submenu
      setSubOpen(!subOpen);
    } else if (!open && hasChildren) {
      // Collapsed sidebar: click toggles the floating submenu (in addition to hover)
      toggleFloatingMenu();
    }
  };

  const handleLeafMouseEnter = () => {
    if (!open && !hasChildren) {
      updateTooltipPosition();
      setTooltipOpen(true);
    }
  };

  const handleLeafMouseLeave = () => {
    if (!open && !hasChildren) setTooltipOpen(false);
  };

  const renderMenuTarget = (menuItem, content, key, onNavigate) => {
    if (typeof menuItem.onClick === "function" && !menuItem.path) {
      return (
          <button
              key={key}
              type="button"
              className="menu-item-trigger"
              onClick={(e) => {
                menuItem.onClick(e);
                if (onNavigate) onNavigate();
              }}
              title={menuItem.title}
          >
            {content}
          </button>
      );
    }
    const menuPath = menuItem.path;
    if (isExternalLink(menuPath)) {
      return (
          <a
              key={key}
              href={menuPath}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                if (onNavigate) onNavigate();
              }}
          >
            {content}
          </a>
      );
    }
    return (
        <Link
            key={key}
            to={menuPath}
            onClick={() => {
              if (onNavigate) onNavigate();
            }}
        >
          {content}
        </Link>
    );
  };

  const menuContent = (
      <div
          onClick={handleItemClick}
          onMouseEnter={handleLeafMouseEnter}
          onMouseLeave={handleLeafMouseLeave}
          className={[
            "menu-item-content",
            open ? "expanded" : "collapsed",
            active ? "active" : "",
            item.variant === "danger" ? "danger" : "",
          ]
              .filter(Boolean)
              .join(" ")}
      >
      <span className="menu-item-icon">
        <span className={`menu-item-icon-inner ${open ? "expanded" : "collapsed"}`}>
          {item.icon || "•"}
        </span>
      </span>

        {open && (
            <div className="flex justify-between items-center w-full">
              <span className="menu-item-text">{item.title}</span>
              {hasChildren && (
                  <span className={`menu-item-arrow ${subOpen ? "open" : "closed"}`}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
              )}
            </div>
        )}
      </div>
  );

  return (
      <div
          ref={wrapperRef}
          className={`menu-item-wrapper ${showFloatingSubmenu ? "floating-open" : ""}`}
          onMouseEnter={openFloatingMenu}
          onMouseLeave={() => closeFloatingMenu(false)}
      >
        {hasChildren && !item.path ? (
            menuContent
        ) : (
            renderMenuTarget(item, menuContent, item.path || item.title || "menu-item")
        )}

        {/* Expanded inline submenu */}
        {hasChildren && subOpen && open && (
            <div className="submenu-container">
              {item.children.map((child, i) => {
                const childActive = child.path ? location.pathname === child.path : false;
                return renderMenuTarget(
                    child,
                    <div className={`submenu-item ${childActive ? "active" : ""}`}>
                      {child.icon && (
                          <span className="submenu-item-icon">{child.icon}</span>
                      )}
                      <span>{child.title}</span>
                    </div>,
                    `${item.title}-${child.title}-${i}`,
                    () => setSubOpen(false) // close after navigating
                );
              })}
            </div>
        )}

        {/* Collapsed floating portal submenu */}
        {showFloatingSubmenu &&
            typeof document !== "undefined" &&
            createPortal(
                <div
                    ref={portalRef}
                    className="submenu-container floating-submenu floating-submenu-portal"
                    style={{
                      ...cssVariables,
                      top: `${floatingPosition.top}px`,
                      left: `${floatingPosition.left}px`,
                    }}
                    onMouseEnter={openFloatingMenu}
                    onMouseLeave={() => closeFloatingMenu(false)}
                >
                  <div className="floating-submenu-title">{item.title}</div>
                  <div className="floating-submenu-items">
                    {item.children.map((child, i) => {
                      const childActive = child.path
                          ? location.pathname === child.path
                          : false;
                      return renderMenuTarget(
                          child,
                          <div className={`submenu-item ${childActive ? "active" : ""}`}>
                            {child.icon && (
                                <span className="submenu-item-icon">{child.icon}</span>
                            )}
                            <span>{child.title}</span>
                          </div>,
                          `${item.title}-floating-${child.title}-${i}`,
                          () => closeFloatingMenu(true) // close immediately after navigating
                      );
                    })}
                  </div>
                </div>,
                document.body
            )}

        {/* Tooltip for a leaf item (no children) when the sidebar is collapsed —
          portaled to <body> so it isn't clipped by the scrollable menu container */}
        {showTooltip &&
            typeof document !== "undefined" &&
            createPortal(
                <div
                    className="menu-item-tooltip menu-item-tooltip-portal"
                    style={{
                      ...cssVariables,
                      top: `${tooltipPosition.top}px`,
                      left: `${tooltipPosition.left + 10}px`,
                    }}
                >
                  {item.title}
                </div>,
                document.body
            )}
      </div>
  );
};

export default Sidebar;