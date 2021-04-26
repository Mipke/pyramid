import React from 'react';
import styles from './Stack.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';
import { Unit } from '../../common/Unit';
import styled from '@emotion/styled';

interface StackProps {
    /** Optional className additionally placed onto wrapping div */
    className?: string;
    /** Optional CSS properties object placed onto wrapping div */
    style?: React.CSSProperties;
    /** Components wrapped in div */
    children: React.ReactFragment;
    /** Optionally center children in wrapping div */
    centerItems?: boolean;
    /** Specify the size of spacers (NONE, VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE, number) */
    spacerSize?: Size | number | 'NONE';
    /** If spacerSize is a number, optionally specify the corresponding measuring unit (PX, EM, EX, CH, REM, VW, VH, VMIN, VMAX, PERC, CM, MM, IN, PT, PC) */
    spacerUnit?: Unit;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
    ({ className = '', style, children, centerItems = false, spacerSize = Size.MEDIUM, spacerUnit = Unit.PX }, ref) => {
        const ParentDiv = styled('div')`
            & > * {
                ${typeof spacerSize === 'number' ? `margin-top: ${spacerSize}${spacerUnit}` : ''}
            }
        `;
        return (
            <ParentDiv
                className={classNames(styles.stack, className, {
                    [styles.centerItems]: centerItems,
                    [styles.spacers]: spacerSize !== 'NONE',
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
