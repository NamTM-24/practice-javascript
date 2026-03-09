const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});
