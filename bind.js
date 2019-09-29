// Fix a function that loses "this"
// importance: 5
// The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.

// But it leads to an error. Why?

// Fix the highlighted line for everything to start working right (other lines are not to be changed).

"use strict"

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user) , user.loginFail.bind(user));

// 

// Partial application for login
// importance: 5
// The task is a little more complex variant of Fix a function that loses "this".

// The user object was modified. Now instead of two functions loginOk/loginFail, it has a single function user.login(true/false).

// What to pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
// Your changes should only modify the highlighted fragment.