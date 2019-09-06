var hello = 'Hello World'
var question = 'Whats your name?'
var goodbye = 'Goodbye'
var counter = 10;

setTimeout(function firstGreeting() {
  $('#test1').append(hello)
}, 1000 * 1)

setTimeout(function firstGreeting() {
  $('#test1').empty();
}, 1000 * 2)

setTimeout(function secondGreeting() {
  $('#test1').append(question)
}, 1000 * 3)

setTimeout(function firstGreeting() {
  $('#test1').empty();
}, 1000 * 4)

setTimeout(function thirdGreeting() {
  $('#test1').append(goodbye)
}, 1000 * 5)


// function greeting() {
//   var wiggly = setInterval(function() {
//     $('#test1').text(counter)
//     counter--
//     if (counter === 0) {
//       clearInterval(wiggly)
//     }
//   }, 1000 * 1)
// }

// greeting()