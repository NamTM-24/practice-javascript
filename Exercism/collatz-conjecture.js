//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number, count = 0) => {
  if (number <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  if (number === 1) {
    return count;
  }

  if (number % 2 === 0) {
    number = number / 2;
    return steps(number, count + 1);
  } else {
    number = number * 3 + 1;
    return steps(number, count + 1);
  }
};

steps(12);
console.log("RESULT:", steps(12));
