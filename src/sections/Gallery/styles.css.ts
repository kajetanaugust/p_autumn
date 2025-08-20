import { style } from '@vanilla-extract/css'
import { theme } from '@styles/theme.css.ts'

export const galleryImageStyles = style({
  width: '100%',
  height: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  borderRadius: theme.radius.md,
})

export const galleryCarousel = style({
  display: 'block',
  maxHeight: 500,
  '@media': {
    'screen and (min-width: 768px)': {
      maxHeight: 700,
      maxWidth: 1280,
    },
  },
})
