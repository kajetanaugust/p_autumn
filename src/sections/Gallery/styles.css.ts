import { style } from '@vanilla-extract/css'

export const galleryImageStyles = style({
  width: '100%',
  height: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  borderRadius: 'var(--radius-lg)',
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
