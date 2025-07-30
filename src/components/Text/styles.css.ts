import {recipe} from '@vanilla-extract/recipes';
import {styleVariants} from '@vanilla-extract/css';
import {fonts} from '../../tokens/Fonts';
import {theme} from '../../styles/theme.css';

export const textRecipe = recipe({
    base: {
        margin: 0,
        padding: 0,
        lineHeight: 1.4,
    },
    variants: {
        defaultVariants: {
            variant: 'text-medium',
            style: 'normal',
        },
        variant: {
            'heading-1': {
                fontFamily: fonts.primary,
                fontSize: '2.5rem',
                fontWeight: 400,
                lineHeight: 1.2,
                '@media': {
                    'screen and (min-width: 768px)': {
                        fontSize: '3.5rem',
                    }
                },
            },
            'heading-2': {
                fontFamily: fonts.primary,
                fontSize: '2.25rem',
                fontWeight: 400,
                lineHeight: 1.2,
                '@media': {
                    'screen and (min-width: 768px)': {
                        fontSize: '3rem',
                        lineHeight: 1.2,
                    }
                },
            },
            'heading-3': {
                fontFamily: fonts.primary,
                fontSize: '2rem',
                fontWeight: 400,
                lineHeight: 1.2,
                '@media': {
                    'screen and (min-width: 768px)': {
                        fontSize: '2.5rem',
                        lineHeight: 1.2,
                    }
                },
            },
            'heading-4': {
                fontFamily: fonts.primary,
                fontSize: '1.5rem',
                fontWeight: 400,
                lineHeight: 1.3,
                '@media': {
                    'screen and (min-width: 768px)': {
                        fontSize: '2rem',
                    }
                },
            },
            'heading-5': {
                fontFamily: fonts.primary,
                fontSize: '1.25rem',
                fontWeight: 400,
                lineHeight: 1.4,
                '@media': {
                    'screen and (min-width: 768px)': {
                        fontSize: '1.5rem',
                    }
                },
            },
            'heading-6': {
                fontFamily: fonts.primary,
                fontSize: '1.125rem',
                fontWeight: 400,
                lineHeight: 1.4,
                '@media': {
                    'screen and (min-width: 768px)': {
                        fontSize: '1.25rem',
                    }
                },
            },
            'text-large': {
                fontFamily: fonts.secondary,
                fontSize: '1.25rem',
                fontWeight: 300,
                lineHeight: 1.5,
            },
            'text-medium': {
                fontFamily: fonts.secondary,
                fontSize: '1.125rem',
                fontWeight: 300,
                lineHeight: 1.5,
            },
            'text-regular': {
                fontFamily: fonts.secondary,
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.5,
            },
            'text-small': {
                fontFamily: fonts.secondary,
                fontSize: '0.875rem',
                fontWeight: 300,
                lineHeight: 1.5,
            },
            'text-tiny': {
                fontFamily: fonts.secondary,
                fontSize: '0.75rem',
                fontWeight: 300,
                lineHeight: 1.5,
            },
            'tagline': {
                fontFamily: fonts.secondary,
                fontSize: '1rem',
                fontWeight: 500,
                lineHeight: 1.5,
            },
        },
        weight: {
            200: {fontWeight: 200},
            300: {fontWeight: 300},
            400: {fontWeight: 400},
            500: {fontWeight: 500},
            600: {fontWeight: 600},
            700: {fontWeight: 700},
            800: {fontWeight: 800},
            900: {fontWeight: 900},
        },
        style: {
            normal: {fontStyle: 'normal'},
            italic: {fontStyle: 'italic'},
        },
        wrap: {
            wrap: {textWrap: "wrap"},
            nowrap: {textWrap: "nowrap"},
        },
        textAlign: {
            left: {textAlign: "left"},
            center: {textAlign: "center"},
            right: {textAlign: "right"}
        }
    },
});

export const textColorVariants = styleVariants(theme.colors, (color) => ({
    color: `${color} !important`
    ,
}));
