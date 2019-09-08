$(document).ready(function() {
  $('#start-game').on('click', start);
  $('#done').on('click', done);

  var wiggly;
  var timeRemaining = 12;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unAnswered = 0;
  var gameOver = 'GAME OVER'
  var isGameOver = false;

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
    correctAnswers = 0;
    incorrectAnswers = 0;
    timeRemaining = 12;
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
    }, 1000 * 1)
  }

  function done() {
    $('.radio-buttons').css("display", "none");
    $('.score-board').css("display", "inline");
    $('#incorrect-answers').text(incorrectAnswers);
    $('#correct-answers').text(correctAnswers);

    clearInterval(wiggly);
  }

  function startQuiz() {
    $('#incorrect-answers').text(incorrectAnswers);
    $('#correct-answers').text(correctAnswers);

    $("input[value='earth']").click(function() {
      var radioValue = $("input[value='earth']:checked").val();
      if (radioValue) {
        incorrectAnswers++;
        $("input[value='earth']").off()
      }
    });

    $("input[value='asgard']").click(function() {
      var radioValue = $("input[value='asgard']:checked").val();
      if (radioValue) {
        correctAnswers++;
        $("input[value='asgard']").off()
      }
    });

    $("input[value='five']").click(function() {
      var radioValue = $("input[value='five']:checked").val();
      if (radioValue) {
        incorrectAnswers++;
        $("input[value='five']").off()
      }
    });

    $("input[value='six']").click(function() {
      var radioValue = $("input[value='six']:checked").val();
      if (radioValue) {
        correctAnswers++;
        $("input[value='six']").off()
      }
    });



  }






});