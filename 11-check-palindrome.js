/*
from https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ/
Given the string, check if it is a palindrome.
*/

function checkPalindrome(inputString) {
  let reverseString = inputString.split('').reverse().join('');
  return reverseString === inputString;
}
