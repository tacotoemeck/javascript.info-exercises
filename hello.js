// Hello Object

let user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

delete user.name;


/// 

// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:


function isEmpty (obj) {
	for ( let key in obj) {
		return false
	}
	return true
}



let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

//

// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
  };

function sumSallaries(salaries) {
	let salariesTotal = 0;
	for ( let key in salaries ) {
		salariesTotal+= salaries[key];
	}
return salariesTotal
}

sumSallaries(salaries)

//

// Multiply numeric properties by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {

	for ( let key in obj) {
		if (!isNaN(obj[key])) {
			obj[key] = obj[key] * 2
		}
	}
return obj
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu)