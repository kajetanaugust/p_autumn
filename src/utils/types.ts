export type Direction = 'row' | 'row-reverse' | 'col' | 'col-reverse'
export type Justify =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'

export type Align = 'start' | 'end' | 'center' | 'stretch'

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
  p?: number | [number, number] | [number, number, number]
  px?: number | [number, number] | [number, number, number]
  py?: number | [number, number] | [number, number, number]
  pt?: number | [number, number] | [number, number, number]
  pr?: number | [number, number] | [number, number, number]
  pb?: number | [number, number] | [number, number, number]
  pl?: number | [number, number] | [number, number, number]
  m?: number | [number, number] | [number, number, number]
  mx?: number | [number, number] | [number, number, number]
  my?: number | [number, number] | [number, number, number]
  mt?: number | [number, number] | [number, number, number]
  mr?: number | [number, number] | [number, number, number]
  mb?: number | [number, number] | [number, number, number]
  ml?: number | [number, number] | [number, number, number]
}
