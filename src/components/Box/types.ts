import type { Align, Direction, Justify } from '@utils/types.ts'

export type ZIndexVariant = 'auto' | '0' | '10' | '20' | '30' | '40' | '50'

type Width = number | 'full' | 'auto' | 'fit' | 'screen'

export type ResponsiveDimension = Width | [Width, Width] | [Width, Width, Width]

export type ResponsiveDirection =
  | Direction
  | [Direction, Direction]
  | [Direction, Direction, Direction]

export type ResponsiveJustify =
  | Justify
  | [Justify, Justify]
  | [Justify, Justify, Justify]

export type ResponsiveAlign = Align | [Align, Align] | [Align, Align, Align]

export type ResponsiveGap = number | [number, number] | [number, number, number]

export type ResponsivePositionProperty =
  | number
  | [number, number]
  | [number, number, number]
