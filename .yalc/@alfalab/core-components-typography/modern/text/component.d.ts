import React, { type HTMLAttributes } from 'react';
import { type TextSkeletonProps } from '@alfalab/core-components-skeleton/modern';
import { type Color } from '../colors';
import { type TextElementType } from '../types';
type NativeProps = HTMLAttributes<HTMLSpanElement>;
type TextBaseProps = {
    /**
     * [Вариант начертания](https://core-ds.github.io/core-components/master/?path=/docs/tokens-assets-типографика--docs)
     */
    view?: 'primary-large' | 'primary-medium' | 'primary-small' | 'secondary-large' | 'secondary-medium' | 'secondary-small' | 'component-primary' | 'component-secondary' | 'caps' | 'tagline';
    /**
     * Цвет текста
     */
    color?: Color;
    /**
     * Толщина шрифта
     */
    weight?: 'regular' | 'medium' | 'bold';
    /**
     * Делает цифры моноширинными
     */
    monospaceNumbers?: boolean;
    /**
     * HTML тег
     */
    tag?: 'span' | 'div';
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
     * Добавляет отступы к тэгу 'p'
     */
    defaultMargins?: never;
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
     * Шрифт текста
     *
     * @deprecated
     */
    font?: 'alfasans' | undefined | null;
};
type TextPTagProps = Omit<TextBaseProps, 'tag' | 'defaultMargins'> & {
    tag?: 'p';
    defaultMargins?: boolean;
};
export type TextProps = Omit<NativeProps, 'color'> & (TextBaseProps | TextPTagProps);
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<TextElementType>>;
export {};
