$(document).ready(function() {

  var correctAnswers;
  var incorectAnswers;
  var isGameOver = false;


  // function startQuiz() {

  //   $('#asgard-btn').click(function(event) {
  //     if (this.id === 'asgard-btn') {
  //       correctAnswers = 0;
  //       correctAnswers++;
  //       $('#correct-answers').text(correctAnswers);
  //       $(this).css("background-color", "red");
  //       $(this).css("height", "15px");
  //       $(this).off(event);
  //       nebulaBtn.css("background-color", "none");
  //     }
  //   });

  //   $('#nebula-btn').click(function(event) {
  //     if (this.id === 'nebula-btn') {
  //       incorrectAnswers = 0;
  //       incorrectAnswers++;
  //       $('#incorrect-answers').text(incorrectAnswers);
  //       $(this).css("background-color", "red");
  //       $(this).css("height", "15px");
  //       $(this).off(event);
  //     }
  //   });
  // }

  $("input[value='earth']").click(function() {
    var radioValue = $("input[value='earth']:checked").val();
    if (radioValue) {
      alert('Earth radio checked')
      correctAnswers = 0;
      correctAnswers++;
      $('#correct-answers').text(correctAnswers);
      $("input[value='earth']").off()
    }
  });

  $("input[value='asgard']").click(function() {
    var radioValue = $("input[value='asgard']:checked").val();
    if (radioValue) {
      alert('Asgard radio checked')
      incorrectAnswers = 0;
      incorrectAnswers++;
      $('#incorrect-answers').text(incorrectAnswers);
      $("input[value='asgard']").off()
    }
  });

  // $("#earth").click(function() {
  //   var value = $("input[value='earth']:checked").val();
  //   alert(val);
  // });

});

// startQuiz();