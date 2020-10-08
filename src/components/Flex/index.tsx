import React from 'react';
import styles from './Flex.module.scss';
import classNames from 'classnames';

export enum JustifyContent {
    SPACE_BETWEEN = 'SPACE_BETWEEN',
    END = "END",
    START = "START",
    CENTER = "CENTER"
}

export enum FlexDirection {
    ROW= "ROW",
    COLUMN = "COLUMN"
}

export enum FlexAlignContent {
    START= "START",
    CENTER = "CENTER",
    END = "END"
}

export enum FlexSpacerSize {
    SMALL= "SMALL",
    NORMAL = "NORMAL",
    LARGE = 'LARGE',
    VERY_LARGE = 'VERY_LARGE'
}

interface FlexProps {
    /** Gets called when the user clicks on the button */
    className?: string;
    /** Children */
    children: React.ReactFragment;
    direction?: FlexDirection;
    justifyContent?: JustifyContent;
    alignContent?: FlexAlignContent;
    spacers?: boolean;
    spacerSize?: FlexSpacerSize;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
    (
        {
            className = '',
            children,
            direction = FlexDirection.ROW,
            justifyContent,
            alignContent,
            spacers = true,
            spacerSize = FlexSpacerSize.NORMAL
        }: FlexProps,
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
                [styles.smallerSpacers]: spacerSize === FlexSpacerSize.SMALL,
                [styles.largerSpacers]: spacerSize === FlexSpacerSize.LARGE,
                [styles.veryLargerSpacers]: spacerSize === FlexSpacerSize.VERY_LARGE
            })}
            ref={ref}
        >
            {children}
        </div>
    )
);
