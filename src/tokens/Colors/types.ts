import {colors} from "./index";
import type {ValueOf} from "type-fest";

export const colorVariants = {
    NEUTRAL_WHITE: colors.neutral_white,
    NEUTRAL_LIGHTEST: colors.neutral_lightest,
    NEUTRAL_LIGHTER: colors.neutral_lighter,
    NEUTRAL_LIGHT: colors.neutral_light,
    NEUTRAL: colors.neutral,
    NEUTRAL_DARK: colors.neutral_dark,
    NEUTRAL_DARKER: colors.neutral_darker,
    NEUTRAL_DARKEST: colors.neutral_darkest,
    LUXOR_GOLD_LIGHTEST: colors.luxor_gold_lightest,
    LUXOR_GOLD_LIGHTER: colors.luxor_gold_lighter,
    LUXOR_GOLD_LIGHT: colors.luxor_gold_light,
    LUXOR_GOLD: colors.luxor_gold,
    LUXOR_GOLD_DARK: colors.luxor_gold_dark,
    LUXOR_GOLD_DARKER: colors.luxor_gold_darker,
    LUXOR_GOLD_DARKEST: colors.luxor_gold_darkest,
}

export type Color = ValueOf<typeof colorVariants>
