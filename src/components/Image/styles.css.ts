import {style, styleVariants} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";

export const imageBase = style({
    display: 'block',
    border: 'none',
})

export const objectFitVariants = styleVariants({
    cover: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
    contain: {
        objectFit: 'contain',
        width: '100%',
        height: '100%',
    },
    fill: {
        objectFit: 'fill',
        width: '100%',
        height: '100%',
    },
    'scale-down': {
        objectFit: 'scale-down',
        width: '100%',
        height: '100%',
    },
    none: {
        objectFit: 'none',
        width: '100%',
        height: '100%',
    },
})

export const objectPositionVariants = styleVariants({
    top: {objectPosition: 'top'},
    left: {objectPosition: 'left'},
    right: {objectPosition: 'right'},
    bottom: {objectPosition: 'bottom'},
    center: {objectPosition: 'center'},
})

export const aspectRatioVariants = styleVariants({
    '1/1': {aspectRatio: '1 / 1'},
    '4/3': {aspectRatio: '4 / 3'},
    '3/4': {aspectRatio: '3 / 4'},
    '16/9': {aspectRatio: '16 / 9'},
    '9/16': {aspectRatio: '9 / 16'},
    '21/9': {aspectRatio: '21 / 9'},
    '3/2': {aspectRatio: '3 / 2'},
    '2/3': {aspectRatio: '2 / 3'},
})

export const imageContainer = recipe({
    base: {
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
    },
    variants: {
        hasAspectRatio: {
            true: {
                width: '100%',
            },
            false: {
                display: 'inline-block',
            }
        }
    },
})

export const responsiveVariants = styleVariants({
    fluid: {
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
    },
    fixed: {
        flexShrink: 0,
        maxWidth: '100%',
        height: 'auto',
    },
    fullWidth: {
        width: '100%',
        height: 'auto',
    },
    fullHeight: {
        width: 'auto',
        height: '100%',
    }
})

// Remove the problematic maxDimensionStyle - we'll handle this with inline styles
