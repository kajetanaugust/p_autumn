import type { Align, Direction, Justify } from '@utils/types.ts'

export type ZIndexVariant = 'auto' | '0' | '10' | '20' | '30' | '40' | '50'
export type DimensionVariants = 'full' | 'auto' | 'fit'

export type ResponsiveDimensionVariants =
  | DimensionVariants
  | [DimensionVariants, DimensionVariants]

export type ResponsiveDirection = Direction | [Direction, Direction]

export type ResponsiveJustify = Justify | [Justify, Justify]

export type ResponsiveAlign = Align | [Align, Align]

export type ResponsiveGap = number | [number, number]

export type ResponsivePositionProperty = number | [number, number]
