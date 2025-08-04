import {style} from "@vanilla-extract/css";
import {theme} from "../../styles/theme.css.ts";

export const mobileCarousel = style({
    display: 'block',
    '@media': {
        'screen and (min-width: 768px)': {
            display: 'none',
        },
    }
})

export const desktopCarousel = style({
    display: 'none',
    '@media': {
        'screen and (min-width: 768px)': {
            display: 'block',
        },
    }
})

export const galleryImageStyles = style({
    width: '100%',
    height: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    borderRadius: theme.radius.lg
})

