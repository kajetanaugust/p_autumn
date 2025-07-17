import type {TextTag, TextVariant} from "./types.ts";

export const getDefaultTag = (variant: TextVariant): TextTag => {
    switch (variant) {
        case 'heading-1': return 'h1';
        case 'heading-2': return 'h2';
        case 'heading-3': return 'h3';
        case 'heading-4': return 'h4';
        case 'heading-5': return 'h5';
        case 'heading-6': return 'h6';
        case 'text-large':
        case 'text-medium':
        case 'text-regular':
        case 'text-small':
        case 'text-tiny':
            return 'p';
        case 'tagline':
            return 'span';
        default:
            return 'p';

    }
};
