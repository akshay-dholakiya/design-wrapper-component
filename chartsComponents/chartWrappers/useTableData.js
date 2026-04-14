import { useMemo } from 'react';

const normalizeToken = (value) => String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, '');

const toFilterDate = (raw) => {
    if (!raw) return '';
    const text = String(raw);
    if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0, 10);

    if (text.includes('/')) {
        const parts = text.split(' ')[0].split('/');
        if (parts.length === 3) {
            const month = String(parts[0]).padStart(2, '0');
            const day = String(parts[1]).padStart(2, '0');
            const yearRaw = String(parts[2]);
            const year = yearRaw.length === 2 ? `20${yearRaw}` : yearRaw;
            return `${year}-${month}-${day}`;
        }
    }

    const parsed = new Date(text);
    if (Number.isNaN(parsed.getTime())) return '';
    return parsed.toISOString().slice(0, 10);
};

const resolveColumnFields = (column) => {
    if (Array.isArray(column?.field) && column.field.length > 0) {
        return column.field;
    }

    if (typeof column?.field === 'string' && column.field) {
        return [column.field];
    }

    return [column?.key].filter(Boolean);
};

const getFirstValue = (row, fields = []) => {
    for (const field of fields) {
        const value = row?.[field];
        if (value !== undefined && value !== null && value !== '') {
            return value;
        }
    }
    return undefined;
};

const inferField = (explicitField, columns, hints = []) => {
    if (explicitField) return explicitField;

    const hit = columns.find((column) => {
        const key = String(column?.key || '').toLowerCase();
        return hints.some((hint) => key.includes(hint));
    });

    return hit?.key || null;
};

const compareValues = (left, right, sortType) => {
    if (left == null && right == null) return 0;
    if (left == null) return -1;
    if (right == null) return 1;

    if (sortType === 'number' || (typeof left === 'number' && typeof right === 'number')) {
        const a = Number(left);
        const b = Number(right);
        if (Number.isFinite(a) && Number.isFinite(b)) return a - b;
    }

    if (sortType === 'date') {
        const a = new Date(left).getTime();
        const b = new Date(right).getTime();
        if (Number.isFinite(a) && Number.isFinite(b)) return a - b;
    }

    return String(left).localeCompare(String(right), undefined, {
        numeric: true,
        sensitivity: 'base',
    });
};

export default function useTableData({
    rows,
    columns,
    searchTerm,
    filterValues,
    sortConfig,
    currentPage,
    itemsPerPage,
    searchableFields,
}) {
    const activeFilters = useMemo(() => columns
        .filter((column) => column?.filterable)
        .map((column) => {
            const filterType = column?.filterType || (column?.sortType === 'date' ? 'date' : 'select');
            const fieldKey = column.key;
            return {
                key: fieldKey,
                label: column.filterLabel || column.label || fieldKey,
                type: filterType,
                options: Array.isArray(column?.filterOptions) ? column.filterOptions : null,
            };
        }), [columns]);

    const filterMeta = useMemo(() => Object.fromEntries(activeFilters.map((filter) => [filter.key, filter])), [activeFilters]);

    const processedRows = useMemo(() => rows.map((row, index) => {
        const values = {};

        columns.forEach((column) => {
            values[column.key] = getFirstValue(row, resolveColumnFields(column));
        });

        return {
            index,
            row,
            values,
            normalizedFilters: activeFilters.reduce((accumulator, filter) => {
                const rawValue = values?.[filter.key] ?? row?.[filter.key];
                accumulator[filter.key] = filter.type === 'date'
                    ? toFilterDate(rawValue)
                    : normalizeToken(rawValue);
                return accumulator;
            }, {}),
        };
    }), [rows, columns, activeFilters]);

    const effectiveSearchFields = useMemo(() => {
        if (Array.isArray(searchableFields) && searchableFields.length > 0) {
            return searchableFields;
        }
        return columns.map((column) => column.key).filter(Boolean);
    }, [searchableFields, columns]);

    const searchedRows = useMemo(() => {
        if (!searchTerm?.trim()) return processedRows;

        const needle = searchTerm.toLowerCase();
        return processedRows.filter((entry) => effectiveSearchFields.some((field) => {
            const column = columns.find((item) => item.key === field);
            if (column) {
                return String(entry.values?.[field] ?? '').toLowerCase().includes(needle);
            }
            return String(entry.row?.[field] ?? '').toLowerCase().includes(needle);
        }));
    }, [processedRows, searchTerm, effectiveSearchFields, columns]);

    const filteredRows = useMemo(() => searchedRows.filter((entry) => {
        for (const [filterKey, filterValue] of Object.entries(filterValues || {})) {
            if (!filterValue) continue;
            const filter = filterMeta[filterKey];
            if (!filter) continue;

            const normalizedEntryValue = entry.normalizedFilters?.[filterKey];
            const normalizedFilterValue = filter.type === 'date'
                ? filterValue
                : normalizeToken(filterValue);

            if (normalizedEntryValue !== normalizedFilterValue) {
                return false;
            }
        }
        return true;
    }), [searchedRows, filterValues, filterMeta]);

    const sortedRows = useMemo(() => {
        if (!sortConfig?.key) return filteredRows;

        const sortColumn = columns.find((column) => column.key === sortConfig.key);
        const sortType = sortColumn?.sortType;
        const output = [...filteredRows];

        output.sort((leftEntry, rightEntry) => {
            const left = leftEntry.values?.[sortConfig.key] ?? leftEntry.row?.[sortConfig.key];
            const right = rightEntry.values?.[sortConfig.key] ?? rightEntry.row?.[sortConfig.key];
            const compare = compareValues(left, right, sortType);
            return sortConfig.direction === 'asc' ? compare : -compare;
        });

        return output;
    }, [filteredRows, sortConfig, columns]);

    const totalRows = sortedRows.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / itemsPerPage));
    const safePage = Math.min(currentPage, totalPages);

    const paginatedRows = useMemo(() => {
        const start = (safePage - 1) * itemsPerPage;
        return sortedRows.slice(start, start + itemsPerPage);
    }, [sortedRows, safePage, itemsPerPage]);

    const filterOptions = useMemo(() => Object.fromEntries(activeFilters.map((filter) => {
        if (filter.type === 'date') {
            return [filter.key, []];
        }

        if (Array.isArray(filter.options) && filter.options.length > 0) {
            return [filter.key, filter.options];
        }

        const seen = new Set();
        processedRows.forEach((entry) => {
            const value = entry.values?.[filter.key] ?? entry.row?.[filter.key];
            const text = String(value || '').trim();
            if (text) seen.add(text);
        });
        return [filter.key, Array.from(seen)];
    })), [activeFilters, processedRows]);

    return {
        activeFilters,
        paginatedRows,
        totalRows,
        totalPages,
        safePage,
        filterOptions,
        normalizeToken,
    };
}
