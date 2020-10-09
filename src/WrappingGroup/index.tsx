import React from 'react';
import styles from './WrappingGroup.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';

interface WrappingGroupProps {
    /** Optional className additionally placed onto the spacer div */
    className?: string;
    /** Optional CSS properties object placed onto the spacer div */
    style?: React.CSSProperties;
    /** Specify the size of spacers (VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE) */
    spacerSize?: Size;
    /** Components wrapped in div */
    children: React.ReactFragment;
}

export default React.forwardRef<HTMLDivElement, WrappingGroupProps>(({ className = '', style, spacerSize = Size.MEDIUM, children }, ref) => (
    <div
        className={classNames(styles.wrappingGroup, className, {
            [styles.verySmallerSpacers]: spacerSize === Size.VERY_SMALL,
            [styles.smallerSpacers]: spacerSize === Size.SMALL,
            [styles.largerSpacers]: spacerSize === Size.LARGE,
            [styles.veryLargerSpacers]: spacerSize === Size.VERY_LARGE
        })}
        style={style}
        ref={ref}
    >
        {children}
    </div>
));
