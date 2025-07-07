export type Color = keyof typeof colorsTokens;

export const colorsTokens = {
    neutral_white: 'neutral_white',
    neutral_lightest: 'neutral_lightest',
    neutral_lighter: 'neutral_lighter',
    neutral_light: 'neutral_light',
    neutral: 'neutral',
    neutral_dark: 'neutral_dark',
    neutral_darker: 'neutral_darker',
    neutral_darkest: 'neutral_darkest',
    luxor_gold_lightest: 'luxor_gold_lightest',
    luxor_gold_lighter: 'luxor_gold_lighter',
    luxor_gold_light: 'luxor_gold_light',
    luxor_gold: 'luxor_gold',
    luxor_gold_dark: 'luxor_gold_dark',
    luxor_gold_darker: 'luxor_gold_darker',
    luxor_gold_darkest: 'luxor_gold_darkest',
} as const;
