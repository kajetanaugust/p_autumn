import type {ColorToken} from './types';

export const colors: Record<ColorToken, string> = {
    neutral_white: '#FFFFFF',
    neutral_lightest: '#F2F2F2',
    neutral_lighter: '#DAD9DA',
    neutral_light: '#B5B3B5',
    neutral: '#848184',
    neutral_dark: '#524E52',
    neutral_darker: '#211C21',
    neutral_darkest: '#090309',

    luxor_gold_lightest: '#F5F3EB',
    luxor_gold_lighter: '#ECE7D7',
    luxor_gold_light: '#BEAB73',
    luxor_gold: '#A38837',
    luxor_gold_dark: '#826C2C',
    luxor_gold_darker: '#413616',
    luxor_gold_darkest: '#302810',
};

export type { ColorToken } from './types';
