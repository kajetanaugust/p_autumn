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
  p?: string | [string, string] | [string, string, string]
  px?: string | [string, string] | [string, string, string]
  py?: string | [string, string] | [string, string, string]
  pt?: string | [string, string] | [string, string, string]
  pb?: string | [string, string] | [string, string, string]
  ps?: string | [string, string] | [string, string, string]
  pe?: string | [string, string] | [string, string, string]
  m?: string | [string, string] | [string, string, string]
  mx?: string | [string, string] | [string, string, string]
  my?: string | [string, string] | [string, string, string]
  mt?: string | [string, string] | [string, string, string]
  mb?: string | [string, string] | [string, string, string]
  ms?: string | [string, string] | [string, string, string]
  me?: string | [string, string] | [string, string, string]
}
