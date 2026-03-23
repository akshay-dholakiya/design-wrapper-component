import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarColors from "./colors";
import "./Sidebar.css";

const Sidebar = ({ menuItems = [], logo, onOpenChange }) => {
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
        '--sidebar-button-background': sidebarColors.buttonBackground,
        '--sidebar-button-icon-color': sidebarColors.buttonIconColor,
    };

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
                    menuItems.length > 5 
                        ? 'scrollable sidebar-menu-scroll' 
                        : 'centered'
                }`}
            >
                {menuItems.map((item, i) => (
                    <MenuItem key={i} item={item} open={open} />
                ))}
            </div>

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

const MenuItem = ({ item, open }) => {
    const [subOpen, setSubOpen] = useState(false);
    const location = useLocation();

    // Collapse submenu only when sidebar is expanded (not when collapsed)
    useEffect(() => {
        if (open) {
            setSubOpen(false);
        }
    }, [open]);

    const active = location.pathname === item.path;

    const menuContent = (
        <div
            onClick={() => item.children && setSubOpen(!subOpen)}
            className={`menu-item-content ${open ? 'expanded' : 'collapsed'} ${active ? 'active' : ''}`}
        >
            {/* Icon (always visible) */}
            <span className="menu-item-icon">
                <span className={`menu-item-icon-inner ${open ? 'expanded' : 'collapsed'}`}>
                    {item.icon || "•"}
                </span>
            </span>

            {/* Text (hidden when collapsed) */}
            {open && (
                <>
                    <span className="menu-item-text">
                        {item.title}
                    </span>

                    {/* Arrow */}
                    {item.children && (
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
                </>
            )}
        </div>
    );

    return (
        <div>
            {/* Main Item - Wrap with Link if no children, otherwise just show content */}
            {item.children ? (
                menuContent
            ) : (
                <Link to={item.path}>
                    {menuContent}
                </Link>
            )}

            {/* Submenu */}
            {item.children && subOpen && open && (
                <div className="submenu-container">
                    {item.children.map((child, i) => {
                        const childActive = location.pathname === child.path;

                        return (
                            <Link key={i} to={child.path}>
                                <div className={`submenu-item ${childActive ? 'active' : ''}`}>
                                    {/* Submenu Icon */}
                                    {child.icon && (
                                        <span className="submenu-item-icon">
                                            {child.icon}
                                        </span>
                                    )}
                                    {/* Submenu Title */}
                                    <span>{child.title}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Sidebar;