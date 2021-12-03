'use strict';

let correctAnswers = 0;

//console.log('Hello World');
function state() {
  let answerOne = prompt('Am I from NC?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    //console.log('Yes, I am from NC!');
    alert('Yes, I am from NC!');
    correctAnswers++;
  }
}
state();

function age() {
  let answerTwo = prompt('Am I under 30?').toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    //console.log('Correct, I am under 30.');
    alert('Correct, I am under 30.');
    correctAnswers++;
  }
}
age();


function tech() {
  let answerThree = prompt('Have I worked in the tech industry previously?').toLowerCase();

  if (answerThree === 'no' || answerThree === 'n') {
    //console.log('True, I am new to the tech industry!');
    alert('True, I am new to the tech industry!');
    correctAnswers++;
  }
}
tech();

function server() {
  let answerFour = prompt('Have I ever been a food/beverage server?').toLowerCase();

  if (answerFour === 'yes' || answerFour === 'y');
  //console.log('Yes, I am still a server unfortunately.');
  alert('Yes, I am still a server unfortunately.');
  correctAnswers++;
}
server();

function city() {
  let answerFive = prompt('Do I work in Greensboro?').toLowerCase();

  if (answerFive === 'yes' || answerFive === 'y');
  //console.log('Yes, I work in Greensboro.');
  alert('Yes, I work in Greensboro.');
  correctAnswers++;
}
city();

function guessingGame() {

  let answerSix = prompt('Guess a number between 1 and 10.');
  let numGuess = 0

  while (numGuess < 5) {
    if (answerSix == '6') {
      console.log('Correct!');
      alert('You got it right!');
      correctAnswers++;
      break;
    } else if (answerSix < 6) {
      answerSix = prompt('Too Low!');
      numGuess++;
    } else if (answerSix > 6) {
      answerSix = prompt('Too High!');
      numGuess++;
    }
  }
}
guessingGame();


function numberSeven() {

  let response7 = ['restaurant', 'call center', 'car dealership']

  let numGuess2 = 0;

  while (numGuess2 < 7) {
    let answerSeven = prompt('Where is a place I have worked?').toLowerCase();

    if (answerSeven === response7[0 || 1 || 2]) {
      alert('That\'s right!');
      correctAnswers++;
      numGuess2 = 6;
    } else {
      numGuess2++;
      alert('Nope, sorry.');
    }
  }
}
numberSeven();

alert('I\'ve worked at a restaurant, call center, and car dealership.');

  let userName = prompt('What is your name?'); {

  alert('Welcome to my page, ' + userName);

  alert('Thanks for checking out my webpage, ' + userName + '! ' + 'You got ' + correctAnswers + 'out of 7 right!');
