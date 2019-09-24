// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

let styles = ["Jazz", "Blues"]

styles.push("Rock-n-Roll")

styles[Math.floor((styles.length -1) / 2)] = "Classics"

alert(styles.shift())

styles.unshift("Rap", "Reggae");

console.log(styles)

//

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {
	let arr = []

while ( true ) {
	let value = prompt("Enter a number", 0)

	if ( value === "" || value === null || !isFinite(value)) break;

	arr.push(Number(value))
}

alert(arr.reduce((a,b)=> a+b))
}

sumInput()

//

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:
                        
//getMaxSubSum([-1, 2, 3, -9]) = 5 (the sum of highlighted items)

// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (take all)
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0
// Please try to think of a fast solution: O(n2) or even O(n) if you can.

function getMaxSubSum(arr) {

let maxSum = 0;
let partialSum = 0;

for ( let i = 0; i < arr.length; i++) {
	partialSum +=arr[i];
	
	console.log(maxSum)
	maxSum = Math.max(maxSum, partialSum);
	if (partialSum < 0 ) partialSum = 0;
}
return maxSum
}

getMaxSubSum([-1, 2, 3, -9, 11])