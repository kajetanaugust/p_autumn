import {style} from "@vanilla-extract/css";

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

