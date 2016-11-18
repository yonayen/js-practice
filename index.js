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

var num;

while (num >= -10 && num <= 19) {
  console.log(num);
  num++;
}

// all even numbers b/w 10 and 40

var num;

while (num >= 10 && num <= 40) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// all odd numbers between 300 and 333

var num;

while (num >= 300 && num <= 333) {
  if (num % 2 !==0 ) {
    console.log(num);
  }
  num++;
}

// all numbers divisble by 5 and 3 between 5 and 50

var num;

while (num >= 5 && num <= 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}
