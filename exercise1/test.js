var solution = require('./solution')
console.log(solution)

var test = require('colored-tape');
test('Test Fruit Salad', function (t) {
  t.plan(2);
  t.equal(typeof solution, 'function', 'Test function definition');
  t.equal(solution('banana'), 'banana salad', 'Check function output');
  t.end()
});