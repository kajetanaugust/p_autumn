import {styleVariants} from "@vanilla-extract/css";
import {theme} from "../../styles/theme.css.ts";
import {
    dimensionVariants,
    dynamicFlexDirectionStyle,
    dynamicHeightStyle,
    dynamicMaxHeightStyle,
    dynamicMaxWidthStyle,
    dynamicWidthStyle,
    flexDirectionDesktopVar,
    flexDirectionMobileVar,
    gapVars,
    heightVar,
    marginBottomVars,
    marginEndVars,
    marginStartVars,
    marginTopVars,
    marginVars,
    marginXVars,
    marginYVars,
    maxHeightVar,
    maxWidthVar,
    paddingBottomVars,
    paddingEndVars,
    paddingStartVars,
    paddingTopVars,
    paddingVars,
    paddingXVars,
    paddingYVars,
    responsiveMarginBottomStyle,
    responsiveMarginEndStyle,
    responsiveMarginStartStyle,
    responsiveMarginStyle,
    responsiveMarginTopStyle,
    responsiveMarginXStyle,
    responsiveMarginYStyle,
    responsivePaddingBottomStyle,
    responsivePaddingEndStyle,
    responsivePaddingStartStyle,
    responsivePaddingStyle,
    responsivePaddingTopStyle,
    responsivePaddingXStyle,
    responsivePaddingYStyle,
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
    return dynamicFlexDirectionStyle;
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

export function getGapVars(gap?: number | [number, number]): Record<string, string> {
    if (!gap) return {};

    if (typeof gap === 'number') {
        return assignInlineVars(gapVars, {
            mobile: `${gap}px`,
            desktop: `${gap}px`,
        });
    }

    if (Array.isArray(gap) && gap.length === 2) {
        const [mobileGap, desktopGap] = gap;

        return assignInlineVars(gapVars, {
            mobile: `${mobileGap}px`,
            desktop: `${desktopGap}px`,
        });
    }

    return {};
}

// Fixed the function signature and parameter order
function createSpacingVars(value?: number | [number, number], vars?: {
    mobile: any;
    desktop: any
}): Record<string, string> {
    if (!value || !vars) return {};

    if (typeof value === 'number') {
        return assignInlineVars(vars, {
            mobile: `${value}px`,
            desktop: `${value}px`,
        });
    }

    if (Array.isArray(value) && value.length === 2) {
        const [mobile, desktop] = value;
        return assignInlineVars(vars, {
            mobile: `${mobile}px`,
            desktop: `${desktop}px`,
        });
    }

    return {};
}

// Spacing helper functions - Fixed parameter order
export const getPaddingVars = (value?: number | [number, number]) => createSpacingVars(value, paddingVars);
export const getPaddingXVars = (value?: number | [number, number]) => createSpacingVars(value, paddingXVars);
export const getPaddingYVars = (value?: number | [number, number]) => createSpacingVars(value, paddingYVars);
export const getPaddingTopVars = (value?: number | [number, number]) => createSpacingVars(value, paddingTopVars);
export const getPaddingBottomVars = (value?: number | [number, number]) => createSpacingVars(value, paddingBottomVars);
export const getPaddingStartVars = (value?: number | [number, number]) => createSpacingVars(value, paddingStartVars);
export const getPaddingEndVars = (value?: number | [number, number]) => createSpacingVars(value, paddingEndVars);

export const getMarginVars = (value?: number | [number, number]) => createSpacingVars(value, marginVars);
export const getMarginXVars = (value?: number | [number, number]) => createSpacingVars(value, marginXVars);
export const getMarginYVars = (value?: number | [number, number]) => createSpacingVars(value, marginYVars);
export const getMarginTopVars = (value?: number | [number, number]) => createSpacingVars(value, marginTopVars);
export const getMarginBottomVars = (value?: number | [number, number]) => createSpacingVars(value, marginBottomVars);
export const getMarginStartVars = (value?: number | [number, number]) => createSpacingVars(value, marginStartVars);
export const getMarginEndVars = (value?: number | [number, number]) => createSpacingVars(value, marginEndVars);

// Class helper functions
export const getPaddingClass = (value?: number | [number, number]) => value ? responsivePaddingStyle : '';
export const getPaddingXClass = (value?: number | [number, number]) => value ? responsivePaddingXStyle : '';
export const getPaddingYClass = (value?: number | [number, number]) => value ? responsivePaddingYStyle : '';
export const getPaddingTopClass = (value?: number | [number, number]) => value ? responsivePaddingTopStyle : '';
export const getPaddingBottomClass = (value?: number | [number, number]) => value ? responsivePaddingBottomStyle : '';
export const getPaddingStartClass = (value?: number | [number, number]) => value ? responsivePaddingStartStyle : '';
export const getPaddingEndClass = (value?: number | [number, number]) => value ? responsivePaddingEndStyle : '';

export const getMarginClass = (value?: number | [number, number]) => value ? responsiveMarginStyle : '';
export const getMarginXClass = (value?: number | [number, number]) => value ? responsiveMarginXStyle : '';
export const getMarginYClass = (value?: number | [number, number]) => value ? responsiveMarginYStyle : '';
export const getMarginTopClass = (value?: number | [number, number]) => value ? responsiveMarginTopStyle : '';
export const getMarginBottomClass = (value?: number | [number, number]) => value ? responsiveMarginBottomStyle : '';
export const getMarginStartClass = (value?: number | [number, number]) => value ? responsiveMarginStartStyle : '';
export const getMarginEndClass = (value?: number | [number, number]) => value ? responsiveMarginEndStyle : '';
