// Create a script that prompts the visitor to enter two numbers and then shows their sum.

// Run the demo

// P.S. There is a gotcha with types.

let firstNum = +prompt("The first number?",0)
let secondNum = +prompt("The second number?",0)

alert(firstNum + secondNum)


//

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.

// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

function readNumber() {
let num

	do {
		num = prompt("enter a number");
} while (isNaN(num));

if (num === null || num === "") return null;

return Number(num)

}

readNumber()

//

// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// Examples of its work:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

function random(min, max) {
	return min + Math.random() * (max-min)
}

random(4,5)