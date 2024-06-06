import { countBy, every } from "lodash";

/**
 * Verify whether or not string `b` can be formed of a rearrangement of string
 * `a`.
 *
 * Equivalent to whether for each letter in `b`, there exist enough copies of
 * that letter in `a`.
 *
 * @param a String which should be rearranged to form `b`.
 * @param b String which should be created from `a`.
 *
 * @returns Whether `b` can be formed from `a`.
 */
const canBeRearranged = (a: string) => {
  const corpus = countBy(a);
  return (b: string) =>
    every(countBy(b), (amt, key) => (corpus[key] ?? 0) >= amt);
};

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
  dict.filter(canBeRearranged(input));
