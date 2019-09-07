$(document).ready(function() {

  var counter = 0;
  var correctAnswers;
  var incorectAnswers;
  var isGameOver = false;
  var nebulaBtn = $('#nebula-btn')

  function startQuiz() {

    $('#asgard-btn').click(function(event) {
      if (this.id === 'asgard-btn') {
        correctAnswers = 0;
        correctAnswers++;
        $('#correct-answers').text(correctAnswers);
        $(this).css("background-color", "red");
        $(this).css("height", "15px");
        $(this).off(event);
        nebulaBtn.css("background-color", "none");
      }
    });

    $('#nebula-btn').click(function(event) {
      if (this.id === 'nebula-btn') {
        incorrectAnswers = 0;
        incorrectAnswers++;
        $('#incorrect-answers').text(incorrectAnswers);
        $(this).css("background-color", "red");
        $(this).css("height", "15px");
        $(this).off(event);
      }
    });
  }

  // function incorrect() {

  //   $('#asgard-btn').on('click', function(event) {
  //     correctAnswers++;
  //     $('#correct-answers').text(correctAnswers);
  //     $(this).css("background-color", "red");
  //     $(this).css("height", "15px");
  //     $(this).off(event);
  //   });

  //   $('#rolling-stones-btn').on('click', function(event) {
  //     correctAnswers++;
  //     $('#correct-answers').text(correctAnswers);
  //     $(this).off(event);
  //     $(this).css("background-color", "red");
  //     $(this).css("height", "15px");
  //   });
  // }
  // function keepScore() {

  // }

  startQuiz();



});