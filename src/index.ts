// import { countBy, every } from "lodash"

const countBy = (s: string): Record<string, number> =>
  [...s].reduce((obj, c) => ({ ...obj, [c]: obj[c] ?? 0 + 1 }), {});

const every = <T>(obj: Record<string, T>, f: (x: T, key: string) => boolean) =>
  Object.entries(obj).every(([key, value]) => f(value, key));

/**
 * Verify whether or not string `b` can be formed of a rearrangement of string
 * `a`'s corpus (count of each letter)
 *
 * Equivalent to whether for each letter in `b`, there exist enough copies of
 * that letter in `a`'s corpus.
 *
 * @param corpus Corpus of string which should be rearranged to form `b`.
 * @param b String which should be created from `a`.
 *
 * @returns Whether `b` can be formed from `a`'s char count corpus.
 */
const canBeRearranged = (corpus: Record<string, number>, b: string) =>
  every(countBy(b), (amt, key) => (corpus[key] ?? 0) >= amt);

/**
 * Filter elements of `dict` such that those who can be formed from
 * rearrangements of `input` are returned.
 *
 * @param input String which should be rearranged.
 * @param dict List of strings to filter based on `input`.
 *
 * @returns Elements of `dict` which can be formed from `input`.
 */
export const findWords = (input: string, dict: string[]) =>
  dict.filter((x) => canBeRearranged(countBy(input), x));
