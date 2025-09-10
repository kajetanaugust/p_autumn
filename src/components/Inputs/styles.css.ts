import { style } from '@vanilla-extract/css'
import { theme } from '@styles/theme.css.ts'
import { fonts } from '@tokens/Fonts'

export const styledInput = style({
  height: '48px',
  width: '100%',
  border: 'none',
  borderBottom: `1px solid ${theme.colors.neutral_lighter}`,
  paddingLeft: '4px',
  fontSize: '1rem',

  fontFamily: fonts.secondary,
  selectors: {
    '&::placeholder': {
      fontFamily: fonts.secondary,
      color: theme.colors.neutral_light,
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.5,
    },
  },
})

export const styledTextArea = style([
  styledInput,
  {
    paddingTop: '16px',
    height: '180px',
    fontFamily: fonts.secondary,
    fontSize: '1rem',

    resize: 'vertical',
    selectors: {
      '&::placeholder': {
        fontFamily: fonts.secondary,
        color: theme.colors.neutral_light,
        fontSize: '1rem',
        fontWeight: 300,
        lineHeight: 1.5,
      },
    },
  },
])
