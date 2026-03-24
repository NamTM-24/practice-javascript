//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (str) => {
  const res = [];
  const regex = /[\s-]/g;
  const arr = str.toLowerCase().replace(regex, "").split("");
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    } else {
      return false;
    }
  }
  return true;
};
isIsogram("six - year - old");
