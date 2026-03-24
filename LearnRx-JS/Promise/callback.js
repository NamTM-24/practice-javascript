const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  resolve("Promise 3 ");
});

p1.then((data) => {
  console.log(data);
  return p2;
})
  .then((data) => {
    console.log(data);
    return p3;
  })
  .then((data) => {
    console.log(data);
  });
