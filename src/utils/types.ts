export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type Align = 'flex-start' | 'flex-end' | 'center' | 'stretch'

export type Display =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none'

export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'

export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto'

export type Wrap = 'nowrap' | 'wrap'

export interface Spacings {
  p?: number | [number, number]
  px?: number | [number, number]
  py?: number | [number, number]
  m?: number | [number, number]
  mx?: number | [number, number]
  my?: number | [number, number]
}
