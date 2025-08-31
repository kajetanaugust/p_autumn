export const spacing = {
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  64: '64px',
  80: '80px',
  84: '84px',
  112: '112px',
} as const

export type SpacingToken = keyof typeof spacing
