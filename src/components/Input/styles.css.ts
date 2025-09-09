import { style } from '@vanilla-extract/css'
import { theme } from '@styles/theme.css.ts'

export const styledInput = style({
  height: '48px',
  width: '100%',
  border: 'none',
  borderBottom: `1px solid ${theme.colors.neutral_lighter}`,
  selectors: {
    '&:placeholder': {
      color: theme.colors.neutral_light,
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.5,
    },
  },
})
