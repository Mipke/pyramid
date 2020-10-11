import React from 'react';
import styles from './Stack.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';

interface StackProps {
    /** Optional className additionally placed onto wrapping div */
    className?: string;
    /** Optional CSS properties object placed onto wrapping div */
    style?: React.CSSProperties;
    /** Components wrapped in div */
    children: React.ReactFragment;
    /** Optionally center children in wrapping div */
    centerItems?: boolean;
    /** Whether or not space is put between children elements */
    spacers?: boolean;
    /** Specify the size of spacers (VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE) */
    spacerSize?: Size;
}

export default React.forwardRef<HTMLDivElement, StackProps>(
    ({ className = '', style, children, centerItems = false, spacers = true, spacerSize = Size.MEDIUM }, ref) => (
        <div
            className={classNames(styles.stack, className, {
                [styles.centerItems]: centerItems,
                [styles.noSpacers]: !spacers,
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
    )
);
