import React from 'react';
import sidebarColors from '../../theme/colors.js';
import './PageLoader.css';
import logoImage from '../../assets/logo.jpg';

/**
 * PageLoader Component
 * A full-page loader with a shining skeleton animation effect
 * - Black background with 0.8 transparency
 * - Centered logo with shimmer animation
 * - Uses design system colors
 */
const PageLoader = ({ isLoading = true, fullScreen = true }) => {
  if (!isLoading) return null;

  return (
    <div
      className={`page-loader ${fullScreen ? 'page-loader-fullscreen' : 'page-loader-inline'}`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
    >
      {/* Logo Container with animated rings + orbit dot */}
      <div className="loader-content">
        <div className="loader-icon">
          <div
            className="icon-ring icon-ring-spin"
            style={{
              borderTopColor: sidebarColors.primaryFrom,
              borderRightColor: sidebarColors.primaryTo,
            }}
          ></div>
          <div
            className="icon-ring icon-ring-pulse"
            style={{ borderColor: sidebarColors.primaryFrom }}
          ></div>
          <div
            className="icon-orbit-dot"
            style={{ backgroundColor: sidebarColors.primaryTo }}
          ></div>
          <div className="logo-wrapper">
            <img src={logoImage?.src|| logoImage } alt="Loading..." className="loader-logo" />
            {/* Shimmer overlay for skeleton-like effect */}
            <div className="shimmer-overlay"></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default PageLoader;
