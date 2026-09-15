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
  CspmIcon,
} from './platform-module-icons.jsx';

// Central registry of the Eagleye platform apps — shared across consumer
// repos (fct-sso-app's Apps hub, sidebar app switchers, etc.) so every app's
// name/url/color/icon stays in sync in one place.
export const PLATFORM_MODULES = [
  {
    id: 'Dashboard',
    appKey: 'dashboard',
    name: 'Dashboard',
    description:
      'Get a unified real-time view of your cybersecurity environment. Monitor threats, incidents, alerts, and security posture. Access key security insights across all integrated modules.',
    url: 'https://dashboards.eagleyesoc.ai/',
    accentColor: '#3b82f6',
    icon: DashboardIcon,
  },
  {
    id: 'SIEM',
    appKey: 'siem',
    name: 'SIEM',
    description:
      'Collect and analyze security logs and events from multiple sources. Correlate activities to identify suspicious behavior and potential threats. Investigate incidents with centralized security visibility.',
    url: 'https://re.eagleyesoc.ai/',
    accentColor: '#f59e0b',
    icon: SiemIcon,
  },
  {
    id: 'UEBA',
    appKey: 'ueba',
    name: 'UEBA',
    description:
      'Analyze user and entity behavior to identify unusual activity. Detect anomalies, compromised accounts, and potential insider threats. Use behavioral risk insights for faster threat investigation.',
    url: 'https://ueba.eagleyesoc.ai/',
    accentColor: '#8b5cf6',
    icon: UEBAIcon,
  },
  {
    id: 'SOAR',
    appKey: 'soar',
    name: 'SOAR',
    description:
      'Automate security workflows and incident response processes. Integrate security tools to enrich alerts and execute response actions. Reduce response time and improve security operations efficiency.',
    url: 'https://soar.eagleyesoc.ai/',
    accentColor: '#ef4444',
    icon: SoarIcon,
  },
  {
    id: 'EDR',
    appKey: 'edr',
    name: 'Vanguard',
    description:
      'Protect endpoints with continuous monitoring and threat detection. Identify malicious processes, suspicious activities, and endpoint compromises. Investigate, contain, and respond to endpoint threats quickly.',
    url: 'https://vanguard.eagleyesoc.ai/',
    accentColor: '#f97316',
    icon: EdrIcon,
  },
  {
    id: 'ThreatIntel',
    appKey: 'ti',
    name: 'Threat Intel',
    description:
      'Collect and analyze intelligence from multiple threat sources. Investigate malicious IPs, domains, URLs, hashes, threat actors, and campaigns. Turn threat intelligence into actionable security insights.',
    url: 'https://ti.eagleyesoc.ai/',
    accentColor: '#06b6d4',
    icon: ThreatIntelIcon,
  },
  {
    id: 'Radar',
    appKey: 'radar',
    name: 'Radar',
    description:
      'Discover and continuously monitor internet-facing assets and infrastructure. Identify exposed services, vulnerabilities, and attack-surface changes. Reduce external exposure before attackers can exploit it.',
    url: 'https://radar.eagleyesoc.ai/',
    accentColor: '#8b5cf6',
    icon: RadarIcon,
  },
  {
    id: 'IOC',
    appKey: 'ioc',
    name: 'IOC',
    description:
      'Manage and investigate Indicators of Compromise from multiple sources. Track malicious IPs, domains, URLs, hashes, and other threat indicators. Support threat hunting, detection, and incident response.',
    url: 'https://ioc.eagleyesoc.ai/',
    accentColor: '#10b981',
    icon: IocIcon,
  },
  {
    id: 'Ticketing',
    appKey: 'tickets',
    name: 'Ticketing system',
    description:
      'Manage security incidents, alerts, investigations, and operational cases. Assign ownership, prioritize tasks, and track investigation progress. Maintain accountability from detection through resolution.',
    url: 'https://ticket.eagleyesoc.ai/',
    accentColor: '#ec4899',
    icon: TicketingIcon,
  },
  {
    id: 'CSPM',
    appKey: 'cspm',
    name: 'CSPM',
    description:
      'Continuously monitor cloud environments for security risks and misconfigurations. Identify compliance issues, exposed resources, and excessive permissions. Improve cloud security posture and reduce exploitable weaknesses.',
    url: 'https://cspm.eagleyesoc.ai/',
    accentColor: '#38C793',
    icon: CspmIcon,
  },
  {
    id: 'TIP',
    appKey: 'tip',
    name: 'TIP',
    description:
      'Aggregate and manage threat intelligence from multiple sources. Enrich indicators with context about threats, actors, and campaigns. Enable proactive threat hunting, investigation, and security decision-making.',
    url: 'https://tip.eagleyesoc.ai/',
    accentColor: '#06b6d4',
    icon: ThreatIntelIcon,
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
  cspm:      { category: 'Cloud Security'              },
};
