import { style } from '@vanilla-extract/css'

export const AboutImageStyles = style({
  width: '100%',
  height: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: 738,
  objectFit: 'cover',
  '@media': {
    'screen and (min-width: 1920px)': {
      maxHeight: 900,
    },
  },
})
