import sidebarColors, { fontStyles } from '@design-pattern/colors.js';
import { LiveClock } from './liveclick.jsx';

export const MainTopbar = ({ routeLabels }) => {
  const location = {
    pathname: window.location.pathname,
  };

  const ROUTE_LABELS = routeLabels;

  const normalizePath = (pathname) => {
    if (!pathname) return '/';
    const trimmed = pathname.replace(/\/+$/, '');
    return (trimmed || '/').toLowerCase();
  };

  const toLabel = (segment) => {
    const name = segment.replace(/-/g, ' ');
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const getDashboardName = (pathname) => {
    const normalizedPath = normalizePath(pathname);

    if (ROUTE_LABELS[normalizedPath]) {
      return ROUTE_LABELS[normalizedPath];
    }

    const parts = normalizedPath.split('/').filter(Boolean);
    if (parts.length === 0) return 'Home';
    return toLabel(parts[parts.length - 1]);
  };

  const getBreadcrumbs = (pathname) => {
    const normalizedPath = normalizePath(pathname);

    if (normalizedPath === '/' || normalizedPath === '/home') {
      return ['Home'];
    }

    if (ROUTE_LABELS[normalizedPath]) {
      return ['Home', ROUTE_LABELS[normalizedPath]];
    }

    const parts = normalizedPath.split('/').filter(Boolean).map(toLabel);
    return ['Home', ...parts.filter((part) => part !== 'Home')];
  };

  const dashboardName = getDashboardName(location.pathname);
  const breadcrumbs = getBreadcrumbs(location.pathname);

  const visibleBreadcrumbs = breadcrumbs.filter((crumb, index, arr) => {
    if (index === 0) return true;
    return crumb !== arr[index - 1];
  });

  return (
    <div
      className="w-full border-b px-6 py-4"
      style={{
        backgroundColor: sidebarColors.background,
        borderColor: sidebarColors.border,
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h1
            style={{
              ...fontStyles.heading2,
              background: `linear-gradient(to right, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {dashboardName === 'Home' ? 'Home' : `${dashboardName} Dashboard`}
          </h1>

          <div
            className="flex items-center gap-2 mt-2 min-h-[20px]"
            style={{
              visibility: visibleBreadcrumbs.length > 1 ? 'visible' : 'hidden',
            }}
          >
            {visibleBreadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  style={{
                    ...fontStyles.label,
                    color:
                      index === visibleBreadcrumbs.length - 1
                        ? sidebarColors.primaryFrom
                        : sidebarColors.textSecondary,
                  }}
                >
                  {crumb}
                </span>

                {index < visibleBreadcrumbs.length - 1 && (
                  <span
                    style={{
                      color: sidebarColors.textSecondary,
                      fontSize: '12px',
                    }}
                  >
                    ›
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: sidebarColors.primaryFrom }}
          />
          <LiveClock />
        </div>
      </div>
    </div>
  );
};
