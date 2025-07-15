import {styleVariants} from "@vanilla-extract/css";
import {theme} from "../../styles/theme.css.ts";

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
