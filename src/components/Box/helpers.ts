import {styleVariants} from "@vanilla-extract/css";
import {theme} from "../../styles/theme.css.ts";
import {
    dimensionVariants,
    dynamicFlexDirectionResponsiveStyle,
    dynamicHeightStyle,
    dynamicMaxHeightStyle,
    dynamicMaxWidthStyle,
    dynamicWidthStyle,
    flexDirectionDesktopVar,
    flexDirectionMobileVar,
    heightVar,
    maxHeightVar,
    maxWidthVar,
    widthVar
} from "./styles.css.ts";
import {assignInlineVars} from "@vanilla-extract/dynamic";
import type {DimensionVariants} from "./types.ts";
import type {Direction} from "../../utils/types.ts";

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

export const getDimensionClass = (dimension: DimensionVariants, type: 'width' | 'height' | 'maxWidth' | 'maxHeight') => {
    if (!dimension) return '';

    if (typeof dimension === 'string' && dimension in dimensionVariants) {
        return dimensionVariants[dimension as keyof typeof dimensionVariants];
    }

    switch (type) {
        case 'width':
            return dynamicWidthStyle;
        case 'height':
            return dynamicHeightStyle;
        case 'maxWidth':
            return dynamicMaxWidthStyle;
        case 'maxHeight':
            return dynamicMaxHeightStyle;
        default:
            return '';
    }
};

export const getDimensionVars = (dimension: DimensionVariants, type: 'width' | 'height' | 'maxWidth' | 'maxHeight') => {
    if (!dimension) return {};

    const varMap = {
        width: widthVar,
        height: heightVar,
        maxWidth: maxWidthVar,
        maxHeight: maxHeightVar,
    };

    if (typeof dimension === 'number') {
        return assignInlineVars({
            [varMap[type]]: `${dimension}px`
        });
    }

    if (typeof dimension === 'string' && !(dimension in dimensionVariants)) {
        return assignInlineVars({
            [varMap[type]]: dimension,
        });
    }

    return {};
};

export const getDirectionClass = (direction: Direction | [Direction, Direction]) => {
    if (!Array.isArray(direction)) {
        return ''; // Use recipe variant for single direction
    }

    // Use dynamic class for responsive directions
    return dynamicFlexDirectionResponsiveStyle;
};


export const getDirectionVars = (direction: Direction | [Direction, Direction]) => {
    if (!Array.isArray(direction)) {
        return {};
    }

    const [mobile, desktop] = direction;

    return assignInlineVars({
        [flexDirectionMobileVar]: mobile,
        [flexDirectionDesktopVar]: desktop,
    });
};


