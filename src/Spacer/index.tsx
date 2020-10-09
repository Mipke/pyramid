import React from 'react';
import styles from './Spacer.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';

interface SpacerProps {
    /** Optional className additionally placed onto the spacer div */
    className?: string;
    /** Optional CSS properties object placed onto the spacer div */
    style?: React.CSSProperties;
    /** Specify size of spacer (VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE) */
    size?: Size;
}

export default ({ size = Size.LARGE, className = '', style }: SpacerProps) => (
    <div
        className={classNames(styles.sp, className, {
            [styles.xsmall]: size === Size.VERY_SMALL,
            [styles.small]: size === Size.SMALL,
            [styles.large]: size === Size.LARGE,
            [styles.veryLarge]: size === Size.VERY_LARGE
        })}
        style={style}
    />
);
