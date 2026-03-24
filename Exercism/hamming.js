//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (str1, str2) => {
  let count = 0;
  if (str1.length !== str2.length) {
    throw new Error("strands must be of equal length");
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  return count;
};

compute("AAG", "AA2");
