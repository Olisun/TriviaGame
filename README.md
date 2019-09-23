# Trivia Game

## Page preview: 
![](assets/images/screen-shot.png)

## About the project:

We had to create a multiple choice and or true false game with the following specs:

  * Create a trivia form with multiple choice or true/false options (your choice).
    
  * The player will have a limited amount of time to finish the quiz.

  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

  * Don't let the player pick more than one answer per question.

  * A countdown timer for the game.

## Techologies used to build:
  * HTML
  * CSS
  * jQuery
  * Javascript

## Methodology:

The logic to accurately count up the incorrect scores and unanswered scores through me for a huge loop (pun not intended).  I went through several js file versions over the weekend.

I ended up sacrificing styling to get the logic down which I think I did that.  I had more grandoise plans heading into the weekend for the layout but as I struggled with the js, I had to focus on that.  If I get dinged on the styling, I'll understand.

The correct, incorrect and unanswered logic works.  The timer works.  I set the time to 70 seconds because I wanted to get the minute format down.

My problem was I initially built all the logic around each radio button as opposed creating a category for each question set.  After I did that Monday after class, everything fell in place.  I leaned on W3Schools and jQuery API docs for using forms and radio buttons.

I also added a markdown file for psuedo coding and basic brainstorming.

## Code Snippets I like:
I ran into initial bugs with the logic to calculate the correct scores for the quiz. My problem was that if the user clicked on a answer to a question but then changed their mind and clicked on another answer, the logic captured both inputs. After an entire weekend of trail and error, I refactored the code to base the logic around each set of questions as opposed to each specific answer. The final function is below.

```
function checkAnswers() {
  // These are local variables for this function
  var question1 = document.avengersQuiz.question1.value;
  var question2 = document.avengersQuiz.question2.value;
  var question3 = document.avengersQuiz.question3.value;
  var question4 = document.avengersQuiz.question4.value;
  var question5 = document.avengersQuiz.question5.value;
  var question6 = document.avengersQuiz.question6.value;
  var question7 = document.avengersQuiz.question7.value;
  var question8 = document.avengersQuiz.question8.value;
  var numberGuessedRight = document.getElementById('correct-answers');
  var numberGuessedWrong = document.getElementById('incorrect-answers');
  var numberUnAnswered = document.getElementById('unanswered');
  var correctAnswers = 0;
  var inCorrectAnswers = 0;
  var unAnswered = 0;

  // The last else if statement in each contition is from jQuery that I found in the jQuery API docs.
  if (question1 == "sebastian-stan") {
    correctAnswers++;
  } else if (question1 == "ryan-gosling" || question1 == "sebastian-bach" || question1 == "steve-buscemi") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question1']:checked").val())) {
    unAnswered++
  }

  if (question2 == "falsone") {
    correctAnswers++;
  } else if (question2 == "truone") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question2']:checked").val())) {
    unAnswered++
  }

  if (question3 == "worthy") {
    correctAnswers++;
  } else if (question3 == "mighty" || question3 == "superhuman" || question3 == "thor") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question3']:checked").val())) {
    unAnswered++
  }

  if (question4 == "falsTwo") {
    correctAnswers++;
  } else if (question4 == "truTwo") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question4']:checked").val())) {
    unAnswered++
  }

  if (question5 == "23") {
    correctAnswers++;
  } else if (question5 == "21" || question5 == "14" || question5 == "25") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question5']:checked").val())) {
    unAnswered++
  }

  if (question6 == "truThree") {
    correctAnswers++;
  } else if (question6 == "falsThree") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question6']:checked").val())) {
    unAnswered++
  }

  if (question7 == "falsFour") {
    correctAnswers++
  } else if (question7 == "truFour") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question7']:checked").val())) {
    unAnswered++
  }

  if (question8 == "falsFive") {
    correctAnswers++
  } else if (question8 == "truFive") {
    inCorrectAnswers++;
  } else if ((!$("input[name='question8']:checked").val())) {
    unAnswered++
  }

  // This fills the scoreboard with the score totals.
  numberGuessedRight.innerText = correctAnswers;
  numberGuessedWrong.innerHTML = inCorrectAnswers;
  numberUnAnswered.innerText = unAnswered;
}
```
