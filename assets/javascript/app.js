// Declaring global variables
var wiggly;
var timeRemaining = 70;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var gameOver = 'GAME OVER'
var scoreBoard = $('.score-board');
var timeClock = $('.timer-button-container');
var gameOver = $('.game-over');
var radioForm = $("form");
var scores = $('.score-board');

// Hiding the button contecting the checkAnswers function b/c it's in the form element in the HTML file.
$('#button').hide();

// These fire off the functions when the start game and see score buttons are clicked.
$('#start-game').on('click', start);
$('#see-score').on('click', seeScore);
$('#reset-score').on('click', resetScore);

// Function for the timer and the conversion to 00:00 format. 
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
  } else if (minutes >= 10) {
    minutes = "00" + minutes
  };
  return minutes + ":" + seconds;
}

// This function starts the timer to countdown. wiggly is te nickname for my Laberador Retriever Taylor. If time runs out, the seeScore function is called and the clock stops at zero.
function start() {
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

// This function makes it so that the start button can only be clicked once. I saw a bug if yopu double clicked the start button, the time count down doubles in speed.
function startOnlyOnce() {
  if (isGameRunning = true) {
    $('#start-game').off()
  }
}

// This function calls on the checkAnswers function to calculate and compare all the scores. It also stops the clock.
function seeScore() {
  isGameRunning = false;
  gameOver.css("display", "block")
  radioForm.css("display", "none")
  scores.css("background", "yellow")
  checkAnswers();
  clearInterval(wiggly);
}

function resetScore() {
  location.reload(true);
};

// I used plain vanilla js for this. I couldn't come up with a way until just now (Monday night) to accurately account for the score if the user clicked one answer but then decided to change their mind. Even with the .off method in JQ, the button checked was counted. I found answers on W3Schools and used the form format with radio buttons. I put the actual button onclick call in the form section under the last input type. 

// I also refactored all the question logic. Originally, I tied everything to a radio button click. With this, I managed to tie the events to the name class in the form input field. This allows me to write conditions for eac question as oppsed to every radio button.
function checkAnswers() {
  // These are local variables for this function
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
  var numberUnAnswered = document.getElementById('unanswered');
  var correctAnswers = 0;
  var inCorrectAnswers = 0;
  var unAnswered = 0;

  // The last else if statement in each contition is from jQuery that I found in the jQuery API docs.
  if (question1 == "sebastian-stan") {
    correctAnswers++;
  } else if (question1 == "ryan-gosling" || question1 == "sebastian-bach" || question1 == "steve-buscemi") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question1']:checked").val())) {
    unAnswered++
  }

  if (question2 == "falsone") {
    correctAnswers++;
  } else if (question2 == "truone") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question2']:checked").val())) {
    unAnswered++
  }

  if (question3 == "worthy") {
    correctAnswers++;
  } else if (question3 == "mighty" || question3 == "superhuman" || question3 == "thor") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question3']:checked").val())) {
    unAnswered++
  }

  if (question4 == "falsTwo") {
    correctAnswers++;
  } else if (question4 == "truTwo") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question4']:checked").val())) {
    unAnswered++
  }

  if (question5 == "23") {
    correctAnswers++;
  } else if (question5 == "21" || question5 == "14" || question5 == "25") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question5']:checked").val())) {
    unAnswered++
  }

  if (question6 == "truThree") {
    correctAnswers++;
  } else if (question6 == "falsThree") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question6']:checked").val())) {
    unAnswered++
  }

  if (question7 == "falsFour") {
    correctAnswers++
  } else if (question7 == "truFour") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question7']:checked").val())) {
    unAnswered++
  }

  if (question8 == "falsFive") {
    correctAnswers++
  } else if (question8 == "truFive") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question8']:checked").val())) {
    unAnswered++
  }

  // This fills the scoreboard with the score totals.
  numberGuessedRight.innerText = correctAnswers;
  numberGuessedWrong.innerHTML = inCorrectAnswers;
  numberUnAnswered.innerText = unAnswered;
}