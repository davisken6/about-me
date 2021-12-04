'use strict';

let correctAnswers = 0;

function state() {
  let answerOne = prompt('Am I from NC?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    alert('Yes, I am from NC!');
    correctAnswers++;
  } else if (answerOne === 'no' || 'n') {
    alert('That\'s incorrect. I am from the bible belt.');
  }
}

state();

function age() {
  let answerTwo = prompt('Am I under 30?').toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Correct, I am under 30.');
    correctAnswers++;
  } else if (answerTwo === 'no' || 'n') {
    alert('Do I really look like I\'m over 30?!');
  }
}
age();


function tech() {
  let answerThree = prompt('Have I worked in the tech industry previously?').toLowerCase();

  if (answerThree === 'no' || answerThree === 'n') {
    alert('True, I am new to the tech industry!');
    correctAnswers++;
  } else if (answerThree === 'yes' || answerThree === 'y') {
    alert('Thank you for your faith in me!');
  }
}
tech();

function server() {
  let answerFour = prompt('Have I ever been a food/beverage server?').toLowerCase();

  if (answerFour === 'yes' || answerFour === 'y') {
    alert('Yes, I am still a server unfortunately.');
    correctAnswers++;
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert('If only I had been so lucky...');
  }
}
server();

function myCity() {
  let answerFive = prompt('Do I work in Greensboro?').toLowerCase();

  if (answerFive === 'yes' || answerFive === 'y') {
    alert('Yes, I work in Greensboro.');
    correctAnswers++;
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert('One day I will be free from Greensboro...');
  }
}
myCity();

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

let userName = prompt('What is your name?');


alert('Welcome to my page, ' + userName + '!');

alert('Thanks for checking out my webpage, ' + userName + '! ' + 'You got ' + correctAnswers + ' out of 7 right!');

