// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
	read() {
		this.a = prompt("A?", 0);
		this.b = prompt("B?", 0);
	},
	sum() {
		return Number(this.a) + Number(this.b);
	},
	mul() {
		return Number(this.a) * Number(this.b);
	}
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//


// Chaining


// importance: 2
// There’s a ladder object that allows to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };
// Now, if we need to make several calls in sequence, can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep(); // 1
// Such approach is widely used across JavaScript libraries.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep()