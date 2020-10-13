/*
from: https://app.codesignal.com/interview-practice/task/yXDg4rAk9ooEjLjdj
You have been given a string s, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments:

Put a single space between the words.
Convert the uppercase letters to lowercase.
*/
function amendTheSentence(s) {
  // const capitalLetters = new RegExp('[A-Z]','g')
  let splitString = s.split('');
  let result = []
  result.push(splitString[0].toLowerCase());
  for (let i = 1; i < splitString.length; i++) {
      if (splitString[i] === splitString[i].toUpperCase()){
          result.push(` ${splitString[i].toLowerCase()}`)
      } else {
          result.push(splitString[i])
      }
  } return result.join('')
}
