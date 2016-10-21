//Answers to excercises 1-3

//Exercise #1
var fruitSalad = function() {
  return 'i love fruit salad'
}

//Exercise #2
var max = function(x1, x2) {
  if (x1 > x2) {
    return x1
  } else {
    return x2
  }
}

//Exercise #3
var countChar = function(string, char) {
  var count = 0;
  for(var i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) === char) {
      count = count + 1
    }
  }
  return count
};