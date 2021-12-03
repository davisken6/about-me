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

  let attemptsRemain = 6;
  let response7 = ['restaurant', 'call center', 'car dealership']
  let answeredCorrectly = false;
  while (attemptsRemain && !answeredCorrectly) {
    let response = prompt('You have ' + attemptsRemain + ' attempts.' + ' Where is a place I have worked?').toLowerCase();
    for (let i = 0; i < response7.length; i++)
      if (response === response7[i]) {
        alert('That\'s correct!');
        answeredCorrectly = true;
        
      }

  }
  attemptsRemain--;
}
numberSeven();

alert('I\'ve worked at a restaurant, call center, and car dealership.');

let userName = prompt('What is your name?'); {

  alert('Welcome to my page, ' + userName + '!');

  alert('Thanks for checking out my webpage, ' + userName + '! ' + 'You got ' + correctAnswers + ' out of 7 right!');
}
