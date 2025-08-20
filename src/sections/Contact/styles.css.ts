import { style } from '@vanilla-extract/css'

export const mapStyles = style({
  border: 0,
  height: 300,
  '@media': {
    'screen and (min-width: 768px)': {
      height: 640,
    },
  },
})
