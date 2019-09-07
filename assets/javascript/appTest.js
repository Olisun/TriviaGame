$(document).ready(function() {
  $('#start-game').on('click', start);


  var timeRemaining = 132;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
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
    var wiggly = setInterval(function() {
      var converted = timeConverter(timeRemaining);
      $('#countdown-clock').text(converted)
      timeRemaining--;
      if (timeRemaining === 0) {
        clearInterval(wiggly)
        timeRemaining = 132;
        $('#countdown-clock').text(gameOver);
      }
    }, 1000 * 1)
  }





  function startQuiz() {

    $("input[value='earth']").click(function() {
      var radioValue = $("input[value='earth']:checked").val();
      if (radioValue) {
        alert('Earth radio checked')
          // incorrectAnswers = 0;
        incorrectAnswers++;
        $('#incorrect-answers').text(incorrectAnswers);
        $("input[value='earth']").off()
      }
    });

    $("input[value='asgard']").click(function() {
      var radioValue = $("input[value='asgard']:checked").val();
      if (radioValue) {
        alert('Asgard radio checked')
          // correctAnswers = 0;
        correctAnswers++;
        $('#correct-answers').text(correctAnswers);
        $("input[value='asgard']").off()
      }
    });

    $("input[value='five']").click(function() {
      var radioValue = $("input[value='five']:checked").val();
      if (radioValue) {
        alert('5-stones radio checked')
          // incorrectAnswers = 0;
        incorrectAnswers++;
        $('#incorrect-answers').text(incorrectAnswers);
        $("input[value='five']").off()
      }
    });

    $("input[value='six']").click(function() {
      var radioValue = $("input[value='six']:checked").val();
      if (radioValue) {
        alert('6-stones radio checked')
          // correctAnswers = 0;
        correctAnswers++;
        $('#correct-answers').text(correctAnswers);
        $("input[value='six']").off()
      }
    });


  }

  // startTimer();
  // countDown();
  startQuiz();
  count();
  timeConverter();



});