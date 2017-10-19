'use strict';
//asking who they are
var correctTotalAnswers = 0;

var user = prompt('Hello Curious person!!!! what is your name?');
console.log('user name:', user);

alert('Hello ' + user + '! Heath wanted to have fun with you and let you guess a few things about him!');


//asking how many kids he has #1
var kids = prompt('how many kids does Heath have?');
console.log('Heath nub of kids:', kids);

if (kids === '0' || kids === '1') {
  alert('you right.');
  correctTotalAnswers++; //pair programming changes
} else {
  alert('nope, he only has 0! unless you count his wife..J/K');
}

//asking about how many has he has #2
var hats = prompt('how many hats does heath own?');
console.log('heath has this many hats;', hats);

if (hats === '5' || hats === '6') {
  alert('you right again,');
  correctTotalAnswers++; //pair programming changes
} else {
  alert('nope, he only has 5 or was is 6?');
}

//asking what city they are living in #3
var city = prompt('What city does Heath live in?');
console.log('heath lives where:', city);

city = city.toUperCase();//pair programming changes
if (city === 'SEATTLE') {
  alert('Great! you know that he loves the Seattle!');
  correctTotalAnswers++; //pair programming changes
} else {
  alert('nope, he does not live there!');
}

//Asking his favorite food #4
var favFood = prompt('Ok ' + user + ' lets ask a hard one, what is Heath\'s favorite foods?');
console.log('heaths favorite food:', favFood);

food = food.toUpperCase();// pair programming changes
if (favFood === 'PIZZA') {
  alert('YEP! He loves his Pizza!');
  correctTotalAnswers++; //pair progrmamming changes
} else {
  alert('nope, he likes ' + favFood + ' but its not his favorite');
}

//asking if he has glasses #5
var glasses = prompt('So, does Heath have glasses?');
console.log('Does Heath have Glasses:', glasses);

glasses = glasses.toLowerCase();
if (glasses === 'yes' || glasses === 'y') {
  alert('great! you really do know Heath');
  correctTotalAnswers++; //pair programming chnages
} else {
  alert('NOPE! you need to think harder!!!!');
}

//this is the guessing game code
var number;
var counter = 1;
var maxGuesses = 4;

while (number !== 11) {
  number = parseInt(prompt('how many countries has Heath been to?'));

  if (number === 11) {
    alert('Yep, that is right');
    correctTotalAnswers++;
    break;
  } else if (counter >= maxGuesses) {
    break;
  } else if (number < 11) {
    alert('sorry you guessed too low');
    counter++;
  } else if (number > 11){
    alert('sorry you guessed too high');
    counter++;
  } else if (isNaN(number)) {
    alert('please enter a number');
    counter++;
  }

}

console.log('counter:', counter);

//this is for the location based game

var lived = ['japan', 'korea', 'oregon', 'florida', 'nevada', 'guam','california'];
var correctAnswer = false;
counter = 0;

while(counter < 6 && correctAnswer === false) { // while loop starts here
  var answer = prompt('what State/country has Heath lived in?');

  for(var i = 0; i < lived.length; i++) { //for loop starts here
    console.log('each iteration:', lived[i]);
    //do stuff here
    if (answer.toLowerCase() === lived[i]) {
      alert('nice job, you got it right!');
      correctAnswer = true;
      correctTotalAnswers++;
      break;
    }
  } // for loop ends here
  counter++;
  if (correctAnswer === false) {
    alert('nope - you are wrong');
  } // while loop ends here
}

console.log('counter:', counter);

alert('Congrats! ' + user + ' you got ' + correctTotalAnswers + ' out of 7!');
