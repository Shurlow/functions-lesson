var solution = require('./solution')

var test = require('colored-tape');
test('Test Fruit Salad', function (t) {
  t.plan(3);
  t.equal(typeof solution, 'function', "Solution should be type 'function'");
  t.equal(solution('hi mom', 'm'), 2, "Should count 2 'm's in the string 'hi mom' ");
  t.equal(solution('see ya later aligator', 'a'), 4, "Should count 4 'a's in the string 'see ya later aligator' ");
  t.end()
});