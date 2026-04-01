    import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import sidebarColors from "./colors";
import "./Sidebar.css";

const isExternalLink = (path = "") => /^https?:\/\//i.test(path);

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

const Sidebar = ({ menuItems = [], bottomMenuItems = [], logo, onOpenChange, showLogout = false, onLogout }) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        const newOpenState = !open;
        setOpen(newOpenState);
        if (onOpenChange) {
            onOpenChange(newOpenState);
        }
    };

    // CSS variables for dynamic theming
    const cssVariables = {
        '--sidebar-background': sidebarColors.background,
        '--sidebar-border': sidebarColors.border,
        '--sidebar-text-primary': sidebarColors.textPrimary,
        '--sidebar-text-secondary': sidebarColors.textSecondary,
        '--sidebar-primary-from': sidebarColors.primaryFrom,
        '--sidebar-primary-to': sidebarColors.primaryTo,
        '--sidebar-hover-border': sidebarColors.hoverBorder,
        '--sidebar-hover-shadow': sidebarColors.hoverShadow,
        '--sidebar-hover-shadow-spread': sidebarColors.hoverShadowSpread,
        '--sidebar-active-shadow': sidebarColors.activeShadow,
        '--sidebar-hover-background': sidebarColors.hoverBackground,
        '--sidebar-hover-text': sidebarColors.hoverText,
        '--sidebar-active-background': sidebarColors.activeBackground,
        '--sidebar-active-text': sidebarColors.activeText,
        '--sidebar-active-border': sidebarColors.activeBorder,
        '--sidebar-button-background': sidebarColors.buttonBackground,
        '--sidebar-button-icon-color': sidebarColors.buttonIconColor,
    };

    const canLogout = showLogout && typeof onLogout === "function";
    const resolvedMenuItems = menuItems;

    const resolvedBottomMenuItems = [
        ...bottomMenuItems,
        ...(canLogout
            ? [
                {
                    title: "Logout",
                    icon: logoutIcon,
                    variant: "danger",
                    onClick: onLogout,
                },
            ]
            : []),
    ];

    return (
        <>
            <div
                className={`sidebar-container ${open ? 'expanded' : 'collapsed'}`}
                style={cssVariables}
            >
            {/* Logo */}
            <div className={`sidebar-logo ${open ? 'expanded' : 'collapsed'}`}>
                {logo && (
                    <img
                        src={logo}
                        alt="logo"
                    />
                )}
            </div>

            {/* Menu */}
            <div
                className={`sidebar-menu ${
                    resolvedMenuItems.length > 5 
                        ? 'scrollable sidebar-menu-scroll' 
                        : 'centered'
                }`}
            >
                {resolvedMenuItems.map((item, i) => (
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

            {/* Expand/Collapse Button - Bottom */}
            <div className="toggle-button-container">
                <button
                    className={`toggle-button ${open ? 'expanded' : 'collapsed'}`}
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
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
        </>
    );
};

const MenuItem = ({ item, open, cssVariables }) => {
    const [subOpen, setSubOpen] = useState(false);
    const [hoverOpen, setHoverOpen] = useState(false);
    const [floatingPosition, setFloatingPosition] = useState({ top: 0, left: 0 });
    const location = useLocation();
    const wrapperRef = useRef(null);
    const closeTimerRef = useRef(null);
    const hasChildren = Boolean(item.children?.length);
    const isActionItem = typeof item.onClick === "function" && !item.path;

    const isParentActive = hasChildren && item.children.some((child) => location.pathname === child.path);
    const active = !isActionItem && (location.pathname === item.path || isParentActive);

    // Reset submenu state when sidebar mode changes
    useEffect(() => {
        if (open) {
            // If a child is active, keep submenu open; otherwise reset
            if (!isParentActive) {
                setSubOpen(false);
            } else {
                setSubOpen(true);
            }
        }
        setHoverOpen(false);
    }, [open, isParentActive]);

    useEffect(() => {
        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
            }
        };
    }, []);
    const showFloatingSubmenu = !open && hasChildren && hoverOpen;

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

    const openFloatingMenu = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
        }

        if (!open && hasChildren) {
            updateFloatingPosition();
            setHoverOpen(true);
        }
    };

    const closeFloatingMenu = () => {
        if (!open && hasChildren) {
            closeTimerRef.current = setTimeout(() => {
                setHoverOpen(false);
            }, 120);
        }
    };

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

    const handleItemClick = () => {
        if (open && hasChildren) {
            setSubOpen(!subOpen);
        }
    };

    const renderMenuTarget = (menuItem, content, key) => {
        if (typeof menuItem.onClick === "function" && !menuItem.path) {
            return (
                <button
                    key={key}
                    type="button"
                    className="menu-item-trigger"
                    onClick={menuItem.onClick}
                    title={menuItem.title}
                >
                    {content}
                </button>
            );
        }

        const menuPath = menuItem.path;

        if (isExternalLink(menuPath)) {
            return (
                <a key={key} href={menuPath} target="_blank" rel="noreferrer">
                    {content}
                </a>
            );
        }

        return (
            <Link key={key} to={menuPath}>
                {content}
            </Link>
        );
    };

    const menuContent = (
        <div
            onClick={handleItemClick}
            className={`menu-item-content ${open ? 'expanded' : 'collapsed'} ${active ? 'active' : ''} ${item.variant === 'danger' ? 'danger' : ''}`}
        >
            {/* Icon (always visible) */}
            <span className="menu-item-icon">
                <span className={`menu-item-icon-inner ${open ? 'expanded' : 'collapsed'}`}>
                    {item.icon || "•"}
                </span>
            </span>

            {/* Text (hidden when collapsed) */}
            {open && (
                <div className={'flex justify-between items-center w-full'} >
                    <span className="menu-item-text">
                        {item.title}
                    </span>

                    {/* Arrow */}
                    {hasChildren && (
                        <span className={`menu-item-arrow ${subOpen ? 'open' : 'closed'}`}>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
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
            className={`menu-item-wrapper ${!showFloatingSubmenu ? 'floating-open' : ''}`}

            onMouseEnter={openFloatingMenu}
            onMouseLeave={closeFloatingMenu}
        >
            {/* Main Item - Wrap with Link */}
            {hasChildren && !item.path ? (
                menuContent
            ) : (
                renderMenuTarget(item, menuContent, item.path || item.title || 'menu-item')
            )}

            {/* Expanded submenu */}
            {hasChildren && subOpen && open && (
                <div className="submenu-container"  >
                    {item.children.map((child, i) => {
                        const childActive = child.path ? location.pathname === child.path : false;

                        return renderMenuTarget(
                            child,
                            <div className={`submenu-item ${childActive ? 'active' : ''}`} >
                                {child.icon && (
                                    <span className="submenu-item-icon">
                                        {child.icon}
                                    </span>
                                )}
                                <span>{child.title}</span>
                            </div>,
                            `${item.title}-${child.title}-${i}`
                        );
                    })}
                </div>
            )}

            {/* Collapsed floating submenu */}
            {showFloatingSubmenu && typeof document !== "undefined" && createPortal(
                <div
                    className="submenu-container floating-submenu floating-submenu-portal"
                    style={{
                        ...cssVariables,
                        top: `${floatingPosition.top}px`,
                        left: `${floatingPosition.left}px`
                    }}
                    onMouseEnter={openFloatingMenu}
                    onMouseLeave={closeFloatingMenu}
                >
                    <div className={`floating-submenu-title`}>{item.title}</div>
                    <div className="floating-submenu-items">
                        {item.children.map((child, i) => {
                            const childActive = child.path ? location.pathname === child.path : false;

                            return renderMenuTarget(
                                child,
                                <div className={`submenu-item ${childActive ? 'active' : ''}`}>
                                    {child.icon && (
                                        <span className="submenu-item-icon">
                                            {child.icon}
                                        </span>
                                    )}
                                    <span>{child.title}</span>
                                </div>,
                                `${item.title}-floating-${child.title}-${i}`
                            );
                        })}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Sidebar;