// @ts-check

/**
 * Get the first card in the given deck
 *
 */
export function getFirstCard(deck) {
  const [a, ...b] = deck;
  console.log(a);
  return a;
}

/**
 * Get the second card in the given deck
 *
 */
export function getSecondCard(deck) {
  const [a, b, ...c] = deck;
  return b;
}

/**
 * Switch the position of the two cards
 * *
 */
export function swapTwoCards(deck) {
  const [a, b, ...c] = deck;
  return [b, a, ...c];
}

/**
 * Rotate (shift) the position of the three cards (by one place)

 */
export function shiftThreeCardsAround(deck) {
  const a = deck[0];
  const rest = deck.slice(1);
  return [...rest, a];
}

/**
 * Grab the chosen pile from the available piles
 *
 */
export function pickNamedPile(piles) {
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
  const { chosen, ...a } = piles;
  console.log(piles);
  console.log(chosen);
  console.log(a);
  return chosen;
}

/**
 * Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile
 *
 */
export function swapNamedPile(piles) {
  // 🪄 Don't break the magic.
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
  // 🚨 Do NOT touch the next line or Elyse will accidentally reveal the trick.
  const { chosen: disregarded, disregarded: chosen } = piles;
  console.log({ chosen, disregarded });
  return { chosen, disregarded };
}
