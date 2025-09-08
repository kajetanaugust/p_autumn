import { createVar, style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { theme } from '@styles/theme.css.ts'

export const boxRecipe = recipe({
  base: {
    boxSizing: 'border-box',
  },

  variants: {
    display: {
      flex: { display: 'flex' },
      block: { display: 'block' },
      inline: { display: 'inline' },
      'inline-flex': { display: 'inline-flex' },
      grid: { display: 'grid' },
      'inline-grid': { display: 'inline-grid' },
      'inline-block': { display: 'inline-block' },
      none: { display: 'none' },
    },

    position: {
      static: { position: 'static' },
      relative: { position: 'relative' },
      absolute: { position: 'absolute' },
      fixed: { position: 'fixed' },
      sticky: { position: 'sticky' },
    },

    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
      'row-reverse': { flexDirection: 'row-reverse' },
      'column-reverse': { flexDirection: 'column-reverse' },
    },

    justify: {
      'flex-start': { justifyContent: 'flex-start' },
      'flex-end': { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' },
      'space-between': { justifyContent: 'space-between' },
      'space-around': { justifyContent: 'space-around' },
      'space-evenly': { justifyContent: 'space-evenly' },
      start: { justifyContent: 'start' },
      end: { justifyContent: 'end' },
      stretch: { justifyContent: 'stretch' },
    },

    align: {
      'flex-start': { alignItems: 'flex-start' },
      'flex-end': { alignItems: 'flex-end' },
      center: { alignItems: 'center' },
      baseline: { alignItems: 'baseline' },
      stretch: { alignItems: 'stretch' },
      start: { justifyContent: 'start' },
      end: { justifyContent: 'end' },
    },

    wrap: {
      nowrap: { flexWrap: 'nowrap' },
      wrap: { flexWrap: 'wrap' },
      'wrap-reverse': { flexWrap: 'wrap-reverse' },
    },

    overflow: {
      visible: { overflow: 'visible' },
      hidden: { overflow: 'hidden' },
      scroll: { overflow: 'scroll' },
      clip: { overflow: 'clip' },
      auto: { overflow: 'auto' },
    },

    isWithBorder: {
      true: { border: `1px solid ${theme.colors || '#e5e7eb'}` },
      false: {},
    },
  },

  defaultVariants: {
    display: 'flex',
    position: 'static',
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start',
    wrap: 'nowrap',
    overflow: 'visible',
    isWithBorder: false,
  },
})

// Background color variants
export const bgColorVariants = styleVariants(theme.colors, color => ({
  backgroundColor: color,
}))

// Shadow variants
export const shadowVariants = styleVariants(theme.shadows, shadow => ({
  boxShadow: shadow,
}))

// Border radius variants
export const radiusVariants = styleVariants(theme.radius, radius => ({
  borderRadius: radius,
}))

export const zIndexVariants = styleVariants({
  auto: { zIndex: 'auto' },
  0: { zIndex: 0 },
  10: { zIndex: 10 },
  20: { zIndex: 20 },
  30: { zIndex: 30 },
  40: { zIndex: 40 },
  50: { zIndex: 50 },
  60: { zIndex: 60 },
  70: { zIndex: 70 },
  80: { zIndex: 80 },
  90: { zIndex: 90 },
  100: { zIndex: 100 },
})

export const topVar = createVar()
export const rightVar = createVar()
export const bottomVar = createVar()
export const leftVar = createVar()

export const dynamicTopStyle = style({
  top: topVar,
})

export const dynamicRightStyle = style({
  right: rightVar,
})

export const dynamicBottomStyle = style({
  bottom: bottomVar,
})

export const dynamicLeftStyle = style({
  left: leftVar,
})

// Dimension variables
export const widthVar = createVar()
export const heightVar = createVar()
export const maxWidthVar = createVar()
export const maxHeightVar = createVar()

// Responsive dimension variables
export const widthMobileVar = createVar()
export const widthDesktopVar = createVar()
export const heightMobileVar = createVar()
export const heightDesktopVar = createVar()
export const maxWidthMobileVar = createVar()
export const maxWidthDesktopVar = createVar()
export const maxHeightMobileVar = createVar()
export const maxHeightDesktopVar = createVar()

export const dynamicWidthStyle = style({
  width: widthVar,
})

export const dynamicHeightStyle = style({
  height: heightVar,
})

export const dynamicMaxWidthStyle = style({
  maxWidth: maxWidthVar,
})

export const dynamicMaxHeightStyle = style({
  maxHeight: maxHeightVar,
})

// Responsive dimension styles
export const responsiveWidthStyle = style({
  width: widthMobileVar,
  '@media': {
    'screen and (min-width: 768px)': {
      width: widthDesktopVar,
    },
  },
})

export const responsiveHeightStyle = style({
  height: heightMobileVar,
  '@media': {
    'screen and (min-width: 768px)': {
      height: heightDesktopVar,
    },
  },
})

export const responsiveMaxWidthStyle = style({
  maxWidth: maxWidthMobileVar,
  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: maxWidthDesktopVar,
    },
  },
})

export const responsiveMaxHeightStyle = style({
  maxHeight: maxHeightMobileVar,
  '@media': {
    'screen and (min-width: 768px)': {
      maxHeight: maxHeightDesktopVar,
    },
  },
})

export const widthVariants = styleVariants({
  full: { width: '100%' },
  auto: { width: 'auto' },
  'fit-content': { width: 'fit-content' },
  screen: { width: '100vw' },
  '100%': { width: '100%' },
})

export const heightVariants = styleVariants({
  full: { height: '100%' },
  auto: { height: 'auto' },
  'fit-content': { height: 'fit-content' },
  screen: { height: '100vh' },
  '100%': { height: '100%' },
})

// Direction variables
export const flexDirectionMobileVar = createVar()
export const flexDirectionTabletVar = createVar()
export const flexDirectionDesktopVar = createVar()

export const dynamicFlexDirectionStyle = style({
  flexDirection: flexDirectionMobileVar,
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: flexDirectionTabletVar,
    },
    'screen and (min-width: 992px)': {
      flexDirection: flexDirectionDesktopVar,
    },
  },
})

// Position variables
export const positionMobileVar = createVar()
export const positionDesktopVar = createVar()

export const dynamicPositionStyle = style({
  position: positionMobileVar,
  '@media': {
    'screen and (min-width: 768px)': {
      position: positionDesktopVar,
    },
  },
})

// Justify variables
export const justifyMobileVar = createVar()
export const justifyDesktopVar = createVar()

export const dynamicJustifyStyle = style({
  justifyContent: justifyMobileVar,
  '@media': {
    'screen and (min-width: 768px)': {
      justifyContent: justifyDesktopVar,
    },
  },
})

// Align variables
export const alignMobileVar = createVar()
export const alignDesktopVar = createVar()

export const dynamicAlignStyle = style({
  alignItems: alignMobileVar,
  '@media': {
    'screen and (min-width: 768px)': {
      alignItems: alignDesktopVar,
    },
  },
})

// Gap variables
export const gapVars = {
  mobile: createVar(),
  desktop: createVar(),
}

export const responsiveGapStyle = style({
  gap: gapVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': {
      gap: gapVars.desktop,
    },
  },
})

// Spacing variables and styles
export const paddingVars = { mobile: createVar(), desktop: createVar() }
export const paddingXVars = { mobile: createVar(), desktop: createVar() }
export const paddingYVars = { mobile: createVar(), desktop: createVar() }
export const paddingTopVars = { mobile: createVar(), desktop: createVar() }
export const paddingBottomVars = { mobile: createVar(), desktop: createVar() }
export const paddingStartVars = { mobile: createVar(), desktop: createVar() }
export const paddingEndVars = { mobile: createVar(), desktop: createVar() }

export const marginVars = { mobile: createVar(), desktop: createVar() }
export const marginXVars = { mobile: createVar(), desktop: createVar() }
export const marginYVars = { mobile: createVar(), desktop: createVar() }
export const marginTopVars = { mobile: createVar(), desktop: createVar() }
export const marginBottomVars = { mobile: createVar(), desktop: createVar() }
export const marginStartVars = { mobile: createVar(), desktop: createVar() }
export const marginEndVars = { mobile: createVar(), desktop: createVar() }

// Responsive spacing styles
export const responsivePaddingStyle = style({
  padding: paddingVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': { padding: paddingVars.desktop },
  },
})

export const responsivePaddingXStyle = style({
  paddingInline: paddingXVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': { paddingInline: paddingXVars.desktop },
  },
})

export const responsivePaddingYStyle = style({
  paddingBlock: paddingYVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': { paddingBlock: paddingYVars.desktop },
  },
})

export const responsivePaddingTopStyle = style({
  paddingBlockStart: paddingTopVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': {
      paddingBlockStart: paddingTopVars.desktop,
    },
  },
})

export const responsivePaddingBottomStyle = style({
  paddingBlockEnd: paddingBottomVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': {
      paddingBlockEnd: paddingBottomVars.desktop,
    },
  },
})

export const responsivePaddingStartStyle = style({
  paddingInlineStart: paddingStartVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': {
      paddingInlineStart: paddingStartVars.desktop,
    },
  },
})

export const responsivePaddingEndStyle = style({
  paddingInlineEnd: paddingEndVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': {
      paddingInlineEnd: paddingEndVars.desktop,
    },
  },
})

export const responsiveMarginStyle = style({
  margin: marginVars.mobile,
  '@media': { 'screen and (min-width: 768px)': { margin: marginVars.desktop } },
})

export const responsiveMarginXStyle = style({
  marginInline: marginXVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': { marginInline: marginXVars.desktop },
  },
})

export const responsiveMarginYStyle = style({
  marginBlock: marginYVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': { marginBlock: marginYVars.desktop },
  },
})

export const responsiveMarginTopStyle = style({
  marginBlockStart: marginTopVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': {
      marginBlockStart: marginTopVars.desktop,
    },
  },
})

export const responsiveMarginBottomStyle = style({
  marginBlockEnd: marginBottomVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': {
      marginBlockEnd: marginBottomVars.desktop,
    },
  },
})

export const responsiveMarginStartStyle = style({
  marginInlineStart: marginStartVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': {
      marginInlineStart: marginStartVars.desktop,
    },
  },
})

export const responsiveMarginEndStyle = style({
  marginInlineEnd: marginEndVars.mobile,
  '@media': {
    'screen and (min-width: 768px)': { marginInlineEnd: marginEndVars.desktop },
  },
})
