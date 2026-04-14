import React, { useEffect, useMemo, useState } from 'react';
import sidebarColors, { fontStyles } from '../../colors';
import { borderRadius, spacing } from '../../spacing';
import EagleEyeLoader from '../../../src/components/utility/EagleEyeLoader';
import useTableData from './useTableData';

const toLabel = (value) => {
    const text = String(value || '').trim();
    if (!text) return '';
    return text
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/^./, (char) => char.toUpperCase());
};

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
    children = null,
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
    noDataComponent = '',
    height = 400,
    stickyHeader = true,
    onRowClick,
    valueFormatter = defaultFormatValue,
    rowKeyField = null,
    showToolbar = true,
    defaultItemsPerPage = 10,
    itemsPerPageOptions = [1, 5, 10, 25, 50],
    searchableFields = null,
    enableFilters = true,
}) {
    const rows = Array.isArray(data) ? data : [];
    const [searchTerm, setSearchTerm] = useState('');
    const [filterValues, setFilterValues] = useState({});
    const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const resolvedColumns = useMemo(() => {
        if (Array.isArray(columns) && columns.length > 0) {
            return columns;
        }

        const firstRow = rows.find((row) => row && typeof row === 'object');
        const keys = firstRow ? Object.keys(firstRow) : [];
        const valueKeys = keys.filter((key) => key !== rowNameField);

        return [
            { key: rowNameField, label: rowNameLabel, isRowName: true },
            ...valueKeys.map((key) => ({
                key,
                label: toLabel(key),
            })),
        ];
    }, [columns, rows, rowNameField, rowNameLabel]);

    const {
        activeFilters,
        paginatedRows,
        totalRows,
        totalPages,
        safePage,
        filterOptions,
    } = useTableData({
        rows,
        columns: resolvedColumns,
        searchTerm,
        filterValues,
        sortConfig,
        currentPage,
        itemsPerPage,
        searchableFields,
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filterValues, itemsPerPage]);

    useEffect(() => {
        if (currentPage !== safePage) {
            setCurrentPage(safePage);
        }
    }, [currentPage, safePage]);

    const setFilterValue = (key, value) => {
        setFilterValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const toggleSort = (key) => {
        setSortConfig((prev) => {
            if (prev.key === key) {
                return {
                    key,
                    direction: prev.direction === 'asc' ? 'desc' : 'asc',
                };
            }
            return { key, direction: 'asc' };
        });
    };

    if (isLoading) {
        return loadingComponent;
    }

    if (!rows.length) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: typeof height === 'number' ? `${height}px` : (height || '400px'),
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

    const resolvedHeight = typeof height === 'number' ? `${height}px` : (height || '400px');

    return (
        <div
            style={{
                width: '100%',
                height: resolvedHeight,
                border: `1px solid ${sidebarColors.border}`,
                borderRadius: borderRadius.lg,
                overflow: 'hidden',
                backgroundColor: sidebarColors.backgroundSoft,
            }}
        >
            <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
                {showToolbar ? (
                    <div
                        style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: spacing.sm,
                            flexWrap: 'wrap',
                            padding: spacing.sm,
                            borderBottom: `1px solid ${sidebarColors.border}`,
                            backgroundColor: sidebarColors.background,
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                height: 32,
                                minWidth: 180,
                                borderRadius: borderRadius.md,
                                border: `1px solid ${sidebarColors.border}`,
                                backgroundColor: sidebarColors.backgroundSoft,
                                color: sidebarColors.textPrimary,
                                padding: `0 ${spacing.sm}`,
                                ...fontStyles.bodySmall,
                            }}
                        />

                        {enableFilters ? (
                            <>
                                {activeFilters.map((filter) => {
                                    if (filter.type === 'date') {
                                        return (
                                            <input
                                                key={filter.key}
                                                type="date"
                                                value={filterValues[filter.key] || ''}
                                                onChange={(e) => setFilterValue(filter.key, e.target.value)}
                                                style={{
                                                    height: 32,
                                                    borderRadius: borderRadius.md,
                                                    border: `1px solid ${sidebarColors.border}`,
                                                    backgroundColor: sidebarColors.backgroundSoft,
                                                    color: sidebarColors.textPrimary,
                                                    padding: `0 ${spacing.sm}`,
                                                    ...fontStyles.bodySmall,
                                                }}
                                            />
                                        );
                                    }

                                    const options = filterOptions[filter.key] || [];
                                    if (!options.length) return null;

                                    return (
                                        <select
                                            key={filter.key}
                                            value={filterValues[filter.key] || ''}
                                            onChange={(e) => setFilterValue(filter.key, e.target.value)}
                                            style={{
                                                height: 32,
                                                borderRadius: borderRadius.md,
                                                border: `1px solid ${sidebarColors.border}`,
                                                backgroundColor: sidebarColors.backgroundSoft,
                                                color: sidebarColors.textPrimary,
                                                padding: `0 ${spacing.sm}`,
                                                ...fontStyles.bodySmall,
                                            }}
                                        >
                                            <option value="">All {filter.label}</option>
                                            {options.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    );
                                })}
                            </>
                        ) : null}

                        <select
                            value={String(itemsPerPage)}
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
                            style={{
                                marginLeft: 'auto',
                                height: 32,
                                borderRadius: borderRadius.md,
                                border: `1px solid ${sidebarColors.border}`,
                                backgroundColor: sidebarColors.backgroundSoft,
                                color: sidebarColors.textPrimary,
                                padding: `0 ${spacing.sm}`,
                                ...fontStyles.bodySmall,
                            }}
                        >
                            {itemsPerPageOptions.map((option) => (
                                <option key={option} value={option}>{option} / page</option>
                            ))}
                        </select>
                    </div>
                ) : null}

                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'separate',
                        borderSpacing: 0,
                        tableLayout: 'auto',
                    }}
                >
                    <thead>
                        <tr>
                            {resolvedColumns.map((column, index) => (
                                <th
                                    key={`header-${column.key || index}`}
                                    style={{
                                        position: stickyHeader ? 'sticky' : 'static',
                                        top: stickyHeader ? (showToolbar ? 49 : 0) : 'auto',
                                        zIndex: stickyHeader ? 1 : 'auto',
                                        textAlign: column.align || (column.isRowName ? 'left' : 'right'),
                                        padding: `${spacing.sm} ${spacing.md}`,
                                        color: sidebarColors.textSecondary,
                                        backgroundColor: sidebarColors.background,
                                        borderBottom: `1px solid ${sidebarColors.border}`,
                                        whiteSpace: 'nowrap',
                                        ...fontStyles.bodySmall,
                                        fontWeight: 700,
                                        letterSpacing: '0.02em',
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleSort(column.key)}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: spacing.xs,
                                            border: 'none',
                                            padding: 0,
                                            margin: 0,
                                            background: 'transparent',
                                            color: 'inherit',
                                            cursor: 'pointer',
                                            ...fontStyles.bodySmall,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {column.icon ? <span>{column.icon}</span> : null}
                                        <span>{column.label || toLabel(column.key)}</span>
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedRows.map((entry, rowIndex) => {
                            const row = entry.row;
                            const resolvedRowKey = rowKeyField
                                ? row?.[rowKeyField]
                                : (row?.id ?? row?.[rowNameField] ?? `${safePage}-${rowIndex}`);
                            const clickable = typeof onRowClick === 'function';

                            return (
                                <tr
                                    key={resolvedRowKey}
                                    onClick={clickable ? () => onRowClick(row, rowIndex) : undefined}
                                    style={{
                                        backgroundColor: rowIndex % 2 === 0
                                            ? sidebarColors.backgroundSoft
                                            : sidebarColors.background,
                                        cursor: clickable ? 'pointer' : 'default',
                                    }}
                                >
                                    {resolvedColumns.map((column, colIndex) => {
                                        const rawValue = entry.values?.[column.key] ?? row?.[column.key];
                                        const renderedValue = typeof column.render === 'function'
                                            ? column.render(rawValue, row, rowIndex)
                                            : valueFormatter(rawValue, column.key, row, rowIndex);

                                        return (
                                            <td
                                                key={`cell-${resolvedRowKey}-${column.key || colIndex}`}
                                                style={{
                                                    textAlign: column.align || (column.isRowName ? 'left' : 'right'),
                                                    padding: `${spacing.sm} ${spacing.md}`,
                                                    color: column.isRowName
                                                        ? sidebarColors.textPrimary
                                                        : sidebarColors.textSecondary,
                                                    borderBottom: `1px solid ${sidebarColors.border}`,
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

                        {paginatedRows.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={resolvedColumns.length}
                                    style={{
                                        textAlign: 'center',
                                        padding: `${spacing['2xl']} ${spacing.md}`,
                                        color: sidebarColors.textSecondary,
                                        ...fontStyles.body,
                                    }}
                                >
                                    {noDataComponent}
                                </td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'sticky',
                        bottom: 0,
                        zIndex: 2,
                        padding: `${spacing.sm} ${spacing.md}`,
                        borderTop: `1px solid ${sidebarColors.border}`,
                        backgroundColor: sidebarColors.background,
                    }}
                >
                    <span style={{ color: sidebarColors.textSecondary, ...fontStyles.bodySmall }}>
                        {totalRows === 0
                            ? '0 of 0'
                            : `${(safePage - 1) * itemsPerPage + 1}-${Math.min(safePage * itemsPerPage, totalRows)} of ${totalRows}`}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
                        <button
                            type="button"
                            onClick={() => setCurrentPage(1)}
                            disabled={safePage === 1}
                            style={{
                                border: `1px solid ${sidebarColors.border}`,
                                backgroundColor: sidebarColors.backgroundSoft,
                                color: sidebarColors.textPrimary,
                                borderRadius: borderRadius.md,
                                padding: `0 ${spacing.sm}`,
                                height: 28,
                                opacity: safePage === 1 ? 0.4 : 1,
                            }}
                        >
                            «
                        </button>
                        <button
                            type="button"
                            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                            disabled={safePage === 1}
                            style={{
                                border: `1px solid ${sidebarColors.border}`,
                                backgroundColor: sidebarColors.backgroundSoft,
                                color: sidebarColors.textPrimary,
                                borderRadius: borderRadius.md,
                                padding: `0 ${spacing.sm}`,
                                height: 28,
                                opacity: safePage === 1 ? 0.4 : 1,
                            }}
                        >
                            ‹
                        </button>
                        <span style={{ color: sidebarColors.textSecondary, ...fontStyles.bodySmall }}>
                            Page {safePage} / {totalPages}
                        </span>
                        <button
                            type="button"
                            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                            disabled={safePage === totalPages}
                            style={{
                                border: `1px solid ${sidebarColors.border}`,
                                backgroundColor: sidebarColors.backgroundSoft,
                                color: sidebarColors.textPrimary,
                                borderRadius: borderRadius.md,
                                padding: `0 ${spacing.sm}`,
                                height: 28,
                                opacity: safePage === totalPages ? 0.4 : 1,
                            }}
                        >
                            ›
                        </button>
                        <button
                            type="button"
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={safePage === totalPages}
                            style={{
                                border: `1px solid ${sidebarColors.border}`,
                                backgroundColor: sidebarColors.backgroundSoft,
                                color: sidebarColors.textPrimary,
                                borderRadius: borderRadius.md,
                                padding: `0 ${spacing.sm}`,
                                height: 28,
                                opacity: safePage === totalPages ? 0.4 : 1,
                            }}
                        >
                            »
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
