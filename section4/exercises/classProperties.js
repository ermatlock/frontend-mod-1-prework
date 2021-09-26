/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {

}
var chocolateLab = new Dog();
var blackLab = new Dog();

console.log(chocolateLab);
console.log(blackLab);

// Prompt 2: Snack
class Snack {

}
var trailMix = new Snack;
var nugoBar = new Snack;

console.log(trailMix);
console.log(nugoBar);

// Prompt 3: Shirt
class Shirt {

}
var buttonDown = new Shirt;
var tee = new Shirt;

console.log(buttonDown);
console.log(tee);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class DogState {
  constructor() {
    this.hairColor = 'brown';
    this.heightInches = 24;
    this.weightLbs = 80;
  }

}
var chocolateLab = new DogState();

console.log(chocolateLab);


// Prompt 2: Snack
class SnackState {
  constructor() {
  this.sweet = true;
  this.salty = true;
  this.consistency = ['crunchy', 'chewy'];
  }

}

var trailMix = new SnackState;

console.log(trailMix);

// Prompt 3: Shirt
class ShirtState {
  constructor() {
  this.buttons = true;
  this.sleeves = 'long';
  this.dressStyle = ['business', 'formal'];
  }
}
var buttonDown = new ShirtState;

console.log(buttonDown);


//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class DogDynamic {
  constructor(hairColor, heightInches, weightLbs) {
    this.hairColor = hairColor;
    this.heightInches = heightInches;
    this.weightLbs = weightLbs;
  }

}
var chocolateLab = new DogDynamic('brown', 24, 80);

console.log(chocolateLab);
// Prompt 2: Snack
class SnackDynamic {
  constructor(sweet, salty, consistency) {
  this.sweet = sweet;
  this.salty = salty;
  this.consistency = consistency;
  }

}

var trailMix = new SnackDynamic(true, true, ['crunchy, chewy']);

console.log(trailMix);

// Prompt 3: Shirt
class ShirtDynamic {
  constructor(buttons, sleeves, dressStyle) {
  this.buttons = buttons;
  this.sleeves = sleeves;
  this.dressStyle = dressStyle;
  }
}
var dressShirt = new ShirtDynamic(true, 'long', ['business', 'formal']);

console.log(dressShirt);
