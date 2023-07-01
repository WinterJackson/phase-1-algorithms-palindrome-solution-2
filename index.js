function isPalindrome (word){
  let reversedWord =''
  for (let i = word.length - 1; i>=0; i--){
    reversedWord += word[i];
  }
  
  if (reversedWord === word) {
    return true;
  } else{
    return false;
  }
}

isPalindrome('bob');

/* 
  Add your pseudocode here
  function isPalindrome(word):
    create constant reversedWord and turn it into an empty string
      iterate over the characters of the word starting from the last character 
      and append each character to reversedWord
    
    if reversedWord equals word:
        return true
    else:
        return false
*/

/*
  Add written explanation of your solution here 
    It initializes a variable called reversedWord to an empty string. 
    Then, it iterates over the characters of the word starting from the last character (index word.length - 1) 
    and appends each character to reversedWord.
    After the loop, it checks if the reversedWord is equal to the original word.
    If they are equal, it returns true indicating that the word is a palindrome. 
    Otherwise, it returns false.
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
