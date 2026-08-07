/**
 * ProfileCard — centralized, theme-aware user profile display
 *
 * A fully reusable "who am I" panel: hero header (avatar, name, role badge,
 * email, auth-provider badge), a row of generic stat tiles (tenant, member
 * since, last updated, or anything else the host app wants to surface), and
 * an "application access" grid.
 *
 * Reads all colors from the active theme (theme/colors.js) so it renders
 * correctly under every theme (ocean / sentinel / emerald / signal) and any
 * platform that consumes design-wrapper-component — no Tailwind, no
 * hardcoded palette.
 *
 * This component is presentation-only: it takes fully-resolved data as
 * props. Data fetching (current user, permissions, app registry lookups)
 * stays in the host app.
 *
 * Props
 * ─────
 *   loading       – boolean            show the loading state instead of content
 *   loadingText   – string             text next to the spinner (default: "Loading profile…")
 *   avatarUrl     – string             optional avatar image; falls back to initial
 *   initial       – string             single-letter fallback avatar (required if no avatarUrl)
 *   username      – string             display name                          (required)
 *   email         – string             email address                        (required)
 *   role          – string             raw role key (e.g. "org_admin") — humanized for display
 *   roleLabel     – string             override the humanized role label
 *   roleColor     – string             accent color for the role badge / hero top border
 *   isActive      – boolean            shows a live/idle presence dot on the avatar
 *   provider      – { label, icon, color }   auth provider badge (e.g. Google / Microsoft / Email & Password)
 *   stats         – Array<{ icon, label, value, color }>   generic stat tiles row
 *   apps          – Array<{ key, name, color, icon(color, size) }>   application access grid
 *   appsTitle     – string             heading above the apps grid (default: "Application Access")
 *   emptyAppsText – string             shown when apps is empty
 *   actions       – Array<{ label, icon, onClick, variant }>   buttons rendered top-right of the hero (e.g. Edit Profile / Security)
 *   style         – object             extra style merged onto the root element
 *
 * Usage
 * ─────
 *   <ProfileCard
 *     loading={isLoading}
 *     initial={initial}
 *     username={user.username}
 *     email={user.email}
 *     role={user.role}
 *     roleColor={roleAccent}
 *     isActive={user.is_active}
 *     provider={provider}
 *     stats={[
 *       { icon: TenantIcon, label: 'Tenant', value: user.tenant_name, color: '#8b5cf6' },
 *       { icon: CalendarIcon, label: 'Member Since', value: formatDate(user.created_at), color: sidebarColors.primaryFrom },
 *     ]}
 *     apps={apps}
 *     actions={[
 *       { label: 'Edit Profile', icon: <EditIcon />, onClick: openEditModal },
 *       { label: 'Security', icon: <ShieldIcon />, onClick: goToSecurity, variant: 'primary' },
 *     ]}
 *   />
 */

import { useEffect, useState } from 'react';
import sidebarColors, { fontStyles } from '../../theme/colors';
import { spacing, borderRadius, componentSpacing } from '../../theme/spacing';
import Button from '../buttons/Button';

// ─── helpers ──────────────────────────────────────────────────────────────────

function withAlpha(color, alpha) {
  if (!color) return `rgba(59,130,246,${alpha})`;
  if (color.startsWith('rgba')) return color.replace(/[\d.]+\)$/, `${alpha})`);
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return color;
}

const humanizeRole = (role) => (role ? role.replace(/_/g, ' ') : '');

/** Fade + rise entrance transition, staggered by index — no global keyframes required */
function useEntrance(delay = 0) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(id);
  }, [delay]);
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(8px)',
    transition: 'opacity 400ms ease, transform 400ms ease',
  };
}

// ─── icons (self-contained — no external icon dependency) ───────────────────

const SpinnerIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="pc-spin">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const MailIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const ShieldIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <rect x="9" y="11" width="6" height="5" rx="1" />
    <path d="M12 11V9a2 2 0 1 0-4 0v2" />
  </svg>
);

// ─── sub-components ───────────────────────────────────────────────────────────

function StatTile({ icon: Icon, label, value, color, delay }) {
  const [hovered, setHovered] = useState(false);
  const entrance = useEntrance(delay);
  const accent = color || sidebarColors.primaryFrom;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: sidebarColors.backgroundSoft,
        border: `1px solid ${hovered ? withAlpha(accent, 0.4) : sidebarColors.border}`,
        borderRadius: borderRadius.lg,
        padding: `${spacing.md} ${spacing.lg}`,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'border-color 200ms ease, transform 200ms ease',
        ...entrance,
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          pointerEvents: 'none',
          background: `radial-gradient(circle at 100% 0%, ${withAlpha(accent, 0.13)}, transparent 60%)`,
        }}
      />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: spacing.sm }}>
        {Icon && (
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
              width: spacing['3xl'],
              height: spacing['3xl'],
              borderRadius: borderRadius.md,
              color: accent,
              backgroundColor: withAlpha(accent, 0.1),
              border: `1px solid ${withAlpha(accent, 0.2)}`,
            }}
          >
            {typeof Icon === 'function' ? <Icon size={15} /> : Icon}
          </div>
        )}
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              ...fontStyles.caption,
              margin: 0,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: sidebarColors.textSecondary,
            }}
          >
            {label}
          </p>
          <p
            style={{
              ...fontStyles.body,
              margin: '2px 0 0',
              fontWeight: 600,
              color: sidebarColors.textPrimary,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {value ?? '—'}
          </p>
        </div>
      </div>
    </div>
  );
}

function AppChip({ app, delay }) {
  const [hovered, setHovered] = useState(false);
  const entrance = useEntrance(delay);
  const accent = app.color || sidebarColors.primaryFrom;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.sm,
        borderRadius: borderRadius.lg,
        paddingBlock: spacing.xs,
        paddingInlineStart: spacing.xs,
        paddingInlineEnd: spacing.md,
        backgroundColor: sidebarColors.surface,
        border: `1px solid ${hovered ? withAlpha(accent, 0.5) : sidebarColors.border}`,
        boxShadow: hovered ? `0 12px 24px -12px ${withAlpha(accent, 0.4)}` : 'none',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease',
        ...entrance,
      }}
    >
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          width: spacing['3xl'],
          height: spacing['3xl'],
          borderRadius: borderRadius.md,
          overflow: 'hidden',
          backgroundColor: withAlpha(accent, 0.15),
          boxShadow: `inset 0 0 10px ${withAlpha(accent, 0.15)}`,
        }}
      >
        {typeof app.icon === 'function' ? app.icon(accent, 18) : app.icon}
      </div>
      <span style={{ ...fontStyles.bodySmall, fontWeight: 600, color: sidebarColors.textPrimary }}>{app.name}</span>
    </div>
  );
}

// ─── component ───────────────────────────────────────────────────────────────

export default function ProfileCard({
  loading = false,
  loadingText = 'Loading profile…',
  avatarUrl,
  initial = '?',
  username,
  email,
  role,
  roleLabel,
  roleColor,
  isActive = false,
  provider,
  stats = [],
  apps = [],
  appsTitle = 'Application Access',
  emptyAppsText = 'No application access granted.',
  actions = [],
  style,
}) {
  const heroEntrance = useEntrance(0);
  const appsEntrance = useEntrance(180);
  const accent = roleColor || sidebarColors.primaryFrom;

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: spacing.sm,
          padding: `${spacing['6xl']} 0`,
          ...fontStyles.body,
          color: sidebarColors.textSecondary,
        }}
      >
        <SpinnerIcon size={16} />
        {loadingText}
        <style>{`.pc-spin{animation:pc-spin 1s linear infinite}@keyframes pc-spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: '960px', marginInline: 'auto', ...style }}>
      {/* ── Hero ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: borderRadius.xl,
          padding: componentSpacing.card.comfortable,
          backgroundColor: sidebarColors.backgroundSoft,
          border: `1px solid ${sidebarColors.border}`,
          ...heroEntrance,
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            insetInline: spacing['2xl'],
            top: 0,
            height: '1px',
            pointerEvents: 'none',
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-64px',
            right: '-64px',
            width: '256px',
            height: '256px',
            borderRadius: '50%',
            filter: 'blur(64px)',
            pointerEvents: 'none',
            background: `radial-gradient(circle, ${withAlpha(sidebarColors.primaryFrom, 0.22)}, transparent 70%)`,
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-40px',
            width: '224px',
            height: '224px',
            borderRadius: '50%',
            filter: 'blur(64px)',
            pointerEvents: 'none',
            background: `radial-gradient(circle, ${withAlpha(sidebarColors.accent, 0.14)}, transparent 70%)`,
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: spacing.lg,
          }}
        >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: spacing.lg, flex: 1, minWidth: 0 }}>
          {/* Avatar */}
          <div
            style={{
              position: 'relative',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              overflow: 'hidden',
              fontSize: '26px',
              fontWeight: 700,
              color: sidebarColors.textInverse ?? '#fff',
              background: `linear-gradient(135deg, ${sidebarColors.primaryFrom}, ${sidebarColors.primaryTo})`,
              boxShadow: `0 8px 24px -6px ${withAlpha(sidebarColors.primaryFrom, 0.55)}, 0 0 0 4px ${withAlpha(sidebarColors.primaryFrom, 0.1)}`,
            }}
          >
            {avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatarUrl} alt={username} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              initial
            )}
            <span
              style={{
                position: 'absolute',
                bottom: '-2px',
                right: '-2px',
                display: 'grid',
                placeItems: 'center',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: sidebarColors.backgroundSoft,
                border: `2px solid ${sidebarColors.backgroundSoft}`,
              }}
            >
              <span
                style={{
                  position: 'relative',
                  display: 'grid',
                  placeItems: 'center',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? sidebarColors.success : sidebarColors.textMuted,
                }}
              >
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      backgroundColor: withAlpha(sidebarColors.success, 0.7),
                      animation: 'pc-ping 1.6s cubic-bezier(0,0,0.2,1) infinite',
                    }}
                  />
                )}
              </span>
            </span>
          </div>

          {/* Identity */}
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm, flexWrap: 'wrap' }}>
              <h1 style={{ ...fontStyles.heading2, margin: 0, color: sidebarColors.textPrimary }}>{username}</h1>
              {role && (
                <span
                  style={{
                    ...fontStyles.caption,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    borderRadius: borderRadius.full,
                    padding: `2px ${spacing.md}`,
                    color: accent,
                    backgroundColor: withAlpha(accent, 0.1),
                    border: `1px solid ${withAlpha(accent, 0.25)}`,
                  }}
                >
                  {roleLabel || humanizeRole(role)}
                </span>
              )}
            </div>

            <div style={{ marginTop: spacing.sm, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: spacing.sm }}>
              {email && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: spacing.xs,
                    borderRadius: borderRadius.full,
                    padding: `4px ${spacing.md}`,
                    ...fontStyles.bodySmall,
                    color: sidebarColors.textSecondary,
                    backgroundColor: sidebarColors.surface,
                    border: `1px solid ${sidebarColors.border}`,
                  }}
                >
                  <MailIcon /> {email}
                </span>
              )}
              {provider && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: spacing.xs,
                    borderRadius: borderRadius.full,
                    padding: `4px ${spacing.md}`,
                    ...fontStyles.bodySmall,
                    fontWeight: 600,
                    color: provider.color || sidebarColors.primaryFrom,
                    backgroundColor: withAlpha(provider.color || sidebarColors.primaryFrom, 0.12),
                    border: `1px solid ${withAlpha(provider.color || sidebarColors.primaryFrom, 0.3)}`,
                  }}
                >
                  {provider.icon || <ShieldIcon size={15} />} {provider.label}
                </span>
              )}
            </div>
          </div>
        </div>

        {actions.length > 0 && (
          <div style={{ position: 'relative', display: 'flex', flexShrink: 0, gap: spacing.sm }}>
            {actions.map((a, i) => (
              <Button
                key={a.label ?? i}
                size="sm"
                variant={a.variant || (i === actions.length - 1 ? 'primary' : 'dark')}
                icon={a.icon}
                onClick={a.onClick}
              >
                {a.label}
              </Button>
            ))}
          </div>
        )}
        </div>
        <style>{`@keyframes pc-ping{75%,100%{transform:scale(2);opacity:0}}`}</style>
      </div>

      {/* ── Stat tiles ── */}
      {stats.length > 0 && (
        <div
          style={{
            marginTop: spacing.lg,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: spacing.md,
          }}
        >
          {stats.map((s, i) => (
            <StatTile key={s.label ?? i} icon={s.icon} label={s.label} value={s.value} color={s.color} delay={60 + i * 50} />
          ))}
        </div>
      )}

      {/* ── Apps ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          marginTop: spacing.lg,
          borderRadius: borderRadius.xl,
          padding: componentSpacing.card.comfortable,
          backgroundColor: sidebarColors.backgroundSoft,
          border: `1px solid ${sidebarColors.border}`,
          ...appsEntrance,
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-40px',
            right: 0,
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            filter: 'blur(64px)',
            pointerEvents: 'none',
            background: `radial-gradient(circle, ${withAlpha(sidebarColors.accentViolet, 0.14)}, transparent 70%)`,
          }}
        />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ ...fontStyles.heading6, margin: 0, color: sidebarColors.textPrimary }}>{appsTitle}</h2>
          <span
            style={{
              ...fontStyles.caption,
              fontWeight: 600,
              borderRadius: borderRadius.full,
              padding: `2px ${spacing.md}`,
              color: sidebarColors.textSecondary,
              backgroundColor: sidebarColors.surface,
              border: `1px solid ${sidebarColors.border}`,
            }}
          >
            {apps.length} apps
          </span>
        </div>

        <div style={{ position: 'relative', marginTop: spacing.lg, display: 'flex', flexWrap: 'wrap', gap: spacing.md }}>
          {apps.map((app, i) => (
            <AppChip key={app.key ?? app.name ?? i} app={app} delay={240 + i * 40} />
          ))}
          {apps.length === 0 && (
            <p style={{ ...fontStyles.bodySmall, margin: 0, color: sidebarColors.textSecondary }}>{emptyAppsText}</p>
          )}
        </div>
      </div>
    </div>
  );
}
