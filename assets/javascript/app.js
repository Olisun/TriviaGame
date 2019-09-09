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
  // var audio = $('#theme-music');

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

  scoreBoard.css("display", "none");
  timeClock.css("display", "none");
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
    startQuiz();
    startOnlyOnce();
    wiggly = setInterval(function() {
      var converted = clockFormatter(timeRemaining);
      $('#countdown-clock').text(converted)
      timeRemaining--;
      if (timeRemaining === 0) {
        clearInterval(wiggly)
        seeScore();
        timeRemaining = 12;
        scoreBoard.css("display", "block");
        timeClock.css("display", "none");
      }
    }, 1000 * 1)
  }

  function startOnlyOnce() {
    if (isGameRunning = true) {
      $('#start-game').off()
    }
  }

  function startQuiz() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    timeRemaining = 12;
    timeClock.css("display", "block");
    $('#incorrect-answers').text(incorrectAnswers);
    $('#correct-answers').text(correctAnswers);
  }

  answerRyanG.on('click', ryanG);
  answerSebastianS.on('click', sebastianS);
  answerSebastianB.on('click', sebastianB);
  answerSteveB.on('click', steveB);

  answerTruOne.on('click', truOne);
  answerFalsOne.on('click', falsOne);

  answerMighty.on('click', mighty);
  answerSuperH.on('click', superH);
  answerWorthy.on('click', worthy);
  answerThor.on('click', thor);

  answerTruTwo.on('click', truTwo);
  answerfalseTwo.on('click', falseTwo);

  answerTwentyThree.on('click', twentyThree);
  answerTwentyOne.on('click', twentyOne);
  answerFourteen.on('click', fourteen);
  answerTwentyFive.on('click', twentyFive);

  answerTruThree.on('click', truThree);
  answerFalsThree.on('click', falsThree);

  answerTruFour.on('click', truFour);
  answerFalsFour.on('click', falsFour);

  answerTruFive.on('click', truFive);
  answerFalsFive.on('click', falsFive);


  function ryanG() {
    var radioValue = answerRyanG.val();
    if (radioValue) {
      incorrectAnswers++;
      answerRyanG.off();
    }
  };

  function sebastianS() {
    var radioValue = answerSebastianS.val();
    if (radioValue) {
      correctAnswers++;
      answerSebastianS.off();
    }
  };

  function sebastianB() {
    var radioValue = answerSebastianB.val();
    if (radioValue) {
      incorrectAnswers++;
      answerSebastianB.off();
    }
  };

  function steveB() {
    var radioValue = answerSteveB.val();
    if (radioValue) {
      incorrectAnswers++;
      answerSteveB.off();
    }
  };

  var isAnswerTrueOneClicked = false;




  function truOne() {
    var radioValue = answerTruOne.val();
    isAnswerTrueOneClicked = true;
    if (radioValue) {
      incorrectAnswers++;
      answerTruOne.off();
    }
  };

  answerFalsOne.on('click', function() {
    var radioValue = answerFalsOne.val();
    if (radioValue) {
      correctAnswers++;
      answerFalsOne.off();
    }
    // } else if (radioValue || isAnswerTrueOneClicked == true) {
    //   correctAnswers++;
    //   incorrectAnswers--;
    //   answerFalsOne.off();
    // } else if (isAnswerTrueOneClicked == true) {
    //   alert('true')
    // }
  });

  function mighty() {
    var radioValue = answerMighty.val();
    if (radioValue) {
      incorrectAnswers++;
      answerMighty.off();
    }
  };

  function superH() {
    var radioValue = answerSuperH.val();
    if (radioValue) {
      incorrectAnswers++;
      answerSuperH.off();
    }
  };

  function worthy() {
    var radioValue = answerWorthy.val();
    if (radioValue) {
      correctAnswers++;
      answerWorthy.off();
    }
  };

  function thor() {
    var radioValue = answerThor.val();
    if (radioValue) {
      incorrectAnswers++;
      answerThor.off();
    }
  };

  function truTwo() {
    var radioValue = answerTruTwo.val();
    if (radioValue) {
      incorrectAnswers++;
      answerTruTwo.off();
    }
  };

  function falsTwo() {
    var radioValue = answerFalsTwo.val();
    if (radioValue) {
      correctAnswers++;
      answerFalsTwo.off();
    }
  };

  function truThree() {
    var radioValue = answerTruThree.val();
    if (radioValue) {
      correctAnswers++;
      answerTruThree.off();
    }
  };

  function falsThree() {
    var radioValue = answerFalsThree.val();
    if (radioValue) {
      incorrectAnswers++;
      answerFalsThree.off();
    }
  };

  function truFour() {
    var radioValue = answerTruFour.val();
    if (radioValue) {
      incorrectAnswers++;
      answerTruFour.off();
    }
  };

  function falsFour() {
    var radioValue = answerFalsFour.val();
    if (radioValue) {
      correctAnswers++;
      answerFalsFour.off();
    }
  };

  function truFive() {
    var radioValue = answerTruFive.val();
    if (radioValue) {
      correctAnswers++;
      answerTruFive.off();
    }
  };

  function falsFive() {
    var radioValue = answerFalsFive.val();
    if (radioValue) {
      incorrectAnswers++;
      answerFalsFive.off();
    }
  };
  // -----
  function twentyThree() {
    var radioValue = answerTwentyThree.val();
    if (radioValue) {
      correctAnswers++;
      answerTwentyThree.off();
    }
  };

  function twentyOne() {
    var radioValue = answerTwentyOne.val();
    if (radioValue) {
      incorrectAnswers++;
      answerTwentyOne.off();
    }
  };

  function fourteen() {
    var radioValue = answerFourteen.val();
    if (radioValue) {
      incorrectAnswers++;
      answerFourteen.off();
    }
  };

  function twentyFive() {
    var radioValue = answerTwentyFive.val();
    if (radioValue) {
      incorrectAnswers++;
      answerTwentyFive.off();
    }
  };


  function seeScore() {
    $('#incorrect-answers').text(incorrectAnswers);
    $('#correct-answers').text(correctAnswers);
    isGameRunning = false;
    scoreBoard.css("display", "block");
    timeClock.css("display", "none");
    clearInterval(wiggly);
  }

  function reStart() {
    if (isGameRunning = false) {
      $('#start-game').on('click', start);
    }
  }

  reStart();

});