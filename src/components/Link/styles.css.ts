import {style} from "@vanilla-extract/css";
import {theme} from "../../styles/theme.css";

export const styledLink = style({
    color: theme.colors.neutral_darker,

    ':hover': {
        color: `${theme.colors.luxor_gold_dark} !important`,
    },

    ':active': {
        color: `${theme.colors.luxor_gold_darker} !important`,
    },

    ':focus-visible': {
        outline: `2px solid ${theme.colors.luxor_gold_darker || '#0066cc'}`,
        outlineOffset: '2px',
    },
})
