import React from 'react';
import sidebarColors from './colors.js';
import './PageLoader.css';
import logoImage from './assets/logo.jpg';

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
      {/* Logo Container with Shimmer Effect */}
      <div className="loader-content">
        <div className="logo-wrapper">
          <img src={logoImage?.src|| logoImage} alt="Loading..." className="loader-logo" />
          {/* Shimmer overlay for skeleton-like effect */}
          <div className="shimmer-overlay"></div>
        </div>

        {/* Loading Text */}
        <p
          className="loader-text"
          style={{
            color: sidebarColors.textPrimary,
          }}
        >
          Loading...
        </p>

        {/* Animated dots */}
        <div className="loader-dots">
          <span
            style={{
              backgroundColor: sidebarColors.primaryFrom,
            }}
          ></span>
          <span
            style={{
              backgroundColor: sidebarColors.primaryFrom,
            }}
          ></span>
          <span
            style={{
              backgroundColor: sidebarColors.primaryFrom,
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
