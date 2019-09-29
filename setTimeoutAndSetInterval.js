// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.

function printNumbers(from, to) {

 for ( let i = from; i < to; i++ ) {
 	alert(i)
 }

}

// use timeOut
setTimeout(printNumbers, 1000, 1, 10)


//use setInterval

setInterval(() => )