
/* Exercise:
Write a function called fruitSalad that takes a string
as a parameter and returns this input string with trailing word 'salad'
*/
var fruitSalad = function(fruit) {
  return fruit + ' salad'
}


//When youre ready to test uncomment this line and call node :
// module.exports = fruitSalad

// Ignore this: just used for testing you answer!
// var test = require('tape');
// function runTest() {
//   var test = require('colored-tape');
//   test('Test Fruit Salad', function (t) {
//     t.plan(2);
//     t.equal(typeof fruitSalad, 'function', 'Test function definition');
//     t.equal(fruitSalad('banana'), 'banana salad', 'Check function output');
//     t.end()
//   });
// }