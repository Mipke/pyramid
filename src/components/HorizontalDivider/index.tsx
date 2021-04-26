import React from 'react';
import styles from './HorizontalDivider.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';
import { Unit } from '../../common/Unit';
import { Spacer } from '../Spacer';

interface HorizontalDividerProps {
    /** Optional className additionally placed onto divider div */
    className?: string;
    /** Optional CSS properties object placed onto divider div */
    style?: React.CSSProperties;
    /** Specify the size of spacers (NONE, VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE, number) */
    spacerSize?: Size | number | 'NONE';
    /** If spacerSize is a number, optionally specify the corresponding measuring unit (PX, EM, EX, CH, REM, VW, VH, VMIN, VMAX, PERC, CM, MM, IN, PT, PC) */
    spacerUnit?: Unit;
}

export const HorizontalDivider = ({ spacerSize = Size.MEDIUM, className = '', style, spacerUnit }: HorizontalDividerProps) => {
    const includeSpacers = spacerSize !== 'NONE';
    // @ts-ignore
    const spacer = <Spacer size={spacerSize} sizeUnit={spacerUnit} />;
    const divider = <div className={classNames(styles.divider, className)} style={style} />;
    return includeSpacers ? (
        <div>
            {spacer}
            {divider}
            {spacer}
        </div>
    ) : (
        divider
    );
};
