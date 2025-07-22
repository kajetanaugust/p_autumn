import {styleVariants} from "@vanilla-extract/css";
import {theme} from "../../styles/theme.css.ts";
import {dimensionVariants, dynamicHeightStyle, dynamicWidthStyle, heightVar, widthVar} from "./styles.css.ts";
import {assignInlineVars} from "@vanilla-extract/dynamic";
import type {DimensionVariants} from "./types.ts";

export const createSpacingVariants = (properties: Record<string, string>) => {
    const variants: Record<string, any> = {};

    Object.entries(properties).forEach(([key, property]) => {
        variants[key] = styleVariants(theme.spacing, (value) => ({
            [property]: value,
        }));
    });

    return variants;
};

export const spacingProperties = {
    paddingVariants: 'padding',
    paddingXVariants: 'paddingInline',
    paddingYVariants: 'paddingBlock',
    paddingTopVariants: 'paddingBlockStart',
    paddingBottomVariants: 'paddingBlockEnd',
    paddingStartVariants: 'paddingInlineStart',
    paddingEndVariants: 'paddingInlineEnd',
    marginVariants: 'margin',
    marginXVariants: 'marginInline',
    marginYVariants: 'marginBlock',
    marginTopVariants: 'marginBlockStart',
    marginBottomVariants: 'marginBlockEnd',
    marginStartVariants: 'marginInlineStart',
    marginEndVariants: 'marginInlineEnd',
};


export const getDimensionClass = (dimension: DimensionVariants, type: 'width' | 'height') => {
    if (!dimension) return '';

    if (typeof dimension === 'string' && dimension in dimensionVariants) {
        return dimensionVariants[dimension as keyof typeof dimensionVariants];
    }

    if (type === 'width') {
        return dynamicWidthStyle;
    } else {
        return dynamicHeightStyle
    }

};

export const getDimensionVars = (dimension: DimensionVariants, type: 'width' | 'height') => {
    if (!dimension) return {};

    if (typeof dimension === 'number') {
        return assignInlineVars({
            [type === 'width' ? widthVar : heightVar]: `${dimension}px`
        });
    }

    if (typeof dimension === 'string' && !(dimension in dimensionVariants)) {
        return assignInlineVars({
            [type === 'width' ? widthVar : heightVar]: dimension,
        });
    }

    return {};
};
