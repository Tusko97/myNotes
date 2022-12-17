function isPalindrome(word) {
    const reversedWord = reverseString(word);

    if (word === reversedWord) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isPalindrome()


// Some languages, like Ruby, have built-in methods for reversing strings, but JavaScript doesn't. However, JavaScript does have a method for reversing arrays, so for our reverseString implementation, we'll need to do the following:

// create an array from the input string
// reverse the array
// create a string from the reversed array
// return the reversed string


// Here's how we can implement that using some built-in JavaScript methods:

function reverseString(word) {
    // create an array from the input string
    const wordArray = word.split("");
    // reverse the array
    const reversedWordArray = wordArray.reverse();
    // create a string from the reversed array
    const reversedWord = reversedWordArray.join("");
    // return the reversed string
    return reversedWord;
  }

// We can also test our reverseString function to ensure it does what we expect, so that we can use it with confidence in our isPalindrome function:
  console.log("Expecting: ih");
console.log("=>", reverseString("hi"));

console.log("");

console.log("Expecting: tobor");
console.log("=>", reverseString("robot"));

console.log("");

console.log("Expecting: mom");
console.log("=>", reverseString("mom"));

// Here's what our completed code looks like all together:

function reverseString(word) {
    // create an array from the input string
    const wordArray = word.split("");
    // reverse the array
    const reversedWordArray = wordArray.reverse();
    // create a string from the reversed array
    const reversedWord = reversedWordArray.join("");
    // return the reversed string
    return reversedWord;
  }
  
  function isPalindrome(word) {
    // reverse the input string
    const reversedWord = reverseString(word);
    // if the reversed string is the same as the input
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }

  
  // We can also save on a few variable declarations by using method chaining in our reverseString function:
  function reverseString(word) {
    return word.split("").reverse().join("");
  }