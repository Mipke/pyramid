import React from 'react';
import styles from './HorizontalDivider.module.scss';
import Spacer from '../Spacer';
import classNames from 'classnames';
import { Size } from '../common/Size';

interface HorizontalDividerProps {
    /** Specify the size of spacers (VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE) */
    spacerSize?: Size;
    /** Optional className additionally placed onto divider div */
    className?: string;
    /** Optional CSS properties object placed onto divider div */
    style?: React.CSSProperties;
}

export default ({ spacerSize, className = '', style }: HorizontalDividerProps) => (
    <div>
        <Spacer size={spacerSize} />
        <div className={classNames(styles.divider, className)} style={style} />
        <Spacer size={spacerSize} />
    </div>
);
