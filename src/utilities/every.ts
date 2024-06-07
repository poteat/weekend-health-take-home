/**
 * Whether or not every key-value pair on `obj` returns true when applied to the
 * predicate `f`.
 *
 * @param obj Input object to check the predicate for.
 * @param f Predicate which returns a boolean and takes in a key-value pair.
 *
 * @returns Whether or not each entry in `obj` returns true for predicate `f`.
 */
export const every = <T>(
  obj: Record<string, T>,
  f: (x: T, key: string) => boolean
) => Object.entries(obj).every(([key, value]) => f(value, key));
