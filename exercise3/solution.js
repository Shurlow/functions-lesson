/* Exercise:
Write a function called countChar that takes a string and a character
and returns the number of occurrences of that character found in the string.
(Hint: <string>.charAt(i) returns the character at position i)
*/

var countChar = function(string, char) {
  var count = 0;
  for(var i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) === char) {
      count = count + 1
    }
  }
  return count
};

console.log(countChar('hi mom oooo', 'o'))

//Ignore this line bellow. Just used to help test your solution.
module.exports = countChar