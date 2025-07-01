import {shadows} from "./index.ts";
import type {ValueOf} from "type-fest";

export const shadowVariants = {
    SHADOW_XXS: shadows.xxs,
    SHADOW_XS: shadows.xs,
    SHADOW_SM: shadows.sm,
    SHADOW_MD: shadows.md,
    SHADOW_LG: shadows.lg,
    SHADOW_XL: shadows.xl,
    SHADOW_XXL: shadows.xxl,
}


export type Shadow = ValueOf<typeof shadowVariants>
