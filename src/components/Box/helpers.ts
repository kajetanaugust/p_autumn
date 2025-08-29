import type { Spacings, Wrap } from '@utils/types.ts'
import type {
  ResponsiveAlign,
  ResponsiveDirection,
  ResponsiveGap,
  ResponsiveJustify,
  ResponsivePosition,
  ResponsivePositionProperty,
} from '@components/Box/types.ts'

const getResponsiveVariant = <T>(prop: T | [T, T] | [T, T, T]): [T, T, T] =>
  Array.isArray(prop)
    ? prop.length === 2
      ? [prop[0], prop[0], prop[1]]
      : prop
    : [prop, prop, prop]

interface ResponsiveValues extends Spacings {
  position?: ResponsivePosition
  top?: ResponsivePositionProperty
  right?: ResponsivePositionProperty
  bottom?: ResponsivePositionProperty
  left?: ResponsivePositionProperty
  align?: ResponsiveAlign
  justify?: ResponsiveJustify
  wrap?: Wrap
  direction?: ResponsiveDirection
  gap?: ResponsiveGap
}

export const getResponsiveValues = ({
  p,
  ps,
  pe,
  pt,
  pb,
  px,
  py,
  m,
  ms,
  me,
  mt,
  mb,
  mx,
  my,
  position,
  top,
  bottom,
  right,
  left,
  align,
  justify,
  wrap,
  direction,
  gap,
}: ResponsiveValues) => {
  const [paddingMobile, paddingTablet, paddingDesktop] =
    p === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(p)

  const [paddingStartMobile, paddingStartTablet, paddingStartDesktop] =
    ps === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(ps)

  const [paddingEndMobile, paddingEndTablet, paddingEndDesktop] =
    pe === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(pe)

  const [paddingTopMobile, paddingTopTablet, paddingTopDesktop] =
    pt === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(pt)

  const [paddingBottomMobile, paddingBottomTablet, paddingBottomDesktop] =
    pb === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(pb)

  const [paddingInlineMobile, paddingInlineTablet, paddingInlineDesktop] =
    px === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(px)
  const [paddingBlockMobile, paddingBlockTablet, paddingBlockDesktop] =
    py === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(py)

  const [marginMobile, marginTablet, marginDesktop] =
    m === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(m)

  const [marginStartMobile, marginStartTablet, marginStartDesktop] =
    ms === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(ms)

  const [marginEndMobile, marginEndTablet, marginEndDesktop] =
    me === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(me)

  const [marginTopMobile, marginTopTablet, marginTopDesktop] =
    mt === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(mt)

  const [marginBottomMobile, marginBottomTablet, marginBottomDesktop] =
    mb === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(mb)

  const [marginInlineMobile, marginInlineTablet, marginInlineDesktop] =
    mx === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(mx)

  const [marginBlockMobile, marginBlockTablet, marginBlockDesktop] =
    my === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(my)

  const [positionMobile, positionTablet, positionDesktop] =
    position === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(position)

  const [topMobile, topTablet, topDesktop] =
    top === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(top)

  const [rightMobile, rightTablet, rightDesktop] =
    right === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(right)

  const [bottomMobile, bottomTablet, bottomDesktop] =
    bottom === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(bottom)

  const [leftMobile, leftTablet, leftDesktop] =
    left === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(left)

  const [alignMobile, alignTablet, alignDesktop] =
    align === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(align)

  const [justifyMobile, justifyTablet, justifyDesktop] =
    justify === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(justify)

  const [wrapMobile, wrapTablet, wrapDesktop] =
    wrap === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(wrap)

  const [directionMobile, directionTablet, directionDesktop] =
    direction === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(direction)

  const [gapMobile, gapTablet, gapDesktop] =
    gap === undefined
      ? [undefined, undefined, undefined]
      : getResponsiveVariant(gap)

  return Object.fromEntries(
    Object.entries({
      '--padding-mobile': paddingMobile,
      '--padding-tablet': paddingTablet,
      '--padding-desktop': paddingDesktop,
      '--padding-start-mobile': paddingStartMobile,
      '--padding-start-tablet': paddingStartTablet,
      '--padding-start-desktop': paddingStartDesktop,
      '--padding-end-mobile': paddingEndMobile,
      '--padding-end-tablet': paddingEndTablet,
      '--padding-end-desktop': paddingEndDesktop,
      '--padding-top-mobile': paddingTopMobile,
      '--padding-top-tablet': paddingTopTablet,
      '--padding-top-desktop': paddingTopDesktop,
      '--padding-bottom-mobile': paddingBottomMobile,
      '--padding-bottom-tablet': paddingBottomTablet,
      '--padding-bottom-desktop': paddingBottomDesktop,
      '--padding-inline-mobile': paddingInlineMobile,
      '--padding-inline-tablet': paddingInlineTablet,
      '--padding-inline-desktop': paddingInlineDesktop,
      '--padding-block-mobile': paddingBlockMobile,
      '--padding-block-tablet': paddingBlockTablet,
      '--padding-block-desktop': paddingBlockDesktop,
      '--margin-mobile': marginMobile,
      '--margin-tablet': marginTablet,
      '--margin-desktop': marginDesktop,
      '--margin-start-mobile': marginStartMobile,
      '--margin-start-tablet': marginStartTablet,
      '--margin-start-desktop': marginStartDesktop,
      '--margin-end-mobile': marginEndMobile,
      '--margin-end-tablet': marginEndTablet,
      '--margin-end-desktop': marginEndDesktop,
      '--margin-top-mobile': marginTopMobile,
      '--margin-top-tablet': marginTopTablet,
      '--margin-top-desktop': marginTopDesktop,
      '--margin-bottom-mobile': marginBottomMobile,
      '--margin-bottom-tablet': marginBottomTablet,
      '--margin-bottom-desktop': marginBottomDesktop,
      '--margin-inline-mobile': marginInlineMobile,
      '--margin-inline-tablet': marginInlineTablet,
      '--margin-inline-desktop': marginInlineDesktop,
      '--margin-block-mobile': marginBlockMobile,
      '--margin-block-tablet': marginBlockTablet,
      '--margin-block-desktop': marginBlockDesktop,
      '--position-mobile': positionMobile,
      '--position-tablet': positionTablet,
      '--position-desktop': positionDesktop,
      '--top-mobile': topMobile,
      '--top-tablet': topTablet,
      '--top-desktop': topDesktop,
      '--right-mobile': rightMobile,
      '--right-tablet': rightTablet,
      '--right-desktop': rightDesktop,
      '--bottom-mobile': bottomMobile,
      '--bottom-tablet': bottomTablet,
      '--bottom-desktop': bottomDesktop,
      '--left-mobile': leftMobile,
      '--left-tablet': leftTablet,
      '--left-desktop': leftDesktop,
      '--align-items-mobile': alignMobile,
      '--align-items-tablet': alignTablet,
      '--align-items-desktop': alignDesktop,
      '--justify-content-mobile': justifyMobile,
      '--justify-content-tablet': justifyTablet,
      '--justify-content-desktop': justifyDesktop,
      '--gap-mobile': gapMobile,
      '--gap-tablet': gapTablet,
      '--gap-desktop': gapDesktop,
      '--flex-wrap-mobile': wrapMobile,
      '--flex-wrap-tablet': wrapTablet,
      '--flex-wrap-desktop': wrapDesktop,
      '--flex-direction-mobile': directionMobile,
      '--flex-direction-tablet': directionTablet,
      '--flex-direction-desktop': directionDesktop,
    }).filter(([_, value]) => value !== undefined)
  )
}
