export const fonts = {
    primary: 'Merriweather, Georgia, "Times New Roman", serif',
    secondary: 'Karla, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
} as const;

export type FontFamily = keyof typeof fonts;
