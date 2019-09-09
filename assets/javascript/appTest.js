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

  var answerRyanG = $("input[value='ryan-gosling']");
  var answerSebastianS = $("input[value='sebastian-stan']");
  var answerSebastianB = $("input[value='sebastian-bach']");
  var answerSteveB = $("input[value='steve-buscemi']");
  var answerTruOne = $("input[value='truone']");
  var answerFalsOne = $("input[value='falsone']");
  var answerMighty = $("input[value='mighty']");
  var answerSuperH = $("input[value='superhuman']");
  var answerWorthy = $("input[value='worthy']");
  var answerThor = $("input[value='thor']");
  var answerTruTwo = $("input[value='truTwo']");
  var answerFalsTwo = $("input[value='falsTwo']");
  var answerTwentyThree = $("input[value='23']");
  var answerTwentyOne = $("input[value='21']");
  var answerFourteen = $("input[value='14']");
  var answerTwentyFive = $("input[value='25']");
  var answerTruThree = $("input[value='truThree']");
  var answerFalsThree = $("input[value='falsThree']");
  var answerTruFour = $("input[value='truFour']");
  var answerFalsFour = $("input[value='falsFour']");
  var answerTruFive = $("input[value='truFive']");
  var answerFalsFive = $("input[value='falsFive']");

  var isRadioRyanClicked = false;
  var isRadioWinterSoldierClicked = false;
  var isRadioMotleyCrewClicked = false;
  var isRadioSteveClicked = false;
  var isTruOneClicked = false;
  var isFalseOneClicked = false;
  var isMightyClicked = false;
  var isSuperClicked = false;
  var isWorthyClicked = false;
  var isThorClicked = false;
  var isTruTwoClicked = false;
  var isFalseTwoClicked = false;
  var isTwentyThreeClicked = false;
  var isTwentyOneClicked = false;
  var isFourteenClicked = false;
  var isTwentyFiveClicked = false;
  var isTruThreeClicked = false;
  var isFalseThreeClicked = false;
  var isTruFourClicked = false;
  var isFalseFourClicked = false;
  var isTruFiveClicked = false;
  var isFalseFiveClicked = false;

  // audio.play();

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
    radioButtonReset.prop("checked", false);
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


    answerRyanG.on('click', function() {
      var radioValue = answerRyanG.val();
      if (radioValue) {
        isRadioRyanClicked = true;
        incorrectAnswers++;
        answerRyanG.off();
      };

      if (isRadioRyanClicked = true) {
        alert('Ryan')
      };
    });

    answerSebastianS.on('click', function() {
      var radioValue = answerSebastianS.val();
      if (radioValue) {
        isRadioWinterSoldierClicked = true;
        correctAnswers++;
        answerSebastianS.off();
      };

      if (isRadioWinterSoldierClicked = true) {
        alert('Winter Soldier')
      };
    });

    answerSebastianB.on('click', function() {
      var radioValue = answerSebastianB.val();
      if (radioValue) {
        isRadioMotleyCrewClicked = true;
        incorrectAnswers++;
        answerSebastianB.off();
      }

      if (isRadioMotleyCrewClicked = true) {
        alert('Mothley Crew')
      };
    });

    answerSteveB.on('click', function() {
      var radioValue = answerSteveB.val();
      if (radioValue) {
        isRadioSteveClicked = true;
        incorrectAnswers++;
        answerSteveB.off();
      }

      if (isRadioSteveClicked = true) {
        alert('steve')
      };
    });

    answerTruOne.on('click', function() {
      var radioValue = answerTruOne.val();
      if (radioValue) {
        isTruOneClicked = true
        incorrectAnswers++;
        answerTruOne.off();
      };

      if (isTruOneClicked) {
        alert('TruOne')
      };


    });

    answerFalsOne.on('click', function() {
      var radioValue = answerFalsOne.val();
      if (radioValue) {
        isFalseOneClicked = true;
        correctAnswers++;
        answerFalsOne.off();
      };

      if (isFalseOneClicked) {
        alert('FalseOne')
      };
    });

    answerMighty.on('click', function() {
      var radioValue = answerMighty.val();
      if (radioValue) {
        incorrectAnswers++;
        answerMighty.off();
      };

      if (isMightyClicked = true) {
        alert('Mighty')
      };
    });

    answerSuperH.on('click', function() {
      var radioValue = answerSuperH.val();
      if (radioValue) {
        incorrectAnswers++;
        answerSuperH.off();
      };

      if (isSuperClicked = true) {
        alert('Super')
      };
    });

    answerWorthy.on('click', function() {
      var radioValue = answerWorthy.val();
      if (radioValue) {
        correctAnswers++;
        answerWorthy.off();
      };

      if (isWorthyClicked = true) {
        alert('Worthy')
      };
    });

    answerThor.on('click', function() {
      var radioValue = answerThor.val();
      if (radioValue) {
        incorrectAnswers++;
        answerThor.off();
      };

      if (isThorClicked = true) {
        alert('Thor')
      };
    });

    answerTruTwo.on('click', function() {
      var radioValue = answerTruTwo.val();
      if (radioValue) {
        isTruTwoClicked = true;
        incorrectAnswers++;
        answerTruTwo.off();
      };

      if (isTruTwoClicked = true) {
        alert('True 2')
      };
    });

    answerFalsTwo.on('click', function() {
      var radioValue = answerFalsTwo.val();
      if (radioValue) {
        isFalseTwoClicked = true;
        correctAnswers++;
        answerFalsTwo.off();
      }

      if (isFalseTwoClicked = true) {
        alert('False2')
      };
    });

    answerTruThree.on('click', function() {
      var radioValue = answerTruThree.val();
      if (radioValue) {
        isTruThreeClicked = true;
        correctAnswers++;
        answerTruThree.off();
      };

      if (isTruThreeClicked = true) {
        alert('True3')
      };
    });

    answerFalsThree.on('click', function() {
      var radioValue = answerFalsThree.val();
      if (radioValue) {
        isFalseThreeClicked = true;
        incorrectAnswers++;
        answerFalsThree.off();
      };

      if (isFalseThreeClicked = true) {
        alert('False3')
      };
    });

    answerTruFour.on('click', function() {
      var radioValue = answerTruFour.val();
      if (radioValue) {
        isTruTwoClicked = true;
        incorrectAnswers++;
        answerTruFour.off();
      };

      if (isTruFourClicked = true) {
        alert('True4')
      };
    });

    answerFalsFour.on('click', function() {
      var radioValue = answerFalsFour.val();
      if (radioValue) {
        isFalseFourClicked = true;
        correctAnswers++;
        answerFalsFour.off();
      };

      if (isFalseFourClicked = true) {
        alert('False4')
      };
    });

    answerTruFive.on('click', function() {
      var radioValue = answerTruFive.val();
      if (radioValue) {
        isTruFiveClicked = true;
        correctAnswers++;
        answerTruFive.off();
      };

      if (isTruFiveClicked = true) {
        alert('True5')
      };
    });

    answerFalsFive.on('click', function() {
      var radioValue = answerFalsFive.val();
      if (radioValue) {
        isFalseFiveClicked = true;
        incorrectAnswers++;
        answerFalsFive.off();
      };

      if (isFalseFiveClicked = true) {
        alert('False5')
      };
    });

    answerTwentyThree.on('click', function() {
      var radioValue = answerTwentyThree.val();
      if (radioValue) {
        isTwentyThreeClicked = true;
        correctAnswers++;
        answerTwentyThree.off();
      };

      if (isTwentyThreeClicked = true) {
        alert('23')
      };
    });

    answerTwentyOne.on('click', function() {
      var radioValue = answerTwentyOne.val();
      if (radioValue) {
        isTwentyOneClicked = true;
        incorrectAnswers++;
        answerTwentyOne.off();
      };

      if (isTwentyThreeClicked = true) {
        alert('21')
      };
    });

    answerFourteen.on('click', function() {
      var radioValue = answerFourteen.val();
      if (radioValue) {
        isFourteenClicked = true;
        incorrectAnswers++;
        answerFourteen.off();
      };

      if (isFourteenClicked = true) {
        alert('14')
      };
    });

    answerTwentyFive.on('click', function() {
      var radioValue = answerTwentyFive.val();
      if (radioValue) {
        isTwentyFiveClicked = true;
        incorrectAnswers++;
        answerTwentyFive.off();
      };

      if (isTwentyFiveClicked = true) {
        alert('25')
      };
    });
  }

  function seeScore() {
    $('#incorrect-answers').text(incorrectAnswers);
    $('#correct-answers').text(correctAnswers);
    isGameRunning = false;
    clearInterval(wiggly);
  }

  function reStart() {
    if (isGameRunning = false) {
      $('#start-game').on('click', start);
    }
  }

  reStart();

});