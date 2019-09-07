$(document).ready(function() {
  var counter = 12;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var gameOver = 'GAME OVER'
  var isGameOver = false;

  $('#start-game').on('click', function() {
    var wiggly = setInterval(function() {
      $('#countdown-clock').text(counter)
      counter--
      if (counter === 0) {
        clearInterval(wiggly)
        counter = 12;
        $('#countdown-clock').text(gameOver);
      }
    }, 1000 * 1)
  })

  // function countDown() {
  //   var wiggly = setInterval(function() {
  //     $('#countdown-clock').text(counter)
  //     counter--
  //     if (counter === 0) {
  //       clearInterval(wiggly)
  //       $('#countdown-clock').text(gameOver);
  //     }
  //   }, 1000 * 1)
  // }

  function startQiuz() {

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
  startQiuz();



});