export const getResponsiveProp = <T>(
  prop: T | [T, T] | [T, T, T],
  propName: string
) => {
  if (!prop) return []

  return Array.isArray(prop)
    ? prop.length === 3
      ? [
          `${propName}-${prop[0]}`,
          `md:${propName}-${prop[1]}`,
          `lg:${propName}-${prop[2]}`,
        ]
      : [`${propName}-${prop[0]}`, `md:${propName}-${prop[1]}`]
    : [`${propName}-${prop}`]
}
