import {
  DashboardIcon,
  SoarIcon,
  EdrIcon,
  ThreatIntelIcon,
  RadarIcon,
  IocIcon,
  SiemIcon,
  UEBAIcon,
  TicketingIcon,
} from './platform-module-icons.jsx';

// Central registry of the Eagleye platform apps — shared across consumer
// repos (fct-sso-app's Apps hub, sidebar app switchers, etc.) so every app's
// name/url/color/icon stays in sync in one place.
export const PLATFORM_MODULES = [
  {
    id: 'Dashboard',
    appKey: 'dashboard',
    name: 'Dashboard',
    description: 'Unified cybersecurity operations overview',
    url: 'https://dashboards.eagleyesoc.ai/',
    accentColor: '#3b82f6',
    icon: DashboardIcon,
  },
  {
    id: 'SIEM',
    appKey: 'siem',
    name: 'SIEM',
    description: 'Security Information and Event Management',
    url: 'https://re.eagleyesoc.ai/',
    accentColor: '#f59e0b',
    icon: SiemIcon,
  },
  {
    id: 'UEBA',
    appKey: 'ueba',
    name: 'UEBA',
    description: 'User and entity behavior analytics for anomaly detection',
    url: 'https://ueba.eagleyesoc.ai/',
    accentColor: '#8b5cf6',
    icon: UEBAIcon,
  },
  {
    id: 'SOAR',
    appKey: 'soar',
    name: 'SOAR',
    description: 'Security orchestration, automation, and response platform',
    url: 'https://soar.eagleyesoc.ai/',
    accentColor: '#ef4444',
    icon: SoarIcon,
  },
  {
    id: 'EDR',
    appKey: 'edr',
    name: 'Vanguard',
    description: 'Endpoint threat detection and response solution',
    url: 'https://vanguard.eagleyesoc.ai/',
    accentColor: '#f97316',
    icon: EdrIcon,
  },
  {
    id: 'ThreatIntel',
    appKey: 'ti',
    name: 'Threat Intel',
    description: 'Threat intelligence aggregation and analysis platform',
    url: 'https://ti.eagleyesoc.ai/',
    accentColor: '#06b6d4',
    icon: ThreatIntelIcon,
  },
  {
    id: 'Radar',
    appKey: 'radar',
    name: 'Radar',
    description: 'Asset discovery and attack surface monitoring',
    url: 'https://radar.eagleyesoc.ai/',
    accentColor: '#8b5cf6',
    icon: RadarIcon,
  },
  {
    id: 'IOC',
    appKey: 'ioc',
    name: 'IOC',
    description: 'Indicator of Compromise management and tracking',
    url: 'https://ioc.eagleyesoc.ai/',
    accentColor: '#10b981',
    icon: IocIcon,
  },
  {
    id: 'Ticketing',
    appKey: 'tickets',
    name: 'Ticketing system',
    description: 'Incident and case management platform',
    url: 'https://ticket.eagleyesoc.ai/',
    accentColor: '#ec4899',
    icon: TicketingIcon,
  },
];

// Category (+ "recent" flag) per module appKey — shared by the Apps page
// (PlatformHub.tsx) and any other view that renders the module grid (e.g.
// the organization detail "Apps" tab).
export const MODULE_CATEGORY = {
  dashboard: { category: 'Overview',     recent: true  },
  siem:      { category: 'Detection'                   },
  ueba:      { category: 'Analytics'                   },
  soar:      { category: 'Automation',   recent: true  },
  edr:       { category: 'Endpoint',     recent: true  },
  ti:        { category: 'Intelligence'               },
  radar:     { category: 'Discovery'                   },
  ioc:       { category: 'Intelligence'               },
};
