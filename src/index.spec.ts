import { findWords } from ".";

const cases: [string, string[], string[]][] = [
  [
    "ate",
    ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
    ["ate", "eat", "tea"],
  ],
  [
    "oogd",
    ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
    ["dog", "do", "god", "goo", "go", "good"],
  ],
  /**
   * No strings can be rearranged from a set of zero strings.
   */
  ["foobar", [], []],
  /**
   * No strings can be arranged from an empty string.
   */
  ["", ["foo"], []],
];

describe("'findWords' utility", () => {
  test.each(cases)(
    "given %p and %p as arguments, returns %p",
    (input, dictionary, expectedResult) => {
      const result = findWords(input, dictionary);
      expect(result).toEqual(expectedResult);
    }
  );
});
