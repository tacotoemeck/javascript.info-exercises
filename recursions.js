// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.
// An example of the result:

// function sumTo(n) { /*... your code ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Which solution variant is the fastest? The slowest? Why?

// P.P.S. Can we use recursion to count sumTo(100000)?

// loop

function sumTo(n) {
	let sum = 0;

	for ( let i = 1; i <= n; i++) {
		sum+= i
	}

	return sum
}

sumTo(3)

// recursion 

function sumTo(n) {
	if ( n == 1 ) return 1
	return n + sumTo(n-1)
}

sumTo(3)

// Using the arithmetic progression formula.

function sumTo(n) {
	return n * ( n + 1 ) / 2
}



// Calculate factorial
// importance: 4
// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function factorial(n) that calculates n! using recursive calls.

// alert( factorial(5) ); // 120
// P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
	if ( n == 1 ) return 1
	return n *  factorial(n-1)
}

factorial(5)


// 

// Fibonacci numbers
// importance: 5
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

function fib(n) { 

let a = 1;
let b = 1;

for ( let i = 3; i <= n; i++) {
	let c = a + b;
	a = b;
	b = c;
}
return b
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.

//

// Output a single-linked list
// importance: 5
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?

 // recursive

 function printList(list) {
 	alert(list.value)

 	if ( list.next ) 
 		return printList(list.next)
 }

 let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list)


 // loop

function printList(list) {

	let temp = list;

	while(temp) {
		alert(temp.value)
		temp = temp.next
	}


}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list)

// 

// Output a single-linked list in the reverse order
// importance: 5
// Output a single-linked list from the previous task Output a single-linked list in the reverse order.

// Make two solutions: using a loop and using a recursion.

 let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

 function printReverse(list) {
 	

 	if ( list.next ) {
 	  printReverse(list.next)
 	}
 	alert(list.value)
 }

 printReverse(list)








 // loop

function printReverse(list) {

	let temp = list;
	let listArr = [];

	while(temp) {
		listArr.unshift(temp.value)
		temp = temp.next
	}
console.log(listArr)
 for ( var i = 0; i < listArr.length; i++) {
 	alert(listArr[i])
 }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printReverse(list)