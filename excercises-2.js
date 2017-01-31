// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
    if (x > y) {
      return x;
    } else {
      return y;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

  var maxOfThree = function (x, y, z){
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >=z)  {
    return y;
  } else {
  return z;
  }
};


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  //changing the string to lower case
  var lowerChar = char.toLowerCase ();

  if (lowerChar === "a") {
    return true;
  } else if (lowerChar === "e") {
    return true;
  } else if (lowerChar === "i") {
    return true;
  } else if (lowerChar === "o") {
    return true;
  } else if (lowerChar === "u") {
    return true;
  } else {
    return false;
  }
};
// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---
function translate(phrase){
  var newPhrase = "";
  for (var i = 0; i < phrase.length; i++) {
    var letter = phrase[i];
    if (isVowel(letter) || letter === " ") {
     newPhrase += letter;
    } else {
     newPhrase += letter + "o" + letter;
    }
    }
  return newPhrase;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
  var newString = "";
  /*The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string.
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
  for (var i = string.length-1; i >= 0; i--) {
    newString += string[i];
  }
    return newString;
  };
