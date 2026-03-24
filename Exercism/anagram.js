//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const res = candidates
    .filter((w) => w.toLowerCase() !== target.toLowerCase())
    .filter(
      (w) =>
        w.toLowerCase().split("").sort().join("") ===
        target.toLowerCase().split("").sort().join(""),
    );
  console.log("🚀 ~ findAnagrams ~ res:", res);
  return res;
};

const target = "stone";

const candidates = ["stone", "tones", "banana", "tons", "notes", "Seton"];

findAnagrams(target, candidates);
