var wiggly;
var timeRemaining = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var gameOver = 'GAME OVER'
var isGameRunning = false;
var scoreBoard = $('.score-board');
var timeClock = $('.timer-button-container');

$('#button').hide();
$('#start-game').on('click', start);
$('#see-score').on('click', seeScore);

function clockFormatter(numToConvert) {
  var minutes = Math.floor(numToConvert / 60);
  var seconds = numToConvert - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}

function start() {
  isGameRunning = true;
  startOnlyOnce();
  wiggly = setInterval(function() {
    var converted = clockFormatter(timeRemaining);
    $('#countdown-clock').text(converted)
    timeRemaining--;
    if (timeRemaining < 0) {
      clearInterval(wiggly)
      seeScore();
      timeRemaining = 12;
    }
  }, 1000 * 1)
}

function startOnlyOnce() {
  if (isGameRunning = true) {
    $('#start-game').off()
  }
}

function seeScore() {
  isGameRunning = false;
  checkAnswers();
  clearInterval(wiggly);
}

function reStart() {
  if (isGameRunning = false) {
    $('#start-game').on('click', start);
  }
}

reStart();



function checkAnswers() {

  var question1 = document.avengersQuiz.question1.value;
  var question2 = document.avengersQuiz.question2.value;
  var question3 = document.avengersQuiz.question3.value;
  var question4 = document.avengersQuiz.question4.value;
  var question5 = document.avengersQuiz.question5.value;
  var question6 = document.avengersQuiz.question6.value;
  var question7 = document.avengersQuiz.question7.value;
  var question8 = document.avengersQuiz.question8.value;

  var numberGuessedRight = document.getElementById('correct-answers');
  var numberGuessedWrong = document.getElementById('incorrect-answers');
  var numberUnAnswered = document.getElementById('unanswered')
  var correctAnswers = 0;
  var inCorrectAnswers = 0;
  var unAnswered = 0;

  if (question1 == "sebastian-stan") {
    correctAnswers++;
  } else if (question1 == "ryan-gosling" || question1 == "sebastian-bach" || question1 == "steve-buscemi") {
    inCorrectAnswers++;
  }

  if (question2 == "falsone") {
    correctAnswers++;
  } else if (question2 == "truone") {
    inCorrectAnswers++;
  }

  if (question3 == "worthy") {
    correctAnswers++;
  } else if (question3 == "mighty" || question3 == "superhuman" || question3 == "thor") {
    inCorrectAnswers++;
  };

  if (question4 == "falsTwo") {
    correctAnswers++;
  } else if (question4 == "truTwo") {
    inCorrectAnswers++;
  }

  if (question5 == "23") {
    correctAnswers++;
  } else if (question5 == "21" || question5 == "14" || question5 == "25") {
    inCorrectAnswers++;
  };

  if (question6 == "truThree") {
    correctAnswers++;
  } else if (question6 == "falsThree") {
    inCorrectAnswers++;
  }

  if (question7 == "falsFour") {
    correctAnswers++
  } else if (question7 == "truFour") {
    inCorrectAnswers++;
  }

  if (question8 == "falsFive") {
    correctAnswers++
  } else if (question8 == "truFive") {
    inCorrectAnswers++;
  }



  numberGuessedRight.innerText = correctAnswers;
  numberGuessedWrong.innerHTML = inCorrectAnswers;

}