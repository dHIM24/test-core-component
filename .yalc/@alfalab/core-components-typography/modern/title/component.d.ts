import React, { type HTMLAttributes } from 'react';
import { type TextSkeletonProps } from '@alfalab/core-components-skeleton/modern';
import { type Color } from '../colors';
type NativeProps = HTMLAttributes<HTMLHeadingElement>;
export type TitleProps = Omit<NativeProps, 'color'> & {
    /**
     * HTML тег
     */
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
    /**
     * [Вариант начертания](?path=/docs/guidelines-typography--page)
     */
    view?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
    /**
     * Цвет текста
     */
    color?: Color;
    /**
     * Толщина шрифта
     */
    weight?: 'regular' | 'medium' | 'bold' | 'semibold';
    /**
     * Шрифт текста
     *
     * @deprecated
     */
    font?: 'styrene' | 'system' | 'alfasans' | {
        font: 'alfasans';
        systemCompat: boolean;
    };
    /**
     * Добавляет отступы
     */
    defaultMargins?: boolean;
    /**
     * Css-класс для стилизации (native prop)
     */
    className?: string;
    /**
     * Id компонента для тестов
     */
    dataTestId?: string;
    /**
     * Контент (native prop)
     */
    children?: React.ReactNode;
    /**
     * Количество строк
     */
    rowLimit?: 1 | 2 | 3;
    /**
     * Показать скелетон
     */
    showSkeleton?: boolean;
    /**
     * Пропы для скелетона
     */
    skeletonProps?: TextSkeletonProps;
    /**
     * Значение по-умолчанию для хука useMatchMedia
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
};
type PrivateProps = {
    styles: {
        [key: string]: string;
    };
    platform: 'mobile' | 'desktop';
};
type TitleElementType = HTMLHeadingElement | HTMLDivElement;
export declare const TitleBase: React.ForwardRefExoticComponent<Omit<NativeProps, "color"> & {
    /**
     * HTML тег
     */
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
    /**
     * [Вариант начертания](?path=/docs/guidelines-typography--page)
     */
    view?: "xlarge" | "large" | "medium" | "small" | "xsmall";
    /**
     * Цвет текста
     */
    color?: Color;
    /**
     * Толщина шрифта
     */
    weight?: "regular" | "medium" | "bold" | "semibold";
    /**
     * Шрифт текста
     *
     * @deprecated
     */
    font?: "styrene" | "system" | "alfasans" | {
        font: "alfasans";
        systemCompat: boolean;
    };
    /**
     * Добавляет отступы
     */
    defaultMargins?: boolean;
    /**
     * Css-класс для стилизации (native prop)
     */
    className?: string;
    /**
     * Id компонента для тестов
     */
    dataTestId?: string;
    /**
     * Контент (native prop)
     */
    children?: React.ReactNode;
    /**
     * Количество строк
     */
    rowLimit?: 1 | 2 | 3;
    /**
     * Показать скелетон
     */
    showSkeleton?: boolean;
    /**
     * Пропы для скелетона
     */
    skeletonProps?: TextSkeletonProps;
    /**
     * Значение по-умолчанию для хука useMatchMedia
     */
    defaultMatchMediaValue?: boolean | (() => boolean);
} & PrivateProps & React.RefAttributes<TitleElementType>>;
export {};
