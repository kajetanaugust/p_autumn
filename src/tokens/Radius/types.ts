import type {ValueOf} from "type-fest";
import {radius} from "./index.ts";

export const radiusVariants = {
    RADIUS_LG: radius.lg,
    RADIUS_MD: radius.md,
    RADIUS_SM: radius.sm,
}

export type Radius = ValueOf<typeof radiusVariants>


