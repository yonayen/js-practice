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

// var num = 5;
//
// while (num <= 50) {
//   if (num % 5 === 0 && num % 3 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// -- USING FOR LOOP --//

for (i = 5; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
