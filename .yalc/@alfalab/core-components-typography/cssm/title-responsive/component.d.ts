import React from 'react';
import { type TitleProps } from '../title';
export type TitleResponsiveProps = TitleProps & {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: 'desktop' | 'mobile';
};
export declare const TitleResponsive: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> & {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
    view?: "xlarge" | "large" | "medium" | "small" | "xsmall";
    color?: import("..").Color;
    weight?: "regular" | "medium" | "bold" | "semibold";
    font?: "styrene" | "system" | "alfasans" | {
        font: "alfasans";
        systemCompat: boolean;
    };
    defaultMargins?: boolean;
    className?: string;
    dataTestId?: string;
    children?: React.ReactNode;
    rowLimit?: 1 | 2 | 3;
    showSkeleton?: boolean;
    skeletonProps?: import("@alfalab/core-components-skeleton").TextSkeletonProps;
    defaultMatchMediaValue?: boolean | (() => boolean);
} & {
    /**
     * Контрольная точка, с нее начинается desktop версия
     * @default 1024
     */
    breakpoint?: number;
    /**
     * Версия, которая будет использоваться при серверном рендеринге
     */
    client?: "desktop" | "mobile";
} & React.RefAttributes<HTMLDivElement | HTMLHeadingElement>>;
