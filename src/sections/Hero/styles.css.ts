import { style } from '@vanilla-extract/css'

export const heroCopyElement = style({
  flex: 1,
})

export const heroImageStyles = style({
  width: '100%',
  height: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: 450,
  objectFit: 'cover',
})
