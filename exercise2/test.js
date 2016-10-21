var solution = require('./solution')

var test = require('colored-tape');
test('Test Fruit Salad', function (t) {
  t.plan(3);
  t.equal(typeof solution, 'function', "Solution should be type 'function'");
  t.equal(solution(2, 4), 4, "Given input (2,4), should return 4");
  t.equal(solution(11, -2), 11, "Given input (11,-2), should return 11");
  t.end();
});