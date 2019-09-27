// Sum the properties
// importance: 5
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {

 return Object.values(salaries).reduce((a,b) => a + b)

}

sumSalaries(salaries)

//



// alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {

	sum = 0;

   for ( let salary of Object.values(salaries) ) {
   	sum+=salary
   }
return sum
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

sumSalaries(salaries)


//

// Count properties
// importance: 5
// Write a function count(obj) that returns the number of properties in the object:


// Try to make the code as short as possible.

// P.S. Ignore symbolic properties, count only “regular” ones.

function count(obj) {
	return Object.values(obj).length
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2