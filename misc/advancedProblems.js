  function f(f){
    return typeof f();
  }
  f(function(){ return 1; });

  "number"

var f = (function f(){ return "1"; }, function g(){ return 2; })();
console.log(typeof f);
  

///

//## 1
// if (!("a" in 'window')) {
//     var a = 1;
// }
// console.log(a)
// alert(a);

//## 2
var a = 1
var b = function a(x) {
  x && a(--x);
};

console.log(a)

// //## 3
function a(x) {
  return x * 2;
}
var a;
console.log(a)

// //## 4
function b(x, y, a) {
  arguments[2] = 10;
  console.log(a);
}
b(1, 2, 3);

// //## 5
function a() {
  console.log(this);
}
a.call(null); 