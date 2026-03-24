//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (input) => {
  const res = {};
  for (const key in input) {
    const arr = input[key];
    for (const value of arr) {
      res[value.toLowerCase()] = Number(key);
    }
  }
  console.log(res);
  return res;
};
const input = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};
transform(input);
