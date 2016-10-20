var solution = require('./solution')

var test = require('colored-tape');
test('Test Fruit Salad', function (t) {
  t.plan(2);
  t.equal(typeof solution, 'function', "Solution should be type 'function'");
  t.equal(solution([1,2,3]), 6, "Sum with input [1,2,3] should equal 6");
  t.end()
});