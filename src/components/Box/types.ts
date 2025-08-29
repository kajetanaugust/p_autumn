import type { Align, Direction, Justify, Position } from '@utils/types.ts'

export type ZIndexVariant = 'auto' | '0' | '10' | '20' | '30' | '40' | '50'
export type DimensionVariants = '100%' | 'auto' | 'fit-content' | string

export type ResponsiveDimensionVariants =
  | DimensionVariants
  | [DimensionVariants, DimensionVariants]
  | [DimensionVariants, DimensionVariants, DimensionVariants]

export type ResponsiveDirection =
  | Direction
  | [Direction, Direction]
  | [Direction, Direction, Direction]

export type ResponsiveJustify =
  | Justify
  | [Justify, Justify]
  | [Justify, Justify, Justify]

export type ResponsiveAlign = Align | [Align, Align] | [Align, Align, Align]

export type ResponsiveGap = string | [string, string] | [string, string, string]

export type ResponsivePosition =
  | Position
  | [Position, Position]
  | [Position, Position, Position]

export type ResponsivePositionProperty =
  | string
  | [string, string]
  | [string, string, string]
