import React from 'react';
import styles from './Grid.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';
import { Unit } from '../../common/Unit';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface GridProps {
    /** Optional className additionally placed onto wrapping div */
    className?: string;
    /** Optional CSS properties object placed onto wrapping div */
    style?: React.CSSProperties;
    /** Components wrapped in div */
    children: React.ReactFragment;
    /** Specify number of equal-size columns or an array of css grid column definitions */
    columns?: number | string[];
    /** Specify number of equal-size rows or an array of css grid column definitions */
    rows?: number | string[];
    /** Specify the size of gap within items in the grid (NONE, VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE, number) */
    gaps?: Size | number | 'NONE';
    /** If gaps is a number, optionally specify the corresponding measuring unit (PX, EM, EX, CH, REM, VW, VH, VMIN, VMAX, PERC, CM, MM, IN, PT, PC) */
    gapsUnit?: Unit;
}

interface DynamicStylesProps {
    gaps: Size | number | 'NONE';
    gapsUnit: Unit;
}

const dynamicStyles = ({ gaps, gapsUnit }: DynamicStylesProps) =>
    css`
        ${typeof gaps === 'number' ? `grid-gap: ${gaps}${gapsUnit}` : ''}
    `;
const StyledWrapper = styled.div`
    ${dynamicStyles}
`;

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    ({ children, className = '', style, columns, rows, gaps = Size.MEDIUM, gapsUnit = Unit.PX }, ref) => (
        <StyledWrapper
            className={classNames(styles.grid, className, {
                [styles.verySmallGaps]: gaps === Size.VERY_SMALL,
                [styles.smallGaps]: gaps === Size.SMALL,
                [styles.mediumGaps]: gaps === Size.MEDIUM,
                [styles.largeGaps]: gaps === Size.LARGE,
                [styles.veryLargeGaps]: gaps === Size.VERY_LARGE
            })}
            style={{
                ...(style ?? {}),
                gridTemplateColumns: columns != null ? (typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns.join(' ')) : undefined,
                gridTemplateRows: rows != null ? (typeof rows === 'number' ? `repeat(${rows}, auto)` : rows.join(' ')) : undefined
            }}
            ref={ref}
            gaps={gaps}
            gapsUnit={gapsUnit}
        >
            {children}
        </StyledWrapper>
    )
);
