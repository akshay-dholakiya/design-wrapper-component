import React from 'react';
import sidebarColors, { fontStyles } from '../../colors';
import { borderRadius, componentSpacing, layout, spacing } from '../../spacing';
// import EagleEyeLoader from '../../../src/components/utility/EagleEyeLoader';
import { AlarmClock, RefreshCw, ClipboardList, Clock } from 'lucide-react';

const ICON_MAP = {
	'alarm-clock': AlarmClock,
	refresh: RefreshCw,
	clipboard: ClipboardList,
	clock: Clock,
};

const withAlpha = (hex, alpha) => {
	if (typeof hex !== 'string') return hex;
	if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
	const normalized = hex.replace('#', '');
	if (![3, 6].includes(normalized.length)) return hex;
	const full = normalized.length === 3
		? normalized.split('').map((ch) => `${ch}${ch}`).join('')
		: normalized;
	const r = Number.parseInt(full.slice(0, 2), 16);
	const g = Number.parseInt(full.slice(2, 4), 16);
	const b = Number.parseInt(full.slice(4, 6), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function MttdMttrCardsWrapper({
	cards = [],
	children = null,
	isLoading = false,
	loadingComponent = '',
	noDataComponent = 'No summary data available',
	columns,
	onCardClick,
}) {
	const hasCards = Array.isArray(cards) && cards.length > 0;

	if (isLoading) {
		return loadingComponent;
	}

	if (!hasCards) {
		return (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: layout.height['2xl'],
					color: sidebarColors.textSecondary,
					...fontStyles.body,
				}}
			>
				{noDataComponent}
			</div>
		);
	}

	if (children) {
		return children;
	}

	const columnCount = columns || Math.min(cards.length, 3);

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
				gap: componentSpacing.gap.md,
			}}
		>
			{cards.map((card, index) => {
				const accentColor = card?.color || sidebarColors.primary;
				const Icon = typeof card?.icon === 'string'
					? ICON_MAP[card.icon]
					: (card?.Icon || card?.icon);
				const logo = card?.logo || card?.logoSrc;
				const subDataItems = Array.isArray(card?.subData)
					? card.subData
					: card?.subData
						? [card.subData]
						: card?.subtitle
							? [card.subtitle]
							: [];
				const clickable = Boolean(card?.clickable || card?.onClick || onCardClick);

				const handleClick = () => {
					if (typeof card?.onClick === 'function') {
						card.onClick(card);
						return;
					}
					if (typeof onCardClick === 'function') {
						onCardClick(card, index);
					}
				};

				return (
					<button
						key={card?.id || card?.label || index}
						type="button"
						onClick={handleClick}
						disabled={!clickable}
						style={{
							textAlign: 'left',
							borderRadius: borderRadius.lg,
							padding: componentSpacing.card.default,
							border: `1px solid ${sidebarColors.border}`,
							borderLeft: `${spacing.xs} solid ${accentColor}`,
							background: sidebarColors.backgroundSoft,
							cursor: clickable ? 'pointer' : 'default',
							display: 'flex',
							alignItems: 'center',
							gap: spacing.md,
						}}
					>
						{logo ? (
							<div
								style={{
									width: layout.height.lg,
									height: layout.height.lg,
									borderRadius: borderRadius.md,
									background: withAlpha(accentColor, 0.18),
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									padding: spacing.xs,
									flexShrink: 0,
								}}
							>
								<img
									src={logo}
									alt={card?.label || card?.title || 'card logo'}
									style={{ width: '100%', height: '100%', objectFit: 'contain' }}
								/>
							</div>
						) : Icon ? (
							<div
								style={{
									width: layout.height.lg,
									height: layout.height.lg,
									borderRadius: borderRadius.md,
									background: withAlpha(accentColor, 0.18),
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexShrink: 0,
								}}
							>
								<Icon size={layout.iconSize.sm} color={accentColor} />
							</div>
						) : null}

						<div style={{ minWidth: 0 }}>
							<div
								style={{
									...fontStyles.bodySmall,
									fontWeight: fontStyles.heading6?.fontWeight || 700,
									letterSpacing: '0.08em',
									color: accentColor,
									marginBottom: spacing.xs,
									textTransform: 'uppercase',
								}}
							>
								{card?.label || card?.title || '--'}
							</div>

							<div style={{ ...fontStyles.heading3, color: sidebarColors.textPrimary, lineHeight: 1.2 }}>
								{card?.display ?? card?.value ?? '--'}
							</div>

							{subDataItems.length > 0 ? (
								<div style={{ marginTop: spacing.xs }}>
									{subDataItems.map((item, itemIndex) => (
										<div
											key={`${card?.id || card?.label || index}-sub-${itemIndex}`}
											style={{
												...fontStyles.bodySmall,
												color: sidebarColors.textSecondary,
												lineHeight: 1.45,
											}}
										>
											{item}
										</div>
									))}
								</div>
							) : null}
						</div>
					</button>
				);
			})}
		</div>
	);
}

