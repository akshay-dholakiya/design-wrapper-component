import React, { useMemo } from 'react';
import sidebarColors, { fontStyles } from '../../colors';
import { borderRadius, spacing } from '../../spacing';

const toLabel = (value) => String(value || '')
	.replace(/([a-z])([A-Z])/g, '$1 $2')
	.replace(/[_-]+/g, ' ')
	.replace(/\s+/g, ' ')
	.trim()
	.replace(/^./, (char) => char.toUpperCase());

const defaultFormatValue = (value) => {
	if (value === null || value === undefined || value === '') return '-';
	if (typeof value === 'number') return Number.isFinite(value) ? value.toLocaleString() : '-';
	if (typeof value === 'boolean') return value ? 'Yes' : 'No';
	return String(value);
};

export default function TableWrapper({
	data = [],
	columns = null,
	rowNameField = 'name',
	rowNameLabel = 'Name',
	rowKeyField = null,
	height = 400,
	isLoading = false,
	noDataComponent = 'No data available',
	stickyHeader = true,
	valueFormatter = defaultFormatValue,
	onRowClick,
}) {
	const rows = Array.isArray(data) ? data : [];

	const resolvedColumns = useMemo(() => {
		if (Array.isArray(columns) && columns.length > 0) {
			return columns;
		}

		const firstRow = rows.find((row) => row && typeof row === 'object');
		const keys = firstRow ? Object.keys(firstRow) : [];

		if (!keys.length) {
			return [{ key: rowNameField, label: rowNameLabel, isRowName: true }];
		}

		return keys.map((key) => ({
			key,
			label: key === rowNameField ? rowNameLabel : toLabel(key),
			isRowName: key === rowNameField,
			align: 'left',
		}));
	}, [columns, rows, rowNameField, rowNameLabel]);

	const resolvedHeight = typeof height === 'number' ? `${height}px` : (height || '400px');
	const thStyle = {
		padding: `${spacing.md} ${spacing.md}`,
		textAlign: 'left',
		fontSize: fontStyles.bodySmall?.fontSize,
		fontWeight: 700,
		letterSpacing: '0.06em',
		textTransform: 'uppercase',
		color: sidebarColors.textSecondary,
		whiteSpace: 'nowrap',
		borderBottom: `1px solid ${sidebarColors.border}`,
		backgroundColor: `${sidebarColors.textPrimary}0A`,
	};
	const stickyHeaderCellStyle = {
		position: stickyHeader ? 'sticky' : 'static',
		top: 0,
		zIndex: 2,
		backgroundColor: `${sidebarColors.background}F2`,
		boxShadow: `inset 0 -1px 0 ${sidebarColors.border}`,
	};

	if (isLoading) {
		return (
			<div
				style={{
					minHeight: resolvedHeight,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: sidebarColors.textSecondary,
					...fontStyles.body,
				}}
			>
				Loading...
			</div>
		);
	}

	if (!rows.length) {
		return (
			<div
				style={{
					minHeight: resolvedHeight,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: sidebarColors.textSecondary,
					...fontStyles.body,
				}}
			>
				{noDataComponent}
			</div>
		);
	}

	return (
		<div
			style={{
				width: '100%',
				height: resolvedHeight,
				overflow: 'auto',
				border: `1px solid ${sidebarColors.border}`,
				borderRadius: borderRadius.lg,
				backgroundColor: sidebarColors.backgroundSoft,
				boxShadow: `0 4px 24px ${sidebarColors.background}66`,
			}}
		>
			<table
				style={{
					width: '100%',
					borderCollapse: 'collapse',
					tableLayout: 'auto',
					borderSpacing: 0,
				}}
			>
				<thead>
					<tr>
						{resolvedColumns.map((column, colIndex) => (
							<th
								key={`header-${column.key}`}
								style={{
									...thStyle,
									...stickyHeaderCellStyle,
									textAlign: column.align || 'left',
									borderRight: colIndex < resolvedColumns.length - 1
										? `1px solid ${sidebarColors.border}`
										: 'none',
								}}
							>
								<span style={{ display: 'inline-block' }}>
									{column.label || toLabel(column.key)}
								</span>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, rowIndex) => {
						const baseRowKey = rowKeyField
							? row?.[rowKeyField]
							: (row?.id ?? row?.ticketNumber ?? row?.ruleId ?? row?.[rowNameField] ?? 'row');
						const resolvedRowKey = `${String(baseRowKey)}-${rowIndex}`;
						const clickable = typeof onRowClick === 'function';

						return (
							<tr
								key={resolvedRowKey}
								onClick={clickable ? () => onRowClick(row, rowIndex) : undefined}
								onMouseEnter={(event) => {
									if (clickable) {
										event.currentTarget.style.backgroundColor = `${sidebarColors.textPrimary}09`;
									}
								}}
								onMouseLeave={(event) => {
									event.currentTarget.style.backgroundColor = rowIndex % 2 === 0
										? sidebarColors.backgroundSoft
										: sidebarColors.background;
								}}
								style={{
									cursor: clickable ? 'pointer' : 'default',
									backgroundColor: rowIndex % 2 === 0
										? sidebarColors.backgroundSoft
										: sidebarColors.background,
									transition: 'background-color 180ms ease',
								}}
							>
								{resolvedColumns.map((column) => {
									const rawValue = row?.[column.key];
									const renderedValue = typeof column.render === 'function'
										? column.render(rawValue, row, rowIndex)
										: valueFormatter(rawValue, column.key, row, rowIndex);

									return (
										<td
											key={`cell-${resolvedRowKey}-${column.key}`}
											style={{
												textAlign: column.align || 'left',
												padding: `14px ${spacing.md}`,
												borderBottom: `1px solid ${sidebarColors.border}40`,
												color: column.isRowName
													? sidebarColors.textPrimary
													: sidebarColors.textSecondary,
												verticalAlign: 'middle',
												...fontStyles.body,
												fontWeight: column.isRowName ? 600 : 400,
											}}
										>
											{renderedValue}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
