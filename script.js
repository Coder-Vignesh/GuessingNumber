//My JS File
var correctGuess = false;//declare variable
var randomNumber = Math.floor(Math.random() * 6 ) + 1;//generate random number 1 to 6(also 1 and 6) 
var guess = prompt("I Guess a number between 1 and 6. What is it?");//Getting number

if (parseInt(guess) === randomNumber ) {
  //it will return true and i store in correctGuess varible
  correctGuess = true;
} 


if ( correctGuess ) {
    document.write('');
} else if (guess > randomNumber){ //if enter greater than correct number it will show smaller than number
  var guessTooBig = prompt("Sorry, the correct number is smaller than " + guess + ". Please try again");
} else if (guess < randomNumber){//if enter smaller than correct number it will show smaller than number
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
  document.write('<p>You Are Correct!!! the number is ' + randomNumber + '!</p>');//print text
} else {
    document.write('<p>Sorry You Are Wrong. The number was ' + randomNumber + '.</p>');
}

