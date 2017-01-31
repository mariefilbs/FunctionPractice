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
function longestString(strings) {
  var newString = strings[0];
  for (var i = 0; i < strings[i].length; i++) {
    if (strings[i].length > newString.length) {
      newString = strings[i]; //udates the longest string
    }
  }
  return newString;
}



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
