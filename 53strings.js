// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

// ucFirst("john") == "John";

function ucFirst(name) {
	return name[0].toUpperCase() + name.substring(1)
}

ucFirst("John")


//

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {
	newStr = str.toLowerCase()
	return ( newStr.includes('viagra') || newStr.includes('xxx')) ?  true : false;
	
}

checkSpam('buy ViAgRA now')


///

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"


function truncate(str, maxlength) {
	if ( str.length < maxlength) {
		return str;
	} else { 
		return str.slice(0,(maxlength-1)) + "...";
	}
}

truncate("What I'd like to tell on this topic is:", 20)


//

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

// The example:

// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
	return Number(str.slice(1))
}

extractCurrencyValue('$120')

// 


function positiveSum(arr) {
  
  return arr.filter(val=> val > 0).reduce((a,b)=> a+b)
}
positiveSum([1,-2,3,4,5]); // 13