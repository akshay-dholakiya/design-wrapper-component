import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarColors from "./colors";

const Sidebar = ({ menuItems = [], logo, onOpenChange }) => {
    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        const newOpenState = !open;
        setOpen(newOpenState);
        if (onOpenChange) {
            onOpenChange(newOpenState);
        }
    };

    return (
        <>
            {/* Custom scrollbar styles for webkit browsers */}
            <style>{`
                .sidebar-menu-scroll::-webkit-scrollbar {
                    width: 6px;
                }
                .sidebar-menu-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .sidebar-menu-scroll::-webkit-scrollbar-thumb {
                    background: transparent;
                    border-radius: 3px;
                    transition: background 0.3s;
                }
                .sidebar-menu-scroll:hover::-webkit-scrollbar-thumb {
                    background: ${sidebarColors.primaryFrom};
                }
                .sidebar-menu-scroll::-webkit-scrollbar-thumb:hover {
                    background: ${sidebarColors.primaryTo};
                }
            `}</style>
            <div
                style={{
                    width: open ? 256 : 80,
                    backgroundColor: sidebarColors.background,
                    borderRightColor: sidebarColors.border
                }}
                className="fixed top-0 left-0 h-screen text-white
      transition-[width] duration-300 ease-in-out flex flex-col border-r-2 overflow-visible"
            >
            {/* Logo */}
            <div
                style={{ borderBottomColor: sidebarColors.border }}
                className="flex items-center justify-center border-b-2 p-4 relative"
            >
                {logo && (
                    <img
                        src={logo}
                        alt="logo"
                        className={`object-contain transition-all duration-300 ${
                            open
                                ? "w-36 h-16 scale-100"
                                : "w-16 h-16 scale-110"
                        }`}
                    />
                )}
            </div>

            {/* Menu */}
            <div
                className={`flex-1 overflow-x-visible px-2 space-y-2 ${
                    menuItems.length > 5 
                        ? 'overflow-y-auto py-4 sidebar-menu-scroll' 
                        : 'overflow-y-visible flex flex-col justify-center'
                }`}
                style={menuItems.length > 5 ? {
                    scrollbarWidth: 'thin',
                    scrollbarColor: `transparent transparent`,
                } : {}}
                onMouseEnter={(e) => {
                    if (menuItems.length > 5) {
                        e.currentTarget.style.scrollbarColor = `${sidebarColors.primaryFrom} ${sidebarColors.background}`;
                    }
                }}
                onMouseLeave={(e) => {
                    if (menuItems.length > 5) {
                        e.currentTarget.style.scrollbarColor = `transparent transparent`;
                    }
                }}
            >
                {menuItems.map((item, i) => (
                    <MenuItem key={i} item={item} open={open} />
                ))}
            </div>

            {/* Expand/Collapse Button - Bottom */}
            <div className="relative p-4">
                <span
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '-20px',
                        backgroundColor: sidebarColors.buttonBackground,
                        borderColor: sidebarColors.border,
                        color: sidebarColors.buttonIconColor
                    }}
                    onClick={handleToggle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`;
                        e.currentTarget.style.borderColor = sidebarColors.hoverBorder;
                        e.currentTarget.style.boxShadow = `${sidebarColors.hoverShadowSpread} ${sidebarColors.hoverShadow}`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundImage = 'none';
                        e.currentTarget.style.backgroundColor = sidebarColors.buttonBackground;
                        e.currentTarget.style.borderColor = sidebarColors.border;
                        e.currentTarget.style.boxShadow = '';
                    }}
                    className="w-10 h-10 flex items-center justify-center
                    border-2 rounded-full shadow-lg
                    transition-all duration-300 group cursor-pointer"
                >
                    <span
                        className={`text-2xl font-bold transition-all duration-300 ${
                            open ? "rotate-0" : "rotate-180"
                        }`}
                    >
                        ‹
                    </span>
                </span>
            </div>
        </div>
        </>
    );
};

const MenuItem = ({ item, open }) => {
    const [subOpen, setSubOpen] = useState(false);
    const location = useLocation();

    const active = location.pathname === item.path;

    const menuContent = (
        <div
            onClick={() => item.children && setSubOpen(!subOpen)}
            style={{
                backgroundImage: active
                    ? `linear-gradient(to right, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`
                    : 'none',
                boxShadow: active
                    ? `0 10px 15px -3px ${sidebarColors.activeShadow}, 0 4px 6px -2px ${sidebarColors.activeShadow}`
                    : 'none',
                color: sidebarColors.textPrimary
            }}
            onMouseEnter={(e) => {
                if (!active) {
                    e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`;
                    e.currentTarget.style.boxShadow = `0 10px 15px -3px ${sidebarColors.activeShadow}, 0 4px 6px -2px ${sidebarColors.activeShadow}`;
                }
            }}
            onMouseLeave={(e) => {
                if (!active) {
                    e.currentTarget.style.backgroundImage = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                }
            }}
            className={`flex items-center rounded-lg cursor-pointer transition-all duration-300
        ${open ? "px-3 py-3 justify-start" : "px-2 py-3 justify-center"}`}
        >
            {/* Icon (always visible) */}
            <span className="w-8 h-8 flex items-center justify-center shrink-0 text-xl">
                <span
                    className={`transition-transform duration-300 ${
                        open ? "scale-110" : "scale-100"
                    }`}
                >
                    {item.icon || "•"}
                </span>
            </span>

            {/* Text (hidden when collapsed) */}
            {open && (
                <>
                    <span className="ml-3 whitespace-nowrap transition-all duration-300">
                        {item.title}
                    </span>

                    {/* Arrow */}
                    {item.children && (
                        <span
                            className={`ml-auto w-5 h-5 flex items-center justify-center
                            transition-all duration-300 ${
                                subOpen ? "rotate-90" : "rotate-0"
                            }`}
                        >
                            <svg
                                className="w-4 h-4"
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
                <div className="ml-6 mt-1 space-y-1">
                    {item.children.map((child, i) => {
                        const childActive = location.pathname === child.path;

                        return (
                            <Link key={i} to={child.path}>
                                <div
                                    style={{
                                        backgroundImage: childActive
                                            ? `linear-gradient(to right, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`
                                            : 'none',
                                        boxShadow: childActive
                                            ? `0 10px 15px -3px ${sidebarColors.activeShadow}, 0 4px 6px -2px ${sidebarColors.activeShadow}`
                                            : 'none',
                                        color: sidebarColors.textPrimary
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!childActive) {
                                            e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`;
                                            e.currentTarget.style.boxShadow = `0 10px 15px -3px ${sidebarColors.activeShadow}, 0 4px 6px -2px ${sidebarColors.activeShadow}`;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!childActive) {
                                            e.currentTarget.style.backgroundImage = 'none';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }
                                    }}
                                    className="p-2 rounded-md text-sm transition-all duration-300 flex items-center gap-2"
                                >
                                    {/* Submenu Icon */}
                                    {child.icon && (
                                        <span className="w-5 h-5 flex items-center justify-center shrink-0 text-base">
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