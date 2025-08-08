import { recipe } from '@vanilla-extract/recipes'
import { theme } from '@styles/theme.css.ts'
import { iconVariants, sizeStyles } from './consts.ts'

export const buttonRecipe = recipe({
  base: {
    borderRadius: '100px',
    height: 'fit-content',
    width: 'fit-content',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '16px',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    outline: 'none',
    boxSizing: 'border-box',

    ':focus-visible': {
      outline: `2px solid ${theme.colors.luxor_gold_darker || '#0066cc'}`,
      outlineOffset: '2px',
    },

    ':disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: theme.colors.luxor_gold_dark,
        color: theme.colors.neutral_white,

        '&:hover:not(:disabled)': {
          backgroundColor: theme.colors.luxor_gold,
        },

        '&:active:not(:disabled)': {
          transform: 'translateY(1px)',
        },
      },
      outline: {
        border: `1px solid rgba(9, 3, 9, .75)`,
        backgroundColor: 'transparent',
        color: theme.colors.neutral_darkest,

        '&:hover:not(:disabled)': {
          borderColor: theme.colors.luxor_gold,
        },

        '&:active:not(:disabled)': {
          transform: 'translateY(1px)',
        },
      },
      ghost: {
        border: 'none',
        backgroundColor: 'transparent',
        color: theme.colors.neutral_darkest,

        '&:hover:not(:disabled)': {
          backgroundColor: theme.colors.neutral_lightest,
        },

        '&:active:not(:disabled)': {
          transform: 'translateY(1px)',
        },
      },
      iconPrimary: {
        backgroundColor: theme.colors.luxor_gold,
        color: theme.colors.neutral_white,

        '&:hover:not(:disabled)': {
          backgroundColor: theme.colors.luxor_gold_dark,
        },

        '&:active:not(:disabled)': {
          transform: 'translateY(1px)',
        },
      },
      iconOutline: {
        border: `1px solid rgba(9, 3, 9, .75)`,
        backgroundColor: 'transparent',
        color: theme.colors.neutral_darkest,

        '&:hover:not(:disabled)': {
          borderColor: theme.colors.luxor_gold,
        },

        '&:active:not(:disabled)': {
          transform: 'translateY(1px)',
        },
      },
      iconGhost: {
        border: 'none',
        backgroundColor: 'transparent',
        color: theme.colors.neutral_darkest,

        '&:hover:not(:disabled)': {
          backgroundColor: theme.colors.neutral_lightest,
        },

        '&:active:not(:disabled)': {
          transform: 'translateY(1px)',
        },
      },
    },
    size: {
      small: { padding: '4px 10px' },
      large: { padding: '6px 12px' },
    },
  },
  compoundVariants: iconVariants.flatMap(variant =>
    Object.entries(sizeStyles).map(([size, padding]) => ({
      variants: { variant, size: size as keyof typeof sizeStyles },
      style: { padding },
    }))
  ),
})
