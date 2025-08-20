import { style } from '@vanilla-extract/css'

export const heroCopyElement = style({
  flex: 1,
})

export const heroImageStyles = style({
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
  objectFit: 'cover',
  maxHeight: 450,
  '@media': {
    'screen and (min-width: 1920px)': {
      maxHeight: 600,
    },
  },
})
