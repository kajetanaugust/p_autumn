import {styleVariants} from '@vanilla-extract/css';
import {recipe} from '@vanilla-extract/recipes';
import {theme} from "../../styles/theme.css";

export const boxRecipe = recipe({
    base: {
        boxSizing: 'border-box',
        height: "fit-content",
        width: '100%'
    },

    variants: {
        display: {
            flex: {display: 'flex'},
            block: {display: 'block'},
            inline: {display: 'inline'},
            'inline-flex': {display: 'inline-flex'},
            grid: {display: 'grid'},
            'inline-grid': {display: 'inline-grid'},
            'inline-block': {display: 'inline-block'},
            none: {display: 'none'},
        },

        position: {
            static: {position: 'static'},
            relative: {position: 'relative'},
            absolute: {position: 'absolute'},
            fixed: {position: 'fixed'},
            sticky: {position: 'sticky'},
        },

        direction: {
            row: {flexDirection: 'row'},
            column: {flexDirection: 'column'},
            'row-reverse': {flexDirection: 'row-reverse'},
            'column-reverse': {flexDirection: 'column-reverse'},
        },

        justify: {
            'flex-start': {justifyContent: 'flex-start'},
            'flex-end': {justifyContent: 'flex-end'},
            center: {justifyContent: 'center'},
            'space-between': {justifyContent: 'space-between'},
            'space-around': {justifyContent: 'space-around'},
            'space-evenly': {justifyContent: 'space-evenly'},
            start: {justifyContent: 'start'},
            end: {justifyContent: "end"},
            stretch: {justifyContent: "stretch"}

        },

        align: {
            'flex-start': {alignItems: 'flex-start'},
            'flex-end': {alignItems: 'flex-end'},
            center: {alignItems: 'center'},
            baseline: {alignItems: 'baseline'},
            stretch: {alignItems: 'stretch'},
            start: {justifyContent: 'start'},
            end: {justifyContent: "end"},
        },

        wrap: {
            nowrap: {flexWrap: 'nowrap'},
            wrap: {flexWrap: 'wrap'},
            'wrap-reverse': {flexWrap: 'wrap-reverse'},
        },

        overflow: {
            visible: {overflow: 'visible'},
            hidden: {overflow: 'hidden'},
            scroll: {overflow: 'scroll'},
            clip: {overflow: 'clip'},
            auto: {overflow: 'auto'},
        },

        isWithBorder: {
            true: {border: `1px solid ${theme.colors.border || '#e5e7eb'}`},
            false: {},
        },
    },

    defaultVariants: {
        display: 'flex',
        position: 'static',
        direction: 'row',
        justify: 'flex-start',
        align: 'flex-start',
        wrap: 'nowrap',
        overflow: 'visible',
        isWithBorder: false,
    },
});

// Background color variants
export const bgColorVariants = styleVariants(theme.colors, (color) => ({
    backgroundColor: color,
}));

// Shadow variants
export const shadowVariants = styleVariants(theme.shadows, (shadow) => ({
    boxShadow: shadow,
}));

// Border radius variants
export const radiusVariants = styleVariants(theme.radius, (radius) => ({
    borderRadius: radius,
}));

// Gap variants
export const gapVariants = styleVariants(theme.spacing, (spacing) => ({
    gap: spacing,
}));

export const paddingVariants = styleVariants(theme.spacing, (p) => ({
    padding: p,
}));

export const paddingXVariants = styleVariants(theme.spacing, (px) => ({
    paddingInline: px,
}));

export const paddingYVariants = styleVariants(theme.spacing, (py) => ({
    paddingBlock: py,
}));

export const paddingTopVariants = styleVariants(theme.spacing, (pt) => ({
    paddingBlockStart: pt,
}));

export const paddingBottomVariants = styleVariants(theme.spacing, (pb) => ({
    paddingBlockEnd: pb,
}));

export const paddingStartVariants = styleVariants(theme.spacing, (ps) => ({
    paddingInlineStart: ps,
}));

export const paddingEndVariants = styleVariants(theme.spacing, (pe) => ({
    paddingInlineEnd: pe,
}));

export const marginVariants = styleVariants(theme.spacing, (m) => ({
    margin: m,
}));

export const marginXVariants = styleVariants(theme.spacing, (mx) => ({
    marginInline: mx,
}));

export const marginYVariants = styleVariants(theme.spacing, (my) => ({
    marginBlock: my,
}));

export const marginTopVariants = styleVariants(theme.spacing, (mt) => ({
    marginBlockStart: mt,
}));

export const marginBottomVariants = styleVariants(theme.spacing, (mb) => ({
    marginBlockEnd: mb,
}));

export const marginStartVariants = styleVariants(theme.spacing, (ms) => ({
    marginInlineStart: ms,
}));

export const marginEndVariants = styleVariants(theme.spacing, (me) => ({
    marginInlineEnd: me,
}));


// Width variants for common sizes
export const widthVariants = styleVariants({
    full: {width: '100%'},
    auto: {width: 'auto'},
    fit: {width: 'fit-content'},
    min: {width: 'min-content'},
    max: {width: 'max-content'},
});

// Height variants for common sizes
export const heightVariants = styleVariants({
    full: {height: '100%'},
    auto: {height: 'auto'},
    fit: {height: 'fit-content'},
    min: {height: 'min-content'},
    max: {height: 'max-content'},
    screen: {height: '100vh'},
});

export const zIndexVariants = styleVariants({
    auto: {zIndex: 'auto'},
    0: {zIndex: 0},
    10: {zIndex: 10},
    20: {zIndex: 20},
    30: {zIndex: 30},
    40: {zIndex: 40},
    50: {zIndex: 50},
});
