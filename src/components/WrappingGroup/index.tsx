import React from 'react';
import styles from './WrappingGroup.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';
import { Unit } from '../../common/Unit';
import styled from '@emotion/styled';

interface WrappingGroupProps {
    /** Optional className additionally placed onto the spacer div */
    className?: string;
    /** Optional CSS properties object placed onto the spacer div */
    style?: React.CSSProperties;
    /** Components wrapped in div */
    children: React.ReactFragment;
    /** Specify the size of spacers (NONE, VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE, number) */
    spacerSize?: Size | number | 'NONE';
    /** If spacerSize is a number, optionally specify the corresponding measuring unit (PX, EM, EX, CH, REM, VW, VH, VMIN, VMAX, PERC, CM, MM, IN, PT, PC) */
    spacerUnit?: Unit;
}

export const WrappingGroup = React.forwardRef<HTMLDivElement, WrappingGroupProps>(
    ({ className = '', style, spacerSize = Size.MEDIUM, children, spacerUnit = Unit.PX }, ref) => {
        const ParentDiv = styled('div')`
            & > * {
                ${typeof spacerSize === 'number' ? `margin-right: ${spacerSize}${spacerUnit};` : ''}
                ${typeof spacerSize === 'number' ? `margin-top: ${spacerSize}${spacerUnit};` : ''}
            }
        `;
        return (
            <ParentDiv
                className={classNames(styles.wrappingGroup, className, {
                    [styles.verySmallerSpacers]: spacerSize === Size.VERY_SMALL,
                    [styles.smallerSpacers]: spacerSize === Size.SMALL,
                    [styles.mediumSpacers]: spacerSize === Size.MEDIUM,
                    [styles.largerSpacers]: spacerSize === Size.LARGE,
                    [styles.veryLargerSpacers]: spacerSize === Size.VERY_LARGE
                })}
                style={style}
                ref={ref}
            >
                {children}
            </ParentDiv>
        );
    }
);
