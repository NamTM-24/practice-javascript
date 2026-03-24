//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  const regex = /[A-Z']+/g;
  return str
    .toUpperCase()
    .match(regex)
    .map((w) => w[0])
    .join("");
};
