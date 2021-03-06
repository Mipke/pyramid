import React from 'react';
import styles from './Spacer.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';
import styled from '@emotion/styled';
import { Unit } from '../../common/Unit';
import { css } from '@emotion/react';

interface SpacerProps {
    /** Optional className additionally placed onto the spacer div */
    className?: string;
    /** Optional CSS properties object placed onto the spacer div */
    style?: React.CSSProperties;
    /** Specify size of spacer (VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE, number) */
    size?: Size | number;
    /** If size is a number, optionally specify the corresponding measuring unit (PX, EM, EX, CH, REM, VW, VH, VMIN, VMAX, PERC, CM, MM, IN, PT, PC) */
    sizeUnit?: Unit;
}

interface DynamicStylesProps {
    size: Size | number | 'NONE';
    sizeUnit: Unit;
}

const dynamicStyles = ({ size, sizeUnit }: DynamicStylesProps) =>
    css`
        ${typeof size === 'number' ? `height: ${size}${sizeUnit}` : ''}
    `;
const StyledWrapper = styled.div`
    ${dynamicStyles}
`;

export const Spacer = ({ size = Size.LARGE, sizeUnit = Unit.PX, className = '', style }: SpacerProps) => (
    <StyledWrapper
        className={classNames(styles.sp, className, {
            [styles.xsmall]: size === Size.VERY_SMALL,
            [styles.small]: size === Size.SMALL,
            [styles.medium]: size === Size.MEDIUM,
            [styles.large]: size === Size.LARGE,
            [styles.veryLarge]: size === Size.VERY_LARGE
        })}
        style={style}
        size={size}
        sizeUnit={sizeUnit}
    />
);
