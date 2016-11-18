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
