function isPalindrome(word) {
  // Write your algorithm here
  if(word.length < 2) return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }

    return true
  
}

/* 
  Add your pseudocode here

  loop through the string
  check if last element != element at beginning
  if elements do not match return false
  else return true
  increment start
  decrement end
*/


/*
  Add written explanation of your solution here
  created a function that allows a user to input a word. 
  this is done by determining whether the word's length is under two. 
  Both an empty string and a one-letter word are palindromes. 
  I consequently return true if the word is shorter than two characters in length. 
  If the string is longer than or equal to 2, I loop through it once. 
  Since this occurs in O(n) time, I don't need any additional space to execute the code. 
  When the last element does not match the initial element, I return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
