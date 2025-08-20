import { style } from '@vanilla-extract/css'

export const AboutImageStyles = style({
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
  objectFit: 'cover',
  maxHeight: 400,
  '@media': {
    'screen and (min-width: 768px)': {
      maxHeight: 600,
    },
    'screen and (min-width: 1920px)': {
      maxHeight: 900,
    },
  },
})
