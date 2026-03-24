const BOOK_COST = 800;
const DISCOUNT = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};
export const cost = (books) => {
  let total = 0;
  const groups = [];
  while (books.length > 0) {
    const group = [];
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      if (!group.includes(book)) {
        group.push(book);
        books.splice(i, 1);
        i--;
      }
    }
    groups.push(group);
  }

  for (let j = 0; j < groups.length; j++) {
    for (let k = j + 1; k < groups.length; k++) {
      if (groups[j].length === 5 && groups[k].length === 3) {
        groups[k].push(groups[j].pop());
      }
    }
  }

  groups.forEach((group) => {
    total += group.length * (BOOK_COST - BOOK_COST * DISCOUNT[group.length]);
  });

  return total;
};

cost([1, 1, 3, 3, 5, 6, 7, 7]);
