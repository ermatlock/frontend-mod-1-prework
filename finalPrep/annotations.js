// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Create function buildABear with the 5 parameters (name, age, fur, clothes, specialPower)
function buildABear(name, age, fur, clothes, specialPower) {
  // declare variable greeting - value is a string, interpolating the name parameter
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // declare the variable demographics - Vakue is an array containing the name and age parameters
  var demographics = [name, age];
  // declare the variable powerSaying - Value is a string with parameter specialPower concatenated in
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declare an object builtBear and add 6 key value pairs
  var builtBear = {
    // declare key value basicInfo - value is variable demographics
    basicInfo: demographics,
    // declare key value clothes - value is parameter clothes
    clothes: clothes,
    // declare key value exterior - value is parameter fur
    exterior: fur,
    // declare key value cost - value is a static number 49.99
    cost: 49.99,
    // declare key value sayings - value is an array with 3 parameters (variable greeting, variable powerSaying, and string "Goodnight my friend!" )
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // declare key value isCuddly - value is boolean and is assigned to static value true
    isCuddly: true,
  };
// run return function to print the object builtBear
  return builtBear
}
// print object instance buldABear with arguments ('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares') assigned
// buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// print object instance buldABear with arguments ('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in') assigned
// buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');


//FizzBuzz
// Create function fizzBuzz with parameters (num1, num2, range)
function fizzBuzz(num1, num2, range) {
// create for loop with i incremented by 1 until reaching value range
  for (var i = 0; i <= range; i++) {
    // create if statement with logical operator stating that if i % of parameter num1 is strictly equal to zero and i % parameter num2 is also strictly equal to zero, then true, otherwise false - if true, log the string "fizzbuzz"
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // create else if statement stating that if i % num1 is strictly equal to zero, then log the string "fizz".
    } else if (i % num1 === 0) {
      console.log('fizz');
      // create another else if statement stating that if i % of parameter num2 is strictly equal to 0 then log the string "buzz"
    } else if (i % num2 === 0) {
      console.log('buzz');
      // create else statement stating that if there is any result other than the other three statements, then log to the console the value i
    } else {
      console.log(i);
    }
  }
}
// create object instance fizzBuzz with arguments (3, 5, 100)
fizzBuzz(3, 5, 100);
// create another instance fizzBuzz with arguments (5, 8, 400)
fizzbuzz(5, 8, 400);
