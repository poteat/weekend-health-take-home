/**
 * Alternative implementation of Lodash's 'countBy' method which takes in a
 * string and returns an accounting of how many instances of each letter exists
 * in the input string.
 *
 * @param s String to provide a count of each character for.
 *
 * @returns How many instances of each character exists in the input string.
 */
export const countBy = (s: string): Record<string, number> =>
  [...s].reduce((obj, c) => ({ ...obj, [c]: obj[c] ?? 0 + 1 }), {});
