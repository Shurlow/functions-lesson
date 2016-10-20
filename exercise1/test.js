var solution = require('./solution')
var test = require('colored-tape');

test('Test Fruit Salad', function (t) {
  t.plan(2);
  t.equal(typeof solution, 'function', "Solution should be type 'function'");
  t.equal(solution(), 'i love fruit salad', "Function output should match 'i love fruit salad' ");
  t.end()
});

