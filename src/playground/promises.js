const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Nelson Izquierdo',
    //   age: 35
    // });
    // resolve('this is my resolved data number 2'); //ignorada
    reject('Something went wrong!')
  }, 5000);
});

console.log('antes');
promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});
// promise.then((data) => {
//   console.log('2', data);
// });
console.log('despues');