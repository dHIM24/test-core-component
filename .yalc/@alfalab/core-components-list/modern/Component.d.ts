import React, { type ReactNode } from 'react';
import { ListContext, type TListContext } from './context';
import { type ColorMarkerType } from './types';
export { ListContext, type TListContext };
export type ListProps = {
    /**
     * HTML тег
     * @default 'ul'
     */
    tag?: 'ul' | 'ol';
    /**
     * Маркер
     * @default '–' for ul and 'decimal' for ol
     */
    marker?: 'lower-alpha' | 'decimal' | string | ReactNode;
    /**
     * Css-класс для стилизации
     */
    className?: string;
    /**
     * Цвет маркера
     */
    colorMarker?: ColorMarkerType;
    /**
     * Список обратного счета
     */
    reversed?: boolean;
    /**
     * Начало отсчета элементов списка
     */
    start?: number;
    /**
     * Id компонента для тестов
     */
    dataTestId?: string;
    /**
     * Дочерние элементы
     */
    children?: ReactNode;
} & Omit<React.OlHTMLAttributes<HTMLOListElement>, 'type'>;
export declare const List: React.FC<ListProps> & {
    Item: React.FC<import("./components/item").ItemProps>;
};
