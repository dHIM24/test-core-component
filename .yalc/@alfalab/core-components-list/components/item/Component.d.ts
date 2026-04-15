import React, { type ReactNode } from 'react';
export type ItemProps = {
    /**
     * Дополнительный текст
     */
    caption?: string;
    /**
     * Дочерние элементы.
     */
    children?: ReactNode;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для маркера
     */
    markerClassName?: string;
    /**
     * Дополнительный класс для маркера
     */
    dataTestId?: string;
};
export declare const Item: React.FC<ItemProps>;
