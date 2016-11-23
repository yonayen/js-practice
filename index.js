var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var whatIsAge = prompt("How old are you?");

alert("Your full name is " + firstName + " " + lastName);
alert("You're " + whatIsAge + " years old");


// Conditional Exercise

// age is negative or less than 0
if(age < 0) {
  console.log("Come back once you're out of the womb");
}

// if age is 21
if(age === 21) {
  console.log("Happy 21st Birthday");
}

// if age is odd (not divisible by 2)
if(age % 2 !== 0) {
  console.log("Your age is odd!");
}

// if age is perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square");
}

// While loops

var count = 1;

while (count < 10) {
  console.log("count is: " + count);
  count+= 4;
}

//  Second While Exercise

var str = "hello";

var count = 0;

while (count < str.length) {
  console.log(str[count]);
  count++;
}

// all numbers b/w -10 and 19

var num = -10;

while (num <= 19) {
  console.log(num);
  num++;
}

// --- USING FOR LOOP -- //

for (i = -10; i <= 19; i++) {
  console.log(i);
}

// all even numbers b/w 10 and 40

var num = 10;

while (num <= 40) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// -- USING FOR LOOP -- //

for (i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// all odd numbers between 300 and 333

var num = 300;

while (num <= 333) {
  if (num % 2 !==0 ) {
    console.log(num);
  }
  num++;
}

//-- USING FOR LOOP --//

for (i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// all numbers divisble by 5 and 3 between 5 and 50

var num = 5;

while (num <= 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}

// -- USING FOR LOOP --//

for (i = 5; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}

// -- RETURN KEYWORD -- //
// create function that capitalizes first character in a string //

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice.(1);
}

var city = "paris"; // paris
var capital = capitalize(city); // Paris

 // Capture the returned value in a variable 'capital'

 function capitalize(str) {
   if(typeof str === "number") {
     return "that's not a string!"
   }
   return str.charAt(0).toUpperCase() + str.slice(1);
 }

 var city = "paris";    // "paris"
 var capital = capitalize(city);  // "Paris"

 var num = 37;
 var capital = capitalize(num);  //"that's not a string"

// isEven() -- write function that takes single numeric argument and returns true if even/ false if otherwise

function isEven(num) {
  if (num % 2 === 0) {
    return "true: the number is even";
  }
  else {
    return "false: that was not even";
  }
}

// factorial() -- write function that takes single number and returns its factorial

function recursiveFactorial(num) {
  if (num === 0){
    return 1;
  }
  else {
    return num * recursiveFactorial(num - 1);
  }
}

function iterativeFactorial(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) {
    rval *= i;
  }
  return rval;
}

 // kebabToSnake() function -- takes string and replace every "-" with "_"

 function kebabToSnake(string) {

 }

 // ARRAY Section

 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var colors = ["red", "orange", "yellow", "green"];

 numbers.forEach(function(color){
   if(color%3 === 0) {
     console.log(color);
   }
 });
