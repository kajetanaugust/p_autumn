import type {ValueOf} from "type-fest";

export const radiusVariants = {
    RADIUS_LG: '40px',
    RADIUS_MD: '32px',
    RADIUS_SM: '24px',
}

export type Radius = ValueOf<typeof radiusVariants>

export type ResponsiveRadius =
    | Radius
    | [Radius, Radius]

