var x = 'outside';

//Function 1
var f1 = function() {
  var x = 'inside f1'
}
f1();
console.log(x);

//Function 2
var f2 = function() {
  x = 'inside f2'
}
f2();
console.log(x);


//Function 3
var f3 = function(x) {
  return x + ' in'
}

f3('outside')

//Excercise: Write a function that returns
//'inside' when x is 'outside' and vice versa
var f4 = function(x) {
  if (x === 'outside') {
    return 'inside'
  } else if (x === 'inside') {
    return 'outside'
  } else {
    return null
  }
}

exports.func = f4;

// var HyperLoop = function() {
//   this.distance = 0;

//   this.forward = function(distance) {
//     this.distance = this.distance + distance
//     // return 'moving forward...'
//     setTimeout(function() { return 'done' }, 1000)
//   }
  
//   this.stop = function() {
//     return 'stopped at ' + this.distance
//   }
// }

// var stops = {
//   'Seattle': 4.5,
//   'Portland': 3.0,
//   'Vancouver': 5.2
// }

// // HyperLoop Conductor requires a train and list of stops
// var HyperLoopConductor = function(train, stops) {
//   console.log('i am the conductor')
//   for (key in stops) {
//     var distance = stops[key]
//     console.log(distance)
//     console.log(train.forward(distance))
//     // console.log('train is at ', train.distance)
//   }
//   // train.forward()
//   // train.stop()
// }

// HyperLoopConductor(new HyperLoop(), stops)