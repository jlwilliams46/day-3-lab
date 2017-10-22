'use strict';

function day3Lab() {
  //total counter start point
  var correctTotalAnswers = 0;
  //my 5 questions
  var questions = ['How many kids does heath have?', 'how many hats does heath have?', 'where does he live at?', 'what is his fav food?', 'does he wear glasss?'];
  //my right answer
  var rightAnswers = ['0', '5', 'seattle', 'pizza', 'y'];

  //starting point and asking user name
  var user = prompt('Hello Curious person!!!! what is your name?');
  console.log('user name:', user);

  alert('Hello ' + user + '!, please anser any Yes/No qeustions with either Y/N. So lets get going!');
  //end of intro, have user name now

  //test function
  function ask(questions,rightAnswers) {
    var userAnswer = prompt(questions);
    console.log(questions, user + ' answers ' + userAnswer);
    if (rightAnswers === userAnswer.toLowerCase()) {
      alert('you are right!');
      correctTotalAnswers++;
    } else {
      alert('nope, that is wrong!');
    }
  }
  //end function

  // for loop for function
  for (var i = 0; i < questions.length; i++) {
    ask(questions[i], rightAnswers[i]);
  }
  //end of loop

  //starting of #6
  var number;
  var counter = 1;
  var maxGuesses = 4;
  //while loop
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
  //end of while loop
  console.log('counter:', counter); // counter for #6

  //var for #7 question
  var lived = ['japan', 'korea', 'oregon', 'florida', 'nevada', 'guam','california'];
  var correctAnswer = false;
  counter = 0;
  //start of while/for loop
  while(counter < 6 && correctAnswer === false) { // while loop starts here
    var answer = prompt('what State/country has Heath lived in?');
    //start of for loop
    for(var j = 0; j < lived.length; j++) { //for loop starts here
      console.log('each iteration:', lived[j]);
      //do stuff here
      if (answer.toLowerCase() === lived[j]) {
        alert('nice job, you got it right!');
        correctAnswer = true;
        correctTotalAnswers++;
        break;
      }
    } // end of for loop
    counter++;
    if (correctAnswer === false) {
      alert('nope - you are wrong');
    } // end of while loop
  }
  console.log('counter:', counter); // counter for #7

  alert('Congrats! ' + user + ' you got ' + correctTotalAnswers + ' out of 7!');
}

day3Lab();
