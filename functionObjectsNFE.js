// Set and decrease for counter
// importance: 5
// Modify the code of makeCounter() so that the counter can also decrease and set the number:

// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.
// See the sandbox code for the complete usage example.

// P.S. You can use either a closure or the function property to keep the current count. Or write both variants.

function makeCounter() {
	let count = 0;

  function counter() {
    return count++;
  };

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter
}

//

// Sum with an arbitrary amount of brackets
// importance: 2
// Write function sum that would work like this:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// P.S. Hint: you may need to setup custom object to primitive conversion for your function.

function sum(a) {

	let currentSum = a;

	function f(b) {
		currentSum+= b;
		return f
	}

	f.toString = function() {
		return currentSum;
	};
	return f
}

sum(1)(2)