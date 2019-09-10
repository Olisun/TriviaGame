$(document).ready(function() {
  var wiggly;
  var timeRemaining = 12;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unAnswered = 0;
  var gameOver = 'GAME OVER'
  var isGameRunning = false;
  var radioButtonReset = $("input[type='radio']");
  var scoreBoard = $('.score-board');
  var timeClock = $('.timer-button-container');
  var audio = $('#theme-music');

  var radioSubmit = $("input[value='Submit']");


  var question1 = document.avengersQuiz.question1.value;
  var question2 = document.avengersQuiz.question2.value;
  var question3 = document.avengersQuiz.question3.value;


  $("input").on("click", function() {
    $("#log").html($("input:checked").val() + " is checked!");
  });

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
    incorrectAnswers = 0;
    unAnswered = 0;
    isGameRunning = true;
    startOnlyOnce();
    seeScore();
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
    $('#incorrect-answers').text(incorrectAnswers);
    $('#correct-answers').text(correctAnswers);
    isGameRunning = false;
    if (question1 == "sebastian-stan") {
      correctAnswers++;
    }
    if (question2 == "falsone") {
      correctAnswers++;
    }
    if (question3 == "worthy") {
      correctAnswers++;
    }
    clearInterval(wiggly);
  }

  function reStart() {
    if (isGameRunning = false) {
      $('#start-game').on('click', start);
    }
  }




  reStart();

});

$("input").on("click", function() {
  $("#log").html($("input:checked").val() + " is checked!");
});