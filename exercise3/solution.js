/* Exercise:
Write a function called countChar that takes a string and a character
and returns the number of occurrences of that character found in the string.
(Hint: <string>.charAt(x)  )
*/
var count = 0
var sum = function(numbers) {
  for(var i = 0; i < numbers.length; i++) {
    count = count + numbers[i]
  }
};

sum([1,2,3])
console.log(count)

//Ignore this line bellow. Just used to help test your solution.
module.exports = sum