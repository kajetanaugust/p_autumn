import {style} from "@vanilla-extract/css";

export const headerLogoDesktop = style({
    display: 'none',
    '@media': {
        'screen and (min-width: 576px)': {
            display: 'block',
        },
        'screen and (min-width: 768px)': {
            display: 'none',
        },
        'screen and (min-width: 992px)': {
            display: 'block',
        }
    }
})

export const headerLogoMobile = style({
    display: "block",
    '@media': {
        'screen and (min-width: 576px)': {
            display: 'none',
        },
        'screen and (min-width: 768px)': {
            display: 'block',
        },
        'screen and (min-width: 992px)': {
            display: 'none',
        }
    }
})

export const mobileMenu = style({
    display: 'none'
})

export const mobileMenuVisible = style({
    display: 'flex !important', // Override the display: none
    opacity: 1,
});

export const desktopMenu = style({
    display: 'none',
    '@media': {
        'screen and (min-width: 768px)': {
            display: 'flex',
        }
    }
})

export const mobileMenuHamburger = style({
    display: 'block',
    '@media': {
        'screen and (min-width: 768px)': {
            display: 'none',
        }
    }
})
