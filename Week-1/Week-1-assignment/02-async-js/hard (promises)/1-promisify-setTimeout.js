/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(function (resolves, rejects) {
    setTimeout(() => {
      console.log("setTimeout-called-1");
      resolves();
    });
  }, n);
}
function n() {
  console.log("n is called !");
}
wait().then(n);
