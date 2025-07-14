import {theme} from "../styles/theme.css.ts";

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Justify = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
export type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type Display = 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none';
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';
export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type Width = 'full' | 'auto' | number | string;

export interface Spacings {
    p?: keyof typeof theme.spacing;
    px?: keyof typeof theme.spacing;
    py?: keyof typeof theme.spacing;
    pt?: keyof typeof theme.spacing;
    pb?: keyof typeof theme.spacing;
    ps?: keyof typeof theme.spacing;
    pe?: keyof typeof theme.spacing;
    m?: keyof typeof theme.spacing;
    mx?: keyof typeof theme.spacing;
    my?: keyof typeof theme.spacing;
    mt?: keyof typeof theme.spacing;
    mb?: keyof typeof theme.spacing;
    ms?: keyof typeof theme.spacing;
    me?: keyof typeof theme.spacing
}

