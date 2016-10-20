var solution = require('./solution')

var test = require('colored-tape');
test('Test Fruit Salad', function (t) {
  t.plan(2);
  t.equal(typeof solution, 'function', "Solution should be type 'function'");
  t.ok(solution().contains('salad'), true)
  // t.equal(solution(), 'banana salad', "Function output should match fruit + 'salad' ");
  t.end()
});