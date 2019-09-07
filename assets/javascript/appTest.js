$(document).ready(function() {

  var firstGreeting = 'Hello World'
  var secondGreeting = 'How are you doing today?'
  var thirdGreeting = 'What a beautiful day it is!'
  var counter = 10;
  var gameOver = 'GAME OVER';
  var score = 0;


  // Function to append 3 strings to the DOM in sequential order

  // function helloWord() {
  //   setTimeout(function() {
  //     $('#test1').append(firstGreeting)
  //   }, 1000 * 1)

  //   setTimeout(function() {
  //     $('#test1').text('');
  //   }, 1000 * 2)

  //   setTimeout(function() {
  //     $('#test1').append(secondGreeting)
  //   }, 1000 * 3)

  //   setTimeout(function() {
  //     $('#test1').text('');
  //   }, 1000 * 4)

  //   setTimeout(function() {
  //     $('#test1').append(thirdGreeting)
  //   }, 1000 * 5)
  // }

  // helloWord();

  // Count down timer

  function countDown() {
    var wiggly = setInterval(function() {
      $('#test2').text(counter)
      counter--
      if (counter === 0) {
        clearInterval(wiggly)
        $('#test2').text(gameOver)
      }
    }, 1000 * 1)
  }

  countDown();


});