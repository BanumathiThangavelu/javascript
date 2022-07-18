//sample function
function addition() {
  console.log(2 + 3);
}

addition();

//passing attributes
function sub(a, b) {
  console.log(a - b);
}

sub(5, 2);

//return
function samplefun(a, b) {
  return a + b;
}
x = samplefun(4, 7);
console.log(x);

//anonymous function
sample_function = function () {
  console.log("anonymous function");
};
sample_function();

//callback function
function mainFun(getcallFun) {
  console.log("Main function executed");
  getcallFun();
}
function callback() {
  console.log("callback function executed");
}
mainFun(callback);

//self invoking function ()()
(function sampleFunction() {
  console.log("Self Invoking Function");
})();

//setTimeout
/*setTimeout(() => {
  console.log("Execute after 4sec");
}, 4000);

//setInterval
setInterval(() => {
  console.log("Execute every two seconds");
}, 2000);*/

//promise -ES6
