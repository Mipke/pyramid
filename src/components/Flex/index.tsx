import React from 'react';
import styles from './Flex.module.scss';
import classNames from 'classnames';
import { Size } from '../../common/Size';

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
    /** Whether or not space is put between children elements */
    spacers?: boolean;
    /** Specify the size of spacers (VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE) */
    spacerSize?: Size;
}

export default React.forwardRef<HTMLDivElement, FlexProps>(
    (
        { className = '', style, children, direction = FlexDirection.ROW, justifyContent, alignContent, spacers = true, spacerSize = Size.MEDIUM }: FlexProps,
        ref
    ) => (
        <div
            className={classNames(styles.fl, className, {
                [styles.spaceBetween]: justifyContent === JustifyContent.SPACE_BETWEEN,
                [styles.justifyEnd]: justifyContent === JustifyContent.END,
                [styles.justifyStart]: justifyContent === JustifyContent.START,
                [styles.justifyCenter]: justifyContent === JustifyContent.CENTER,
                [styles.alignItemsStart]: alignContent === FlexAlignContent.START,
                [styles.alignItemsEnd]: alignContent === FlexAlignContent.END,
                [styles.column]: direction === FlexDirection.COLUMN,
                [styles.spacers]: spacers,
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
