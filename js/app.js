'use strict';

//console.log('Hello World');

let answerOne = prompt('Am I from NC?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y'){
  //console.log('Yes, I am from NC!');
  alert('Yes, I am from NC!');
}

let answerTwo = prompt('Am I under 30?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y'){
  //console.log('Correct, I am under 30.');
  alert('Correct, I am under 30.');
}

let answerThree = prompt('Have I worked in the tech industry previously?').toLowerCase();

if (answerThree === 'no' || answerThree === 'n'){
//console.log('True, I am new to the tech industry!');
alert('True, I am new to the tech industry!');
}

let answerFour = prompt('Have I ever been a food/beverage server?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y');
//console.log('Yes, I am still a server unfortunately.');
alert('Yes, I am still a server unfortunately.');

let answerFive = prompt('Do I work in Greensboro?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y');
//console.log('Yes, I work in Greensboro.');
alert('Yes, I work in Greensboro.');

let answerSix = prompt('Guess a number between 1 and 100.');

if (answerSix === '6' || answerSix === 'six');
//console.log('Correct!');
alert('You got it right!');

if (answerSix < '6');
alert('Too low!');

if (answerSix > '6');
alert('Too high!');


let userName = prompt('What is your name?');

alert('Welcome to my page, ' + userName);

alert('Thanks for checking out my website, ' + userName);

