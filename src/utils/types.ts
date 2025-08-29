export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
export type Align =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'
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
export type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export interface Spacings {
  p?: number | [number, number] | [number, number, number]
  px?: number | [number, number] | [number, number, number]
  py?: number | [number, number] | [number, number, number]
  pt?: number | [number, number] | [number, number, number]
  pb?: number | [number, number] | [number, number, number]
  ps?: number | [number, number] | [number, number, number]
  pe?: number | [number, number] | [number, number, number]
  m?: number | [number, number] | [number, number, number]
  mx?: number | [number, number] | [number, number, number]
  my?: number | [number, number] | [number, number, number]
  mt?: number | [number, number] | [number, number, number]
  mb?: number | [number, number] | [number, number, number]
  ms?: number | [number, number] | [number, number, number]
  me?: number | [number, number] | [number, number, number]
}
