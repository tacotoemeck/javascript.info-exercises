// output even numbers in the loop
// importance: 5
// Use the for loop to output even numbers from 2 to 10.



for (var i = 0; i < 10; i++) {
	if(i % 2==0)
	console.log(i)
}


// Replace "for" with "while"
// importance: 5
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

//  for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
let i = 0
while(i<3) {
	i++;
	alert(`number ${i}!`)
}

// Repeat until the input is correct
// importance: 5
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

let num;

do {
	num = prompt("Enter a number") 
} while (num <= 100)

