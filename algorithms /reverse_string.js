var strToArr;
var reverseArray;
var arrToStr;

function reverseString(str) {
  strToArr = str.split(""); // Turn the string into an array
  reverseArray = strToArr.reverse(); // Reverse the array
  arrToStr = reverseArray.join(''); // Turn the reverse array into a reverse string

  return arrToStr;
}


reverseString("hello");
