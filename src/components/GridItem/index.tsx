import React from 'react';

interface GridItemProps {
    /** Optional className additionally placed onto wrapping div */
    className?: string;
    /** Optional CSS properties object placed onto wrapping div */
    style?: React.CSSProperties;
    /** Starting column */
    column?: number;
    /** Starting row */
    row?: number;
    /** Number of columns this div should span */
    spanColumn?: number;
    /** Number of rows this div should span */
    spanRow?: number;
    /** Components wrapped in div */
    children: React.ReactFragment;
}

export default ({ column, spanColumn = 1, row, spanRow = 1, className = '', style = {}, children }: GridItemProps) => (
    <div
        className={className}
        style={{
            gridColumn: column != null ? `${column} / span ${spanColumn}` : undefined,
            gridRow: row != null ? `${row} / span ${spanRow}` : undefined,
            ...style
        }}
    >
        {children}
    </div>
);
