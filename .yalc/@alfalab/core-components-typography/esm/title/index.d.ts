import React from 'react';
import { type TitleProps } from './component';
declare const Title: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> & {
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
} & React.RefAttributes<HTMLDivElement | HTMLHeadingElement>>;
export { Title };
export type { TitleProps };
