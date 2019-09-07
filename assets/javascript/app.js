$(document).ready(function() {

  var counter = 0;
  var correctAnswers = 0;
  var incorectAnswers = 0;
  var isGameOver = false;

  function startQuiz() {
    $('#asgard-btn').on('click', function(event) {
      correctAnswers++;
      $('#correct-answers').text(correctAnswers);
      $(this).off(event);

    });


  }

  // function keepScore() {

  // }

  startQuiz();



});