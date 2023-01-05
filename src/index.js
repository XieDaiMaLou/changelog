console.log("index.js");

const delay = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms)
});
console.log('end')
