
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt("I Guess a number between 1 and 6. What is it?");

if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} 


if ( correctGuess ) {
    document.write('');
} else if (guess > randomNumber){ 
  var guessTooBig = prompt("Sorry, the correct number is smaller than " + guess + ". Please try again");
} else if (guess < randomNumber){
  var guessTooSmall = prompt("Sorry, the correct number is bigger than " + guess + ". Please try again");
} else {document.write(" ")
}



if (parseInt(guessTooSmall) === randomNumber ) {
 correctGuess = true 
}
if (parseInt(guessTooBig) === randomNumber ) {
 correctGuess = true 
}

if (correctGuess) {
  document.write('<p>You Are Correct!!! the number is ' + randomNumber + '!</p>');
} else {
    document.write('<p>Sorry You Are Wrong. The number was ' + randomNumber + '.</p>');
}

