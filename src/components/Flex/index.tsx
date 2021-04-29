import React from 'react';
import styles from './Flex.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';
import { Unit } from '../../common/Unit';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export enum JustifyContent {
    SPACE_BETWEEN = 'SPACE_BETWEEN',
    END = 'END',
    START = 'START',
    CENTER = 'CENTER'
}

export enum FlexDirection {
    ROW = 'ROW',
    COLUMN = 'COLUMN'
}

export enum FlexAlignContent {
    START = 'START',
    CENTER = 'CENTER',
    END = 'END'
}

interface FlexProps {
    /** Optional className additionally placed onto wrapping div */
    className?: string;
    /** Optional CSS properties object placed onto wrapping div */
    style?: React.CSSProperties;
    /** Components wrapped in flexbox */
    children: React.ReactFragment;
    /** Direction of stacking of children (ROW, COLUMN) */
    direction?: FlexDirection;
    /** Corresponding flexbox justifyContent setting (SPACE_BETWEEN, START, END, CENTER) */
    justifyContent?: JustifyContent;
    /** Corresponding flexbox alignContent setting (START, CENTER, END) */
    alignContent?: FlexAlignContent;
    /** Specify the size of spacers (VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE, number) */
    spacerSize?: Size | number | 'NONE';
    /** If spacerSize is a number, optionally specify the corresponding measuring unit (PX, EM, EX, CH, REM, VW, VH, VMIN, VMAX, PERC, CM, MM, IN, PT, PC) */
    spacerUnit?: Unit;
}

interface DynamicStylesProps {
    spacerSize: Size | number | 'NONE';
    spacerUnit: Unit;
}

const dynamicStyles = ({ spacerSize, spacerUnit }: DynamicStylesProps) =>
    css`
        & > * {
            ${typeof spacerSize === 'number' ? `margin-left: ${spacerSize}${spacerUnit}` : ''}
        }
    `;
const StyledWrapper = styled.div`
    ${dynamicStyles}
`;

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
    (
        {
            className = '',
            style,
            children,
            direction = FlexDirection.ROW,
            justifyContent,
            alignContent,
            spacerSize = Size.MEDIUM,
            spacerUnit = Unit.PX
        }: FlexProps,
        ref
    ) => {
        return (
            <StyledWrapper
                className={classNames(styles.fl, className, {
                    [styles.spaceBetween]: justifyContent === JustifyContent.SPACE_BETWEEN,
                    [styles.justifyEnd]: justifyContent === JustifyContent.END,
                    [styles.justifyStart]: justifyContent === JustifyContent.START,
                    [styles.justifyCenter]: justifyContent === JustifyContent.CENTER,
                    [styles.alignItemsStart]: alignContent === FlexAlignContent.START,
                    [styles.alignItemsEnd]: alignContent === FlexAlignContent.END,
                    [styles.column]: direction === FlexDirection.COLUMN,
                    [styles.spacers]: spacerSize !== 'NONE',
                    [styles.verySmallerSpacers]: spacerSize === Size.VERY_SMALL,
                    [styles.smallerSpacers]: spacerSize === Size.SMALL,
                    [styles.mediumSpacers]: spacerSize === Size.MEDIUM,
                    [styles.largerSpacers]: spacerSize === Size.LARGE,
                    [styles.veryLargerSpacers]: spacerSize === Size.VERY_LARGE
                })}
                style={style}
                ref={ref}
                spacerSize={spacerSize}
                spacerUnit={spacerUnit}
            >
                {children}
            </StyledWrapper>
        );
    }
);
