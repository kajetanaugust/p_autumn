import { createGlobalTheme } from '@vanilla-extract/css'
import { colors } from '../tokens/Colors'
import { radius } from '../tokens/Radius'
import { shadows } from '../tokens/Shadows'
import { breakpoints } from './vars.ts'

export const theme = createGlobalTheme(':root', {
  colors: colors,
  radius: radius,
  shadows: shadows,
  breakpoints: breakpoints,
})
