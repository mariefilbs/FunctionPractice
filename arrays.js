// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
function largest(numbers) {
  var largestNum = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNum) {
      largestNum = numbers[i]; // updates the largest number
    }
  }
  return largestNum;
};
 //CAN WE USE MATH.MAX???

// ---------------------------
// 2. Find longest string
// ---------------------------
var strings = ['this','is','a','collection','of','words'];


function findLongest (strings) {
  var longestString = strings[0];
  /*console.log(longestString);*/
  for (var i=0; i < strings.length; i++) {
    /*console.log(strings[4]);*/
    if(strings[i].length >= longestString.length) {
      longestString = strings[i];
      /*console.log(longestString);*/
    }


  } return longestString;
}

/*back to index of 0 again, stop the loop and store the new index into the longestString. Print
out the results of longestString
*/




// ---------------------------
// 3. Find even numbers
// ---------------------------



// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
