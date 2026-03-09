// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time;
  switch (name) {
    case "Pure Strawberry Joy":
      time = 0.5;
      return time;
    case "Energizer":
      time = 1.5;
      return time;
    case "Green Garden":
      time = 1.5;
      return time;
    case "Tropical Island":
      time = 3;
      return time;
    case "All or Nothing":
      time = 5;
      return time;
    default:
      time = 2.5;
      return time;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let count = 0;
  while (limes.length > 0) {
    if (limes[count] === "small") {
      wedges += 6;
      count++;
    } else if (limes[count] === "medium") {
      wedges += 8;
      count++;
    } else {
      wedges += 10;
      count++;
    }
    limes.slice(count, 1);
    if (wedgesNeeded === wedges) {
      break;
    }
  }
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = 0;
  let arr = [];

  for (let i = 0; i < orders.length; i++) {
    if (time < timeLeft) {
      time += timeToMixJuice(orders[i]);
    } else {
      arr.push(orders[i]);
    }
  }
  return arr;
}
