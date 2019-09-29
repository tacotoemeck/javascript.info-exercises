// Sum with closures
// importance: 4
// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {
	return function(b) {
		return a + b
	}
}

sum(1)(2) 

//

// Filter through function
// importance: 5
// We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
// The usage must be like this:

// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
// arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
// For instance:


function inBetween(a,b) {
	return function(x) {
		return x >= a && x <= b
	}
}

function inArray(arr) {
	return function(z) {
		return arr.includes(z)
	}
}


let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// 

// Sort by field
// importance: 5
// We’ve got an array of objects to sort:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// The usual way to do that would be:

// // by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Can we make it even less verbose, like this?

// users.sort(byField('name'));
// users.sort(byField('age'));
// So, instead of writing a function, just put byField(fieldName).

// Write the function byField that can be used for that.


function byField(field) {
	return (a,b) => a[field] > b[field] ? 1 : -1
}

// 

// Army of functions
// importance: 5
// The following code creates an array of shooters.

// Every function is meant to output its number. But something is wrong…

 function makeArmy() {
  let shooters = [];
  
  for ( let i = 0; i < 10; i++ ) {
    let shooter = function() { // shooter function
      alert( i ); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...
// Why all shooters show the same? Fix the code so that they work as intended.
