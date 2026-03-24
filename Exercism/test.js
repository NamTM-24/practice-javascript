function demo(level) {
  if (level === 2) return;

  console.log("Enter level", level);

  for (let i = 0; i < 2; i++) {
    console.log("Loop", i, "at level", level);

    demo(level + 1);

    console.log("Back to level", level, "after i =", i);
  }

  console.log("Exit level", level);
}

demo(0);
