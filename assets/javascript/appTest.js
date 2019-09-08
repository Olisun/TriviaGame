$(document).ready(function() {
  var wiggly;
  var timeRemaining = 12;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unAnswered = 0;
  var gameOver = 'GAME OVER'
  var isGameOver = false;
  var radioButtonReset = $("input[type='radio']");
  var answerEarth = $("input[value='earth']");
  var answerAsgard = $("input[value='asgard']");
  var answerFive = $("input[value='five']");
  var answerSix = $("input[value='six']");

  $('#start-game').on('click', start);
  $('#done').on('click', done);

  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
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
    $('.radio-buttons').css("display", "inline");
    $('.score-board').css("display", "none");
    radioButtonReset.prop("checked", false);
    startQuiz();
    wiggly = setInterval(function() {
      var converted = timeConverter(timeRemaining);
      $('#countdown-clock').text(converted)
      timeRemaining--;
      if (timeRemaining === 0) {
        clearInterval(wiggly)
        done();
        timeRemaining = 12;
        $('#countdown-clock').text(gameOver);
      }
    }, 1000)
  }

  function startQuiz() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    timeRemaining = 12;
    $('#incorrect-answers').text(incorrectAnswers);
    $('#correct-answers').text(correctAnswers);

    answerEarth.on('click', earth);
    answerAsgard.on('click', asgard);
    answerFive.on('click', five);
    answerSix.on('click', six);
  }

  function earth() {
    var radioValue = answerEarth.val();
    if (radioValue) {
      incorrectAnswers++;
      answerEarth.off();
    }
  };

  function asgard() {
    var radioValue = answerAsgard.val();
    if (radioValue) {
      correctAnswers++;
      answerAsgard.off();
    }
  };

  function five() {
    var radioValue = answerFive.val();
    if (radioValue) {
      incorrectAnswers++;
      answerFive.off();
    }
  };

  function six() {
    var radioValue = answerSix.val();
    if (radioValue) {
      correctAnswers++;
      answerSix.off();
    }
  };

  function done() {
    $('.radio-buttons').css("display", "none");
    $('.score-board').css("display", "inline");
    $('#incorrect-answers').text(incorrectAnswers);
    $('#correct-answers').text(correctAnswers);
    clearInterval(wiggly);
  }
});