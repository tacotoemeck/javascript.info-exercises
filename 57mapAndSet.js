// Filter unique array members
// importance: 5
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {

  let set = new Set();

 for ( var i = 0; i < arr.length; i++) {
 	set.add(arr[i])
 }
 return Array.from(set)
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
// P.S. Here strings are used, but can be values of any type.

// P.P.S. Use Set to store unique values.


//

// Filter anagrams
// importance: 4
// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Write a function aclean(arr) that returns an array cleaned from anagrams.

// For instance:

function aclean(arr) {
	let map = new Map();

	for ( var i = 0; i < arr.length; i++) {
		let sorted = arr[i].toLowerCase().split('').sort().join('')
		map.set(sorted, arr[i])
	}
return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr))

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// From every anagram group should remain only one word, no matter which one.
