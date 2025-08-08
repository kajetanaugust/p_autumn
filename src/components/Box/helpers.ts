import {
  alignDesktopVar,
  alignMobileVar,
  bottomVar,
  dynamicAlignStyle,
  dynamicBottomStyle,
  dynamicFlexDirectionStyle,
  dynamicHeightStyle,
  dynamicJustifyStyle,
  dynamicLeftStyle,
  dynamicMaxHeightStyle,
  dynamicMaxWidthStyle,
  dynamicPositionStyle,
  dynamicRightStyle,
  dynamicTopStyle,
  dynamicWidthStyle,
  flexDirectionDesktopVar,
  flexDirectionMobileVar,
  flexDirectionTabletVar,
  gapVars,
  heightDesktopVar,
  heightMobileVar,
  heightVar,
  heightVariants,
  justifyDesktopVar,
  justifyMobileVar,
  leftVar,
  marginBottomVars,
  marginEndVars,
  marginStartVars,
  marginTopVars,
  marginVars,
  marginXVars,
  marginYVars,
  maxHeightDesktopVar,
  maxHeightMobileVar,
  maxHeightVar,
  maxWidthDesktopVar,
  maxWidthMobileVar,
  maxWidthVar,
  paddingBottomVars,
  paddingEndVars,
  paddingStartVars,
  paddingTopVars,
  paddingVars,
  paddingXVars,
  paddingYVars,
  positionDesktopVar,
  positionMobileVar,
  responsiveHeightStyle,
  responsiveMarginBottomStyle,
  responsiveMarginEndStyle,
  responsiveMarginStartStyle,
  responsiveMarginStyle,
  responsiveMarginTopStyle,
  responsiveMarginXStyle,
  responsiveMarginYStyle,
  responsiveMaxHeightStyle,
  responsiveMaxWidthStyle,
  responsivePaddingBottomStyle,
  responsivePaddingEndStyle,
  responsivePaddingStartStyle,
  responsivePaddingStyle,
  responsivePaddingTopStyle,
  responsivePaddingXStyle,
  responsivePaddingYStyle,
  responsiveWidthStyle,
  rightVar,
  topVar,
  widthDesktopVar,
  widthMobileVar,
  widthVar,
  widthVariants,
} from './styles.css.ts'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import type { DimensionVariants } from './types.ts'
import type { Align, Direction, Justify, Position } from '@utils/types.ts'

export const getDimensionClass = (
  dimension: DimensionVariants | [DimensionVariants, DimensionVariants],
  type: 'width' | 'height' | 'maxWidth' | 'maxHeight'
) => {
  if (!dimension) return ''

  // If it's an array (responsive), use responsive styles
  if (Array.isArray(dimension)) {
    switch (type) {
      case 'width':
        return responsiveWidthStyle
      case 'height':
        return responsiveHeightStyle
      case 'maxWidth':
        return responsiveMaxWidthStyle
      case 'maxHeight':
        return responsiveMaxHeightStyle
      default:
        return ''
    }
  }

  if (typeof dimension === 'string') {
    switch (type) {
      case 'width':
        if (widthVariants && dimension in widthVariants) {
          return widthVariants[dimension as keyof typeof widthVariants]
        }
        return dynamicWidthStyle
      case 'height':
        if (heightVariants && dimension in heightVariants) {
          return heightVariants[dimension as keyof typeof heightVariants]
        }
        return dynamicHeightStyle
      case 'maxWidth':
        return dynamicMaxWidthStyle
      case 'maxHeight':
        return dynamicMaxHeightStyle
      default:
        return ''
    }
  }

  switch (type) {
    case 'width':
      return dynamicWidthStyle
    case 'height':
      return dynamicHeightStyle
    case 'maxWidth':
      return dynamicMaxWidthStyle
    case 'maxHeight':
      return dynamicMaxHeightStyle
    default:
      return ''
  }
}

export const getDimensionVars = (
  dimension: DimensionVariants | [DimensionVariants, DimensionVariants],
  type: 'width' | 'height' | 'maxWidth' | 'maxHeight'
) => {
  if (!dimension) return {}

  const varMaps = {
    width: {
      single: widthVar,
      mobile: widthMobileVar,
      desktop: widthDesktopVar,
    },
    height: {
      single: heightVar,
      mobile: heightMobileVar,
      desktop: heightDesktopVar,
    },
    maxWidth: {
      single: maxWidthVar,
      mobile: maxWidthMobileVar,
      desktop: maxWidthDesktopVar,
    },
    maxHeight: {
      single: maxHeightVar,
      mobile: maxHeightMobileVar,
      desktop: maxHeightDesktopVar,
    },
  }

  const vars = varMaps[type]

  // Handle responsive values (array)
  if (Array.isArray(dimension)) {
    const [mobile, desktop] = dimension

    const mobileValue = typeof mobile === 'number' ? `${mobile}px` : mobile
    const desktopValue = typeof desktop === 'number' ? `${desktop}px` : desktop

    return assignInlineVars({
      [vars.mobile]: mobileValue,
      [vars.desktop]: desktopValue,
    })
  }

  // Handle single values
  if (typeof dimension === 'number') {
    return assignInlineVars({
      [vars.single]: `${dimension}px`,
    })
  }

  if (typeof dimension === 'string') {
    const isWidthVariant =
      type === 'width' && widthVariants && dimension in widthVariants
    const isHeightVariant =
      type === 'height' && heightVariants && dimension in heightVariants

    if (!isWidthVariant && !isHeightVariant) {
      return assignInlineVars({
        [vars.single]: dimension,
      })
    }
  }

  return {}
}

export const getDirectionClass = (
  direction:
    | Direction
    | [Direction, Direction]
    | [Direction, Direction, Direction]
) => {
  if (!Array.isArray(direction)) {
    return '' // Use recipe variant for a single direction
  }

  // Use dynamic class for responsive directions
  return dynamicFlexDirectionStyle
}

export const getDirectionVars = (
  direction:
    | Direction
    | [Direction, Direction]
    | [Direction, Direction, Direction]
) => {
  if (!Array.isArray(direction)) {
    return {}
  }

  if (direction.length === 2) {
    const [mobile, desktop] = direction
    return assignInlineVars({
      [flexDirectionMobileVar]: mobile,
      [flexDirectionDesktopVar]: desktop,
    })
  }

  if (direction.length === 3) {
    const [mobile, tablet, desktop] = direction

    return assignInlineVars({
      [flexDirectionMobileVar]: mobile,
      [flexDirectionTabletVar]: tablet,
      [flexDirectionDesktopVar]: desktop,
    })
  }
}

export const getPositionClass = (position: Position | [Position, Position]) => {
  if (!Array.isArray(position)) {
    return '' // Use recipe variant for single position
  }

  return dynamicPositionStyle
}

export const getPositionVars = (position: Position | [Position, Position]) => {
  if (!Array.isArray(position)) {
    return {}
  }

  const [mobile, desktop] = position

  return assignInlineVars({
    [positionMobileVar]: mobile,
    [positionDesktopVar]: desktop,
  })
}

export const getJustifyClass = (justify: Justify | [Justify, Justify]) => {
  if (!Array.isArray(justify)) {
    return '' // Use recipe variant for single justify
  }

  return dynamicJustifyStyle
}

export const getJustifyVars = (justify: Justify | [Justify, Justify]) => {
  if (!Array.isArray(justify)) {
    return {}
  }

  const [mobile, desktop] = justify

  return assignInlineVars({
    [justifyMobileVar]: mobile,
    [justifyDesktopVar]: desktop,
  })
}

export const getAlignClass = (align: Align | [Align, Align]) => {
  if (!Array.isArray(align)) {
    return '' // Use recipe variant for single align
  }

  return dynamicAlignStyle
}

export const getAlignVars = (align: Align | [Align, Align]) => {
  if (!Array.isArray(align)) {
    return {}
  }

  const [mobile, desktop] = align

  return assignInlineVars({
    [alignMobileVar]: mobile,
    [alignDesktopVar]: desktop,
  })
}

export function getGapVars(
  gap?: number | [number, number]
): Record<string, string> {
  if (!gap) return {}

  if (typeof gap === 'number') {
    return assignInlineVars(gapVars, {
      mobile: `${gap}px`,
      desktop: `${gap}px`,
    })
  }

  if (Array.isArray(gap) && gap.length === 2) {
    const [mobileGap, desktopGap] = gap

    return assignInlineVars(gapVars, {
      mobile: `${mobileGap}px`,
      desktop: `${desktopGap}px`,
    })
  }

  return {}
}

// Fixed the function signature and parameter order
function createSpacingVars(
  value?: number | [number, number],
  vars?: {
    mobile: any
    desktop: any
  }
): Record<string, string> {
  if (!value || !vars) return {}

  if (typeof value === 'number') {
    return assignInlineVars(vars, {
      mobile: `${value}px`,
      desktop: `${value}px`,
    })
  }

  if (Array.isArray(value) && value.length === 2) {
    const [mobile, desktop] = value
    return assignInlineVars(vars, {
      mobile: `${mobile}px`,
      desktop: `${desktop}px`,
    })
  }

  return {}
}

// Spacing helper functions - Fixed parameter order
export const getPaddingVars = (value?: number | [number, number]) =>
  createSpacingVars(value, paddingVars)
export const getPaddingXVars = (value?: number | [number, number]) =>
  createSpacingVars(value, paddingXVars)
export const getPaddingYVars = (value?: number | [number, number]) =>
  createSpacingVars(value, paddingYVars)
export const getPaddingTopVars = (value?: number | [number, number]) =>
  createSpacingVars(value, paddingTopVars)
export const getPaddingBottomVars = (value?: number | [number, number]) =>
  createSpacingVars(value, paddingBottomVars)
export const getPaddingStartVars = (value?: number | [number, number]) =>
  createSpacingVars(value, paddingStartVars)
export const getPaddingEndVars = (value?: number | [number, number]) =>
  createSpacingVars(value, paddingEndVars)

export const getMarginVars = (value?: number | [number, number]) =>
  createSpacingVars(value, marginVars)
export const getMarginXVars = (value?: number | [number, number]) =>
  createSpacingVars(value, marginXVars)
export const getMarginYVars = (value?: number | [number, number]) =>
  createSpacingVars(value, marginYVars)
export const getMarginTopVars = (value?: number | [number, number]) =>
  createSpacingVars(value, marginTopVars)
export const getMarginBottomVars = (value?: number | [number, number]) =>
  createSpacingVars(value, marginBottomVars)
export const getMarginStartVars = (value?: number | [number, number]) =>
  createSpacingVars(value, marginStartVars)
export const getMarginEndVars = (value?: number | [number, number]) =>
  createSpacingVars(value, marginEndVars)

// Class helper functions
export const getPaddingClass = (value?: number | [number, number]) =>
  value ? responsivePaddingStyle : ''
export const getPaddingXClass = (value?: number | [number, number]) =>
  value ? responsivePaddingXStyle : ''
export const getPaddingYClass = (value?: number | [number, number]) =>
  value ? responsivePaddingYStyle : ''
export const getPaddingTopClass = (value?: number | [number, number]) =>
  value ? responsivePaddingTopStyle : ''
export const getPaddingBottomClass = (value?: number | [number, number]) =>
  value ? responsivePaddingBottomStyle : ''
export const getPaddingStartClass = (value?: number | [number, number]) =>
  value ? responsivePaddingStartStyle : ''
export const getPaddingEndClass = (value?: number | [number, number]) =>
  value ? responsivePaddingEndStyle : ''

export const getMarginClass = (value?: number | [number, number]) =>
  value ? responsiveMarginStyle : ''
export const getMarginXClass = (value?: number | [number, number]) =>
  value ? responsiveMarginXStyle : ''
export const getMarginYClass = (value?: number | [number, number]) =>
  value ? responsiveMarginYStyle : ''
export const getMarginTopClass = (value?: number | [number, number]) =>
  value ? responsiveMarginTopStyle : ''
export const getMarginBottomClass = (value?: number | [number, number]) =>
  value ? responsiveMarginBottomStyle : ''
export const getMarginStartClass = (value?: number | [number, number]) =>
  value ? responsiveMarginStartStyle : ''
export const getMarginEndClass = (value?: number | [number, number]) =>
  value ? responsiveMarginEndStyle : ''

export const getTopClass = (value?: number) =>
  value !== undefined ? dynamicTopStyle : ''
export const getRightClass = (value?: number) =>
  value !== undefined ? dynamicRightStyle : ''
export const getBottomClass = (value?: number) =>
  value !== undefined ? dynamicBottomStyle : ''
export const getLeftClass = (value?: number) =>
  value !== undefined ? dynamicLeftStyle : ''

export const getTopVars = (value?: number) => {
  if (value === undefined) return {}
  return assignInlineVars({
    [topVar]: `${value}px`,
  })
}

export const getRightVars = (value?: number) => {
  if (value === undefined) return {}
  return assignInlineVars({
    [rightVar]: `${value}px`,
  })
}

export const getBottomVars = (value?: number) => {
  if (value === undefined) return {}
  return assignInlineVars({
    [bottomVar]: `${value}px`,
  })
}

export const getLeftVars = (value?: number) => {
  if (value === undefined) return {}
  return assignInlineVars({
    [leftVar]: `${value}px`,
  })
}
